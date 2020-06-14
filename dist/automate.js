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
        this.$$mainView = new _render__WEBPACK_IMPORTED_MODULE_2__["Renderer"](this.$$parent).render(template, this.$container);
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      if (this.$$mainView) {
        this.$$mainView.destroy();
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
  key: 'bindHtml'
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
  key: 'bind'
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
  key: 'hide'
}), _dec(_class = /*#__PURE__*/function (_Directive) {
  _inherits(HideDirective, _Directive);

  function HideDirective() {
    _classCallCheck(this, HideDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(HideDirective).call(this));
  }

  _createClass(HideDirective, [{
    key: "onChange",
    value: function onChange(value) {
      this[value ? '$hideElement' : '$showElement']();
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
  key: 'if'
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
      this[value ? '$appendElement' : '$removeElement']();
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
  key: 'model'
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
  key: 'repeat'
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
  key: 'show'
}), _dec(_class = /*#__PURE__*/function (_Directive) {
  _inherits(ShowDirective, _Directive);

  function ShowDirective() {
    _classCallCheck(this, ShowDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShowDirective).call(this));
  }

  _createClass(ShowDirective, [{
    key: "onChange",
    value: function onChange(value) {
      this[value ? '$showElement' : '$hideElement']();
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
  key: 'checked'
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
  key: 'disabled'
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
  key: 'readonly'
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
  key: 'selected'
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
  key: 'classEven'
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
  key: 'classOdd'
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
  key: 'class'
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
  key: 'styleEven'
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
  key: 'styleOdd'
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
  key: 'style'
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
  key: 'switchDefault'
}), _dec(_class = /*#__PURE__*/function (_Directive) {
  _inherits(SwitchDefaultDirective, _Directive);

  function SwitchDefaultDirective() {
    var _this;

    _classCallCheck(this, SwitchDefaultDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SwitchDefaultDirective).call(this));
    _this.switchCtrl = null;
    _this.$placeholder = document.createComment('switch-default');
    return _this;
  }

  _createClass(SwitchDefaultDirective, [{
    key: "afterLink",
    value: function afterLink() {
      var _this2 = this;

      this.switchCtrl = this.$seekUpDirective('switch');

      if (this.switchCtrl == null) {
        throw new Error('Require m-switch directive');
      }

      this.switchCtrl.matchDefault.on(function () {
        _this2[_this2.switchCtrl.defaultMatched ? '$appendElement' : '$removeElement']();
      });

      if (!this.switchCtrl.defaultMatched) {
        this.$removeElement();
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
  key: 'switchWhen'
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
    _this.$placeholder = document.createComment('switch-when');
    return _this;
  }

  _createClass(SwitchWhenDirective, [{
    key: "afterLink",
    value: function afterLink() {
      var _this2 = this;

      this.switchCtrl = this.$seekUpDirective('switch');

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

      this[matched ? '$appendElement' : '$removeElement']();
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
  key: 'switch'
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
/*! exports provided: isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isFormData, toNumber, lowercase, uppercase, convertToHumpName, convertFromHumpName, copy, extend, merge, forEach, some, remove, concat, orderBy, orderByDescending, object, inherit, hasProperty, getProperty, setProperty, format, escapeHtml, Local, Message, events, isMessage, isProxy, getTarget, handler, Observer, parseOptions, AST, NullExpressionNode, AstNode, AssignmentExpressionNode, BinaryExpressionNode, CallExpressionNode, ConditionalExpressionNode, ExpressionStatementNode, IdentifierNode, LiteralNode, LogicalExpressionNode, MemberExpressionNode, ObjectExpressionNode, ProgramNode, PropertyNode, UnaryExpressionNode, ArrayExpressionNode, ExpLexer, ExpParser, lexExp, parseExp, ExpBuilder, Evaluator, Analyser, nodeType, VNode, VAttr, VCmnt, VElm, VText, VType, lexTpl, parseTpl, isVElm, isVAttr, isVText, isVComment, TplBuilder, Binding, Expression, Renderer, Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, injector, component, directive, filter, service, ClassDirective, StyleDirective, Injector */
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
/* empty/unused harmony star reexport *//* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service */ "./src/service/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return _service__WEBPACK_IMPORTED_MODULE_10__["Injector"]; });













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
    value: function render(template, container) {
      var _this = this;

      var hasContainer = container != null;

      if (hasContainer) {
        this.view = new _view__WEBPACK_IMPORTED_MODULE_6__["SingleNodeView"]();
      } else {
        // must set a root element for directive life cycle "afterLink" hoops
        container = document.createDocumentFragment();
        this.view = new _view__WEBPACK_IMPORTED_MODULE_6__["MultipleNodeView"]();
      }

      this.view.vnodes = this.parser.parseTemplate(template);
      this.compileNodes(this.view.vnodes); // this.entity.directives.forEach(directive => directive.$prelink());

      this.linkNodes(this.view.vnodes).forEach(function (node) {
        return container.appendChild(node);
      }); // call directive life cycle hoops

      this.view.directives.forEach(function (directive) {
        return directive.$postlink();
      });

      if (hasContainer) {
        this.view.node = container;
      } else {
        // cache the generated elements
        _dom__WEBPACK_IMPORTED_MODULE_1__["getChildrenOfElement"](container).forEach(function (node) {
          return _this.view.nodes.push(node);
        });
      }

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
        instance.$serContainer(velm.elm);
        instance.$setSlot(elmData.slots);
        instance.$render();
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
/*! exports provided: SingleNodeView, MultipleNodeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleNodeView", function() { return SingleNodeView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleNodeView", function() { return MultipleNodeView; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var View = /*#__PURE__*/function () {
  function View() {
    _classCallCheck(this, View);

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
      this.onDestroy && this.onDestroy();
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
    }
  }]);

  return View;
}();

var SingleNodeView = /*#__PURE__*/function (_View) {
  _inherits(SingleNodeView, _View);

  _createClass(SingleNodeView, [{
    key: "content",
    get: function get() {
      return this.node;
    }
  }]);

  function SingleNodeView() {
    var _this;

    _classCallCheck(this, SingleNodeView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SingleNodeView).call(this));
    _this.node = null;
    return _this;
  }

  return SingleNodeView;
}(View);
var MultipleNodeView = /*#__PURE__*/function (_View2) {
  _inherits(MultipleNodeView, _View2);

  _createClass(MultipleNodeView, [{
    key: "content",
    get: function get() {
      var content = document.createDocumentFragment();
      this.nodes.forEach(function (node) {
        return content.appendChild(node);
      });
      return content;
    }
  }]);

  function MultipleNodeView() {
    var _this2;

    _classCallCheck(this, MultipleNodeView);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MultipleNodeView).call(this));
    _this2.nodes = [];
    return _this2;
  }

  _createClass(MultipleNodeView, [{
    key: "onDestroy",
    value: function onDestroy() {
      this.nodes.length = 0;
    }
  }]);

  return MultipleNodeView;
}(View);

/***/ }),

/***/ "./src/service/index.js":
/*!******************************!*\
  !*** ./src/service/index.js ***!
  \******************************/
/*! exports provided: Injector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./injector */ "./src/service/injector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return _injector__WEBPACK_IMPORTED_MODULE_0__["Injector"]; });



/***/ }),

/***/ "./src/service/injector.js":
/*!*********************************!*\
  !*** ./src/service/injector.js ***!
  \*********************************/
/*! exports provided: Injector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return Injector; });
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



var Injector = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["service"])({
  namespace: 'automate',
  key: 'injector'
}), _dec(_class = /*#__PURE__*/function (_Service) {
  _inherits(Injector, _Service);

  function Injector() {
    _classCallCheck(this, Injector);

    return _possibleConstructorReturn(this, _getPrototypeOf(Injector).call(this));
  }

  _createClass(Injector, [{
    key: "parseComponent",
    value: function parseComponent(name, using, defaultNs) {
      return _view__WEBPACK_IMPORTED_MODULE_0__["injector"].parseComponent(name, using, defaultNs);
    }
  }, {
    key: "parseDirective",
    value: function parseDirective(name, using, defaultNs) {
      return _view__WEBPACK_IMPORTED_MODULE_0__["injector"].parseDirective(name, using, defaultNs);
    }
  }, {
    key: "parseService",
    value: function parseService(name, using, defaultNs) {
      return _view__WEBPACK_IMPORTED_MODULE_0__["injector"].parseService(name, using, defaultNs);
    }
  }, {
    key: "parseFilter",
    value: function parseFilter(name, using, defaultNs) {
      return _view__WEBPACK_IMPORTED_MODULE_0__["injector"].parseFilter(name, using, defaultNs);
    }
  }]);

  return Injector;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Service"])) || _class);

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

    i++;
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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css */ "./src/css.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/core/index.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parser */ "./src/view/parser.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observer */ "./src/observer/index.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../render */ "./src/render/index.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../exp */ "./src/exp/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










function componentConstructor(data) {
  this.$$velm = null;
  this.$$parent = null;
  this.$$children = [];
  this.$$mainView = null;
  this.$parser = new _parser__WEBPACK_IMPORTED_MODULE_4__["Parser"](this);
  this.$observer = new _observer__WEBPACK_IMPORTED_MODULE_5__["Observer"](this);
  this.$data = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](this.$$metadata, data);
  this.$container = this.$makeContainer();
  this.slots = {};
  this.events = {};
  this.props = this.$delegate({});
  this.state = this.$delegate({});
  _injector__WEBPACK_IMPORTED_MODULE_7__["injector"].injectServices(this, this.$data);
}
var Component = /*#__PURE__*/function () {
  _createClass(Component, [{
    key: "$delegate",
    value: function $delegate(target) {
      return new Proxy(target, _observer__WEBPACK_IMPORTED_MODULE_5__["handler"]);
    }
  }, {
    key: "$setSlot",
    value: function $setSlot(slots) {
      this.slots = slots || {};
    }
  }, {
    key: "$serContainer",
    value: function $serContainer(elm) {
      this.$container = elm;
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
      return _injector__WEBPACK_IMPORTED_MODULE_7__["injector"];
    }
  }]);

  function Component(data) {
    _classCallCheck(this, Component);

    componentConstructor.call(this, data);
  }

  _createClass(Component, [{
    key: "$makeContainer",
    value: function $makeContainer() {
      var elm = document.createElement(_utils__WEBPACK_IMPORTED_MODULE_0__["convertFromHumpName"](this.$data.key, '-'));
      _dom__WEBPACK_IMPORTED_MODULE_1__["addClass"](elm, _css__WEBPACK_IMPORTED_MODULE_2__["M_CMP_CLASS"]);
      return elm;
    }
  }, {
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
        this.onPropertyChanged && this.onPropertyChanged(key, value, oldValue);
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

      if (Object(_core__WEBPACK_IMPORTED_MODULE_3__["isMessage"])(message)) {
        message.on(handler);
      } else {
        throw new Error(_utils__WEBPACK_IMPORTED_MODULE_0__["format"]('"{0}" is not a valid event', key));
      }
    }
  }, {
    key: "$unbind",
    value: function $unbind(key, handler) {
      var message = _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this.events, key);

      if (Object(_core__WEBPACK_IMPORTED_MODULE_3__["isMessage"])(message)) {
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
      return new _exp__WEBPACK_IMPORTED_MODULE_8__["Evaluator"](this, {
        locals: locals
      }).evaluate(exp);
    }
  }, {
    key: "$assign",
    value: function $assign(exp, value, locals) {
      return new _exp__WEBPACK_IMPORTED_MODULE_8__["Evaluator"](this, {
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
      this.$$mainView = new _render__WEBPACK_IMPORTED_MODULE_6__["Renderer"](this).render(template, this.$container);
      this.afterViewRendered && this.afterViewRendered();
      return this.$$mainView;
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

      element.appendChild(this.$container);
    }
  }, {
    key: "$unmount",
    value: function $unmount() {
      _dom__WEBPACK_IMPORTED_MODULE_1__["removeElement"](this.$container);
    }
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
      this.$unmount();
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
    key: "$namespace",
    get: function get() {
      return this.$$metadata.namespace;
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
    value: function $$searchDirective(velm, key, namespace) {
      if (!namespace) {
        namespace = this.$namespace;
      }

      var result = velm.nodeData.directives.filter(function (item) {
        return item.$key === key && item.$namespace === namespace;
      });
      return result.length ? result[0] : null;
    }
  }, {
    key: "$seekDirective",
    value: function $seekDirective(key, namespace) {
      var velm = this.$$vattr.velm;
      return this.$$searchDirective(velm, key, namespace);
    }
  }, {
    key: "$seekUpDirective",
    value: function $seekUpDirective(key, namespace) {
      var velm = this.$$vattr.velm.parentNode;
      return this.$$searchDirective(velm, key, namespace);
    }
  }, {
    key: "$removeElement",
    value: function $removeElement() {
      if (this.$element.parentNode != null) {
        if (this.$placeholder == null) {
          throw new Error('you must define element placeholder!');
        }

        _dom__WEBPACK_IMPORTED_MODULE_0__["replaceElement"](this.$element, this.$placeholder);
      }
    }
  }, {
    key: "$appendElement",
    value: function $appendElement() {
      if (this.$element.parentNode == null) {
        if (this.$placeholder == null) {
          throw new Error('you must define element placeholder!');
        }

        _dom__WEBPACK_IMPORTED_MODULE_0__["replaceElement"](this.$placeholder, this.$element);
      }
    }
  }, {
    key: "$hideElement",
    value: function $hideElement() {
      _dom__WEBPACK_IMPORTED_MODULE_0__["addClass"](this.$element, _css__WEBPACK_IMPORTED_MODULE_2__["M_HIDE_CLASS"]);
    }
  }, {
    key: "$showElement",
    value: function $showElement() {
      _dom__WEBPACK_IMPORTED_MODULE_0__["removeClass"](this.$element, _css__WEBPACK_IMPORTED_MODULE_2__["M_HIDE_CLASS"]);
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








var namePattern = /^[a-z][a-zA-Z0-9]*$/; // start make constructor function because class can't be call without new.

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
      if (namePattern.test(name)) {
        var newName = _utils__WEBPACK_IMPORTED_MODULE_0__["uppercase"](name[0]);

        if (name.length > 0) {
          newName += name.substr(1);
        }

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
/*! exports provided: Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, injector */
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
/* harmony import */ var _view_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-api */ "./src/view/view-api.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var keyPattern = /^[a-z][a-zA-Z0-9]*$/;
var globalNamespace = 'automate';

var NamespaceContainer = /*#__PURE__*/function () {
  function NamespaceContainer() {
    _classCallCheck(this, NamespaceContainer);

    this.classContainer = {};
    this.instanceContainer = {};
  }

  _createClass(NamespaceContainer, [{
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
  }]);

  return NamespaceContainer;
}(); // metadata example
// { key: '', namespace: '', extends: null, construct: fn, methods: {} }


var Injector = /*#__PURE__*/function () {
  function Injector() {
    _classCallCheck(this, Injector);

    this.nsContainer = {};
    this.serviceStack = [];
  }

  _createClass(Injector, [{
    key: "getNamespaceContainer",
    value: function getNamespaceContainer(namespace) {
      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](namespace)) {
        namespace = _utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](namespace);

        if (!this.nsContainer[namespace]) {
          this.nsContainer[namespace] = new NamespaceContainer();
        }

        return this.nsContainer[namespace];
      } else {
        throw new Error('namespace is required');
      }
    }
  }, {
    key: "checkKeyName",
    value: function checkKeyName(key) {
      if (!keyPattern.test(key)) {
        throw new Error(key + ' is not a valid name');
      }
    }
  }, {
    key: "register",
    value: function register(roleId, key, constructor) {
      this.checkKeyName(key);
      var namespace = constructor.prototype.$$metadata.namespace;
      var namespaceContainer = this.getNamespaceContainer(namespace);
      var classContainer = namespaceContainer.getClassContainer(roleId);

      if (namespace === globalNamespace && roleId === _roles__WEBPACK_IMPORTED_MODULE_1__["roles"].directive) {
        key = _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('m{0}', _utils__WEBPACK_IMPORTED_MODULE_0__["uppercase"](key[0]) + (key.length > 1 ? key.substr(1) : ''));
      }

      if (classContainer[key]) {
        throw new Error(key + ' is exist under namespace ' + namespace);
      }

      classContainer[key] = constructor;
    }
  }, {
    key: "registerComponent",
    value: function registerComponent(key, constructor) {
      this.register(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].component, key, constructor);
    }
  }, {
    key: "registerDirective",
    value: function registerDirective(key, constructor) {
      this.register(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].directive, key, constructor);
    }
  }, {
    key: "registerFilter",
    value: function registerFilter(key, constructor) {
      this.register(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].filter, key, constructor);
    }
  }, {
    key: "registerService",
    value: function registerService(key, constructor) {
      this.register(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service, key, constructor);
    }
  }, {
    key: "has",
    value: function has(roleId, key, namespace) {
      return this.get(roleId, key, namespace) != null;
    }
  }, {
    key: "hasComponent",
    value: function hasComponent(key, namespace) {
      return this.has(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].component, key, namespace);
    }
  }, {
    key: "hasDirective",
    value: function hasDirective(key, namespace) {
      return this.has(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].directive, key, namespace);
    }
  }, {
    key: "hasFilter",
    value: function hasFilter(key, namespace) {
      return this.has(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].filter, key, namespace);
    }
  }, {
    key: "hasService",
    value: function hasService(key, namespace) {
      return this.has(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service, key, namespace);
    }
  }, {
    key: "getFromGlobalNamespace",
    value: function getFromGlobalNamespace(roleId, key) {
      var namespaceContainer = this.getNamespaceContainer(globalNamespace);
      var classContainer = namespaceContainer.getClassContainer(roleId);
      return classContainer[key];
    }
  }, {
    key: "get",
    value: function get(roleId, key, namespace) {
      var namespaceContainer = this.getNamespaceContainer(namespace);
      var classContainer = namespaceContainer.getClassContainer(roleId);
      return classContainer[key] || this.getFromGlobalNamespace(roleId, key);
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
    key: "checkInstance",
    value: function checkInstance(roleId, instance) {
      var validator, role;

      switch (roleId) {
        case _roles__WEBPACK_IMPORTED_MODULE_1__["roles"].component:
          role = 'Component';
          validator = _view_api__WEBPACK_IMPORTED_MODULE_2__["isComponent"];
          break;

        case _roles__WEBPACK_IMPORTED_MODULE_1__["roles"].directive:
          role = 'Directive';
          validator = _view_api__WEBPACK_IMPORTED_MODULE_2__["isDirective"];
          break;

        case _roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service:
          role = 'Service';
          validator = _view_api__WEBPACK_IMPORTED_MODULE_2__["isService"];
          break;

        case _roles__WEBPACK_IMPORTED_MODULE_1__["roles"].filter:
          role = 'Filter';
          validator = _view_api__WEBPACK_IMPORTED_MODULE_2__["isFilter"];
          break;
      }

      if (validator && !validator(instance)) {
        throw new Error(_utils__WEBPACK_IMPORTED_MODULE_0__["format"]('object is a instance of {0}', role));
      }
    }
  }, {
    key: "resolveConstructor",
    value: function resolveConstructor(roleId, keyOrConstructor, namespace) {
      var constructor;

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](keyOrConstructor)) {
        constructor = this.get(roleId, keyOrConstructor, namespace);

        if (constructor == null) {
          throw new Error(_utils__WEBPACK_IMPORTED_MODULE_0__["format"]('can not find "{0}" in namespace "{1}"', keyOrConstructor, namespace));
        }
      } else if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](keyOrConstructor)) {
        constructor = keyOrConstructor;
      } else {
        throw new Error('Invalid parameter');
      }

      return constructor;
    }
  }, {
    key: "create",
    value: function create(roleId, keyOrConstructor, namespace) {
      var Cls = this.resolveConstructor(roleId, keyOrConstructor, namespace);
      var instance = new Cls();
      this.checkInstance(roleId, instance);
      return instance;
    }
  }, {
    key: "createSingleton",
    value: function createSingleton(roleId, keyOrConstructor, namespace) {
      var instance,
          Cls = this.resolveConstructor(roleId, keyOrConstructor, namespace),
          namespace = Cls.prototype.$$metadata.namespace;
      var namespaceContainer = this.getNamespaceContainer(namespace),
          container = namespaceContainer.getInstanceContainer(roleId),
          result = container.filter(function (item) {
        return item instanceof Cls;
      });

      if (result.length) {
        instance = result[0];
      } else {
        instance = new Cls();
        this.checkInstance(roleId, instance);
        container.push(instance);
      }

      return instance;
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
      return this.createSingleton(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].filter, keyOrConstructor, namespace);
    }
  }, {
    key: "createService",
    value: function createService(keyOrConstructor, namespace) {
      var Service = this.resolveConstructor(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service, keyOrConstructor, namespace);

      if (Service.prototype.$$metadata.nonShared) {
        return this.create(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service);
      }

      return this.createSingleton(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service, Service);
    }
  }, {
    key: "extractNsAndKey",
    value: function extractNsAndKey(name) {
      var segments = name.split('.');
      return {
        key: segments.pop(),
        ns: segments.length > 0 ? segments.join('.') : '',
        cls: null
      };
    }
  }, {
    key: "parseFullName",
    value: function parseFullName(name, using) {
      var self = this,
          result = this.extractNsAndKey(name);

      if (using) {
        if (result.ns) {
          if (using.hasOwnProperty(result.ns)) {
            // replace alias with real namespace
            result.ns = using[result.ns];
          }
        } else {
          if (using.hasOwnProperty(name)) {
            var value = using[name];

            if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](value)) {
              // return real namespace and key
              result = self.extractNsAndKey(value);
            } else {
              // return real class
              result.cls = value;
            }
          }
        }
      }

      return result;
    }
  }, {
    key: "parseConstructor",
    value: function parseConstructor(getter, name, using, defaultNs) {
      var identifier = this.parseFullName(name, using);

      if (identifier.cls) {
        return identifier.cls;
      }

      return this[getter](identifier.key, identifier.ns || defaultNs);
    }
  }, {
    key: "parseComponent",
    value: function parseComponent(name, using, defaultNs) {
      return this.parseConstructor('getComponent', name, using, defaultNs);
    }
  }, {
    key: "parseDirective",
    value: function parseDirective(name, using, defaultNs) {
      return this.parseConstructor('getDirective', name, using, defaultNs);
    }
  }, {
    key: "parseService",
    value: function parseService(name, using, defaultNs) {
      return this.parseConstructor('getService', name, using, defaultNs);
    }
  }, {
    key: "parseFilter",
    value: function parseFilter(name, using, defaultNs) {
      return this.parseConstructor('getFilter', name, using, defaultNs);
    }
  }, {
    key: "injectServices",
    value: function injectServices(instance, metadata, checkLoopDependency) {
      var self = this,
          serviceFullName,
          hasLoopDependency = false;

      if (checkLoopDependency) {
        // creating a service instance at the moment
        serviceFullName = _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0}.{1}', _utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](metadata.namespace), metadata.key);
        hasLoopDependency = this.serviceStack.indexOf(serviceFullName) !== -1;
        this.serviceStack.push(serviceFullName);

        if (hasLoopDependency) {
          // occurs loop dependency
          var error = _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('Loop dependency: {0}', this.serviceStack.join(' -> ')); // clear service dependency stack

          this.serviceStack.length = 0; // throw error

          throw new Error(error);
        }
      }

      if (metadata && _utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](metadata.inject)) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](metadata.inject, function (service, key) {
          if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](service)) {
            service = self.parseService(service, metadata.using, metadata.namespace);
          }

          instance[key] = self.createService(service);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exp */ "./src/exp/index.js");
/* harmony import */ var _tpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl */ "./src/tpl/index.js");
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
    key: "using",
    get: function get() {
      return this.scope.$data.using;
    }
  }]);

  function Parser(scope) {
    _classCallCheck(this, Parser);

    this.scope = scope;
    this.programs = {};
    this.type = {
      components: {},
      directives: {},
      filters: {}
    };
    this.filters = {};
  }

  _createClass(Parser, [{
    key: "parseExpression",
    value: function parseExpression(exp) {
      var program = this.programs[exp];

      if (!program) {
        program = Object(_exp__WEBPACK_IMPORTED_MODULE_1__["parseExp"])(exp);
        this.programs[exp] = program;
      }

      return program;
    }
  }, {
    key: "parseTemplate",
    value: function parseTemplate(tpl) {
      return Object(_tpl__WEBPACK_IMPORTED_MODULE_2__["parseTpl"])(tpl);
    }
  }, {
    key: "resolve",
    value: function resolve(selector, buffer, parser) {
      var target,
          fullName,
          defaultNs = this.scope.$data.namespace;

      if (buffer[selector] !== undefined) {
        target = buffer[selector];
      } else {
        fullName = _utils__WEBPACK_IMPORTED_MODULE_0__["convertToHumpName"](selector, '-');
        target = this.injector[parser](fullName, this.using, defaultNs);
        buffer[selector] = target;
      }

      return target;
    }
  }, {
    key: "resolveComponent",
    value: function resolveComponent(selector) {
      return this.resolve(selector, this.type.components, 'parseComponent');
    }
  }, {
    key: "resolveDirective",
    value: function resolveDirective(selector) {
      return this.resolve(selector, this.type.directives, 'parseDirective');
    }
  }, {
    key: "resolveFilter",
    value: function resolveFilter(selector) {
      var filter,
          filterCls,
          buffer = this.filters;

      if (buffer[selector] !== undefined) {
        filter = buffer[selector];
      } else {
        filterCls = this.resolve(selector, this.type.filters, 'parseFilter');
        filter = this.injector.createFilter(filterCls);
        buffer[selector] = filter;
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
/*! exports provided: Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, injector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFilter", function() { return isFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isService", function() { return isService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
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
    },
    render: function render(selector, config, metadata) {
      var element = document.querySelector(selector);
      var Root = _factory__WEBPACK_IMPORTED_MODULE_2__["factory"].makeComponent('automateApp', config, _utils__WEBPACK_IMPORTED_MODULE_1__["merge"]({
        namespace: name,
        template: element.innerHTML
      }, metadata));
      var root = new Root();
      _dom__WEBPACK_IMPORTED_MODULE_0__["clearChildrenOfElement"](element);
      root.$render().mount(element);
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



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvbXBvbmVudC9zbG90LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvZXZlbnRzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9sb2NhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY3NzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvYmluZC1odG1sLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9oaWRlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9pZi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvcmVhZG9ubHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3MtZXZlbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3Mtb2RkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLW9kZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC1kZWZhdWx0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLXdoZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9hbmFseXNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXZhbHVhdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWxleGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtb3BlcmF0b3JzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2Fzc2lnbm1lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FzdC1ub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3QuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY2FsbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY29uZGl0aW9uYWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2lkZW50aWZpZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9saXRlcmFsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9sb2dpY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9tZW1iZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL29iamVjdC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3VuYXJ5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL29ic2VydmVyL2RlbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvYmluZGluZy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3JlbmRlci92aWV3LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3NlcnZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvc2VydmljZS9pbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92YXR0ci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmNtbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZlbG0uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Zub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92dGV4dC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdnR5cGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1hcGkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1idWlsZGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC90cGwtbGV4ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9mYWN0b3J5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9pbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3BhcnNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3JvbGVzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3ZpZXctYXBpLmpzIl0sIm5hbWVzIjpbIlNsb3RDb21wb25lbnQiLCJjb21wb25lbnQiLCJuYW1lc3BhY2UiLCJrZXkiLCJwcm9wcyIsIm5hbWUiLCJzbG90cyIsIiQkcGFyZW50IiwidGVtcGxhdGUiLCIkJG1haW5WaWV3IiwiUmVuZGVyZXIiLCJyZW5kZXIiLCIkY29udGFpbmVyIiwiZGVzdHJveSIsIkNvbXBvbmVudCIsImlzTWVzc2FnZSIsIm9iaiIsIk1lc3NhZ2UiLCJldmVudHMiLCJwcm9wZXJ0eUNoYW5nZWQiLCJ0cmFuc2xhdGVDaGFuZ2VkIiwiTG9jYWwiLCJlIiwiZWxtIiwiJGV2ZW50IiwiJGVsZW1lbnQiLCJkYXRhIiwiaGFuZGxlcnMiLCJmbiIsImluZGV4IiwiaW5kZXhPZiIsInB1c2giLCJFcnJvciIsIm9mZiIsInNwbGljZSIsInNjb3BlIiwiZm9yRWFjaCIsImhhbmRsZXIiLCJjYWxsIiwiZG9tIiwiTV9DTVBfQ0xBU1MiLCJNX0hJREVfQ0xBU1MiLCJtZXRhZGF0YSIsInRhcmdldCIsInByb3RvdHlwZSIsIiQkbWV0YWRhdGEiLCJpbmplY3RvciIsInJlZ2lzdGVyQ29tcG9uZW50IiwiZGlyZWN0aXZlIiwicmVnaXN0ZXJEaXJlY3RpdmUiLCJmaWx0ZXIiLCJyZWdpc3RlckZpbHRlciIsInNlcnZpY2UiLCJyZWdpc3RlclNlcnZpY2UiLCJCaW5kSHRtbERpcmVjdGl2ZSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiRGlyZWN0aXZlIiwiQmluZERpcmVjdGl2ZSIsImlubmVyVGV4dCIsIkhpZGVEaXJlY3RpdmUiLCJJZkRpcmVjdGl2ZSIsIiRwbGFjZWhvbGRlciIsImRvY3VtZW50IiwiY3JlYXRlQ29tbWVudCIsIk1vZGVsRGlyZWN0aXZlIiwidmlld1ZhbHVlIiwibW9kZWxWYWx1ZSIsInBhcnNlcnMiLCJmb3JtYXR0ZXJzIiwidmlld0NoYW5nZUxpc3RlbmVycyIsInZhbGlkYXRvcnMiLCJzdGF0dXMiLCJmZWVkYmFjayIsInByaXN0aW5lIiwiZGlydHkiLCJ2YWxpZCIsImludmFsaWQiLCJvcHRpb25zIiwiY3NzIiwiY29tbWl0TW9kZWxWYWx1ZSIsIiRzY29wZSIsInN0YXRlIiwiJGNvbXBvbmVudCIsIiRiaW5kIiwiY29tbWl0Vmlld1ZhbHVlIiwibmV3dmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwibmV3VmFsdWUiLCJzZWxmIiwidmFsaWRhdG9yIiwiZm9ybWF0dGVyIiwiJHNldFByb3BlcnR5IiwidXBkYXRlRWxtQ3NzQ2xhc3MiLCJtYXJrRGlydHlTdGF0dXMiLCJsaXN0ZW5lciIsInBhcnNlciIsIiRiaW5kaW5nIiwiYXNzaWduIiwiZWxlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiUmVwZWF0RGlyZWN0aXZlIiwiaXRlbUV4cCIsIml0ZW1zRXhwIiwiaXRlbVRlbXBsYXRlIiwiaXRlbVZpZXdzIiwiTWFwIiwidW53YXRjaENvbGxlY3Rpb24iLCJ2ZWxtIiwidmF0dHIiLCJhcmciLCJub2RlVmFsdWUiLCJwYXR0ZXJuIiwicmVzdWx0IiwiZXhlYyIsInJlbW92ZUF0dHIiLCJnZXRPdXRlclRwbCIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImhlYWRlciIsImZvb3RlciIsImFwcGVuZENoaWxkIiwiJHdhdGNoQ29sbGVjdGlvbiIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJpdGVtcyIsIiRldmFsIiwidXRpbHMiLCJpdGVtIiwiaXRlbVZpZXciLCJnZXRWaWV3RnJvbUJ1ZmZlciIsImxvY2FscyIsIiRyZW5kZXIiLCJzZXRWaWV3VG9CdWZmZXIiLCJjb250ZW50IiwibGlzdCIsInZpZXciLCJidWZmZXIiLCJkYXRhSXRlbSIsImhhcyIsImdldCIsImxlbmd0aCIsInNoaWZ0Iiwic2V0IiwiU2hvd0RpcmVjdGl2ZSIsIkNoZWNrZWREaXJlY3RpdmUiLCJTdGF0ZURpcmVjdGl2ZSIsIkRpc2FibGVkRGlyZWN0aXZlIiwiUmVhZG9ubHlEaXJlY3RpdmUiLCJTZWxlY3RlZERpcmVjdGl2ZSIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkNsYXNzRXZlbkRpcmVjdGl2ZSIsIkNsYXNzRGlyZWN0aXZlIiwiQ2xhc3NPZGREaXJlY3RpdmUiLCJuZXdDbGFzcyIsIm9sZENsYXNzIiwic2tpcEN1cnJlbnRFbG0iLCJqb2luIiwiU3R5bGVFdmVuRGlyZWN0aXZlIiwiU3R5bGVEaXJlY3RpdmUiLCJTdHlsZU9kZERpcmVjdGl2ZSIsIm5ld1N0eWxlIiwib2xkU3R5bGUiLCJzdHlsZSIsIlN3aXRjaERlZmF1bHREaXJlY3RpdmUiLCJzd2l0Y2hDdHJsIiwiJHNlZWtVcERpcmVjdGl2ZSIsIm1hdGNoRGVmYXVsdCIsIm9uIiwiZGVmYXVsdE1hdGNoZWQiLCIkcmVtb3ZlRWxlbWVudCIsIlN3aXRjaFdoZW5EaXJlY3RpdmUiLCJtYXRjaGVkIiwiY2hhbmdlZCIsInBsdXNNYXRjaCIsIm1pbnVzTWF0Y2giLCJTd2l0Y2hEaXJlY3RpdmUiLCJtYXRjaENvdW50IiwiZmlyZSIsImNoZWNrRGVmYXVsdCIsImdldENoaWxkcmVuT2ZFbGVtZW50IiwiQXJyYXkiLCJzbGljZSIsImNoaWxkTm9kZXMiLCJjbGVhckNoaWxkcmVuT2ZFbGVtZW50IiwiY2hpbGQiLCJyZW1vdmVDaGlsZCIsInJlcGxhY2VFbGVtZW50IiwibmV3RWxtIiwicmVtb3ZlRWxlbWVudCIsInJlbW92ZUVsZW1lbnRzQmV0d2VlbiIsInN0YXJ0RWxtIiwiZW5kRWxtIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJhcHBlbmRFbGVtZW50IiwibGFzdENoaWxkIiwiYWRkQ2xhc3MiLCJjbHMiLCJ0cmltIiwic3BsaXQiLCJjIiwiY3VyIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJ0YXIiLCJyZXBsYWNlIiwibG9hZFN0eWxlU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZVRleHROb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJBY2Nlc3NvciIsImNhbGxlZSIsImV4cCIsImNoaWxkcmVuIiwiQW5hbHlzZXIiLCJwYXJzZUV4cHJlc3Npb24iLCJwYXJzZUV4cCIsInByb2dyYW0iLCJhY2Nlc3NvciIsImJ1aWxkZXIiLCJFeHBCdWlsZGVyIiwiYW5hbHlzZVByb2dyYW0iLCJhbmFseXNlTm9kZSIsIm5vZGUiLCJjb250ZXh0IiwidHlwZSIsIkFTVCIsIkV4cHJlc3Npb25TdGF0ZW1lbnQiLCJhbmFseXNlRXhwcmVzc2lvbiIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiYW5hbHlzZUFzc2lnbm1lbnQiLCJDb25kaXRpb25hbEV4cHJlc3Npb24iLCJhbmFseXNlQ29uZGl0aW9uIiwiTG9naWNhbEV4cHJlc3Npb24iLCJhbmFseXNlTG9naWMiLCJCaW5hcnlFeHByZXNzaW9uIiwiYW5hbHlzZUJpbmFyeSIsIlVuYXJ5RXhwcmVzc2lvbiIsImFuYWx5c2VVbmFyeSIsIkNhbGxFeHByZXNzaW9uIiwiYW5hbHlzZUNhbGwiLCJNZW1iZXJFeHByZXNzaW9uIiwiYW5hbHlzZU1lbWJlciIsIklkZW50aWZpZXIiLCJhbmFseXNlSWRlbnRpZmllciIsIkxpdGVyYWwiLCJhbmFseXNlTGl0ZXJhbCIsIkFycmF5RXhwcmVzc2lvbiIsImFuYWx5c2VBcnJheSIsIlByb3BlcnR5IiwiYW5hbHlzZVByb3BlcnR5IiwiT2JqZWN0RXhwcmVzc2lvbiIsImFuYWx5c2VPYmplY3QiLCJhc3NpZ25tZW50IiwicmlnaHQiLCJjb25kaXRpb24iLCJ0ZXN0IiwiYWx0ZXJuYXRlIiwiY29uc2VxdWVudCIsImxvZ2ljIiwibGVmdCIsImJpbmFyeSIsInVuYXJ5IiwiYXJncyIsIm1lbWJlciIsInBhcmVudCIsIm9iamVjdCIsImNvbXB1dGVkIiwicHJvcGVydHkiLCJjcmVhdGVDaGlsZCIsImJ1aWxkIiwiaWRlbnRpZmllciIsImNyZWF0ZUFjY2Vzc29yIiwibGl0ZXJhbCIsInByb3AiLCJwcm9wZXJ0aWVzIiwiYXJyIiwiYW5hbHlzZSIsImRlZmF1bHRPcHRpb25zIiwiYWxsb3dOdWxsIiwiYXNzaWduSW50ZXJjZXB0b3IiLCJFdmFsdWF0b3IiLCIkcGFyc2VyIiwiZXZhbHVhdGVQcm9ncmFtIiwiZXZhbHVhdGVOb2RlIiwiJG51bGwiLCJhc3NpZ25Qcm9ncmFtIiwiZXhwcmVzc2lvbiIsInByb3BlcnR5S2V5IiwiZXZhbHVhdGVFeHByZXNzaW9uIiwiZXZhbHVhdGVBc3NpZ25tZW50IiwiZXZhbHVhdGVDb25kaXRpb24iLCJldmFsdWF0ZUxvZ2ljIiwiZXZhbHVhdGVCaW5hcnkiLCJldmFsdWF0ZVVuYXJ5IiwiZXZhbHVhdGVDYWxsIiwiZXZhbHVhdGVNZW1iZXIiLCJldmFsdWF0ZUlkZW50aWZpZXIiLCJldmFsdWF0ZUxpdGVyYWwiLCJldmFsdWF0ZUFycmF5IiwiZXZhbHVhdGVQcm9wZXJ0eSIsImV2YWx1YXRlT2JqZWN0IiwiYXNzaWdubWVudExlZnQiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwib3BlcmF0b3IiLCJhcmdWYWx1ZXMiLCJtYXAiLCJyZXNvbHZlRmlsdGVyIiwidHJhbnNmb3JtIiwiYXBwbHkiLCJOdWxsRXhwcmVzc2lvbk5vZGUiLCJ0YXJnZXROb2RlIiwiZGVmIiwibGV4RXhwIiwiRXhwTGV4ZXIiLCJsZXgiLCJFeHBQYXJzZXIiLCJwYXJzZSIsImJ1aWxkRXhwcmVzc2lvbiIsImJ1aWxkQXNzaWdubWVudCIsImJ1aWxkQ29uZGl0aW9uIiwiYnVpbGRMb2dpYyIsImJ1aWxkQmluYXJ5IiwiYnVpbGRVbmFyeSIsImJ1aWxkQ2FsbCIsImJ1aWxkTWVtYmVyIiwiYnVpbGRJZGVudGlmaWVyIiwiYnVpbGRMaXRlcmFsIiwiYnVpbGRBcnJheSIsImJ1aWxkUHJvcGVydHkiLCJidWlsZE9iamVjdCIsInJlcyIsInBhcnNlT3B0aW9ucyIsInRleHQiLCJ0b2tlbnMiLCJjaCIsImNoYXJBdCIsInJlYWRTdHJpbmciLCJpc051bWJlciIsInBlZWsiLCJyZWFkTnVtYmVyIiwiaXNJZGVudGlmaWVyU3RhcnQiLCJwZWVrTXVsdGljaGFyIiwicmVhZElkZW50IiwiaXMiLCJpc1doaXRlc3BhY2UiLCJjaDIiLCJjaDMiLCJvcDEiLCJPUEVSQVRPUlMiLCJvcDIiLCJvcDMiLCJ0b2tlbiIsInRocm93RXJyb3IiLCJjaGFycyIsImkiLCJudW0iLCJjb2RlUG9pbnRBdCIsImlzVmFsaWRJZGVudGlmaWVyU3RhcnQiLCJpc0lkZW50aWZpZXJDb250aW51ZSIsImlzVmFsaWRJZGVudGlmaWVyQ29udGludWUiLCJjcCIsImNoYXJDb2RlQXQiLCJjcDEiLCJjcDIiLCJlcnJvciIsInN0YXJ0IiwiZW5kIiwiY29sU3RyIiwic3Vic3RyaW5nIiwibnVtYmVyIiwicGVla0NoIiwiaXNFeHBPcGVyYXRvciIsImNvbnN0YW50IiwiTnVtYmVyIiwicXVvdGUiLCJzdHJpbmciLCJyYXdTdHJpbmciLCJlc2NhcGUiLCJoZXgiLCJtYXRjaCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50IiwicmVwIiwiRVNDQVBFIiwib3BlcmF0b3JUZXh0IiwibGV4ZXIiLCJtc2ciLCJQcm9ncmFtTm9kZSIsImV4cHJlc3Npb25TdGF0ZW1lbnQiLCJleHBlY3QiLCJFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSIsImZpbHRlckNoYWluIiwiYXN0IiwidGVybmFyeSIsImlzQXNzaWduYWJsZSIsIkFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSIsImxvZ2ljYWxPUiIsImNvbnN1bWUiLCJDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbEFORCIsIkxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImVxdWFsaXR5IiwicmVsYXRpb25hbCIsIkJpbmFyeUV4cHJlc3Npb25Ob2RlIiwiYWRkaXRpdmUiLCJtdWx0aXBsaWNhdGl2ZSIsIlVuYXJ5RXhwcmVzc2lvbk5vZGUiLCJwcmltYXJ5IiwiYXJyYXlEZWNsYXJhdGlvbiIsImxpdGVyYWxzIiwiaGFzT3duUHJvcGVydHkiLCJMaXRlcmFsTm9kZSIsIm5leHQiLCJwZWVrQWhlYWQiLCJDYWxsRXhwcmVzc2lvbk5vZGUiLCJwYXJzZUFyZ3VtZW50cyIsIk1lbWJlckV4cHJlc3Npb25Ob2RlIiwiYmFzZUV4cHJlc3Npb24iLCJpZGVudGlmaWVycyIsImVudGlyZU5hbWUiLCJJZGVudGlmaWVyTm9kZSIsInBlZWtUb2tlbiIsIkFycmF5RXhwcmVzc2lvbk5vZGUiLCJQcm9wZXJ0eU5vZGUiLCJPYmplY3RFeHByZXNzaW9uTm9kZSIsImUxIiwiZTIiLCJlMyIsImU0IiwidCIsIkFzdE5vZGUiLCJQcm9ncmFtIiwia2luZCIsInByZWZpeCIsInVuZGVmaW5lZCIsIkRlbGF5ZXIiLCJ0aW1lb3V0IiwiZGVsYXlJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJMaXN0ZW5lciIsInZhbHVlQ2hhbmdlZCIsImNvbGxlY3Rpb25DaGFuZ2VkIiwib2xkVmFsdWUiLCJPYnNlcnZlciIsImFjY2Vzc29ycyIsImxpc3RlbmVycyIsIndhdGNoZXIiLCJXYXRjaGVyIiwiYW5hbHlzZXIiLCJkZWxheWVyIiwibm90aWZ5IiwiaGFzQ2hhbmdlIiwic2V0TmV3VmFsdWUiLCJzZXRDb2xsZWN0aW9uQ2hhbmdlZCIsImV4ZWN1dGUiLCJnZXRBY2Nlc3NvciIsImV2YWx1YXRvciIsImNyZWF0ZUxpc3RlbmVyIiwiZXZhbHVhdGUiLCJ1bndhdGNoQWNjZXNzb3JzIiwidW53YXRjaCIsIndhdGNoQWNjZXNzb3JzIiwidmFsdWVzIiwid2F0Y2giLCJub3RpZnlDaGFuZ2UiLCJyZW1vdmVMaXN0ZW5lciIsInVud2F0Y2hQcm9wcyIsIndhdGNoUHJvcHMiLCJ1bndhdGNoRXhwIiwiYXJndW1lbnRzIiwiY29sbGVjdGlvbiIsImlzUHJveHlTeW1ib2wiLCJTeW1ib2wiLCJ0YXJnZXRTeW1ib2wiLCJnZXRQcm94eSIsInNldFByb3h5IiwiaXNQcm94eSIsInByb3h5IiwiZ2V0VGFyZ2V0IiwibWFrZVByb3h5IiwiUHJveHkiLCJPYmplY3RMaXN0ZW5lciIsImtleXMiLCJnZXRIYW5kbGVycyIsIm9mZlByb3BlcnR5Q2hhbmdlZCIsImhhbmRsZVByb3BlcnR5Q2hhbmdlZCIsImdldExpc3RlbmVyIiwiZmlyZUtleSIsImZpbHRlcnMiLCJhY3Rpb24iLCJnZXRPckNyZWF0ZUxpc3RlbmVyIiwicmVnaXN0ZXJLZXkiLCJ1bnJlZ2lzdGVyS2V5IiwiQmluZGluZyIsImlzRXhwIiwibG9naWNhbCIsImF1dG9tYXRpb24iLCJzZWdtZW50cyIsImV4cHJlc3Npb25zIiwiRXhwcmVzc2lvbiIsImNyZWF0ZUV4cHJlc3Npb24iLCJsYXN0SW5kZXgiLCJzZWdtZW50IiwiZGV0ZWN0IiwicGF0Y2giLCJjb21wdXRlIiwicmVkdWNlIiwicHJldiIsImhhc1RyYW5zbGF0aW9uIiwiJGFzc2lnbiIsIiR3YXRjaCIsImV2ZW50VGV4dCIsImRvbUV2ZW50cyIsIiRpbmplY3RvciIsImJpbmRpbmciLCJiaW5kaW5ncyIsImNyZWF0ZUNvbXBvbmVudCIsIiRhcHBlbmRDaGlsZCIsImNvbXBvbmVudHMiLCJjcmVhdGVEaXJlY3RpdmUiLCIkJHNjb3BlIiwicmVzb2x2ZUNvbXBvbmVudCIsIm5vZGVOYW1lIiwicmVzb2x2ZURpcmVjdGl2ZSIsIm5vZGVEYXRhIiwiY29udGFpbmVyIiwiaGFzQ29udGFpbmVyIiwiU2luZ2xlTm9kZVZpZXciLCJNdWx0aXBsZU5vZGVWaWV3Iiwidm5vZGVzIiwicGFyc2VUZW1wbGF0ZSIsImNvbXBpbGVOb2RlcyIsImxpbmtOb2RlcyIsImRpcmVjdGl2ZXMiLCIkcG9zdGxpbmsiLCJub2RlcyIsInZub2RlIiwiY29tcGlsZU5vZGUiLCJpc1ZUZXh0IiwiY29tcGlsZVRleHQiLCJpc1ZDb21tZW50IiwiY29tcGlsZUNvbW1lbnQiLCJjb21waWxlRWxtIiwibGlua05vZGUiLCJsaW5rVGV4dCIsImxpbmtDb21tZW50IiwibGlua0VsbSIsImVsbURhdGEiLCJyZWNvZ25pemVDb21wb25lbnQiLCJjdXN0b21MaW5rZXIiLCJ2YXR0cnMiLCJzb21lIiwiYXR0ckRhdGEiLCJjb21waWxlQXR0ciIsImxpbmtlciIsIiRwcmlvcml0eSIsInNlZWtTbG90IiwiYXR0ck5hbWUiLCJhdHRyVmFsdWUiLCJuZXdCaW5kaW5nIiwic3RhcnRzV2l0aCIsImlzRXZlbnQiLCJzdWJzdHIiLCJpc0RvbUV2ZW50IiwicmVjb2duaXplRGlyZWN0aXZlIiwibmV3RGlyZWN0aXZlIiwiJCR2YXR0ciIsIiRhc3NpZ25tZW50IiwiJGNvbXBpbGUiLCJzZXRIdG1sQXR0ciIsInJlZ2lzdGVyQXV0b21hdGlvbiIsInByb3BlcnR5TmFtZSIsIiRoYXNQcm9wZXJ0eSIsImNvbXBpbGUiLCJ2dGV4dCIsIm5ld1RleHROb2RlIiwidmNtbnQiLCIkbGluayIsImluc3RhbmNlIiwibmV3Q29tcG9uZW50IiwibGlua0F0dHIiLCIkJHZlbG0iLCIkc2VyQ29udGFpbmVyIiwiJHNldFNsb3QiLCJldmVudE5hbWUiLCJsaW5rIiwiJGNoYW5nZSIsImlzVkVsbSIsInNsb3QiLCJnZXRBdHRyIiwiZ2V0SW5uZXJUcGwiLCJWaWV3Iiwic2VsZWN0b3JPckVsZW1lbnQiLCJlbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIm9uRGVzdHJveSIsIiRkZXN0cm95IiwiSW5qZWN0b3IiLCJ1c2luZyIsImRlZmF1bHROcyIsInBhcnNlQ29tcG9uZW50IiwicGFyc2VEaXJlY3RpdmUiLCJwYXJzZVNlcnZpY2UiLCJwYXJzZUZpbHRlciIsIlNlcnZpY2UiLCJWQXR0ciIsIm5vZGVUeXBlIiwiYXR0cmlidXRlIiwiVk5vZGUiLCJWQ21udCIsImNvbW1lbnQiLCJWRWxtIiwic2VsZkNsb3NlZCIsIlRwbEJ1aWxkZXIiLCJhdHRyIiwibWF0Y2hlcyIsImJlbG9uZ1RvIiwic2V0VmFsdWUiLCJjb21waWxlT3B0aW9ucyIsInRwbCIsInBhcnNlVHBsIiwiY2xlYXJDaGlsZE5vZGVzIiwiY29weSIsImNsb25lTm9kZSIsImNkYXRhU2VjdGlvbiIsImVudGl0eVJlZmVyZW5jZSIsImVudGl0eSIsInByb2Nlc3NpbmdJbnN0cnVjdGlvbiIsImRvY3VtZW50VHlwZSIsImRvY3VtZW50RnJhZ21lbnQiLCJub3RhdGlvbiIsImZpcnN0Q2hpbGQiLCJidWlsZFNpYmxpbmciLCJyZWZDaGlsZCIsIm5ld0NoaWxkIiwiY2xlYXJQYXJlbnRBbmRTaWJsaW5nIiwiZGVlcCIsIm9uQ2xvbmVOb2RlIiwib3duZXJEb2N1bWVudCIsIlZUZXh0IiwiVlR5cGUiLCJsZXhUcGwiLCJUcGxMZXhlciIsIlRwbFBhcnNlciIsImlzVkF0dHIiLCJidWlsZFRleHQiLCJidWlsZENvbW1lbnQiLCJidWlsZEVsZW1lbnQiLCJhdHRyVHBsIiwiYnVpbGRBdHRyaWJ1dGUiLCJjaGlsZFRwbCIsInN0ciIsImJlZ2luIiwiZXhwZWN0U3RyaW5nIiwidGV4dFRhZyIsImNsb3NpbmciLCJkb2N0eXBlIiwidGFnIiwiZXF1YWwiLCJhbGxvd0RvY1R5cGUiLCJyZWFkQ29tbWVudCIsInJlYWRUYWciLCJyZWFkVGV4dCIsInJvb3QiLCJjdXJyZW50IiwiZG9jVHlwZSIsImF0dHJzIiwicCIsInB1c2hBdHRyIiwiY2hpbGRFbGVtZW50cyIsInB1c2hDaGlsZCIsImVsZXMiLCJvcmlnaW4iLCJ0b1N0cmluZyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiaXNVbmRlZmluZWQiLCJpc0RlZmluZWQiLCJpc0FycmF5IiwiaXNNYXAiLCJpc09iamVjdCIsImlzQmxhbmtPYmplY3QiLCJpc1N0cmluZyIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc1JlZ0V4cCIsImlzQm9vbGVhbiIsImlzRm9ybURhdGEiLCJGb3JtRGF0YSIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJpc05hTiIsImxvd2VyY2FzZSIsInRvTG93ZXJDYXNlIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJjb252ZXJ0VG9IdW1wTmFtZSIsInNlcGFyYXRvciIsInVwcGVyY2FzZUZpcnN0TGV0dGVyIiwiY29udmVydEZyb21IdW1wTmFtZSIsIm5ld05hbWUiLCJjaGFyIiwib2JqSW5kZXgiLCJuZXdBcnIiLCJuZXdPYmoiLCJleHRlbmQiLCJkZWVwTWVyZ2UiLCJwbGFpbk1lcmdlIiwibWVyZ2UiLCJzb3VyY2UiLCJmdW5jIiwib3JkZXJCeSIsImdldHRlciIsImdldFZhbHVlIiwic29ydCIsImEiLCJiIiwib3JkZXJCeURlc2NlbmRpbmciLCJjb25jYXQiLCJvIiwiRiIsImluaGVyaXRQcm90b3R5cGUiLCJzdWJUeXBlIiwic3VwZXJUeXBlIiwiY29uc3RydWN0b3IiLCJpbmhlcml0IiwiaGFzUHJvcGVydHkiLCJnZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiZm9ybWF0IiwibWF0Y2hUZXh0IiwiZXNjYXBlSHRtbCIsImh0bWwiLCJjb21wb25lbnRDb25zdHJ1Y3RvciIsIiQkY2hpbGRyZW4iLCJQYXJzZXIiLCIkb2JzZXJ2ZXIiLCIkZGF0YSIsIiRtYWtlQ29udGFpbmVyIiwiJGRlbGVnYXRlIiwiaW5qZWN0U2VydmljZXMiLCJvblByb3BlcnR5Q2hhbmdlZCIsIm1lc3NhZ2UiLCJ3YXRjaENvbGxlY3Rpb24iLCJ0ZW1wbGF0ZUlkIiwiZ2V0RWxlbWVudEJ5SWQiLCIkZ2V0VGVtcGxhdGUiLCJhZnRlclZpZXdSZW5kZXJlZCIsIiR1bm1vdW50IiwiJHJlbW92ZUNoaWxkIiwiZGlyZWN0aXZlQ29uc3RydWN0b3IiLCIkcmVuZGVyZXIiLCJvbkNvbXBpbGUiLCJvbkxpbmsiLCJhZnRlckxpbmsiLCJvbkNoYW5nZSIsIiRuYW1lc3BhY2UiLCIka2V5IiwiJCRzZWFyY2hEaXJlY3RpdmUiLCJuYW1lUGF0dGVybiIsImNvbXBvbmVudENsYXNzIiwiZGlyZWN0aXZlQ2xhc3MiLCJmaWx0ZXJDbGFzcyIsIkZpbHRlciIsImZpbHRlckNvbnN0cnVjdG9yIiwic2VydmljZUNsYXNzIiwic2VydmljZUNvbnN0cnVjdG9yIiwiRmFjdG9yeSIsInJvbGVJZCIsInJvbGVzIiwiY29uZmlnIiwiY29uc3RydWN0b3JOYW1lIiwicmVuYW1lIiwib25Db25zdHJ1Y3QiLCJjb25zdHJ1Y3QiLCJGdW5jdGlvbiIsIm1ha2UiLCJmYWN0b3J5Iiwia2V5UGF0dGVybiIsImdsb2JhbE5hbWVzcGFjZSIsIk5hbWVzcGFjZUNvbnRhaW5lciIsImNsYXNzQ29udGFpbmVyIiwiaW5zdGFuY2VDb250YWluZXIiLCJuc0NvbnRhaW5lciIsInNlcnZpY2VTdGFjayIsImNoZWNrS2V5TmFtZSIsIm5hbWVzcGFjZUNvbnRhaW5lciIsImdldE5hbWVzcGFjZUNvbnRhaW5lciIsImdldENsYXNzQ29udGFpbmVyIiwicmVnaXN0ZXIiLCJnZXRGcm9tR2xvYmFsTmFtZXNwYWNlIiwicm9sZSIsImlzQ29tcG9uZW50IiwiaXNEaXJlY3RpdmUiLCJpc1NlcnZpY2UiLCJpc0ZpbHRlciIsImtleU9yQ29uc3RydWN0b3IiLCJDbHMiLCJyZXNvbHZlQ29uc3RydWN0b3IiLCJjaGVja0luc3RhbmNlIiwiZ2V0SW5zdGFuY2VDb250YWluZXIiLCJjcmVhdGUiLCJjcmVhdGVTaW5nbGV0b24iLCJub25TaGFyZWQiLCJwb3AiLCJucyIsImV4dHJhY3ROc0FuZEtleSIsInBhcnNlRnVsbE5hbWUiLCJwYXJzZUNvbnN0cnVjdG9yIiwiY2hlY2tMb29wRGVwZW5kZW5jeSIsInNlcnZpY2VGdWxsTmFtZSIsImhhc0xvb3BEZXBlbmRlbmN5IiwiaW5qZWN0IiwiY3JlYXRlU2VydmljZSIsInByb2dyYW1zIiwic2VsZWN0b3IiLCJmdWxsTmFtZSIsInJlc29sdmUiLCJmaWx0ZXJDbHMiLCJjcmVhdGVGaWx0ZXIiLCJtZXJnZU1ldGFkYXRhIiwiUm9vdCIsIm1ha2VDb21wb25lbnQiLCJtb3VudCIsIm1ha2VEaXJlY3RpdmUiLCJtYWtlRmlsdGVyIiwibWFrZVNlcnZpY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0lBTU1BLGEsV0FKTEMsNERBQVMsQ0FBQztBQUNQQyxXQUFTLEVBQUUsVUFESjtBQUVQQyxLQUFHLEVBQUU7QUFGRSxDQUFELEM7OztBQUtOLDJCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxLQUFMLENBQVdDLElBQVgsR0FBa0IsRUFBbEI7QUFGVTtBQUdiOzs7OzhCQUVTO0FBQ04sVUFBSUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsQ0FBY0QsS0FBMUI7QUFDQSxVQUFJRSxRQUFRLEdBQUdGLEtBQUssQ0FBQyxLQUFLRixLQUFMLENBQVdDLElBQVosQ0FBcEI7O0FBRUEsVUFBSUcsUUFBSixFQUFjO0FBQ1YsYUFBS0MsVUFBTCxHQUFrQixJQUFJQyxnREFBSixDQUFhLEtBQUtILFFBQWxCLEVBQTRCSSxNQUE1QixDQUFtQ0gsUUFBbkMsRUFBNkMsS0FBS0ksVUFBbEQsQ0FBbEI7QUFDSDtBQUNKOzs7Z0NBRVc7QUFDUixVQUFHLEtBQUtILFVBQVIsRUFBb0I7QUFDaEIsYUFBS0EsVUFBTCxDQUFnQkksT0FBaEI7QUFDSDtBQUNKOzs7O0VBbkJ1QkMsK0M7Ozs7Ozs7Ozs7OztBQ1I1QjtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNDLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCO0FBQzNCLFNBQU9BLEdBQUcsWUFBWUMsZ0RBQXRCO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDSkQ7QUFBQTtBQUFBO0NBRUE7O0FBQ08sSUFBSUMsTUFBTSxHQUFHO0FBQ2hCQyxpQkFBZSxFQUFFLElBQUlGLGdEQUFKLEVBREQ7QUFFaEJHLGtCQUFnQixFQUFFLElBQUlILGdEQUFKO0FBRkYsQ0FBYixDOzs7Ozs7Ozs7Ozs7QUNIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGTyxJQUFNSSxLQUFiLEdBQ0ksZUFBWUMsQ0FBWixFQUFlQyxHQUFmLEVBQW9CO0FBQUE7O0FBQ2hCLE9BQUtDLE1BQUwsR0FBY0YsQ0FBZDtBQUNBLE9BQUtHLFFBQUwsR0FBZ0JGLEdBQWhCO0FBQ0gsQ0FKTCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU1OLE9BQWI7QUFDSSxxQkFBYztBQUFBOztBQUNWLFNBQUtTLElBQUwsR0FBWSxFQUFaO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNIOztBQUpMO0FBQUE7QUFBQSx1QkFNT0MsRUFOUCxFQU1XO0FBQUE7O0FBQ0gsVUFBSUMsS0FBSyxHQUFHLEtBQUtGLFFBQUwsQ0FBY0csT0FBZCxDQUFzQkYsRUFBdEIsQ0FBWixDQURHLENBR0g7O0FBQ0EsVUFBR0MsS0FBSyxLQUFLLENBQUMsQ0FBZCxFQUFnQjtBQUNaLGFBQUtGLFFBQUwsQ0FBY0ksSUFBZCxDQUFtQkgsRUFBbkI7QUFDSCxPQUZELE1BR0s7QUFDRCxjQUFNLElBQUlJLEtBQUosQ0FBVSxvREFBVixDQUFOO0FBQ0g7O0FBRUQsYUFBTztBQUFBLGVBQU0sS0FBSSxDQUFDQyxHQUFMLENBQVNMLEVBQVQsQ0FBTjtBQUFBLE9BQVA7QUFDSDtBQWxCTDtBQUFBO0FBQUEsd0JBb0JRQSxFQXBCUixFQW9CWTtBQUNKLFVBQUlDLEtBQUssR0FBRyxLQUFLRixRQUFMLENBQWNHLE9BQWQsQ0FBc0JGLEVBQXRCLENBQVo7O0FBRUEsVUFBSUMsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNkLGFBQUtGLFFBQUwsQ0FBY08sTUFBZCxDQUFxQkwsS0FBckIsRUFBNEIsQ0FBNUI7QUFDSDtBQUNKO0FBMUJMO0FBQUE7QUFBQSx5QkE0QlNILElBNUJULEVBNEJlUyxLQTVCZixFQTRCc0I7QUFBQTs7QUFDZEEsV0FBSyxHQUFHQSxLQUFLLElBQUksSUFBakIsQ0FEYyxDQUVkOztBQUNBLFdBQUtULElBQUwsR0FBWUEsSUFBSSxJQUFJLEVBQXBCO0FBRUEsV0FBS0MsUUFBTCxDQUFjUyxPQUFkLENBQXNCLFVBQUFDLE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNDLElBQVIsQ0FBYUgsS0FBYixFQUFvQixNQUFwQixDQUFKO0FBQUEsT0FBN0I7QUFDSDtBQWxDTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQUksb0RBQUEsQ0FBb0Isa0VBQXBCO0FBRU8sSUFBSUMsV0FBVyxHQUFHLGFBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHLFFBQW5CLEM7Ozs7Ozs7Ozs7OztBQ0xQO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU3hDLFNBQVQsQ0FBbUJ5QyxRQUFuQixFQUE2QjtBQUNoQyxTQUFPLFVBQVVDLE1BQVYsRUFBa0I7QUFDckIsUUFBSXhDLEdBQUcsR0FBR3VDLFFBQVEsQ0FBQ3ZDLEdBQVQsSUFBZ0J3QyxNQUFNLENBQUN0QyxJQUFqQztBQUNBc0MsVUFBTSxDQUFDQyxTQUFQLENBQWlCQyxVQUFqQixHQUE4QkgsUUFBOUI7QUFDQUksa0RBQVEsQ0FBQ0MsaUJBQVQsQ0FBMkI1QyxHQUEzQixFQUFnQ3dDLE1BQWhDO0FBQ0gsR0FKRDtBQUtILEM7Ozs7Ozs7Ozs7OztBQ1JEO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU0ssU0FBVCxDQUFtQk4sUUFBbkIsRUFBNkI7QUFDaEMsU0FBTyxVQUFVQyxNQUFWLEVBQWtCO0FBQ3JCLFFBQUl4QyxHQUFHLEdBQUd1QyxRQUFRLENBQUN2QyxHQUFULElBQWdCd0MsTUFBTSxDQUFDdEMsSUFBakM7QUFDQXNDLFVBQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsVUFBakIsR0FBOEJILFFBQTlCO0FBQ0FJLGtEQUFRLENBQUNHLGlCQUFULENBQTJCOUMsR0FBM0IsRUFBZ0N3QyxNQUFoQztBQUNILEdBSkQ7QUFLSCxDOzs7Ozs7Ozs7Ozs7QUNSRDtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNPLE1BQVQsQ0FBZ0JSLFFBQWhCLEVBQTBCO0FBQzdCLFNBQU8sVUFBVUMsTUFBVixFQUFrQjtBQUNyQixRQUFJeEMsR0FBRyxHQUFHdUMsUUFBUSxDQUFDdkMsR0FBVCxJQUFnQndDLE1BQU0sQ0FBQ3RDLElBQWpDO0FBQ0FzQyxVQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFVBQWpCLEdBQThCSCxRQUE5QjtBQUNBSSxrREFBUSxDQUFDSyxjQUFULENBQXdCaEQsR0FBeEIsRUFBNkJ3QyxNQUE3QjtBQUNILEdBSkQ7QUFLSCxDOzs7Ozs7Ozs7Ozs7QUNSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU1MsT0FBVCxDQUFpQlYsUUFBakIsRUFBMkI7QUFDOUIsU0FBTyxVQUFVQyxNQUFWLEVBQWtCO0FBQ3JCLFFBQUl4QyxHQUFHLEdBQUd1QyxRQUFRLENBQUN2QyxHQUFULElBQWdCd0MsTUFBTSxDQUFDdEMsSUFBakM7QUFDQXNDLFVBQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsVUFBakIsR0FBOEJILFFBQTlCO0FBQ0FJLGtEQUFRLENBQUNPLGVBQVQsQ0FBeUJsRCxHQUF6QixFQUE4QndDLE1BQTlCO0FBQ0gsR0FKRDtBQUtILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkQ7QUFDQTtJQU1NVyxpQixXQUpMTiw0REFBUyxDQUFDO0FBQ1A5QyxXQUFTLEVBQUUsVUFESjtBQUVQQyxLQUFHLEVBQUU7QUFGRSxDQUFELEM7OztBQUtOLCtCQUFjO0FBQUE7O0FBQUE7QUFFYjs7Ozs2QkFFUW9ELEssRUFBTztBQUNaLFdBQUs5QixRQUFMLENBQWMrQixTQUFkLEdBQTBCRCxLQUExQjtBQUNIOzs7O0VBUDJCRSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQaEM7QUFDQTtJQU1NQyxhLFdBSkxWLDREQUFTLENBQUM7QUFDUDlDLFdBQVMsRUFBRSxVQURKO0FBRVBDLEtBQUcsRUFBRTtBQUZFLENBQUQsQzs7O0FBS04sMkJBQWM7QUFBQTs7QUFBQTtBQUViOzs7OzZCQUVRb0QsSyxFQUFPO0FBQ1osV0FBSzlCLFFBQUwsQ0FBY2tDLFNBQWQsR0FBMEJKLEtBQTFCO0FBQ0g7Ozs7RUFQdUJFLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1A1QjtBQUNBO0lBTU1HLGEsV0FKTFosNERBQVMsQ0FBQztBQUNQOUMsV0FBUyxFQUFFLFVBREo7QUFFUEMsS0FBRyxFQUFFO0FBRkUsQ0FBRCxDOzs7QUFLTiwyQkFBYztBQUFBOztBQUFBO0FBRWI7Ozs7NkJBRVFvRCxLLEVBQU87QUFDWixXQUFLQSxLQUFLLEdBQUcsY0FBSCxHQUFvQixjQUE5QjtBQUNIOzs7O0VBUHVCRSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQNUI7QUFDQTtJQU1NSSxXLFdBSkxiLDREQUFTLENBQUM7QUFDUDlDLFdBQVMsRUFBRSxVQURKO0FBRVBDLEtBQUcsRUFBRTtBQUZFLENBQUQsQzs7O0FBS04seUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUsyRCxZQUFMLEdBQW9CQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBcEI7QUFGVTtBQUdiOzs7OzZCQUVRVCxLLEVBQU87QUFDWixXQUFLQSxLQUFLLEdBQUcsZ0JBQUgsR0FBc0IsZ0JBQWhDO0FBQ0g7Ozs7RUFScUJFLCtDOzs7Ozs7Ozs7Ozs7QUNQMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0lBTU1RLGMsV0FKTGpCLDREQUFTLENBQUM7QUFDUDlDLFdBQVMsRUFBRSxVQURKO0FBRVBDLEtBQUcsRUFBRTtBQUZFLENBQUQsQzs7O0FBS04sNEJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUsrRCxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUtDLG1CQUFMLEdBQTJCLEVBQTNCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUtDLE1BQUwsR0FBYztBQUNWQyxjQUFRLEVBQUUsRUFEQTtBQUVWQyxjQUFRLEVBQUUsSUFGQTtBQUdWQyxXQUFLLEVBQUUsS0FIRztBQUlWQyxXQUFLLEVBQUUsSUFKRztBQUtWQyxhQUFPLEVBQUU7QUFMQyxLQUFkO0FBT0EsVUFBS0MsT0FBTCxHQUFlO0FBQ1hDLFNBQUcsRUFBRTtBQUNETCxnQkFBUSxFQUFFLFlBRFQ7QUFFREMsYUFBSyxFQUFFLFNBRk47QUFHREMsYUFBSyxFQUFFLFNBSE47QUFJREMsZUFBTyxFQUFFO0FBSlI7QUFETSxLQUFmO0FBZlU7QUF1QmI7Ozs7NkJBRVF0QixLLEVBQU87QUFDWixXQUFLeUIsZ0JBQUwsQ0FBc0J6QixLQUF0QjtBQUNIOzs7Z0NBRVc7QUFBQTs7QUFDUixVQUFJbEQsSUFBSSxHQUFHLEtBQUtvQixRQUFMLENBQWNwQixJQUF6Qjs7QUFFQSxVQUFJQSxJQUFKLEVBQVU7QUFDTixhQUFLNEUsTUFBTCxDQUFZQyxLQUFaLENBQWtCN0UsSUFBbEIsSUFBMEIsS0FBS21FLE1BQS9CO0FBQ0g7O0FBRUQsVUFBSSxLQUFLVyxVQUFMLElBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLGFBQUtBLFVBQUwsQ0FBZ0JDLEtBQWhCLENBQXNCLFFBQXRCLEVBQWdDLFVBQUE5RCxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDK0QsZUFBTCxDQUFxQi9ELENBQUMsQ0FBQ0ksSUFBRixDQUFPNEQsUUFBNUIsQ0FBSjtBQUFBLFNBQWpDO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsYUFBSzdELFFBQUwsQ0FBYzhELGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFVBQUFqRSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDK0QsZUFBTCxDQUFxQi9ELENBQUMsQ0FBQ3FCLE1BQUYsQ0FBU1ksS0FBOUIsQ0FBSjtBQUFBLFNBQXpDO0FBQ0g7QUFDSjs7O2dDQUVXLENBRVg7OztxQ0FFZ0JpQyxRLEVBQVU7QUFDdkIsVUFBSSxLQUFLckIsVUFBTCxLQUFvQnFCLFFBQXhCLEVBQWtDO0FBQzlCO0FBQ0g7O0FBRUQsVUFBSUMsSUFBSSxHQUFHLElBQVg7QUFFQSxXQUFLbEIsVUFBTCxDQUFnQm5DLE9BQWhCLENBQXdCLFVBQVVzRCxTQUFWLEVBQXFCO0FBQ3pDQSxpQkFBUyxDQUFDcEQsSUFBVixDQUFlbUQsSUFBZixFQUFxQkQsUUFBckIsRUFBK0IsS0FBS3JCLFVBQXBDO0FBQ0gsT0FGRDtBQUlBLFdBQUtBLFVBQUwsR0FBa0JxQixRQUFsQjtBQUVBLFdBQUtuQixVQUFMLENBQWdCakMsT0FBaEIsQ0FBd0IsVUFBVXVELFNBQVYsRUFBcUI7QUFDekNILGdCQUFRLEdBQUdHLFNBQVMsQ0FBQ3JELElBQVYsQ0FBZW1ELElBQWYsRUFBcUJELFFBQXJCLENBQVg7QUFDSCxPQUZEOztBQUlBLFVBQUksS0FBS3RCLFNBQUwsS0FBbUJzQixRQUF2QixFQUFpQztBQUM3QjtBQUNIOztBQUVELFdBQUt0QixTQUFMLEdBQWlCc0IsUUFBakI7O0FBRUEsVUFBSSxLQUFLTCxVQUFMLElBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLGFBQUtBLFVBQUwsQ0FBZ0JTLFlBQWhCLENBQTZCLE9BQTdCLEVBQXNDSixRQUF0QztBQUNILE9BRkQsTUFFTztBQUNILGFBQUsvRCxRQUFMLENBQWM4QixLQUFkLEdBQXNCaUMsUUFBdEI7QUFDSDs7QUFFRCxXQUFLSyxpQkFBTDtBQUNIOzs7b0NBRWVMLFEsRUFBVTtBQUN0QixVQUFJLEtBQUt0QixTQUFMLEtBQW1Cc0IsUUFBdkIsRUFBaUM7QUFDN0I7QUFDSDs7QUFFRCxVQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUVBLFdBQUtLLGVBQUwsQ0FBcUIsSUFBckI7QUFFQSxXQUFLeEIsbUJBQUwsQ0FBeUJsQyxPQUF6QixDQUFpQyxVQUFVMkQsUUFBVixFQUFvQjtBQUNqREEsZ0JBQVEsQ0FBQ3pELElBQVQsQ0FBY21ELElBQWQsRUFBb0JELFFBQXBCLEVBQThCQyxJQUFJLENBQUN2QixTQUFuQztBQUNILE9BRkQ7QUFJQSxXQUFLQSxTQUFMLEdBQWlCc0IsUUFBakI7QUFFQSxXQUFLcEIsT0FBTCxDQUFhaEMsT0FBYixDQUFxQixVQUFVNEQsTUFBVixFQUFrQjtBQUNuQ1IsZ0JBQVEsR0FBR1EsTUFBTSxDQUFDMUQsSUFBUCxDQUFZbUQsSUFBWixFQUFrQkQsUUFBbEIsQ0FBWDtBQUNILE9BRkQ7O0FBSUEsVUFBRyxLQUFLckIsVUFBTCxLQUFvQnFCLFFBQXZCLEVBQWlDO0FBQzdCO0FBQ0g7O0FBRUQsV0FBS2pCLFVBQUwsQ0FBZ0JuQyxPQUFoQixDQUF3QixVQUFVc0QsU0FBVixFQUFxQjtBQUN6Q0EsaUJBQVMsQ0FBQ3BELElBQVYsQ0FBZW1ELElBQWYsRUFBcUJELFFBQXJCLEVBQStCQyxJQUFJLENBQUN0QixVQUFwQztBQUNILE9BRkQ7QUFJQSxXQUFLQSxVQUFMLEdBQWtCcUIsUUFBbEI7QUFFQSxXQUFLUyxRQUFMLENBQWNDLE1BQWQsQ0FBcUJWLFFBQXJCO0FBQ0g7Ozt3Q0FFbUI7QUFDaEIsVUFBSVcsR0FBRyxHQUFHLEtBQUsxRSxRQUFmO0FBQUEsVUFDSXNELEdBQUcsR0FBRyxLQUFLRCxPQUFMLENBQWFDLEdBRHZCOztBQUdBLFVBQUksS0FBS1AsTUFBTCxDQUFZRyxLQUFoQixFQUF1QjtBQUNuQndCLFdBQUcsQ0FBQ0MsU0FBSixDQUFjQyxHQUFkLENBQWtCdEIsR0FBRyxDQUFDSixLQUF0QjtBQUNBd0IsV0FBRyxDQUFDQyxTQUFKLENBQWNFLE1BQWQsQ0FBcUJ2QixHQUFHLENBQUNMLFFBQXpCO0FBQ0gsT0FIRCxNQUdPO0FBQ0h5QixXQUFHLENBQUNDLFNBQUosQ0FBY0MsR0FBZCxDQUFrQnRCLEdBQUcsQ0FBQ0wsUUFBdEI7QUFDQXlCLFdBQUcsQ0FBQ0MsU0FBSixDQUFjRSxNQUFkLENBQXFCdkIsR0FBRyxDQUFDSixLQUF6QjtBQUNIOztBQUVELFVBQUksS0FBS0gsTUFBTCxDQUFZSSxLQUFoQixFQUF1QjtBQUNuQnVCLFdBQUcsQ0FBQ0MsU0FBSixDQUFjQyxHQUFkLENBQWtCdEIsR0FBRyxDQUFDSCxLQUF0QjtBQUNBdUIsV0FBRyxDQUFDQyxTQUFKLENBQWNFLE1BQWQsQ0FBcUJ2QixHQUFHLENBQUNGLE9BQXpCO0FBQ0gsT0FIRCxNQUdPO0FBQ0hzQixXQUFHLENBQUNDLFNBQUosQ0FBY0MsR0FBZCxDQUFrQnRCLEdBQUcsQ0FBQ0YsT0FBdEI7QUFDQXNCLFdBQUcsQ0FBQ0MsU0FBSixDQUFjRSxNQUFkLENBQXFCdkIsR0FBRyxDQUFDSCxLQUF6QjtBQUNIO0FBQ0o7OztvQ0FFZUQsSyxFQUFPO0FBQ25CLFdBQUtILE1BQUwsQ0FBWUcsS0FBWixHQUFvQkEsS0FBcEI7QUFDQSxXQUFLSCxNQUFMLENBQVlFLFFBQVosR0FBdUIsQ0FBQ0MsS0FBeEI7QUFDQSxXQUFLa0IsaUJBQUw7QUFDSDs7O29DQUVlakIsSyxFQUFPSCxRLEVBQVU7QUFDN0IsV0FBS0QsTUFBTCxDQUFZSSxLQUFaLEdBQW9CQSxLQUFwQjtBQUNBLFdBQUtKLE1BQUwsQ0FBWUssT0FBWixHQUFzQixDQUFDRCxLQUF2QjtBQUNBLFdBQUtKLE1BQUwsQ0FBWUMsUUFBWixHQUF1QkEsUUFBdkI7QUFDQSxXQUFLb0IsaUJBQUw7QUFDSDs7OztFQWpKd0JwQywrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1A3QjtBQUNBO0FBQ0E7QUFDQTtJQU1NOEMsZSxXQUpMdkQsNERBQVMsQ0FBQztBQUNQOUMsV0FBUyxFQUFFLFVBREo7QUFFUEMsS0FBRyxFQUFFO0FBRkUsQ0FBRCxDOzs7QUFLTiw2QkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS3FHLE9BQUwsR0FBZSxFQUFmO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCLElBQUlDLEdBQUosRUFBakI7QUFDQSxVQUFLQyxpQkFBTCxHQUF5QixJQUF6QjtBQU5VO0FBT2I7Ozs7OEJBRVNDLEksRUFBTUMsSyxFQUFPO0FBQ25CLFVBQUlDLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxTQUFoQjtBQUNBLFVBQUlDLE9BQU8sR0FBRyw2QkFBZDtBQUNBLFVBQUlDLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxJQUFSLENBQWFKLEdBQWIsQ0FBYjs7QUFFQSxVQUFJRyxNQUFNLElBQUksSUFBZCxFQUFvQjtBQUNoQixjQUFNLElBQUluRixLQUFKLENBQVUsa0NBQVYsQ0FBTjtBQUNIOztBQUVELFdBQUt3RSxPQUFMLEdBQWVXLE1BQU0sQ0FBQyxDQUFELENBQXJCO0FBQ0EsV0FBS1YsUUFBTCxHQUFnQlUsTUFBTSxDQUFDLENBQUQsQ0FBdEI7QUFDQUwsVUFBSSxDQUFDTyxVQUFMLENBQWdCTixLQUFoQjtBQUNBLFdBQUtMLFlBQUwsR0FBb0JJLElBQUksQ0FBQ1EsV0FBTCxFQUFwQixDQVptQixDQWNuQjs7QUFDQSxhQUFPLElBQVA7QUFDSDs7OzJCQUVNbkYsSyxFQUFPO0FBQUE7O0FBQ1YsVUFBSW9GLFFBQVEsR0FBR3hELFFBQVEsQ0FBQ3lELHNCQUFULEVBQWY7QUFDQSxVQUFJQyxNQUFNLEdBQUcxRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWI7QUFDQSxVQUFJMEQsTUFBTSxHQUFHM0QsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQWI7QUFFQXVELGNBQVEsQ0FBQ0ksV0FBVCxDQUFxQkYsTUFBckI7QUFDQUYsY0FBUSxDQUFDSSxXQUFULENBQXFCLEtBQUtoSCxNQUFMLENBQVl3QixLQUFaLENBQXJCO0FBQ0FvRixjQUFRLENBQUNJLFdBQVQsQ0FBcUJELE1BQXJCO0FBRUEsV0FBS2IsaUJBQUwsR0FBeUIxRSxLQUFLLENBQUN5RixnQkFBTixDQUF1QixLQUFLbkIsUUFBNUIsRUFBc0MsWUFBTTtBQUNqRSxZQUFJYyxRQUFRLEdBQUcsTUFBSSxDQUFDNUcsTUFBTCxDQUFZd0IsS0FBWixDQUFmOztBQUNBSSxrRUFBQSxDQUEwQmtGLE1BQTFCLEVBQWtDQyxNQUFsQztBQUNBQSxjQUFNLENBQUNHLFVBQVAsQ0FBa0JDLFlBQWxCLENBQStCUCxRQUEvQixFQUF5Q0csTUFBekM7QUFDSCxPQUp3QixDQUF6QjtBQU1BLGFBQU9ILFFBQVA7QUFDSDs7OzJCQUVNcEYsSyxFQUFPO0FBQ1YsVUFBSXNELElBQUksR0FBRyxJQUFYO0FBQ0EsVUFBSXNDLEtBQUssR0FBRzVGLEtBQUssQ0FBQzZGLEtBQU4sQ0FBWSxLQUFLdkIsUUFBakIsQ0FBWjtBQUNBLFVBQUljLFFBQVEsR0FBR3hELFFBQVEsQ0FBQ3lELHNCQUFULEVBQWY7QUFDQSxVQUFJYixTQUFTLEdBQUcsSUFBSUMsR0FBSixFQUFoQjtBQUVBcUIsb0RBQUEsQ0FBY0YsS0FBZCxFQUFxQixVQUFVRyxJQUFWLEVBQWdCL0gsR0FBaEIsRUFBcUI7QUFDdEMsWUFBSWdJLFFBQVEsR0FBRzFDLElBQUksQ0FBQzJDLGlCQUFMLENBQXVCM0MsSUFBSSxDQUFDa0IsU0FBNUIsRUFBdUN1QixJQUF2QyxDQUFmOztBQUVBLFlBQUksQ0FBQ0MsUUFBTCxFQUFlO0FBQ1gsY0FBSUUsTUFBTSxHQUFHLEVBQWI7QUFDQUEsZ0JBQU0sQ0FBQyxNQUFELENBQU4sR0FBaUJsSSxHQUFqQjtBQUNBa0ksZ0JBQU0sQ0FBQyxRQUFELENBQU4sR0FBbUJsSSxHQUFuQjtBQUNBa0ksZ0JBQU0sQ0FBQzVDLElBQUksQ0FBQ2UsT0FBTixDQUFOLEdBQXVCMEIsSUFBdkI7QUFDQUMsa0JBQVEsR0FBRzFDLElBQUksQ0FBQzZDLE9BQUwsQ0FBYTdDLElBQUksQ0FBQ2lCLFlBQWxCLEVBQWdDMkIsTUFBaEMsQ0FBWDtBQUNIOztBQUVENUMsWUFBSSxDQUFDOEMsZUFBTCxDQUFxQjVCLFNBQXJCLEVBQWdDdUIsSUFBaEMsRUFBc0NDLFFBQXRDO0FBQ0FaLGdCQUFRLENBQUNJLFdBQVQsQ0FBcUJRLFFBQVEsQ0FBQ0ssT0FBOUI7QUFDSCxPQWJEO0FBZUEsV0FBSzdCLFNBQUwsQ0FBZXZFLE9BQWYsQ0FBdUIsVUFBVXFHLElBQVYsRUFBZ0I7QUFDbkNBLFlBQUksQ0FBQ3JHLE9BQUwsQ0FBYSxVQUFVc0csSUFBVixFQUFnQjtBQUN6QkEsY0FBSSxDQUFDN0gsT0FBTDtBQUNILFNBRkQ7QUFHSCxPQUpEO0FBTUEsV0FBSzhGLFNBQUwsR0FBaUJBLFNBQWpCO0FBRUEsYUFBT1ksUUFBUDtBQUNIOzs7c0NBRWlCb0IsTSxFQUFRQyxRLEVBQVU7QUFDaEMsVUFBSUYsSUFBSjs7QUFFQSxVQUFJQyxNQUFNLENBQUNFLEdBQVAsQ0FBV0QsUUFBWCxDQUFKLEVBQTBCO0FBQ3RCLFlBQUlILElBQUksR0FBR0UsTUFBTSxDQUFDRyxHQUFQLENBQVdGLFFBQVgsQ0FBWDs7QUFFQSxZQUFJSCxJQUFJLENBQUNNLE1BQVQsRUFBaUI7QUFDYkwsY0FBSSxHQUFHRCxJQUFJLENBQUNPLEtBQUwsRUFBUDtBQUNILFNBRkQsTUFFTztBQUNITCxnQkFBTSxVQUFOLENBQWNDLFFBQWQ7QUFDSDtBQUNKOztBQUVELGFBQU9GLElBQVA7QUFDSDs7O29DQUVlQyxNLEVBQVFDLFEsRUFBVUYsSSxFQUFNO0FBQ3BDLFVBQUlELElBQUo7O0FBRUEsVUFBSUUsTUFBTSxDQUFDRSxHQUFQLENBQVdELFFBQVgsQ0FBSixFQUEwQjtBQUN0QkgsWUFBSSxHQUFHRSxNQUFNLENBQUNHLEdBQVAsQ0FBV0YsUUFBWCxDQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0hILFlBQUksR0FBRyxFQUFQO0FBQ0FFLGNBQU0sQ0FBQ00sR0FBUCxDQUFXTCxRQUFYLEVBQXFCSCxJQUFyQjtBQUNIOztBQUVEQSxVQUFJLENBQUMxRyxJQUFMLENBQVUyRyxJQUFWO0FBQ0g7OztnQ0FFVztBQUNSLFdBQUsvQixTQUFMLENBQWV2RSxPQUFmLENBQXVCLFVBQUNxRyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDckcsT0FBTCxDQUFhLFVBQUFzRyxJQUFJO0FBQUEsaUJBQUlBLElBQUksQ0FBQzdILE9BQUwsRUFBSjtBQUFBLFNBQWpCLENBQVY7QUFBQSxPQUF2QjtBQUNBLFdBQUtnRyxpQkFBTCxJQUEwQixLQUFLQSxpQkFBTCxFQUExQjtBQUNIOzs7O0VBOUd5QnBELCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Q5QjtBQUNBO0lBTU15RixhLFdBSkxsRyw0REFBUyxDQUFDO0FBQ1A5QyxXQUFTLEVBQUUsVUFESjtBQUVQQyxLQUFHLEVBQUU7QUFGRSxDQUFELEM7OztBQUtOLDJCQUFjO0FBQUE7O0FBQUE7QUFFYjs7Ozs2QkFFUW9ELEssRUFBTztBQUNaLFdBQUtBLEtBQUssR0FBRyxjQUFILEdBQW9CLGNBQTlCO0FBQ0g7Ozs7RUFQdUJFLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDVCO0FBQ0E7SUFNTTBGLGdCLFdBSkxuRyw0REFBUyxDQUFDO0FBQ1A5QyxXQUFTLEVBQUUsVUFESjtBQUVQQyxLQUFHLEVBQUU7QUFGRSxDQUFELEM7OztBQUtOLDhCQUFjO0FBQUE7O0FBQUEseUZBQ0osU0FESTtBQUViOzs7RUFIMEJpSixxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1AvQjtBQUNBO0lBTU1DLGlCLFdBSkxyRyw0REFBUyxDQUFDO0FBQ1A5QyxXQUFTLEVBQUUsVUFESjtBQUVQQyxLQUFHLEVBQUU7QUFGRSxDQUFELEM7OztBQUtOLCtCQUFjO0FBQUE7O0FBQUEsMEZBQ0osVUFESTtBQUViOzs7RUFIMkJpSixxRDs7Ozs7Ozs7Ozs7O0FDUGhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtJQU1NRSxpQixXQUpMdEcsNERBQVMsQ0FBQztBQUNQOUMsV0FBUyxFQUFFLFVBREo7QUFFUEMsS0FBRyxFQUFFO0FBRkUsQ0FBRCxDOzs7QUFLTiwrQkFBYztBQUFBOztBQUFBLDBGQUNKLFVBREk7QUFFYjs7O0VBSDJCaUoscUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQaEM7QUFDQTtJQU1NRyxpQixXQUpMdkcsNERBQVMsQ0FBQztBQUNQOUMsV0FBUyxFQUFFLFVBREo7QUFFUEMsS0FBRyxFQUFFO0FBRkUsQ0FBRCxDOzs7QUFLTiwrQkFBYztBQUFBOztBQUFBLDBGQUNKLFVBREk7QUFFYjs7O0VBSDJCaUoscUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BoQztBQUVPLElBQU1BLGNBQWI7QUFBQTs7QUFDSSwwQkFBWWpKLEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDYjtBQUNBLFVBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUZhO0FBR2hCOztBQUpMO0FBQUE7QUFBQSw2QkFNYW9ELEtBTmIsRUFNb0I7QUFDWixVQUFJQSxLQUFKLEVBQVc7QUFDUCxZQUFJLENBQUMsS0FBSzlCLFFBQUwsQ0FBYytILFlBQWQsQ0FBMkIsS0FBS3JKLEdBQWhDLENBQUwsRUFBMkM7QUFDdkMsZUFBS3NCLFFBQUwsQ0FBY2dJLFlBQWQsQ0FBMkIsS0FBS3RKLEdBQWhDLEVBQXFDLEVBQXJDO0FBQ0g7QUFDSixPQUpELE1BSU87QUFDSCxZQUFJLEtBQUtzQixRQUFMLENBQWMrSCxZQUFkLENBQTJCLEtBQUtySixHQUFoQyxDQUFKLEVBQTBDO0FBQ3RDLGVBQUtzQixRQUFMLENBQWNpSSxlQUFkLENBQThCLEtBQUt2SixHQUFuQztBQUNIO0FBQ0o7QUFDSjtBQWhCTDs7QUFBQTtBQUFBLEVBQW9Dc0QsK0NBQXBDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtJQU1Na0csa0IsV0FKTDNHLDREQUFTLENBQUM7QUFDUDlDLFdBQVMsRUFBRSxVQURKO0FBRVBDLEtBQUcsRUFBRTtBQUZFLENBQUQsQzs7O0FBS04sZ0NBQWM7QUFBQTs7QUFBQTtBQUViOzs7O3FDQUVnQjtBQUNiLFVBQUkwQixLQUFLLEdBQUcsS0FBS21HLEtBQUwsQ0FBVyxRQUFYLENBQVo7QUFDQSxhQUFPbkcsS0FBSyxHQUFHLE1BQU0sQ0FBckI7QUFDSDs7OztFQVI0QitILHFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BqQztBQUNBO0lBTU1DLGlCLFdBSkw3Ryw0REFBUyxDQUFDO0FBQ1A5QyxXQUFTLEVBQUUsVUFESjtBQUVQQyxLQUFHLEVBQUU7QUFGRSxDQUFELEM7OztBQUtOLCtCQUFjO0FBQUE7O0FBQUE7QUFFYjs7OztxQ0FFZ0I7QUFDYixVQUFJMEIsS0FBSyxHQUFHLEtBQUttRyxLQUFMLENBQVcsUUFBWCxDQUFaO0FBQ0EsYUFBT25HLEtBQUssR0FBRyxNQUFNLENBQXJCO0FBQ0g7Ozs7RUFSMkIrSCxxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BoQztBQUNBO0FBQ0E7QUFNTyxJQUFNQSxjQUFiLFdBSkM1Ryw0REFBUyxDQUFDO0FBQ1A5QyxXQUFTLEVBQUUsVUFESjtBQUVQQyxLQUFHLEVBQUU7QUFGRSxDQUFELENBSVY7QUFBQTs7QUFDSSw0QkFBYztBQUFBOztBQUFBO0FBRWI7O0FBSEw7QUFBQTtBQUFBLDZCQUthMkosUUFMYixFQUt1QkMsUUFMdkIsRUFLaUM7QUFDekIsVUFBSSxLQUFLQyxjQUFMLEVBQUosRUFBMkI7QUFDdkI7QUFDSDs7QUFFRCxVQUFJRCxRQUFKLEVBQWM7QUFDVnhILHdEQUFBLENBQWdCLEtBQUtkLFFBQXJCLEVBQStCc0ksUUFBUSxDQUFDRSxJQUFULENBQWMsR0FBZCxDQUEvQjtBQUNIOztBQUVELFVBQUlILFFBQUosRUFBYztBQUNWdkgscURBQUEsQ0FBYSxLQUFLZCxRQUFsQixFQUE0QnFJLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEdBQWQsQ0FBNUI7QUFDSDtBQUNKO0FBakJMO0FBQUE7QUFBQSxxQ0FtQnFCO0FBQ2IsYUFBTyxLQUFQO0FBQ0g7QUFyQkw7O0FBQUE7QUFBQSxFQUFvQ3hHLCtDQUFwQyxjOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtJQU1NeUcsa0IsV0FKTGxILDREQUFTLENBQUM7QUFDUDlDLFdBQVMsRUFBRSxVQURKO0FBRVBDLEtBQUcsRUFBRTtBQUZFLENBQUQsQzs7O0FBS04sZ0NBQWM7QUFBQTs7QUFBQTtBQUViOzs7O3FDQUVnQjtBQUNiLFVBQUkwQixLQUFLLEdBQUcsS0FBS21HLEtBQUwsQ0FBVyxRQUFYLENBQVo7QUFDQSxhQUFPbkcsS0FBSyxHQUFHLE1BQU0sQ0FBckI7QUFDSDs7OztFQVI0QnNJLHFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BqQztBQUNBO0lBTU1DLGlCLFdBSkxwSCw0REFBUyxDQUFDO0FBQ1A5QyxXQUFTLEVBQUUsVUFESjtBQUVQQyxLQUFHLEVBQUU7QUFGRSxDQUFELEM7OztBQUtOLCtCQUFjO0FBQUE7O0FBQUE7QUFFYjs7OztxQ0FFZ0I7QUFDYixVQUFJMEIsS0FBSyxHQUFHLEtBQUttRyxLQUFMLENBQVcsUUFBWCxDQUFaO0FBQ0EsYUFBT25HLEtBQUssR0FBRyxNQUFNLENBQXJCO0FBQ0g7Ozs7RUFSMkJzSSxxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BoQztBQUNBO0FBQ0E7QUFNTyxJQUFNQSxjQUFiLFdBSkNuSCw0REFBUyxDQUFDO0FBQ1A5QyxXQUFTLEVBQUUsVUFESjtBQUVQQyxLQUFHLEVBQUU7QUFGRSxDQUFELENBSVY7QUFBQTs7QUFDSSw0QkFBYztBQUFBOztBQUFBO0FBRWI7O0FBSEw7QUFBQTtBQUFBLDZCQUtha0ssUUFMYixFQUt1QkMsUUFMdkIsRUFLaUM7QUFDekIsVUFBSSxLQUFLTixjQUFMLEVBQUosRUFBMkI7QUFDdkI7QUFDSDs7QUFFRCxVQUFJdkUsSUFBSSxHQUFHLElBQVg7O0FBRUEsVUFBSTZFLFFBQUosRUFBYztBQUNWckMsc0RBQUEsQ0FBY3FDLFFBQWQsRUFBd0IsVUFBVS9HLEtBQVYsRUFBaUJwRCxHQUFqQixFQUFzQjtBQUMxQ3NGLGNBQUksQ0FBQ2hFLFFBQUwsQ0FBYzhJLEtBQWQsQ0FBb0JwSyxHQUFwQixJQUEyQixFQUEzQjtBQUNILFNBRkQ7QUFHSDs7QUFFRCxVQUFJOEgsK0NBQUEsQ0FBZW9DLFFBQWYsQ0FBSixFQUE4QjtBQUMxQnBDLHNEQUFBLENBQWNvQyxRQUFkLEVBQXdCLFVBQVU5RyxLQUFWLEVBQWlCcEQsR0FBakIsRUFBc0I7QUFDMUNzRixjQUFJLENBQUNoRSxRQUFMLENBQWM4SSxLQUFkLENBQW9CcEssR0FBcEIsSUFBMkJvRCxLQUEzQjtBQUNILFNBRkQ7QUFHSDtBQUNKO0FBdkJMO0FBQUE7QUFBQSxxQ0F5QnFCO0FBQ2IsYUFBTyxLQUFQO0FBQ0g7QUEzQkw7O0FBQUE7QUFBQSxFQUFvQ0UsK0NBQXBDLGM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtJQU1NK0csc0IsV0FKTHhILDREQUFTLENBQUM7QUFDUDlDLFdBQVMsRUFBRSxVQURKO0FBRVBDLEtBQUcsRUFBRTtBQUZFLENBQUQsQzs7O0FBS04sb0NBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtzSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBSzNHLFlBQUwsR0FBb0JDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBcEI7QUFIVTtBQUliOzs7O2dDQUVXO0FBQUE7O0FBQ1IsV0FBS3lHLFVBQUwsR0FBa0IsS0FBS0MsZ0JBQUwsQ0FBc0IsUUFBdEIsQ0FBbEI7O0FBRUEsVUFBSSxLQUFLRCxVQUFMLElBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLGNBQU0sSUFBSXpJLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0g7O0FBRUQsV0FBS3lJLFVBQUwsQ0FBZ0JFLFlBQWhCLENBQTZCQyxFQUE3QixDQUFnQyxZQUFNO0FBQ2xDLGNBQUksQ0FBQyxNQUFJLENBQUNILFVBQUwsQ0FBZ0JJLGNBQWhCLEdBQWlDLGdCQUFqQyxHQUFvRCxnQkFBckQsQ0FBSjtBQUNILE9BRkQ7O0FBSUEsVUFBRyxDQUFDLEtBQUtKLFVBQUwsQ0FBZ0JJLGNBQXBCLEVBQW9DO0FBQ2hDLGFBQUtDLGNBQUw7QUFDSDtBQUNKOzs7O0VBckJnQ3JILCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQckM7QUFDQTtBQUNBO0lBTU1zSCxtQixXQUpML0gsNERBQVMsQ0FBQztBQUNQOUMsV0FBUyxFQUFFLFVBREo7QUFFUEMsS0FBRyxFQUFFO0FBRkUsQ0FBRCxDOzs7QUFLTixpQ0FBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS29ELEtBQUwsR0FBYSxJQUFiO0FBQ0EsVUFBS3lILE9BQUwsR0FBZSxLQUFmO0FBQ0EsVUFBS1AsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQUtRLE9BQUwsR0FBZSxJQUFJaEssNkNBQUosRUFBZjtBQUNBLFVBQUs2QyxZQUFMLEdBQW9CQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBcEI7QUFOVTtBQU9iOzs7O2dDQUVXO0FBQUE7O0FBQ1IsV0FBS3lHLFVBQUwsR0FBa0IsS0FBS0MsZ0JBQUwsQ0FBc0IsUUFBdEIsQ0FBbEI7O0FBRUEsVUFBSSxLQUFLRCxVQUFMLElBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLGNBQU0sSUFBSXpJLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0g7O0FBRUQsV0FBS3lJLFVBQUwsQ0FBZ0JRLE9BQWhCLENBQXdCTCxFQUF4QixDQUEyQixZQUFNO0FBQzdCLGNBQUksQ0FBQ2pLLE1BQUw7QUFDSCxPQUZEO0FBR0g7Ozs2QkFFUTRDLEssRUFBTztBQUNaLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUs1QyxNQUFMO0FBQ0g7Ozs2QkFFUTtBQUNMLFVBQUlxSyxPQUFPLEdBQUcsS0FBS1AsVUFBTCxDQUFnQmxILEtBQWhCLEtBQTBCLEtBQUtBLEtBQTdDOztBQUVBLFVBQUcsS0FBS3lILE9BQUwsSUFBZ0JBLE9BQW5CLEVBQTRCO0FBQ3hCLGFBQUtBLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxZQUFJQSxPQUFKLEVBQWE7QUFDVCxlQUFLUCxVQUFMLENBQWdCUyxTQUFoQjtBQUNILFNBRkQsTUFFTztBQUNILGVBQUtULFVBQUwsQ0FBZ0JVLFVBQWhCO0FBQ0g7QUFDSjs7QUFFRCxXQUFLSCxPQUFPLEdBQUcsZ0JBQUgsR0FBc0IsZ0JBQWxDO0FBQ0g7Ozs7RUF6QzZCdkgsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JsQztBQUNBO0FBQ0E7SUFNTTJILGUsV0FKTHBJLDREQUFTLENBQUM7QUFDUDlDLFdBQVMsRUFBRSxVQURKO0FBRVBDLEtBQUcsRUFBRTtBQUZFLENBQUQsQzs7O0FBS04sNkJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtvRCxLQUFMLEdBQWEsSUFBYjtBQUNBLFVBQUs4SCxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsVUFBS0osT0FBTCxHQUFlLElBQUloSyw2Q0FBSixFQUFmO0FBQ0EsVUFBSzRKLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxVQUFLRixZQUFMLEdBQW9CLElBQUkxSiw2Q0FBSixFQUFwQjtBQU5VO0FBT2I7Ozs7NkJBRVFzQyxLLEVBQU87QUFDWixXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxXQUFLMEgsT0FBTCxDQUFhSyxJQUFiO0FBQ0g7OztnQ0FFVztBQUNSLFdBQUtELFVBQUw7QUFDQSxXQUFLRSxZQUFMO0FBQ0g7OztpQ0FFWTtBQUNULFdBQUtGLFVBQUw7QUFDQSxXQUFLRSxZQUFMO0FBQ0g7OzttQ0FFYztBQUNYLFVBQUlWLGNBQWMsR0FBRyxLQUFLUSxVQUFMLElBQW1CLENBQXhDOztBQUVBLFVBQUksS0FBS1IsY0FBTCxLQUF3QkEsY0FBNUIsRUFBNEM7QUFDeEMsYUFBS0EsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxhQUFLRixZQUFMLENBQWtCVyxJQUFsQjtBQUNIO0FBQ0o7Ozs7RUFoQ3lCN0gsK0M7Ozs7Ozs7Ozs7OztBQ1A5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVMrSCxvQkFBVCxDQUE4QmpLLEdBQTlCLEVBQW1DO0FBQy9CLFNBQU9rSyxLQUFLLENBQUM3SSxTQUFOLENBQWdCOEksS0FBaEIsQ0FBc0JwSixJQUF0QixDQUEyQmYsR0FBRyxDQUFDb0ssVUFBL0IsRUFBMkMsQ0FBM0MsQ0FBUDtBQUNIOztBQUVELFNBQVNDLHNCQUFULENBQWdDckssR0FBaEMsRUFBcUM7QUFDakNpSyxzQkFBb0IsQ0FBQ2pLLEdBQUQsQ0FBcEIsQ0FBMEJhLE9BQTFCLENBQWtDLFVBQVV5SixLQUFWLEVBQWlCO0FBQy9DdEssT0FBRyxDQUFDdUssV0FBSixDQUFnQkQsS0FBaEI7QUFDSCxHQUZEO0FBR0g7O0FBRUQsU0FBU0UsY0FBVCxDQUF3QnhLLEdBQXhCLEVBQTZCeUssTUFBN0IsRUFBcUM7QUFDakMsTUFBSW5FLFVBQVUsR0FBR3RHLEdBQUcsQ0FBQ3NHLFVBQXJCOztBQUNBLE1BQUlBLFVBQVUsSUFBSSxJQUFsQixFQUF3QjtBQUNwQkEsY0FBVSxDQUFDQyxZQUFYLENBQXdCa0UsTUFBeEIsRUFBZ0N6SyxHQUFoQztBQUNBc0csY0FBVSxDQUFDaUUsV0FBWCxDQUF1QnZLLEdBQXZCO0FBQ0g7QUFDSjs7QUFFRCxTQUFTMEssYUFBVCxDQUF1QjFLLEdBQXZCLEVBQTRCO0FBQ3hCLE1BQUlzRyxVQUFVLEdBQUd0RyxHQUFHLENBQUNzRyxVQUFyQjs7QUFDQSxNQUFJQSxVQUFVLElBQUksSUFBbEIsRUFBd0I7QUFDcEJBLGNBQVUsQ0FBQ2lFLFdBQVgsQ0FBdUJ2SyxHQUF2QjtBQUNIO0FBQ0o7O0FBRUQsU0FBUzJLLHFCQUFULENBQStCQyxRQUEvQixFQUF5Q0MsTUFBekMsRUFBaUQ7QUFDN0MsTUFBSXZFLFVBQVUsR0FBR3NFLFFBQVEsQ0FBQ3RFLFVBQTFCO0FBQ0EsTUFBSThELFVBQVUsR0FBR0gsb0JBQW9CLENBQUMzRCxVQUFELENBQXJDO0FBRUE4RCxZQUFVLENBQUN2SixPQUFYLENBQW1CLFVBQVV5SixLQUFWLEVBQWlCO0FBQ2hDLFFBQUlBLEtBQUssQ0FBQ1EsZUFBTixLQUEwQkYsUUFBMUIsSUFBc0NOLEtBQUssS0FBS08sTUFBcEQsRUFBNEQ7QUFDeER2RSxnQkFBVSxDQUFDaUUsV0FBWCxDQUF1QkQsS0FBdkI7QUFDSDs7QUFDRCxRQUFJQSxLQUFLLENBQUNTLFdBQU4sS0FBc0JGLE1BQXRCLElBQWdDUCxLQUFLLEtBQUtNLFFBQTlDLEVBQXdEO0FBQ3BEdEUsZ0JBQVUsQ0FBQ2lFLFdBQVgsQ0FBdUJELEtBQXZCO0FBQ0g7QUFDSixHQVBEO0FBUUg7O0FBRUQsU0FBU1UsYUFBVCxDQUF1QmhMLEdBQXZCLEVBQTRCeUssTUFBNUIsRUFBb0M7QUFDaEMsTUFBSW5FLFVBQVUsR0FBR3RHLEdBQUcsQ0FBQ3NHLFVBQXJCOztBQUVBLE1BQUlBLFVBQVUsQ0FBQzJFLFNBQVgsS0FBeUJqTCxHQUE3QixFQUFrQztBQUM5QnNHLGNBQVUsQ0FBQ0YsV0FBWCxDQUF1QnFFLE1BQXZCO0FBQ0gsR0FGRCxNQUVPO0FBQ0huRSxjQUFVLENBQUNDLFlBQVgsQ0FBd0JrRSxNQUF4QixFQUFnQ3pLLEdBQUcsQ0FBQytLLFdBQXBDO0FBQ0g7QUFDSjs7QUFFRCxTQUFTRyxRQUFULENBQW1CbEwsR0FBbkIsRUFBd0JtTCxHQUF4QixFQUE2QjtBQUN6QixNQUFJLENBQUNBLEdBQUQsSUFBUSxFQUFFQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsSUFBSixFQUFSLENBQVosRUFBaUM7QUFDN0I7QUFDSDs7QUFFRCxNQUFJcEwsR0FBRyxDQUFDNkUsU0FBUixFQUFtQjtBQUNmLFFBQUlzRyxHQUFHLENBQUM1SyxPQUFKLENBQVksR0FBWixJQUFtQixDQUFDLENBQXhCLEVBQTJCO0FBQ3ZCNEssU0FBRyxDQUFDRSxLQUFKLENBQVUsS0FBVixFQUFpQnhLLE9BQWpCLENBQXlCLFVBQVV5SyxDQUFWLEVBQWE7QUFDbEMsZUFBT3RMLEdBQUcsQ0FBQzZFLFNBQUosQ0FBY0MsR0FBZCxDQUFrQndHLENBQWxCLENBQVA7QUFDSCxPQUZEO0FBR0gsS0FKRCxNQUlPO0FBQ0h0TCxTQUFHLENBQUM2RSxTQUFKLENBQWNDLEdBQWQsQ0FBa0JxRyxHQUFsQjtBQUNIO0FBQ0osR0FSRCxNQVFPO0FBQ0gsUUFBSUksR0FBRyxHQUFHLE9BQU92TCxHQUFHLENBQUN3TCxZQUFKLENBQWlCLE9BQWpCLEtBQTZCLEVBQXBDLElBQTBDLEdBQXBEOztBQUNBLFFBQUlELEdBQUcsQ0FBQ2hMLE9BQUosQ0FBWSxNQUFNNEssR0FBTixHQUFZLEdBQXhCLElBQStCLENBQW5DLEVBQXNDO0FBQ2xDbkwsU0FBRyxDQUFDa0ksWUFBSixDQUFpQixPQUFqQixFQUEwQixDQUFDcUQsR0FBRyxHQUFHSixHQUFQLEVBQVlDLElBQVosRUFBMUI7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsU0FBU0ssV0FBVCxDQUFzQnpMLEdBQXRCLEVBQTJCbUwsR0FBM0IsRUFBZ0M7QUFDNUIsTUFBSSxDQUFDQSxHQUFELElBQVEsRUFBRUEsR0FBRyxHQUFHQSxHQUFHLENBQUNDLElBQUosRUFBUixDQUFaLEVBQWlDO0FBQzdCO0FBQ0g7O0FBRUQsTUFBSXBMLEdBQUcsQ0FBQzZFLFNBQVIsRUFBbUI7QUFDZixRQUFJc0csR0FBRyxDQUFDNUssT0FBSixDQUFZLEdBQVosSUFBbUIsQ0FBQyxDQUF4QixFQUEyQjtBQUN2QjRLLFNBQUcsQ0FBQ0UsS0FBSixDQUFVLEtBQVYsRUFBaUJ4SyxPQUFqQixDQUF5QixVQUFVeUssQ0FBVixFQUFhO0FBQ2xDLGVBQU90TCxHQUFHLENBQUM2RSxTQUFKLENBQWNFLE1BQWQsQ0FBcUJ1RyxDQUFyQixDQUFQO0FBQ0gsT0FGRDtBQUdILEtBSkQsTUFJTztBQUNIdEwsU0FBRyxDQUFDNkUsU0FBSixDQUFjRSxNQUFkLENBQXFCb0csR0FBckI7QUFDSDs7QUFDRCxRQUFJLENBQUNuTCxHQUFHLENBQUM2RSxTQUFKLENBQWMyQyxNQUFuQixFQUEyQjtBQUN2QnhILFNBQUcsQ0FBQ21JLGVBQUosQ0FBb0IsT0FBcEI7QUFDSDtBQUNKLEdBWEQsTUFXTztBQUNILFFBQUlvRCxHQUFHLEdBQUcsT0FBT3ZMLEdBQUcsQ0FBQ3dMLFlBQUosQ0FBaUIsT0FBakIsS0FBNkIsRUFBcEMsSUFBMEMsR0FBcEQ7QUFDQSxRQUFJRSxHQUFHLEdBQUcsTUFBTVAsR0FBTixHQUFZLEdBQXRCOztBQUNBLFdBQU9JLEdBQUcsQ0FBQ2hMLE9BQUosQ0FBWW1MLEdBQVosS0FBb0IsQ0FBM0IsRUFBOEI7QUFDMUJILFNBQUcsR0FBR0EsR0FBRyxDQUFDSSxPQUFKLENBQVlELEdBQVosRUFBaUIsR0FBakIsQ0FBTjtBQUNIOztBQUNESCxPQUFHLEdBQUdBLEdBQUcsQ0FBQ0gsSUFBSixFQUFOOztBQUNBLFFBQUlHLEdBQUosRUFBUztBQUNMdkwsU0FBRyxDQUFDa0ksWUFBSixDQUFpQixPQUFqQixFQUEwQnFELEdBQTFCO0FBQ0gsS0FGRCxNQUVPO0FBQ0h2TCxTQUFHLENBQUNtSSxlQUFKLENBQW9CLE9BQXBCO0FBQ0g7QUFDSjtBQUNKOztBQUVELFNBQVN5RCxlQUFULENBQXlCcEksR0FBekIsRUFBOEI7QUFDMUIsTUFBSXdGLEtBQUssR0FBR3hHLFFBQVEsQ0FBQ3FKLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBN0MsT0FBSyxDQUFDNUMsV0FBTixDQUFrQjVELFFBQVEsQ0FBQ3NKLGNBQVQsQ0FBd0J0SSxHQUF4QixDQUFsQjtBQUNBLE1BQUkwQyxNQUFNLEdBQUcxRCxRQUFRLENBQUN1SixvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUFiO0FBQ0E3RixRQUFNLENBQUNFLFdBQVAsQ0FBbUI0QyxLQUFuQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0dEO0FBQ0E7QUFDQTs7SUFFTWdELFE7QUFDRixvQkFBWUMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUI7QUFBQTs7QUFDckIsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNIOzs7O2dDQUVXdk4sRyxFQUFLcU4sTSxFQUFRQyxHLEVBQUs7QUFDMUIsVUFBSSxDQUFDLEtBQUtDLFFBQUwsQ0FBY3ZOLEdBQWQsQ0FBTCxFQUF5QjtBQUNyQixhQUFLdU4sUUFBTCxDQUFjdk4sR0FBZCxJQUFxQixJQUFJb04sUUFBSixDQUFhQyxNQUFiLEVBQXFCQyxHQUFyQixDQUFyQjtBQUNIOztBQUVELGFBQU8sS0FBS0MsUUFBTCxDQUFjdk4sR0FBZCxDQUFQO0FBQ0g7Ozs7OztBQUdFLElBQU13TixRQUFiO0FBQ0ksb0JBQVkzSCxNQUFaLEVBQW9CO0FBQUE7O0FBQ2hCLFNBQUtBLE1BQUwsR0FBY0EsTUFBTSxJQUFJO0FBQ3BCNEgscUJBQWUsRUFBRUMsaURBQVFBO0FBREwsS0FBeEI7QUFHQSxTQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsSUFBSUMsdURBQUosRUFBZjtBQUNIOztBQVJMO0FBQUE7QUFBQSxtQ0FVbUI5TixHQVZuQixFQVV3QnFOLE1BVnhCLEVBVWdDQyxHQVZoQyxFQVVxQztBQUM3QixVQUFJLENBQUMsS0FBS00sUUFBTCxDQUFjNU4sR0FBZCxDQUFMLEVBQXlCO0FBQ3JCLGFBQUs0TixRQUFMLENBQWM1TixHQUFkLElBQXFCLElBQUlvTixRQUFKLENBQWFDLE1BQWIsRUFBcUJDLEdBQXJCLENBQXJCO0FBQ0g7O0FBRUQsYUFBTyxLQUFLTSxRQUFMLENBQWM1TixHQUFkLENBQVA7QUFDSDtBQWhCTDtBQUFBO0FBQUEsNEJBa0JZc04sR0FsQlosRUFrQmlCO0FBQ1QsVUFBSUssT0FBTyxHQUFHLEtBQUs5SCxNQUFMLENBQVk0SCxlQUFaLENBQTRCSCxHQUE1QixDQUFkO0FBQ0EsYUFBTyxLQUFLUyxjQUFMLENBQW9CSixPQUFwQixDQUFQO0FBQ0g7QUFyQkw7QUFBQTtBQUFBLG1DQXVCbUJBLE9BdkJuQixFQXVCNEI7QUFBQTs7QUFDcEIsV0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFdBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBQSxhQUFPLENBQUNuQyxVQUFSLENBQW1CdkosT0FBbkIsQ0FBMkIsVUFBQXlKLEtBQUs7QUFBQSxlQUFJLEtBQUksQ0FBQ3NDLFdBQUwsQ0FBaUJ0QyxLQUFqQixDQUFKO0FBQUEsT0FBaEM7QUFDQSxhQUFPLEtBQUtrQyxRQUFaO0FBQ0g7QUE1Qkw7QUFBQTtBQUFBLGdDQThCZ0JLLElBOUJoQixFQThCc0JDLE9BOUJ0QixFQThCK0I7QUFDdkIsVUFBSWxILE1BQU0sR0FBRyxJQUFiOztBQUVBLGNBQVFpSCxJQUFJLENBQUNFLElBQWI7QUFDSSxhQUFLQywwQ0FBRyxDQUFDQyxtQkFBVDtBQUNJLGVBQUtDLGlCQUFMLENBQXVCTCxJQUF2QjtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUNHLG9CQUFUO0FBQ0ksZUFBS0MsaUJBQUwsQ0FBdUJQLElBQXZCO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ0sscUJBQVQ7QUFDSSxlQUFLQyxnQkFBTCxDQUFzQlQsSUFBdEI7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDTyxpQkFBVDtBQUNJLGVBQUtDLFlBQUwsQ0FBa0JYLElBQWxCO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ1MsZ0JBQVQ7QUFDSSxlQUFLQyxhQUFMLENBQW1CYixJQUFuQjtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUNXLGVBQVQ7QUFDSSxlQUFLQyxZQUFMLENBQWtCZixJQUFsQjtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUNhLGNBQVQ7QUFDSSxlQUFLQyxXQUFMLENBQWlCakIsSUFBakI7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDZSxnQkFBVDtBQUNJbkksZ0JBQU0sR0FBRyxLQUFLb0ksYUFBTCxDQUFtQm5CLElBQW5CLEVBQXlCQyxPQUF6QixDQUFUO0FBQ0E7O0FBQ0osYUFBS0UsMENBQUcsQ0FBQ2lCLFVBQVQ7QUFDSXJJLGdCQUFNLEdBQUcsS0FBS3NJLGlCQUFMLENBQXVCckIsSUFBdkIsRUFBNkJDLE9BQTdCLENBQVQ7QUFDQTs7QUFDSixhQUFLRSwwQ0FBRyxDQUFDbUIsT0FBVDtBQUNJdkksZ0JBQU0sR0FBRyxLQUFLd0ksY0FBTCxDQUFvQnZCLElBQXBCLEVBQTBCQyxPQUExQixDQUFUO0FBQ0E7O0FBQ0osYUFBS0UsMENBQUcsQ0FBQ3FCLGVBQVQ7QUFDSSxlQUFLQyxZQUFMLENBQWtCekIsSUFBbEI7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDdUIsUUFBVDtBQUNJLGVBQUtDLGVBQUwsQ0FBcUIzQixJQUFyQjtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUN5QixnQkFBVDtBQUNJLGVBQUtDLGFBQUwsQ0FBbUI3QixJQUFuQjtBQUNBO0FBdkNSOztBQTBDQSxhQUFPakgsTUFBUDtBQUNIO0FBNUVMO0FBQUE7QUFBQSxzQ0E4RXNCc0csR0E5RXRCLEVBOEUyQjtBQUFBOztBQUNuQkEsU0FBRyxDQUFDOUIsVUFBSixDQUFldkosT0FBZixDQUF1QixVQUFBeUosS0FBSztBQUFBLGVBQUksTUFBSSxDQUFDc0MsV0FBTCxDQUFpQnRDLEtBQWpCLENBQUo7QUFBQSxPQUE1QjtBQUNIO0FBaEZMO0FBQUE7QUFBQSxzQ0FrRnNCcUUsVUFsRnRCLEVBa0ZrQztBQUMxQixXQUFLL0IsV0FBTCxDQUFpQitCLFVBQVUsQ0FBQ0MsS0FBNUI7QUFDSDtBQXBGTDtBQUFBO0FBQUEscUNBc0ZxQkMsU0F0RnJCLEVBc0ZnQztBQUN4QixXQUFLakMsV0FBTCxDQUFpQmlDLFNBQVMsQ0FBQ0MsSUFBM0I7QUFDQSxXQUFLbEMsV0FBTCxDQUFpQmlDLFNBQVMsQ0FBQ0UsU0FBM0I7QUFDQSxXQUFLbkMsV0FBTCxDQUFpQmlDLFNBQVMsQ0FBQ0csVUFBM0I7QUFDSDtBQTFGTDtBQUFBO0FBQUEsaUNBNEZpQkMsS0E1RmpCLEVBNEZ3QjtBQUNoQixXQUFLckMsV0FBTCxDQUFpQnFDLEtBQUssQ0FBQ0MsSUFBdkI7QUFDQSxXQUFLdEMsV0FBTCxDQUFpQnFDLEtBQUssQ0FBQ0wsS0FBdkI7QUFDSDtBQS9GTDtBQUFBO0FBQUEsa0NBaUdrQk8sTUFqR2xCLEVBaUcwQjtBQUNsQixXQUFLdkMsV0FBTCxDQUFpQnVDLE1BQU0sQ0FBQ0QsSUFBeEI7QUFDQSxXQUFLdEMsV0FBTCxDQUFpQnVDLE1BQU0sQ0FBQ1AsS0FBeEI7QUFDSDtBQXBHTDtBQUFBO0FBQUEsaUNBc0dpQlEsS0F0R2pCLEVBc0d3QjtBQUNoQixXQUFLeEMsV0FBTCxDQUFpQndDLEtBQUssQ0FBQzNKLEdBQXZCO0FBQ0g7QUF4R0w7QUFBQTtBQUFBLGdDQTBHZ0IxRSxJQTFHaEIsRUEwR3NCO0FBQUE7O0FBQ2RBLFVBQUksQ0FBQ3NPLElBQUwsQ0FBVXhPLE9BQVYsQ0FBa0IsVUFBQTRFLEdBQUc7QUFBQSxlQUFJLE1BQUksQ0FBQ21ILFdBQUwsQ0FBaUJuSCxHQUFqQixDQUFKO0FBQUEsT0FBckI7O0FBRUEsVUFBSSxDQUFDMUUsSUFBSSxDQUFDWSxNQUFWLEVBQWtCO0FBQ2QsYUFBS2lMLFdBQUwsQ0FBaUI3TCxJQUFJLENBQUNrTCxNQUF0QixFQUE4QjtBQUFFQSxnQkFBTSxFQUFFO0FBQVYsU0FBOUI7QUFDSDtBQUNKO0FBaEhMO0FBQUE7QUFBQSxrQ0FrSGtCcUQsTUFsSGxCLEVBa0gwQnhDLE9BbEgxQixFQWtIbUM7QUFDM0IsVUFBSXlDLE1BQU0sR0FBRyxLQUFLM0MsV0FBTCxDQUFpQjBDLE1BQU0sQ0FBQ0UsTUFBeEIsQ0FBYjs7QUFFQSxVQUFJRixNQUFNLENBQUNHLFFBQVgsRUFBcUI7QUFDakIsYUFBSzdDLFdBQUwsQ0FBaUIwQyxNQUFNLENBQUNJLFFBQXhCLEVBQWtDO0FBQzlCekQsZ0JBQU0sRUFBRWEsT0FBTyxJQUFJQSxPQUFPLENBQUNiO0FBREcsU0FBbEM7O0FBSUEsWUFBSXFELE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQjNDLElBQWhCLEtBQXlCQywwQ0FBRyxDQUFDbUIsT0FBakMsRUFBMEM7QUFDdEMsaUJBQU9vQixNQUFNLENBQUNJLFdBQVAsQ0FBbUJMLE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQjFOLEtBQW5DLEVBQTBDOEssT0FBTyxJQUFJQSxPQUFPLENBQUNiLE1BQTdELENBQVA7QUFDSDs7QUFFRCxZQUFJck4sR0FBRyxHQUFHLEtBQUs2TixPQUFMLENBQWFtRCxLQUFiLENBQW1CTixNQUFNLENBQUNJLFFBQTFCLENBQVY7QUFFQSxlQUFPSCxNQUFNLENBQUNJLFdBQVAsQ0FBbUIvUSxHQUFuQixFQUF3QmtPLE9BQU8sSUFBSUEsT0FBTyxDQUFDYixNQUEzQyxFQUFtRCxJQUFuRCxDQUFQO0FBQ0g7O0FBRUQsYUFBTyxLQUFLVyxXQUFMLENBQWlCMEMsTUFBTSxDQUFDSSxRQUF4QixFQUFrQztBQUNyQ0gsY0FBTSxFQUFFQSxNQUQ2QjtBQUVyQ3RELGNBQU0sRUFBRWEsT0FBTyxJQUFJQSxPQUFPLENBQUNiO0FBRlUsT0FBbEMsQ0FBUDtBQUlIO0FBdklMO0FBQUE7QUFBQSxzQ0F5SXNCNEQsVUF6SXRCLEVBeUlrQy9DLE9BeklsQyxFQXlJMkM7QUFDbkMsVUFBSWxPLEdBQUcsR0FBRyxLQUFLNk4sT0FBTCxDQUFhbUQsS0FBYixDQUFtQkMsVUFBbkIsQ0FBVjtBQUFBLFVBQ0k1RCxNQUFNLEdBQUdhLE9BQU8sSUFBSUEsT0FBTyxDQUFDYixNQURoQzs7QUFHQSxVQUFJYSxPQUFPLElBQUlBLE9BQU8sQ0FBQ3lDLE1BQXZCLEVBQStCO0FBQzNCLGVBQU96QyxPQUFPLENBQUN5QyxNQUFSLENBQWVJLFdBQWYsQ0FBMkIvUSxHQUEzQixFQUFnQ3FOLE1BQWhDLENBQVA7QUFDSDs7QUFFRCxhQUFPLEtBQUs2RCxjQUFMLENBQW9CbFIsR0FBcEIsRUFBeUJxTixNQUF6QixDQUFQO0FBQ0g7QUFsSkw7QUFBQTtBQUFBLG1DQW9KbUI4RCxPQXBKbkIsRUFvSjRCakQsT0FwSjVCLEVBb0pxQztBQUM3QixVQUFJbE8sR0FBRyxHQUFHLEtBQUs2TixPQUFMLENBQWFtRCxLQUFiLENBQW1CRyxPQUFuQixDQUFWOztBQUVBLFVBQUlqRCxPQUFPLElBQUlBLE9BQU8sQ0FBQ3lDLE1BQXZCLEVBQStCO0FBQzNCLGVBQU96QyxPQUFPLENBQUN5QyxNQUFSLENBQWVJLFdBQWYsQ0FBMkIvUSxHQUEzQixDQUFQO0FBQ0g7QUFDSjtBQTFKTDtBQUFBO0FBQUEsb0NBNEpvQm9SLElBNUpwQixFQTRKMEI7QUFDbEIsV0FBS3BELFdBQUwsQ0FBaUJvRCxJQUFJLENBQUNoTyxLQUF0QjtBQUNIO0FBOUpMO0FBQUE7QUFBQSxrQ0FnS2tCdkMsR0FoS2xCLEVBZ0t1QjtBQUFBOztBQUNmQSxTQUFHLENBQUN3USxVQUFKLENBQWVwUCxPQUFmLENBQXVCLFVBQUE4RixJQUFJO0FBQUEsZUFBSSxNQUFJLENBQUNpRyxXQUFMLENBQWlCakcsSUFBakIsQ0FBSjtBQUFBLE9BQTNCO0FBQ0g7QUFsS0w7QUFBQTtBQUFBLGlDQW9LaUJ1SixHQXBLakIsRUFvS3NCO0FBQUE7O0FBQ2RBLFNBQUcsQ0FBQzlGLFVBQUosQ0FBZXZKLE9BQWYsQ0FBdUIsVUFBQXlKLEtBQUs7QUFBQSxlQUFJLE1BQUksQ0FBQzZGLE9BQUwsQ0FBYTdGLEtBQWIsQ0FBSjtBQUFBLE9BQTVCO0FBQ0g7QUF0S0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJOEYsY0FBYyxHQUFHO0FBQ2pCQyxXQUFTLEVBQUUsS0FETTtBQUVqQkMsbUJBQWlCLEVBQUUsSUFGRjtBQUdqQnhKLFFBQU0sRUFBRTtBQUhTLENBQXJCO0FBTU8sSUFBTXlKLFNBQWI7QUFDSSxxQkFBWTNQLEtBQVosRUFBbUIyQyxPQUFuQixFQUE0QjtBQUFBOztBQUN4QixTQUFLM0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBSzJDLE9BQUwsR0FBZW1ELDRDQUFBLENBQVkwSixjQUFaLEVBQTRCN00sT0FBNUIsQ0FBZjtBQUNBLFNBQUtnSixPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUtFLE9BQUwsR0FBZSxJQUFJQyx1REFBSixFQUFmO0FBQ0EsU0FBS2pJLE1BQUwsR0FBYzdELEtBQUssQ0FBQzRQLE9BQU4sSUFBaUI7QUFBQ25FLHFCQUFlLEVBQUVDLGlEQUFRQTtBQUExQixLQUEvQjtBQUNILEdBUEwsQ0FTSTs7O0FBVEo7QUFBQTtBQUFBLDZCQVVhSixHQVZiLEVBVWtCO0FBQ1YsVUFBSUssT0FBTyxHQUFHLEtBQUs5SCxNQUFMLENBQVk0SCxlQUFaLENBQTRCSCxHQUE1QixDQUFkO0FBQ0EsYUFBTyxLQUFLdUUsZUFBTCxDQUFxQmxFLE9BQXJCLENBQVA7QUFDSDtBQWJMO0FBQUE7QUFBQSxvQ0Flb0JBLE9BZnBCLEVBZTZCO0FBQUE7O0FBQ3JCLFVBQUkzRyxNQUFKO0FBRUEsV0FBSzJHLE9BQUwsR0FBZUEsT0FBZjtBQUVBLFdBQUtBLE9BQUwsQ0FBYW5DLFVBQWIsQ0FBd0J2SixPQUF4QixDQUFnQyxVQUFBeUosS0FBSztBQUFBLGVBQUkxRSxNQUFNLEdBQUcsS0FBSSxDQUFDOEssWUFBTCxDQUFrQnBHLEtBQWxCLENBQWI7QUFBQSxPQUFyQzs7QUFFQSxVQUFJMUUsTUFBTSxJQUFJQSxNQUFNLENBQUMrSyxLQUFyQixFQUE0QjtBQUN4Qi9LLGNBQU0sR0FBRyxJQUFUO0FBQ0g7O0FBRUQsYUFBT0EsTUFBUDtBQUNILEtBM0JMLENBNkJJOztBQTdCSjtBQUFBO0FBQUEsMkJBOEJXc0csR0E5QlgsRUE4QmdCbEssS0E5QmhCLEVBOEJ1QjtBQUNmLFVBQUl1SyxPQUFPLEdBQUcsS0FBSzlILE1BQUwsQ0FBWTRILGVBQVosQ0FBNEJILEdBQTVCLENBQWQ7QUFDQSxhQUFPLEtBQUswRSxhQUFMLENBQW1CckUsT0FBbkIsRUFBNEJ2SyxLQUE1QixDQUFQO0FBQ0g7QUFqQ0w7QUFBQTtBQUFBLGtDQW1Da0J1SyxPQW5DbEIsRUFtQzJCdkssS0FuQzNCLEVBbUNrQztBQUMxQixXQUFLdUssT0FBTCxHQUFlQSxPQUFmOztBQUVBLFVBQUksS0FBS0EsT0FBTCxDQUFhbkMsVUFBYixDQUF3QjVDLE1BQXhCLEtBQW1DLENBQXZDLEVBQTBDO0FBQ3RDLGNBQU0sSUFBSS9HLEtBQUosQ0FBVWlHLDZDQUFBLENBQWEsK0JBQWIsRUFBOEN3RixHQUE5QyxDQUFWLENBQU47QUFDSDs7QUFFRCxVQUFJMkUsVUFBVSxHQUFHLEtBQUt0RSxPQUFMLENBQWFuQyxVQUFiLENBQXdCLENBQXhCLENBQWpCOztBQUVBLFVBQUl5RyxVQUFVLENBQUN6RyxVQUFYLENBQXNCNUMsTUFBdEIsR0FBK0IsQ0FBbkMsRUFBc0M7QUFDbEMsY0FBTSxJQUFJL0csS0FBSixDQUFVaUcsNkNBQUEsQ0FBYSwrQkFBYixFQUE4Q3dGLEdBQTlDLENBQVYsQ0FBTjtBQUNIOztBQUVELFVBQUl5QyxVQUFVLEdBQUdrQyxVQUFVLENBQUN6RyxVQUFYLENBQXNCLENBQXRCLENBQWpCOztBQUVBLFVBQUl1RSxVQUFVLENBQUM1QixJQUFYLEtBQW9CQywwQ0FBRyxDQUFDZSxnQkFBNUIsRUFBOEM7QUFDMUMsWUFBSTNNLE1BQU0sR0FBRyxLQUFLc1AsWUFBTCxDQUFrQi9CLFVBQVUsQ0FBQ2EsTUFBN0IsQ0FBYjs7QUFFQSxZQUFJcE8sTUFBTSxJQUFJLElBQWQsRUFBb0I7QUFDaEIsZ0JBQU0sSUFBSVgsS0FBSixDQUFVaUcsNkNBQUEsQ0FBYSwwQkFBYixFQUF5QyxLQUFLK0YsT0FBTCxDQUFhbUQsS0FBYixDQUFtQmpCLFVBQVUsQ0FBQ2EsTUFBOUIsQ0FBekMsQ0FBVixDQUFOO0FBQ0g7O0FBRUQsWUFBSTVRLEdBQUcsR0FBRyxLQUFLOFIsWUFBTCxDQUFrQi9CLFVBQVUsQ0FBQ2UsUUFBN0IsRUFBdUM7QUFDN0NvQixxQkFBVyxFQUFFLENBQUNuQyxVQUFVLENBQUNjO0FBRG9CLFNBQXZDLENBQVY7O0FBSUEsWUFBSTdRLEdBQUcsSUFBSSxJQUFYLEVBQWlCO0FBQ2IsZ0JBQU0sSUFBSTZCLEtBQUosQ0FBVWlHLDZDQUFBLENBQWEsMEJBQWIsRUFBeUMsS0FBSytGLE9BQUwsQ0FBYW1ELEtBQWIsQ0FBbUJqQixVQUFVLENBQUNlLFFBQTlCLENBQXpDLENBQVYsQ0FBTjtBQUNIOztBQUVELFlBQUksS0FBS25NLE9BQUwsQ0FBYStNLGlCQUFiLElBQWtDLElBQXRDLEVBQTRDO0FBQ3hDbFAsZ0JBQU0sQ0FBQ3hDLEdBQUQsQ0FBTixHQUFjb0QsS0FBZDtBQUNILFNBRkQsTUFHSztBQUNELGVBQUt1QixPQUFMLENBQWErTSxpQkFBYixDQUErQnZQLElBQS9CLENBQW9DLElBQXBDLEVBQTBDSyxNQUExQyxFQUFrRHhDLEdBQWxELEVBQXVEb0QsS0FBdkQ7QUFDSDtBQUNKLE9BckJELE1Bc0JLLElBQUkyTSxVQUFVLENBQUM1QixJQUFYLEtBQW9CQywwQ0FBRyxDQUFDaUIsVUFBNUIsRUFBd0M7QUFDekMsWUFBSXJQLEdBQUcsR0FBRyxLQUFLNk4sT0FBTCxDQUFhbUQsS0FBYixDQUFtQmpCLFVBQW5CLENBQVY7O0FBRUEsWUFBSSxLQUFLcEwsT0FBTCxDQUFhK00saUJBQWIsSUFBa0MsSUFBdEMsRUFBNEM7QUFDeEMsZUFBSzFQLEtBQUwsQ0FBV2hDLEdBQVgsSUFBa0JvRCxLQUFsQjtBQUNILFNBRkQsTUFHSztBQUNELGVBQUt1QixPQUFMLENBQWErTSxpQkFBYixDQUErQnZQLElBQS9CLENBQW9DLElBQXBDLEVBQTBDLEtBQUtILEtBQS9DLEVBQXNEaEMsR0FBdEQsRUFBMkRvRCxLQUEzRDtBQUNIO0FBQ0osT0FUSSxNQVVBO0FBQ0QsY0FBTSxJQUFJdkIsS0FBSixDQUFVaUcsNkNBQUEsQ0FBYSwrQkFBYixFQUE4Q3dGLEdBQTlDLENBQVYsQ0FBTjtBQUNIO0FBQ0o7QUFyRkw7QUFBQTtBQUFBLGlDQXVGaUJXLElBdkZqQixFQXVGdUJDLE9BdkZ2QixFQXVGZ0M7QUFDeEIsVUFBSWxILE1BQUo7O0FBRUEsY0FBUWlILElBQUksQ0FBQ0UsSUFBYjtBQUNJLGFBQUtDLDBDQUFHLENBQUNDLG1CQUFUO0FBQ0lySCxnQkFBTSxHQUFHLEtBQUttTCxrQkFBTCxDQUF3QmxFLElBQXhCLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDRyxvQkFBVDtBQUNJdkgsZ0JBQU0sR0FBRyxLQUFLb0wsa0JBQUwsQ0FBd0JuRSxJQUF4QixDQUFUO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ0sscUJBQVQ7QUFDSXpILGdCQUFNLEdBQUcsS0FBS3FMLGlCQUFMLENBQXVCcEUsSUFBdkIsQ0FBVDtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUNPLGlCQUFUO0FBQ0kzSCxnQkFBTSxHQUFHLEtBQUtzTCxhQUFMLENBQW1CckUsSUFBbkIsQ0FBVDtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUNTLGdCQUFUO0FBQ0k3SCxnQkFBTSxHQUFHLEtBQUt1TCxjQUFMLENBQW9CdEUsSUFBcEIsQ0FBVDtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUNXLGVBQVQ7QUFDSS9ILGdCQUFNLEdBQUcsS0FBS3dMLGFBQUwsQ0FBbUJ2RSxJQUFuQixDQUFUO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ2EsY0FBVDtBQUNJakksZ0JBQU0sR0FBRyxLQUFLeUwsWUFBTCxDQUFrQnhFLElBQWxCLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDZSxnQkFBVDtBQUNJbkksZ0JBQU0sR0FBRyxLQUFLMEwsY0FBTCxDQUFvQnpFLElBQXBCLEVBQTBCQyxPQUExQixDQUFUO0FBQ0E7O0FBQ0osYUFBS0UsMENBQUcsQ0FBQ2lCLFVBQVQ7QUFDSXJJLGdCQUFNLEdBQUcsS0FBSzJMLGtCQUFMLENBQXdCMUUsSUFBeEIsRUFBOEJDLE9BQTlCLENBQVQ7QUFDQTs7QUFDSixhQUFLRSwwQ0FBRyxDQUFDbUIsT0FBVDtBQUNJdkksZ0JBQU0sR0FBRyxLQUFLNEwsZUFBTCxDQUFxQjNFLElBQXJCLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDcUIsZUFBVDtBQUNJekksZ0JBQU0sR0FBRyxLQUFLNkwsYUFBTCxDQUFtQjVFLElBQW5CLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDdUIsUUFBVDtBQUNJM0ksZ0JBQU0sR0FBRyxLQUFLOEwsZ0JBQUwsQ0FBc0I3RSxJQUF0QixDQUFUO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ3lCLGdCQUFUO0FBQ0k3SSxnQkFBTSxHQUFHLEtBQUsrTCxjQUFMLENBQW9COUUsSUFBcEIsQ0FBVDtBQUNBO0FBdkNSOztBQTBDQSxhQUFPakgsTUFBUDtBQUNIO0FBcklMO0FBQUE7QUFBQSx1Q0F1SXVCc0csR0F2SXZCLEVBdUk0QjtBQUFBOztBQUNwQixVQUFJdEcsTUFBSjtBQUVBc0csU0FBRyxDQUFDOUIsVUFBSixDQUFldkosT0FBZixDQUF1QixVQUFBeUosS0FBSztBQUFBLGVBQUkxRSxNQUFNLEdBQUcsTUFBSSxDQUFDOEssWUFBTCxDQUFrQnBHLEtBQWxCLENBQWI7QUFBQSxPQUE1QjtBQUVBLGFBQU8xRSxNQUFQO0FBQ0g7QUE3SUw7QUFBQTtBQUFBLHVDQStJdUIrSSxVQS9JdkIsRUErSW1DO0FBQzNCLFVBQUl2TixNQUFNLEdBQUcsS0FBS3NQLFlBQUwsQ0FBa0IvQixVQUFVLENBQUNPLElBQTdCLEVBQW1DO0FBQzVDMEMsc0JBQWMsRUFBRTtBQUQ0QixPQUFuQyxDQUFiO0FBR0EsVUFBSTVQLEtBQUssR0FBRyxLQUFLME8sWUFBTCxDQUFrQi9CLFVBQVUsQ0FBQ0MsS0FBN0IsQ0FBWjs7QUFFQSxVQUFJLEtBQUtyTCxPQUFMLENBQWErTSxpQkFBYixJQUFrQyxJQUF0QyxFQUE0QztBQUN4Q2xQLGNBQU0sQ0FBQzNCLEdBQVAsQ0FBVzJCLE1BQU0sQ0FBQzRPLElBQWxCLElBQTBCaE8sS0FBMUI7QUFDSCxPQUZELE1BR0s7QUFDRCxhQUFLdUIsT0FBTCxDQUFhK00saUJBQWIsQ0FBK0J2UCxJQUEvQixDQUFvQyxJQUFwQyxFQUEwQ0ssTUFBTSxDQUFDM0IsR0FBakQsRUFBc0QyQixNQUFNLENBQUM0TyxJQUE3RCxFQUFtRWhPLEtBQW5FO0FBQ0g7QUFDSjtBQTNKTDtBQUFBO0FBQUEsc0NBNkpzQjZNLFNBN0p0QixFQTZKaUM7QUFDekIsVUFBSSxLQUFLNkIsWUFBTCxDQUFrQjdCLFNBQVMsQ0FBQ0MsSUFBNUIsQ0FBSixFQUF1QztBQUNuQyxlQUFPLEtBQUs0QixZQUFMLENBQWtCN0IsU0FBUyxDQUFDRSxTQUE1QixDQUFQO0FBQ0g7O0FBRUQsYUFBTyxLQUFLMkIsWUFBTCxDQUFrQjdCLFNBQVMsQ0FBQ0csVUFBNUIsQ0FBUDtBQUNIO0FBbktMO0FBQUE7QUFBQSxrQ0FxS2tCQyxLQXJLbEIsRUFxS3lCO0FBQ2pCLFVBQUlySixNQUFKO0FBQ0EsVUFBSWlNLFNBQVMsR0FBRyxLQUFLbkIsWUFBTCxDQUFrQnpCLEtBQUssQ0FBQ0MsSUFBeEIsQ0FBaEI7QUFDQSxVQUFJNEMsVUFBVSxHQUFHLEtBQUtwQixZQUFMLENBQWtCekIsS0FBSyxDQUFDTCxLQUF4QixDQUFqQjs7QUFFQSxjQUFRSyxLQUFLLENBQUM4QyxRQUFkO0FBQ0ksYUFBSyxJQUFMO0FBQ0luTSxnQkFBTSxHQUFHaU0sU0FBUyxJQUFJQyxVQUF0QjtBQUNBOztBQUNKLGFBQUssSUFBTDtBQUNJbE0sZ0JBQU0sR0FBR2lNLFNBQVMsSUFBSUMsVUFBdEI7QUFDQTtBQU5SOztBQVNBLGFBQU9sTSxNQUFQO0FBQ0g7QUFwTEw7QUFBQTtBQUFBLG1DQXNMbUJ1SixNQXRMbkIsRUFzTDJCO0FBQ25CLFVBQUl2SixNQUFKO0FBQ0EsVUFBSWlNLFNBQVMsR0FBRyxLQUFLbkIsWUFBTCxDQUFrQnZCLE1BQU0sQ0FBQ0QsSUFBekIsQ0FBaEI7QUFDQSxVQUFJNEMsVUFBVSxHQUFHLEtBQUtwQixZQUFMLENBQWtCdkIsTUFBTSxDQUFDUCxLQUF6QixDQUFqQixDQUhtQixDQUtuQjs7QUFDQSxjQUFRTyxNQUFNLENBQUM0QyxRQUFmO0FBQ0ksYUFBSyxHQUFMO0FBQ0luTSxnQkFBTSxHQUFHaU0sU0FBUyxHQUFHQyxVQUFyQjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJbE0sZ0JBQU0sR0FBR2lNLFNBQVMsR0FBR0MsVUFBckI7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSWxNLGdCQUFNLEdBQUdpTSxTQUFTLEdBQUdDLFVBQXJCO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0lsTSxnQkFBTSxHQUFHaU0sU0FBUyxHQUFHQyxVQUFyQjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJbE0sZ0JBQU0sR0FBR2lNLFNBQVMsR0FBR0MsVUFBckI7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSWxNLGdCQUFNLEdBQUdpTSxTQUFTLEdBQUdDLFVBQXJCO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0lsTSxnQkFBTSxHQUFHaU0sU0FBUyxHQUFHQyxVQUFyQjtBQUNBOztBQUNKLGFBQUssSUFBTDtBQUNJbE0sZ0JBQU0sR0FBR2lNLFNBQVMsSUFBSUMsVUFBdEI7QUFDQTs7QUFDSixhQUFLLElBQUw7QUFDSWxNLGdCQUFNLEdBQUdpTSxTQUFTLElBQUlDLFVBQXRCO0FBQ0E7O0FBQ0osYUFBSyxJQUFMO0FBQ0lsTSxnQkFBTSxHQUFHaU0sU0FBUyxJQUFJQyxVQUF0QjtBQUNBOztBQUNKLGFBQUssSUFBTDtBQUNJbE0sZ0JBQU0sR0FBR2lNLFNBQVMsSUFBSUMsVUFBdEI7QUFDQTs7QUFDSixhQUFLLEtBQUw7QUFDSWxNLGdCQUFNLEdBQUdpTSxTQUFTLEtBQUtDLFVBQXZCO0FBQ0E7O0FBQ0osYUFBSyxLQUFMO0FBQ0lsTSxnQkFBTSxHQUFHaU0sU0FBUyxLQUFLQyxVQUF2QjtBQUNBO0FBdkNSOztBQTBDQSxhQUFPbE0sTUFBUDtBQUNIO0FBdk9MO0FBQUE7QUFBQSxrQ0F5T2tCd0osS0F6T2xCLEVBeU95QjtBQUNqQixVQUFJeEosTUFBSjtBQUFBLFVBQ0k1RCxLQUFLLEdBQUcsS0FBSzBPLFlBQUwsQ0FBa0J0QixLQUFLLENBQUMzSixHQUF4QixDQURaOztBQUdBLGNBQVEySixLQUFLLENBQUMyQyxRQUFkO0FBQ0ksYUFBSyxHQUFMO0FBQ0luTSxnQkFBTSxHQUFHNUQsS0FBVDtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJNEQsZ0JBQU0sR0FBRyxDQUFDNUQsS0FBVjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJNEQsZ0JBQU0sR0FBRyxDQUFDNUQsS0FBVjtBQUNBO0FBVFI7O0FBWUEsYUFBTzRELE1BQVA7QUFDSDtBQTFQTDtBQUFBO0FBQUEsaUNBNFBpQjdFLElBNVBqQixFQTRQdUI7QUFBQTs7QUFDZixVQUFJaVIsU0FBUyxHQUFHalIsSUFBSSxDQUFDc08sSUFBTCxDQUFVNEMsR0FBVixDQUFjLFVBQUF4TSxHQUFHO0FBQUEsZUFBSSxNQUFJLENBQUNpTCxZQUFMLENBQWtCakwsR0FBbEIsQ0FBSjtBQUFBLE9BQWpCLENBQWhCO0FBRUEsVUFBSXFILE9BQU8sR0FBRyxLQUFLNEQsWUFBTCxDQUFrQjNQLElBQUksQ0FBQ2tMLE1BQXZCLEVBQStCO0FBQ3pDQSxjQUFNLEVBQUU7QUFEaUMsT0FBL0IsQ0FBZDs7QUFJQSxVQUFJbEwsSUFBSSxDQUFDWSxNQUFULEVBQWlCO0FBQ2IsWUFBSUEsTUFBTSxHQUFHLEtBQUs4QyxNQUFMLENBQVl5TixhQUFaLENBQTBCcEYsT0FBTyxDQUFDa0QsSUFBbEMsQ0FBYjs7QUFFQSxZQUFHck8sTUFBTSxJQUFJLElBQWIsRUFBbUI7QUFDZixnQkFBTSxJQUFJbEIsS0FBSixDQUFVLGFBQWFxTSxPQUFPLENBQUNrRCxJQUFyQixHQUE0QixrQkFBdEMsQ0FBTjtBQUNIOztBQUVELGVBQU9yTyxNQUFNLENBQUN3USxTQUFQLENBQWlCQyxLQUFqQixDQUF1QnpRLE1BQXZCLEVBQStCcVEsU0FBL0IsQ0FBUDtBQUNILE9BUkQsTUFTSztBQUNELFlBQUkzUixFQUFFLEdBQUd5TSxPQUFPLENBQUNyTixHQUFSLENBQVlxTixPQUFPLENBQUNrRCxJQUFwQixDQUFUOztBQUNBLFlBQUl0SixpREFBQSxDQUFpQnJHLEVBQWpCLENBQUosRUFBMEI7QUFDdEIsaUJBQU9BLEVBQUUsQ0FBQytSLEtBQUgsQ0FBU3RGLE9BQU8sQ0FBQ3JOLEdBQWpCLEVBQXNCdVMsU0FBdEIsQ0FBUDtBQUNIOztBQUNELGNBQU0sSUFBSXZSLEtBQUosQ0FBVXFNLE9BQU8sQ0FBQ2tELElBQVIsR0FBZSxvQkFBekIsQ0FBTjtBQUNIO0FBQ0o7QUFuUkw7QUFBQTtBQUFBLG1DQXFSbUJWLE1BclJuQixFQXFSMkJ4QyxPQXJSM0IsRUFxUm9DO0FBQzVCLFVBQUlyTixHQUFHLEdBQUcsS0FBS2lSLFlBQUwsQ0FBa0JwQixNQUFNLENBQUNFLE1BQXpCLENBQVY7O0FBRUEsVUFBSS9QLEdBQUcsSUFBSSxJQUFQLEtBQWdCLEtBQUs4RCxPQUFMLENBQWE4TSxTQUFiLElBQTBCZixNQUFNLENBQUNFLE1BQVAsQ0FBY2EsU0FBeEQsQ0FBSixFQUF3RTtBQUNwRTVRLFdBQUcsR0FBRyxJQUFJNFMseURBQUosRUFBTjtBQUNIOztBQUVELFVBQUkvQyxNQUFNLENBQUNHLFFBQVgsRUFBcUI7QUFDakIsWUFBSU8sSUFBSSxHQUFHLEtBQUtVLFlBQUwsQ0FBa0JwQixNQUFNLENBQUNJLFFBQXpCLENBQVg7QUFDQSxlQUFPalEsR0FBRyxDQUFDdVEsSUFBRCxDQUFWO0FBQ0g7O0FBRUQsYUFBTyxLQUFLVSxZQUFMLENBQWtCcEIsTUFBTSxDQUFDSSxRQUF6QixFQUFtQztBQUN0Q3RPLGNBQU0sRUFBRTNCLEdBRDhCO0FBRXRDNlMsa0JBQVUsRUFBRWhELE1BQU0sQ0FBQ0UsTUFGbUI7QUFHdEN2RCxjQUFNLEVBQUVhLE9BQU8sSUFBSUEsT0FBTyxDQUFDYixNQUhXO0FBSXRDMkYsc0JBQWMsRUFBRTlFLE9BQU8sSUFBSUEsT0FBTyxDQUFDOEU7QUFKRyxPQUFuQyxDQUFQO0FBTUg7QUF2U0w7QUFBQTtBQUFBLHVDQXlTdUIvQixVQXpTdkIsRUF5U21DL0MsT0F6U25DLEVBeVM0QztBQUNwQyxVQUFJMUwsTUFBSjtBQUVBMEwsYUFBTyxHQUFHQSxPQUFPLElBQUksRUFBckI7O0FBRUEsVUFBSUEsT0FBTyxDQUFDd0YsVUFBUixJQUFzQixJQUExQixFQUFnQztBQUM1QmxSLGNBQU0sR0FBRyxLQUFLUixLQUFkO0FBQ0gsT0FGRCxNQUdLO0FBQ0RRLGNBQU0sR0FBRzBMLE9BQU8sQ0FBQzFMLE1BQWpCO0FBQ0g7O0FBRUQsVUFBSTBMLE9BQU8sQ0FBQzhFLGNBQVIsSUFBMEI5RSxPQUFPLENBQUNiLE1BQXRDLEVBQThDO0FBQzFDLGVBQU87QUFDSHhNLGFBQUcsRUFBRTJCLE1BREY7QUFFSDRPLGNBQUksRUFBRUgsVUFBVSxDQUFDL1E7QUFGZCxTQUFQO0FBSUg7O0FBRUQsVUFBSWdPLE9BQU8sQ0FBQ2dFLFdBQVosRUFBeUI7QUFDckIsZUFBT2pCLFVBQVUsQ0FBQy9RLElBQWxCO0FBQ0g7O0FBRUQsVUFBSThHLE1BQU0sR0FBR3hFLE1BQU0sQ0FBQ3lPLFVBQVUsQ0FBQy9RLElBQVosQ0FBbkI7O0FBRUEsVUFBSThHLE1BQU0sSUFBSSxJQUFWLElBQWtCLEtBQUtyQyxPQUFMLENBQWF1RCxNQUFuQyxFQUEyQztBQUN2Q2xCLGNBQU0sR0FBRyxLQUFLckMsT0FBTCxDQUFhdUQsTUFBYixDQUFvQitJLFVBQVUsQ0FBQy9RLElBQS9CLENBQVQ7QUFDSDs7QUFFRCxhQUFPOEcsTUFBUDtBQUNIO0FBdlVMO0FBQUE7QUFBQSxvQ0F5VW9CbUssT0F6VXBCLEVBeVU2QjtBQUNyQixhQUFPQSxPQUFPLENBQUMvTixLQUFmO0FBQ0g7QUEzVUw7QUFBQTtBQUFBLHFDQTZVcUJnTyxJQTdVckIsRUE2VTJCO0FBQ25CLFVBQUlwUixHQUFHLEdBQUcsS0FBSzhSLFlBQUwsQ0FBa0JWLElBQUksQ0FBQ3BSLEdBQXZCLEVBQTRCO0FBQ2xDa1MsbUJBQVcsRUFBRTtBQURxQixPQUE1QixDQUFWO0FBSUEsVUFBSTlPLEtBQUssR0FBRyxLQUFLME8sWUFBTCxDQUFrQlYsSUFBSSxDQUFDaE8sS0FBdkIsQ0FBWjtBQUVBLGFBQU87QUFDSHBELFdBQUcsRUFBRUEsR0FERjtBQUVIb0QsYUFBSyxFQUFFQTtBQUZKLE9BQVA7QUFJSDtBQXhWTDtBQUFBO0FBQUEsbUNBMFZtQnZDLEdBMVZuQixFQTBWd0I7QUFBQTs7QUFDaEIsVUFBSW1HLE1BQU0sR0FBRyxFQUFiO0FBRUFuRyxTQUFHLENBQUN3USxVQUFKLENBQWVwUCxPQUFmLENBQXVCLFVBQUE4RixJQUFJLEVBQUk7QUFDM0IsWUFBSTRMLEdBQUcsR0FBRyxNQUFJLENBQUM3QixZQUFMLENBQWtCL0osSUFBbEIsQ0FBVjs7QUFDQWYsY0FBTSxDQUFDMk0sR0FBRyxDQUFDM1QsR0FBTCxDQUFOLEdBQWtCMlQsR0FBRyxDQUFDdlEsS0FBdEI7QUFDSCxPQUhEO0FBS0EsYUFBTzRELE1BQVA7QUFDSDtBQW5XTDtBQUFBO0FBQUEsa0NBcVdrQnNLLEdBcldsQixFQXFXdUI7QUFBQTs7QUFDZixVQUFJdEssTUFBTSxHQUFHLEVBQWI7QUFFQXNLLFNBQUcsQ0FBQzlGLFVBQUosQ0FBZXZKLE9BQWYsQ0FBdUIsVUFBQXlKLEtBQUssRUFBSTtBQUM1QjFFLGNBQU0sQ0FBQ3BGLElBQVAsQ0FBWSxNQUFJLENBQUNrUSxZQUFMLENBQWtCcEcsS0FBbEIsQ0FBWjtBQUNILE9BRkQ7QUFJQSxhQUFPMUUsTUFBUDtBQUNIO0FBN1dMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsU0FBUzRNLE1BQVQsQ0FBZ0J0RyxHQUFoQixFQUFxQjtBQUNqQixTQUFPLElBQUl1RyxtREFBSixHQUFlQyxHQUFmLENBQW1CeEcsR0FBbkIsQ0FBUDtBQUNIOztBQUVELFNBQVNJLFFBQVQsQ0FBa0JKLEdBQWxCLEVBQXVCO0FBQ25CLFNBQU8sSUFBSXlHLHFEQUFKLENBQWMsSUFBSUYsbURBQUosRUFBZCxFQUE4QkcsS0FBOUIsQ0FBb0MxRyxHQUFwQyxDQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1REO0FBQ0E7QUFFTyxJQUFNUSxVQUFiO0FBQ0ksd0JBQWM7QUFBQTtBQUViOztBQUhMO0FBQUE7QUFBQSwwQkFLVUcsSUFMVixFQUtnQjtBQUNSLFVBQUlqSCxNQUFKOztBQUVBLGNBQVFpSCxJQUFJLENBQUNFLElBQWI7QUFDSSxhQUFLQywwQ0FBRyxDQUFDQyxtQkFBVDtBQUNJckgsZ0JBQU0sR0FBRyxLQUFLaU4sZUFBTCxDQUFxQmhHLElBQXJCLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDRyxvQkFBVDtBQUNJdkgsZ0JBQU0sR0FBRyxLQUFLa04sZUFBTCxDQUFxQmpHLElBQXJCLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDSyxxQkFBVDtBQUNJekgsZ0JBQU0sR0FBRyxLQUFLbU4sY0FBTCxDQUFvQmxHLElBQXBCLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDTyxpQkFBVDtBQUNJM0gsZ0JBQU0sR0FBRyxLQUFLb04sVUFBTCxDQUFnQm5HLElBQWhCLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDUyxnQkFBVDtBQUNJN0gsZ0JBQU0sR0FBRyxLQUFLcU4sV0FBTCxDQUFpQnBHLElBQWpCLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDVyxlQUFUO0FBQ0kvSCxnQkFBTSxHQUFHLEtBQUtzTixVQUFMLENBQWdCckcsSUFBaEIsQ0FBVDtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUNhLGNBQVQ7QUFDSWpJLGdCQUFNLEdBQUcsS0FBS3VOLFNBQUwsQ0FBZXRHLElBQWYsQ0FBVDtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUNlLGdCQUFUO0FBQ0luSSxnQkFBTSxHQUFHLEtBQUt3TixXQUFMLENBQWlCdkcsSUFBakIsQ0FBVDtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUNpQixVQUFUO0FBQ0lySSxnQkFBTSxHQUFHLEtBQUt5TixlQUFMLENBQXFCeEcsSUFBckIsQ0FBVDtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUNtQixPQUFUO0FBQ0l2SSxnQkFBTSxHQUFHLEtBQUswTixZQUFMLENBQWtCekcsSUFBbEIsQ0FBVDtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUNxQixlQUFUO0FBQ0l6SSxnQkFBTSxHQUFHLEtBQUsyTixVQUFMLENBQWdCMUcsSUFBaEIsQ0FBVDtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUN1QixRQUFUO0FBQ0kzSSxnQkFBTSxHQUFHLEtBQUs0TixhQUFMLENBQW1CM0csSUFBbkIsQ0FBVDtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUN5QixnQkFBVDtBQUNJN0ksZ0JBQU0sR0FBRyxLQUFLNk4sV0FBTCxDQUFpQjVHLElBQWpCLENBQVQ7QUFDQTtBQXZDUjs7QUEwQ0EsYUFBT2pILE1BQVA7QUFDSDtBQW5ETDtBQUFBO0FBQUEsb0NBcURvQnNHLEdBckRwQixFQXFEeUI7QUFBQTs7QUFDakIsVUFBSXRHLE1BQUo7QUFFQXNHLFNBQUcsQ0FBQzlCLFVBQUosQ0FBZXZKLE9BQWYsQ0FBdUIsVUFBQXlKLEtBQUssRUFBSTtBQUM1QjFFLGNBQU0sR0FBRyxLQUFJLENBQUNnSyxLQUFMLENBQVd0RixLQUFYLENBQVQ7QUFDSCxPQUZEO0FBSUEsYUFBTzFFLE1BQVA7QUFDSDtBQTdETDtBQUFBO0FBQUEsb0NBK0RvQitJLFVBL0RwQixFQStEZ0M7QUFDeEIsVUFBSXZOLE1BQU0sR0FBRyxLQUFLd08sS0FBTCxDQUFXakIsVUFBVSxDQUFDTyxJQUF0QixDQUFiO0FBQ0EsVUFBSWxOLEtBQUssR0FBRyxLQUFLNE4sS0FBTCxDQUFXakIsVUFBVSxDQUFDQyxLQUF0QixDQUFaO0FBQ0EsYUFBT2xJLDZDQUFBLENBQWEsU0FBYixFQUF3QnRGLE1BQXhCLEVBQWdDWSxLQUFoQyxDQUFQO0FBQ0g7QUFuRUw7QUFBQTtBQUFBLG1DQXFFbUI2TSxTQXJFbkIsRUFxRThCO0FBQ3RCLFVBQUlDLElBQUksR0FBRyxLQUFLYyxLQUFMLENBQVdmLFNBQVMsQ0FBQ0MsSUFBckIsQ0FBWDtBQUNBLFVBQUlDLFNBQVMsR0FBRyxLQUFLYSxLQUFMLENBQVdmLFNBQVMsQ0FBQ0UsU0FBckIsQ0FBaEI7QUFDQSxVQUFJQyxVQUFVLEdBQUcsS0FBS1ksS0FBTCxDQUFXZixTQUFTLENBQUNHLFVBQXJCLENBQWpCO0FBQ0EsYUFBT3RJLDZDQUFBLENBQWEsYUFBYixFQUE0Qm9JLElBQTVCLEVBQWtDQyxTQUFsQyxFQUE2Q0MsVUFBN0MsQ0FBUDtBQUNIO0FBMUVMO0FBQUE7QUFBQSwrQkE0RWVDLEtBNUVmLEVBNEVzQjtBQUNkLFVBQUk0QyxTQUFTLEdBQUcsS0FBS2pDLEtBQUwsQ0FBV1gsS0FBSyxDQUFDQyxJQUFqQixDQUFoQjtBQUNBLFVBQUk0QyxVQUFVLEdBQUcsS0FBS2xDLEtBQUwsQ0FBV1gsS0FBSyxDQUFDTCxLQUFqQixDQUFqQjtBQUNBLGFBQU9sSSw2Q0FBQSxDQUFhLFdBQWIsRUFBMEJtTCxTQUExQixFQUFxQzVDLEtBQUssQ0FBQzhDLFFBQTNDLEVBQXFERCxVQUFyRCxDQUFQO0FBQ0g7QUFoRkw7QUFBQTtBQUFBLGdDQWtGZ0IzQyxNQWxGaEIsRUFrRndCO0FBQ2hCLFVBQUkwQyxTQUFTLEdBQUcsS0FBS2pDLEtBQUwsQ0FBV1QsTUFBTSxDQUFDRCxJQUFsQixDQUFoQjtBQUNBLFVBQUk0QyxVQUFVLEdBQUcsS0FBS2xDLEtBQUwsQ0FBV1QsTUFBTSxDQUFDUCxLQUFsQixDQUFqQjtBQUNBLGFBQU9sSSw2Q0FBQSxDQUFhLFdBQWIsRUFBMEJtTCxTQUExQixFQUFxQzFDLE1BQU0sQ0FBQzRDLFFBQTVDLEVBQXNERCxVQUF0RCxDQUFQO0FBQ0g7QUF0Rkw7QUFBQTtBQUFBLCtCQXdGZTFDLEtBeEZmLEVBd0ZzQjtBQUNkLFVBQUlwTixLQUFLLEdBQUcsS0FBSzROLEtBQUwsQ0FBV1IsS0FBSyxDQUFDM0osR0FBakIsQ0FBWjtBQUNBLGFBQU9pQiw2Q0FBQSxDQUFhLFFBQWIsRUFBdUIwSSxLQUFLLENBQUMyQyxRQUE3QixFQUF1Qy9QLEtBQXZDLENBQVA7QUFDSDtBQTNGTDtBQUFBO0FBQUEsOEJBNkZjakIsSUE3RmQsRUE2Rm9CO0FBQUE7O0FBQ1osVUFBSTJTLEdBQUcsR0FBRyxFQUFWO0FBQUEsVUFBYzFCLFNBQVMsR0FBR2pSLElBQUksQ0FBQ3NPLElBQUwsQ0FBVTRDLEdBQVYsQ0FBYyxVQUFBeE0sR0FBRyxFQUFJO0FBQzNDLGVBQU8sTUFBSSxDQUFDbUssS0FBTCxDQUFXbkssR0FBWCxDQUFQO0FBQ0gsT0FGeUIsQ0FBMUI7QUFJQSxVQUFJcEYsRUFBRSxHQUFHLEtBQUt1UCxLQUFMLENBQVc3TyxJQUFJLENBQUNrTCxNQUFoQixDQUFUOztBQUVBLFVBQUlsTCxJQUFJLENBQUNZLE1BQVQsRUFBaUI7QUFDYixZQUFJcVEsU0FBUyxDQUFDeEssTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN0QmtNLGFBQUcsR0FBRzFCLFNBQVMsQ0FBQ3ZLLEtBQVYsRUFBTjtBQUNIOztBQUVEaU0sV0FBRyxJQUFJLFFBQVFyVCxFQUFmOztBQUVBLFlBQUkyUixTQUFTLENBQUN4SyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3RCa00sYUFBRyxJQUFJLE1BQU0xQixTQUFTLENBQUN0SixJQUFWLENBQWUsR0FBZixDQUFiO0FBQ0g7QUFDSixPQVZELE1BV0s7QUFDRGdMLFdBQUcsR0FBR2hOLDZDQUFBLENBQWEsVUFBYixFQUF5QnJHLEVBQXpCLEVBQTZCMlIsU0FBUyxDQUFDdEosSUFBVixDQUFlLElBQWYsQ0FBN0IsQ0FBTjtBQUNIOztBQUVELGFBQU9nTCxHQUFQO0FBQ0g7QUFwSEw7QUFBQTtBQUFBLGdDQXNIZ0JwRSxNQXRIaEIsRUFzSHdCO0FBQ2hCLFVBQUk3UCxHQUFHLEdBQUcsS0FBS21RLEtBQUwsQ0FBV04sTUFBTSxDQUFDRSxNQUFsQixDQUFWO0FBQ0EsVUFBSVEsSUFBSSxHQUFHLEtBQUtKLEtBQUwsQ0FBV04sTUFBTSxDQUFDSSxRQUFsQixDQUFYOztBQUVBLFVBQUlKLE1BQU0sQ0FBQ0csUUFBWCxFQUFxQjtBQUNqQixlQUFPL0ksNkNBQUEsQ0FBYSxVQUFiLEVBQXlCakgsR0FBekIsRUFBOEJ1USxJQUE5QixDQUFQO0FBQ0g7O0FBRUQsYUFBT3RKLDZDQUFBLENBQWEsU0FBYixFQUF3QmpILEdBQXhCLEVBQTZCdVEsSUFBN0IsQ0FBUDtBQUNIO0FBL0hMO0FBQUE7QUFBQSxvQ0FpSW9CSCxVQWpJcEIsRUFpSWdDO0FBQ3hCLGFBQU9BLFVBQVUsQ0FBQy9RLElBQWxCO0FBQ0g7QUFuSUw7QUFBQTtBQUFBLGlDQXFJaUJpUixPQXJJakIsRUFxSTBCO0FBQ2xCLFVBQUlySiwrQ0FBQSxDQUFlcUosT0FBTyxDQUFDL04sS0FBdkIsQ0FBSixFQUFtQztBQUMvQixlQUFPMEUsNkNBQUEsQ0FBYSxPQUFiLEVBQXNCcUosT0FBTyxDQUFDL04sS0FBOUIsQ0FBUDtBQUNIOztBQUVELGFBQU8rTixPQUFPLENBQUMvTixLQUFmO0FBQ0g7QUEzSUw7QUFBQTtBQUFBLGtDQTZJa0JnTyxJQTdJbEIsRUE2SXdCO0FBQ2hCLFVBQUlwUixHQUFHLEdBQUcsS0FBS2dSLEtBQUwsQ0FBV0ksSUFBSSxDQUFDcFIsR0FBaEIsRUFBcUI7QUFDM0JrUyxtQkFBVyxFQUFFO0FBRGMsT0FBckIsQ0FBVjtBQUlBLFVBQUk5TyxLQUFLLEdBQUcsS0FBSzROLEtBQUwsQ0FBV0ksSUFBSSxDQUFDaE8sS0FBaEIsQ0FBWjtBQUVBLGFBQU8wRSw2Q0FBQSxDQUFhLFNBQWIsRUFBd0I5SCxHQUF4QixFQUE2Qm9ELEtBQTdCLENBQVA7QUFDSDtBQXJKTDtBQUFBO0FBQUEsZ0NBdUpnQnZDLEdBdkpoQixFQXVKcUI7QUFBQTs7QUFDYixVQUFJWixLQUFLLEdBQUdZLEdBQUcsQ0FBQ3dRLFVBQUosQ0FBZWdDLEdBQWYsQ0FBbUIsVUFBQXRMLElBQUksRUFBSTtBQUNuQyxlQUFPLE1BQUksQ0FBQ2lKLEtBQUwsQ0FBV2pKLElBQVgsQ0FBUDtBQUNILE9BRlcsQ0FBWjtBQUlBLGFBQU9ELDZDQUFBLENBQWEsT0FBYixFQUFzQjdILEtBQUssQ0FBQzZKLElBQU4sQ0FBVyxJQUFYLENBQXRCLENBQVA7QUFDSDtBQTdKTDtBQUFBO0FBQUEsK0JBK0pld0gsR0EvSmYsRUErSm9CO0FBQUE7O0FBQ1osVUFBSTFKLEtBQUssR0FBRzBKLEdBQUcsQ0FBQzlGLFVBQUosQ0FBZTZILEdBQWYsQ0FBbUIsVUFBQTNILEtBQUssRUFBSTtBQUNwQyxlQUFPLE1BQUksQ0FBQ3NGLEtBQUwsQ0FBV3RGLEtBQVgsQ0FBUDtBQUNILE9BRlcsQ0FBWjtBQUlBLGFBQU81RCw2Q0FBQSxDQUFhLE9BQWIsRUFBc0JGLEtBQUssQ0FBQ2tDLElBQU4sQ0FBVyxHQUFYLENBQXRCLENBQVA7QUFDSDtBQXJLTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBRU8sSUFBTStKLFFBQWI7QUFDSSxvQkFBWWxQLE9BQVosRUFBcUI7QUFBQTs7QUFDakIsU0FBS0EsT0FBTCxHQUFlbUQsNENBQUEsQ0FBWWlOLDJEQUFaLEVBQTBCcFEsT0FBMUIsQ0FBZjtBQUNIOztBQUhMO0FBQUE7QUFBQSx3QkFLUXFRLElBTFIsRUFLYztBQUNOLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFdBQUt0VCxLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUt1VCxNQUFMLEdBQWMsRUFBZDs7QUFFQSxhQUFPLEtBQUt2VCxLQUFMLEdBQWEsS0FBS3NULElBQUwsQ0FBVXBNLE1BQTlCLEVBQXNDO0FBQ2xDLFlBQUlzTSxFQUFFLEdBQUcsS0FBS0YsSUFBTCxDQUFVRyxNQUFWLENBQWlCLEtBQUt6VCxLQUF0QixDQUFUOztBQUNBLFlBQUl3VCxFQUFFLEtBQUssR0FBUCxJQUFjQSxFQUFFLEtBQUssSUFBekIsRUFBK0I7QUFDM0IsZUFBS0UsVUFBTCxDQUFnQkYsRUFBaEI7QUFDSCxTQUZELE1BRU8sSUFBSSxLQUFLRyxRQUFMLENBQWNILEVBQWQsS0FBcUJBLEVBQUUsS0FBSyxHQUFQLElBQWMsS0FBS0csUUFBTCxDQUFjLEtBQUtDLElBQUwsRUFBZCxDQUF2QyxFQUFtRTtBQUN0RSxlQUFLQyxVQUFMO0FBQ0gsU0FGTSxNQUVBLElBQUksS0FBS0MsaUJBQUwsQ0FBdUIsS0FBS0MsYUFBTCxFQUF2QixDQUFKLEVBQWtEO0FBQ3JELGVBQUtDLFNBQUw7QUFDSCxTQUZNLE1BRUEsSUFBSSxLQUFLQyxFQUFMLENBQVFULEVBQVIsRUFBWSxhQUFaLENBQUosRUFBZ0M7QUFDbkMsZUFBS0QsTUFBTCxDQUFZclQsSUFBWixDQUFpQjtBQUFFRixpQkFBSyxFQUFFLEtBQUtBLEtBQWQ7QUFBcUJzVCxnQkFBSSxFQUFFRTtBQUEzQixXQUFqQjtBQUNBLGVBQUt4VCxLQUFMO0FBQ0gsU0FITSxNQUdBLElBQUksS0FBS2tVLFlBQUwsQ0FBa0JWLEVBQWxCLENBQUosRUFBMkI7QUFDOUIsZUFBS3hULEtBQUw7QUFDSCxTQUZNLE1BRUE7QUFDSCxjQUFJbVUsR0FBRyxHQUFHWCxFQUFFLEdBQUcsS0FBS0ksSUFBTCxFQUFmO0FBQ0EsY0FBSVEsR0FBRyxHQUFHRCxHQUFHLEdBQUcsS0FBS1AsSUFBTCxDQUFVLENBQVYsQ0FBaEI7QUFDQSxjQUFJUyxHQUFHLEdBQUdDLHdEQUFTLENBQUNkLEVBQUQsQ0FBbkI7QUFDQSxjQUFJZSxHQUFHLEdBQUdELHdEQUFTLENBQUNILEdBQUQsQ0FBbkI7QUFDQSxjQUFJSyxHQUFHLEdBQUdGLHdEQUFTLENBQUNGLEdBQUQsQ0FBbkI7O0FBQ0EsY0FBSUMsR0FBRyxJQUFJRSxHQUFQLElBQWNDLEdBQWxCLEVBQXVCO0FBQ25CLGdCQUFJQyxLQUFLLEdBQUdELEdBQUcsR0FBR0osR0FBSCxHQUFVRyxHQUFHLEdBQUdKLEdBQUgsR0FBU1gsRUFBckM7QUFDQSxpQkFBS0QsTUFBTCxDQUFZclQsSUFBWixDQUFpQjtBQUFFRixtQkFBSyxFQUFFLEtBQUtBLEtBQWQ7QUFBcUJzVCxrQkFBSSxFQUFFbUIsS0FBM0I7QUFBa0NoRCxzQkFBUSxFQUFFO0FBQTVDLGFBQWpCO0FBQ0EsaUJBQUt6UixLQUFMLElBQWN5VSxLQUFLLENBQUN2TixNQUFwQjtBQUNILFdBSkQsTUFJTztBQUNILGlCQUFLd04sVUFBTCxDQUFnQiw0QkFBaEIsRUFBOEMsS0FBSzFVLEtBQW5ELEVBQTBELEtBQUtBLEtBQUwsR0FBYSxDQUF2RTtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxhQUFPLEtBQUt1VCxNQUFaO0FBQ0g7QUF2Q0w7QUFBQTtBQUFBLHVCQXlDT0MsRUF6Q1AsRUF5Q1dtQixLQXpDWCxFQXlDa0I7QUFDVixhQUFPQSxLQUFLLENBQUMxVSxPQUFOLENBQWN1VCxFQUFkLE1BQXNCLENBQUMsQ0FBOUI7QUFDSDtBQTNDTDtBQUFBO0FBQUEseUJBNkNTb0IsQ0E3Q1QsRUE2Q1k7QUFDSixVQUFJQyxHQUFHLEdBQUdELENBQUMsSUFBSSxDQUFmO0FBQ0EsYUFBUSxLQUFLNVUsS0FBTCxHQUFhNlUsR0FBYixHQUFtQixLQUFLdkIsSUFBTCxDQUFVcE0sTUFBOUIsR0FBd0MsS0FBS29NLElBQUwsQ0FBVUcsTUFBVixDQUFpQixLQUFLelQsS0FBTCxHQUFhNlUsR0FBOUIsQ0FBeEMsR0FBNkUsS0FBcEY7QUFDSDtBQWhETDtBQUFBO0FBQUEsNkJBa0RhckIsRUFsRGIsRUFrRGlCO0FBQ1QsYUFBUSxPQUFPQSxFQUFQLElBQWFBLEVBQUUsSUFBSSxHQUFwQixJQUE0QixPQUFPQSxFQUFQLEtBQWMsUUFBakQ7QUFDSDtBQXBETDtBQUFBO0FBQUEsaUNBc0RpQkEsRUF0RGpCLEVBc0RxQjtBQUNiO0FBQ0EsYUFBUUEsRUFBRSxLQUFLLEdBQVAsSUFBY0EsRUFBRSxLQUFLLElBQXJCLElBQTZCQSxFQUFFLEtBQUssSUFBcEMsSUFDSkEsRUFBRSxLQUFLLElBREgsSUFDV0EsRUFBRSxLQUFLLElBRGxCLElBQzBCQSxFQUFFLEtBQUssTUFEekM7QUFFSDtBQTFETDtBQUFBO0FBQUEsc0NBNERzQkEsRUE1RHRCLEVBNEQwQjtBQUNsQixhQUFPLEtBQUt2USxPQUFMLENBQWE2USxpQkFBYixHQUNILEtBQUs3USxPQUFMLENBQWE2USxpQkFBYixDQUErQk4sRUFBL0IsRUFBbUMsS0FBS3NCLFdBQUwsQ0FBaUJ0QixFQUFqQixDQUFuQyxDQURHLEdBRUgsS0FBS3VCLHNCQUFMLENBQTRCdkIsRUFBNUIsQ0FGSjtBQUdIO0FBaEVMO0FBQUE7QUFBQSwyQ0FrRTJCQSxFQWxFM0IsRUFrRStCO0FBQ3ZCLGFBQVEsT0FBT0EsRUFBUCxJQUFhQSxFQUFFLElBQUksR0FBbkIsSUFDSixPQUFPQSxFQUFQLElBQWFBLEVBQUUsSUFBSSxHQURmLElBRUosUUFBUUEsRUFGSixJQUVVQSxFQUFFLEtBQUssR0FGekI7QUFHSDtBQXRFTDtBQUFBO0FBQUEseUNBd0V5QkEsRUF4RXpCLEVBd0U2QjtBQUNyQixhQUFPLEtBQUt2USxPQUFMLENBQWErUixvQkFBYixHQUNILEtBQUsvUixPQUFMLENBQWErUixvQkFBYixDQUFrQ3hCLEVBQWxDLEVBQXNDLEtBQUtzQixXQUFMLENBQWlCdEIsRUFBakIsQ0FBdEMsQ0FERyxHQUVILEtBQUt5Qix5QkFBTCxDQUErQnpCLEVBQS9CLENBRko7QUFHSDtBQTVFTDtBQUFBO0FBQUEsOENBOEU4QkEsRUE5RTlCLEVBOEVrQzBCLEVBOUVsQyxFQThFc0M7QUFDOUIsYUFBTyxLQUFLSCxzQkFBTCxDQUE0QnZCLEVBQTVCLEVBQWdDMEIsRUFBaEMsS0FBdUMsS0FBS3ZCLFFBQUwsQ0FBY0gsRUFBZCxDQUE5QztBQUNIO0FBaEZMO0FBQUE7QUFBQSxnQ0FrRmdCQSxFQWxGaEIsRUFrRm9CO0FBQ1osVUFBSUEsRUFBRSxDQUFDdE0sTUFBSCxLQUFjLENBQWxCLEVBQXFCO0FBQ2pCLGVBQU9zTSxFQUFFLENBQUMyQixVQUFILENBQWMsQ0FBZCxDQUFQO0FBQ0gsT0FIVyxDQUlaOzs7QUFDQSxhQUFPLENBQUMzQixFQUFFLENBQUMyQixVQUFILENBQWMsQ0FBZCxLQUFvQixFQUFyQixJQUEyQjNCLEVBQUUsQ0FBQzJCLFVBQUgsQ0FBYyxDQUFkLENBQTNCLEdBQThDLFNBQXJEO0FBQ0g7QUF4Rkw7QUFBQTtBQUFBLG9DQTBGb0I7QUFDWixVQUFJM0IsRUFBRSxHQUFHLEtBQUtGLElBQUwsQ0FBVUcsTUFBVixDQUFpQixLQUFLelQsS0FBdEIsQ0FBVDtBQUNBLFVBQUk0VCxJQUFJLEdBQUcsS0FBS0EsSUFBTCxFQUFYOztBQUNBLFVBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1AsZUFBT0osRUFBUDtBQUNIOztBQUNELFVBQUk0QixHQUFHLEdBQUc1QixFQUFFLENBQUMyQixVQUFILENBQWMsQ0FBZCxDQUFWO0FBQ0EsVUFBSUUsR0FBRyxHQUFHekIsSUFBSSxDQUFDdUIsVUFBTCxDQUFnQixDQUFoQixDQUFWOztBQUNBLFVBQUlDLEdBQUcsSUFBSSxNQUFQLElBQWlCQSxHQUFHLElBQUksTUFBeEIsSUFBa0NDLEdBQUcsSUFBSSxNQUF6QyxJQUFtREEsR0FBRyxJQUFJLE1BQTlELEVBQXNFO0FBQ2xFLGVBQU83QixFQUFFLEdBQUdJLElBQVo7QUFDSDs7QUFDRCxhQUFPSixFQUFQO0FBQ0g7QUF0R0w7QUFBQTtBQUFBLGtDQXdHa0JBLEVBeEdsQixFQXdHc0I7QUFDZCxhQUFRQSxFQUFFLEtBQUssR0FBUCxJQUFjQSxFQUFFLEtBQUssR0FBckIsSUFBNEIsS0FBS0csUUFBTCxDQUFjSCxFQUFkLENBQXBDO0FBQ0g7QUExR0w7QUFBQTtBQUFBLCtCQTRHZThCLEtBNUdmLEVBNEdzQkMsS0E1R3RCLEVBNEc2QkMsR0E1RzdCLEVBNEdrQztBQUMxQkEsU0FBRyxHQUFHQSxHQUFHLElBQUksS0FBS3hWLEtBQWxCO0FBQ0EsVUFBSXlWLE1BQU0sR0FBSXJQLGdEQUFBLENBQWdCbVAsS0FBaEIsSUFBeUIsT0FBT0EsS0FBUCxHQUFlLEdBQWYsR0FBcUIsS0FBS3ZWLEtBQTFCLEdBQWtDLElBQWxDLEdBQXlDLEtBQUtzVCxJQUFMLENBQVVvQyxTQUFWLENBQW9CSCxLQUFwQixFQUEyQkMsR0FBM0IsQ0FBekMsR0FBMkUsR0FBcEcsR0FBMEcsTUFBTUEsR0FBOUg7QUFDQSxZQUFNLElBQUlyVixLQUFKLENBQVUsa0JBQWtCbVYsS0FBbEIsR0FBMEIsWUFBMUIsR0FBeUNHLE1BQXpDLEdBQWtELGtCQUFsRCxHQUF1RSxLQUFLbkMsSUFBNUUsR0FBbUYsSUFBN0YsQ0FBTjtBQUNIO0FBaEhMO0FBQUE7QUFBQSxpQ0FrSGlCO0FBQ1QsVUFBSXFDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsVUFBSUosS0FBSyxHQUFHLEtBQUt2VixLQUFqQjs7QUFDQSxhQUFPLEtBQUtBLEtBQUwsR0FBYSxLQUFLc1QsSUFBTCxDQUFVcE0sTUFBOUIsRUFBc0M7QUFDbEMsWUFBSXNNLEVBQUUsR0FBR3BOLGdEQUFBLENBQWdCLEtBQUtrTixJQUFMLENBQVVHLE1BQVYsQ0FBaUIsS0FBS3pULEtBQXRCLENBQWhCLENBQVQ7O0FBQ0EsWUFBSXdULEVBQUUsS0FBSyxHQUFQLElBQWMsS0FBS0csUUFBTCxDQUFjSCxFQUFkLENBQWxCLEVBQXFDO0FBQ2pDbUMsZ0JBQU0sSUFBSW5DLEVBQVY7QUFDSCxTQUZELE1BRU87QUFDSCxjQUFJb0MsTUFBTSxHQUFHLEtBQUtoQyxJQUFMLEVBQWI7O0FBQ0EsY0FBSUosRUFBRSxLQUFLLEdBQVAsSUFBYyxLQUFLcUMsYUFBTCxDQUFtQkQsTUFBbkIsQ0FBbEIsRUFBOEM7QUFDMUNELGtCQUFNLElBQUluQyxFQUFWO0FBQ0gsV0FGRCxNQUVPLElBQUksS0FBS3FDLGFBQUwsQ0FBbUJyQyxFQUFuQixLQUNQb0MsTUFETyxJQUNHLEtBQUtqQyxRQUFMLENBQWNpQyxNQUFkLENBREgsSUFFUEQsTUFBTSxDQUFDbEMsTUFBUCxDQUFja0MsTUFBTSxDQUFDek8sTUFBUCxHQUFnQixDQUE5QixNQUFxQyxHQUZsQyxFQUV1QztBQUMxQ3lPLGtCQUFNLElBQUluQyxFQUFWO0FBQ0gsV0FKTSxNQUlBLElBQUksS0FBS3FDLGFBQUwsQ0FBbUJyQyxFQUFuQixNQUNOLENBQUNvQyxNQUFELElBQVcsQ0FBQyxLQUFLakMsUUFBTCxDQUFjaUMsTUFBZCxDQUROLEtBRVBELE1BQU0sQ0FBQ2xDLE1BQVAsQ0FBY2tDLE1BQU0sQ0FBQ3pPLE1BQVAsR0FBZ0IsQ0FBOUIsTUFBcUMsR0FGbEMsRUFFdUM7QUFDMUMsaUJBQUt3TixVQUFMLENBQWdCLGtCQUFoQjtBQUNILFdBSk0sTUFJQTtBQUNIO0FBQ0g7QUFDSjs7QUFDRCxhQUFLMVUsS0FBTDtBQUNIOztBQUNELFdBQUt1VCxNQUFMLENBQVlyVCxJQUFaLENBQWlCO0FBQ2JGLGFBQUssRUFBRXVWLEtBRE07QUFFYmpDLFlBQUksRUFBRXFDLE1BRk87QUFHYkcsZ0JBQVEsRUFBRSxJQUhHO0FBSWJwVSxhQUFLLEVBQUVxVSxNQUFNLENBQUNKLE1BQUQ7QUFKQSxPQUFqQjtBQU1IO0FBakpMO0FBQUE7QUFBQSxnQ0FtSmdCO0FBQ1IsVUFBSUosS0FBSyxHQUFHLEtBQUt2VixLQUFqQjtBQUNBLFdBQUtBLEtBQUwsSUFBYyxLQUFLK1QsYUFBTCxHQUFxQjdNLE1BQW5DOztBQUNBLGFBQU8sS0FBS2xILEtBQUwsR0FBYSxLQUFLc1QsSUFBTCxDQUFVcE0sTUFBOUIsRUFBc0M7QUFDbEMsWUFBSXNNLEVBQUUsR0FBRyxLQUFLTyxhQUFMLEVBQVQ7O0FBQ0EsWUFBSSxDQUFDLEtBQUtpQixvQkFBTCxDQUEwQnhCLEVBQTFCLENBQUwsRUFBb0M7QUFDaEM7QUFDSDs7QUFDRCxhQUFLeFQsS0FBTCxJQUFjd1QsRUFBRSxDQUFDdE0sTUFBakI7QUFDSDs7QUFDRCxXQUFLcU0sTUFBTCxDQUFZclQsSUFBWixDQUFpQjtBQUNiRixhQUFLLEVBQUV1VixLQURNO0FBRWJqQyxZQUFJLEVBQUUsS0FBS0EsSUFBTCxDQUFVekosS0FBVixDQUFnQjBMLEtBQWhCLEVBQXVCLEtBQUt2VixLQUE1QixDQUZPO0FBR2J1UCxrQkFBVSxFQUFFO0FBSEMsT0FBakI7QUFLSDtBQWxLTDtBQUFBO0FBQUEsK0JBb0tleUcsS0FwS2YsRUFvS3NCO0FBQ2QsVUFBSVQsS0FBSyxHQUFHLEtBQUt2VixLQUFqQjtBQUNBLFdBQUtBLEtBQUw7QUFDQSxVQUFJaVcsTUFBTSxHQUFHLEVBQWI7QUFDQSxVQUFJQyxTQUFTLEdBQUdGLEtBQWhCO0FBQ0EsVUFBSUcsTUFBTSxHQUFHLEtBQWI7O0FBQ0EsYUFBTyxLQUFLblcsS0FBTCxHQUFhLEtBQUtzVCxJQUFMLENBQVVwTSxNQUE5QixFQUFzQztBQUNsQyxZQUFJc00sRUFBRSxHQUFHLEtBQUtGLElBQUwsQ0FBVUcsTUFBVixDQUFpQixLQUFLelQsS0FBdEIsQ0FBVDtBQUNBa1csaUJBQVMsSUFBSTFDLEVBQWI7O0FBQ0EsWUFBSTJDLE1BQUosRUFBWTtBQUNSLGNBQUkzQyxFQUFFLEtBQUssR0FBWCxFQUFnQjtBQUNaLGdCQUFJNEMsR0FBRyxHQUFHLEtBQUs5QyxJQUFMLENBQVVvQyxTQUFWLENBQW9CLEtBQUsxVixLQUFMLEdBQWEsQ0FBakMsRUFBb0MsS0FBS0EsS0FBTCxHQUFhLENBQWpELENBQVY7O0FBQ0EsZ0JBQUksQ0FBQ29XLEdBQUcsQ0FBQ0MsS0FBSixDQUFVLGFBQVYsQ0FBTCxFQUErQjtBQUMzQixtQkFBSzNCLFVBQUwsQ0FBZ0IsZ0NBQWdDMEIsR0FBaEMsR0FBc0MsR0FBdEQ7QUFDSDs7QUFDRCxpQkFBS3BXLEtBQUwsSUFBYyxDQUFkO0FBQ0FpVyxrQkFBTSxJQUFJSyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLFFBQVEsQ0FBQ0osR0FBRCxFQUFNLEVBQU4sQ0FBNUIsQ0FBVjtBQUNILFdBUEQsTUFPTztBQUNILGdCQUFJSyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ2xELEVBQUQsQ0FBaEI7QUFDQXlDLGtCQUFNLEdBQUdBLE1BQU0sSUFBSVEsR0FBRyxJQUFJakQsRUFBWCxDQUFmO0FBQ0g7O0FBQ0QyQyxnQkFBTSxHQUFHLEtBQVQ7QUFDSCxTQWJELE1BYU8sSUFBSTNDLEVBQUUsS0FBSyxJQUFYLEVBQWlCO0FBQ3BCMkMsZ0JBQU0sR0FBRyxJQUFUO0FBQ0gsU0FGTSxNQUVBLElBQUkzQyxFQUFFLEtBQUt3QyxLQUFYLEVBQWtCO0FBQ3JCLGVBQUtoVyxLQUFMO0FBQ0EsZUFBS3VULE1BQUwsQ0FBWXJULElBQVosQ0FBaUI7QUFDYkYsaUJBQUssRUFBRXVWLEtBRE07QUFFYmpDLGdCQUFJLEVBQUU0QyxTQUZPO0FBR2JKLG9CQUFRLEVBQUUsSUFIRztBQUlicFUsaUJBQUssRUFBRXVVO0FBSk0sV0FBakI7QUFNQTtBQUNILFNBVE0sTUFTQTtBQUNIQSxnQkFBTSxJQUFJekMsRUFBVjtBQUNIOztBQUNELGFBQUt4VCxLQUFMO0FBQ0g7O0FBQ0QsV0FBSzBVLFVBQUwsQ0FBZ0Isb0JBQWhCLEVBQXNDYSxLQUF0QztBQUNIO0FBM01MOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFPLElBQUlqQixTQUFTLEdBQUcsRUFBaEI7QUFFUCxJQUFJcUMsWUFBWSxHQUFHLCtDQUFuQjtBQUNBLElBQUlELE1BQU0sR0FBRztBQUFFLE9BQUssSUFBUDtBQUFhLE9BQUssSUFBbEI7QUFBd0IsT0FBSyxJQUE3QjtBQUFtQyxPQUFLLElBQXhDO0FBQThDLE9BQUssSUFBbkQ7QUFBeUQsUUFBTSxJQUEvRDtBQUFxRSxPQUFLO0FBQTFFLENBQWI7QUFFQUMsWUFBWSxDQUFDNUwsS0FBYixDQUFtQixHQUFuQixFQUF3QnhLLE9BQXhCLENBQWdDLFVBQVVrUixRQUFWLEVBQW9CO0FBQ2hENkMsV0FBUyxDQUFDN0MsUUFBRCxDQUFULEdBQXNCLElBQXRCO0FBQ0gsQ0FGRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQWlCQTtBQUNBO0FBQ0E7QUFFTyxJQUFNWSxTQUFiO0FBQ0kscUJBQVl1RSxLQUFaLEVBQW1CM1QsT0FBbkIsRUFBNEI7QUFBQTs7QUFDeEIsU0FBSzJULEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUszVCxPQUFMLEdBQWVtRCw0Q0FBQSxDQUFZaU4sMkRBQVosRUFBMEJwUSxPQUExQixDQUFmO0FBQ0g7O0FBSkw7QUFBQTtBQUFBLCtCQU1lNFQsR0FOZixFQU1vQnBDLEtBTnBCLEVBTTJCO0FBQ25CLFlBQU0sSUFBSXRVLEtBQUosQ0FBVSwyQkFBMkJzVSxLQUFLLENBQUNuQixJQUFqQyxHQUF3QyxJQUF4QyxHQUErQ3VELEdBQS9DLEdBQXFELGFBQXJELElBQXNFcEMsS0FBSyxDQUFDelUsS0FBTixHQUFjLENBQXBGLElBQ1osc0JBRFksR0FDYSxLQUFLc1QsSUFEbEIsR0FDeUIsaUJBRHpCLEdBQzZDLEtBQUtBLElBQUwsQ0FBVW9DLFNBQVYsQ0FBb0JqQixLQUFLLENBQUN6VSxLQUExQixDQUQ3QyxHQUNnRixJQUQxRixDQUFOO0FBRUg7QUFUTDtBQUFBO0FBQUEsMEJBV1VzVCxJQVhWLEVBV2dCO0FBQ1IsV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLEtBQUtxRCxLQUFMLENBQVd4RSxHQUFYLENBQWVrQixJQUFmLENBQWQ7QUFFQSxVQUFJNVIsS0FBSyxHQUFHLEtBQUt1SyxPQUFMLEVBQVo7O0FBRUEsVUFBSSxLQUFLc0gsTUFBTCxDQUFZck0sTUFBWixLQUF1QixDQUEzQixFQUE4QjtBQUMxQixhQUFLd04sVUFBTCxDQUFnQix3QkFBaEIsRUFBMEMsS0FBS25CLE1BQUwsQ0FBWSxDQUFaLENBQTFDO0FBQ0g7O0FBRUQsYUFBTzdSLEtBQVA7QUFDSDtBQXRCTDtBQUFBO0FBQUEsOEJBd0JjO0FBQ04sVUFBSXVLLE9BQU8sR0FBRyxJQUFJNkssa0RBQUosRUFBZDs7QUFDQSxhQUFPLElBQVAsRUFBYTtBQUNULFlBQUksS0FBS3ZELE1BQUwsQ0FBWXJNLE1BQVosR0FBcUIsQ0FBckIsSUFBMEIsQ0FBQyxLQUFLME0sSUFBTCxDQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCLENBQS9CLEVBQThEO0FBQzFEM0gsaUJBQU8sQ0FBQ25HLFdBQVIsQ0FBb0IsS0FBS2lSLG1CQUFMLEVBQXBCO0FBQ0g7O0FBQ0QsWUFBSSxDQUFDLEtBQUtDLE1BQUwsQ0FBWSxHQUFaLENBQUwsRUFBdUI7QUFDbkIsaUJBQU8vSyxPQUFQO0FBQ0g7QUFDSjtBQUNKO0FBbENMO0FBQUE7QUFBQSwwQ0FvQzBCO0FBQ2xCLFVBQUlMLEdBQUcsR0FBRyxJQUFJcUwsOERBQUosRUFBVjtBQUNBckwsU0FBRyxDQUFDOUYsV0FBSixDQUFnQixLQUFLb1IsV0FBTCxFQUFoQjtBQUNBLGFBQU90TCxHQUFQO0FBQ0g7QUF4Q0w7QUFBQTtBQUFBLGtDQTBDa0I7QUFDVixVQUFJZ0QsSUFBSSxHQUFHLEtBQUsyQixVQUFMLEVBQVg7O0FBQ0EsYUFBTyxLQUFLeUcsTUFBTCxDQUFZLEdBQVosQ0FBUCxFQUF5QjtBQUNyQnBJLFlBQUksR0FBRyxLQUFLdk4sTUFBTCxDQUFZdU4sSUFBWixDQUFQO0FBQ0g7O0FBQ0QsYUFBT0EsSUFBUDtBQUNIO0FBaERMO0FBQUE7QUFBQSxpQ0FrRGlCO0FBQ1QsYUFBTyxLQUFLUCxVQUFMLEVBQVA7QUFDSDtBQXBETDtBQUFBO0FBQUEsaUNBc0RpQjhJLEdBdERqQixFQXNEc0I7QUFDZCxhQUFPQSxHQUFHLENBQUMxSyxJQUFKLEtBQWFDLDBDQUFHLENBQUNpQixVQUFqQixJQUErQndKLEdBQUcsQ0FBQzFLLElBQUosS0FBYUMsMENBQUcsQ0FBQ2UsZ0JBQXZEO0FBQ0g7QUF4REw7QUFBQTtBQUFBLGlDQTBEaUI7QUFDVCxVQUFJbkksTUFBTSxHQUFHLEtBQUs4UixPQUFMLEVBQWI7O0FBQ0EsVUFBSSxLQUFLSixNQUFMLENBQVksR0FBWixDQUFKLEVBQXNCO0FBQ2xCLFlBQUksQ0FBQyxLQUFLSyxZQUFMLENBQWtCL1IsTUFBbEIsQ0FBTCxFQUFnQztBQUM1QixnQkFBTSxJQUFJbkYsS0FBSixDQUFVLDJDQUFWLENBQU47QUFDSDs7QUFFRG1GLGNBQU0sR0FBRyxJQUFJZ1MsK0RBQUosQ0FBNkJoUyxNQUE3QixFQUFxQyxLQUFLK0ksVUFBTCxFQUFyQyxFQUF3RCxHQUF4RCxDQUFUO0FBQ0g7O0FBQ0QsYUFBTy9JLE1BQVA7QUFDSDtBQXBFTDtBQUFBO0FBQUEsOEJBc0VjO0FBQ04sVUFBSWtKLElBQUksR0FBRyxLQUFLK0ksU0FBTCxFQUFYO0FBQ0EsVUFBSTlJLFNBQUo7QUFDQSxVQUFJQyxVQUFKOztBQUNBLFVBQUksS0FBS3NJLE1BQUwsQ0FBWSxHQUFaLENBQUosRUFBc0I7QUFDbEJ2SSxpQkFBUyxHQUFHLEtBQUs4QixVQUFMLEVBQVo7O0FBQ0EsWUFBSSxLQUFLaUgsT0FBTCxDQUFhLEdBQWIsQ0FBSixFQUF1QjtBQUNuQjlJLG9CQUFVLEdBQUcsS0FBSzZCLFVBQUwsRUFBYjtBQUNBLGlCQUFPLElBQUlrSCxnRUFBSixDQUE4QmpKLElBQTlCLEVBQW9DQyxTQUFwQyxFQUErQ0MsVUFBL0MsQ0FBUDtBQUNIO0FBQ0o7O0FBQ0QsYUFBT0YsSUFBUDtBQUNIO0FBbEZMO0FBQUE7QUFBQSxnQ0FvRmdCO0FBQ1IsVUFBSUksSUFBSSxHQUFHLEtBQUs4SSxVQUFMLEVBQVg7O0FBQ0EsYUFBTyxLQUFLVixNQUFMLENBQVksSUFBWixDQUFQLEVBQTBCO0FBQ3RCcEksWUFBSSxHQUFHLElBQUkrSSw0REFBSixDQUEwQixJQUExQixFQUFnQy9JLElBQWhDLEVBQXNDLEtBQUs4SSxVQUFMLEVBQXRDLENBQVA7QUFDSDs7QUFDRCxhQUFPOUksSUFBUDtBQUNIO0FBMUZMO0FBQUE7QUFBQSxpQ0E0RmlCO0FBQ1QsVUFBSUEsSUFBSSxHQUFHLEtBQUtnSixRQUFMLEVBQVg7O0FBQ0EsYUFBTyxLQUFLWixNQUFMLENBQVksSUFBWixDQUFQLEVBQTBCO0FBQ3RCcEksWUFBSSxHQUFHLElBQUkrSSw0REFBSixDQUEwQixJQUExQixFQUFnQy9JLElBQWhDLEVBQXNDLEtBQUtnSixRQUFMLEVBQXRDLENBQVA7QUFDSDs7QUFDRCxhQUFPaEosSUFBUDtBQUNIO0FBbEdMO0FBQUE7QUFBQSwrQkFvR2U7QUFDUCxVQUFJQSxJQUFJLEdBQUcsS0FBS2lKLFVBQUwsRUFBWDtBQUNBLFVBQUlwRCxLQUFKOztBQUNBLGFBQVFBLEtBQUssR0FBRyxLQUFLdUMsTUFBTCxDQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsS0FBeEIsRUFBK0IsS0FBL0IsQ0FBaEIsRUFBd0Q7QUFDcERwSSxZQUFJLEdBQUcsSUFBSWtKLDJEQUFKLENBQXlCckQsS0FBSyxDQUFDbkIsSUFBL0IsRUFBcUMxRSxJQUFyQyxFQUEyQyxLQUFLaUosVUFBTCxFQUEzQyxDQUFQO0FBQ0g7O0FBQ0QsYUFBT2pKLElBQVA7QUFDSDtBQTNHTDtBQUFBO0FBQUEsaUNBNkdpQjtBQUNULFVBQUlBLElBQUksR0FBRyxLQUFLbUosUUFBTCxFQUFYO0FBQ0EsVUFBSXRELEtBQUo7O0FBQ0EsYUFBUUEsS0FBSyxHQUFHLEtBQUt1QyxNQUFMLENBQVksR0FBWixFQUFpQixHQUFqQixFQUFzQixJQUF0QixFQUE0QixJQUE1QixDQUFoQixFQUFvRDtBQUNoRHBJLFlBQUksR0FBRyxJQUFJa0osMkRBQUosQ0FBeUJyRCxLQUFLLENBQUNuQixJQUEvQixFQUFxQzFFLElBQXJDLEVBQTJDLEtBQUttSixRQUFMLEVBQTNDLENBQVA7QUFDSDs7QUFDRCxhQUFPbkosSUFBUDtBQUNIO0FBcEhMO0FBQUE7QUFBQSwrQkFzSGU7QUFDUCxVQUFJQSxJQUFJLEdBQUcsS0FBS29KLGNBQUwsRUFBWDtBQUNBLFVBQUl2RCxLQUFKOztBQUNBLGFBQVFBLEtBQUssR0FBRyxLQUFLdUMsTUFBTCxDQUFZLEdBQVosRUFBaUIsR0FBakIsQ0FBaEIsRUFBd0M7QUFDcENwSSxZQUFJLEdBQUcsSUFBSWtKLDJEQUFKLENBQXlCckQsS0FBSyxDQUFDbkIsSUFBL0IsRUFBcUMxRSxJQUFyQyxFQUEyQyxLQUFLb0osY0FBTCxFQUEzQyxDQUFQO0FBQ0g7O0FBQ0QsYUFBT3BKLElBQVA7QUFDSDtBQTdITDtBQUFBO0FBQUEscUNBK0hxQjtBQUNiLFVBQUlBLElBQUksR0FBRyxLQUFLRSxLQUFMLEVBQVg7QUFDQSxVQUFJMkYsS0FBSjs7QUFDQSxhQUFRQSxLQUFLLEdBQUcsS0FBS3VDLE1BQUwsQ0FBWSxHQUFaLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLENBQWhCLEVBQTZDO0FBQ3pDcEksWUFBSSxHQUFHLElBQUlrSiwyREFBSixDQUF5QnJELEtBQUssQ0FBQ25CLElBQS9CLEVBQXFDMUUsSUFBckMsRUFBMkMsS0FBS0UsS0FBTCxFQUEzQyxDQUFQO0FBQ0g7O0FBQ0QsYUFBT0YsSUFBUDtBQUNIO0FBdElMO0FBQUE7QUFBQSw0QkF3SVk7QUFDSixVQUFJNkYsS0FBSjs7QUFDQSxVQUFLQSxLQUFLLEdBQUcsS0FBS3VDLE1BQUwsQ0FBWSxHQUFaLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLENBQWIsRUFBMEM7QUFDdEMsZUFBTyxJQUFJaUIsMERBQUosQ0FBd0J4RCxLQUFLLENBQUNuQixJQUE5QixFQUFvQyxLQUFLeEUsS0FBTCxFQUFwQyxDQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsZUFBTyxLQUFLb0osT0FBTCxFQUFQO0FBQ0g7QUFDSjtBQS9JTDtBQUFBO0FBQUEsOEJBaUpjO0FBQ04sVUFBSUEsT0FBSjs7QUFDQSxVQUFJLEtBQUtsQixNQUFMLENBQVksR0FBWixDQUFKLEVBQXNCO0FBQ2xCa0IsZUFBTyxHQUFHLEtBQUtoQixXQUFMLEVBQVY7QUFDQSxhQUFLTSxPQUFMLENBQWEsR0FBYjtBQUNILE9BSEQsTUFHTyxJQUFJLEtBQUtSLE1BQUwsQ0FBWSxHQUFaLENBQUosRUFBc0I7QUFDekJrQixlQUFPLEdBQUcsS0FBS0MsZ0JBQUwsRUFBVjtBQUNILE9BRk0sTUFFQSxJQUFJLEtBQUtuQixNQUFMLENBQVksR0FBWixDQUFKLEVBQXNCO0FBQ3pCa0IsZUFBTyxHQUFHLEtBQUtoSixNQUFMLEVBQVY7QUFDSCxPQUZNLE1BRUEsSUFBSSxLQUFLak0sT0FBTCxDQUFhbVYsUUFBYixDQUFzQkMsY0FBdEIsQ0FBcUMsS0FBS3pFLElBQUwsR0FBWU4sSUFBakQsQ0FBSixFQUE0RDtBQUMvRDRFLGVBQU8sR0FBRyxJQUFJSSxrREFBSixDQUFnQixLQUFLclYsT0FBTCxDQUFhbVYsUUFBYixDQUFzQixLQUFLWixPQUFMLEdBQWVsRSxJQUFyQyxDQUFoQixDQUFWO0FBQ0gsT0FGTSxNQUVBLElBQUksS0FBS00sSUFBTCxHQUFZckUsVUFBaEIsRUFBNEI7QUFDL0IySSxlQUFPLEdBQUcsS0FBSzNJLFVBQUwsRUFBVjtBQUNILE9BRk0sTUFFQSxJQUFJLEtBQUtxRSxJQUFMLEdBQVlrQyxRQUFoQixFQUEwQjtBQUM3Qm9DLGVBQU8sR0FBRyxLQUFLcEMsUUFBTCxFQUFWO0FBQ0gsT0FGTSxNQUVBO0FBQ0gsYUFBS3BCLFVBQUwsQ0FBZ0IsMEJBQWhCLEVBQTRDLEtBQUtkLElBQUwsRUFBNUM7QUFDSDs7QUFFRCxVQUFJMkUsSUFBSjs7QUFDQSxhQUFPLEtBQUszRSxJQUFMLENBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsR0FBcEIsS0FBNkIsS0FBS0EsSUFBTCxDQUFVLEdBQVYsS0FBa0IsS0FBSzRFLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLEdBQWxCLENBQXRELEVBQStFO0FBQzNFLFlBQUksS0FBS3hCLE1BQUwsQ0FBWSxHQUFaLENBQUosRUFBc0I7QUFDbEJrQixpQkFBTyxDQUFDbkksU0FBUixHQUFvQixJQUFwQjtBQUNIOztBQUVEd0ksWUFBSSxHQUFHLEtBQUt2QixNQUFMLENBQVksR0FBWixFQUFpQixHQUFqQixFQUFzQixHQUF0QixDQUFQOztBQUVBLFlBQUl1QixJQUFJLENBQUNqRixJQUFMLEtBQWMsR0FBbEIsRUFBdUI7QUFDbkI0RSxpQkFBTyxHQUFHLElBQUlPLHlEQUFKLENBQXVCUCxPQUF2QixFQUFnQyxLQUFLUSxjQUFMLEVBQWhDLENBQVY7QUFDQSxlQUFLbEIsT0FBTCxDQUFhLEdBQWI7QUFDSCxTQUhELE1BR08sSUFBSWUsSUFBSSxDQUFDakYsSUFBTCxLQUFjLEdBQWxCLEVBQXVCO0FBQzFCNEUsaUJBQU8sR0FBRyxJQUFJUywyREFBSixDQUF5QlQsT0FBekIsRUFBa0MsS0FBSzNILFVBQUwsRUFBbEMsRUFBcUQsSUFBckQsQ0FBVjtBQUNBLGVBQUtpSCxPQUFMLENBQWEsR0FBYjtBQUNILFNBSE0sTUFHQSxJQUFJZSxJQUFJLENBQUNqRixJQUFMLEtBQWMsR0FBbEIsRUFBdUI7QUFDMUI0RSxpQkFBTyxHQUFHLElBQUlTLDJEQUFKLENBQXlCVCxPQUF6QixFQUFrQyxLQUFLM0ksVUFBTCxFQUFsQyxFQUFxRCxLQUFyRCxDQUFWO0FBQ0gsU0FGTSxNQUVBO0FBQ0gsZUFBS21GLFVBQUwsQ0FBZ0IsWUFBaEI7QUFDSDtBQUNKOztBQUNELGFBQU93RCxPQUFQO0FBQ0g7QUF6TEw7QUFBQTtBQUFBLDJCQTJMV1UsY0EzTFgsRUEyTDJCO0FBQ25CLFVBQUk3SixJQUFJLEdBQUcsQ0FBQzZKLGNBQUQsQ0FBWDtBQUFBLFVBQTZCQyxXQUFXLEdBQUcsQ0FBQyxLQUFLdEosVUFBTCxFQUFELENBQTNDOztBQUVBLGFBQU8sS0FBS3lILE1BQUwsQ0FBWSxHQUFaLENBQVAsRUFBeUI7QUFDckI2QixtQkFBVyxDQUFDM1ksSUFBWixDQUFpQixLQUFLcVAsVUFBTCxFQUFqQjtBQUNILE9BTGtCLENBT25COzs7QUFDQSxVQUFJdUosVUFBVSxHQUFHRCxXQUFXLENBQUNsSCxHQUFaLENBQWdCLFVBQVV0TCxJQUFWLEVBQWdCO0FBQzdDLGVBQU9BLElBQUksQ0FBQzdILElBQVo7QUFDSCxPQUZnQixFQUVkNEosSUFGYyxDQUVULEdBRlMsQ0FBakI7QUFJQSxVQUFJOUMsTUFBTSxHQUFHLElBQUltVCx5REFBSixDQUF1QixJQUFJTSxxREFBSixDQUFtQkQsVUFBbkIsQ0FBdkIsRUFBdUQvSixJQUF2RCxDQUFiO0FBRUF6SixZQUFNLENBQUNqRSxNQUFQLEdBQWdCLElBQWhCOztBQUVBLGFBQU8sS0FBSzJWLE1BQUwsQ0FBWSxHQUFaLENBQVAsRUFBeUI7QUFDckJqSSxZQUFJLENBQUM3TyxJQUFMLENBQVUsS0FBS3FRLFVBQUwsRUFBVjtBQUNIOztBQUVELGFBQU9qTCxNQUFQO0FBQ0g7QUFoTkw7QUFBQTtBQUFBLHFDQWtOcUI7QUFDYixVQUFJeUosSUFBSSxHQUFHLEVBQVg7O0FBQ0EsVUFBSSxLQUFLaUssU0FBTCxHQUFpQjFGLElBQWpCLEtBQTBCLEdBQTlCLEVBQW1DO0FBQy9CLFdBQUc7QUFDQ3ZFLGNBQUksQ0FBQzdPLElBQUwsQ0FBVSxLQUFLZ1gsV0FBTCxFQUFWO0FBQ0gsU0FGRCxRQUVTLEtBQUtGLE1BQUwsQ0FBWSxHQUFaLENBRlQ7QUFHSDs7QUFDRCxhQUFPakksSUFBUDtBQUNIO0FBMU5MO0FBQUE7QUFBQSxpQ0E0TmlCO0FBQ1QsVUFBSTBGLEtBQUssR0FBRyxLQUFLK0MsT0FBTCxFQUFaOztBQUNBLFVBQUksQ0FBQy9DLEtBQUssQ0FBQ2xGLFVBQVgsRUFBdUI7QUFDbkIsYUFBS21GLFVBQUwsQ0FBZ0IsMkJBQWhCLEVBQTZDRCxLQUE3QztBQUNIOztBQUNELGFBQU8sSUFBSXNFLHFEQUFKLENBQW1CdEUsS0FBSyxDQUFDbkIsSUFBekIsQ0FBUDtBQUNIO0FBbE9MO0FBQUE7QUFBQSwrQkFvT2U7QUFDUDtBQUNBLGFBQU8sSUFBSWdGLGtEQUFKLENBQWdCLEtBQUtkLE9BQUwsR0FBZTlWLEtBQS9CLENBQVA7QUFDSDtBQXZPTDtBQUFBO0FBQUEsdUNBeU91QjtBQUNmLFVBQUlrTyxHQUFHLEdBQUcsSUFBSXFKLDBEQUFKLEVBQVY7O0FBQ0EsVUFBSSxLQUFLRCxTQUFMLEdBQWlCMUYsSUFBakIsS0FBMEIsR0FBOUIsRUFBbUM7QUFDL0IsV0FBRztBQUNDLGNBQUksS0FBS00sSUFBTCxDQUFVLEdBQVYsQ0FBSixFQUFvQjtBQUNoQjtBQUNBO0FBQ0g7O0FBQ0RoRSxhQUFHLENBQUM5SixXQUFKLENBQWdCLEtBQUt5SyxVQUFMLEVBQWhCO0FBQ0gsU0FORCxRQU1TLEtBQUt5RyxNQUFMLENBQVksR0FBWixDQU5UO0FBT0g7O0FBQ0QsV0FBS1EsT0FBTCxDQUFhLEdBQWI7QUFFQSxhQUFPNUgsR0FBUDtBQUNIO0FBdlBMO0FBQUE7QUFBQSw2QkF5UGE7QUFDTCxVQUFJRCxVQUFVLEdBQUcsRUFBakI7QUFBQSxVQUFxQlAsUUFBckI7O0FBQ0EsVUFBSSxLQUFLNEosU0FBTCxHQUFpQjFGLElBQWpCLEtBQTBCLEdBQTlCLEVBQW1DO0FBQy9CLFdBQUc7QUFDQyxjQUFJLEtBQUtNLElBQUwsQ0FBVSxHQUFWLENBQUosRUFBb0I7QUFDaEI7QUFDQTtBQUNIOztBQUNEeEUsa0JBQVEsR0FBRyxJQUFJOEosbURBQUosRUFBWDs7QUFDQSxjQUFJLEtBQUt0RixJQUFMLEdBQVlrQyxRQUFoQixFQUEwQjtBQUN0QjFHLG9CQUFRLENBQUM5USxHQUFULEdBQWUsS0FBS3dYLFFBQUwsRUFBZjtBQUNBMUcsb0JBQVEsQ0FBQ0QsUUFBVCxHQUFvQixLQUFwQjtBQUNBLGlCQUFLcUksT0FBTCxDQUFhLEdBQWI7QUFDQXBJLG9CQUFRLENBQUMxTixLQUFULEdBQWlCLEtBQUs2TyxVQUFMLEVBQWpCO0FBQ0gsV0FMRCxNQUtPLElBQUksS0FBS3FELElBQUwsR0FBWXJFLFVBQWhCLEVBQTRCO0FBQy9CSCxvQkFBUSxDQUFDOVEsR0FBVCxHQUFlLEtBQUtpUixVQUFMLEVBQWY7QUFDQUgsb0JBQVEsQ0FBQ0QsUUFBVCxHQUFvQixLQUFwQjs7QUFDQSxnQkFBSSxLQUFLeUUsSUFBTCxDQUFVLEdBQVYsQ0FBSixFQUFvQjtBQUNoQixtQkFBSzRELE9BQUwsQ0FBYSxHQUFiO0FBQ0FwSSxzQkFBUSxDQUFDMU4sS0FBVCxHQUFpQixLQUFLNk8sVUFBTCxFQUFqQjtBQUNILGFBSEQsTUFHTztBQUNIbkIsc0JBQVEsQ0FBQzFOLEtBQVQsR0FBaUIwTixRQUFRLENBQUM5USxHQUExQjtBQUNIO0FBQ0osV0FUTSxNQVNBLElBQUksS0FBS3NWLElBQUwsQ0FBVSxHQUFWLENBQUosRUFBb0I7QUFDdkIsaUJBQUs0RCxPQUFMLENBQWEsR0FBYjtBQUNBcEksb0JBQVEsQ0FBQzlRLEdBQVQsR0FBZSxLQUFLaVMsVUFBTCxFQUFmO0FBQ0EsaUJBQUtpSCxPQUFMLENBQWEsR0FBYjtBQUNBcEksb0JBQVEsQ0FBQ0QsUUFBVCxHQUFvQixJQUFwQjtBQUNBLGlCQUFLcUksT0FBTCxDQUFhLEdBQWI7QUFDQXBJLG9CQUFRLENBQUMxTixLQUFULEdBQWlCLEtBQUs2TyxVQUFMLEVBQWpCO0FBQ0gsV0FQTSxNQU9BO0FBQ0gsaUJBQUttRSxVQUFMLENBQWdCLGFBQWhCLEVBQStCLEtBQUtkLElBQUwsRUFBL0I7QUFDSDs7QUFDRGpFLG9CQUFVLENBQUN6UCxJQUFYLENBQWdCa1AsUUFBaEI7QUFDSCxTQS9CRCxRQStCUyxLQUFLNEgsTUFBTCxDQUFZLEdBQVosQ0EvQlQ7QUFnQ0g7O0FBQ0QsV0FBS1EsT0FBTCxDQUFhLEdBQWI7QUFFQSxhQUFPLElBQUkyQiwyREFBSixDQUF5QnhKLFVBQXpCLENBQVA7QUFDSDtBQWhTTDtBQUFBO0FBQUEsNEJBa1NZeUosRUFsU1osRUFrU2dCO0FBQ1IsVUFBSSxLQUFLN0YsTUFBTCxDQUFZck0sTUFBWixLQUF1QixDQUEzQixFQUE4QjtBQUMxQixjQUFNLElBQUkvRyxLQUFKLENBQVUsbUNBQW1DLEtBQUttVCxJQUFsRCxDQUFOO0FBQ0g7O0FBRUQsVUFBSW1CLEtBQUssR0FBRyxLQUFLdUMsTUFBTCxDQUFZb0MsRUFBWixDQUFaOztBQUNBLFVBQUksQ0FBQzNFLEtBQUwsRUFBWTtBQUNSLGFBQUtDLFVBQUwsQ0FBZ0IsK0JBQStCMEUsRUFBL0IsR0FBb0MsR0FBcEQsRUFBeUQsS0FBS3hGLElBQUwsRUFBekQ7QUFDSDs7QUFDRCxhQUFPYSxLQUFQO0FBQ0g7QUE1U0w7QUFBQTtBQUFBLGdDQThTZ0I7QUFDUixVQUFJLEtBQUtsQixNQUFMLENBQVlyTSxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzFCLGNBQU0sSUFBSS9HLEtBQUosQ0FBVSxtQ0FBbUMsS0FBS21ULElBQWxELENBQU47QUFDSDs7QUFDRCxhQUFPLEtBQUtDLE1BQUwsQ0FBWSxDQUFaLENBQVA7QUFDSDtBQW5UTDtBQUFBO0FBQUEseUJBcVRTNkYsRUFyVFQsRUFxVGFDLEVBclRiLEVBcVRpQkMsRUFyVGpCLEVBcVRxQkMsRUFyVHJCLEVBcVR5QjtBQUNqQixhQUFPLEtBQUtmLFNBQUwsQ0FBZSxDQUFmLEVBQWtCWSxFQUFsQixFQUFzQkMsRUFBdEIsRUFBMEJDLEVBQTFCLEVBQThCQyxFQUE5QixDQUFQO0FBQ0g7QUF2VEw7QUFBQTtBQUFBLDhCQXlUYzNFLENBelRkLEVBeVRpQndFLEVBelRqQixFQXlUcUJDLEVBelRyQixFQXlUeUJDLEVBelR6QixFQXlUNkJDLEVBelQ3QixFQXlUaUM7QUFDekIsVUFBSSxLQUFLaEcsTUFBTCxDQUFZck0sTUFBWixHQUFxQjBOLENBQXpCLEVBQTRCO0FBQ3hCLFlBQUlILEtBQUssR0FBRyxLQUFLbEIsTUFBTCxDQUFZcUIsQ0FBWixDQUFaO0FBQ0EsWUFBSTRFLENBQUMsR0FBRy9FLEtBQUssQ0FBQ25CLElBQWQ7O0FBQ0EsWUFBSWtHLENBQUMsS0FBS0osRUFBTixJQUFZSSxDQUFDLEtBQUtILEVBQWxCLElBQXdCRyxDQUFDLEtBQUtGLEVBQTlCLElBQW9DRSxDQUFDLEtBQUtELEVBQTFDLElBQ0MsQ0FBQ0gsRUFBRCxJQUFPLENBQUNDLEVBQVIsSUFBYyxDQUFDQyxFQUFmLElBQXFCLENBQUNDLEVBRDNCLEVBQ2dDO0FBQzVCLGlCQUFPOUUsS0FBUDtBQUNIO0FBQ0o7O0FBQ0QsYUFBTyxLQUFQO0FBQ0g7QUFuVUw7QUFBQTtBQUFBLDJCQXFVVzJFLEVBclVYLEVBcVVlQyxFQXJVZixFQXFVbUJDLEVBclVuQixFQXFVdUJDLEVBclV2QixFQXFVMkI7QUFDbkIsVUFBSTlFLEtBQUssR0FBRyxLQUFLYixJQUFMLENBQVV3RixFQUFWLEVBQWNDLEVBQWQsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixDQUFaOztBQUNBLFVBQUk5RSxLQUFKLEVBQVc7QUFDUCxhQUFLbEIsTUFBTCxDQUFZcE0sS0FBWjtBQUNBLGVBQU9zTixLQUFQO0FBQ0g7O0FBQ0QsYUFBTyxLQUFQO0FBQ0g7QUE1VUw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVPLElBQU13RSxtQkFBYjtBQUFBOztBQUNJLGlDQUFjO0FBQUE7O0FBQUEsNEZBQ0p2TSx3Q0FBRyxDQUFDcUIsZUFEQTtBQUViOztBQUhMO0FBQUEsRUFBeUMwTCxpREFBekMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVPLElBQU1uQyx3QkFBYjtBQUFBOztBQUNJLG9DQUFZMUksSUFBWixFQUFrQk4sS0FBbEIsRUFBeUJtRCxRQUF6QixFQUFtQztBQUFBOztBQUFBOztBQUMvQixrR0FBTS9FLHdDQUFHLENBQUNHLG9CQUFWO0FBQ0EsVUFBSytCLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtOLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUttRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUorQjtBQUtsQzs7QUFOTDtBQUFBLEVBQThDZ0ksaURBQTlDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSE8sSUFBTUEsT0FBYjtBQUNJLG1CQUFZaE4sSUFBWixFQUFrQjtBQUFBOztBQUNkLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUszQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0g7O0FBSkw7QUFBQTtBQUFBLGdDQU1nQkUsS0FOaEIsRUFNdUI7QUFDZixXQUFLRixVQUFMLENBQWdCNUosSUFBaEIsQ0FBcUI4SixLQUFyQjtBQUNIO0FBUkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQUkwQyxHQUFHLEdBQUcsRUFBVjtBQUVQQSxHQUFHLENBQUNnTixPQUFKLEdBQWMsU0FBZDtBQUNBaE4sR0FBRyxDQUFDQyxtQkFBSixHQUEwQixxQkFBMUI7QUFDQUQsR0FBRyxDQUFDRyxvQkFBSixHQUEyQixzQkFBM0I7QUFDQUgsR0FBRyxDQUFDSyxxQkFBSixHQUE0Qix1QkFBNUI7QUFDQUwsR0FBRyxDQUFDTyxpQkFBSixHQUF3QixtQkFBeEI7QUFDQVAsR0FBRyxDQUFDUyxnQkFBSixHQUF1QixrQkFBdkI7QUFDQVQsR0FBRyxDQUFDVyxlQUFKLEdBQXNCLGlCQUF0QjtBQUNBWCxHQUFHLENBQUNhLGNBQUosR0FBcUIsZ0JBQXJCO0FBQ0FiLEdBQUcsQ0FBQ2UsZ0JBQUosR0FBdUIsa0JBQXZCO0FBQ0FmLEdBQUcsQ0FBQ2lCLFVBQUosR0FBaUIsWUFBakI7QUFDQWpCLEdBQUcsQ0FBQ21CLE9BQUosR0FBYyxTQUFkO0FBQ0FuQixHQUFHLENBQUNxQixlQUFKLEdBQXNCLGlCQUF0QjtBQUNBckIsR0FBRyxDQUFDdUIsUUFBSixHQUFlLFVBQWY7QUFDQXZCLEdBQUcsQ0FBQ3lCLGdCQUFKLEdBQXVCLGtCQUF2QjtBQUVPLElBQU00RCxrQkFBYixHQUNJLDhCQUFjO0FBQUE7O0FBQ1YsT0FBSzFCLEtBQUwsR0FBYSxJQUFiO0FBQ0gsQ0FITCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUVPLElBQU15SCxvQkFBYjtBQUFBOztBQUNJLGdDQUFZckcsUUFBWixFQUFzQjdDLElBQXRCLEVBQTRCTixLQUE1QixFQUFtQztBQUFBOztBQUFBOztBQUMvQiw4RkFBTTVCLHdDQUFHLENBQUNTLGdCQUFWO0FBQ0EsVUFBS3NFLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBSzdDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtOLEtBQUwsR0FBYUEsS0FBYjtBQUorQjtBQUtsQzs7QUFOTDtBQUFBLEVBQTBDbUwsaURBQTFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFFTyxJQUFNaEIsa0JBQWI7QUFBQTs7QUFDSSw4QkFBWTlNLE1BQVosRUFBb0JvRCxJQUFwQixFQUEwQjtBQUFBOztBQUFBOztBQUN0Qiw0RkFBTXJDLHdDQUFHLENBQUNhLGNBQVY7QUFDQSxVQUFLNUIsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS29ELElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUsxTixNQUFMLEdBQWMsS0FBZDtBQUpzQjtBQUt6Qjs7QUFOTDtBQUFBLEVBQXdDb1ksaURBQXhDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFFTyxJQUFNaEMseUJBQWI7QUFBQTs7QUFDSSxxQ0FBWWpKLElBQVosRUFBa0JDLFNBQWxCLEVBQTZCQyxVQUE3QixFQUF5QztBQUFBOztBQUFBOztBQUNyQyxtR0FBTWhDLHdDQUFHLENBQUNLLHFCQUFWO0FBQ0EsVUFBS3lCLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFKcUM7QUFLeEM7O0FBTkw7QUFBQSxFQUErQytLLGlEQUEvQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBRU8sSUFBTXhDLHVCQUFiO0FBQUE7O0FBQ0kscUNBQWM7QUFBQTs7QUFBQSxnR0FDSnZLLHdDQUFHLENBQUNDLG1CQURBO0FBRWI7O0FBSEw7QUFBQSxFQUE2QzhNLGlEQUE3QyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBRU8sSUFBTVYsY0FBYjtBQUFBOztBQUNJLDBCQUFZdmEsSUFBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLHdGQUFNa08sd0NBQUcsQ0FBQ2lCLFVBQVY7QUFDQSxVQUFLblAsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS3VSLFNBQUwsR0FBaUIsS0FBakI7QUFIYztBQUlqQjs7QUFMTDtBQUFBLEVBQW9DMEosaURBQXBDLEU7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFFTyxJQUFNbkIsV0FBYjtBQUFBOztBQUNJLHVCQUFZNVcsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLHFGQUFNZ0wsd0NBQUcsQ0FBQ21CLE9BQVY7QUFDQSxVQUFLbk0sS0FBTCxHQUFhQSxLQUFiO0FBRmU7QUFHbEI7O0FBSkw7QUFBQSxFQUFpQytYLGlEQUFqQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBRU8sSUFBTTlCLHFCQUFiO0FBQUE7O0FBQ0ksaUNBQVlsRyxRQUFaLEVBQXNCN0MsSUFBdEIsRUFBNEJOLEtBQTVCLEVBQW1DO0FBQUE7O0FBQUE7O0FBQy9CLCtGQUFNNUIsd0NBQUcsQ0FBQ08saUJBQVY7QUFDQSxVQUFLd0UsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxVQUFLN0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS04sS0FBTCxHQUFhQSxLQUFiO0FBSitCO0FBS2xDOztBQU5MO0FBQUEsRUFBMkNtTCxpREFBM0MsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVPLElBQU1kLG9CQUFiO0FBQUE7O0FBQ0ksZ0NBQVl6SixNQUFaLEVBQW9CRSxRQUFwQixFQUE4QkQsUUFBOUIsRUFBd0M7QUFBQTs7QUFBQTs7QUFDcEMsOEZBQU16Qyx3Q0FBRyxDQUFDZSxnQkFBVjtBQUNBLFVBQUt5QixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLRSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBS1ksU0FBTCxHQUFpQixLQUFqQjtBQUxvQztBQU12Qzs7QUFQTDtBQUFBLEVBQTBDMEosaURBQTFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFFTyxJQUFNTixvQkFBYjtBQUFBOztBQUNJLGdDQUFZeEosVUFBWixFQUF3QjtBQUFBOztBQUFBOztBQUNwQiw4RkFBTWpELHdDQUFHLENBQUN5QixnQkFBVjtBQUNBLFVBQUt3QixVQUFMLEdBQWtCQSxVQUFsQjtBQUZvQjtBQUd2Qjs7QUFKTDtBQUFBLEVBQTBDOEosaURBQTFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFFTyxJQUFNM0MsV0FBYjtBQUFBOztBQUNJLHlCQUFjO0FBQUE7O0FBQUEsb0ZBQ0pwSyx3Q0FBRyxDQUFDZ04sT0FEQTtBQUViOztBQUhMO0FBQUEsRUFBaUNELGlEQUFqQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBRU8sSUFBTVAsWUFBYjtBQUFBOztBQUNJLDBCQUFjO0FBQUE7O0FBQUE7O0FBQ1Ysc0ZBQU14TSx3Q0FBRyxDQUFDdUIsUUFBVjtBQUNBLFVBQUswTCxJQUFMLEdBQVksTUFBWjtBQUNBLFVBQUtyYixHQUFMLEdBQVcsSUFBWDtBQUNBLFVBQUtvRCxLQUFMLEdBQWEsSUFBYjtBQUNBLFVBQUt5TixRQUFMLEdBQWdCLEtBQWhCO0FBTFU7QUFNYjs7QUFQTDtBQUFBLEVBQWtDc0ssaURBQWxDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFFTyxJQUFNeEIsbUJBQWI7QUFBQTs7QUFDSSwrQkFBWXhHLFFBQVosRUFBc0J0TSxHQUF0QixFQUEyQjtBQUFBOztBQUFBOztBQUN2Qiw2RkFBTXVILHdDQUFHLENBQUNXLGVBQVY7QUFDQSxVQUFLdU0sTUFBTCxHQUFjLElBQWQ7QUFDQSxVQUFLbkksUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxVQUFLdE0sR0FBTCxHQUFXQSxHQUFYO0FBSnVCO0FBSzFCOztBQU5MO0FBQUEsRUFBeUNzVSxpREFBekMsRTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFPLElBQUlwRyxZQUFZLEdBQUc7QUFDdEIyQixzQkFBb0IsRUFBRSxLQURBO0FBRXRCbEIsbUJBQWlCLEVBQUUsS0FGRztBQUd0QnNFLFVBQVEsRUFBRTtBQUNOLGFBQU8sS0FERDtBQUVOLFlBQU0sSUFGQTtBQUdOLFlBQU0sSUFIQTtBQUlOeUIsYUFBUyxFQUFFQTtBQUpMO0FBSFksQ0FBbkIsQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUTyxJQUFNQyxPQUFiO0FBQ0ksbUJBQVl0WixPQUFaLEVBQXFCdVosT0FBckIsRUFBOEI7QUFBQTs7QUFDMUIsU0FBS3ZaLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUt1WixPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUxMO0FBQUE7QUFBQSw0QkFPWTFaLEtBUFosRUFPbUI7QUFBQTs7QUFDWCxVQUFHLEtBQUswWixPQUFMLElBQWdCLElBQW5CLEVBQXdCO0FBQ3BCO0FBQ0g7O0FBRUQsV0FBS0EsT0FBTCxHQUFlQyxVQUFVLENBQUMsWUFBTTtBQUM1QixhQUFJLENBQUNELE9BQUwsR0FBZSxJQUFmOztBQUNBLGFBQUksQ0FBQ3haLE9BQUwsQ0FBYUMsSUFBYixDQUFrQkgsS0FBbEI7QUFDSCxPQUh3QixFQUd0QixLQUFLeVosT0FIaUIsQ0FBekI7QUFJSDtBQWhCTDtBQUFBO0FBQUEsOEJBa0JjO0FBQ04sVUFBSSxLQUFLQyxPQUFMLElBQWdCLElBQXBCLEVBQTBCO0FBQ3RCRSxvQkFBWSxDQUFDLEtBQUtGLE9BQU4sQ0FBWjtBQUNIO0FBQ0o7QUF0Qkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUcsUTtBQUNGLG9CQUFZdk8sR0FBWixFQUFpQnBMLE9BQWpCLEVBQTBCa0IsS0FBMUIsRUFBaUM7QUFBQTs7QUFDN0IsU0FBS2tLLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtwTCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLa0IsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS2lDLFFBQUwsR0FBZ0JqQyxLQUFoQjtBQUNBLFNBQUswWSxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUIsS0FBekI7QUFDSDs7OztnQ0FFVzNZLEssRUFBTztBQUNmLFdBQUtpQyxRQUFMLEdBQWdCakMsS0FBaEI7QUFDQSxXQUFLMFksWUFBTCxHQUFvQixJQUFwQjtBQUNIOzs7eUNBRW9CMVksSyxFQUFPO0FBQ3hCLFdBQUsyWSxpQkFBTCxHQUF5QjNZLEtBQXpCO0FBQ0g7OztnQ0FFVztBQUNSLGFBQU8sS0FBSzBZLFlBQUwsSUFBcUIsS0FBS0MsaUJBQWpDO0FBQ0g7OzsyQkFFTS9aLEssRUFBTztBQUNWLFVBQUlnYSxRQUFRLEdBQUcsS0FBSzVZLEtBQXBCO0FBQUEsVUFDSWlDLFFBQVEsR0FBRyxLQUFLQSxRQURwQjtBQUFBLFVBRUkwVyxpQkFBaUIsR0FBRyxLQUFLQSxpQkFGN0I7QUFJQSxXQUFLM1ksS0FBTCxHQUFhLEtBQUtpQyxRQUFsQjtBQUNBLFdBQUswVyxpQkFBTCxHQUF5QixLQUF6QjtBQUVBLFdBQUs3WixPQUFMLENBQWFDLElBQWIsQ0FBa0JILEtBQWxCLEVBQXlCO0FBQ3JCZ2EsZ0JBQVEsRUFBRUEsUUFEVztBQUVyQjNXLGdCQUFRLEVBQUVBLFFBRlc7QUFHckIwVyx5QkFBaUIsRUFBRUE7QUFIRSxPQUF6QjtBQUtIOzs7Ozs7QUFHRSxJQUFNRSxRQUFiO0FBQ0ksb0JBQVlqYSxLQUFaLEVBQW1CO0FBQUE7O0FBQ2YsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS2thLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLElBQUlDLGdEQUFKLEVBQWY7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLElBQUk5Tyw2Q0FBSixDQUFheEwsS0FBSyxDQUFDNFAsT0FBbkIsQ0FBaEI7QUFDQSxTQUFLMkssT0FBTCxHQUFlLElBQUlmLGdEQUFKLENBQVksS0FBS2dCLE1BQWpCLEVBQXlCLEVBQXpCLENBQWY7QUFDSDs7QUFSTDtBQUFBO0FBQUEsbUNBVW1CbFAsR0FWbkIsRUFVd0JwTCxPQVZ4QixFQVVpQ2tCLEtBVmpDLEVBVXdDO0FBQ2hDLFVBQUl3QyxRQUFRLEdBQUcsSUFBSWlXLFFBQUosQ0FBYXZPLEdBQWIsRUFBa0JwTCxPQUFsQixFQUEyQmtCLEtBQTNCLENBQWY7QUFDQSxXQUFLK1ksU0FBTCxDQUFldmEsSUFBZixDQUFvQmdFLFFBQXBCO0FBQ0EsYUFBT0EsUUFBUDtBQUNIO0FBZEw7QUFBQTtBQUFBLG1DQWdCbUJBLFFBaEJuQixFQWdCNkI7QUFDckIsVUFBSWxFLEtBQUssR0FBRyxLQUFLeWEsU0FBTCxDQUFleGEsT0FBZixDQUF1QmlFLFFBQXZCLENBQVo7O0FBQ0EsVUFBR2xFLEtBQUssS0FBSyxDQUFDLENBQWQsRUFBaUI7QUFDYixhQUFLeWEsU0FBTCxDQUFlcGEsTUFBZixDQUFzQkwsS0FBdEIsRUFBNkIsQ0FBN0I7QUFDSDtBQUNKO0FBckJMO0FBQUE7QUFBQSw2QkF1QmE7QUFBQTs7QUFDTCxXQUFLeWEsU0FBTCxDQUFlbGEsT0FBZixDQUF1QixVQUFBMkQsUUFBUSxFQUFJO0FBQy9CLFlBQUdBLFFBQVEsQ0FBQzZXLFNBQVQsRUFBSCxFQUF5QjtBQUNyQjdXLGtCQUFRLENBQUM0VyxNQUFULENBQWdCLEtBQUksQ0FBQ3hhLEtBQXJCO0FBQ0g7QUFDSixPQUpEO0FBS0g7QUE3Qkw7QUFBQTtBQUFBLGlDQStCaUI0RCxRQS9CakIsRUErQjJCUCxRQS9CM0IsRUErQnFDO0FBQzdCLFVBQUlBLFFBQUosRUFBYztBQUNWTyxnQkFBUSxDQUFDOFcsV0FBVCxDQUFxQnJYLFFBQXJCO0FBQ0gsT0FGRCxNQUVPO0FBQ0hPLGdCQUFRLENBQUMrVyxvQkFBVCxDQUE4QixJQUE5QjtBQUNIOztBQUNELFdBQUtKLE9BQUwsQ0FBYUssT0FBYixDQUFxQixJQUFyQjtBQUNIO0FBdENMO0FBQUE7QUFBQSxnQ0F3Q2dCdFAsR0F4Q2hCLEVBd0NxQjtBQUNiLFVBQUl0RyxNQUFNLEdBQUcsS0FBS2tWLFNBQUwsQ0FBZTVPLEdBQWYsQ0FBYjs7QUFFQSxVQUFHLENBQUN0RyxNQUFKLEVBQVk7QUFDUkEsY0FBTSxHQUFHLEtBQUtzVixRQUFMLENBQWMvSyxPQUFkLENBQXNCakUsR0FBdEIsQ0FBVDtBQUNBLGFBQUs0TyxTQUFMLENBQWU1TyxHQUFmLElBQXNCdEcsTUFBdEI7QUFDSDs7QUFFRCxhQUFPYywyQ0FBQSxDQUFXLElBQVgsRUFBaUJkLE1BQWpCLENBQVA7QUFDSDtBQWpETDtBQUFBO0FBQUEsMEJBbURVc0csR0FuRFYsRUFtRGVwTCxPQW5EZixFQW1Ed0JnRyxNQW5EeEIsRUFtRGdDO0FBQ3hCLFVBQUk1QyxJQUFJLEdBQUcsSUFBWDtBQUNBLFVBQUlzSSxRQUFRLEdBQUcsS0FBS2lQLFdBQUwsQ0FBaUJ2UCxHQUFqQixDQUFmO0FBQ0EsVUFBSXdQLFNBQVMsR0FBSSxJQUFJbkwsOENBQUosQ0FBYyxLQUFLM1AsS0FBbkIsRUFBMEI7QUFBRXlQLGlCQUFTLEVBQUUsSUFBYjtBQUFtQnZKLGNBQU0sRUFBRUE7QUFBM0IsT0FBMUIsQ0FBakI7QUFDQSxVQUFJdEMsUUFBUSxHQUFHLEtBQUttWCxjQUFMLENBQW9CelAsR0FBcEIsRUFBeUJwTCxPQUF6QixFQUFrQzRhLFNBQVMsQ0FBQ0UsUUFBVixDQUFtQjFQLEdBQW5CLENBQWxDLENBQWY7O0FBRUEsZUFBUzJQLGdCQUFULENBQTBCZixTQUExQixFQUFxQztBQUNqQ3BVLHNEQUFBLENBQWNvVSxTQUFkLEVBQXlCLFVBQVVuVSxJQUFWLEVBQWdCO0FBQ3JDLGNBQUlELGlEQUFBLENBQWlCQyxJQUFJLENBQUNtVixPQUF0QixDQUFKLEVBQW9DO0FBQ2hDblYsZ0JBQUksQ0FBQ21WLE9BQUwsQ0FBYS9hLElBQWIsQ0FBa0IsSUFBbEI7QUFDQTRGLGdCQUFJLENBQUNtVixPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUNERCwwQkFBZ0IsQ0FBQ2xWLElBQUksQ0FBQ3dGLFFBQU4sQ0FBaEI7QUFDSCxTQU5EO0FBT0g7O0FBRUQsZUFBUzRQLGNBQVQsQ0FBd0JqQixTQUF4QixFQUFtQzFaLE1BQW5DLEVBQTJDO0FBQ3ZDLFlBQUksQ0FBQ3NGLCtDQUFBLENBQWV0RixNQUFmLENBQUwsRUFBNkI7QUFDekI7QUFDSDs7QUFFRHNGLHNEQUFBLENBQWNvVSxTQUFkLEVBQXlCLFVBQVVuVSxJQUFWLEVBQWdCL0gsR0FBaEIsRUFBcUI7QUFDMUMsY0FBSW9kLE1BQU0sR0FBRzVhLE1BQWI7O0FBRUEsY0FBSXVGLElBQUksQ0FBQ3VGLEdBQVQsRUFBYztBQUNWdE4sZUFBRyxHQUFHOGMsU0FBUyxDQUFDRSxRQUFWLENBQW1CaGQsR0FBbkIsQ0FBTjtBQUNIOztBQUVELGNBQUdvZCxNQUFNLEtBQUs5WCxJQUFJLENBQUN0RCxLQUFoQixJQUF5QmtHLE1BQXpCLElBQW1DQSxNQUFNLENBQUNsSSxHQUFELENBQTVDLEVBQW1EO0FBQy9Db2Qsa0JBQU0sR0FBR2xWLE1BQVQ7QUFDSDs7QUFFREgsY0FBSSxDQUFDbVYsT0FBTCxHQUFlNVgsSUFBSSxDQUFDOFcsT0FBTCxDQUFhaUIsS0FBYixDQUFtQkQsTUFBbkIsRUFBMkJwZCxHQUEzQixFQUFnQyxVQUFVeVEsSUFBVixFQUFnQjtBQUMzRHdNLDRCQUFnQixDQUFDbFYsSUFBSSxDQUFDd0YsUUFBTixDQUFoQjtBQUNBNFAsMEJBQWMsQ0FBQ3BWLElBQUksQ0FBQ3dGLFFBQU4sRUFBZ0JrRCxJQUFJLENBQUNsUCxJQUFMLENBQVU4RCxRQUExQixDQUFkO0FBQ0FDLGdCQUFJLENBQUNnWSxZQUFMLENBQWtCMVgsUUFBbEIsRUFBNEJrWCxTQUFTLENBQUNFLFFBQVYsQ0FBbUIxUCxHQUFuQixDQUE1QjtBQUNILFdBSmMsQ0FBZjtBQU1BNlAsd0JBQWMsQ0FBQ3BWLElBQUksQ0FBQ3dGLFFBQU4sRUFBZ0I2UCxNQUFNLENBQUNwZCxHQUFELENBQXRCLENBQWQ7QUFDSCxTQWxCRDtBQW1CSDs7QUFFRG1kLG9CQUFjLENBQUN2UCxRQUFELEVBQVcsS0FBSzVMLEtBQWhCLENBQWQ7QUFFQSxhQUFPLFlBQVk7QUFDZmliLHdCQUFnQixDQUFDclAsUUFBRCxDQUFoQjtBQUNBdEksWUFBSSxDQUFDaVksY0FBTCxDQUFvQjNYLFFBQXBCO0FBQ0gsT0FIRDtBQUlIO0FBbkdMO0FBQUE7QUFBQSxvQ0FxR29CMEgsR0FyR3BCLEVBcUd5QnBMLE9Bckd6QixFQXFHa0NnRyxNQXJHbEMsRUFxRzBDO0FBQUE7QUFBQTs7QUFDbEMsVUFBSTVDLElBQUksR0FBRyxJQUFYO0FBQUEsVUFDSXdYLFNBQVMsR0FBRyxJQUFJbkwsOENBQUosQ0FBYyxLQUFLM1AsS0FBbkIsRUFBMEI7QUFBRXlQLGlCQUFTLEVBQUUsSUFBYjtBQUFtQnZKLGNBQU0sRUFBRUE7QUFBM0IsT0FBMUIsQ0FEaEI7QUFFQSxVQUFJc1YsWUFBWSxHQUFHQyxVQUFVLEVBQTdCO0FBQ0EsVUFBSUMsVUFBVSxHQUFHLEtBQUtMLEtBQUwsQ0FBVy9QLEdBQVgsRUFBZ0IsWUFBTTtBQUNuQyxZQUFJa1EsWUFBWSxJQUFJLElBQXBCLEVBQTBCO0FBQ3RCQSxzQkFBWSxDQUFDcmIsSUFBYixDQUFrQixNQUFsQjtBQUNIOztBQUNEcWIsb0JBQVksR0FBR0MsVUFBVSxFQUF6QjtBQUNBdmIsZUFBTyxDQUFDc1IsS0FBUixDQUFjLE1BQWQsRUFBb0JtSyxVQUFwQjtBQUNILE9BTmdCLEVBTWR6VixNQU5jLENBQWpCO0FBT0EsVUFBSXRDLFFBQVEsR0FBRyxLQUFLbVgsY0FBTCxDQUFvQnpQLEdBQXBCLEVBQXlCcEwsT0FBekIsRUFBa0M0YSxTQUFTLENBQUNFLFFBQVYsQ0FBbUIxUCxHQUFuQixDQUFsQyxDQUFmOztBQUVBLGVBQVNtUSxVQUFULEdBQXNCO0FBQ2xCLFlBQUlHLFVBQVUsR0FBR2QsU0FBUyxDQUFDRSxRQUFWLENBQW1CMVAsR0FBbkIsQ0FBakI7O0FBRUEsWUFBSXhGLCtDQUFBLENBQWU4VixVQUFmLEtBQThCOVYsOENBQUEsQ0FBYzhWLFVBQWQsQ0FBbEMsRUFBNkQ7QUFDekQsaUJBQU90WSxJQUFJLENBQUM4VyxPQUFMLENBQWFpQixLQUFiLENBQW1CTyxVQUFuQixFQUErQixHQUEvQixFQUFvQyxZQUFZO0FBQ25EdFksZ0JBQUksQ0FBQ2dZLFlBQUwsQ0FBa0IxWCxRQUFsQjtBQUNILFdBRk0sQ0FBUDtBQUdIO0FBQ0o7O0FBRUQsYUFBTyxZQUFZO0FBQ2Y4WCxrQkFBVSxDQUFDdmIsSUFBWCxDQUFnQixJQUFoQjtBQUNBcWIsb0JBQVksSUFBSUEsWUFBWSxDQUFDcmIsSUFBYixDQUFrQixJQUFsQixDQUFoQjtBQUNBbUQsWUFBSSxDQUFDaVksY0FBTCxDQUFvQjNYLFFBQXBCO0FBQ0gsT0FKRDtBQUtIO0FBaklMO0FBQUE7QUFBQSw4QkFtSWM7QUFDTixXQUFLMlcsT0FBTCxDQUFhN2IsT0FBYjtBQUNBLFdBQUswYixPQUFMLENBQWExYixPQUFiO0FBQ0EsV0FBS3NCLEtBQUwsR0FBYSxJQUFiO0FBQ0EsV0FBS21hLFNBQUwsQ0FBZXZULE1BQWYsR0FBd0IsQ0FBeEI7QUFDSDtBQXhJTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQzVDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBSWlWLGFBQWEsR0FBR0MsTUFBTSxDQUFDLFdBQUQsQ0FBMUI7QUFBQSxJQUNJQyxZQUFZLEdBQUdELE1BQU0sQ0FBQyxVQUFELENBRHpCO0FBR0EsSUFBSTViLE9BQU8sR0FBRztBQUNWeUcsS0FBRyxFQUFFcVYsUUFESztBQUVWbFYsS0FBRyxFQUFFbVY7QUFGSyxDQUFkLEMsQ0FLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUNwQixTQUFPclcsK0NBQUEsQ0FBZXFXLEtBQWYsS0FBeUJBLEtBQUssQ0FBQ04sYUFBRCxDQUFyQztBQUNIOztBQUVELFNBQVNPLFNBQVQsQ0FBbUJELEtBQW5CLEVBQTBCO0FBQ3RCLFNBQU9ELE9BQU8sQ0FBQ0MsS0FBRCxDQUFQLEdBQWlCQSxLQUFLLENBQUNKLFlBQUQsQ0FBdEIsR0FBdUNJLEtBQTlDO0FBQ0g7O0FBRUQsU0FBU0UsU0FBVCxDQUFtQmpiLEtBQW5CLEVBQTBCO0FBQ3RCLE1BQUkwRSwrQ0FBQSxDQUFlMUUsS0FBZixLQUF5QixDQUFDOGEsT0FBTyxDQUFDOWEsS0FBRCxDQUFyQyxFQUE4QztBQUMxQzBFLGtEQUFBLENBQWMxRSxLQUFkLEVBQXFCLFVBQVUyRSxJQUFWLEVBQWdCL0gsR0FBaEIsRUFBcUI7QUFDdENvRCxXQUFLLENBQUNwRCxHQUFELENBQUwsR0FBYXFlLFNBQVMsQ0FBQ3RXLElBQUQsQ0FBdEI7QUFDSCxLQUZEO0FBR0EsV0FBTyxJQUFJdVcsS0FBSixDQUFVbGIsS0FBVixFQUFpQmxCLE9BQWpCLENBQVA7QUFDSDs7QUFFRCxTQUFPa0IsS0FBUDtBQUNIOztBQUVELFNBQVM0YSxRQUFULENBQWtCeGIsTUFBbEIsRUFBMEJ4QyxHQUExQixFQUErQjtBQUMzQixNQUFJQSxHQUFHLEtBQUs2ZCxhQUFaLEVBQTJCO0FBQ3ZCLFdBQU8sSUFBUDtBQUNIOztBQUVELE1BQUk3ZCxHQUFHLEtBQUsrZCxZQUFaLEVBQTBCO0FBQ3RCLFdBQU92YixNQUFQO0FBQ0g7O0FBRUQsU0FBT0EsTUFBTSxDQUFDeEMsR0FBRCxDQUFiO0FBQ0g7O0FBRUQsU0FBU2llLFFBQVQsQ0FBa0J6YixNQUFsQixFQUEwQnhDLEdBQTFCLEVBQStCb0QsS0FBL0IsRUFBc0M7QUFDbEMsTUFBSTRZLFFBQVEsR0FBR29DLFNBQVMsQ0FBQzViLE1BQU0sQ0FBQ3hDLEdBQUQsQ0FBUCxDQUF4QjtBQUFBLE1BQ0lxRixRQUFRLEdBQUcrWSxTQUFTLENBQUNoYixLQUFELENBRHhCOztBQUdBLE1BQUk0WSxRQUFRLEtBQUszVyxRQUFqQixFQUEyQjtBQUN2QjdDLFVBQU0sQ0FBQ3hDLEdBQUQsQ0FBTixHQUFjcWUsU0FBUyxDQUFDamIsS0FBRCxDQUF2QjtBQUNBckMsZ0RBQU0sQ0FBQ0MsZUFBUCxDQUF1Qm1LLElBQXZCLENBQTRCO0FBQ3hCM0ksWUFBTSxFQUFFQSxNQURnQjtBQUV4QnhDLFNBQUcsRUFBRUEsR0FGbUI7QUFHeEJ1QixVQUFJLEVBQUU7QUFDRnlhLGdCQUFRLEVBQUVBLFFBRFI7QUFFRjNXLGdCQUFRLEVBQUVBO0FBRlI7QUFIa0IsS0FBNUI7QUFRSCxHQVZELE1BV0ssSUFBSTdDLE1BQU0sQ0FBQ3hDLEdBQUQsQ0FBTixLQUFnQm9ELEtBQXBCLEVBQTJCO0FBQzVCWixVQUFNLENBQUN4QyxHQUFELENBQU4sR0FBY29ELEtBQWQ7QUFDSDs7QUFFRCxTQUFPLElBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVEO0FBQ0E7O0lBRU1tYixjO0FBQ0YsMEJBQVkvYixNQUFaLEVBQW9CO0FBQUE7O0FBQ2hCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtnYyxJQUFMLEdBQVksRUFBWjtBQUNIOzs7O2dDQUVXeGUsRyxFQUFLO0FBQ2IsVUFBSSxDQUFDLEtBQUt3ZSxJQUFMLENBQVV4ZSxHQUFWLENBQUwsRUFBcUI7QUFDakIsYUFBS3dlLElBQUwsQ0FBVXhlLEdBQVYsSUFBaUIsRUFBakI7QUFDSDs7QUFFRCxhQUFPLEtBQUt3ZSxJQUFMLENBQVV4ZSxHQUFWLENBQVA7QUFDSDs7O2dDQUVXQSxHLEVBQUtrQyxPLEVBQVM7QUFDdEIsVUFBSVYsUUFBUSxHQUFHLEtBQUtpZCxXQUFMLENBQWlCemUsR0FBakIsQ0FBZjtBQUNBd0IsY0FBUSxDQUFDSSxJQUFULENBQWNNLE9BQWQ7QUFDSDs7O2tDQUVhbEMsRyxFQUFLa0MsTyxFQUFTO0FBQ3hCLFVBQUlWLFFBQVEsR0FBRyxLQUFLaWQsV0FBTCxDQUFpQnplLEdBQWpCLENBQWY7O0FBRUEsVUFBSWtDLE9BQU8sSUFBSSxJQUFmLEVBQXFCO0FBQ2pCVixnQkFBUSxDQUFDb0gsTUFBVCxHQUFrQixDQUFsQjtBQUNILE9BRkQsTUFHSztBQUNELFlBQUlsSCxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQk8sT0FBakIsQ0FBWjs7QUFFQSxZQUFJUixLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2RGLGtCQUFRLENBQUNPLE1BQVQsQ0FBZ0JMLEtBQWhCLEVBQXVCLENBQXZCO0FBQ0g7QUFDSjtBQUNKOzs7NEJBRU8xQixHLEVBQUt5USxJLEVBQU1uTCxJLEVBQU07QUFDckIsVUFBSTlELFFBQVEsR0FBRyxLQUFLaWQsV0FBTCxDQUFpQnplLEdBQWpCLENBQWY7QUFDQXdCLGNBQVEsQ0FBQ1MsT0FBVCxDQUFpQixVQUFBQyxPQUFPLEVBQUk7QUFDeEJBLGVBQU8sQ0FBQ0MsSUFBUixDQUFhbUQsSUFBYixFQUFtQm1MLElBQW5CO0FBQ0gsT0FGRDtBQUdIOzs7Ozs7QUFHRSxJQUFNNEwsT0FBYjtBQUNJLHFCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsU0FBS0YsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUt1QyxrQkFBTCxHQUEwQjNkLDRDQUFNLENBQUNDLGVBQVAsQ0FBdUJ5SixFQUF2QixDQUEwQixVQUFBdEosQ0FBQztBQUFBLGFBQUksS0FBSSxDQUFDd2QscUJBQUwsQ0FBMkJ4ZCxDQUFDLENBQUNJLElBQTdCLENBQUo7QUFBQSxLQUEzQixDQUExQjtBQUNIOztBQUpMO0FBQUE7QUFBQSwwQ0FNMEJBLElBTjFCLEVBTWdDO0FBQ3hCLFVBQUlxRSxRQUFRLEdBQUcsS0FBS2daLFdBQUwsQ0FBaUIsS0FBS3pDLFNBQXRCLEVBQWlDNWEsSUFBSSxDQUFDaUIsTUFBdEMsQ0FBZjs7QUFFQSxVQUFJb0QsUUFBUSxJQUFJLElBQWhCLEVBQXNCO0FBQ2xCQSxnQkFBUSxDQUFDaVosT0FBVCxDQUFpQnRkLElBQUksQ0FBQ3ZCLEdBQXRCLEVBQTJCdUIsSUFBM0I7QUFDQXFFLGdCQUFRLENBQUNpWixPQUFULENBQWlCLEdBQWpCLEVBQXNCdGQsSUFBdEI7QUFDSDtBQUNKO0FBYkw7QUFBQTtBQUFBLGdDQWVnQjRhLFNBZmhCLEVBZTJCM1osTUFmM0IsRUFlbUM7QUFDM0IsVUFBSW9ELFFBQUo7QUFBQSxVQUFja1osT0FBTyxHQUFHM0MsU0FBUyxDQUFDcFosTUFBVixDQUFpQixVQUFBZ0YsSUFBSSxFQUFJO0FBQzdDLGVBQU9BLElBQUksQ0FBQ3ZGLE1BQUwsS0FBZ0JBLE1BQXZCO0FBQ0gsT0FGdUIsQ0FBeEI7O0FBSUEsVUFBSXNjLE9BQU8sQ0FBQ2xXLE1BQVIsR0FBaUIsQ0FBckIsRUFBd0I7QUFDcEJoRCxnQkFBUSxHQUFHa1osT0FBTyxDQUFDLENBQUQsQ0FBbEI7QUFDSDs7QUFFRCxhQUFPbFosUUFBUDtBQUNIO0FBekJMO0FBQUE7QUFBQSxtQ0EyQm1CdVcsU0EzQm5CLEVBMkI4QjNaLE1BM0I5QixFQTJCc0M7QUFDOUIsVUFBSW9ELFFBQVEsR0FBRyxJQUFJMlksY0FBSixDQUFtQi9iLE1BQW5CLENBQWY7QUFDQTJaLGVBQVMsQ0FBQ3ZhLElBQVYsQ0FBZWdFLFFBQWY7QUFDQSxhQUFPQSxRQUFQO0FBQ0g7QUEvQkw7QUFBQTtBQUFBLHdDQWlDd0J1VyxTQWpDeEIsRUFpQ21DM1osTUFqQ25DLEVBaUMyQztBQUNuQyxVQUFJb0QsUUFBUSxHQUFHLEtBQUtnWixXQUFMLENBQWlCekMsU0FBakIsRUFBNEIzWixNQUE1QixDQUFmOztBQUVBLFVBQUlvRCxRQUFRLElBQUksSUFBaEIsRUFBc0I7QUFDbEJBLGdCQUFRLEdBQUcsS0FBS21YLGNBQUwsQ0FBb0JaLFNBQXBCLEVBQStCM1osTUFBL0IsQ0FBWDtBQUNIOztBQUVELGFBQU9vRCxRQUFQO0FBQ0g7QUF6Q0w7QUFBQTtBQUFBLDBCQTJDVXBELE1BM0NWLEVBMkNrQnhDLEdBM0NsQixFQTJDdUIrZSxNQTNDdkIsRUEyQytCO0FBQ3ZCLFVBQUluWixRQUFRLEdBQUcsS0FBS29aLG1CQUFMLENBQXlCLEtBQUs3QyxTQUE5QixFQUF5Q2lDLHdEQUFTLENBQUM1YixNQUFELENBQWxELENBQWY7QUFFQW9ELGNBQVEsQ0FBQ3FaLFdBQVQsQ0FBcUJqZixHQUFyQixFQUEwQitlLE1BQTFCO0FBRUEsYUFBTyxZQUFZO0FBQ2ZuWixnQkFBUSxDQUFDc1osYUFBVCxDQUF1QmxmLEdBQXZCLEVBQTRCK2UsTUFBNUI7QUFDSCxPQUZEO0FBR0g7QUFuREw7QUFBQTtBQUFBLDhCQXFEYztBQUNOLFdBQUs1QyxTQUFMLENBQWV2VCxNQUFmLEdBQXdCLENBQXhCO0FBQ0EsV0FBSzhWLGtCQUFMO0FBQ0g7QUF4REw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFFTyxJQUFNUyxPQUFiO0FBQ0ksbUJBQVluZCxLQUFaLEVBQW1CZ1QsSUFBbkIsRUFBeUI5TSxNQUF6QixFQUFpQztBQUFBOztBQUM3QixTQUFLbEcsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS2dULElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUs5TSxNQUFMLEdBQWNBLE1BQWQsQ0FINkIsQ0FJN0I7O0FBQ0EsU0FBS2tYLEtBQUwsR0FBYSxLQUFiLENBTDZCLENBTTdCOztBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFmLENBUDZCLENBUTdCOztBQUNBLFNBQUt0UCxVQUFMLEdBQWtCLEtBQWxCLENBVDZCLENBVTdCOztBQUNBLFNBQUt1UCxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsU0FBS2xjLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBSzRZLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLbFIsT0FBTCxHQUFlLEtBQWY7QUFDQSxTQUFLeVUsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDSDs7QUFsQkw7QUFBQTtBQUFBLHFDQW9CcUJ4SyxJQXBCckIsRUFvQjJCO0FBQ25CLFVBQUkxSCxHQUFHLEdBQUcsSUFBSW1TLHNEQUFKLENBQWV6SyxJQUFmLENBQVY7QUFDQSxXQUFLd0ssV0FBTCxDQUFpQjVkLElBQWpCLENBQXNCMEwsR0FBdEI7QUFDQSxhQUFPQSxHQUFQO0FBQ0g7QUF4Qkw7QUFBQTtBQUFBLDhCQTBCYztBQUNOLFVBQUksS0FBSytSLE9BQUwsSUFBZ0IsS0FBS3RQLFVBQXpCLEVBQXFDO0FBQ2pDLGFBQUtxUCxLQUFMLEdBQWEsSUFBYjtBQUNIOztBQUVELFVBQUksS0FBS0EsS0FBVCxFQUFnQjtBQUNaLGFBQUtNLGdCQUFMLENBQXNCLEtBQUsxSyxJQUEzQjtBQUNILE9BRkQsTUFHSztBQUNELFlBQUlqTyxPQUFPLEdBQUcsY0FBZDtBQUNBLFlBQUk0WSxTQUFTLEdBQUc1WSxPQUFPLENBQUM0WSxTQUF4QjtBQUNBLFlBQUlDLE9BQUo7QUFBQSxZQUFhN0gsS0FBSyxHQUFHaFIsT0FBTyxDQUFDRSxJQUFSLENBQWEsS0FBSytOLElBQWxCLENBQXJCOztBQUVBLGVBQU8rQyxLQUFLLElBQUksSUFBaEIsRUFBc0I7QUFDbEIsY0FBSUEsS0FBSyxDQUFDclcsS0FBTixHQUFjaWUsU0FBbEIsRUFBNkI7QUFDekJDLG1CQUFPLEdBQUcsS0FBSzVLLElBQUwsQ0FBVW9DLFNBQVYsQ0FBb0J1SSxTQUFwQixFQUErQjVILEtBQUssQ0FBQ3JXLEtBQXJDLENBQVY7QUFDQSxpQkFBSzZkLFFBQUwsQ0FBYzNkLElBQWQsQ0FBbUJnZSxPQUFuQjtBQUNIOztBQUVELGVBQUtMLFFBQUwsQ0FBYzNkLElBQWQsQ0FBbUIsS0FBSzhkLGdCQUFMLENBQXNCM0gsS0FBSyxDQUFDLENBQUQsQ0FBM0IsQ0FBbkI7QUFFQTRILG1CQUFTLEdBQUc1WSxPQUFPLENBQUM0WSxTQUFwQjtBQUNBNUgsZUFBSyxHQUFHaFIsT0FBTyxDQUFDRSxJQUFSLENBQWEsS0FBSytOLElBQWxCLENBQVI7QUFDSDs7QUFFRCxZQUFJLEtBQUtBLElBQUwsQ0FBVXBNLE1BQVYsR0FBbUIrVyxTQUF2QixFQUFrQztBQUM5QkMsaUJBQU8sR0FBRyxLQUFLNUssSUFBTCxDQUFVb0MsU0FBVixDQUFvQnVJLFNBQXBCLENBQVY7QUFDQSxlQUFLSixRQUFMLENBQWMzZCxJQUFkLENBQW1CZ2UsT0FBbkI7QUFDSDtBQUNKO0FBQ0o7QUF4REw7QUFBQTtBQUFBLDJCQTBEVztBQUFBOztBQUNILFVBQUksS0FBSzdQLFVBQUwsSUFBbUIsS0FBS3NQLE9BQTVCLEVBQXFDO0FBQ2pDO0FBQ0g7O0FBRUQsV0FBS1EsTUFBTDtBQUVBLFdBQUtMLFdBQUwsQ0FBaUJ2ZCxPQUFqQixDQUF5QixVQUFBcUwsR0FBRyxFQUFJO0FBQzVCQSxXQUFHLENBQUMrUCxLQUFKLENBQVUsS0FBSSxDQUFDcmIsS0FBZixFQUFzQixZQUFNO0FBQ3hCLGVBQUksQ0FBQzZkLE1BQUw7O0FBQ0EsZUFBSSxDQUFDQyxLQUFMO0FBQ0gsU0FIRCxFQUdHLEtBQUksQ0FBQzVYLE1BSFI7QUFJSCxPQUxEO0FBTUg7QUF2RUw7QUFBQTtBQUFBLDZCQXlFYTtBQUNMLFVBQUk3QyxRQUFRLEdBQUcsS0FBSzBhLE9BQUwsRUFBZjs7QUFFQSxVQUFJLEtBQUszYyxLQUFMLElBQWNpQyxRQUFsQixFQUE0QjtBQUN4QixhQUFLeUYsT0FBTCxHQUFlLElBQWY7QUFDQSxhQUFLa1IsUUFBTCxHQUFnQixLQUFLNVksS0FBckI7QUFDQSxhQUFLQSxLQUFMLEdBQWFpQyxRQUFiO0FBQ0g7QUFDSixLQWpGTCxDQW1GSTs7QUFuRko7QUFBQTtBQUFBLDRCQW9GWTZDLE1BcEZaLEVBb0ZvQjtBQUFBOztBQUNaQSxZQUFNLEdBQUdKLDRDQUFBLENBQVksS0FBS0ksTUFBakIsRUFBeUJBLE1BQXpCLENBQVQ7O0FBRUEsVUFBSSxLQUFLa1gsS0FBVCxFQUFnQjtBQUNaLGVBQU8sS0FBS0ksV0FBTCxDQUFpQixDQUFqQixFQUFvQk8sT0FBcEIsQ0FBNEIsS0FBSy9kLEtBQWpDLEVBQXdDa0csTUFBeEMsQ0FBUDtBQUNIOztBQUVELGFBQU8sS0FBS3FYLFFBQUwsQ0FBY1MsTUFBZCxDQUFxQixVQUFDQyxJQUFELEVBQU90VCxHQUFQLEVBQWU7QUFDdkMsWUFBSTdFLCtDQUFBLENBQWU2RSxHQUFmLENBQUosRUFBeUI7QUFDckIsaUJBQU9zVCxJQUFJLEdBQUd0VCxHQUFkO0FBQ0gsU0FIc0MsQ0FJdkM7OztBQUNBLGVBQU9zVCxJQUFJLElBQUl0VCxHQUFHLENBQUNvVCxPQUFKLENBQVksTUFBSSxDQUFDL2QsS0FBakIsRUFBd0JrRyxNQUF4QixLQUFtQyxFQUF2QyxDQUFYO0FBQ0gsT0FOTSxFQU1KLEVBTkksQ0FBUDtBQU9ILEtBbEdMLENBb0dJOztBQXBHSjtBQUFBO0FBQUEsMkJBcUdXOUUsS0FyR1gsRUFxR2tCOEUsTUFyR2xCLEVBcUcwQjtBQUNsQkEsWUFBTSxHQUFHSiw0Q0FBQSxDQUFZLEtBQUtJLE1BQWpCLEVBQXlCQSxNQUF6QixDQUFUOztBQUVBLFVBQUksS0FBS2tYLEtBQVQsRUFBZ0I7QUFDWixhQUFLSSxXQUFMLENBQWlCLENBQWpCLEVBQW9CelosTUFBcEIsQ0FBMkIsS0FBSy9ELEtBQWhDLEVBQXVDb0IsS0FBdkMsRUFBOEM4RSxNQUE5QztBQUNILE9BRkQsTUFFTztBQUNILGNBQU0sSUFBSXJHLEtBQUosQ0FBVSxLQUFLbVQsSUFBTCxHQUFZLDBCQUF0QixDQUFOO0FBQ0g7QUFDSjtBQTdHTDtBQUFBO0FBQUEsdUNBK0d1QnNLLFVBL0d2QixFQStHbUM7QUFDM0IsV0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDSDtBQWpITDtBQUFBO0FBQUEseUNBbUh5QkEsVUFuSHpCLEVBbUhxQztBQUM3QixVQUFJLEtBQUtBLFVBQUwsS0FBb0JBLFVBQXhCLEVBQW9DO0FBQ2hDLGFBQUtBLFVBQUwsR0FBa0IsSUFBbEI7QUFDSDtBQUNKLEtBdkhMLENBeUhJOztBQXpISjtBQUFBO0FBQUEsNEJBMEhZO0FBQ0osVUFBSSxLQUFLeFUsT0FBTCxJQUFnQixLQUFLd1UsVUFBTCxJQUFtQixJQUF2QyxFQUE2QztBQUN6QyxhQUFLeFUsT0FBTCxHQUFlLEtBQWY7QUFDQSxhQUFLd1UsVUFBTCxDQUFnQm5kLElBQWhCLENBQXFCLElBQXJCLEVBQTJCLEtBQUtpQixLQUFoQyxFQUF1QyxLQUFLNFksUUFBNUM7QUFDSDtBQUNKO0FBL0hMO0FBQUE7QUFBQSw4QkFpSWM7QUFDTixXQUFLd0QsV0FBTCxDQUFpQnZkLE9BQWpCLENBQXlCLFVBQUFxTCxHQUFHLEVBQUk7QUFDNUJBLFdBQUcsQ0FBQzVNLE9BQUo7QUFDSCxPQUZEO0FBR0g7QUFySUw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hPLElBQU0rZSxVQUFiO0FBQ0ksc0JBQVl6SyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS3JILE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS3VQLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS2dELGNBQUwsR0FBc0IsS0FBdEI7QUFDSCxHQU5MLENBUUk7OztBQVJKO0FBQUE7QUFBQSw0QkFTWWxlLEtBVFosRUFTbUJrRyxNQVRuQixFQVMyQjtBQUNuQixhQUFPbEcsS0FBSyxDQUFDNkYsS0FBTixDQUFZLEtBQUttTixJQUFqQixFQUF1QjlNLE1BQXZCLENBQVA7QUFDSCxLQVhMLENBYUk7O0FBYko7QUFBQTtBQUFBLDJCQWNXbEcsS0FkWCxFQWNrQm9CLEtBZGxCLEVBY3lCOEUsTUFkekIsRUFjaUM7QUFDekJsRyxXQUFLLENBQUNtZSxPQUFOLENBQWMsS0FBS25MLElBQW5CLEVBQXlCNVIsS0FBekIsRUFBZ0M4RSxNQUFoQztBQUNIO0FBaEJMO0FBQUE7QUFBQSwwQkFrQlVsRyxLQWxCVixFQWtCaUJFLE9BbEJqQixFQWtCMEJnRyxNQWxCMUIsRUFrQmtDO0FBQzFCLFdBQUtnVixPQUFMLEdBQWVsYixLQUFLLENBQUNvZSxNQUFOLENBQWEsS0FBS3BMLElBQWxCLEVBQXdCOVMsT0FBeEIsRUFBaUNnRyxNQUFqQyxDQUFmO0FBQ0g7QUFwQkw7QUFBQTtBQUFBLDhCQXNCYztBQUNOLFVBQUcsS0FBS2dWLE9BQUwsSUFBZ0IsSUFBbkIsRUFBeUI7QUFDckIsYUFBS0EsT0FBTDtBQUNIO0FBQ0o7QUExQkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSW1ELFNBQVMsR0FBRyw4SUFBaEI7QUFDQSxJQUFJQyxTQUFTLEdBQUdELFNBQVMsQ0FBQzVULEtBQVYsQ0FBZ0IsR0FBaEIsQ0FBaEI7QUFFTyxJQUFNbE0sUUFBYjtBQUFBO0FBQUE7QUFBQSx3QkFDbUI7QUFDWCxhQUFPLEtBQUt5QixLQUFMLENBQVd1ZSxTQUFsQjtBQUNIO0FBSEw7O0FBS0ksb0JBQVl2ZSxLQUFaLEVBQW1Ca0csTUFBbkIsRUFBMkI7QUFBQTs7QUFDdkIsU0FBS2xHLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtrRyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLckMsTUFBTCxHQUFjN0QsS0FBSyxDQUFDNFAsT0FBcEI7QUFDQSxTQUFLckosSUFBTCxHQUFZLElBQVo7QUFDSDs7QUFWTDtBQUFBO0FBQUEsK0JBWWV5TSxJQVpmLEVBWXFCO0FBQ2IsVUFBSXdMLE9BQU8sR0FBRyxJQUFJckIsZ0RBQUosQ0FBWSxLQUFLbmQsS0FBakIsRUFBd0JnVCxJQUF4QixFQUE4QixLQUFLOU0sTUFBbkMsQ0FBZDtBQUNBLFdBQUtLLElBQUwsQ0FBVWtZLFFBQVYsQ0FBbUI3ZSxJQUFuQixDQUF3QjRlLE9BQXhCO0FBQ0EsYUFBT0EsT0FBUDtBQUNIO0FBaEJMO0FBQUE7QUFBQSxpQ0FrQmlCalUsR0FsQmpCLEVBa0JzQjtBQUNkLFVBQUliLEtBQUssR0FBRyxLQUFLL0ksUUFBTCxDQUFjK2QsZUFBZCxDQUE4Qm5VLEdBQTlCLENBQVo7QUFFQSxXQUFLdkssS0FBTCxDQUFXMmUsWUFBWCxDQUF3QmpWLEtBQXhCO0FBQ0EsV0FBS25ELElBQUwsQ0FBVXFZLFVBQVYsQ0FBcUJoZixJQUFyQixDQUEwQjhKLEtBQTFCO0FBRUEsYUFBT0EsS0FBUDtBQUNIO0FBekJMO0FBQUE7QUFBQSxpQ0EyQmlCYSxHQTNCakIsRUEyQnNCO0FBQ2QsVUFBSTFKLFNBQVMsR0FBRyxLQUFLRixRQUFMLENBQWNrZSxlQUFkLENBQThCdFUsR0FBOUIsQ0FBaEI7QUFFQTFKLGVBQVMsQ0FBQ2llLE9BQVYsR0FBb0IsS0FBSzllLEtBQXpCO0FBRUEsYUFBT2EsU0FBUDtBQUNIO0FBakNMO0FBQUE7QUFBQSx1Q0FtQ3VCOEQsSUFuQ3ZCLEVBbUM2QjtBQUNyQixVQUFJN0csU0FBUyxHQUFHLEtBQUsrRixNQUFMLENBQVlrYixnQkFBWixDQUE2QnBhLElBQUksQ0FBQ3FhLFFBQWxDLENBQWhCLENBRHFCLENBR3JCOztBQUVBLGFBQU9saEIsU0FBUDtBQUNIO0FBekNMO0FBQUE7QUFBQSx1Q0EyQ3VCOEcsS0EzQ3ZCLEVBMkM4QjtBQUN0QixVQUFJL0QsU0FBUyxHQUFHLEtBQUtnRCxNQUFMLENBQVlvYixnQkFBWixDQUE2QnJhLEtBQUssQ0FBQ3NhLFFBQU4sQ0FBZWhoQixJQUE1QyxDQUFoQixDQURzQixDQUd0Qjs7QUFFQSxhQUFPMkMsU0FBUDtBQUNIO0FBakRMO0FBQUE7QUFBQSwyQkFtRFd4QyxRQW5EWCxFQW1EcUI4Z0IsU0FuRHJCLEVBbURnQztBQUFBOztBQUN4QixVQUFJQyxZQUFZLEdBQUdELFNBQVMsSUFBSSxJQUFoQzs7QUFFQSxVQUFHQyxZQUFILEVBQWlCO0FBQ2IsYUFBSzdZLElBQUwsR0FBWSxJQUFJOFksb0RBQUosRUFBWjtBQUNILE9BRkQsTUFHSztBQUNEO0FBQ0FGLGlCQUFTLEdBQUd2ZCxRQUFRLENBQUN5RCxzQkFBVCxFQUFaO0FBQ0EsYUFBS2tCLElBQUwsR0FBWSxJQUFJK1ksc0RBQUosRUFBWjtBQUNIOztBQUVELFdBQUsvWSxJQUFMLENBQVVnWixNQUFWLEdBQW1CLEtBQUsxYixNQUFMLENBQVkyYixhQUFaLENBQTBCbmhCLFFBQTFCLENBQW5CO0FBRUEsV0FBS29oQixZQUFMLENBQWtCLEtBQUtsWixJQUFMLENBQVVnWixNQUE1QixFQWR3QixDQWdCeEI7O0FBRUEsV0FBS0csU0FBTCxDQUFlLEtBQUtuWixJQUFMLENBQVVnWixNQUF6QixFQUFpQ3RmLE9BQWpDLENBQXlDLFVBQUFnTSxJQUFJO0FBQUEsZUFBSWtULFNBQVMsQ0FBQzNaLFdBQVYsQ0FBc0J5RyxJQUF0QixDQUFKO0FBQUEsT0FBN0MsRUFsQndCLENBb0J4Qjs7QUFDQSxXQUFLMUYsSUFBTCxDQUFVb1osVUFBVixDQUFxQjFmLE9BQXJCLENBQTZCLFVBQUFZLFNBQVM7QUFBQSxlQUFJQSxTQUFTLENBQUMrZSxTQUFWLEVBQUo7QUFBQSxPQUF0Qzs7QUFFQSxVQUFHUixZQUFILEVBQWlCO0FBQ2IsYUFBSzdZLElBQUwsQ0FBVTBGLElBQVYsR0FBaUJrVCxTQUFqQjtBQUNILE9BRkQsTUFHSztBQUNEO0FBQ0EvZSxpRUFBQSxDQUF5QitlLFNBQXpCLEVBQW9DbGYsT0FBcEMsQ0FBNEMsVUFBQWdNLElBQUk7QUFBQSxpQkFBSSxLQUFJLENBQUMxRixJQUFMLENBQVVzWixLQUFWLENBQWdCamdCLElBQWhCLENBQXFCcU0sSUFBckIsQ0FBSjtBQUFBLFNBQWhEO0FBQ0g7O0FBRUQsYUFBTyxLQUFLMUYsSUFBWjtBQUNIO0FBbkZMO0FBQUE7QUFBQSxpQ0FxRmlCZ1osTUFyRmpCLEVBcUZ5QjtBQUFBOztBQUNqQkEsWUFBTSxDQUFDdGYsT0FBUCxDQUFlLFVBQUE2ZixLQUFLO0FBQUEsZUFBSSxNQUFJLENBQUNDLFdBQUwsQ0FBaUJELEtBQWpCLENBQUo7QUFBQSxPQUFwQjtBQUNIO0FBdkZMO0FBQUE7QUFBQSxnQ0F5RmdCQSxLQXpGaEIsRUF5RnVCO0FBQ2YsVUFBSUUsb0RBQU8sQ0FBQ0YsS0FBRCxDQUFYLEVBQW9CO0FBQ2hCLGFBQUtHLFdBQUwsQ0FBaUJILEtBQWpCO0FBQ0gsT0FGRCxNQUdLLElBQUdJLHVEQUFVLENBQUNKLEtBQUQsQ0FBYixFQUFxQjtBQUN0QixhQUFLSyxjQUFMLENBQW9CTCxLQUFwQjtBQUNILE9BRkksTUFHQTtBQUNELGFBQUtNLFVBQUwsQ0FBZ0JOLEtBQWhCO0FBQ0g7QUFDSjtBQW5HTDtBQUFBO0FBQUEsOEJBcUdjUCxNQXJHZCxFQXFHc0I7QUFBQTs7QUFDZCxhQUFPQSxNQUFNLENBQUNsTyxHQUFQLENBQVcsVUFBQXlPLEtBQUs7QUFBQSxlQUFJLE1BQUksQ0FBQ08sUUFBTCxDQUFjUCxLQUFkLENBQUo7QUFBQSxPQUFoQixDQUFQO0FBQ0g7QUF2R0w7QUFBQTtBQUFBLDZCQXlHYUEsS0F6R2IsRUF5R29CO0FBQ1osVUFBSUUsb0RBQU8sQ0FBQ0YsS0FBRCxDQUFYLEVBQW9CO0FBQ2hCLGVBQU8sS0FBS1EsUUFBTCxDQUFjUixLQUFkLENBQVA7QUFDSDs7QUFFRCxVQUFHSSx1REFBVSxDQUFDSixLQUFELENBQWIsRUFBc0I7QUFDbEIsZUFBTyxLQUFLUyxXQUFMLENBQWlCVCxLQUFqQixDQUFQO0FBQ0g7O0FBRUQsYUFBTyxLQUFLVSxPQUFMLENBQWFWLEtBQWIsQ0FBUDtBQUNIO0FBbkhMO0FBQUE7QUFBQSwrQkFxSGVuYixJQXJIZixFQXFIcUI7QUFBQTs7QUFDYixVQUFJOGIsT0FBTyxHQUFHOWIsSUFBSSxDQUFDdWEsUUFBbkI7QUFFQXVCLGFBQU8sQ0FBQzNpQixTQUFSLEdBQW9CLEtBQUs0aUIsa0JBQUwsQ0FBd0IvYixJQUF4QixDQUFwQjtBQUVBLFVBQUlnYixVQUFVLEdBQUcsRUFBakI7QUFDQSxVQUFJZ0IsWUFBWSxHQUFHaGMsSUFBSSxDQUFDaWMsTUFBTCxDQUFZQyxJQUFaLENBQWlCLFVBQUFqYyxLQUFLLEVBQUk7QUFDekMsWUFBSWtjLFFBQVEsR0FBR2xjLEtBQUssQ0FBQ3NhLFFBQXJCOztBQUVBLGNBQUksQ0FBQzZCLFdBQUwsQ0FBaUJuYyxLQUFqQjs7QUFFQSxZQUFJa2MsUUFBUSxDQUFDamdCLFNBQVQsSUFBc0IsSUFBMUIsRUFBZ0M7QUFDNUI4ZSxvQkFBVSxDQUFDL2YsSUFBWCxDQUFnQmtoQixRQUFRLENBQUNqZ0IsU0FBekI7QUFDQTRmLGlCQUFPLENBQUNPLE1BQVIsR0FBaUJGLFFBQVEsQ0FBQ0UsTUFBMUI7QUFDQSxpQkFBT1AsT0FBTyxDQUFDTyxNQUFSLElBQWtCLElBQXpCO0FBQ0g7O0FBRUQsZUFBTyxLQUFQO0FBQ0gsT0Faa0IsQ0FBbkIsQ0FOYSxDQW9CYjs7QUFDQWxiLG9EQUFBLENBQWM2WixVQUFkLEVBQTBCLFVBQUE5ZSxTQUFTO0FBQUEsZUFBSUEsU0FBUyxDQUFDb2dCLFNBQWQ7QUFBQSxPQUFuQyxFQUE0RGhoQixPQUE1RCxDQUFvRSxVQUFBWSxTQUFTO0FBQUEsZUFBSSxNQUFJLENBQUMwRixJQUFMLENBQVVvWixVQUFWLENBQXFCL2YsSUFBckIsQ0FBMEJpQixTQUExQixDQUFKO0FBQUEsT0FBN0U7QUFFQTRmLGFBQU8sQ0FBQ2QsVUFBUixHQUFxQkEsVUFBckIsQ0F2QmEsQ0F5QmI7O0FBQ0EsVUFBSWdCLFlBQUosRUFBa0I7QUFDZDtBQUNIOztBQUVELFVBQUlGLE9BQU8sQ0FBQzNpQixTQUFaLEVBQXVCO0FBQ25CMmlCLGVBQU8sQ0FBQ3RpQixLQUFSLEdBQWdCLEtBQUsraUIsUUFBTCxDQUFjdmMsSUFBZCxDQUFoQjtBQUNILE9BRkQsTUFHSztBQUNELGFBQUs4YSxZQUFMLENBQWtCOWEsSUFBSSxDQUFDNkUsVUFBdkI7QUFDSDtBQUNKO0FBekpMO0FBQUE7QUFBQSxnQ0EySmdCNUUsS0EzSmhCLEVBMkp1QjtBQUNmLFVBQUl1YyxRQUFRLEdBQUd2YyxLQUFLLENBQUNvYSxRQUFyQjtBQUFBLFVBQStCb0MsU0FBUyxHQUFHeGMsS0FBSyxDQUFDRSxTQUFqRDtBQUFBLFVBQ0lnYyxRQUFRLEdBQUdsYyxLQUFLLENBQUNzYSxRQURyQjtBQUFBLFVBQytCVixPQUQvQjs7QUFHQSxVQUFHNEMsU0FBUyxJQUFJLElBQWhCLEVBQXNCO0FBQ2xCNUMsZUFBTyxHQUFHLEtBQUs2QyxVQUFMLENBQWdCRCxTQUFoQixDQUFWO0FBQ0FOLGdCQUFRLENBQUN0QyxPQUFULEdBQW1CQSxPQUFuQjtBQUNIOztBQUVELFVBQUkyQyxRQUFRLENBQUNHLFVBQVQsQ0FBb0IsR0FBcEIsQ0FBSixFQUE4QjtBQUMxQlIsZ0JBQVEsQ0FBQ1MsT0FBVCxHQUFtQixJQUFuQjtBQUNBVCxnQkFBUSxDQUFDNWlCLElBQVQsR0FBZ0JpakIsUUFBUSxDQUFDSyxNQUFULENBQWdCLENBQWhCLENBQWhCO0FBQ0FWLGdCQUFRLENBQUNXLFVBQVQsR0FBc0IzYiwyQ0FBQSxDQUFXd1ksU0FBWCxFQUFzQixVQUFBbmYsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLEtBQUsyaEIsUUFBUSxDQUFDNWlCLElBQW5CO0FBQUEsU0FBdkIsQ0FBdEI7QUFDQXNnQixlQUFPLEtBQUtBLE9BQU8sQ0FBQ25CLE9BQVIsR0FBa0IsSUFBdkIsQ0FBUDtBQUNILE9BTEQsTUFNSyxJQUFJOEQsUUFBUSxDQUFDRyxVQUFULENBQW9CLEdBQXBCLENBQUosRUFBOEI7QUFDL0JSLGdCQUFRLENBQUM1aUIsSUFBVCxHQUFnQmlqQixRQUFRLENBQUNLLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBaEI7QUFDQWhELGVBQU8sS0FBS0EsT0FBTyxDQUFDcEIsS0FBUixHQUFnQixJQUFyQixDQUFQO0FBQ0gsT0FISSxNQUlBLElBQUkrRCxRQUFRLENBQUNHLFVBQVQsQ0FBb0IsR0FBcEIsQ0FBSixFQUE4QjtBQUMvQlIsZ0JBQVEsQ0FBQ2pnQixTQUFULEdBQXFCLElBQXJCO0FBQ0FpZ0IsZ0JBQVEsQ0FBQzVpQixJQUFULEdBQWdCaWpCLFFBQVEsQ0FBQ0ssTUFBVCxDQUFnQixDQUFoQixDQUFoQjtBQUNBaEQsZUFBTyxLQUFLQSxPQUFPLENBQUNwQixLQUFSLEdBQWdCLElBQXJCLENBQVA7QUFDSCxPQUpJLE1BS0E7QUFDRDBELGdCQUFRLENBQUM1aUIsSUFBVCxHQUFnQmlqQixRQUFoQjtBQUNIOztBQUVELFVBQUlMLFFBQVEsQ0FBQ2pnQixTQUFiLEVBQXdCO0FBQ3BCLFlBQUlBLFNBQVMsR0FBRyxLQUFLNmdCLGtCQUFMLENBQXdCOWMsS0FBeEIsQ0FBaEI7O0FBRUEsWUFBSS9ELFNBQUosRUFBZTtBQUNYaWdCLGtCQUFRLENBQUNqZ0IsU0FBVCxHQUFxQixLQUFLOGdCLFlBQUwsQ0FBa0I5Z0IsU0FBbEIsQ0FBckI7QUFDQWlnQixrQkFBUSxDQUFDamdCLFNBQVQsQ0FBbUIrZ0IsT0FBbkIsR0FBNkJoZCxLQUE3Qjs7QUFFQSxjQUFHNFosT0FBTyxJQUFJLElBQWQsRUFBb0I7QUFDaEJBLG1CQUFPLENBQUN6USxVQUFSLEdBQXFCK1MsUUFBUSxDQUFDamdCLFNBQVQsQ0FBbUJnaEIsV0FBeEM7QUFDSDs7QUFFRCxjQUFJZixRQUFRLENBQUNqZ0IsU0FBVCxDQUFtQmloQixRQUFuQixFQUFKLEVBQW1DO0FBQy9CaEIsb0JBQVEsQ0FBQ0UsTUFBVCxHQUFrQkYsUUFBUSxDQUFDamdCLFNBQTNCO0FBQ0E7QUFDSDtBQUNKLFNBWkQsTUFhSztBQUNELGdCQUFNLElBQUloQixLQUFKLENBQVUsZUFBZWloQixRQUFRLENBQUM1aUIsSUFBeEIsR0FBK0IsaUJBQXpDLENBQU47QUFDSDtBQUNKOztBQUVELFVBQUdzZ0IsT0FBTyxJQUFJLElBQWQsRUFBb0I7QUFDaEI7QUFDSDs7QUFFRCxVQUFJLEVBQUVzQyxRQUFRLENBQUNTLE9BQVQsSUFBb0JULFFBQVEsQ0FBQ2pnQixTQUEvQixDQUFKLEVBQStDO0FBQzNDLFlBQUlraEIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBVTNnQixLQUFWLEVBQWlCO0FBQy9CLGNBQUloQyxHQUFHLEdBQUd3RixLQUFLLENBQUNELElBQU4sQ0FBV3ZGLEdBQXJCOztBQUVBLGNBQUkwaEIsUUFBUSxDQUFDNWlCLElBQVQsQ0FBY29qQixVQUFkLENBQXlCLE9BQXpCLENBQUosRUFBdUM7QUFDbkN4Yiw4REFBQSxDQUFrQjFHLEdBQWxCLEVBQXVCMGhCLFFBQVEsQ0FBQzVpQixJQUFoQyxFQUFzQ2tELEtBQXRDO0FBQ0gsV0FGRCxNQUdLO0FBQ0RoQyxlQUFHLENBQUNrSSxZQUFKLENBQWlCd1osUUFBUSxDQUFDNWlCLElBQTFCLEVBQWdDa0QsS0FBaEM7QUFDSDtBQUNKLFNBVEQ7O0FBV0EsWUFBSXdELEtBQUssQ0FBQ0QsSUFBTixDQUFXdWEsUUFBWCxDQUFvQnBoQixTQUF4QixFQUFtQztBQUMvQjBnQixpQkFBTyxDQUFDd0Qsa0JBQVIsQ0FBMkIsVUFBVTVnQixLQUFWLEVBQWlCO0FBQ3hDLGdCQUFJdEQsU0FBUyxHQUFHOEcsS0FBSyxDQUFDRCxJQUFOLENBQVd1YSxRQUFYLENBQW9CcGhCLFNBQXBDO0FBQ0EsZ0JBQUlta0IsWUFBWSxHQUFHbmMsd0RBQUEsQ0FBd0JnYixRQUFRLENBQUM1aUIsSUFBakMsRUFBdUMsR0FBdkMsQ0FBbkI7O0FBRUEsZ0JBQUlKLFNBQVMsQ0FBQ29rQixZQUFWLENBQXVCRCxZQUF2QixDQUFKLEVBQTBDO0FBQ3RDbmtCLHVCQUFTLENBQUMyRixZQUFWLENBQXVCd2UsWUFBdkIsRUFBcUM3Z0IsS0FBckM7QUFDSCxhQUZELE1BR0s7QUFDRDJnQix5QkFBVyxDQUFDM2dCLEtBQUQsQ0FBWDtBQUNIO0FBQ0osV0FWRDtBQVdILFNBWkQsTUFhSztBQUNEb2QsaUJBQU8sQ0FBQ3dELGtCQUFSLENBQTJCRCxXQUEzQjtBQUNIO0FBQ0o7O0FBRUR2RCxhQUFPLENBQUMyRCxPQUFSO0FBQ0g7QUEvT0w7QUFBQTtBQUFBLGdDQWlQZ0JDLEtBalBoQixFQWlQdUI7QUFDZkEsV0FBSyxDQUFDbEQsUUFBTixDQUFlVixPQUFmLEdBQXlCLEtBQUs2QyxVQUFMLENBQWdCZSxLQUFLLENBQUN0ZCxTQUF0QixDQUF6QjtBQUNBc2QsV0FBSyxDQUFDbEQsUUFBTixDQUFlVixPQUFmLENBQXVCd0Qsa0JBQXZCLENBQTBDLFVBQVU1Z0IsS0FBVixFQUFpQjtBQUN2RCxZQUFJaEMsR0FBSjtBQUFBLFlBQVNpakIsV0FBVyxHQUFHemdCLFFBQVEsQ0FBQ3NKLGNBQVQsQ0FBd0I5SixLQUF4QixDQUF2Qjs7QUFFQSxZQUFJZ2hCLEtBQUssQ0FBQzFjLFVBQU4sSUFBb0IsSUFBeEIsRUFBOEI7QUFDMUIsY0FBSTBjLEtBQUssQ0FBQ2hqQixHQUFOLElBQWEsSUFBakIsRUFBdUI7QUFDbkJBLGVBQUcsR0FBR2dqQixLQUFLLENBQUNoakIsR0FBTixDQUFVc0csVUFBaEI7QUFDSDtBQUNKLFNBSkQsTUFLSztBQUNEdEcsYUFBRyxHQUFHZ2pCLEtBQUssQ0FBQzFjLFVBQU4sQ0FBaUJ0RyxHQUF2QjtBQUNIOztBQUVELFlBQUlBLEdBQUcsSUFBSSxJQUFYLEVBQWlCO0FBQ2IsY0FBSWdqQixLQUFLLENBQUNoakIsR0FBTixJQUFhLElBQWpCLEVBQXVCO0FBQ25CQSxlQUFHLENBQUNvRyxXQUFKLENBQWdCNmMsV0FBaEI7QUFDSCxXQUZELE1BR0s7QUFDRGppQiwrREFBQSxDQUFtQmdpQixLQUFLLENBQUNoakIsR0FBekIsRUFBOEJpakIsV0FBOUI7QUFDSDtBQUNKOztBQUVERCxhQUFLLENBQUNoakIsR0FBTixHQUFZaWpCLFdBQVo7QUFDSCxPQXRCRDtBQXVCQUQsV0FBSyxDQUFDbEQsUUFBTixDQUFlVixPQUFmLENBQXVCMkQsT0FBdkI7QUFDSDtBQTNRTDtBQUFBO0FBQUEsbUNBNlFtQkcsS0E3UW5CLEVBNlEwQixDQUVyQjtBQS9RTDtBQUFBO0FBQUEsNEJBaVJZM2QsSUFqUlosRUFpUmtCO0FBQUE7O0FBQ1YsVUFBSThiLE9BQU8sR0FBRzliLElBQUksQ0FBQ3VhLFFBQW5COztBQUVBLFVBQUl1QixPQUFPLENBQUNPLE1BQVIsSUFBa0IsSUFBdEIsRUFBNEI7QUFDeEIsZUFBT1AsT0FBTyxDQUFDTyxNQUFSLENBQWV1QixLQUFmLEVBQVA7QUFDSDs7QUFFRDVkLFVBQUksQ0FBQ3ZGLEdBQUwsR0FBV3dDLFFBQVEsQ0FBQ3FKLGFBQVQsQ0FBdUJ0RyxJQUFJLENBQUNxYSxRQUE1QixDQUFYOztBQUVBLFVBQUl5QixPQUFPLENBQUMzaUIsU0FBWixFQUF1QjtBQUNuQixZQUFJMGtCLFFBQVEsR0FBRyxLQUFLQyxZQUFMLENBQWtCaEMsT0FBTyxDQUFDM2lCLFNBQTFCLENBQWY7QUFFQTJpQixlQUFPLENBQUMzaUIsU0FBUixHQUFvQjBrQixRQUFwQjtBQUVBcGlCLHFEQUFBLENBQWF1RSxJQUFJLENBQUN2RixHQUFsQixFQUF1QmlCLGdEQUF2QjtBQUVBc0UsWUFBSSxDQUFDaWMsTUFBTCxDQUFZM2dCLE9BQVosQ0FBb0IsVUFBQTJFLEtBQUs7QUFBQSxpQkFBSSxNQUFJLENBQUM4ZCxRQUFMLENBQWM5ZCxLQUFkLENBQUo7QUFBQSxTQUF6QjtBQUVBNGQsZ0JBQVEsQ0FBQ0csTUFBVCxHQUFrQmhlLElBQWxCO0FBQ0E2ZCxnQkFBUSxDQUFDSSxhQUFULENBQXVCamUsSUFBSSxDQUFDdkYsR0FBNUI7QUFDQW9qQixnQkFBUSxDQUFDSyxRQUFULENBQWtCcEMsT0FBTyxDQUFDdGlCLEtBQTFCO0FBQ0Fxa0IsZ0JBQVEsQ0FBQ3JjLE9BQVQ7QUFDSCxPQWJELE1BY0s7QUFDRHhCLFlBQUksQ0FBQ2ljLE1BQUwsQ0FBWTNnQixPQUFaLENBQW9CLFVBQUEyRSxLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDOGQsUUFBTCxDQUFjOWQsS0FBZCxDQUFKO0FBQUEsU0FBekI7QUFDQUQsWUFBSSxDQUFDNkUsVUFBTCxDQUFnQnZKLE9BQWhCLENBQXdCLFVBQUF5SixLQUFLO0FBQUEsaUJBQUkvRSxJQUFJLENBQUN2RixHQUFMLENBQVNvRyxXQUFULENBQXFCLE1BQUksQ0FBQzZhLFFBQUwsQ0FBYzNXLEtBQWQsQ0FBckIsQ0FBSjtBQUFBLFNBQTdCO0FBQ0g7O0FBRUQsYUFBTy9FLElBQUksQ0FBQ3ZGLEdBQVo7QUFDSDtBQTlTTDtBQUFBO0FBQUEsNkJBZ1Rhd0YsS0FoVGIsRUFnVG9CO0FBQ1osVUFBSUQsSUFBSSxHQUFHQyxLQUFLLENBQUNELElBQWpCO0FBQUEsVUFDSXZGLEdBQUcsR0FBR3VGLElBQUksQ0FBQ3ZGLEdBRGY7QUFBQSxVQUVJMGhCLFFBQVEsR0FBR2xjLEtBQUssQ0FBQ3NhLFFBRnJCO0FBQUEsVUFHSVYsT0FBTyxHQUFHc0MsUUFBUSxDQUFDdEMsT0FIdkI7O0FBS0EsVUFBR0EsT0FBTyxJQUFJLElBQWQsRUFBb0I7QUFDaEI7QUFDSDs7QUFFRCxVQUFJc0MsUUFBUSxDQUFDUyxPQUFiLEVBQXNCO0FBQ2xCLFlBQUlULFFBQVEsQ0FBQ1csVUFBYixFQUF5QjtBQUNyQnJpQixhQUFHLENBQUNnRSxnQkFBSixDQUFxQjBkLFFBQVEsQ0FBQzVpQixJQUE5QixFQUFvQyxVQUFBaUIsQ0FBQztBQUFBLG1CQUFJcWYsT0FBTyxDQUFDVCxPQUFSLENBQWdCLElBQUk3ZSwyQ0FBSixDQUFVQyxDQUFWLEVBQWFDLEdBQWIsQ0FBaEIsQ0FBSjtBQUFBLFdBQXJDO0FBQ0gsU0FGRCxNQUdLLElBQUl1RixJQUFJLENBQUN1YSxRQUFMLENBQWNwaEIsU0FBbEIsRUFBNkI7QUFDOUIsY0FBSWdsQixTQUFTLEdBQUdoZCx3REFBQSxDQUF3QmdiLFFBQVEsQ0FBQzVpQixJQUFqQyxFQUF1QyxHQUF2QyxDQUFoQjtBQUNBeUcsY0FBSSxDQUFDdWEsUUFBTCxDQUFjcGhCLFNBQWQsQ0FBd0JtRixLQUF4QixDQUE4QjZmLFNBQTlCLEVBQXlDLFVBQUEzakIsQ0FBQztBQUFBLG1CQUFJcWYsT0FBTyxDQUFDVCxPQUFSLENBQWdCLElBQUk3ZSwyQ0FBSixDQUFVQyxDQUFWLEVBQWFDLEdBQWIsQ0FBaEIsQ0FBSjtBQUFBLFdBQTFDO0FBQ0g7QUFDSixPQVJELE1BU0s7QUFDRG9mLGVBQU8sQ0FBQ3VFLElBQVI7QUFDQXZFLGVBQU8sQ0FBQ1YsS0FBUjtBQUNILE9BdEJXLENBd0JaOzs7QUFDQSxVQUFHZ0QsUUFBUSxDQUFDamdCLFNBQVosRUFBdUI7QUFDbkIyZCxlQUFPLENBQUN3RCxrQkFBUixDQUEyQixVQUFDM2UsUUFBRCxFQUFXMlcsUUFBWDtBQUFBLGlCQUF3QjhHLFFBQVEsQ0FBQ2pnQixTQUFULENBQW1CbWlCLE9BQW5CLENBQTJCM2YsUUFBM0IsRUFBcUMyVyxRQUFyQyxDQUF4QjtBQUFBLFNBQTNCO0FBQ0g7QUFDSjtBQTVVTDtBQUFBO0FBQUEsNkJBOFVhb0ksS0E5VWIsRUE4VW9CO0FBQ1pBLFdBQUssQ0FBQ2xELFFBQU4sQ0FBZVYsT0FBZixDQUF1QnVFLElBQXZCO0FBQ0FYLFdBQUssQ0FBQ2hqQixHQUFOLEdBQVl3QyxRQUFRLENBQUNzSixjQUFULENBQXdCa1gsS0FBSyxDQUFDbEQsUUFBTixDQUFlVixPQUFmLENBQXVCcGQsS0FBL0MsQ0FBWjtBQUNBLGFBQU9naEIsS0FBSyxDQUFDaGpCLEdBQWI7QUFDSDtBQWxWTDtBQUFBO0FBQUEsZ0NBb1ZnQmtqQixLQXBWaEIsRUFvVnVCO0FBQ2YsYUFBTzFnQixRQUFRLENBQUNDLGFBQVQsQ0FBdUJ5Z0IsS0FBSyxDQUFDeGQsU0FBN0IsQ0FBUDtBQUNIO0FBdFZMO0FBQUE7QUFBQSw2QkF3VmFILElBeFZiLEVBd1ZtQjtBQUNYLFVBQUl4RyxLQUFLLEdBQUcsRUFBWjtBQUVBd0csVUFBSSxDQUFDNkUsVUFBTCxDQUFnQnZKLE9BQWhCLENBQXdCLFVBQUF5SixLQUFLLEVBQUk7QUFDN0IsWUFBR3VaLG1EQUFNLENBQUN2WixLQUFELENBQVQsRUFBa0I7QUFDZCxjQUFJd1osSUFBSSxHQUFHeFosS0FBSyxDQUFDeVosT0FBTixDQUFjLE1BQWQsQ0FBWDs7QUFFQSxjQUFHRCxJQUFILEVBQVM7QUFDTC9rQixpQkFBSyxDQUFDK2tCLElBQUksQ0FBQ3BlLFNBQU4sQ0FBTCxHQUF3QjRFLEtBQUssQ0FBQzBaLFdBQU4sRUFBeEI7QUFDSDtBQUNKO0FBQ0osT0FSRDtBQVVBLGFBQVFqbEIsS0FBUjtBQUNIO0FBdFdMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTs7SUFFTWtsQixJO0FBQ0Ysa0JBQWM7QUFBQTs7QUFDVixTQUFLOUQsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLZCxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS2tCLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLZixVQUFMLEdBQWtCLEVBQWxCO0FBQ0g7Ozs7MEJBRUswRSxpQixFQUFtQjtBQUNyQixVQUFJQyxPQUFKOztBQUVBLFVBQUl6ZCwrQ0FBQSxDQUFld2QsaUJBQWYsQ0FBSixFQUF1QztBQUNuQ0MsZUFBTyxHQUFHM2hCLFFBQVEsQ0FBQzRoQixhQUFULENBQXVCRixpQkFBdkIsQ0FBVjtBQUNILE9BRkQsTUFHSztBQUNEQyxlQUFPLEdBQUdELGlCQUFWO0FBQ0g7O0FBRURDLGFBQU8sQ0FBQy9kLFdBQVIsQ0FBb0IsS0FBS2EsT0FBekI7QUFDSCxLLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzhCQUVVO0FBQ04sV0FBS29kLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxFQUFsQjtBQUVBLFdBQUs3RSxVQUFMLENBQWdCM2UsT0FBaEIsQ0FBd0IsVUFBQThGLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUMyZCxRQUFMLEVBQUo7QUFBQSxPQUE1QjtBQUNBLFdBQUsvRCxVQUFMLENBQWdCMWYsT0FBaEIsQ0FBd0IsVUFBQThGLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUMyZCxRQUFMLEVBQUo7QUFBQSxPQUE1QjtBQUNBLFdBQUtqRixRQUFMLENBQWN4ZSxPQUFkLENBQXNCLFVBQUE4RixJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDckgsT0FBTCxFQUFKO0FBQUEsT0FBMUI7QUFDQSxXQUFLNmdCLE1BQUwsQ0FBWXRmLE9BQVosQ0FBb0IsVUFBQThGLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUNySCxPQUFMLEVBQUo7QUFBQSxPQUF4QjtBQUVBLFdBQUtrZ0IsVUFBTCxDQUFnQmhZLE1BQWhCLEdBQXlCLENBQXpCO0FBQ0EsV0FBSytZLFVBQUwsQ0FBZ0IvWSxNQUFoQixHQUF5QixDQUF6QjtBQUNBLFdBQUs2WCxRQUFMLENBQWM3WCxNQUFkLEdBQXVCLENBQXZCO0FBQ0EsV0FBSzJZLE1BQUwsQ0FBWTNZLE1BQVosR0FBcUIsQ0FBckI7QUFDSDs7Ozs7O0FBR0UsSUFBTXlZLGNBQWI7QUFBQTs7QUFBQTtBQUFBO0FBQUEsd0JBQ2tCO0FBQ1YsYUFBTyxLQUFLcFQsSUFBWjtBQUNIO0FBSEw7O0FBS0ksNEJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtBLElBQUwsR0FBWSxJQUFaO0FBRlU7QUFHYjs7QUFSTDtBQUFBLEVBQW9Db1gsSUFBcEM7QUFXTyxJQUFNL0QsZ0JBQWI7QUFBQTs7QUFBQTtBQUFBO0FBQUEsd0JBQ2tCO0FBQ1YsVUFBSWpaLE9BQU8sR0FBR3pFLFFBQVEsQ0FBQ3lELHNCQUFULEVBQWQ7QUFDQSxXQUFLd2EsS0FBTCxDQUFXNWYsT0FBWCxDQUFtQixVQUFBZ00sSUFBSTtBQUFBLGVBQUk1RixPQUFPLENBQUNiLFdBQVIsQ0FBb0J5RyxJQUFwQixDQUFKO0FBQUEsT0FBdkI7QUFDQSxhQUFPNUYsT0FBUDtBQUNIO0FBTEw7O0FBT0ksOEJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFdBQUt3WixLQUFMLEdBQWEsRUFBYjtBQUZVO0FBR2I7O0FBVkw7QUFBQTtBQUFBLGdDQVlnQjtBQUNSLFdBQUtBLEtBQUwsQ0FBV2paLE1BQVgsR0FBb0IsQ0FBcEI7QUFDSDtBQWRMOztBQUFBO0FBQUEsRUFBc0N5YyxJQUF0QyxFOzs7Ozs7Ozs7Ozs7QUNqRUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBTU8sSUFBTU0sUUFBYixXQUpDMWlCLDBEQUFPLENBQUM7QUFDTGxELFdBQVMsRUFBRSxVQUROO0FBRUxDLEtBQUcsRUFBRTtBQUZBLENBQUQsQ0FJUjtBQUFBOztBQUNJLHNCQUFjO0FBQUE7O0FBQUE7QUFFYjs7QUFITDtBQUFBO0FBQUEsbUNBS21CRSxJQUxuQixFQUt5QjBsQixLQUx6QixFQUtnQ0MsU0FMaEMsRUFLMkM7QUFDbkMsYUFBT2xqQiw4Q0FBUSxDQUFDbWpCLGNBQVQsQ0FBd0I1bEIsSUFBeEIsRUFBOEIwbEIsS0FBOUIsRUFBcUNDLFNBQXJDLENBQVA7QUFDSDtBQVBMO0FBQUE7QUFBQSxtQ0FTbUIzbEIsSUFUbkIsRUFTeUIwbEIsS0FUekIsRUFTZ0NDLFNBVGhDLEVBUzJDO0FBQ25DLGFBQU9sakIsOENBQVEsQ0FBQ29qQixjQUFULENBQXdCN2xCLElBQXhCLEVBQThCMGxCLEtBQTlCLEVBQXFDQyxTQUFyQyxDQUFQO0FBQ0g7QUFYTDtBQUFBO0FBQUEsaUNBYWlCM2xCLElBYmpCLEVBYXVCMGxCLEtBYnZCLEVBYThCQyxTQWI5QixFQWF5QztBQUNqQyxhQUFPbGpCLDhDQUFRLENBQUNxakIsWUFBVCxDQUFzQjlsQixJQUF0QixFQUE0QjBsQixLQUE1QixFQUFtQ0MsU0FBbkMsQ0FBUDtBQUNIO0FBZkw7QUFBQTtBQUFBLGdDQWlCZ0IzbEIsSUFqQmhCLEVBaUJzQjBsQixLQWpCdEIsRUFpQjZCQyxTQWpCN0IsRUFpQndDO0FBQ2hDLGFBQU9sakIsOENBQVEsQ0FBQ3NqQixXQUFULENBQXFCL2xCLElBQXJCLEVBQTJCMGxCLEtBQTNCLEVBQWtDQyxTQUFsQyxDQUFQO0FBQ0g7QUFuQkw7O0FBQUE7QUFBQSxFQUE4QkssNkNBQTlCLGM7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBRU8sSUFBTUMsS0FBYjtBQUFBOztBQUNJLGlCQUFZam1CLElBQVosRUFBa0JrRCxLQUFsQixFQUF5QjtBQUFBOztBQUFBOztBQUNyQiwrRUFBTWdqQiwrQ0FBUSxDQUFDQyxTQUFmLEVBQTBCbm1CLElBQTFCLEVBQWdDa0QsS0FBaEM7QUFDQSxVQUFLdUQsSUFBTCxHQUFZLElBQVo7QUFDQSxVQUFLK1EsS0FBTCxHQUFhLEdBQWI7QUFIcUI7QUFJeEI7O0FBTEw7QUFBQTtBQUFBLDZCQU9hdFUsS0FQYixFQU9vQjtBQUNaLFdBQUswRCxTQUFMLEdBQWlCMUQsS0FBakI7QUFDSDtBQVRMO0FBQUE7QUFBQSxrQ0FXa0I7QUFDVixhQUFPLElBQUkraUIsS0FBSixDQUFVLEtBQUtuRixRQUFmLEVBQXlCLEtBQUtsYSxTQUE5QixDQUFQO0FBQ0g7QUFiTDtBQUFBO0FBQUEsZ0NBZWdCLENBRVg7QUFqQkw7O0FBQUE7QUFBQSxFQUEyQndmLDRDQUEzQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVPLElBQU1DLEtBQWI7QUFBQTs7QUFDSSxpQkFBWW5qQixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEVBQ1RnakIsK0NBQVEsQ0FBQ0ksT0FEQSxFQUNTLFVBRFQsRUFDcUJwakIsS0FEckI7QUFFbEI7O0FBSEw7QUFBQTtBQUFBLGtDQUtrQjtBQUNWLGFBQU8sSUFBSW1qQixLQUFKLENBQVUsS0FBS3ZGLFFBQWYsRUFBeUIsS0FBS2xhLFNBQTlCLENBQVA7QUFDSDtBQVBMOztBQUFBO0FBQUEsRUFBMkJ3Ziw0Q0FBM0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNRyxJQUFiO0FBQUE7O0FBQ0ksZ0JBQVl2bUIsSUFBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhFQUFNa21CLCtDQUFRLENBQUNiLE9BQWYsRUFBd0JybEIsSUFBeEI7QUFDQSxVQUFLa0IsR0FBTCxHQUFXLElBQVg7QUFDQSxVQUFLd2hCLE1BQUwsR0FBYyxFQUFkO0FBQ0EsVUFBSzhELFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxVQUFLN1ksT0FBTCxHQUFlLElBQUk4WSx1REFBSixFQUFmO0FBTGM7QUFNakI7O0FBUEw7QUFBQTtBQUFBLDZCQVNhQyxJQVRiLEVBU21CO0FBQ1hBLFVBQUksQ0FBQ2pnQixJQUFMLEdBQVksSUFBWjtBQUNBLFdBQUtpYyxNQUFMLENBQVloaEIsSUFBWixDQUFpQmdsQixJQUFqQjtBQUNIO0FBWkw7QUFBQTtBQUFBLDhCQWNjO0FBQ04sYUFBTyxLQUFLaEUsTUFBTCxDQUFZaGEsTUFBWixLQUF1QixDQUE5QjtBQUNIO0FBaEJMO0FBQUE7QUFBQSw0QkFrQlk1SSxHQWxCWixFQWtCaUI7QUFDVCxVQUFJNm1CLE9BQU8sR0FBRyxLQUFLakUsTUFBTCxDQUFZN2YsTUFBWixDQUFtQixVQUFVNmpCLElBQVYsRUFBZ0I7QUFDN0MsZUFBT0EsSUFBSSxDQUFDNUYsUUFBTCxLQUFrQmhoQixHQUF6QjtBQUNILE9BRmEsQ0FBZDs7QUFJQSxVQUFJLENBQUM2bUIsT0FBTyxDQUFDamUsTUFBYixFQUFxQjtBQUNqQixlQUFPLElBQVA7QUFDSDs7QUFFRCxhQUFPaWUsT0FBTyxDQUFDLENBQUQsQ0FBZDtBQUNIO0FBNUJMO0FBQUE7QUFBQSw0QkE4Qlk3bUIsR0E5QlosRUE4QmlCb0QsS0E5QmpCLEVBOEJ3QjtBQUNoQixVQUFJWixNQUFKO0FBQUEsVUFBWXFrQixPQUFPLEdBQUcsS0FBS2pFLE1BQUwsQ0FBWTdmLE1BQVosQ0FBbUIsVUFBVTZqQixJQUFWLEVBQWdCO0FBQ3JELGVBQU9BLElBQUksQ0FBQ0UsUUFBTCxDQUFjOW1CLEdBQWQsQ0FBUDtBQUNILE9BRnFCLENBQXRCOztBQUlBLFVBQUk2bUIsT0FBTyxDQUFDamUsTUFBUixHQUFpQixDQUFyQixFQUF3QjtBQUNwQnBHLGNBQU0sR0FBR3FrQixPQUFPLENBQUMsQ0FBRCxDQUFoQjtBQUNBcmtCLGNBQU0sQ0FBQ3VrQixRQUFQLENBQWdCM2pCLEtBQWhCO0FBQ0gsT0FIRCxNQUlLO0FBQ0RaLGNBQU0sR0FBRyxJQUFJMmpCLDRDQUFKLENBQVVubUIsR0FBVixFQUFlb0QsS0FBZixDQUFUO0FBQ0FaLGNBQU0sQ0FBQ21FLElBQVAsR0FBYyxJQUFkO0FBQ0FuRSxjQUFNLENBQUMyaEIsT0FBUCxDQUFlLEtBQUs2QyxjQUFwQjtBQUNIOztBQUVELFdBQUtwRSxNQUFMLENBQVloaEIsSUFBWixDQUFpQlksTUFBakI7QUFFQSxhQUFPQSxNQUFQO0FBQ0g7QUFoREw7QUFBQTtBQUFBLCtCQWtEZXhDLEdBbERmLEVBa0RvQjtBQUNaLFVBQUl3QyxNQUFNLEdBQUcsRUFBYjtBQUFBLFVBQWlCOEMsSUFBSSxHQUFHLElBQXhCOztBQUVBLFVBQUl0RixHQUFHLFlBQVltbUIsNENBQW5CLEVBQTBCO0FBQ3RCLFlBQUl6a0IsS0FBSyxHQUFHLEtBQUtraEIsTUFBTCxDQUFZamhCLE9BQVosQ0FBb0IzQixHQUFwQixDQUFaOztBQUNBLFlBQUkwQixLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2RjLGdCQUFNLEdBQUc4QyxJQUFJLENBQUNzZCxNQUFMLENBQVk3Z0IsTUFBWixDQUFtQkwsS0FBbkIsRUFBMEIsQ0FBMUIsQ0FBVDtBQUNIO0FBQ0osT0FMRCxNQU1LO0FBQ0QsYUFBS2toQixNQUFMLENBQVk3ZixNQUFaLENBQW1CLFVBQVU2akIsSUFBVixFQUFnQjtBQUMvQixpQkFBT0EsSUFBSSxDQUFDRSxRQUFMLENBQWM5bUIsR0FBZCxDQUFQO0FBQ0gsU0FGRCxFQUVHaUMsT0FGSCxDQUVXLFVBQVU4VixLQUFWLEVBQWlCO0FBQ3hCLGNBQUlyVyxLQUFLLEdBQUc0RCxJQUFJLENBQUNzZCxNQUFMLENBQVlqaEIsT0FBWixDQUFvQm9XLEtBQXBCLENBQVo7QUFDQUEsZUFBSyxDQUFDclgsT0FBTjtBQUNBOEIsZ0JBQU0sR0FBRzhDLElBQUksQ0FBQ3NkLE1BQUwsQ0FBWTdnQixNQUFaLENBQW1CTCxLQUFuQixFQUEwQixDQUExQixDQUFUO0FBQ0gsU0FORDtBQU9IOztBQUVELGFBQU9jLE1BQU0sQ0FBQ29HLE1BQVAsR0FBZ0IsQ0FBaEIsR0FBb0JwRyxNQUFNLENBQUMsQ0FBRCxDQUExQixHQUFnQyxJQUF2QztBQUNIO0FBdEVMO0FBQUE7QUFBQSwrQkF3RWVva0IsSUF4RWYsRUF3RXFCO0FBQ2IsVUFBSUEsSUFBSSxDQUFDamdCLElBQUwsSUFBYSxJQUFqQixFQUF1QjtBQUNuQixjQUFNLElBQUk5RSxLQUFKLENBQVUsK0JBQVYsQ0FBTjtBQUNIOztBQUVEK2tCLFVBQUksQ0FBQ2pnQixJQUFMLEdBQVksSUFBWjtBQUNBaWdCLFVBQUksQ0FBQ3pDLE9BQUwsQ0FBYSxLQUFLNkMsY0FBbEI7QUFDQSxXQUFLcEUsTUFBTCxDQUFZaGhCLElBQVosQ0FBaUJnbEIsSUFBakI7QUFDQSxhQUFPQSxJQUFQO0FBQ0g7QUFqRkw7QUFBQTtBQUFBLGtDQW1Ga0I7QUFDVixhQUFPLEtBQUsvWSxPQUFMLENBQWFtRCxLQUFiLENBQW1CLElBQW5CLENBQVA7QUFDSDtBQXJGTDtBQUFBO0FBQUEsa0NBdUZrQjtBQUFBOztBQUNWLGFBQU8sS0FBS3hGLFVBQUwsQ0FBZ0I2SCxHQUFoQixDQUFvQixVQUFBM0gsS0FBSyxFQUFJO0FBQ2hDLGVBQU8sTUFBSSxDQUFDbUMsT0FBTCxDQUFhbUQsS0FBYixDQUFtQnRGLEtBQW5CLENBQVA7QUFDSCxPQUZNLEVBRUo1QixJQUZJLENBRUMsRUFGRCxDQUFQO0FBR0g7QUEzRkw7QUFBQTtBQUFBLGdDQTZGZ0JtZCxHQTdGaEIsRUE2RnFCO0FBQ2IsVUFBSTNoQixJQUFJLEdBQUcsSUFBWDtBQUNBNGhCLCtEQUFRLENBQUNELEdBQUQsQ0FBUixDQUFjaGxCLE9BQWQsQ0FBc0IsVUFBVTZmLEtBQVYsRUFBaUI7QUFDbkNBLGFBQUssQ0FBQ3BhLFVBQU4sR0FBbUIsSUFBbkI7QUFDQXBDLFlBQUksQ0FBQ29DLFVBQUwsQ0FBZ0JDLFlBQWhCLENBQTZCckMsSUFBN0IsRUFBbUN3YyxLQUFuQztBQUNILE9BSEQ7QUFJQXhjLFVBQUksQ0FBQ29DLFVBQUwsQ0FBZ0JpRSxXQUFoQixDQUE0QnJHLElBQTVCO0FBQ0g7QUFwR0w7QUFBQTtBQUFBLGdDQXNHZ0IyaEIsR0F0R2hCLEVBc0dxQjtBQUNiLFVBQUkzaEIsSUFBSSxHQUFHLElBQVg7QUFDQSxXQUFLNmhCLGVBQUw7QUFDQUQsK0RBQVEsQ0FBQ0QsR0FBRCxDQUFSLENBQWNobEIsT0FBZCxDQUFzQixVQUFVNmYsS0FBVixFQUFpQjtBQUNuQ0EsYUFBSyxDQUFDcGEsVUFBTixHQUFtQixJQUFuQjtBQUNBcEMsWUFBSSxDQUFDa0MsV0FBTCxDQUFpQnNhLEtBQWpCO0FBQ0gsT0FIRDtBQUlIO0FBN0dMO0FBQUE7QUFBQSxrQ0ErR2tCO0FBQ1YsVUFBSTdULElBQUksR0FBRyxJQUFJd1ksSUFBSixDQUFTLEtBQUt6RixRQUFkLEVBQXdCLEtBQUtsYSxTQUE3QixDQUFYO0FBRUFtSCxVQUFJLENBQUMyVSxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZdlAsR0FBWixDQUFnQixVQUFVek0sS0FBVixFQUFpQjtBQUMzQyxZQUFJd2dCLElBQUksR0FBR3hnQixLQUFLLENBQUN5Z0IsU0FBTixFQUFYO0FBQ0FELFlBQUksQ0FBQ3pnQixJQUFMLEdBQVlzSCxJQUFaO0FBQ0EsZUFBT21aLElBQVA7QUFDSCxPQUphLENBQWQ7QUFNQSxhQUFPblosSUFBUDtBQUNIO0FBekhMO0FBQUE7QUFBQSxnQ0EySGdCO0FBQ1IsV0FBSzJVLE1BQUwsQ0FBWTNnQixPQUFaLENBQW9CLFVBQVUya0IsSUFBVixFQUFnQjtBQUNoQ0EsWUFBSSxDQUFDbG1CLE9BQUw7QUFDSCxPQUZEO0FBSUEsV0FBS2tpQixNQUFMLENBQVloYSxNQUFaLEdBQXFCLENBQXJCO0FBQ0g7QUFqSUw7O0FBQUE7QUFBQSxFQUEwQjBkLDRDQUExQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMTyxJQUFJRixRQUFRLEdBQUc7QUFDbEJiLFNBQU8sRUFBRSxDQURTO0FBRWxCYyxXQUFTLEVBQUUsQ0FGTztBQUdsQnJSLE1BQUksRUFBRSxDQUhZO0FBSWxCc1MsY0FBWSxFQUFFLENBSkk7QUFLbEJDLGlCQUFlLEVBQUUsQ0FMQztBQU1sQkMsUUFBTSxFQUFFLENBTlU7QUFPbEJDLHVCQUFxQixFQUFFLENBUEw7QUFRbEJqQixTQUFPLEVBQUUsQ0FSUztBQVNsQjVpQixVQUFRLEVBQUUsQ0FUUTtBQVVsQjhqQixjQUFZLEVBQUUsRUFWSTtBQVdsQkMsa0JBQWdCLEVBQUUsRUFYQTtBQVlsQkMsVUFBUSxFQUFFO0FBWlEsQ0FBZixDLENBZVA7O0FBQ08sSUFBTXRCLEtBQWI7QUFDSSxpQkFBWW5ZLElBQVosRUFBa0JqTyxJQUFsQixFQUF3QmtELEtBQXhCLEVBQStCO0FBQUE7O0FBQzNCLFNBQUtnakIsUUFBTCxHQUFnQmpZLElBQWhCO0FBQ0EsU0FBSzZTLFFBQUwsR0FBZ0I5Z0IsSUFBaEI7QUFDQSxTQUFLNEcsU0FBTCxHQUFpQjFELEtBQWpCO0FBQ0EsU0FBS29JLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLcWMsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQUt4YixTQUFMLEdBQWlCLElBQWpCO0FBQ0EsU0FBSzNFLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxTQUFLd0UsZUFBTCxHQUF1QixJQUF2QjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxTQUFLK1UsUUFBTCxHQUFnQixFQUFoQjtBQUNIOztBQVpMO0FBQUE7QUFBQSw4QkFjY3hWLEtBZGQsRUFjcUI7QUFDYkEsV0FBSyxDQUFDaEUsVUFBTixHQUFtQixJQUFuQjtBQUNBLFdBQUs4RCxVQUFMLENBQWdCNUosSUFBaEIsQ0FBcUI4SixLQUFyQjtBQUNIO0FBakJMO0FBQUE7QUFBQSxtQ0FtQm1CO0FBQ1gsVUFBSSxLQUFLRixVQUFMLENBQWdCNUMsTUFBaEIsS0FBMkIsQ0FBL0IsRUFBa0M7QUFDOUI7QUFDSDs7QUFFRCxVQUFJdEQsSUFBSSxHQUFHLElBQVg7O0FBRUEsVUFBSSxLQUFLa0csVUFBTCxDQUFnQjVDLE1BQWhCLEtBQTJCLENBQS9CLEVBQWtDO0FBQzlCLGFBQUtpZixVQUFMLEdBQWtCLEtBQUtyYyxVQUFMLENBQWdCLENBQWhCLENBQWxCO0FBQ0EsYUFBS2EsU0FBTCxHQUFpQixLQUFLYixVQUFMLENBQWdCLENBQWhCLENBQWpCO0FBQ0gsT0FIRCxNQUlLO0FBQ0QsYUFBS3FjLFVBQUwsR0FBa0IsS0FBS3JjLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBbEI7QUFDQSxhQUFLYSxTQUFMLEdBQWlCLEtBQUtiLFVBQUwsQ0FBZ0IsS0FBS0EsVUFBTCxDQUFnQjVDLE1BQWhCLEdBQXlCLENBQXpDLENBQWpCO0FBRUEsYUFBSzRDLFVBQUwsQ0FBZ0J2SixPQUFoQixDQUF3QixVQUFVeUosS0FBVixFQUFpQmhLLEtBQWpCLEVBQXdCO0FBQzVDLGNBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2JnSyxpQkFBSyxDQUFDUyxXQUFOLEdBQW9CN0csSUFBSSxDQUFDa0csVUFBTCxDQUFnQjlKLEtBQUssR0FBRyxDQUF4QixDQUFwQjtBQUNBO0FBQ0g7O0FBQ0QsY0FBSUEsS0FBSyxLQUFNNEQsSUFBSSxDQUFDa0csVUFBTCxDQUFnQjVDLE1BQWhCLEdBQXlCLENBQXhDLEVBQTRDO0FBQ3hDOEMsaUJBQUssQ0FBQ1EsZUFBTixHQUF3QjVHLElBQUksQ0FBQ2tHLFVBQUwsQ0FBZ0I5SixLQUFLLEdBQUcsQ0FBeEIsQ0FBeEI7QUFDQTtBQUNIOztBQUNEZ0ssZUFBSyxDQUFDUSxlQUFOLEdBQXdCNUcsSUFBSSxDQUFDa0csVUFBTCxDQUFnQjlKLEtBQUssR0FBRyxDQUF4QixDQUF4QjtBQUNBZ0ssZUFBSyxDQUFDUyxXQUFOLEdBQW9CN0csSUFBSSxDQUFDa0csVUFBTCxDQUFnQjlKLEtBQUssR0FBRyxDQUF4QixDQUFwQjtBQUNILFNBWEQ7QUFZSDs7QUFFRCxXQUFLOEosVUFBTCxDQUFnQnZKLE9BQWhCLENBQXdCLFVBQVV5SixLQUFWLEVBQWlCO0FBQ3JDQSxhQUFLLENBQUNvYyxZQUFOO0FBQ0gsT0FGRDtBQUdIO0FBbkRMO0FBQUE7QUFBQSw0Q0FxRDRCO0FBQ3BCLFdBQUtwZ0IsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFdBQUt3RSxlQUFMLEdBQXVCLElBQXZCO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNIO0FBekRMO0FBQUE7QUFBQSw2QkEyRGE7QUFDTCxVQUFJLEtBQUt6RSxVQUFMLElBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLGFBQUtBLFVBQUwsQ0FBZ0JpRSxXQUFoQixDQUE0QixJQUE1QjtBQUNIO0FBQ0o7QUEvREw7QUFBQTtBQUFBLG9DQWlFb0I7QUFDWixhQUFPLEtBQUtILFVBQUwsQ0FBZ0I1QyxNQUFoQixLQUEyQixDQUFsQztBQUNIO0FBbkVMO0FBQUE7QUFBQSxzQ0FxRXNCO0FBQ2QsV0FBSzRDLFVBQUwsQ0FBZ0J2SixPQUFoQixDQUF3QixVQUFVeUosS0FBVixFQUFpQjtBQUNyQ0EsYUFBSyxDQUFDaEwsT0FBTjtBQUNILE9BRkQ7QUFHQSxXQUFLOEssVUFBTCxDQUFnQjVDLE1BQWhCLEdBQXlCLENBQXpCO0FBQ0g7QUExRUw7QUFBQTtBQUFBLGdDQTRFZ0I4QyxLQTVFaEIsRUE0RXVCO0FBQ2YsVUFBSUEsS0FBSyxDQUFDaEUsVUFBTixJQUFvQixJQUF4QixFQUE4QjtBQUMxQmdFLGFBQUssQ0FBQ2hFLFVBQU4sQ0FBaUJpRSxXQUFqQixDQUE2QkQsS0FBN0I7QUFDSDs7QUFFREEsV0FBSyxDQUFDaEUsVUFBTixHQUFtQixJQUFuQjs7QUFFQSxVQUFJLEtBQUs4RCxVQUFMLENBQWdCNUMsTUFBaEIsS0FBMkIsQ0FBL0IsRUFBa0M7QUFDOUIsYUFBS2lmLFVBQUwsR0FBa0JuYyxLQUFsQjtBQUNILE9BRkQsTUFHSztBQUNELGFBQUtXLFNBQUwsQ0FBZUYsV0FBZixHQUE2QlQsS0FBN0I7QUFDQUEsYUFBSyxDQUFDUSxlQUFOLEdBQXdCLEtBQUtHLFNBQTdCO0FBQ0g7O0FBRURYLFdBQUssQ0FBQ3lZLE9BQU4sQ0FBYyxLQUFLNkMsY0FBbkI7QUFDQSxXQUFLM2EsU0FBTCxHQUFpQlgsS0FBakI7QUFDQSxXQUFLRixVQUFMLENBQWdCNUosSUFBaEIsQ0FBcUI4SixLQUFyQjtBQUNBLGFBQU9BLEtBQVA7QUFDSDtBQS9GTDtBQUFBO0FBQUEsaUNBaUdpQnFjLFFBakdqQixFQWlHMkJDLFFBakczQixFQWlHcUM7QUFDN0IsVUFBSUEsUUFBUSxDQUFDdGdCLFVBQVQsSUFBdUIsSUFBM0IsRUFBaUM7QUFDN0JzZ0IsZ0JBQVEsQ0FBQ3RnQixVQUFULENBQW9CaUUsV0FBcEIsQ0FBZ0NxYyxRQUFoQztBQUNIOztBQUNELFVBQUl0bUIsS0FBSyxHQUFHLEtBQUs4SixVQUFMLENBQWdCN0osT0FBaEIsQ0FBd0JvbUIsUUFBeEIsQ0FBWjs7QUFDQSxVQUFJcm1CLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDZCxjQUFNLElBQUlHLEtBQUosQ0FBVSwyQ0FBVixDQUFOO0FBQ0g7O0FBRURtbUIsY0FBUSxDQUFDdGdCLFVBQVQsR0FBc0IsSUFBdEI7O0FBRUEsVUFBSXFnQixRQUFRLENBQUM3YixlQUFULElBQTRCLElBQWhDLEVBQXNDO0FBQ2xDOGIsZ0JBQVEsQ0FBQzliLGVBQVQsR0FBMkI2YixRQUFRLENBQUM3YixlQUFwQztBQUNBNmIsZ0JBQVEsQ0FBQzdiLGVBQVQsQ0FBeUJDLFdBQXpCLEdBQXVDNmIsUUFBdkM7QUFDSDs7QUFFREEsY0FBUSxDQUFDN2IsV0FBVCxHQUF1QjRiLFFBQXZCO0FBQ0FBLGNBQVEsQ0FBQzdiLGVBQVQsR0FBMkI4YixRQUEzQjs7QUFFQSxVQUFJdG1CLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsYUFBS21tQixVQUFMLEdBQWtCRyxRQUFsQjtBQUNIOztBQUVEQSxjQUFRLENBQUM3RCxPQUFULENBQWlCLEtBQUs2QyxjQUF0QjtBQUNBLFdBQUt4YixVQUFMLENBQWdCekosTUFBaEIsQ0FBdUJMLEtBQXZCLEVBQThCLENBQTlCLEVBQWlDc21CLFFBQWpDO0FBQ0EsYUFBT0EsUUFBUDtBQUNIO0FBM0hMO0FBQUE7QUFBQSxnQ0E2SGdCRCxRQTdIaEIsRUE2SDBCQyxRQTdIMUIsRUE2SG9DO0FBQzVCLFVBQUlELFFBQVEsQ0FBQzViLFdBQVQsSUFBd0IsSUFBNUIsRUFBa0M7QUFDOUIsZUFBTyxLQUFLM0UsV0FBTCxDQUFpQndnQixRQUFqQixDQUFQO0FBQ0g7O0FBRUQsYUFBTyxLQUFLcmdCLFlBQUwsQ0FBa0JvZ0IsUUFBUSxDQUFDNWIsV0FBM0IsRUFBd0M2YixRQUF4QyxDQUFQO0FBQ0g7QUFuSUw7QUFBQTtBQUFBLGdDQXFJZ0J0YyxLQXJJaEIsRUFxSXVCO0FBQ2YsVUFBSWhLLEtBQUssR0FBRyxLQUFLOEosVUFBTCxDQUFnQjdKLE9BQWhCLENBQXdCK0osS0FBeEIsQ0FBWjs7QUFDQSxVQUFJaEssS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNkLGNBQU0sSUFBSUcsS0FBSixDQUFVLDhDQUFWLENBQU47QUFDSDs7QUFFRCxVQUFJNkosS0FBSyxDQUFDUSxlQUFOLElBQXlCLElBQTdCLEVBQW1DO0FBQy9CUixhQUFLLENBQUNRLGVBQU4sQ0FBc0JDLFdBQXRCLEdBQW9DVCxLQUFLLENBQUNTLFdBQTFDO0FBQ0g7O0FBRUQsVUFBSVQsS0FBSyxDQUFDUyxXQUFOLElBQXFCLElBQXpCLEVBQStCO0FBQzNCVCxhQUFLLENBQUNTLFdBQU4sQ0FBa0JELGVBQWxCLEdBQW9DUixLQUFLLENBQUNRLGVBQTFDO0FBQ0g7O0FBRUQsVUFBSXhLLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsYUFBS21tQixVQUFMLEdBQWtCbmMsS0FBSyxDQUFDUyxXQUF4QjtBQUNIOztBQUVELFVBQUl6SyxLQUFLLEtBQU0sS0FBSzhKLFVBQUwsQ0FBZ0I1QyxNQUFoQixHQUF5QixDQUF4QyxFQUE0QztBQUN4QyxhQUFLeUQsU0FBTCxHQUFpQlgsS0FBSyxDQUFDUSxlQUF2QjtBQUNIOztBQUVEUixXQUFLLENBQUN1YyxxQkFBTjtBQUNBLFdBQUt6YyxVQUFMLENBQWdCekosTUFBaEIsQ0FBdUJMLEtBQXZCLEVBQThCLENBQTlCO0FBRUEsYUFBT2dLLEtBQVA7QUFDSDtBQS9KTDtBQUFBO0FBQUEsaUNBaUtpQnFjLFFBaktqQixFQWlLMkJDLFFBakszQixFQWlLcUM7QUFDN0IsVUFBSUEsUUFBUSxDQUFDdGdCLFVBQVQsSUFBdUIsSUFBM0IsRUFBaUM7QUFDN0JzZ0IsZ0JBQVEsQ0FBQ3RnQixVQUFULENBQW9CaUUsV0FBcEIsQ0FBZ0NxYyxRQUFoQztBQUNIOztBQUNELFVBQUl0bUIsS0FBSyxHQUFHLEtBQUs4SixVQUFMLENBQWdCN0osT0FBaEIsQ0FBd0JvbUIsUUFBeEIsQ0FBWjs7QUFDQSxVQUFJcm1CLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDZCxjQUFNLElBQUlHLEtBQUosQ0FBVSwyQ0FBVixDQUFOO0FBQ0g7O0FBRURtbUIsY0FBUSxDQUFDdGdCLFVBQVQsR0FBc0IsSUFBdEI7QUFDQXNnQixjQUFRLENBQUM5YixlQUFULEdBQTJCNmIsUUFBUSxDQUFDN2IsZUFBcEM7QUFDQThiLGNBQVEsQ0FBQzdiLFdBQVQsR0FBdUI0YixRQUFRLENBQUM1YixXQUFoQzs7QUFFQSxVQUFJLEtBQUswYixVQUFMLEtBQW9CRSxRQUF4QixFQUFrQztBQUM5QixhQUFLRixVQUFMLEdBQWtCRyxRQUFsQjtBQUNIOztBQUVELFVBQUksS0FBSzNiLFNBQUwsS0FBbUIwYixRQUF2QixFQUFpQztBQUM3QixhQUFLMWIsU0FBTCxHQUFpQjJiLFFBQWpCO0FBQ0g7O0FBRURELGNBQVEsQ0FBQ0UscUJBQVQ7QUFDQUQsY0FBUSxDQUFDN0QsT0FBVCxDQUFpQixLQUFLNkMsY0FBdEI7QUFDQSxXQUFLeGIsVUFBTCxDQUFnQnpKLE1BQWhCLENBQXVCTCxLQUF2QixFQUE4QixDQUE5QixFQUFpQ3NtQixRQUFqQztBQUNBLGFBQU9BLFFBQVA7QUFDSDtBQTFMTDtBQUFBO0FBQUEsOEJBNExjRSxJQTVMZCxFQTRMb0I7QUFDWixVQUFJamEsSUFBSSxHQUFHLEtBQUtrYSxXQUFMLENBQWlCRCxJQUFqQixDQUFYOztBQUVBLFVBQUdBLElBQUgsRUFBUztBQUNMamEsWUFBSSxDQUFDekMsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCNkgsR0FBaEIsQ0FBb0IsVUFBVTNILEtBQVYsRUFBaUI7QUFDbkQsaUJBQU9BLEtBQUssQ0FBQzJiLFNBQU4sQ0FBZ0JhLElBQWhCLENBQVA7QUFDSCxTQUZpQixDQUFsQjtBQUdBamEsWUFBSSxDQUFDNlosWUFBTDtBQUNIOztBQUVELGFBQU83WixJQUFQO0FBQ0g7QUF2TUw7QUFBQTtBQUFBLDhCQXlNYztBQUNOLFdBQUt3WCxTQUFMLElBQWtCLEtBQUtBLFNBQUwsRUFBbEI7QUFFQSxXQUFLamEsVUFBTCxDQUFnQjZILEdBQWhCLENBQW9CLFVBQVUzSCxLQUFWLEVBQWlCO0FBQ2pDQSxhQUFLLENBQUNoTCxPQUFOO0FBQ0gsT0FGRDtBQUlBLFdBQUt5RixNQUFMO0FBQ0EsV0FBSzhoQixxQkFBTDtBQUNBLFdBQUt6YyxVQUFMLENBQWdCNUMsTUFBaEIsR0FBeUIsQ0FBekI7QUFDQSxXQUFLaWYsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFdBQUt4YixTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBSytiLGFBQUwsR0FBcUIsSUFBckI7QUFDSCxLQXROTCxDQXdOSTtBQUVBOztBQTFOSjs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVPLElBQU1DLEtBQWI7QUFBQTs7QUFDSSxpQkFBWWpsQixLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsK0VBQU1nakIsK0NBQVEsQ0FBQ3BSLElBQWYsRUFBcUIsT0FBckIsRUFBOEI1UixLQUE5QjtBQUNBLFVBQUtoQyxHQUFMLEdBQVcsSUFBWDtBQUZlO0FBR2xCOztBQUpMO0FBQUE7QUFBQSxrQ0FNa0I7QUFDVixhQUFPLElBQUlpbkIsS0FBSixDQUFVLEtBQUtySCxRQUFmLEVBQXlCLEtBQUtsYSxTQUE5QixDQUFQO0FBQ0g7QUFSTDs7QUFBQTtBQUFBLEVBQTJCd2YsNENBQTNCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFTyxJQUFNZ0MsS0FBYjtBQUFBOztBQUNJLG1CQUFjO0FBQUE7O0FBQUEsOEVBQ0psQywrQ0FBUSxDQUFDc0IsWUFETDtBQUViOztBQUhMO0FBQUEsRUFBMkJwQiw0Q0FBM0IsRTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNpQyxNQUFULENBQWdCdEIsR0FBaEIsRUFBcUI7QUFDakJBLEtBQUcsR0FBR25mLGlEQUFBLENBQWlCbWYsR0FBakIsQ0FBTjtBQUNBLFNBQU8sSUFBSXVCLG1EQUFKLEdBQWUxVSxHQUFmLENBQW1CbVQsR0FBbkIsQ0FBUDtBQUNIOztBQUVELFNBQVNDLFFBQVQsQ0FBa0JELEdBQWxCLEVBQXVCO0FBQ25CQSxLQUFHLEdBQUduZixpREFBQSxDQUFpQm1mLEdBQWpCLENBQU47QUFDQSxTQUFPLElBQUl3QixxREFBSixDQUFjLElBQUlELG1EQUFKLEVBQWQsRUFBOEJ4VSxLQUE5QixDQUFvQ2lULEdBQXBDLENBQVA7QUFDSDs7QUFFRCxTQUFTaEMsTUFBVCxDQUFnQm5ELEtBQWhCLEVBQXVCO0FBQ25CLFNBQU9BLEtBQUssQ0FBQ3NFLFFBQU4sS0FBbUJBLCtDQUFRLENBQUNiLE9BQW5DO0FBQ0g7O0FBRUQsU0FBU21ELE9BQVQsQ0FBaUI1RyxLQUFqQixFQUF3QjtBQUNwQixTQUFPQSxLQUFLLENBQUNzRSxRQUFOLEtBQW1CQSwrQ0FBUSxDQUFDQyxTQUFuQztBQUNIOztBQUVELFNBQVNyRSxPQUFULENBQWlCRixLQUFqQixFQUF3QjtBQUNwQixTQUFPQSxLQUFLLENBQUNzRSxRQUFOLEtBQW1CQSwrQ0FBUSxDQUFDcFIsSUFBbkM7QUFDSDs7QUFFRCxTQUFTa04sVUFBVCxDQUFvQkosS0FBcEIsRUFBMkI7QUFDdkIsU0FBT0EsS0FBSyxDQUFDc0UsUUFBTixLQUFtQkEsK0NBQVEsQ0FBQ0ksT0FBbkM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkQ7QUFFTyxJQUFNRyxVQUFiO0FBQ0ksd0JBQWM7QUFBQTtBQUViOztBQUhMO0FBQUE7QUFBQSwwQkFLVTdFLEtBTFYsRUFLaUI7QUFDVCxVQUFJRSx3REFBTyxDQUFDRixLQUFELENBQVgsRUFBb0I7QUFDaEIsZUFBTyxLQUFLNkcsU0FBTCxDQUFlN0csS0FBZixDQUFQO0FBQ0g7O0FBRUQsVUFBR0ksMkRBQVUsQ0FBQ0osS0FBRCxDQUFiLEVBQXNCO0FBQ2xCLGVBQU8sS0FBSzhHLFlBQUwsQ0FBa0I5RyxLQUFsQixDQUFQO0FBQ0g7O0FBRUQsYUFBTyxLQUFLK0csWUFBTCxDQUFrQi9HLEtBQWxCLENBQVA7QUFDSDtBQWZMO0FBQUE7QUFBQSxpQ0FpQmlCbmIsSUFqQmpCLEVBaUJ1QjtBQUFBOztBQUNmLFVBQUltaUIsT0FBTyxHQUFHbmlCLElBQUksQ0FBQ2ljLE1BQUwsQ0FBWXZQLEdBQVosQ0FBZ0IsVUFBQ3pNLEtBQUQsRUFBVztBQUNqQyxlQUFPLEtBQUksQ0FBQ21pQixjQUFMLENBQW9CbmlCLEtBQXBCLENBQVA7QUFDSCxPQUZTLEVBRVBrRCxJQUZPLENBRUYsR0FGRSxDQUFkO0FBQUEsVUFHSWtmLFFBQVEsR0FBR3JpQixJQUFJLENBQUM2RSxVQUFMLENBQWdCNkgsR0FBaEIsQ0FBb0IsVUFBQzNILEtBQUQsRUFBVztBQUN0QyxlQUFPLEtBQUksQ0FBQ3NGLEtBQUwsQ0FBV3RGLEtBQVgsQ0FBUDtBQUNILE9BRlUsRUFFUjVCLElBRlEsQ0FFSCxFQUZHLENBSGY7O0FBT0EsVUFBR2dmLE9BQUgsRUFBWTtBQUNSQSxlQUFPLEdBQUcsTUFBTUEsT0FBaEI7QUFDSDs7QUFFRCxVQUFJN0IsR0FBRyxHQUFHLE1BQU10Z0IsSUFBSSxDQUFDcWEsUUFBWCxHQUFzQjhILE9BQXRCLEdBQWdDLEdBQWhDLEdBQXNDRSxRQUFoRDs7QUFFQSxVQUFJLENBQUNyaUIsSUFBSSxDQUFDK2YsVUFBVixFQUFzQjtBQUNsQk8sV0FBRyxJQUFLLE9BQU90Z0IsSUFBSSxDQUFDcWEsUUFBWixHQUF1QixHQUEvQjtBQUNIOztBQUVELGFBQU9pRyxHQUFQO0FBQ0g7QUFwQ0w7QUFBQTtBQUFBLG1DQXNDbUJyZ0IsS0F0Q25CLEVBc0MwQjtBQUNsQixhQUFPQSxLQUFLLENBQUNvYSxRQUFOLElBQWtCcGEsS0FBSyxDQUFDRSxTQUFOLElBQW1CLElBQW5CLEdBQTBCLEVBQTFCLEdBQWdDLE1BQU1GLEtBQUssQ0FBQzhRLEtBQVosR0FBb0I5USxLQUFLLENBQUNFLFNBQTFCLEdBQXNDRixLQUFLLENBQUM4USxLQUE5RixDQUFQO0FBQ0g7QUF4Q0w7QUFBQTtBQUFBLDhCQTBDYzBNLEtBMUNkLEVBMENxQjtBQUNiLGFBQU9BLEtBQUssQ0FBQ3RkLFNBQWI7QUFDSDtBQTVDTDtBQUFBO0FBQUEsaUNBOENpQndkLEtBOUNqQixFQThDd0I7QUFDaEIsYUFBT0EsS0FBSyxDQUFDeGQsU0FBYjtBQUNIO0FBaERMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFTyxJQUFNMGhCLFFBQWI7QUFBQTs7QUFDSSxvQkFBWTdqQixPQUFaLEVBQXFCO0FBQUE7O0FBQUEsaUZBQ1hBLE9BRFc7QUFFcEI7O0FBSEw7QUFBQTtBQUFBLDJDQUsyQnVRLEVBTDNCLEVBSytCO0FBQ3ZCLGFBQVEsT0FBT0EsRUFBUCxJQUFhQSxFQUFFLElBQUksR0FBbkIsSUFDSixPQUFPQSxFQUFQLElBQWFBLEVBQUUsSUFBSSxHQURmLElBRUosUUFBUUEsRUFGSixJQUVVQSxFQUFFLEtBQUssR0FGakIsSUFHSkEsRUFBRSxLQUFLLEdBSEgsSUFHVUEsRUFBRSxLQUFLLEdBSGpCLElBR3dCQSxFQUFFLEtBQUssR0FIdkM7QUFJSDtBQVZMO0FBQUE7QUFBQSw4Q0FZOEJBLEVBWjlCLEVBWWtDMEIsRUFabEMsRUFZc0M7QUFDOUIsYUFBTyxLQUFLSCxzQkFBTCxDQUE0QnZCLEVBQTVCLEVBQWdDMEIsRUFBaEMsS0FBdUMsS0FBS3ZCLFFBQUwsQ0FBY0gsRUFBZCxDQUF2QyxJQUE0REEsRUFBRSxLQUFLLEdBQW5FLElBQTBFQSxFQUFFLEtBQUssR0FBeEY7QUFDSDtBQWRMO0FBQUE7QUFBQSxpQ0FnQmlCK1QsR0FoQmpCLEVBZ0JzQjtBQUNkLFVBQUkxUyxHQUFHLEdBQUcwUyxHQUFHLENBQUNyZ0IsTUFBZDtBQUNBLGFBQVEsS0FBS2xILEtBQUwsR0FBYTZVLEdBQWIsSUFBb0IsS0FBS3ZCLElBQUwsQ0FBVXBNLE1BQS9CLEdBQTBDcWdCLEdBQUcsS0FBSyxLQUFLalUsSUFBTCxDQUFVd08sTUFBVixDQUFpQixLQUFLOWhCLEtBQXRCLEVBQTZCNlUsR0FBN0IsQ0FBbEQsR0FBdUYsS0FBOUY7QUFDSCxLQW5CTCxDQXFCSTs7QUFyQko7QUFBQTtBQUFBLGdDQXNCZ0IyUyxLQXRCaEIsRUFzQnVCaFMsR0F0QnZCLEVBc0I0QjtBQUNwQixVQUFJRCxLQUFLLEdBQUcsS0FBS3ZWLEtBQWpCO0FBQ0EsV0FBS0EsS0FBTCxJQUFjd25CLEtBQUssQ0FBQ3RnQixNQUFwQjtBQUNBLFVBQUkrTyxNQUFNLEdBQUcsRUFBYjtBQUNBLFVBQUlDLFNBQVMsR0FBR3NSLEtBQWhCOztBQUNBLGFBQU8sS0FBS3huQixLQUFMLEdBQWEsS0FBS3NULElBQUwsQ0FBVXBNLE1BQTlCLEVBQXNDO0FBQ2xDLFlBQUlzTSxFQUFFLEdBQUcsS0FBS0YsSUFBTCxDQUFVRyxNQUFWLENBQWlCLEtBQUt6VCxLQUF0QixDQUFUO0FBQ0FrVyxpQkFBUyxJQUFJMUMsRUFBYjs7QUFDQSxZQUFJLEtBQUtpVSxZQUFMLENBQWtCalMsR0FBbEIsQ0FBSixFQUE0QjtBQUN4QlUsbUJBQVMsSUFBSVYsR0FBYjtBQUNBLGVBQUt4VixLQUFMLElBQWN3VixHQUFHLENBQUN0TyxNQUFsQjtBQUNBLGVBQUtxTSxNQUFMLENBQVlyVCxJQUFaLENBQWlCO0FBQ2JGLGlCQUFLLEVBQUV1VixLQURNO0FBRWJqQyxnQkFBSSxFQUFFNEMsU0FGTztBQUdiNE8sbUJBQU8sRUFBRSxJQUhJO0FBSWJwakIsaUJBQUssRUFBRXVVO0FBSk0sV0FBakI7QUFNQTtBQUNILFNBVkQsTUFVTztBQUNIQSxnQkFBTSxJQUFJekMsRUFBVjtBQUNIOztBQUNELGFBQUt4VCxLQUFMO0FBQ0g7O0FBQ0QsV0FBSzBVLFVBQUwsQ0FBZ0Isc0JBQWhCLEVBQXdDYSxLQUF4QztBQUNILEtBOUNMLENBZ0RJOztBQWhESjtBQUFBO0FBQUEsK0JBaURlO0FBQ1AsVUFBSUEsS0FBSyxHQUFHLEtBQUt2VixLQUFqQjtBQUNBLFVBQUlpVyxNQUFNLEdBQUcsRUFBYjs7QUFDQSxhQUFPLEtBQUtqVyxLQUFMLEdBQWEsS0FBS3NULElBQUwsQ0FBVXBNLE1BQTlCLEVBQXNDO0FBQ2xDLFlBQUlzTSxFQUFFLEdBQUcsS0FBS0YsSUFBTCxDQUFVRyxNQUFWLENBQWlCLEtBQUt6VCxLQUF0QixDQUFUO0FBQ0EsWUFBSW1VLEdBQUcsR0FBRyxLQUFLUCxJQUFMLEVBQVY7O0FBQ0EsWUFBS0osRUFBRSxLQUFLLEdBQVAsS0FBZSxLQUFLTSxpQkFBTCxDQUF1QkssR0FBdkIsS0FBK0JBLEdBQUcsS0FBSyxHQUF0RCxDQUFELElBQWdFLEtBQUtzVCxZQUFMLENBQWtCLE1BQWxCLENBQXBFLEVBQStGO0FBQzNGO0FBQ0g7O0FBQ0R4UixjQUFNLElBQUl6QyxFQUFWO0FBQ0EsYUFBS3hULEtBQUw7QUFDSDs7QUFDRCxXQUFLdVQsTUFBTCxDQUFZclQsSUFBWixDQUFpQjtBQUNiRixhQUFLLEVBQUV1VixLQURNO0FBRWJqQyxZQUFJLEVBQUUyQyxNQUZPO0FBR2J5UixlQUFPLEVBQUU7QUFISSxPQUFqQjtBQUtILEtBbEVMLENBb0VJOztBQXBFSjtBQUFBO0FBQUEsNEJBcUVZRixLQXJFWixFQXFFbUJoUyxHQXJFbkIsRUFxRXdCbVMsT0FyRXhCLEVBcUVpQ0MsT0FyRWpDLEVBcUUwQztBQUNsQyxXQUFLclUsTUFBTCxDQUFZclQsSUFBWixDQUFpQjtBQUFFRixhQUFLLEVBQUUsS0FBS0EsS0FBZDtBQUFxQnNULFlBQUksRUFBRWtVLEtBQTNCO0FBQWtDSyxXQUFHLEVBQUUsSUFBdkM7QUFBNkNGLGVBQU8sRUFBRUEsT0FBdEQ7QUFBK0RILGFBQUssRUFBRSxJQUF0RTtBQUE0RUksZUFBTyxFQUFFQTtBQUFyRixPQUFqQjtBQUNBLFdBQUs1bkIsS0FBTCxJQUFjd25CLEtBQUssQ0FBQ3RnQixNQUFwQjtBQUNBLFdBQUs4TSxTQUFMOztBQUVBLGFBQU8sS0FBS2hVLEtBQUwsR0FBYSxLQUFLc1QsSUFBTCxDQUFVcE0sTUFBOUIsRUFBc0M7QUFDbEMsWUFBSXNNLEVBQUUsR0FBRyxLQUFLRixJQUFMLENBQVVHLE1BQVYsQ0FBaUIsS0FBS3pULEtBQXRCLENBQVQ7O0FBRUEsWUFBSSxDQUFDMm5CLE9BQUwsRUFBYztBQUNWLGNBQUl4VCxHQUFHLEdBQUcsS0FBS1AsSUFBTCxFQUFWO0FBQ0EsY0FBSTJULEdBQUcsR0FBRy9ULEVBQUUsR0FBR1csR0FBZjs7QUFDQSxjQUFJb1QsR0FBRyxLQUFLLE1BQU0vUixHQUFsQixFQUF1QjtBQUNuQixpQkFBS2pDLE1BQUwsQ0FBWXJULElBQVosQ0FBaUI7QUFBRUYsbUJBQUssRUFBRSxLQUFLQSxLQUFkO0FBQXFCc1Qsa0JBQUksRUFBRWlVLEdBQTNCO0FBQWdDTSxpQkFBRyxFQUFFLElBQXJDO0FBQTJDRixxQkFBTyxFQUFFLElBQXBEO0FBQTBEblMsaUJBQUcsRUFBRTtBQUEvRCxhQUFqQjtBQUNBLGlCQUFLeFYsS0FBTCxJQUFjdW5CLEdBQUcsQ0FBQ3JnQixNQUFsQjtBQUNBO0FBQ0g7QUFDSjs7QUFFRCxZQUFJc00sRUFBRSxLQUFLZ0MsR0FBWCxFQUFnQjtBQUNaLGVBQUtqQyxNQUFMLENBQVlyVCxJQUFaLENBQWlCO0FBQ2JGLGlCQUFLLEVBQUUsS0FBS0EsS0FEQztBQUVic1QsZ0JBQUksRUFBRWtDLEdBRk87QUFHYnFTLGVBQUcsRUFBRSxJQUhRO0FBSWJGLG1CQUFPLEVBQUUsQ0FBQyxDQUFDQyxPQUFGLEdBQVksSUFBWixHQUFtQkQsT0FKZjtBQUtiblMsZUFBRyxFQUFFO0FBTFEsV0FBakI7QUFPQSxlQUFLeFYsS0FBTCxJQUFjd1YsR0FBRyxDQUFDdE8sTUFBbEI7QUFDQTtBQUNIOztBQUVELFlBQUksS0FBSzRNLGlCQUFMLENBQXVCLEtBQUtDLGFBQUwsRUFBdkIsQ0FBSixFQUFrRDtBQUM5QyxlQUFLQyxTQUFMO0FBQ0gsU0FGRCxNQUdLLElBQUlSLEVBQUUsS0FBSyxHQUFQLElBQWNBLEVBQUUsS0FBSyxJQUF6QixFQUErQjtBQUNoQyxlQUFLRSxVQUFMLENBQWdCRixFQUFoQjtBQUNILFNBRkksTUFHQSxJQUFJLEtBQUtVLFlBQUwsQ0FBa0JWLEVBQWxCLENBQUosRUFBMkI7QUFDNUIsZUFBS3hULEtBQUw7QUFDSCxTQUZJLE1BR0EsSUFBSXdULEVBQUUsS0FBSyxHQUFYLEVBQWdCO0FBQ2pCLGVBQUtELE1BQUwsQ0FBWXJULElBQVosQ0FBaUI7QUFBRUYsaUJBQUssRUFBRSxLQUFLQSxLQUFkO0FBQXFCc1QsZ0JBQUksRUFBRSxHQUEzQjtBQUFnQ3dVLGlCQUFLLEVBQUU7QUFBdkMsV0FBakI7QUFDQSxlQUFLOW5CLEtBQUw7QUFDSCxTQUhJLE1BSUE7QUFDRCxlQUFLMFUsVUFBTCxDQUFnQiw0QkFBaEIsRUFBOEMsS0FBSzFVLEtBQW5ELEVBQTBELEtBQUtBLEtBQUwsR0FBYSxDQUF2RTtBQUNIO0FBQ0o7QUFDSjtBQXBITDtBQUFBO0FBQUEsd0JBc0hRc1QsSUF0SFIsRUFzSGM7QUFDTixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLdFQsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLdVQsTUFBTCxHQUFjLEVBQWQ7QUFFQSxVQUFJd1UsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLOWtCLE9BQUwsQ0FBYThrQixZQUFsQzs7QUFDQSxhQUFPLEtBQUsvbkIsS0FBTCxHQUFhLEtBQUtzVCxJQUFMLENBQVVwTSxNQUE5QixFQUFzQztBQUNsQyxZQUFJc00sRUFBRSxHQUFHLEtBQUtGLElBQUwsQ0FBVUcsTUFBVixDQUFpQixLQUFLelQsS0FBdEIsQ0FBVDtBQUNBLFlBQUltVSxHQUFHLEdBQUcsS0FBS1AsSUFBTCxFQUFWO0FBQ0EsWUFBSVEsR0FBRyxHQUFHLEtBQUtSLElBQUwsQ0FBVSxDQUFWLENBQVY7O0FBQ0EsWUFBSSxLQUFLNlQsWUFBTCxDQUFrQixNQUFsQixDQUFKLEVBQStCO0FBQzNCLGVBQUtPLFdBQUwsQ0FBaUIsTUFBakIsRUFBeUIsS0FBekI7QUFDSCxTQUZELE1BR0ssSUFBSXhVLEVBQUUsS0FBSyxHQUFQLElBQWMsS0FBS00saUJBQUwsQ0FBdUJLLEdBQXZCLENBQWxCLEVBQStDO0FBQ2hELGVBQUs4VCxPQUFMLENBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixLQUF2QjtBQUNILFNBRkksTUFHQSxJQUFJLEtBQUtSLFlBQUwsQ0FBa0IsSUFBbEIsS0FBMkIsS0FBSzNULGlCQUFMLENBQXVCTSxHQUF2QixDQUEvQixFQUE0RDtBQUM3RCxlQUFLNlQsT0FBTCxDQUFhLElBQWIsRUFBbUIsR0FBbkIsRUFBd0IsSUFBeEI7QUFDSCxTQUZJLE1BR0EsSUFBSSxLQUFLUixZQUFMLENBQWtCLFdBQWxCLENBQUosRUFBb0M7QUFDckMsY0FBSU0sWUFBSixFQUFrQjtBQUNkLGlCQUFLRSxPQUFMLENBQWEsSUFBYixFQUFtQixHQUFuQixFQUF3QixJQUF4QixFQUE4QixJQUE5QjtBQUNILFdBRkQsTUFHSztBQUNELGlCQUFLdlQsVUFBTCxDQUFnQix3QkFBaEIsRUFBMEMsS0FBSzFVLEtBQS9DLEVBQXNELEtBQUtBLEtBQUwsR0FBYSxDQUFuRTtBQUNIO0FBQ0osU0FQSSxNQVFBO0FBQ0QsZUFBS2tvQixRQUFMO0FBQ0g7QUFDSjs7QUFDRCxhQUFPLEtBQUszVSxNQUFaO0FBQ0g7QUF0Skw7O0FBQUE7QUFBQSxFQUE4QnBCLDZDQUE5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUlPLElBQU00VSxTQUFiO0FBQUE7O0FBQ0kscUJBQVluUSxLQUFaLEVBQW1CM1QsT0FBbkIsRUFBNEI7QUFBQTs7QUFBQSxrRkFDbEIyVCxLQURrQixFQUNYM1QsT0FEVztBQUUzQjs7QUFITDtBQUFBO0FBQUEsMEJBS1VxUSxJQUxWLEVBS2dCO0FBQ1IsV0FBS3RULEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBS3NULElBQUwsR0FBWUEsSUFBWjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxLQUFLcUQsS0FBTCxDQUFXeEUsR0FBWCxDQUFla0IsSUFBZixDQUFkO0FBRUEsVUFBSTZVLElBQUksR0FBRyxJQUFJcEQsMkNBQUosRUFBWDtBQUNBLFVBQUk2QyxPQUFKO0FBQUEsVUFBYUcsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLOWtCLE9BQUwsQ0FBYThrQixZQUEzQzs7QUFDQSxhQUFPLEtBQUsvbkIsS0FBTCxHQUFhLEtBQUt1VCxNQUFMLENBQVlyTSxNQUFoQyxFQUF3QztBQUNwQyxZQUFJdU4sS0FBSyxHQUFHLEtBQUsyVCxPQUFMLEVBQVo7O0FBRUEsWUFBSTNULEtBQUssQ0FBQ21ULE9BQVYsRUFBbUI7QUFDZixjQUFJRyxZQUFKLEVBQWtCO0FBQ2QsZ0JBQUksQ0FBQ0gsT0FBTCxFQUFjO0FBQ1ZBLHFCQUFPLEdBQUcsS0FBS0EsT0FBTCxFQUFWO0FBQ0FPLGtCQUFJLENBQUNyZSxVQUFMLENBQWdCNUosSUFBaEIsQ0FBcUIwbkIsT0FBckI7QUFDSCxhQUhELE1BSUs7QUFDRCxtQkFBS2xULFVBQUwsQ0FBZ0Isd0JBQWhCLEVBQTBDRCxLQUExQztBQUNIO0FBQ0osV0FSRCxNQVNLO0FBQ0QsaUJBQUtDLFVBQUwsQ0FBZ0Isd0JBQWhCLEVBQTBDRCxLQUExQztBQUNIO0FBQ0osU0FiRCxNQWNLLElBQUlBLEtBQUssQ0FBQ3FRLE9BQVYsRUFBbUI7QUFDcEIsY0FBSUEsT0FBTyxHQUFHLElBQUlELDRDQUFKLENBQVVwUSxLQUFLLENBQUNuQixJQUFoQixDQUFkO0FBQ0E2VSxjQUFJLENBQUNyZSxVQUFMLENBQWdCNUosSUFBaEIsQ0FBcUI0a0IsT0FBckI7QUFDQSxlQUFLdk0sSUFBTDtBQUNILFNBSkksTUFLQSxJQUFJOUQsS0FBSyxDQUFDaVQsT0FBVixFQUFtQjtBQUNwQixjQUFJcFUsSUFBSSxHQUFHLElBQUlxVCw0Q0FBSixDQUFVbFMsS0FBSyxDQUFDbkIsSUFBaEIsQ0FBWDtBQUNBNlUsY0FBSSxDQUFDcmUsVUFBTCxDQUFnQjVKLElBQWhCLENBQXFCb1QsSUFBckI7QUFDQSxlQUFLaUYsSUFBTDtBQUNILFNBSkksTUFLQSxJQUFJOUQsS0FBSyxDQUFDb1QsR0FBTixJQUFhcFQsS0FBSyxDQUFDK1MsS0FBdkIsRUFBOEI7QUFDL0JXLGNBQUksQ0FBQ3JlLFVBQUwsQ0FBZ0I1SixJQUFoQixDQUFxQixLQUFLMmpCLE9BQUwsRUFBckI7QUFDSCxTQUZJLE1BR0E7QUFDRCxlQUFLblAsVUFBTCxDQUFnQixZQUFoQixFQUE4QkQsS0FBOUI7QUFDSDtBQUNKOztBQUVEMFQsVUFBSSxDQUFDL0IsWUFBTDtBQUVBLGFBQU8rQixJQUFJLENBQUNyZSxVQUFaO0FBQ0g7QUFsREw7QUFBQTtBQUFBLDhCQW9EYztBQUNOLFdBQUt5TyxJQUFMO0FBQ0EsVUFBSThQLE9BQU8sR0FBRyxJQUFJekIsNENBQUosRUFBZDtBQUNBLFVBQUluUyxLQUFLLEdBQUcsS0FBSzJULE9BQUwsRUFBWjs7QUFFQSxVQUFJM1QsS0FBSyxDQUFDbEYsVUFBVixFQUFzQjtBQUNsQjhZLGVBQU8sQ0FBQ2pqQixTQUFSLEdBQW9CcVAsS0FBSyxDQUFDbkIsSUFBMUI7QUFDSCxPQUZELE1BR0s7QUFDRCxhQUFLb0IsVUFBTCxDQUFnQixjQUFoQixFQUFnQ0QsS0FBaEM7QUFDSDs7QUFFRCxXQUFLNlQsS0FBTCxDQUFXRCxPQUFYLEVBQW9COW5CLE9BQXBCLENBQTRCLFVBQVUya0IsSUFBVixFQUFnQjtBQUN4Q21ELGVBQU8sQ0FBQ3ZlLFVBQVIsQ0FBbUI1SixJQUFuQixDQUF3QmdsQixJQUF4QjtBQUNILE9BRkQ7QUFJQXpRLFdBQUssR0FBRyxLQUFLMlQsT0FBTCxFQUFSOztBQUVBLFVBQUkzVCxLQUFLLENBQUNvVCxHQUFOLElBQWFwVCxLQUFLLENBQUNlLEdBQW5CLElBQTBCZixLQUFLLENBQUNrVCxPQUFwQyxFQUE2QztBQUN6QyxhQUFLcFAsSUFBTDtBQUNILE9BRkQsTUFHSztBQUNELGFBQUs3RCxVQUFMLENBQWdCLGNBQWhCLEVBQWdDRCxLQUFoQztBQUNIOztBQUVELGFBQU80VCxPQUFQO0FBQ0g7QUE5RUw7QUFBQTtBQUFBLDRCQWdGWUUsQ0FoRlosRUFnRmU7QUFDUCxXQUFLaFEsSUFBTDtBQUNBLFVBQUlqVSxHQUFHLEdBQUcsSUFBSXlnQiwyQ0FBSixFQUFWO0FBQ0EsVUFBSXRRLEtBQUssR0FBRyxLQUFLMlQsT0FBTCxFQUFaOztBQUVBLFVBQUkzVCxLQUFLLENBQUNsRixVQUFWLEVBQXNCO0FBQ2xCakwsV0FBRyxDQUFDZ2IsUUFBSixHQUFlN0ssS0FBSyxDQUFDbkIsSUFBckI7QUFDQSxhQUFLaUYsSUFBTDtBQUNILE9BSEQsTUFJSztBQUNELGFBQUs3RCxVQUFMLENBQWdCLGNBQWhCLEVBQWdDRCxLQUFoQztBQUNIOztBQUVELFdBQUs2VCxLQUFMLENBQVdoa0IsR0FBWCxFQUFnQi9ELE9BQWhCLENBQXdCLFVBQVUya0IsSUFBVixFQUFnQjtBQUNwQzVnQixXQUFHLENBQUNra0IsUUFBSixDQUFhdEQsSUFBYjtBQUNILE9BRkQ7QUFJQXpRLFdBQUssR0FBRyxLQUFLMlQsT0FBTCxFQUFSOztBQUVBLFVBQUkzVCxLQUFLLENBQUNvVCxHQUFOLElBQWFwVCxLQUFLLENBQUNlLEdBQXZCLEVBQTRCO0FBQ3hCLGFBQUsrQyxJQUFMOztBQUNBLFlBQUlqVSxHQUFHLENBQUNnYixRQUFKLEtBQWlCLE9BQXJCLEVBQThCO0FBQzFCaGIsYUFBRyxDQUFDMGdCLFVBQUosR0FBaUIsSUFBakI7QUFDQSxpQkFBTzFnQixHQUFQO0FBQ0g7O0FBQ0QsWUFBSSxDQUFDbVEsS0FBSyxDQUFDa1QsT0FBWCxFQUFvQjtBQUNoQixlQUFLYyxhQUFMLENBQW1CbmtCLEdBQW5CLEVBQXdCL0QsT0FBeEIsQ0FBZ0MsVUFBVXlKLEtBQVYsRUFBaUI7QUFDN0MxRixlQUFHLENBQUNva0IsU0FBSixDQUFjMWUsS0FBZDtBQUNILFdBRkQ7QUFHSDtBQUNKLE9BWEQsTUFZSztBQUNELGFBQUswSyxVQUFMLENBQWdCLGNBQWhCLEVBQWdDRCxLQUFoQztBQUNIOztBQUVEQSxXQUFLLEdBQUcsS0FBSzJULE9BQUwsRUFBUjs7QUFDQSxVQUFJM1QsS0FBSyxDQUFDb1QsR0FBTixJQUFhcFQsS0FBSyxDQUFDK1MsS0FBbkIsSUFBNEIvUyxLQUFLLENBQUNrVCxPQUF0QyxFQUErQztBQUMzQyxhQUFLcFAsSUFBTDtBQUNBOUQsYUFBSyxHQUFHLEtBQUsyVCxPQUFMLEVBQVI7O0FBQ0EsWUFBSTNULEtBQUssQ0FBQ2xGLFVBQVYsRUFBc0I7QUFDbEIsY0FBSWpMLEdBQUcsQ0FBQ2diLFFBQUosS0FBaUI3SyxLQUFLLENBQUNuQixJQUEzQixFQUFpQztBQUM3QixpQkFBS2lGLElBQUw7QUFDQTlELGlCQUFLLEdBQUcsS0FBSzJULE9BQUwsRUFBUjs7QUFDQSxnQkFBSTNULEtBQUssQ0FBQ29ULEdBQU4sSUFBYXBULEtBQUssQ0FBQ2UsR0FBbkIsSUFBMEJmLEtBQUssQ0FBQ2tULE9BQXBDLEVBQTZDO0FBQ3pDLG1CQUFLcFAsSUFBTDtBQUNILGFBRkQsTUFHSztBQUNELG1CQUFLN0QsVUFBTCxDQUFnQixjQUFoQixFQUFnQ0QsS0FBaEM7QUFDSDtBQUNKLFdBVEQsTUFVSztBQUNELGlCQUFLQyxVQUFMLENBQWdCLGNBQWhCLEVBQWdDRCxLQUFoQztBQUNIO0FBQ0osU0FkRCxNQWVLO0FBQ0QsZUFBS0MsVUFBTCxDQUFnQixjQUFoQixFQUFnQ0QsS0FBaEM7QUFDSDtBQUNKLE9BckJELE1Bc0JLO0FBQ0QsYUFBS0MsVUFBTCxDQUFnQixjQUFoQixFQUFnQ0QsS0FBaEM7QUFDSDs7QUFFRCxhQUFPblEsR0FBUDtBQUNIO0FBL0lMO0FBQUE7QUFBQSxrQ0FpSmtCaWtCLENBakpsQixFQWlKcUI7QUFDYixVQUFJSSxJQUFJLEdBQUcsRUFBWDs7QUFFQSxhQUFPLEtBQUszb0IsS0FBTCxHQUFhLEtBQUt1VCxNQUFMLENBQVlyTSxNQUFoQyxFQUF3QztBQUNwQyxZQUFJdU4sS0FBSyxHQUFHLEtBQUsyVCxPQUFMLEVBQVo7O0FBRUEsWUFBSTNULEtBQUssQ0FBQ29ULEdBQU4sSUFBYXBULEtBQUssQ0FBQ2tULE9BQXZCLEVBQWdDO0FBQzVCO0FBQ0gsU0FGRCxNQUdLLElBQUlsVCxLQUFLLENBQUNxUSxPQUFWLEVBQW1CO0FBQ3BCLGNBQUlBLE9BQU8sR0FBRyxJQUFJRCw0Q0FBSixDQUFVcFEsS0FBSyxDQUFDbkIsSUFBaEIsQ0FBZDtBQUNBcVYsY0FBSSxDQUFDem9CLElBQUwsQ0FBVTRrQixPQUFWO0FBQ0EsZUFBS3ZNLElBQUw7QUFDSCxTQUpJLE1BS0EsSUFBSTlELEtBQUssQ0FBQ2lULE9BQVYsRUFBbUI7QUFDcEIsY0FBSXBVLElBQUksR0FBRyxJQUFJcVQsNENBQUosQ0FBVWxTLEtBQUssQ0FBQ25CLElBQWhCLENBQVg7QUFDQXFWLGNBQUksQ0FBQ3pvQixJQUFMLENBQVVvVCxJQUFWO0FBQ0EsZUFBS2lGLElBQUw7QUFDSCxTQUpJLE1BS0EsSUFBSTlELEtBQUssQ0FBQ29ULEdBQU4sSUFBYXBULEtBQUssQ0FBQytTLEtBQXZCLEVBQThCO0FBQy9CbUIsY0FBSSxDQUFDem9CLElBQUwsQ0FBVSxLQUFLMmpCLE9BQUwsQ0FBYTBFLENBQWIsQ0FBVjtBQUNILFNBRkksTUFHQTtBQUNELGVBQUs3VCxVQUFMLENBQWdCLGNBQWhCLEVBQWdDRCxLQUFoQztBQUNIO0FBQ0o7O0FBRUQsYUFBT2tVLElBQVA7QUFDSDtBQTdLTDtBQUFBO0FBQUEsMEJBK0tVSixDQS9LVixFQStLYTtBQUNMLFVBQUlELEtBQUssR0FBRyxFQUFaOztBQUVBLGFBQU8sS0FBS3RvQixLQUFMLEdBQWEsS0FBS3VULE1BQUwsQ0FBWXJNLE1BQWhDLEVBQXdDO0FBQ3BDLFlBQUl1TixLQUFLLEdBQUcsS0FBSzJULE9BQUwsRUFBWjs7QUFFQSxZQUFJM1QsS0FBSyxDQUFDb1QsR0FBTixJQUFhcFQsS0FBSyxDQUFDZSxHQUF2QixFQUE0QjtBQUN4QjtBQUNIOztBQUVELFlBQUkwUCxJQUFJLEdBQUcsSUFBSVQsNENBQUosRUFBWDs7QUFFQSxZQUFJaFEsS0FBSyxDQUFDbEYsVUFBVixFQUFzQjtBQUNsQjJWLGNBQUksQ0FBQzVGLFFBQUwsR0FBZ0I3SyxLQUFLLENBQUNuQixJQUF0QjtBQUNBNFIsY0FBSSxDQUFDMEQsTUFBTCxHQUFjblUsS0FBSyxDQUFDbkIsSUFBcEI7QUFDQSxlQUFLaUYsSUFBTDtBQUNBOUQsZUFBSyxHQUFHLEtBQUsyVCxPQUFMLEVBQVI7O0FBQ0EsY0FBSTNULEtBQUssQ0FBQ3FULEtBQVYsRUFBaUI7QUFDYixpQkFBS3ZQLElBQUw7QUFDQTlELGlCQUFLLEdBQUcsS0FBSzJULE9BQUwsRUFBUjs7QUFDQSxnQkFBSTNULEtBQUssQ0FBQ3FCLFFBQVYsRUFBb0I7QUFDaEJvUCxrQkFBSSxDQUFDOWYsU0FBTCxHQUFpQnFQLEtBQUssQ0FBQy9TLEtBQXZCO0FBQ0EsbUJBQUs2VyxJQUFMO0FBQ0gsYUFIRCxNQUlLO0FBQ0QsbUJBQUs3RCxVQUFMLENBQWdCLGNBQWhCLEVBQWdDRCxLQUFoQztBQUNIO0FBQ0o7QUFDSjs7QUFFRDZULGFBQUssQ0FBQ3BvQixJQUFOLENBQVdnbEIsSUFBWDtBQUNIOztBQUVELGFBQU9vRCxLQUFQO0FBQ0g7QUFqTkw7QUFBQTtBQUFBLDhCQW1OYztBQUNOLFVBQUksS0FBS3RvQixLQUFMLEdBQWEsS0FBS3VULE1BQUwsQ0FBWXJNLE1BQTdCLEVBQXFDO0FBQ2pDLGVBQU8sS0FBS3FNLE1BQUwsQ0FBWSxLQUFLdlQsS0FBakIsQ0FBUDtBQUNIOztBQUNELGFBQU8sRUFBUDtBQUNIO0FBeE5MO0FBQUE7QUFBQSwyQkEwTlc7QUFDSCxXQUFLQSxLQUFMO0FBQ0g7QUE1Tkw7O0FBQUE7QUFBQSxFQUErQnFTLDhDQUEvQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQSxJQUFJd1csUUFBUSxHQUFHQyxNQUFNLENBQUMvbkIsU0FBUCxDQUFpQjhuQixRQUFoQztBQUFBLElBQ0lFLGNBQWMsR0FBR0QsTUFBTSxDQUFDQyxjQUQ1QixDLENBR0E7O0FBQ0EsU0FBU0MsV0FBVCxDQUFxQnRuQixLQUFyQixFQUE0QjtBQUN4QixTQUFPLE9BQU9BLEtBQVAsS0FBaUIsV0FBeEI7QUFDSDs7QUFFRCxTQUFTdW5CLFNBQVQsQ0FBbUJ2bkIsS0FBbkIsRUFBMEI7QUFDdEIsU0FBTyxPQUFPQSxLQUFQLEtBQWlCLFdBQXhCO0FBQ0g7O0FBRUQsU0FBU3duQixPQUFULENBQWlCeG5CLEtBQWpCLEVBQXdCO0FBQ3BCLFNBQU9BLEtBQUssWUFBWWtJLEtBQXhCO0FBQ0g7O0FBRUQsU0FBU3VmLEtBQVQsQ0FBZXpuQixLQUFmLEVBQXNCO0FBQ2xCLFNBQU9BLEtBQUssWUFBWXFELEdBQXhCO0FBQ0g7O0FBRUQsU0FBU3FrQixRQUFULENBQWtCMW5CLEtBQWxCLEVBQXlCO0FBQ3JCLFNBQU9BLEtBQUssS0FBSyxJQUFWLElBQWtCLFFBQU9BLEtBQVAsTUFBaUIsUUFBMUM7QUFDSDs7QUFFRCxTQUFTMm5CLGFBQVQsQ0FBdUIzbkIsS0FBdkIsRUFBOEI7QUFDMUIsU0FBT0EsS0FBSyxLQUFLLElBQVYsSUFBa0IsUUFBT0EsS0FBUCxNQUFpQixRQUFuQyxJQUErQyxDQUFDcW5CLGNBQWMsQ0FBQ3JuQixLQUFELENBQXJFO0FBQ0g7O0FBRUQsU0FBUzRuQixRQUFULENBQWtCNW5CLEtBQWxCLEVBQXlCO0FBQ3JCLFNBQU8sT0FBT0EsS0FBUCxLQUFpQixRQUF4QjtBQUNIOztBQUVELFNBQVNpUyxRQUFULENBQWtCalMsS0FBbEIsRUFBeUI7QUFDckIsU0FBTyxPQUFPQSxLQUFQLEtBQWlCLFFBQXhCO0FBQ0g7O0FBRUQsU0FBUzZuQixNQUFULENBQWdCN25CLEtBQWhCLEVBQXVCO0FBQ25CLFNBQU9tbkIsUUFBUSxDQUFDcG9CLElBQVQsQ0FBY2lCLEtBQWQsTUFBeUIsZUFBaEM7QUFDSDs7QUFFRCxTQUFTOG5CLFVBQVQsQ0FBb0I5bkIsS0FBcEIsRUFBMkI7QUFDdkIsU0FBTyxPQUFPQSxLQUFQLEtBQWlCLFVBQXhCO0FBQ0g7O0FBRUQsU0FBUytuQixRQUFULENBQWtCL25CLEtBQWxCLEVBQXlCO0FBQ3JCLFNBQU9tbkIsUUFBUSxDQUFDcG9CLElBQVQsQ0FBY2lCLEtBQWQsTUFBeUIsaUJBQWhDO0FBQ0g7O0FBRUQsU0FBU2dvQixTQUFULENBQW1CaG9CLEtBQW5CLEVBQTBCO0FBQ3RCLFNBQU8sT0FBT0EsS0FBUCxLQUFpQixTQUF4QjtBQUNIOztBQUVELFNBQVNpb0IsVUFBVCxDQUFvQmpvQixLQUFwQixFQUEyQjtBQUN2QixTQUFRLE9BQU9rb0IsUUFBUCxLQUFvQixXQUFyQixJQUFzQ2xvQixLQUFLLFlBQVlrb0IsUUFBOUQ7QUFDSCxDLENBQ0Q7QUFFQTs7O0FBQ0EsU0FBU0MsUUFBVCxDQUFrQm5vQixLQUFsQixFQUF5QjtBQUNyQixNQUFJb29CLENBQUMsR0FBR0MsVUFBVSxDQUFDcm9CLEtBQUQsQ0FBbEI7QUFDQSxTQUFPc29CLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLEdBQVdwb0IsS0FBWCxHQUFtQm9vQixDQUExQjtBQUNIOztBQUVELFNBQVNHLFNBQVQsQ0FBbUJoVSxNQUFuQixFQUEyQjtBQUN2QixTQUFPcVQsUUFBUSxDQUFDclQsTUFBRCxDQUFSLEdBQW1CQSxNQUFNLENBQUNpVSxXQUFQLEVBQW5CLEdBQTBDalUsTUFBakQ7QUFDSDs7QUFFRCxTQUFTa1UsU0FBVCxDQUFtQmxVLE1BQW5CLEVBQTJCO0FBQ3ZCLFNBQU9xVCxRQUFRLENBQUNyVCxNQUFELENBQVIsR0FBbUJBLE1BQU0sQ0FBQ21VLFdBQVAsRUFBbkIsR0FBMENuVSxNQUFqRDtBQUNIOztBQUVELFNBQVNvVSxpQkFBVCxDQUEyQjdyQixJQUEzQixFQUFpQzhyQixTQUFqQyxFQUE0Q0Msb0JBQTVDLEVBQWtFO0FBQzlELFNBQU8vckIsSUFBSSxDQUFDdU0sS0FBTCxDQUFXdWYsU0FBWCxFQUFzQjNZLEdBQXRCLENBQTBCLFVBQVVqUSxLQUFWLEVBQWlCMUIsS0FBakIsRUFBd0I7QUFDckQsUUFBSUEsS0FBSyxLQUFLLENBQVYsSUFBZSxDQUFDdXFCLG9CQUFwQixFQUEwQztBQUN0QyxhQUFPN29CLEtBQVA7QUFDSDs7QUFFRCxRQUFJQSxLQUFLLENBQUN3RixNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLGFBQU94RixLQUFLLENBQUMwb0IsV0FBTixFQUFQO0FBQ0g7O0FBRUQsV0FBTzFvQixLQUFLLENBQUMrUixNQUFOLENBQWEsQ0FBYixFQUFnQjJXLFdBQWhCLEtBQWdDMW9CLEtBQUssQ0FBQ2dVLFNBQU4sQ0FBZ0IsQ0FBaEIsQ0FBdkM7QUFDSCxHQVZNLEVBVUp0TixJQVZJLENBVUMsRUFWRCxDQUFQO0FBV0g7O0FBRUQsU0FBU29pQixtQkFBVCxDQUE2QmhzQixJQUE3QixFQUFtQzhyQixTQUFuQyxFQUE4Q0Msb0JBQTlDLEVBQW9FO0FBQ2hFLE1BQUkzVixDQUFDLEdBQUcsQ0FBUjtBQUFBLE1BQVc2VixPQUFPLEdBQUcsRUFBckI7QUFBQSxNQUF5QkMsS0FBekI7O0FBRUEsU0FBTzlWLENBQUMsR0FBR3BXLElBQUksQ0FBQzBJLE1BQWhCLEVBQXdCO0FBQ3BCd2pCLFNBQUksR0FBR2xzQixJQUFJLENBQUNvVyxDQUFELENBQVg7O0FBRUEsUUFBSSxDQUFDQSxDQUFDLEtBQUssQ0FBTixJQUFXMlYsb0JBQVosS0FBcUMsUUFBUS9iLElBQVIsQ0FBYWtjLEtBQWIsQ0FBekMsRUFBNkQ7QUFDekRELGFBQU8sSUFBSUgsU0FBWDtBQUNBRyxhQUFPLElBQUlDLEtBQUksQ0FBQ1IsV0FBTCxFQUFYO0FBQ0gsS0FIRCxNQUdPO0FBQ0hPLGFBQU8sSUFBSUMsS0FBWDtBQUNIOztBQUVEOVYsS0FBQztBQUNKOztBQUVELFNBQU82VixPQUFQO0FBQ0gsQyxDQUNEO0FBRUE7OztBQUNBLFNBQVMvRSxJQUFULEdBQWdCO0FBQ1osTUFBSWMsSUFBSSxHQUFHLEtBQVg7QUFBQSxNQUFrQm1FLFFBQVEsR0FBRyxDQUE3QjtBQUFBLE1BQWdDeHJCLEdBQUcsR0FBRzhjLFNBQVMsQ0FBQzBPLFFBQUQsQ0FBL0M7QUFBQSxNQUEyRHRwQixNQUEzRDs7QUFFQSxNQUFJcW9CLFNBQVMsQ0FBQ3ZxQixHQUFELENBQWIsRUFBb0I7QUFDaEJxbkIsUUFBSSxHQUFHcm5CLEdBQVA7QUFDQXdyQixZQUFRO0FBQ1J4ckIsT0FBRyxHQUFHOGMsU0FBUyxDQUFDME8sUUFBRCxDQUFmO0FBQ0g7O0FBRUQsTUFBSTFPLFNBQVMsQ0FBQy9VLE1BQVYsR0FBbUJ5akIsUUFBUSxHQUFHLENBQWxDLEVBQXFDO0FBQ2pDdHBCLFVBQU0sR0FBRzRhLFNBQVMsQ0FBQzBPLFFBQVEsR0FBRyxDQUFaLENBQWxCO0FBQ0g7O0FBRUQsTUFBSXpCLE9BQU8sQ0FBQy9wQixHQUFELENBQVgsRUFBa0I7QUFDZCxRQUFJeXJCLE1BQU0sR0FBRyxFQUFiO0FBQ0F6ckIsT0FBRyxDQUFDb0IsT0FBSixDQUFZLFVBQVU4RixJQUFWLEVBQWdCckcsS0FBaEIsRUFBdUI7QUFDL0IsVUFBSXFCLE1BQU0sSUFBSSxJQUFWLElBQWtCQSxNQUFNLENBQUNsQyxHQUFELEVBQU1hLEtBQU4sRUFBYXFHLElBQWIsQ0FBNUIsRUFBZ0Q7QUFDNUN1a0IsY0FBTSxDQUFDMXFCLElBQVAsQ0FBWXNtQixJQUFJLEdBQUdkLElBQUksQ0FBQ2MsSUFBRCxFQUFPbmdCLElBQVAsQ0FBUCxHQUFzQkEsSUFBdEM7QUFDSDtBQUNKLEtBSkQ7QUFLQSxXQUFPdWtCLE1BQVA7QUFDSDs7QUFFRCxNQUFJeEIsUUFBUSxDQUFDanFCLEdBQUQsQ0FBWixFQUFtQjtBQUNmLFFBQUkwckIsTUFBTSxHQUFHM2IsTUFBTSxDQUFDL1AsR0FBRCxDQUFuQjtBQUNBb0IsV0FBTyxDQUFDcEIsR0FBRCxFQUFNLFVBQVV1QyxLQUFWLEVBQWlCcEQsR0FBakIsRUFBc0I7QUFDL0IsVUFBSStDLE1BQU0sSUFBSSxJQUFWLElBQWtCQSxNQUFNLENBQUNsQyxHQUFELEVBQU1iLEdBQU4sRUFBV29ELEtBQVgsQ0FBNUIsRUFBK0M7QUFDM0NtcEIsY0FBTSxDQUFDdnNCLEdBQUQsQ0FBTixHQUFja29CLElBQUksR0FBR2QsSUFBSSxDQUFDYyxJQUFELEVBQU85a0IsS0FBUCxDQUFQLEdBQXVCQSxLQUF6QztBQUNIO0FBQ0osS0FKTSxDQUFQO0FBS0EsV0FBT21wQixNQUFQO0FBQ0g7O0FBRUQsU0FBTzFyQixHQUFQO0FBQ0g7O0FBRUQsU0FBUzJyQixNQUFULEdBQWtCO0FBQ2QsTUFBSXRFLElBQUksR0FBRyxLQUFYO0FBQUEsTUFBa0J4bUIsS0FBSyxHQUFHLENBQTFCO0FBQUEsTUFBNkJjLE1BQU0sR0FBR21iLFNBQVMsQ0FBQ2pjLEtBQUQsQ0FBL0M7O0FBRUEsTUFBSTBwQixTQUFTLENBQUM1b0IsTUFBRCxDQUFiLEVBQXVCO0FBQ25CMGxCLFFBQUksR0FBRzFsQixNQUFQO0FBQ0FBLFVBQU0sR0FBR21iLFNBQVMsQ0FBQyxFQUFFamMsS0FBSCxDQUFsQjtBQUNIOztBQUVELE1BQUl3bUIsSUFBSixFQUFVO0FBQ041YyxTQUFLLENBQUM3SSxTQUFOLENBQWdCOEksS0FBaEIsQ0FBc0JwSixJQUF0QixDQUEyQndiLFNBQTNCLEVBQXNDamMsS0FBSyxHQUFHLENBQTlDLEVBQWlETyxPQUFqRCxDQUF5RCxVQUFVOEYsSUFBVixFQUFnQjtBQUNyRTBrQixlQUFTLENBQUNqcUIsTUFBRCxFQUFTdUYsSUFBVCxDQUFUO0FBQ0gsS0FGRDtBQUdILEdBSkQsTUFLSztBQUNEdUQsU0FBSyxDQUFDN0ksU0FBTixDQUFnQjhJLEtBQWhCLENBQXNCcEosSUFBdEIsQ0FBMkJ3YixTQUEzQixFQUFzQ2pjLEtBQUssR0FBRyxDQUE5QyxFQUFpRE8sT0FBakQsQ0FBeUQsVUFBVThGLElBQVYsRUFBZ0I7QUFDckUya0IsZ0JBQVUsQ0FBQ2xxQixNQUFELEVBQVN1RixJQUFULENBQVY7QUFDSCxLQUZEO0FBR0g7QUFDSjs7QUFFRCxTQUFTNGtCLEtBQVQsR0FBaUI7QUFDYixNQUFJekUsSUFBSSxHQUFHLEtBQVg7QUFBQSxNQUFrQnhtQixLQUFLLEdBQUcsQ0FBMUI7QUFBQSxNQUE2QmMsTUFBTSxHQUFHLEVBQXRDOztBQUVBLE1BQUk0b0IsU0FBUyxDQUFDek4sU0FBUyxDQUFDamMsS0FBRCxDQUFWLENBQWIsRUFBaUM7QUFDN0J3bUIsUUFBSSxHQUFHdkssU0FBUyxDQUFDamMsS0FBRCxDQUFoQjtBQUNBQSxTQUFLO0FBQ1I7O0FBRUQsTUFBSXdtQixJQUFKLEVBQVU7QUFDTjVjLFNBQUssQ0FBQzdJLFNBQU4sQ0FBZ0I4SSxLQUFoQixDQUFzQnBKLElBQXRCLENBQTJCd2IsU0FBM0IsRUFBc0NqYyxLQUF0QyxFQUE2Q08sT0FBN0MsQ0FBcUQsVUFBVThGLElBQVYsRUFBZ0I7QUFDakUwa0IsZUFBUyxDQUFDanFCLE1BQUQsRUFBU3VGLElBQVQsQ0FBVDtBQUNILEtBRkQ7QUFHSCxHQUpELE1BS0s7QUFDRHVELFNBQUssQ0FBQzdJLFNBQU4sQ0FBZ0I4SSxLQUFoQixDQUFzQnBKLElBQXRCLENBQTJCd2IsU0FBM0IsRUFBc0NqYyxLQUF0QyxFQUE2Q08sT0FBN0MsQ0FBcUQsVUFBVThGLElBQVYsRUFBZ0I7QUFDakUya0IsZ0JBQVUsQ0FBQ2xxQixNQUFELEVBQVN1RixJQUFULENBQVY7QUFDSCxLQUZEO0FBR0g7O0FBRUQsU0FBT3ZGLE1BQVA7QUFDSDs7QUFFRCxTQUFTa3FCLFVBQVQsQ0FBb0JscUIsTUFBcEIsRUFBNEJvcUIsTUFBNUIsRUFBb0M7QUFDaEMzcUIsU0FBTyxDQUFDMnFCLE1BQUQsRUFBUyxVQUFVeHBCLEtBQVYsRUFBaUJwRCxHQUFqQixFQUFzQjtBQUNsQ3dDLFVBQU0sQ0FBQ3hDLEdBQUQsQ0FBTixHQUFjb0QsS0FBZDtBQUNILEdBRk0sQ0FBUDtBQUdIOztBQUVELFNBQVNxcEIsU0FBVCxDQUFtQmpxQixNQUFuQixFQUEyQm9xQixNQUEzQixFQUFtQztBQUMvQjNxQixTQUFPLENBQUMycUIsTUFBRCxFQUFTLFVBQVV4cEIsS0FBVixFQUFpQnBELEdBQWpCLEVBQXNCO0FBQ2xDLFFBQUl3QyxNQUFNLENBQUN4QyxHQUFELENBQU4sSUFBZSxJQUFuQixFQUF5QjtBQUNyQndDLFlBQU0sQ0FBQ3hDLEdBQUQsQ0FBTixHQUFjb0QsS0FBZDtBQUNILEtBRkQsTUFHSztBQUNELFVBQUkwbkIsUUFBUSxDQUFDdG9CLE1BQU0sQ0FBQ3hDLEdBQUQsQ0FBUCxDQUFSLElBQXlCOHFCLFFBQVEsQ0FBQzFuQixLQUFELENBQXJDLEVBQThDO0FBQzFDcXBCLGlCQUFTLENBQUNqcUIsTUFBTSxDQUFDeEMsR0FBRCxDQUFQLEVBQWNvRCxLQUFkLENBQVQ7QUFDSCxPQUZELE1BR0s7QUFDRFosY0FBTSxDQUFDeEMsR0FBRCxDQUFOLEdBQWNvRCxLQUFkO0FBQ0g7QUFDSjtBQUNKLEdBWk0sQ0FBUDtBQWFILEMsQ0FDRDtBQUVBOzs7QUFDQSxTQUFTbkIsT0FBVCxDQUFpQk8sTUFBakIsRUFBeUJ1YyxNQUF6QixFQUFpQztBQUM3QixNQUFJNkwsT0FBTyxDQUFDcG9CLE1BQUQsQ0FBWCxFQUFxQjtBQUNqQkEsVUFBTSxDQUFDUCxPQUFQLENBQWU4YyxNQUFmO0FBQ0gsR0FGRCxNQUVPLElBQUkrTCxRQUFRLENBQUN0b0IsTUFBRCxDQUFaLEVBQXNCO0FBQ3pCLFNBQUssSUFBSXhDLEdBQVQsSUFBZ0J3QyxNQUFoQixFQUF3QjtBQUNwQixVQUFJQSxNQUFNLENBQUN1WCxjQUFQLENBQXNCL1osR0FBdEIsQ0FBSixFQUFnQztBQUM1QitlLGNBQU0sQ0FBQ3ZjLE1BQU0sQ0FBQ3hDLEdBQUQsQ0FBUCxFQUFjQSxHQUFkLENBQU47QUFDSDtBQUNKO0FBQ0o7QUFDSjs7QUFFRCxTQUFTNmlCLElBQVQsQ0FBY3JnQixNQUFkLEVBQXNCcXFCLElBQXRCLEVBQTRCO0FBQ3hCLE1BQUlqQyxPQUFPLENBQUNwb0IsTUFBRCxDQUFYLEVBQXFCO0FBQ2pCLFdBQU9BLE1BQU0sQ0FBQ3FnQixJQUFQLENBQVlnSyxJQUFaLENBQVA7QUFDSDs7QUFFRCxNQUFJL0IsUUFBUSxDQUFDdG9CLE1BQUQsQ0FBWixFQUFzQjtBQUNsQixTQUFLLElBQUl4QyxHQUFULElBQWdCd0MsTUFBaEIsRUFBd0I7QUFDcEIsVUFBSUEsTUFBTSxDQUFDdVgsY0FBUCxDQUFzQi9aLEdBQXRCLENBQUosRUFBZ0M7QUFDNUIsWUFBSTZzQixJQUFJLENBQUNycUIsTUFBTSxDQUFDeEMsR0FBRCxDQUFQLEVBQWNBLEdBQWQsQ0FBUixFQUE0QjtBQUN4QixpQkFBTyxJQUFQO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDSixDLENBQ0Q7QUFFQTs7O0FBQ0EsU0FBUzhzQixPQUFULENBQWlCeGtCLElBQWpCLEVBQXVCeWtCLE1BQXZCLEVBQStCO0FBQzNCLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVVqbEIsSUFBVixFQUFnQjtBQUMzQixRQUFJZ2xCLE1BQU0sSUFBSSxJQUFkLEVBQW9CO0FBQ2hCLGFBQU9obEIsSUFBUDtBQUNIOztBQUVELFdBQU9nbEIsTUFBTSxDQUFDaGxCLElBQUQsQ0FBYjtBQUNILEdBTkQ7O0FBUUEsU0FBT08sSUFBSSxDQUFDMmtCLElBQUwsQ0FBVSxVQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDN0IsUUFBSUgsUUFBUSxDQUFDRSxDQUFELENBQVIsR0FBY0YsUUFBUSxDQUFDRyxDQUFELENBQTFCLEVBQStCO0FBQzNCLGFBQU8sQ0FBQyxDQUFSO0FBQ0g7O0FBQ0QsUUFBSUgsUUFBUSxDQUFDRSxDQUFELENBQVIsR0FBY0YsUUFBUSxDQUFDRyxDQUFELENBQTFCLEVBQStCO0FBQzNCLGFBQU8sQ0FBUDtBQUNIOztBQUNELFdBQU8sQ0FBUDtBQUNILEdBUk0sQ0FBUDtBQVNIOztBQUVELFNBQVNDLGlCQUFULENBQTJCOWtCLElBQTNCLEVBQWlDeWtCLE1BQWpDLEVBQXlDO0FBQ3JDLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVVqbEIsSUFBVixFQUFnQjtBQUMzQixRQUFJZ2xCLE1BQU0sSUFBSSxJQUFkLEVBQW9CO0FBQ2hCLGFBQU9obEIsSUFBUDtBQUNIOztBQUVELFdBQU9nbEIsTUFBTSxDQUFDaGxCLElBQUQsQ0FBYjtBQUNILEdBTkQ7O0FBUUEsU0FBT08sSUFBSSxDQUFDMmtCLElBQUwsQ0FBVSxVQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDN0IsUUFBSUgsUUFBUSxDQUFDRSxDQUFELENBQVIsR0FBY0YsUUFBUSxDQUFDRyxDQUFELENBQTFCLEVBQStCO0FBQzNCLGFBQU8sQ0FBUDtBQUNIOztBQUNELFFBQUlILFFBQVEsQ0FBQ0UsQ0FBRCxDQUFSLEdBQWNGLFFBQVEsQ0FBQ0csQ0FBRCxDQUExQixFQUErQjtBQUMzQixhQUFPLENBQUMsQ0FBUjtBQUNIOztBQUNELFdBQU8sQ0FBUDtBQUNILEdBUk0sQ0FBUDtBQVNIOztBQUVELFNBQVNFLE1BQVQsR0FBa0I7QUFDZCxTQUFPL2hCLEtBQUssQ0FBQzdJLFNBQU4sQ0FBZ0I0cUIsTUFBaEIsQ0FBdUI3WixLQUF2QixDQUE2QixFQUE3QixFQUFpQ21LLFNBQWpDLENBQVA7QUFDSDs7QUFFRCxTQUFTeFgsTUFBVCxDQUFnQm1DLElBQWhCLEVBQXNCbEYsS0FBdEIsRUFBNkI7QUFDekIsTUFBSTFCLEtBQUssR0FBRzRHLElBQUksQ0FBQzNHLE9BQUwsQ0FBYXlCLEtBQWIsQ0FBWjs7QUFDQSxNQUFJMUIsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNkLFdBQU80RyxJQUFJLENBQUN2RyxNQUFMLENBQVlMLEtBQVosRUFBbUIsQ0FBbkIsQ0FBUDtBQUNIO0FBQ0osQyxDQUNEOzs7QUFFQSxTQUFTa1AsTUFBVCxDQUFnQjBjLENBQWhCLEVBQW1CO0FBQ2YsV0FBU0MsQ0FBVCxHQUFhLENBQ1o7O0FBRURBLEdBQUMsQ0FBQzlxQixTQUFGLEdBQWM2cUIsQ0FBZDtBQUNBLFNBQU8sSUFBSUMsQ0FBSixFQUFQO0FBQ0g7O0FBRUQsU0FBU0MsZ0JBQVQsQ0FBMEJDLE9BQTFCLEVBQW1DQyxTQUFuQyxFQUE4QztBQUMxQyxNQUFJanJCLFNBQVMsR0FBR21PLE1BQU0sQ0FBQzhjLFNBQVMsQ0FBQ2pyQixTQUFYLENBQXRCO0FBQ0FBLFdBQVMsQ0FBQ2tyQixXQUFWLEdBQXdCRixPQUF4QjtBQUNBQSxTQUFPLENBQUNockIsU0FBUixHQUFvQkEsU0FBcEI7QUFDSDs7QUFFRCxTQUFTbXJCLE9BQVQsQ0FBaUJILE9BQWpCLEVBQTBCQyxTQUExQixFQUFxQztBQUNqQ0Ysa0JBQWdCLENBQUNDLE9BQUQsRUFBVUMsU0FBVixDQUFoQjs7QUFDQUQsU0FBTyxTQUFQLEdBQWdCLFlBQVk7QUFDeEJDLGFBQVMsQ0FBQ2xhLEtBQVYsQ0FBZ0IsSUFBaEIsRUFBc0JtSyxTQUF0QjtBQUNILEdBRkQ7QUFHSDs7QUFFRCxTQUFTa1EsV0FBVCxDQUFxQnJyQixNQUFyQixFQUE2QnNPLFFBQTdCLEVBQXVDO0FBQ25DLE1BQUk5USxHQUFKO0FBQUEsTUFBU3dlLElBQUksR0FBRzFOLFFBQVEsQ0FBQ3JFLEtBQVQsQ0FBZSxHQUFmLENBQWhCOztBQUVBLFNBQU8rUixJQUFJLENBQUM1VixNQUFMLEdBQWMsQ0FBckIsRUFBd0I7QUFDcEIsUUFBSSxDQUFDa2lCLFFBQVEsQ0FBQ3RvQixNQUFELENBQWIsRUFBdUI7QUFDbkIsYUFBTyxLQUFQO0FBQ0g7O0FBRUR4QyxPQUFHLEdBQUd3ZSxJQUFJLENBQUMzVixLQUFMLEVBQU47QUFDQXJHLFVBQU0sR0FBR0EsTUFBTSxDQUFDeEMsR0FBRCxDQUFmO0FBQ0g7O0FBRUQsU0FBTzhxQixRQUFRLENBQUN0b0IsTUFBRCxDQUFSLElBQW9CQSxNQUFNLENBQUN1WCxjQUFQLENBQXNCeUUsSUFBSSxDQUFDM1YsS0FBTCxFQUF0QixDQUEzQjtBQUNIOztBQUVELFNBQVNpbEIsV0FBVCxDQUFxQnRyQixNQUFyQixFQUE2QnNPLFFBQTdCLEVBQXVDO0FBQ25DLE1BQUk5USxHQUFKO0FBQUEsTUFBU3dlLElBQUksR0FBRzFOLFFBQVEsQ0FBQ3JFLEtBQVQsQ0FBZSxHQUFmLENBQWhCOztBQUVBLFNBQU8rUixJQUFJLENBQUM1VixNQUFMLEdBQWMsQ0FBckIsRUFBd0I7QUFDcEIsUUFBRyxDQUFDa2lCLFFBQVEsQ0FBQ3RvQixNQUFELENBQVosRUFBc0I7QUFDbEI7QUFDSDs7QUFFRHhDLE9BQUcsR0FBR3dlLElBQUksQ0FBQzNWLEtBQUwsRUFBTjtBQUNBckcsVUFBTSxHQUFHQSxNQUFNLENBQUN4QyxHQUFELENBQWY7QUFDSDs7QUFFRCxTQUFPd0MsTUFBUDtBQUNIOztBQUVELFNBQVN1ckIsV0FBVCxDQUFxQnZyQixNQUFyQixFQUE2QnNPLFFBQTdCLEVBQXVDMU4sS0FBdkMsRUFBOEM7QUFDMUMsTUFBSXBELEdBQUo7QUFBQSxNQUFTd2UsSUFBSSxHQUFHMU4sUUFBUSxDQUFDckUsS0FBVCxDQUFlLEdBQWYsQ0FBaEI7O0FBRUEsU0FBTytSLElBQUksQ0FBQzVWLE1BQUwsR0FBYyxDQUFyQixFQUF3QjtBQUNwQixRQUFJLENBQUNraUIsUUFBUSxDQUFDdG9CLE1BQUQsQ0FBYixFQUF1QjtBQUNuQjtBQUNIOztBQUVEeEMsT0FBRyxHQUFHd2UsSUFBSSxDQUFDM1YsS0FBTCxFQUFOO0FBQ0FyRyxVQUFNLEdBQUdBLE1BQU0sQ0FBQ3hDLEdBQUQsQ0FBZjtBQUNIOztBQUVELE1BQUk4cUIsUUFBUSxDQUFDdG9CLE1BQUQsQ0FBWixFQUFzQjtBQUNsQnhDLE9BQUcsR0FBR3dlLElBQUksQ0FBQzNWLEtBQUwsRUFBTjtBQUNBckcsVUFBTSxDQUFDeEMsR0FBRCxDQUFOLEdBQWNvRCxLQUFkO0FBQ0g7QUFDSjs7QUFFRCxTQUFTNHFCLE1BQVQsR0FBa0I7QUFDZCxNQUFJclEsU0FBUyxDQUFDL1UsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUN4QjtBQUNIOztBQUVELE1BQUltUCxLQUFKO0FBQUEsTUFBV2tXLFNBQVg7QUFBQSxNQUFzQnZzQixLQUF0QjtBQUFBLE1BQTZCc0YsTUFBTSxHQUFHLEVBQXRDO0FBQUEsTUFBMENnTyxJQUFJLEdBQUcySSxTQUFTLENBQUMsQ0FBRCxDQUExRDtBQUFBLE1BQ0k1VyxPQUFPLEdBQUcsWUFEZDtBQUFBLE1BQzRCNFksU0FBUyxHQUFHNVksT0FBTyxDQUFDNFksU0FEaEQ7O0FBR0EsU0FBTzVILEtBQUssR0FBR2hSLE9BQU8sQ0FBQ0UsSUFBUixDQUFhK04sSUFBYixDQUFmLEVBQW1DO0FBQy9CaVosYUFBUyxHQUFHbFcsS0FBSyxDQUFDLENBQUQsQ0FBakI7QUFDQXJXLFNBQUssR0FBRytWLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQkgsS0FBSyxDQUFDLENBQUQsQ0FBckIsSUFBNEIsQ0FBcEM7O0FBRUEsUUFBSTRGLFNBQVMsQ0FBQy9VLE1BQVYsSUFBb0JsSCxLQUF4QixFQUErQjtBQUMzQixZQUFNLElBQUlHLEtBQUosQ0FBVSxpQkFBaUJILEtBQWpCLEdBQXlCLGdCQUFuQyxDQUFOO0FBQ0g7O0FBRURzRixVQUFNLElBQUlnTyxJQUFJLENBQUNvQyxTQUFMLENBQWV1SSxTQUFmLEVBQTBCNUgsS0FBSyxDQUFDclcsS0FBaEMsSUFBeUNpYyxTQUFTLENBQUNqYyxLQUFELENBQTVEO0FBQ0FpZSxhQUFTLEdBQUc1WSxPQUFPLENBQUM0WSxTQUFwQjtBQUNIOztBQUVEM1ksUUFBTSxJQUFJZ08sSUFBSSxDQUFDb0MsU0FBTCxDQUFldUksU0FBZixDQUFWO0FBRUEsU0FBTzNZLE1BQVA7QUFDSDs7QUFFRCxTQUFTa25CLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3RCLFNBQU9BLElBQUksQ0FBQ3BoQixPQUFMLENBQWEsT0FBYixFQUFzQixHQUF0QixFQUEyQkEsT0FBM0IsQ0FBbUMsT0FBbkMsRUFBNEMsR0FBNUMsRUFBaURBLE9BQWpELENBQXlELFFBQXpELEVBQW1FLEdBQW5FLEVBQXdFQSxPQUF4RSxDQUFnRixVQUFoRixFQUE0RixFQUE1RixDQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNxaEIsb0JBQVQsQ0FBOEI3c0IsSUFBOUIsRUFBb0M7QUFDdkMsT0FBS29qQixNQUFMLEdBQWMsSUFBZDtBQUNBLE9BQUt2a0IsUUFBTCxHQUFnQixJQUFoQjtBQUNBLE9BQUtpdUIsVUFBTCxHQUFrQixFQUFsQjtBQUNBLE9BQUsvdEIsVUFBTCxHQUFrQixJQUFsQjtBQUNBLE9BQUtzUixPQUFMLEdBQWUsSUFBSTBjLDhDQUFKLENBQVcsSUFBWCxDQUFmO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixJQUFJdFMsa0RBQUosQ0FBYSxJQUFiLENBQWpCO0FBQ0EsT0FBS3VTLEtBQUwsR0FBYTFtQiw0Q0FBQSxDQUFZLEtBQUtwRixVQUFqQixFQUE2Qm5CLElBQTdCLENBQWI7QUFDQSxPQUFLZCxVQUFMLEdBQWtCLEtBQUtndUIsY0FBTCxFQUFsQjtBQUNBLE9BQUt0dUIsS0FBTCxHQUFhLEVBQWI7QUFDQSxPQUFLWSxNQUFMLEdBQWMsRUFBZDtBQUNBLE9BQUtkLEtBQUwsR0FBYSxLQUFLeXVCLFNBQUwsQ0FBZSxFQUFmLENBQWI7QUFDQSxPQUFLM3BCLEtBQUwsR0FBYSxLQUFLMnBCLFNBQUwsQ0FBZSxFQUFmLENBQWI7QUFDQS9yQixvREFBUSxDQUFDZ3NCLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsS0FBS0gsS0FBbkM7QUFDSDtBQUVNLElBQU03dEIsU0FBYjtBQUFBO0FBQUE7QUFBQSw4QkFLYzZCLE1BTGQsRUFLc0I7QUFDZCxhQUFPLElBQUk4YixLQUFKLENBQVU5YixNQUFWLEVBQWtCTixpREFBbEIsQ0FBUDtBQUNIO0FBUEw7QUFBQTtBQUFBLDZCQVNhL0IsS0FUYixFQVNvQjtBQUNaLFdBQUtBLEtBQUwsR0FBYUEsS0FBSyxJQUFJLEVBQXRCO0FBQ0g7QUFYTDtBQUFBO0FBQUEsa0NBYWtCaUIsR0FibEIsRUFhdUI7QUFDZixXQUFLWCxVQUFMLEdBQWtCVyxHQUFsQjtBQUNIO0FBZkw7QUFBQTtBQUFBLDhCQWlCYzJELEtBakJkLEVBaUJxQjtBQUNiLFdBQUtBLEtBQUwsR0FBYSxLQUFLMnBCLFNBQUwsQ0FBZTNwQixLQUFmLENBQWI7QUFDSDtBQW5CTDtBQUFBO0FBQUEsOEJBcUJjOUUsS0FyQmQsRUFxQnFCO0FBQ2IsV0FBS0EsS0FBTCxHQUFhLEtBQUt5dUIsU0FBTCxDQUFlenVCLEtBQWYsQ0FBYjtBQUNIO0FBdkJMO0FBQUE7QUFBQSx3QkFDb0I7QUFDWixhQUFPMEMsa0RBQVA7QUFDSDtBQUhMOztBQXlCSSxxQkFBWXBCLElBQVosRUFBa0I7QUFBQTs7QUFDZDZzQix3QkFBb0IsQ0FBQ2pzQixJQUFyQixDQUEwQixJQUExQixFQUFnQ1osSUFBaEM7QUFDSDs7QUEzQkw7QUFBQTtBQUFBLHFDQTZCcUI7QUFDYixVQUFJSCxHQUFHLEdBQUd3QyxRQUFRLENBQUNxSixhQUFULENBQXVCbkYsMERBQUEsQ0FBMEIsS0FBSzBtQixLQUFMLENBQVd4dUIsR0FBckMsRUFBMEMsR0FBMUMsQ0FBdkIsQ0FBVjtBQUNBb0MsbURBQUEsQ0FBYWhCLEdBQWIsRUFBa0JpQixnREFBbEI7QUFDQSxhQUFPakIsR0FBUDtBQUNIO0FBakNMO0FBQUE7QUFBQSxpQ0FtQ2lCcEIsR0FuQ2pCLEVBbUNzQjtBQUNkLGFBQU84SCxrREFBQSxDQUFrQixLQUFLN0gsS0FBdkIsRUFBOEJELEdBQTlCLENBQVA7QUFDSDtBQXJDTDtBQUFBO0FBQUEsaUNBdUNpQkEsR0F2Q2pCLEVBdUNzQjtBQUNkLGFBQU84SCxrREFBQSxDQUFrQixLQUFLN0gsS0FBdkIsRUFBOEJELEdBQTlCLENBQVA7QUFDSDtBQXpDTDtBQUFBO0FBQUEsaUNBMkNpQkEsR0EzQ2pCLEVBMkNzQm9ELEtBM0N0QixFQTJDNkI7QUFDckIsVUFBSTRZLFFBQVEsR0FBR2xVLGtEQUFBLENBQWtCLEtBQUs3SCxLQUF2QixFQUE4QkQsR0FBOUIsQ0FBZjs7QUFFQSxVQUFJZ2MsUUFBUSxLQUFLNVksS0FBakIsRUFBd0I7QUFDcEIwRSwwREFBQSxDQUFrQixLQUFLN0gsS0FBdkIsRUFBOEJELEdBQTlCLEVBQW1Db0QsS0FBbkM7QUFDQSxhQUFLd3JCLGlCQUFMLElBQTBCLEtBQUtBLGlCQUFMLENBQXVCNXVCLEdBQXZCLEVBQTRCb0QsS0FBNUIsRUFBbUM0WSxRQUFuQyxDQUExQjtBQUNIO0FBQ0o7QUFsREw7QUFBQTtBQUFBLGdDQW9EZ0JoYyxHQXBEaEIsRUFvRHFCO0FBQ2IsYUFBTzhILGtEQUFBLENBQWtCLEtBQUsvRyxNQUF2QixFQUErQmYsR0FBL0IsQ0FBUDtBQUNIO0FBdERMO0FBQUE7QUFBQSwwQkF3RFVBLEdBeERWLEVBd0Rla0MsT0F4RGYsRUF3RHdCO0FBQ2hCLFVBQUkyc0IsT0FBTyxHQUFHL21CLGtEQUFBLENBQWtCLEtBQUsvRyxNQUF2QixFQUErQmYsR0FBL0IsQ0FBZDs7QUFFQSxVQUFJWSx1REFBUyxDQUFDaXVCLE9BQUQsQ0FBYixFQUF3QjtBQUNwQkEsZUFBTyxDQUFDcGtCLEVBQVIsQ0FBV3ZJLE9BQVg7QUFDSCxPQUZELE1BRU87QUFDSCxjQUFNLElBQUlMLEtBQUosQ0FBVWlHLDZDQUFBLENBQWEsNEJBQWIsRUFBMkM5SCxHQUEzQyxDQUFWLENBQU47QUFDSDtBQUNKO0FBaEVMO0FBQUE7QUFBQSw0QkFrRVlBLEdBbEVaLEVBa0VpQmtDLE9BbEVqQixFQWtFMEI7QUFDbEIsVUFBSTJzQixPQUFPLEdBQUcvbUIsa0RBQUEsQ0FBa0IsS0FBSy9HLE1BQXZCLEVBQStCZixHQUEvQixDQUFkOztBQUVBLFVBQUlZLHVEQUFTLENBQUNpdUIsT0FBRCxDQUFiLEVBQXdCO0FBQ3BCQSxlQUFPLENBQUMvc0IsR0FBUixDQUFZSSxPQUFaO0FBQ0g7QUFDSjtBQXhFTDtBQUFBO0FBQUEsMkJBMEVXb0wsR0ExRVgsRUEwRWdCcEwsT0ExRWhCLEVBMEV5QmdHLE1BMUV6QixFQTBFaUM7QUFDekIsYUFBTyxLQUFLcW1CLFNBQUwsQ0FBZWxSLEtBQWYsQ0FBcUIvUCxHQUFyQixFQUEwQnBMLE9BQTFCLEVBQW1DZ0csTUFBbkMsQ0FBUDtBQUNIO0FBNUVMO0FBQUE7QUFBQSxxQ0E4RXFCb0YsR0E5RXJCLEVBOEUwQnBMLE9BOUUxQixFQThFbUNnRyxNQTlFbkMsRUE4RTJDO0FBQ25DLGFBQU8sS0FBS3FtQixTQUFMLENBQWVPLGVBQWYsQ0FBK0J4aEIsR0FBL0IsRUFBb0NwTCxPQUFwQyxFQUE2Q2dHLE1BQTdDLENBQVA7QUFDSDtBQWhGTDtBQUFBO0FBQUEsMEJBa0ZVb0YsR0FsRlYsRUFrRmVwRixNQWxGZixFQWtGdUI7QUFDZixhQUFPLElBQUl5Siw4Q0FBSixDQUFjLElBQWQsRUFBb0I7QUFBQ3pKLGNBQU0sRUFBRUE7QUFBVCxPQUFwQixFQUFzQzhVLFFBQXRDLENBQStDMVAsR0FBL0MsQ0FBUDtBQUNIO0FBcEZMO0FBQUE7QUFBQSw0QkFzRllBLEdBdEZaLEVBc0ZpQmxLLEtBdEZqQixFQXNGd0I4RSxNQXRGeEIsRUFzRmdDO0FBQ3hCLGFBQU8sSUFBSXlKLDhDQUFKLENBQWMsSUFBZCxFQUFvQjtBQUFDekosY0FBTSxFQUFFQTtBQUFULE9BQXBCLEVBQXNDbkMsTUFBdEMsQ0FBNkN1SCxHQUE3QyxFQUFrRGxLLEtBQWxELENBQVA7QUFDSDtBQXhGTDtBQUFBO0FBQUEsbUNBMEZtQjtBQUNYLFVBQUk3QixJQUFJLEdBQUcsS0FBS2l0QixLQUFoQjs7QUFFQSxVQUFJMW1CLCtDQUFBLENBQWV2RyxJQUFJLENBQUNsQixRQUFwQixDQUFKLEVBQW1DO0FBQy9CLGVBQU9rQixJQUFJLENBQUNsQixRQUFaO0FBQ0g7O0FBRUQsVUFBSXlILCtDQUFBLENBQWV2RyxJQUFJLENBQUN3dEIsVUFBcEIsQ0FBSixFQUFxQztBQUNqQyxZQUFJM3RCLEdBQUcsR0FBR3dDLFFBQVEsQ0FBQ29yQixjQUFULENBQXdCenRCLElBQUksQ0FBQ3d0QixVQUE3QixDQUFWOztBQUVBLFlBQUkzdEIsR0FBRyxJQUFJLElBQVgsRUFBaUI7QUFDYixpQkFBT0EsR0FBRyxDQUFDaUMsU0FBWDtBQUNIO0FBQ0o7O0FBRUQsYUFBTyxFQUFQO0FBQ0g7QUExR0w7QUFBQTtBQUFBLDhCQTRHYztBQUNOLFVBQUloRCxRQUFRLEdBQUcsS0FBSzR1QixZQUFMLEVBQWY7QUFFQSxXQUFLM3VCLFVBQUwsR0FBa0IsSUFBSUMsZ0RBQUosQ0FBYSxJQUFiLEVBQW1CQyxNQUFuQixDQUEwQkgsUUFBMUIsRUFBb0MsS0FBS0ksVUFBekMsQ0FBbEI7QUFFQSxXQUFLeXVCLGlCQUFMLElBQTBCLEtBQUtBLGlCQUFMLEVBQTFCO0FBRUEsYUFBTyxLQUFLNXVCLFVBQVo7QUFDSDtBQXBITDtBQUFBO0FBQUEsMkJBc0hXZ2xCLGlCQXRIWCxFQXNIOEI7QUFDdEIsVUFBSUMsT0FBSjs7QUFFQSxVQUFJemQsK0NBQUEsQ0FBZXdkLGlCQUFmLENBQUosRUFBdUM7QUFDbkNDLGVBQU8sR0FBRzNoQixRQUFRLENBQUM0aEIsYUFBVCxDQUF1QkYsaUJBQXZCLENBQVY7QUFDSCxPQUZELE1BR0s7QUFDREMsZUFBTyxHQUFHRCxpQkFBVjtBQUNIOztBQUVEQyxhQUFPLENBQUMvZCxXQUFSLENBQW9CLEtBQUsvRyxVQUF6QjtBQUNIO0FBaklMO0FBQUE7QUFBQSwrQkFtSWU7QUFDUDJCLHdEQUFBLENBQWtCLEtBQUszQixVQUF2QjtBQUNIO0FBcklMO0FBQUE7QUFBQSxpQ0F1SWlCaUwsS0F2SWpCLEVBdUl3QjtBQUNoQixXQUFLMmlCLFVBQUwsQ0FBZ0J6c0IsSUFBaEIsQ0FBcUI4SixLQUFyQjtBQUNBQSxXQUFLLENBQUN0TCxRQUFOLEdBQWlCLElBQWpCO0FBQ0g7QUExSUw7QUFBQTtBQUFBLGlDQTRJaUJzTCxLQTVJakIsRUE0SXdCO0FBQ2hCLFVBQUloSyxLQUFLLEdBQUcsS0FBSzJzQixVQUFMLENBQWdCMXNCLE9BQWhCLENBQXdCK0osS0FBeEIsQ0FBWjs7QUFFQSxVQUFJaEssS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNkLGFBQUsyc0IsVUFBTCxDQUFnQnRzQixNQUFoQixDQUF1QkwsS0FBdkIsRUFBOEIsQ0FBOUI7QUFDQWdLLGFBQUssQ0FBQ3RMLFFBQU4sR0FBaUIsSUFBakI7QUFDSDtBQUNKO0FBbkpMO0FBQUE7QUFBQSwrQkFxSmU7QUFDUCxXQUFLK3VCLFFBQUw7QUFFQSxXQUFLWixTQUFMLENBQWU3dEIsT0FBZjs7QUFFQSxVQUFHLEtBQUtKLFVBQUwsSUFBbUIsSUFBdEIsRUFBNEI7QUFDeEIsYUFBS0EsVUFBTCxDQUFnQkksT0FBaEI7QUFDSDs7QUFFRCxXQUFLK2tCLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxFQUFsQjs7QUFFQSxVQUFHLEtBQUtybEIsUUFBTCxJQUFpQixJQUFwQixFQUEwQjtBQUN0QixhQUFLQSxRQUFMLENBQWNndkIsWUFBZCxDQUEyQixJQUEzQjtBQUNIO0FBQ0o7QUFuS0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0Msb0JBQVQsQ0FBOEI5dEIsSUFBOUIsRUFBb0M7QUFDdkMsT0FBS3VmLE9BQUwsR0FBZSxJQUFmO0FBQ0EsT0FBSzhDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsT0FBS1gsU0FBTCxHQUFpQixDQUFqQixDQUh1QyxDQUl2Qzs7QUFDQSxPQUFLWSxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsT0FBS2xnQixZQUFMLEdBQW9CLElBQXBCO0FBQ0EsT0FBSzZxQixLQUFMLEdBQWExbUIsNENBQUEsQ0FBWSxLQUFLcEYsVUFBakIsRUFBNkJuQixJQUE3QixDQUFiO0FBQ0FvQixvREFBUSxDQUFDZ3NCLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsS0FBS0gsS0FBbkM7QUFDSDtBQUVNLElBQU1sckIsU0FBYjtBQUFBO0FBQUE7QUFBQSx3QkFDZTtBQUNQLGFBQU8sS0FBS1osVUFBTCxDQUFnQjFDLEdBQXZCO0FBQ0g7QUFITDtBQUFBO0FBQUEsd0JBS3FCO0FBQ2IsYUFBTyxLQUFLMEMsVUFBTCxDQUFnQjNDLFNBQXZCO0FBQ0g7QUFQTDtBQUFBO0FBQUEsd0JBU2lCO0FBQ1QsYUFBTyxLQUFLK2dCLE9BQVo7QUFDSDtBQVhMO0FBQUE7QUFBQSx3QkFhb0I7QUFDWixhQUFPLEtBQUtBLE9BQUwsQ0FBYXdPLFNBQXBCO0FBQ0g7QUFmTDtBQUFBO0FBQUEsd0JBaUJtQjtBQUNYLGFBQU8sS0FBSzFMLE9BQUwsQ0FBYWpkLElBQWIsQ0FBa0J2RixHQUF6QjtBQUNIO0FBbkJMO0FBQUE7QUFBQSx3QkFxQm1CO0FBQ1gsYUFBTyxLQUFLd2lCLE9BQUwsQ0FBYTFDLFFBQWIsQ0FBc0JWLE9BQTdCO0FBQ0g7QUF2Qkw7QUFBQTtBQUFBLHdCQXlCcUI7QUFDYixhQUFPLEtBQUtvRCxPQUFMLENBQWFqZCxJQUFiLENBQWtCdWEsUUFBbEIsQ0FBMkJwaEIsU0FBbEM7QUFDSDtBQTNCTDs7QUE2QkkscUJBQVl5QixJQUFaLEVBQWtCO0FBQUE7O0FBQ2Q4dEIsd0JBQW9CLENBQUNsdEIsSUFBckIsQ0FBMEIsSUFBMUIsRUFBZ0NaLElBQWhDO0FBQ0gsR0EvQkwsQ0FpQ0k7OztBQWpDSjtBQUFBO0FBQUEsK0JBa0NlO0FBQ1AsYUFBTyxLQUFLZ3VCLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxDQUFlLEtBQUszTCxPQUFMLENBQWFqZCxJQUE1QixFQUFrQyxLQUFLaWQsT0FBdkMsQ0FBekI7QUFDSDtBQXBDTDtBQUFBO0FBQUEsNEJBc0NZO0FBQ0osYUFBTyxLQUFLNEwsTUFBTCxJQUFlLEtBQUtBLE1BQUwsQ0FBWSxLQUFLMXFCLE1BQWpCLENBQXRCO0FBQ0gsS0F4Q0wsQ0EwQ0k7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUEvQ0o7QUFBQTtBQUFBLGdDQWdEZ0I7QUFDUixXQUFLMnFCLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxFQUFsQjs7QUFFQSxVQUFJLEtBQUszcEIsUUFBTCxJQUFpQixJQUFyQixFQUEyQjtBQUN2QixhQUFLa2YsT0FBTCxDQUFhLEtBQUtsZixRQUFMLENBQWMxQyxLQUEzQixFQUFrQyxLQUFLMEMsUUFBTCxDQUFja1csUUFBaEQ7QUFDSDtBQUNKLEtBdERMLENBd0RJOztBQXhESjtBQUFBO0FBQUEsNEJBeURZM1csUUF6RFosRUF5RHNCMlcsUUF6RHRCLEVBeURnQztBQUN4QixXQUFLMFQsUUFBTCxJQUFpQixLQUFLQSxRQUFMLENBQWNycUIsUUFBZCxFQUF3QjJXLFFBQXhCLENBQWpCO0FBQ0g7QUEzREw7QUFBQTtBQUFBLCtCQTZEZTtBQUNQLFdBQUt5SixTQUFMLElBQWtCLEtBQUtBLFNBQUwsRUFBbEI7QUFDSDtBQS9ETDtBQUFBO0FBQUEsc0NBaUVzQjllLElBakV0QixFQWlFNEIzRyxHQWpFNUIsRUFpRWlDRCxTQWpFakMsRUFpRTRDO0FBQ3BDLFVBQUcsQ0FBQ0EsU0FBSixFQUFjO0FBQ1ZBLGlCQUFTLEdBQUcsS0FBSzR2QixVQUFqQjtBQUNIOztBQUVELFVBQUkzb0IsTUFBTSxHQUFHTCxJQUFJLENBQUN1YSxRQUFMLENBQWNTLFVBQWQsQ0FBeUI1ZSxNQUF6QixDQUFnQyxVQUFBZ0YsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQzZuQixJQUFMLEtBQWM1dkIsR0FBZCxJQUFxQitILElBQUksQ0FBQzRuQixVQUFMLEtBQW9CNXZCLFNBQTdDO0FBQUEsT0FBcEMsQ0FBYjtBQUVBLGFBQU9pSCxNQUFNLENBQUM0QixNQUFQLEdBQWdCNUIsTUFBTSxDQUFDLENBQUQsQ0FBdEIsR0FBNEIsSUFBbkM7QUFDSDtBQXpFTDtBQUFBO0FBQUEsbUNBMkVtQmhILEdBM0VuQixFQTJFd0JELFNBM0V4QixFQTJFbUM7QUFDM0IsVUFBSTRHLElBQUksR0FBRyxLQUFLaWQsT0FBTCxDQUFhamQsSUFBeEI7QUFDQSxhQUFPLEtBQUtrcEIsaUJBQUwsQ0FBdUJscEIsSUFBdkIsRUFBNkIzRyxHQUE3QixFQUFrQ0QsU0FBbEMsQ0FBUDtBQUNIO0FBOUVMO0FBQUE7QUFBQSxxQ0FnRnFCQyxHQWhGckIsRUFnRjBCRCxTQWhGMUIsRUFnRnFDO0FBQzdCLFVBQUk0RyxJQUFJLEdBQUcsS0FBS2lkLE9BQUwsQ0FBYWpkLElBQWIsQ0FBa0JlLFVBQTdCO0FBQ0EsYUFBTyxLQUFLbW9CLGlCQUFMLENBQXVCbHBCLElBQXZCLEVBQTZCM0csR0FBN0IsRUFBa0NELFNBQWxDLENBQVA7QUFDSDtBQW5GTDtBQUFBO0FBQUEscUNBcUZxQjtBQUNiLFVBQUksS0FBS3VCLFFBQUwsQ0FBY29HLFVBQWQsSUFBNEIsSUFBaEMsRUFBc0M7QUFDbEMsWUFBSSxLQUFLL0QsWUFBTCxJQUFxQixJQUF6QixFQUErQjtBQUMzQixnQkFBTSxJQUFJOUIsS0FBSixDQUFVLHNDQUFWLENBQU47QUFDSDs7QUFDRE8sMkRBQUEsQ0FBbUIsS0FBS2QsUUFBeEIsRUFBa0MsS0FBS3FDLFlBQXZDO0FBQ0g7QUFDSjtBQTVGTDtBQUFBO0FBQUEscUNBOEZxQjtBQUNiLFVBQUksS0FBS3JDLFFBQUwsQ0FBY29HLFVBQWQsSUFBNEIsSUFBaEMsRUFBc0M7QUFDbEMsWUFBSSxLQUFLL0QsWUFBTCxJQUFxQixJQUF6QixFQUErQjtBQUMzQixnQkFBTSxJQUFJOUIsS0FBSixDQUFVLHNDQUFWLENBQU47QUFDSDs7QUFDRE8sMkRBQUEsQ0FBbUIsS0FBS3VCLFlBQXhCLEVBQXNDLEtBQUtyQyxRQUEzQztBQUNIO0FBQ0o7QUFyR0w7QUFBQTtBQUFBLG1DQXVHbUI7QUFDWGMsbURBQUEsQ0FBYSxLQUFLZCxRQUFsQixFQUE0QmdCLGlEQUE1QjtBQUNIO0FBekdMO0FBQUE7QUFBQSxtQ0EyR21CO0FBQ1hGLHNEQUFBLENBQWdCLEtBQUtkLFFBQXJCLEVBQStCZ0IsaURBQS9CO0FBQ0g7QUE3R0w7QUFBQTtBQUFBLDBCQStHVWdMLEdBL0dWLEVBK0dlcEYsTUEvR2YsRUErR3VCO0FBQ2ZBLFlBQU0sR0FBR0osNENBQUEsQ0FBWSxLQUFLaEMsUUFBTCxDQUFjb0MsTUFBMUIsRUFBa0NBLE1BQWxDLENBQVQ7QUFDQSxhQUFPLEtBQUtwRCxNQUFMLENBQVkrQyxLQUFaLENBQWtCeUYsR0FBbEIsRUFBdUJwRixNQUF2QixDQUFQO0FBQ0g7QUFsSEw7QUFBQTtBQUFBLDRCQW9IWW9GLEdBcEhaLEVBb0hpQmxLLEtBcEhqQixFQW9Id0I4RSxNQXBIeEIsRUFvSGdDO0FBQ3hCQSxZQUFNLEdBQUdKLDRDQUFBLENBQVksS0FBS2hDLFFBQUwsQ0FBY29DLE1BQTFCLEVBQWtDQSxNQUFsQyxDQUFUO0FBQ0EsYUFBTyxLQUFLcEQsTUFBTCxDQUFZcWIsT0FBWixDQUFvQjdTLEdBQXBCLEVBQXlCbEssS0FBekIsQ0FBUDtBQUNIO0FBdkhMO0FBQUE7QUFBQSw0QkF5SFkvQyxRQXpIWixFQXlIc0I2SCxNQXpIdEIsRUF5SDhCO0FBQ3RCLGFBQU8sSUFBSTNILGdEQUFKLENBQWEsS0FBS3VFLE1BQWxCLEVBQTBCb0QsTUFBMUIsRUFBa0MxSCxNQUFsQyxDQUF5Q0gsUUFBekMsQ0FBUDtBQUNIO0FBM0hMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUl5dkIsV0FBVyxHQUFHLHFCQUFsQixDLENBRUE7O0FBQ0EsSUFBSUMsY0FBYyxHQUFJLFlBQVk7QUFDOUIsU0FBTyxTQUFTcHZCLFNBQVQsQ0FBbUI0QixRQUFuQixFQUE2QjtBQUNoQzZyQixtRUFBb0IsQ0FBQ2pzQixJQUFyQixDQUEwQixJQUExQixFQUFnQ0ksUUFBaEM7QUFDSCxHQUZEO0FBR0gsQ0FKb0IsRUFBckI7O0FBS0F3dEIsY0FBYyxDQUFDdHRCLFNBQWYsR0FBMkI5QixvREFBUyxDQUFDOEIsU0FBckM7O0FBRUEsSUFBSXV0QixjQUFjLEdBQUksWUFBWTtBQUM5QixTQUFPLFNBQVMxc0IsU0FBVCxDQUFtQmYsUUFBbkIsRUFBNkI7QUFDaEM4c0IsbUVBQW9CLENBQUNsdEIsSUFBckIsQ0FBMEIsSUFBMUIsRUFBZ0NJLFFBQWhDO0FBQ0gsR0FGRDtBQUdILENBSm9CLEVBQXJCOztBQUtBeXRCLGNBQWMsQ0FBQ3Z0QixTQUFmLEdBQTJCYSxvREFBUyxDQUFDYixTQUFyQzs7QUFFQSxJQUFJd3RCLFdBQVcsR0FBSSxZQUFZO0FBQzNCLFNBQU8sU0FBU0MsTUFBVCxDQUFnQjN0QixRQUFoQixFQUEwQjtBQUM3QjR0Qiw2REFBaUIsQ0FBQ2h1QixJQUFsQixDQUF1QixJQUF2QixFQUE2QkksUUFBN0I7QUFDSCxHQUZEO0FBR0gsQ0FKaUIsRUFBbEI7O0FBS0EwdEIsV0FBVyxDQUFDeHRCLFNBQVosR0FBd0J5dEIsOENBQU0sQ0FBQ3p0QixTQUEvQjs7QUFFQSxJQUFJMnRCLFlBQVksR0FBSSxZQUFZO0FBQzVCLFNBQU8sU0FBU2xLLE9BQVQsQ0FBaUIzakIsUUFBakIsRUFBMkI7QUFDOUI4dEIsK0RBQWtCLENBQUNsdUIsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEJJLFFBQTlCO0FBQ0gsR0FGRDtBQUdILENBSmtCLEVBQW5COztBQUtBNnRCLFlBQVksQ0FBQzN0QixTQUFiLEdBQXlCeWpCLGdEQUFPLENBQUN6akIsU0FBakMsQyxDQUNBO0FBRUE7O0FBQ08sSUFBTTZ0QixPQUFiO0FBQ0kscUJBQWM7QUFBQTtBQUViOztBQUhMO0FBQUE7QUFBQSwyQkFLV0MsTUFMWCxFQUttQnJ3QixJQUxuQixFQUt5QjtBQUNqQixVQUFJNHZCLFdBQVcsQ0FBQzVmLElBQVosQ0FBaUJoUSxJQUFqQixDQUFKLEVBQTRCO0FBQ3hCLFlBQUlpc0IsT0FBTyxHQUFHcmtCLGdEQUFBLENBQWdCNUgsSUFBSSxDQUFDLENBQUQsQ0FBcEIsQ0FBZDs7QUFFQSxZQUFJQSxJQUFJLENBQUMwSSxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDakJ1akIsaUJBQU8sSUFBSWpzQixJQUFJLENBQUNzakIsTUFBTCxDQUFZLENBQVosQ0FBWDtBQUNIOztBQUVELGdCQUFRK00sTUFBUjtBQUNJLGVBQUtDLDRDQUFLLENBQUMxd0IsU0FBWDtBQUNJcXNCLG1CQUFPLElBQUksV0FBWDtBQUNBOztBQUNKLGVBQUtxRSw0Q0FBSyxDQUFDM3RCLFNBQVg7QUFDSXNwQixtQkFBTyxJQUFJLFdBQVg7QUFDQTs7QUFDSixlQUFLcUUsNENBQUssQ0FBQ3p0QixNQUFYO0FBQ0lvcEIsbUJBQU8sSUFBSSxRQUFYO0FBQ0E7O0FBQ0osZUFBS3FFLDRDQUFLLENBQUN2dEIsT0FBWDtBQUNJa3BCLG1CQUFPLElBQUksU0FBWDtBQUNBO0FBWlI7O0FBZUEsZUFBT0EsT0FBUDtBQUNILE9BdkJELE1BdUJPO0FBQ0gsY0FBTSxJQUFJdHFCLEtBQUosQ0FBVTNCLElBQUksR0FBRyxxQkFBakIsQ0FBTjtBQUNIO0FBQ0o7QUFoQ0w7QUFBQTtBQUFBLHlCQWtDU3F3QixNQWxDVCxFQWtDaUJyd0IsSUFsQ2pCLEVBa0N1QnV3QixNQWxDdkIsRUFrQytCbHVCLFFBbEMvQixFQWtDeUM7QUFDakMsVUFBSW9yQixXQUFKO0FBQUEsVUFBaUIrQyxlQUFlLEdBQUcsS0FBS0MsTUFBTCxDQUFZSixNQUFaLEVBQW9CcndCLElBQXBCLENBQW5DO0FBQUEsVUFDSTB3QixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFZO0FBQ3RCLFlBQUk5b0IsaURBQUEsQ0FBaUI2bEIsV0FBVyxTQUE1QixDQUFKLEVBQXlDO0FBQ3JDQSxxQkFBVyxTQUFYLENBQWtCeHJCLElBQWxCLENBQXVCLElBQXZCO0FBQ0gsU0FIcUIsQ0FJdEI7OztBQUNBLFlBQUkyRixpREFBQSxDQUFpQjJvQixNQUFNLENBQUNJLFNBQXhCLENBQUosRUFBd0M7QUFDcENKLGdCQUFNLENBQUNJLFNBQVAsQ0FBaUIxdUIsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEJyQiw2Q0FBNUI7QUFDSDtBQUNKLE9BVEw7O0FBV0E2c0IsaUJBQVcsR0FBRyxJQUFJbUQsUUFBSixDQUFhLGFBQWIsRUFBNEIsa0NBQWtDSixlQUFsQyxHQUFvRCw4QkFBaEYsRUFBZ0hFLFdBQWhILENBQWQsQ0FaaUMsQ0FjakM7O0FBQ0EsVUFBSTlvQixpREFBQSxDQUFpQjJvQixNQUFNLFdBQXZCLENBQUosRUFBc0M7QUFDbEMzb0Isc0RBQUEsQ0FBYzZsQixXQUFkLEVBQTJCOEMsTUFBTSxXQUFqQztBQUNILE9BakJnQyxDQW1CakM7OztBQUNBLFdBQUssSUFBSXp3QixHQUFULElBQWdCeXdCLE1BQWhCLEVBQXdCO0FBQ3BCLFlBQUlBLE1BQU0sQ0FBQzFXLGNBQVAsQ0FBc0IvWixHQUF0QixLQUE4QkEsR0FBRyxLQUFLLFNBQXRDLElBQW1EQSxHQUFHLEtBQUssV0FBL0QsRUFBNEU7QUFDeEUydEIscUJBQVcsQ0FBQ2xyQixTQUFaLENBQXNCekMsR0FBdEIsSUFBNkJ5d0IsTUFBTSxDQUFDendCLEdBQUQsQ0FBbkM7QUFDSDtBQUNKLE9BeEJnQyxDQTBCakM7OztBQUNBdUMsY0FBUSxDQUFDdkMsR0FBVCxHQUFlRSxJQUFmO0FBQ0F5dEIsaUJBQVcsQ0FBQ2xyQixTQUFaLENBQXNCQyxVQUF0QixHQUFtQ0gsUUFBbkM7QUFFQSxhQUFPb3JCLFdBQVA7QUFDSDtBQWpFTDtBQUFBO0FBQUEsa0NBbUVrQnp0QixJQW5FbEIsRUFtRXdCdXdCLE1BbkV4QixFQW1FZ0NsdUIsUUFuRWhDLEVBbUUwQztBQUNsQ2t1QixZQUFNLEdBQUczb0IsNENBQUEsQ0FBWTtBQUNqQixtQkFBU2lvQjtBQURRLE9BQVosRUFFTlUsTUFGTSxDQUFUO0FBR0EsYUFBTyxLQUFLTSxJQUFMLENBQVVQLDRDQUFLLENBQUMxd0IsU0FBaEIsRUFBMkJJLElBQTNCLEVBQWlDdXdCLE1BQWpDLEVBQXlDbHVCLFFBQXpDLENBQVA7QUFDSDtBQXhFTDtBQUFBO0FBQUEsa0NBMEVrQnJDLElBMUVsQixFQTBFd0J1d0IsTUExRXhCLEVBMEVnQ2x1QixRQTFFaEMsRUEwRTBDO0FBQ2xDa3VCLFlBQU0sR0FBRzNvQiw0Q0FBQSxDQUFZO0FBQ2pCLG1CQUFTa29CO0FBRFEsT0FBWixFQUVOUyxNQUZNLENBQVQ7QUFHQSxhQUFPLEtBQUtNLElBQUwsQ0FBVVAsNENBQUssQ0FBQzN0QixTQUFoQixFQUEyQjNDLElBQTNCLEVBQWlDdXdCLE1BQWpDLEVBQXlDbHVCLFFBQXpDLENBQVA7QUFDSDtBQS9FTDtBQUFBO0FBQUEsK0JBaUZlckMsSUFqRmYsRUFpRnFCdXdCLE1BakZyQixFQWlGNkJsdUIsUUFqRjdCLEVBaUZ1QztBQUMvQmt1QixZQUFNLEdBQUczb0IsNENBQUEsQ0FBWTtBQUNqQixtQkFBU21vQjtBQURRLE9BQVosRUFFTlEsTUFGTSxDQUFUO0FBR0EsYUFBTyxLQUFLTSxJQUFMLENBQVVQLDRDQUFLLENBQUN6dEIsTUFBaEIsRUFBd0I3QyxJQUF4QixFQUE4QnV3QixNQUE5QixFQUFzQ2x1QixRQUF0QyxDQUFQO0FBQ0g7QUF0Rkw7QUFBQTtBQUFBLGdDQXdGZ0JyQyxJQXhGaEIsRUF3RnNCdXdCLE1BeEZ0QixFQXdGOEJsdUIsUUF4RjlCLEVBd0Z3QztBQUNoQ2t1QixZQUFNLEdBQUczb0IsNENBQUEsQ0FBWTtBQUNqQixtQkFBU3NvQjtBQURRLE9BQVosRUFFTkssTUFGTSxDQUFUO0FBR0EsYUFBTyxLQUFLTSxJQUFMLENBQVVQLDRDQUFLLENBQUN2dEIsT0FBaEIsRUFBeUIvQyxJQUF6QixFQUErQnV3QixNQUEvQixFQUF1Q2x1QixRQUF2QyxDQUFQO0FBQ0g7QUE3Rkw7O0FBQUE7QUFBQTtBQWdHTyxJQUFJeXVCLE9BQU8sR0FBRyxJQUFJVixPQUFKLEVBQWQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJUDtBQUNBO0FBRU8sU0FBU0gsaUJBQVQsQ0FBMkI1dUIsSUFBM0IsRUFBaUM7QUFDcEMsT0FBS2l0QixLQUFMLEdBQWExbUIsNENBQUEsQ0FBWSxLQUFLcEYsVUFBakIsRUFBNkJuQixJQUE3QixDQUFiO0FBQ0FvQixvREFBUSxDQUFDZ3NCLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsS0FBS0gsS0FBbkM7QUFDSDtBQUVNLElBQU0wQixNQUFiLEdBQ0ksZ0JBQVkzdUIsSUFBWixFQUFrQjtBQUFBOztBQUNkNHVCLG1CQUFpQixDQUFDaHVCLElBQWxCLENBQXVCLElBQXZCLEVBQTZCWixJQUE3QjtBQUNILENBSEwsQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJMHZCLFVBQVUsR0FBRyxxQkFBakI7QUFDQSxJQUFJQyxlQUFlLEdBQUcsVUFBdEI7O0lBRU1DLGtCO0FBQ0YsZ0NBQWM7QUFBQTs7QUFDVixTQUFLQyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUIsRUFBekI7QUFDSDs7OztzQ0FFaUJkLE0sRUFBUTtBQUN0QixVQUFJLENBQUMsS0FBS2EsY0FBTCxDQUFvQmIsTUFBcEIsQ0FBTCxFQUFrQztBQUM5QixhQUFLYSxjQUFMLENBQW9CYixNQUFwQixJQUE4QixFQUE5QjtBQUNIOztBQUNELGFBQU8sS0FBS2EsY0FBTCxDQUFvQmIsTUFBcEIsQ0FBUDtBQUNIOzs7eUNBRW9CQSxNLEVBQVE7QUFDekIsVUFBSSxDQUFDLEtBQUtjLGlCQUFMLENBQXVCZCxNQUF2QixDQUFMLEVBQXFDO0FBQ2pDLGFBQUtjLGlCQUFMLENBQXVCZCxNQUF2QixJQUFpQyxFQUFqQztBQUNIOztBQUNELGFBQU8sS0FBS2MsaUJBQUwsQ0FBdUJkLE1BQXZCLENBQVA7QUFDSDs7OztLQUdMO0FBQ0E7OztBQUNPLElBQU01SyxRQUFiO0FBQ0ksc0JBQWM7QUFBQTs7QUFDVixTQUFLMkwsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDSDs7QUFKTDtBQUFBO0FBQUEsMENBTTBCeHhCLFNBTjFCLEVBTXFDO0FBQzdCLFVBQUkrSCwrQ0FBQSxDQUFlL0gsU0FBZixDQUFKLEVBQStCO0FBQzNCQSxpQkFBUyxHQUFHK0gsZ0RBQUEsQ0FBZ0IvSCxTQUFoQixDQUFaOztBQUVBLFlBQUksQ0FBQyxLQUFLdXhCLFdBQUwsQ0FBaUJ2eEIsU0FBakIsQ0FBTCxFQUFrQztBQUM5QixlQUFLdXhCLFdBQUwsQ0FBaUJ2eEIsU0FBakIsSUFBOEIsSUFBSW94QixrQkFBSixFQUE5QjtBQUNIOztBQUVELGVBQU8sS0FBS0csV0FBTCxDQUFpQnZ4QixTQUFqQixDQUFQO0FBQ0gsT0FSRCxNQVNLO0FBQ0QsY0FBTSxJQUFJOEIsS0FBSixDQUFVLHVCQUFWLENBQU47QUFDSDtBQUNKO0FBbkJMO0FBQUE7QUFBQSxpQ0FxQmlCN0IsR0FyQmpCLEVBcUJzQjtBQUNkLFVBQUksQ0FBQ2l4QixVQUFVLENBQUMvZ0IsSUFBWCxDQUFnQmxRLEdBQWhCLENBQUwsRUFBMkI7QUFDdkIsY0FBTSxJQUFJNkIsS0FBSixDQUFVN0IsR0FBRyxHQUFHLHNCQUFoQixDQUFOO0FBQ0g7QUFDSjtBQXpCTDtBQUFBO0FBQUEsNkJBMkJhdXdCLE1BM0JiLEVBMkJxQnZ3QixHQTNCckIsRUEyQjBCMnRCLFdBM0IxQixFQTJCdUM7QUFDL0IsV0FBSzZELFlBQUwsQ0FBa0J4eEIsR0FBbEI7QUFFQSxVQUFJRCxTQUFTLEdBQUc0dEIsV0FBVyxDQUFDbHJCLFNBQVosQ0FBc0JDLFVBQXRCLENBQWlDM0MsU0FBakQ7QUFDQSxVQUFJMHhCLGtCQUFrQixHQUFHLEtBQUtDLHFCQUFMLENBQTJCM3hCLFNBQTNCLENBQXpCO0FBQ0EsVUFBSXF4QixjQUFjLEdBQUdLLGtCQUFrQixDQUFDRSxpQkFBbkIsQ0FBcUNwQixNQUFyQyxDQUFyQjs7QUFFQSxVQUFJeHdCLFNBQVMsS0FBS214QixlQUFkLElBQWlDWCxNQUFNLEtBQUtDLDRDQUFLLENBQUMzdEIsU0FBdEQsRUFBaUU7QUFDN0Q3QyxXQUFHLEdBQUc4SCw2Q0FBQSxDQUFhLE1BQWIsRUFBcUJBLGdEQUFBLENBQWdCOUgsR0FBRyxDQUFDLENBQUQsQ0FBbkIsS0FBMkJBLEdBQUcsQ0FBQzRJLE1BQUosR0FBYSxDQUFiLEdBQWlCNUksR0FBRyxDQUFDd2pCLE1BQUosQ0FBVyxDQUFYLENBQWpCLEdBQWlDLEVBQTVELENBQXJCLENBQU47QUFDSDs7QUFFRCxVQUFJNE4sY0FBYyxDQUFDcHhCLEdBQUQsQ0FBbEIsRUFBeUI7QUFDckIsY0FBTSxJQUFJNkIsS0FBSixDQUFVN0IsR0FBRyxHQUFHLDRCQUFOLEdBQXFDRCxTQUEvQyxDQUFOO0FBQ0g7O0FBRURxeEIsb0JBQWMsQ0FBQ3B4QixHQUFELENBQWQsR0FBc0IydEIsV0FBdEI7QUFDSDtBQTNDTDtBQUFBO0FBQUEsc0NBNkNzQjN0QixHQTdDdEIsRUE2QzJCMnRCLFdBN0MzQixFQTZDd0M7QUFDaEMsV0FBS2lFLFFBQUwsQ0FBY3BCLDRDQUFLLENBQUMxd0IsU0FBcEIsRUFBK0JFLEdBQS9CLEVBQW9DMnRCLFdBQXBDO0FBQ0g7QUEvQ0w7QUFBQTtBQUFBLHNDQWlEc0IzdEIsR0FqRHRCLEVBaUQyQjJ0QixXQWpEM0IsRUFpRHdDO0FBQ2hDLFdBQUtpRSxRQUFMLENBQWNwQiw0Q0FBSyxDQUFDM3RCLFNBQXBCLEVBQStCN0MsR0FBL0IsRUFBb0MydEIsV0FBcEM7QUFDSDtBQW5ETDtBQUFBO0FBQUEsbUNBcURtQjN0QixHQXJEbkIsRUFxRHdCMnRCLFdBckR4QixFQXFEcUM7QUFDN0IsV0FBS2lFLFFBQUwsQ0FBY3BCLDRDQUFLLENBQUN6dEIsTUFBcEIsRUFBNEIvQyxHQUE1QixFQUFpQzJ0QixXQUFqQztBQUNIO0FBdkRMO0FBQUE7QUFBQSxvQ0F5RG9CM3RCLEdBekRwQixFQXlEeUIydEIsV0F6RHpCLEVBeURzQztBQUM5QixXQUFLaUUsUUFBTCxDQUFjcEIsNENBQUssQ0FBQ3Z0QixPQUFwQixFQUE2QmpELEdBQTdCLEVBQWtDMnRCLFdBQWxDO0FBQ0g7QUEzREw7QUFBQTtBQUFBLHdCQTZEUTRDLE1BN0RSLEVBNkRnQnZ3QixHQTdEaEIsRUE2RHFCRCxTQTdEckIsRUE2RGdDO0FBQ3hCLGFBQU8sS0FBSzRJLEdBQUwsQ0FBUzRuQixNQUFULEVBQWlCdndCLEdBQWpCLEVBQXNCRCxTQUF0QixLQUFvQyxJQUEzQztBQUNIO0FBL0RMO0FBQUE7QUFBQSxpQ0FpRWlCQyxHQWpFakIsRUFpRXNCRCxTQWpFdEIsRUFpRWlDO0FBQ3pCLGFBQU8sS0FBSzJJLEdBQUwsQ0FBUzhuQiw0Q0FBSyxDQUFDMXdCLFNBQWYsRUFBMEJFLEdBQTFCLEVBQStCRCxTQUEvQixDQUFQO0FBQ0g7QUFuRUw7QUFBQTtBQUFBLGlDQXFFaUJDLEdBckVqQixFQXFFc0JELFNBckV0QixFQXFFaUM7QUFDekIsYUFBTyxLQUFLMkksR0FBTCxDQUFTOG5CLDRDQUFLLENBQUMzdEIsU0FBZixFQUEwQjdDLEdBQTFCLEVBQStCRCxTQUEvQixDQUFQO0FBQ0g7QUF2RUw7QUFBQTtBQUFBLDhCQXlFY0MsR0F6RWQsRUF5RW1CRCxTQXpFbkIsRUF5RThCO0FBQ3RCLGFBQU8sS0FBSzJJLEdBQUwsQ0FBUzhuQiw0Q0FBSyxDQUFDenRCLE1BQWYsRUFBdUIvQyxHQUF2QixFQUE0QkQsU0FBNUIsQ0FBUDtBQUNIO0FBM0VMO0FBQUE7QUFBQSwrQkE2RWVDLEdBN0VmLEVBNkVvQkQsU0E3RXBCLEVBNkUrQjtBQUN2QixhQUFPLEtBQUsySSxHQUFMLENBQVM4bkIsNENBQUssQ0FBQ3Z0QixPQUFmLEVBQXdCakQsR0FBeEIsRUFBNkJELFNBQTdCLENBQVA7QUFDSDtBQS9FTDtBQUFBO0FBQUEsMkNBaUYyQnd3QixNQWpGM0IsRUFpRm1DdndCLEdBakZuQyxFQWlGd0M7QUFDaEMsVUFBSXl4QixrQkFBa0IsR0FBRyxLQUFLQyxxQkFBTCxDQUEyQlIsZUFBM0IsQ0FBekI7QUFDQSxVQUFJRSxjQUFjLEdBQUdLLGtCQUFrQixDQUFDRSxpQkFBbkIsQ0FBcUNwQixNQUFyQyxDQUFyQjtBQUNBLGFBQU9hLGNBQWMsQ0FBQ3B4QixHQUFELENBQXJCO0FBQ0g7QUFyRkw7QUFBQTtBQUFBLHdCQXVGUXV3QixNQXZGUixFQXVGZ0J2d0IsR0F2RmhCLEVBdUZxQkQsU0F2RnJCLEVBdUZnQztBQUN4QixVQUFJMHhCLGtCQUFrQixHQUFHLEtBQUtDLHFCQUFMLENBQTJCM3hCLFNBQTNCLENBQXpCO0FBQ0EsVUFBSXF4QixjQUFjLEdBQUdLLGtCQUFrQixDQUFDRSxpQkFBbkIsQ0FBcUNwQixNQUFyQyxDQUFyQjtBQUNBLGFBQU9hLGNBQWMsQ0FBQ3B4QixHQUFELENBQWQsSUFBdUIsS0FBSzZ4QixzQkFBTCxDQUE0QnRCLE1BQTVCLEVBQW9DdndCLEdBQXBDLENBQTlCO0FBQ0g7QUEzRkw7QUFBQTtBQUFBLGlDQTZGaUJBLEdBN0ZqQixFQTZGc0JELFNBN0Z0QixFQTZGaUM7QUFDekIsYUFBTyxLQUFLNEksR0FBTCxDQUFTNm5CLDRDQUFLLENBQUMxd0IsU0FBZixFQUEwQkUsR0FBMUIsRUFBK0JELFNBQS9CLENBQVA7QUFDSDtBQS9GTDtBQUFBO0FBQUEsaUNBaUdpQkMsR0FqR2pCLEVBaUdzQkQsU0FqR3RCLEVBaUdpQztBQUN6QixhQUFPLEtBQUs0SSxHQUFMLENBQVM2bkIsNENBQUssQ0FBQzN0QixTQUFmLEVBQTBCN0MsR0FBMUIsRUFBK0JELFNBQS9CLENBQVA7QUFDSDtBQW5HTDtBQUFBO0FBQUEsOEJBcUdjQyxHQXJHZCxFQXFHbUJELFNBckduQixFQXFHOEI7QUFDdEIsYUFBTyxLQUFLNEksR0FBTCxDQUFTNm5CLDRDQUFLLENBQUN6dEIsTUFBZixFQUF1Qi9DLEdBQXZCLEVBQTRCRCxTQUE1QixDQUFQO0FBQ0g7QUF2R0w7QUFBQTtBQUFBLCtCQXlHZUMsR0F6R2YsRUF5R29CRCxTQXpHcEIsRUF5RytCO0FBQ3ZCLGFBQU8sS0FBSzRJLEdBQUwsQ0FBUzZuQiw0Q0FBSyxDQUFDdnRCLE9BQWYsRUFBd0JqRCxHQUF4QixFQUE2QkQsU0FBN0IsQ0FBUDtBQUNIO0FBM0dMO0FBQUE7QUFBQSxrQ0E2R2tCd3dCLE1BN0dsQixFQTZHMEIvTCxRQTdHMUIsRUE2R29DO0FBQzVCLFVBQUlqZixTQUFKLEVBQWV1c0IsSUFBZjs7QUFFQSxjQUFRdkIsTUFBUjtBQUNJLGFBQUtDLDRDQUFLLENBQUMxd0IsU0FBWDtBQUNJZ3lCLGNBQUksR0FBRyxXQUFQO0FBQ0F2c0IsbUJBQVMsR0FBR3dzQixxREFBWjtBQUNBOztBQUNKLGFBQUt2Qiw0Q0FBSyxDQUFDM3RCLFNBQVg7QUFDSWl2QixjQUFJLEdBQUcsV0FBUDtBQUNBdnNCLG1CQUFTLEdBQUd5c0IscURBQVo7QUFDQTs7QUFDSixhQUFLeEIsNENBQUssQ0FBQ3Z0QixPQUFYO0FBQ0k2dUIsY0FBSSxHQUFHLFNBQVA7QUFDQXZzQixtQkFBUyxHQUFHMHNCLG1EQUFaO0FBQ0E7O0FBQ0osYUFBS3pCLDRDQUFLLENBQUN6dEIsTUFBWDtBQUNJK3VCLGNBQUksR0FBRyxRQUFQO0FBQ0F2c0IsbUJBQVMsR0FBRzJzQixrREFBWjtBQUNBO0FBaEJSOztBQW1CQSxVQUFJM3NCLFNBQVMsSUFBSSxDQUFDQSxTQUFTLENBQUNpZixRQUFELENBQTNCLEVBQXVDO0FBQ25DLGNBQU0sSUFBSTNpQixLQUFKLENBQVVpRyw2Q0FBQSxDQUFhLDZCQUFiLEVBQTRDZ3FCLElBQTVDLENBQVYsQ0FBTjtBQUNIO0FBQ0o7QUF0SUw7QUFBQTtBQUFBLHVDQXdJdUJ2QixNQXhJdkIsRUF3SStCNEIsZ0JBeEkvQixFQXdJaURweUIsU0F4SWpELEVBd0k0RDtBQUNwRCxVQUFJNHRCLFdBQUo7O0FBRUEsVUFBSTdsQiwrQ0FBQSxDQUFlcXFCLGdCQUFmLENBQUosRUFBc0M7QUFDbEN4RSxtQkFBVyxHQUFHLEtBQUtobEIsR0FBTCxDQUFTNG5CLE1BQVQsRUFBaUI0QixnQkFBakIsRUFBbUNweUIsU0FBbkMsQ0FBZDs7QUFFQSxZQUFJNHRCLFdBQVcsSUFBSSxJQUFuQixFQUF5QjtBQUNyQixnQkFBTSxJQUFJOXJCLEtBQUosQ0FBVWlHLDZDQUFBLENBQWEsdUNBQWIsRUFBc0RxcUIsZ0JBQXRELEVBQXdFcHlCLFNBQXhFLENBQVYsQ0FBTjtBQUNIO0FBQ0osT0FORCxNQU1PLElBQUkrSCxpREFBQSxDQUFpQnFxQixnQkFBakIsQ0FBSixFQUF3QztBQUMzQ3hFLG1CQUFXLEdBQUd3RSxnQkFBZDtBQUNILE9BRk0sTUFFQTtBQUNILGNBQU0sSUFBSXR3QixLQUFKLENBQVUsbUJBQVYsQ0FBTjtBQUNIOztBQUVELGFBQU84ckIsV0FBUDtBQUNIO0FBeEpMO0FBQUE7QUFBQSwyQkEwSlc0QyxNQTFKWCxFQTBKbUI0QixnQkExSm5CLEVBMEpxQ3B5QixTQTFKckMsRUEwSmdEO0FBQ3hDLFVBQUlxeUIsR0FBRyxHQUFHLEtBQUtDLGtCQUFMLENBQXdCOUIsTUFBeEIsRUFBZ0M0QixnQkFBaEMsRUFBa0RweUIsU0FBbEQsQ0FBVjtBQUNBLFVBQUl5a0IsUUFBUSxHQUFHLElBQUk0TixHQUFKLEVBQWY7QUFFQSxXQUFLRSxhQUFMLENBQW1CL0IsTUFBbkIsRUFBMkIvTCxRQUEzQjtBQUVBLGFBQU9BLFFBQVA7QUFDSDtBQWpLTDtBQUFBO0FBQUEsb0NBbUtvQitMLE1BbktwQixFQW1LNEI0QixnQkFuSzVCLEVBbUs4Q3B5QixTQW5LOUMsRUFtS3lEO0FBQ2pELFVBQUl5a0IsUUFBSjtBQUFBLFVBQ0k0TixHQUFHLEdBQUcsS0FBS0Msa0JBQUwsQ0FBd0I5QixNQUF4QixFQUFnQzRCLGdCQUFoQyxFQUFrRHB5QixTQUFsRCxDQURWO0FBQUEsVUFFSUEsU0FBUyxHQUFHcXlCLEdBQUcsQ0FBQzN2QixTQUFKLENBQWNDLFVBQWQsQ0FBeUIzQyxTQUZ6QztBQUlBLFVBQUkweEIsa0JBQWtCLEdBQUcsS0FBS0MscUJBQUwsQ0FBMkIzeEIsU0FBM0IsQ0FBekI7QUFBQSxVQUNJb2hCLFNBQVMsR0FBR3NRLGtCQUFrQixDQUFDYyxvQkFBbkIsQ0FBd0NoQyxNQUF4QyxDQURoQjtBQUFBLFVBRUl2cEIsTUFBTSxHQUFHbWEsU0FBUyxDQUFDcGUsTUFBVixDQUFpQixVQUFVZ0YsSUFBVixFQUFnQjtBQUN0QyxlQUFPQSxJQUFJLFlBQVlxcUIsR0FBdkI7QUFDSCxPQUZRLENBRmI7O0FBTUEsVUFBSXByQixNQUFNLENBQUM0QixNQUFYLEVBQW1CO0FBQ2Y0YixnQkFBUSxHQUFHeGQsTUFBTSxDQUFDLENBQUQsQ0FBakI7QUFDSCxPQUZELE1BRU87QUFDSHdkLGdCQUFRLEdBQUcsSUFBSTROLEdBQUosRUFBWDtBQUNBLGFBQUtFLGFBQUwsQ0FBbUIvQixNQUFuQixFQUEyQi9MLFFBQTNCO0FBQ0FyRCxpQkFBUyxDQUFDdmYsSUFBVixDQUFlNGlCLFFBQWY7QUFDSDs7QUFFRCxhQUFPQSxRQUFQO0FBQ0g7QUF2TEw7QUFBQTtBQUFBLG9DQXlMb0IyTixnQkF6THBCLEVBeUxzQ3B5QixTQXpMdEMsRUF5TGlEO0FBQ3pDLGFBQU8sS0FBS3l5QixNQUFMLENBQVloQyw0Q0FBSyxDQUFDMXdCLFNBQWxCLEVBQTZCcXlCLGdCQUE3QixFQUErQ3B5QixTQUEvQyxDQUFQO0FBQ0g7QUEzTEw7QUFBQTtBQUFBLG9DQTZMb0JveUIsZ0JBN0xwQixFQTZMc0NweUIsU0E3THRDLEVBNkxpRDtBQUN6QyxhQUFPLEtBQUt5eUIsTUFBTCxDQUFZaEMsNENBQUssQ0FBQzN0QixTQUFsQixFQUE2QnN2QixnQkFBN0IsRUFBK0NweUIsU0FBL0MsQ0FBUDtBQUNIO0FBL0xMO0FBQUE7QUFBQSxpQ0FpTWlCb3lCLGdCQWpNakIsRUFpTW1DcHlCLFNBak1uQyxFQWlNOEM7QUFDdEMsYUFBTyxLQUFLMHlCLGVBQUwsQ0FBcUJqQyw0Q0FBSyxDQUFDenRCLE1BQTNCLEVBQW1Db3ZCLGdCQUFuQyxFQUFxRHB5QixTQUFyRCxDQUFQO0FBQ0g7QUFuTUw7QUFBQTtBQUFBLGtDQXFNa0JveUIsZ0JBck1sQixFQXFNb0NweUIsU0FyTXBDLEVBcU0rQztBQUN2QyxVQUFJbW1CLE9BQU8sR0FBRyxLQUFLbU0sa0JBQUwsQ0FBd0I3Qiw0Q0FBSyxDQUFDdnRCLE9BQTlCLEVBQXVDa3ZCLGdCQUF2QyxFQUF5RHB5QixTQUF6RCxDQUFkOztBQUVBLFVBQUltbUIsT0FBTyxDQUFDempCLFNBQVIsQ0FBa0JDLFVBQWxCLENBQTZCZ3dCLFNBQWpDLEVBQTRDO0FBQ3hDLGVBQU8sS0FBS0YsTUFBTCxDQUFZaEMsNENBQUssQ0FBQ3Z0QixPQUFsQixDQUFQO0FBQ0g7O0FBRUQsYUFBTyxLQUFLd3ZCLGVBQUwsQ0FBcUJqQyw0Q0FBSyxDQUFDdnRCLE9BQTNCLEVBQW9DaWpCLE9BQXBDLENBQVA7QUFDSDtBQTdNTDtBQUFBO0FBQUEsb0NBK01vQmhtQixJQS9NcEIsRUErTTBCO0FBQ2xCLFVBQUlxZixRQUFRLEdBQUdyZixJQUFJLENBQUN1TSxLQUFMLENBQVcsR0FBWCxDQUFmO0FBRUEsYUFBTztBQUNIek0sV0FBRyxFQUFFdWYsUUFBUSxDQUFDb1QsR0FBVCxFQURGO0FBRUhDLFVBQUUsRUFBRXJULFFBQVEsQ0FBQzNXLE1BQVQsR0FBa0IsQ0FBbEIsR0FBc0IyVyxRQUFRLENBQUN6VixJQUFULENBQWMsR0FBZCxDQUF0QixHQUEyQyxFQUY1QztBQUdIeUMsV0FBRyxFQUFFO0FBSEYsT0FBUDtBQUtIO0FBdk5MO0FBQUE7QUFBQSxrQ0F5TmtCck0sSUF6TmxCLEVBeU53QjBsQixLQXpOeEIsRUF5TitCO0FBQ3ZCLFVBQUl0Z0IsSUFBSSxHQUFHLElBQVg7QUFBQSxVQUFpQjBCLE1BQU0sR0FBRyxLQUFLNnJCLGVBQUwsQ0FBcUIzeUIsSUFBckIsQ0FBMUI7O0FBRUEsVUFBSTBsQixLQUFKLEVBQVc7QUFDUCxZQUFJNWUsTUFBTSxDQUFDNHJCLEVBQVgsRUFBZTtBQUNYLGNBQUloTixLQUFLLENBQUM3TCxjQUFOLENBQXFCL1MsTUFBTSxDQUFDNHJCLEVBQTVCLENBQUosRUFBcUM7QUFDakM7QUFDQTVyQixrQkFBTSxDQUFDNHJCLEVBQVAsR0FBWWhOLEtBQUssQ0FBQzVlLE1BQU0sQ0FBQzRyQixFQUFSLENBQWpCO0FBQ0g7QUFDSixTQUxELE1BS087QUFDSCxjQUFJaE4sS0FBSyxDQUFDN0wsY0FBTixDQUFxQjdaLElBQXJCLENBQUosRUFBZ0M7QUFDNUIsZ0JBQUlrRCxLQUFLLEdBQUd3aUIsS0FBSyxDQUFDMWxCLElBQUQsQ0FBakI7O0FBRUEsZ0JBQUk0SCwrQ0FBQSxDQUFlMUUsS0FBZixDQUFKLEVBQTJCO0FBQ3ZCO0FBQ0E0RCxvQkFBTSxHQUFHMUIsSUFBSSxDQUFDdXRCLGVBQUwsQ0FBcUJ6dkIsS0FBckIsQ0FBVDtBQUNILGFBSEQsTUFHTztBQUNIO0FBQ0E0RCxvQkFBTSxDQUFDdUYsR0FBUCxHQUFhbkosS0FBYjtBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQUVELGFBQU80RCxNQUFQO0FBQ0g7QUFsUEw7QUFBQTtBQUFBLHFDQW9QcUIrbEIsTUFwUHJCLEVBb1A2QjdzQixJQXBQN0IsRUFvUG1DMGxCLEtBcFBuQyxFQW9QMENDLFNBcFAxQyxFQW9QcUQ7QUFDN0MsVUFBSTVVLFVBQVUsR0FBRyxLQUFLNmhCLGFBQUwsQ0FBbUI1eUIsSUFBbkIsRUFBeUIwbEIsS0FBekIsQ0FBakI7O0FBRUEsVUFBSTNVLFVBQVUsQ0FBQzFFLEdBQWYsRUFBb0I7QUFDaEIsZUFBTzBFLFVBQVUsQ0FBQzFFLEdBQWxCO0FBQ0g7O0FBRUQsYUFBTyxLQUFLd2dCLE1BQUwsRUFBYTliLFVBQVUsQ0FBQ2pSLEdBQXhCLEVBQTZCaVIsVUFBVSxDQUFDMmhCLEVBQVgsSUFBaUIvTSxTQUE5QyxDQUFQO0FBQ0g7QUE1UEw7QUFBQTtBQUFBLG1DQThQbUIzbEIsSUE5UG5CLEVBOFB5QjBsQixLQTlQekIsRUE4UGdDQyxTQTlQaEMsRUE4UDJDO0FBQ25DLGFBQU8sS0FBS2tOLGdCQUFMLENBQXNCLGNBQXRCLEVBQXNDN3lCLElBQXRDLEVBQTRDMGxCLEtBQTVDLEVBQW1EQyxTQUFuRCxDQUFQO0FBQ0g7QUFoUUw7QUFBQTtBQUFBLG1DQWtRbUIzbEIsSUFsUW5CLEVBa1F5QjBsQixLQWxRekIsRUFrUWdDQyxTQWxRaEMsRUFrUTJDO0FBQ25DLGFBQU8sS0FBS2tOLGdCQUFMLENBQXNCLGNBQXRCLEVBQXNDN3lCLElBQXRDLEVBQTRDMGxCLEtBQTVDLEVBQW1EQyxTQUFuRCxDQUFQO0FBQ0g7QUFwUUw7QUFBQTtBQUFBLGlDQXNRaUIzbEIsSUF0UWpCLEVBc1F1QjBsQixLQXRRdkIsRUFzUThCQyxTQXRROUIsRUFzUXlDO0FBQ2pDLGFBQU8sS0FBS2tOLGdCQUFMLENBQXNCLFlBQXRCLEVBQW9DN3lCLElBQXBDLEVBQTBDMGxCLEtBQTFDLEVBQWlEQyxTQUFqRCxDQUFQO0FBQ0g7QUF4UUw7QUFBQTtBQUFBLGdDQTBRZ0IzbEIsSUExUWhCLEVBMFFzQjBsQixLQTFRdEIsRUEwUTZCQyxTQTFRN0IsRUEwUXdDO0FBQ2hDLGFBQU8sS0FBS2tOLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DN3lCLElBQW5DLEVBQXlDMGxCLEtBQXpDLEVBQWdEQyxTQUFoRCxDQUFQO0FBQ0g7QUE1UUw7QUFBQTtBQUFBLG1DQThRbUJyQixRQTlRbkIsRUE4UTZCamlCLFFBOVE3QixFQThRdUN5d0IsbUJBOVF2QyxFQThRNEQ7QUFDcEQsVUFBSTF0QixJQUFJLEdBQUcsSUFBWDtBQUFBLFVBQWlCMnRCLGVBQWpCO0FBQUEsVUFBa0NDLGlCQUFpQixHQUFHLEtBQXREOztBQUVBLFVBQUlGLG1CQUFKLEVBQXlCO0FBQ3JCO0FBQ0FDLHVCQUFlLEdBQUduckIsNkNBQUEsQ0FBYSxTQUFiLEVBQXdCQSxnREFBQSxDQUFnQnZGLFFBQVEsQ0FBQ3hDLFNBQXpCLENBQXhCLEVBQTZEd0MsUUFBUSxDQUFDdkMsR0FBdEUsQ0FBbEI7QUFDQWt6Qix5QkFBaUIsR0FBRyxLQUFLM0IsWUFBTCxDQUFrQjV2QixPQUFsQixDQUEwQnN4QixlQUExQixNQUErQyxDQUFDLENBQXBFO0FBRUEsYUFBSzFCLFlBQUwsQ0FBa0IzdkIsSUFBbEIsQ0FBdUJxeEIsZUFBdkI7O0FBRUEsWUFBSUMsaUJBQUosRUFBdUI7QUFDbkI7QUFDQSxjQUFJbGMsS0FBSyxHQUFHbFAsNkNBQUEsQ0FBYSxzQkFBYixFQUFxQyxLQUFLeXBCLFlBQUwsQ0FBa0J6bkIsSUFBbEIsQ0FBdUIsTUFBdkIsQ0FBckMsQ0FBWixDQUZtQixDQUduQjs7QUFDQSxlQUFLeW5CLFlBQUwsQ0FBa0Izb0IsTUFBbEIsR0FBMkIsQ0FBM0IsQ0FKbUIsQ0FLbkI7O0FBQ0EsZ0JBQU0sSUFBSS9HLEtBQUosQ0FBVW1WLEtBQVYsQ0FBTjtBQUNIO0FBQ0o7O0FBRUQsVUFBSXpVLFFBQVEsSUFBSXVGLCtDQUFBLENBQWV2RixRQUFRLENBQUM0d0IsTUFBeEIsQ0FBaEIsRUFBaUQ7QUFDN0NyckIsc0RBQUEsQ0FBY3ZGLFFBQVEsQ0FBQzR3QixNQUF2QixFQUErQixVQUFVbHdCLE9BQVYsRUFBbUJqRCxHQUFuQixFQUF3QjtBQUNuRCxjQUFJOEgsK0NBQUEsQ0FBZTdFLE9BQWYsQ0FBSixFQUE2QjtBQUN6QkEsbUJBQU8sR0FBR3FDLElBQUksQ0FBQzBnQixZQUFMLENBQWtCL2lCLE9BQWxCLEVBQTJCVixRQUFRLENBQUNxakIsS0FBcEMsRUFBMkNyakIsUUFBUSxDQUFDeEMsU0FBcEQsQ0FBVjtBQUNIOztBQUNEeWtCLGtCQUFRLENBQUN4a0IsR0FBRCxDQUFSLEdBQWdCc0YsSUFBSSxDQUFDOHRCLGFBQUwsQ0FBbUJud0IsT0FBbkIsQ0FBaEI7QUFDSCxTQUxEO0FBTUg7O0FBRUQsVUFBSSt2QixtQkFBSixFQUF5QjtBQUNyQixhQUFLekIsWUFBTCxDQUFrQm9CLEdBQWxCO0FBQ0g7QUFDSjtBQTlTTDs7QUFBQTtBQUFBO0FBaVRPLElBQUlod0IsUUFBUSxHQUFHLElBQUlnakIsUUFBSixFQUFmLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1VQO0FBQ0E7QUFDQTtBQUVPLElBQU0ySSxNQUFiO0FBQUE7QUFBQTtBQUFBLHdCQUNtQjtBQUNYLGFBQU8sS0FBS3RzQixLQUFMLENBQVd1ZSxTQUFsQjtBQUNIO0FBSEw7QUFBQTtBQUFBLHdCQUtnQjtBQUNSLGFBQU8sS0FBS3ZlLEtBQUwsQ0FBV3dzQixLQUFYLENBQWlCNUksS0FBeEI7QUFDSDtBQVBMOztBQVNJLGtCQUFZNWpCLEtBQVosRUFBbUI7QUFBQTs7QUFDZixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLcXhCLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLbGxCLElBQUwsR0FBWTtBQUNSeVMsZ0JBQVUsRUFBRSxFQURKO0FBRVJlLGdCQUFVLEVBQUUsRUFGSjtBQUdSN0MsYUFBTyxFQUFFO0FBSEQsS0FBWjtBQUtBLFNBQUtBLE9BQUwsR0FBZSxFQUFmO0FBQ0g7O0FBbEJMO0FBQUE7QUFBQSxvQ0FvQm9CeFIsR0FwQnBCLEVBb0J5QjtBQUNqQixVQUFJSyxPQUFPLEdBQUcsS0FBSzBsQixRQUFMLENBQWMvbEIsR0FBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ0ssT0FBTCxFQUFjO0FBQ1ZBLGVBQU8sR0FBR0QscURBQVEsQ0FBQ0osR0FBRCxDQUFsQjtBQUNBLGFBQUsrbEIsUUFBTCxDQUFjL2xCLEdBQWQsSUFBcUJLLE9BQXJCO0FBQ0g7O0FBRUQsYUFBT0EsT0FBUDtBQUNIO0FBN0JMO0FBQUE7QUFBQSxrQ0ErQmtCc1osR0EvQmxCLEVBK0J1QjtBQUNmLGFBQU9DLHFEQUFRLENBQUNELEdBQUQsQ0FBZjtBQUNIO0FBakNMO0FBQUE7QUFBQSw0QkFtQ1lxTSxRQW5DWixFQW1Dc0I5cUIsTUFuQ3RCLEVBbUM4QjNDLE1BbkM5QixFQW1Dc0M7QUFDOUIsVUFBSXJELE1BQUo7QUFBQSxVQUFZK3dCLFFBQVo7QUFBQSxVQUFzQjFOLFNBQVMsR0FBRyxLQUFLN2pCLEtBQUwsQ0FBV3dzQixLQUFYLENBQWlCenVCLFNBQW5EOztBQUVBLFVBQUl5SSxNQUFNLENBQUM4cUIsUUFBRCxDQUFOLEtBQXFCL1gsU0FBekIsRUFBb0M7QUFDaEMvWSxjQUFNLEdBQUdnRyxNQUFNLENBQUM4cUIsUUFBRCxDQUFmO0FBQ0gsT0FGRCxNQUVPO0FBQ0hDLGdCQUFRLEdBQUd6ckIsd0RBQUEsQ0FBd0J3ckIsUUFBeEIsRUFBa0MsR0FBbEMsQ0FBWDtBQUNBOXdCLGNBQU0sR0FBRyxLQUFLRyxRQUFMLENBQWNrRCxNQUFkLEVBQXNCMHRCLFFBQXRCLEVBQWdDLEtBQUszTixLQUFyQyxFQUE0Q0MsU0FBNUMsQ0FBVDtBQUNBcmQsY0FBTSxDQUFDOHFCLFFBQUQsQ0FBTixHQUFtQjl3QixNQUFuQjtBQUNIOztBQUVELGFBQU9BLE1BQVA7QUFDSDtBQS9DTDtBQUFBO0FBQUEscUNBaURxQjh3QixRQWpEckIsRUFpRCtCO0FBQ3ZCLGFBQU8sS0FBS0UsT0FBTCxDQUFhRixRQUFiLEVBQXVCLEtBQUtubEIsSUFBTCxDQUFVeVMsVUFBakMsRUFBNkMsZ0JBQTdDLENBQVA7QUFDSDtBQW5ETDtBQUFBO0FBQUEscUNBcURxQjBTLFFBckRyQixFQXFEK0I7QUFDdkIsYUFBTyxLQUFLRSxPQUFMLENBQWFGLFFBQWIsRUFBdUIsS0FBS25sQixJQUFMLENBQVV3VCxVQUFqQyxFQUE2QyxnQkFBN0MsQ0FBUDtBQUNIO0FBdkRMO0FBQUE7QUFBQSxrQ0F5RGtCMlIsUUF6RGxCLEVBeUQ0QjtBQUNwQixVQUFJdndCLE1BQUo7QUFBQSxVQUFZMHdCLFNBQVo7QUFBQSxVQUF1QmpyQixNQUFNLEdBQUcsS0FBS3NXLE9BQXJDOztBQUVBLFVBQUl0VyxNQUFNLENBQUM4cUIsUUFBRCxDQUFOLEtBQXFCL1gsU0FBekIsRUFBb0M7QUFDaEN4WSxjQUFNLEdBQUd5RixNQUFNLENBQUM4cUIsUUFBRCxDQUFmO0FBQ0gsT0FGRCxNQUVPO0FBQ0hHLGlCQUFTLEdBQUcsS0FBS0QsT0FBTCxDQUFhRixRQUFiLEVBQXVCLEtBQUtubEIsSUFBTCxDQUFVMlEsT0FBakMsRUFBMEMsYUFBMUMsQ0FBWjtBQUNBL2IsY0FBTSxHQUFHLEtBQUtKLFFBQUwsQ0FBYyt3QixZQUFkLENBQTJCRCxTQUEzQixDQUFUO0FBQ0FqckIsY0FBTSxDQUFDOHFCLFFBQUQsQ0FBTixHQUFtQnZ3QixNQUFuQjtBQUNIOztBQUVELGFBQU9BLE1BQVA7QUFDSDtBQXJFTDtBQUFBO0FBQUEsOEJBdUVjO0FBQ04sV0FBS2YsS0FBTCxHQUFhLElBQWI7QUFDSDtBQXpFTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBTyxJQUFJd3VCLEtBQUssR0FBRztBQUNmenRCLFFBQU0sRUFBRSxDQURPO0FBRWZFLFNBQU8sRUFBRSxDQUZNO0FBR2ZuRCxXQUFTLEVBQUUsQ0FISTtBQUlmK0MsV0FBUyxFQUFFO0FBSkksQ0FBWixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFDQTtBQUVPLFNBQVN3dEIsa0JBQVQsQ0FBNEI5dUIsSUFBNUIsRUFBa0M7QUFDckMsT0FBS2l0QixLQUFMLEdBQWExbUIsNENBQUEsQ0FBWSxLQUFLcEYsVUFBakIsRUFBNkJuQixJQUE3QixDQUFiO0FBQ0FvQixvREFBUSxDQUFDZ3NCLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsS0FBS0gsS0FBbkMsRUFBMEMsSUFBMUM7QUFDSDtBQUVNLElBQU10SSxPQUFiLEdBQ0ksaUJBQVkza0IsSUFBWixFQUFrQjtBQUFBOztBQUNkOHVCLG9CQUFrQixDQUFDbHVCLElBQW5CLENBQXdCLElBQXhCLEVBQThCWixJQUE5QjtBQUNILENBSEwsQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTeEIsU0FBVCxDQUFtQkcsSUFBbkIsRUFBeUI7QUFDckIsV0FBU3l6QixhQUFULENBQXVCcHhCLFFBQXZCLEVBQWlDO0FBQzdCLFdBQU91Riw0Q0FBQSxDQUFZO0FBQ2YvSCxlQUFTLEVBQUVHO0FBREksS0FBWixFQUVKcUMsUUFGSSxDQUFQO0FBR0g7O0FBRUQsU0FBTztBQUNIekMsYUFBUyxFQUFFLG1CQUFVRSxHQUFWLEVBQWV5d0IsTUFBZixFQUF1Qmx1QixRQUF2QixFQUFpQztBQUN4QyxhQUFPekMsVUFBUyxDQUFDRSxHQUFELEVBQU15d0IsTUFBTixFQUFja0QsYUFBYSxDQUFDcHhCLFFBQUQsQ0FBM0IsQ0FBaEI7QUFDSCxLQUhFO0FBSUhNLGFBQVMsRUFBRSxtQkFBVTdDLEdBQVYsRUFBZXl3QixNQUFmLEVBQXVCbHVCLFFBQXZCLEVBQWlDO0FBQ3hDLGFBQU9NLFVBQVMsQ0FBQzdDLEdBQUQsRUFBTXl3QixNQUFOLEVBQWNrRCxhQUFhLENBQUNweEIsUUFBRCxDQUEzQixDQUFoQjtBQUNILEtBTkU7QUFPSFUsV0FBTyxFQUFFLGlCQUFVakQsR0FBVixFQUFleXdCLE1BQWYsRUFBdUJsdUIsUUFBdkIsRUFBaUM7QUFDdEMsYUFBT1UsUUFBTyxDQUFDakQsR0FBRCxFQUFNeXdCLE1BQU4sRUFBY2tELGFBQWEsQ0FBQ3B4QixRQUFELENBQTNCLENBQWQ7QUFDSCxLQVRFO0FBVUhRLFVBQU0sRUFBRSxnQkFBVS9DLEdBQVYsRUFBZXl3QixNQUFmLEVBQXVCbHVCLFFBQXZCLEVBQWlDO0FBQ3JDLGFBQU9RLE9BQU0sQ0FBQy9DLEdBQUQsRUFBTXl3QixNQUFOLEVBQWNrRCxhQUFhLENBQUNweEIsUUFBRCxDQUEzQixDQUFiO0FBQ0gsS0FaRTtBQWFIL0IsVUFBTSxFQUFFLGdCQUFVOHlCLFFBQVYsRUFBb0I3QyxNQUFwQixFQUE0Qmx1QixRQUE1QixFQUFzQztBQUMxQyxVQUFJZ2pCLE9BQU8sR0FBRzNoQixRQUFRLENBQUM0aEIsYUFBVCxDQUF1QjhOLFFBQXZCLENBQWQ7QUFDQSxVQUFJTSxJQUFJLEdBQUc1QyxnREFBTyxDQUFDNkMsYUFBUixDQUFzQixhQUF0QixFQUFxQ3BELE1BQXJDLEVBQTZDM29CLDRDQUFBLENBQVk7QUFDaEUvSCxpQkFBUyxFQUFFRyxJQURxRDtBQUVoRUcsZ0JBQVEsRUFBRWtsQixPQUFPLENBQUNsaUI7QUFGOEMsT0FBWixFQUdyRGQsUUFIcUQsQ0FBN0MsQ0FBWDtBQUlBLFVBQUlzbkIsSUFBSSxHQUFHLElBQUkrSixJQUFKLEVBQVg7QUFFQXh4QixpRUFBQSxDQUEyQm1qQixPQUEzQjtBQUNBc0UsVUFBSSxDQUFDMWhCLE9BQUwsR0FBZTJyQixLQUFmLENBQXFCdk8sT0FBckI7QUFDSDtBQXZCRSxHQUFQO0FBeUJIOztBQUVELFNBQVN6bEIsVUFBVCxDQUFtQkUsR0FBbkIsRUFBd0J5d0IsTUFBeEIsRUFBZ0NsdUIsUUFBaEMsRUFBMEM7QUFDdEMsTUFBSW9yQixXQUFXLEdBQUdxRCxnREFBTyxDQUFDNkMsYUFBUixDQUFzQjd6QixHQUF0QixFQUEyQnl3QixNQUEzQixFQUFtQ2x1QixRQUFuQyxDQUFsQjtBQUNBSSxvREFBUSxDQUFDQyxpQkFBVCxDQUEyQjVDLEdBQTNCLEVBQWdDMnRCLFdBQWhDO0FBQ0EsU0FBT0EsV0FBUDtBQUNIOztBQUVELFNBQVM5cUIsVUFBVCxDQUFtQjdDLEdBQW5CLEVBQXdCeXdCLE1BQXhCLEVBQWdDbHVCLFFBQWhDLEVBQTBDO0FBQ3RDLE1BQUlvckIsV0FBVyxHQUFHcUQsZ0RBQU8sQ0FBQytDLGFBQVIsQ0FBc0IvekIsR0FBdEIsRUFBMkJ5d0IsTUFBM0IsRUFBbUNsdUIsUUFBbkMsQ0FBbEI7QUFDQUksb0RBQVEsQ0FBQ0csaUJBQVQsQ0FBMkI5QyxHQUEzQixFQUFnQzJ0QixXQUFoQztBQUNBLFNBQU9BLFdBQVA7QUFDSDs7QUFFRCxTQUFTNXFCLE9BQVQsQ0FBZ0IvQyxHQUFoQixFQUFxQnl3QixNQUFyQixFQUE2Qmx1QixRQUE3QixFQUF1QztBQUNuQyxNQUFJb3JCLFdBQVcsR0FBR3FELGdEQUFPLENBQUNnRCxVQUFSLENBQW1CaDBCLEdBQW5CLEVBQXdCeXdCLE1BQXhCLEVBQWdDbHVCLFFBQWhDLENBQWxCO0FBQ0FJLG9EQUFRLENBQUNLLGNBQVQsQ0FBd0JoRCxHQUF4QixFQUE2QjJ0QixXQUE3QjtBQUNBLFNBQU9BLFdBQVA7QUFDSDs7QUFFRCxTQUFTMXFCLFFBQVQsQ0FBaUJqRCxHQUFqQixFQUFzQnl3QixNQUF0QixFQUE4Qmx1QixRQUE5QixFQUF3QztBQUNwQyxNQUFJb3JCLFdBQVcsR0FBR3FELGdEQUFPLENBQUNpRCxXQUFSLENBQW9CajBCLEdBQXBCLEVBQXlCeXdCLE1BQXpCLEVBQWlDbHVCLFFBQWpDLENBQWxCO0FBQ0FJLG9EQUFRLENBQUNPLGVBQVQsQ0FBeUJsRCxHQUF6QixFQUE4QjJ0QixXQUE5QjtBQUNBLFNBQU9BLFdBQVA7QUFDSDs7QUFFRCxTQUFTb0UsV0FBVCxDQUFxQnZOLFFBQXJCLEVBQStCO0FBQzNCLFNBQU9BLFFBQVEsWUFBWTdqQixvREFBM0I7QUFDSDs7QUFFRCxTQUFTcXhCLFdBQVQsQ0FBcUJ4TixRQUFyQixFQUErQjtBQUMzQixTQUFPQSxRQUFRLFlBQVlsaEIsb0RBQTNCO0FBQ0g7O0FBRUQsU0FBUzR1QixRQUFULENBQWtCMU4sUUFBbEIsRUFBNEI7QUFDeEIsU0FBT0EsUUFBUSxZQUFZMEwsOENBQTNCO0FBQ0g7O0FBRUQsU0FBUytCLFNBQVQsQ0FBbUJ6TixRQUFuQixFQUE2QjtBQUN6QixTQUFPQSxRQUFRLFlBQVkwQixnREFBM0I7QUFDSCIsImZpbGUiOiJhdXRvbWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImF1dG9tYXRlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImF1dG9tYXRlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc2xvdCc7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vcmVuZGVyJztcclxuXHJcbkBjb21wb25lbnQoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnc2xvdCdcclxufSlcclxuY2xhc3MgU2xvdENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubmFtZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgICRyZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHNsb3RzID0gdGhpcy4kJHBhcmVudC5zbG90cztcclxuICAgICAgICB2YXIgdGVtcGxhdGUgPSBzbG90c1t0aGlzLnByb3BzLm5hbWVdO1xyXG5cclxuICAgICAgICBpZiAodGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy4kJG1haW5WaWV3ID0gbmV3IFJlbmRlcmVyKHRoaXMuJCRwYXJlbnQpLnJlbmRlcih0ZW1wbGF0ZSwgdGhpcy4kY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmKHRoaXMuJCRtYWluVmlldykge1xyXG4gICAgICAgICAgICB0aGlzLiQkbWFpblZpZXcuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTWVzc2FnZShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNZXNzYWdlO1xyXG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG4vLyBnbG9iYWwgZXZlbnRzXHJcbmV4cG9ydCB2YXIgZXZlbnRzID0ge1xyXG4gICAgcHJvcGVydHlDaGFuZ2VkOiBuZXcgTWVzc2FnZSgpLFxyXG4gICAgdHJhbnNsYXRlQ2hhbmdlZDogbmV3IE1lc3NhZ2UoKVxyXG59OyIsImV4cG9ydCAqIGZyb20gJy4vbG9jYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vYXBpJzsiLCJleHBvcnQgY2xhc3MgTG9jYWwge1xuICAgIGNvbnN0cnVjdG9yKGUsIGVsbSkge1xuICAgICAgICB0aGlzLiRldmVudCA9IGU7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBlbG07XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBvbihmbikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmhhbmRsZXJzLmluZGV4T2YoZm4pO1xuXG4gICAgICAgIC8vIG5vdCBmb3VuZFxuICAgICAgICBpZihpbmRleCA9PT0gLTEpe1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGZuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2FuIG5vdCByZWdpc3RlciBzYW1lIGV2ZW50IGhhbmRsZXIgbW9yZSB0aGFuIG9uY2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLm9mZihmbik7XG4gICAgfVxuXG4gICAgb2ZmKGZuKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaGFuZGxlcnMuaW5kZXhPZihmbik7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZShkYXRhLCBzY29wZSkge1xuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IHRoaXM7XG4gICAgICAgIC8vIGF0dGFjaCBldmVudCBkYXRhXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwge307XG5cbiAgICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5jYWxsKHNjb3BlLCB0aGlzKSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuL2RvbSc7XHJcblxyXG5kb20ubG9hZFN0eWxlU3RyaW5nKCcubS1jb21wb25lbnR7ZGlzcGxheTppbmhlcml0O30gLm0taGlkZXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9Jyk7XHJcblxyXG5leHBvcnQgdmFyIE1fQ01QX0NMQVNTID0gJ20tY29tcG9uZW50JztcclxuZXhwb3J0IHZhciBNX0hJREVfQ0xBU1MgPSAnbS1oaWRlJzsiLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50KG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyQ29tcG9uZW50KGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmUobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCB0YXJnZXQpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihtZXRhZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRhcmdldC5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckZpbHRlcihrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZpbHRlcic7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UnOyIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlKG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyU2VydmljZShrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnYmluZEh0bWwnXHJcbn0pXHJcbmNsYXNzIEJpbmRIdG1sRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50LmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnYmluZCdcbn0pXG5jbGFzcyBCaW5kRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRlbGVtZW50LmlubmVyVGV4dCA9IHZhbHVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdoaWRlJ1xufSlcbmNsYXNzIEhpZGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXNbdmFsdWUgPyAnJGhpZGVFbGVtZW50JyA6ICckc2hvd0VsZW1lbnQnXSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnaWYnXHJcbn0pXHJcbmNsYXNzIElmRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy4kcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLWlmJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzW3ZhbHVlID8gJyRhcHBlbmRFbGVtZW50JyA6ICckcmVtb3ZlRWxlbWVudCddKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmQnO1xuZXhwb3J0ICogZnJvbSAnLi9iaW5kLWh0bWwnO1xuZXhwb3J0ICogZnJvbSAnLi9yZXBlYXQnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2hpZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaG93JztcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSc7XG5leHBvcnQgKiBmcm9tICcuL2lmJztcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoJzsiLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtb2RlbCdcbn0pXG5jbGFzcyBNb2RlbERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmlld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJzZXJzID0gW107XG4gICAgICAgIHRoaXMuZm9ybWF0dGVycyA9IFtdO1xuICAgICAgICB0aGlzLnZpZXdDaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzID0gW107XG4gICAgICAgIHRoaXMuc3RhdHVzID0ge1xuICAgICAgICAgICAgZmVlZGJhY2s6ICcnLFxuICAgICAgICAgICAgcHJpc3RpbmU6IHRydWUsXG4gICAgICAgICAgICBkaXJ0eTogZmFsc2UsXG4gICAgICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgICAgIGludmFsaWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgIHByaXN0aW5lOiAnbi1wcmlzdGluZScsXG4gICAgICAgICAgICAgICAgZGlydHk6ICduLWRpcnR5JyxcbiAgICAgICAgICAgICAgICB2YWxpZDogJ24tdmFsaWQnLFxuICAgICAgICAgICAgICAgIGludmFsaWQ6ICduLWludmFsaWQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21taXRNb2RlbFZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBhZnRlckxpbmsoKSB7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy4kZWxlbWVudC5uYW1lO1xuXG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5zdGF0ZVtuYW1lXSA9IHRoaXMuc3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJGNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRjb21wb25lbnQuJGJpbmQoJ2NoYW5nZScsIGUgPT4gdGhpcy5jb21taXRWaWV3VmFsdWUoZS5kYXRhLm5ld3ZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB0aGlzLmNvbW1pdFZpZXdWYWx1ZShlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuXG4gICAgfVxuXG4gICAgY29tbWl0TW9kZWxWYWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5tb2RlbFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCB0aGlzLm1vZGVsVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLmZvcm1hdHRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMudmlld1ZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC4kc2V0UHJvcGVydHkoJ3ZhbHVlJywgbmV3VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVFbG1Dc3NDbGFzcygpO1xuICAgIH1cblxuICAgIGNvbW1pdFZpZXdWYWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy52aWV3VmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5tYXJrRGlydHlTdGF0dXModHJ1ZSk7XG5cbiAgICAgICAgdGhpcy52aWV3Q2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCBzZWxmLnZpZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmlld1ZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgdGhpcy5wYXJzZXJzLmZvckVhY2goZnVuY3Rpb24gKHBhcnNlcikge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBwYXJzZXIuY2FsbChzZWxmLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKHRoaXMubW9kZWxWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCBzZWxmLm1vZGVsVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLiRiaW5kaW5nLmFzc2lnbihuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRWxtQ3NzQ2xhc3MoKSB7XG4gICAgICAgIHZhciBlbGUgPSB0aGlzLiRlbGVtZW50LFxuICAgICAgICAgICAgY3NzID0gdGhpcy5vcHRpb25zLmNzcztcblxuICAgICAgICBpZiAodGhpcy5zdGF0dXMuZGlydHkpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5kaXJ0eSk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MucHJpc3RpbmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnByaXN0aW5lKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5kaXJ0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0dXMudmFsaWQpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy52YWxpZCk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MuaW52YWxpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MuaW52YWxpZCk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MudmFsaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFya0RpcnR5U3RhdHVzKGRpcnR5KSB7XG4gICAgICAgIHRoaXMuc3RhdHVzLmRpcnR5ID0gZGlydHk7XG4gICAgICAgIHRoaXMuc3RhdHVzLnByaXN0aW5lID0gIWRpcnR5O1xuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XG4gICAgfVxuXG4gICAgbWFya1ZhbGlkU3RhdHVzKHZhbGlkLCBmZWVkYmFjaykge1xuICAgICAgICB0aGlzLnN0YXR1cy52YWxpZCA9IHZhbGlkO1xuICAgICAgICB0aGlzLnN0YXR1cy5pbnZhbGlkID0gIXZhbGlkO1xuICAgICAgICB0aGlzLnN0YXR1cy5mZWVkYmFjayA9IGZlZWRiYWNrO1xuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi9kb20nO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAncmVwZWF0J1xufSlcbmNsYXNzIFJlcGVhdERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXRlbUV4cCA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1zRXhwID0gJyc7XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gJyc7XG4gICAgICAgIHRoaXMuaXRlbVZpZXdzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnVud2F0Y2hDb2xsZWN0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbkNvbXBpbGUodmVsbSwgdmF0dHIpIHtcbiAgICAgICAgdmFyIGFyZyA9IHZhdHRyLm5vZGVWYWx1ZTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvXihbYS16X10rXFx3KylcXHMraW5cXHMrKC4rKSQvaTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhdHRlcm4uZXhlYyhhcmcpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtLXJlcGVhdDogcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pdGVtRXhwID0gcmVzdWx0WzFdO1xuICAgICAgICB0aGlzLml0ZW1zRXhwID0gcmVzdWx0WzJdO1xuICAgICAgICB2ZWxtLnJlbW92ZUF0dHIodmF0dHIpO1xuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IHZlbG0uZ2V0T3V0ZXJUcGwoKTtcblxuICAgICAgICAvLyBpZGVudGlmeSB0aGlzIGRpcmVjdGl2ZSB3b3VsZCB0YWtlIG92ZXIgbGluayBmdW5jdGlvbiBmb3IgcmVsYXRlZCB2aXJ0dWFsIGVsZW1lbnQgbm9kZSwgb25MaW5rIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIG9uTGluayhzY29wZSkge1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdzdGFydDogbS1yZXBlYXQnKTtcbiAgICAgICAgdmFyIGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2VuZDogbS1yZXBlYXQnKTtcblxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcihzY29wZSkpO1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgICAgIHRoaXMudW53YXRjaENvbGxlY3Rpb24gPSBzY29wZS4kd2F0Y2hDb2xsZWN0aW9uKHRoaXMuaXRlbXNFeHAsICgpID0+IHtcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IHRoaXMucmVuZGVyKHNjb3BlKTtcbiAgICAgICAgICAgIGRvbS5yZW1vdmVFbGVtZW50c0JldHdlZW4oaGVhZGVyLCBmb290ZXIpO1xuICAgICAgICAgICAgZm9vdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZyYWdtZW50LCBmb290ZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKHNjb3BlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGl0ZW1zID0gc2NvcGUuJGV2YWwodGhpcy5pdGVtc0V4cCk7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdmFyIGl0ZW1WaWV3cyA9IG5ldyBNYXAoKTtcblxuICAgICAgICB1dGlscy5mb3JFYWNoKGl0ZW1zLCBmdW5jdGlvbiAoaXRlbSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgaXRlbVZpZXcgPSBzZWxmLmdldFZpZXdGcm9tQnVmZmVyKHNlbGYuaXRlbVZpZXdzLCBpdGVtKTtcblxuICAgICAgICAgICAgaWYgKCFpdGVtVmlldykge1xuICAgICAgICAgICAgICAgIHZhciBsb2NhbHMgPSB7fTtcbiAgICAgICAgICAgICAgICBsb2NhbHNbJyRrZXknXSA9IGtleTtcbiAgICAgICAgICAgICAgICBsb2NhbHNbJyRpbmRleCddID0ga2V5O1xuICAgICAgICAgICAgICAgIGxvY2Fsc1tzZWxmLml0ZW1FeHBdID0gaXRlbTtcbiAgICAgICAgICAgICAgICBpdGVtVmlldyA9IHNlbGYuJHJlbmRlcihzZWxmLml0ZW1UZW1wbGF0ZSwgbG9jYWxzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5zZXRWaWV3VG9CdWZmZXIoaXRlbVZpZXdzLCBpdGVtLCBpdGVtVmlldyk7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpdGVtVmlldy5jb250ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pdGVtVmlld3MuZm9yRWFjaChmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgICAgICAgICAgICAgdmlldy5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pdGVtVmlld3MgPSBpdGVtVmlld3M7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cblxuICAgIGdldFZpZXdGcm9tQnVmZmVyKGJ1ZmZlciwgZGF0YUl0ZW0pIHtcbiAgICAgICAgdmFyIHZpZXc7XG5cbiAgICAgICAgaWYgKGJ1ZmZlci5oYXMoZGF0YUl0ZW0pKSB7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IGJ1ZmZlci5nZXQoZGF0YUl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAobGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2aWV3ID0gbGlzdC5zaGlmdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidWZmZXIuZGVsZXRlKGRhdGFJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2aWV3O1xuICAgIH1cblxuICAgIHNldFZpZXdUb0J1ZmZlcihidWZmZXIsIGRhdGFJdGVtLCB2aWV3KSB7XG4gICAgICAgIHZhciBsaXN0O1xuXG4gICAgICAgIGlmIChidWZmZXIuaGFzKGRhdGFJdGVtKSkge1xuICAgICAgICAgICAgbGlzdCA9IGJ1ZmZlci5nZXQoZGF0YUl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdCA9IFtdO1xuICAgICAgICAgICAgYnVmZmVyLnNldChkYXRhSXRlbSwgbGlzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2godmlldyk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLml0ZW1WaWV3cy5mb3JFYWNoKChsaXN0KSA9PiBsaXN0LmZvckVhY2godmlldyA9PiB2aWV3LmRlc3Ryb3koKSkpO1xuICAgICAgICB0aGlzLnVud2F0Y2hDb2xsZWN0aW9uICYmIHRoaXMudW53YXRjaENvbGxlY3Rpb24oKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdzaG93J1xufSlcbmNsYXNzIFNob3dEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXNbdmFsdWUgPyAnJHNob3dFbGVtZW50JyA6ICckaGlkZUVsZW1lbnQnXSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ2NoZWNrZWQnXG59KVxuY2xhc3MgQ2hlY2tlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2NoZWNrZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdkaXNhYmxlZCdcbn0pXG5jbGFzcyBEaXNhYmxlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2Rpc2FibGVkJyk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vY2hlY2tlZCdcbmV4cG9ydCAqIGZyb20gJy4vZGlzYWJsZWQnXG5leHBvcnQgKiBmcm9tICcuL3JlYWRvbmx5J1xuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3RlZCciLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ3JlYWRvbmx5J1xufSlcbmNsYXNzIFJlYWRvbmx5RGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigncmVhZG9ubHknKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdzZWxlY3RlZCdcbn0pXG5jbGFzcyBTZWxlY3RlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3NlbGVjdGVkJyk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuXG5leHBvcnQgY2xhc3MgU3RhdGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKGtleSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy4kZWxlbWVudC5oYXNBdHRyaWJ1dGUodGhpcy5rZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5rZXksICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRlbGVtZW50Lmhhc0F0dHJpYnV0ZSh0aGlzLmtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2NsYXNzJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnY2xhc3NFdmVuJ1xyXG59KVxyXG5jbGFzcyBDbGFzc0V2ZW5EaXJlY3RpdmUgZXh0ZW5kcyBDbGFzc0RpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGV2YWwoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDbGFzc0RpcmVjdGl2ZSB9IGZyb20gJy4vY2xhc3MnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdjbGFzc09kZCdcclxufSlcclxuY2xhc3MgQ2xhc3NPZGREaXJlY3RpdmUgZXh0ZW5kcyBDbGFzc0RpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGV2YWwoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uLy4uL2RvbSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ2NsYXNzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xhc3NEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZShuZXdDbGFzcywgb2xkQ2xhc3MpIHtcclxuICAgICAgICBpZiAodGhpcy5za2lwQ3VycmVudEVsbSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvbGRDbGFzcykge1xyXG4gICAgICAgICAgICBkb20ucmVtb3ZlQ2xhc3ModGhpcy4kZWxlbWVudCwgb2xkQ2xhc3Muam9pbignICcpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXdDbGFzcykge1xyXG4gICAgICAgICAgICBkb20uYWRkQ2xhc3ModGhpcy4kZWxlbWVudCwgbmV3Q2xhc3Muam9pbignICcpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vY2xhc3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NsYXNzLWV2ZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NsYXNzLW9kZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlLWV2ZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlLW9kZCc7IiwiaW1wb3J0IHsgU3R5bGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnc3R5bGVFdmVuJ1xyXG59KVxyXG5jbGFzcyBTdHlsZUV2ZW5EaXJlY3RpdmUgZXh0ZW5kcyBTdHlsZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGV2YWwoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdHlsZURpcmVjdGl2ZSB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdzdHlsZU9kZCdcclxufSlcclxuY2xhc3MgU3R5bGVPZGREaXJlY3RpdmUgZXh0ZW5kcyBTdHlsZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGV2YWwoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdzdHlsZSdcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKG5ld1N0eWxlLCBvbGRTdHlsZSkge1xuICAgICAgICBpZiAodGhpcy5za2lwQ3VycmVudEVsbSgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFN0eWxlKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG9sZFN0eWxlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIHNlbGYuJGVsZW1lbnQuc3R5bGVba2V5XSA9ICcnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QobmV3U3R5bGUpKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG5ld1N0eWxlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIHNlbGYuJGVsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBza2lwQ3VycmVudEVsbSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3N3aXRjaCdcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoLWRlZmF1bHQnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC13aGVuJyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ3N3aXRjaERlZmF1bHQnXG59KVxuY2xhc3MgU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IG51bGw7XG4gICAgICAgIHRoaXMuJHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnc3dpdGNoLWRlZmF1bHQnKTtcbiAgICB9XG5cbiAgICBhZnRlckxpbmsoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IHRoaXMuJHNlZWtVcERpcmVjdGl2ZSgnc3dpdGNoJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3dpdGNoQ3RybCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmUgbS1zd2l0Y2ggZGlyZWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaEN0cmwubWF0Y2hEZWZhdWx0Lm9uKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXNbdGhpcy5zd2l0Y2hDdHJsLmRlZmF1bHRNYXRjaGVkID8gJyRhcHBlbmRFbGVtZW50JyA6ICckcmVtb3ZlRWxlbWVudCddKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCF0aGlzLnN3aXRjaEN0cmwuZGVmYXVsdE1hdGNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlbW92ZUVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdzd2l0Y2hXaGVuJ1xufSlcbmNsYXNzIFN3aXRjaFdoZW5EaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXRjaGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuJHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnc3dpdGNoLXdoZW4nKTtcbiAgICB9XG5cbiAgICBhZnRlckxpbmsoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IHRoaXMuJHNlZWtVcERpcmVjdGl2ZSgnc3dpdGNoJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3dpdGNoQ3RybCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmUgbS1zd2l0Y2ggZGlyZWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaEN0cmwuY2hhbmdlZC5vbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbWF0Y2hlZCA9IHRoaXMuc3dpdGNoQ3RybC52YWx1ZSA9PT0gdGhpcy52YWx1ZTtcblxuICAgICAgICBpZih0aGlzLm1hdGNoZWQgIT0gbWF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy5tYXRjaGVkID0gbWF0Y2hlZDtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaEN0cmwucGx1c01hdGNoKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoQ3RybC5taW51c01hdGNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzW21hdGNoZWQgPyAnJGFwcGVuZEVsZW1lbnQnIDogJyRyZW1vdmVFbGVtZW50J10oKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnc3dpdGNoJ1xufSlcbmNsYXNzIFN3aXRjaERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1hdGNoQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLmRlZmF1bHRNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYXRjaERlZmF1bHQgPSBuZXcgTWVzc2FnZSgpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkLmZpcmUoKTtcbiAgICB9XG5cbiAgICBwbHVzTWF0Y2goKSB7XG4gICAgICAgIHRoaXMubWF0Y2hDb3VudCsrO1xuICAgICAgICB0aGlzLmNoZWNrRGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG1pbnVzTWF0Y2goKSB7XG4gICAgICAgIHRoaXMubWF0Y2hDb3VudC0tO1xuICAgICAgICB0aGlzLmNoZWNrRGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNoZWNrRGVmYXVsdCgpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRNYXRjaGVkID0gdGhpcy5tYXRjaENvdW50IDw9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdE1hdGNoZWQgIT09IGRlZmF1bHRNYXRjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRNYXRjaGVkID0gZGVmYXVsdE1hdGNoZWQ7XG4gICAgICAgICAgICB0aGlzLm1hdGNoRGVmYXVsdC5maXJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG5mdW5jdGlvbiBnZXRDaGlsZHJlbk9mRWxlbWVudChlbG0pIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxtLmNoaWxkTm9kZXMsIDApO1xufVxuXG5mdW5jdGlvbiBjbGVhckNoaWxkcmVuT2ZFbGVtZW50KGVsbSkge1xuICAgIGdldENoaWxkcmVuT2ZFbGVtZW50KGVsbSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgZWxtLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQoZWxtLCBuZXdFbG0pIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGVsbS5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWxtLCBlbG0pO1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsbSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsbSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gZWxtLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsbSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50c0JldHdlZW4oc3RhcnRFbG0sIGVuZEVsbSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gc3RhcnRFbG0ucGFyZW50Tm9kZTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IGdldENoaWxkcmVuT2ZFbGVtZW50KHBhcmVudE5vZGUpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nID09PSBzdGFydEVsbSAmJiBjaGlsZCAhPT0gZW5kRWxtKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgPT09IGVuZEVsbSAmJiBjaGlsZCAhPT0gc3RhcnRFbG0pIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnQoZWxtLCBuZXdFbG0pIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGVsbS5wYXJlbnROb2RlO1xuXG4gICAgaWYgKHBhcmVudE5vZGUubGFzdENoaWxkID09PSBlbG0pIHtcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbG0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsbSwgZWxtLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzIChlbG0sIGNscykge1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGVsbS5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbG0uY2xhc3NMaXN0LmFkZChjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbG0uZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgICAgICBpZiAoY3VyLmluZGV4T2YoJyAnICsgY2xzICsgJyAnKSA8IDApIHtcbiAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKGVsbSwgY2xzKSB7XG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZWxtLmNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbHMuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5jbGFzc0xpc3QucmVtb3ZlKGMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWxtLmNsYXNzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWxtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICAgICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcbiAgICAgICAgd2hpbGUgKGN1ci5pbmRleE9mKHRhcikgPj0gMCkge1xuICAgICAgICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpO1xuICAgICAgICB9XG4gICAgICAgIGN1ciA9IGN1ci50cmltKCk7XG4gICAgICAgIGlmIChjdXIpIHtcbiAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY3VyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRTdHlsZVN0cmluZyhjc3MpIHtcbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbmV4cG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgcmVtb3ZlQ2xhc3MsXG4gICAgYXBwZW5kRWxlbWVudCxcbiAgICByZW1vdmVFbGVtZW50LFxuICAgIHJlcGxhY2VFbGVtZW50LFxuICAgIGdldENoaWxkcmVuT2ZFbGVtZW50LFxuICAgIHJlbW92ZUVsZW1lbnRzQmV0d2VlbixcbiAgICBjbGVhckNoaWxkcmVuT2ZFbGVtZW50LFxuICAgIGxvYWRTdHlsZVN0cmluZ1xufTsiLCJpbXBvcnQgeyBBU1QgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IHBhcnNlRXhwIH0gIGZyb20gJy4vZXhwLWFwaSc7XG5pbXBvcnQgeyBFeHBCdWlsZGVyIH0gZnJvbSAnLi9leHAtYnVpbGRlcic7XG5cbmNsYXNzIEFjY2Vzc29yIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWUsIGV4cCkge1xuICAgICAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB7fTtcbiAgICB9XG5cbiAgICBjcmVhdGVDaGlsZChrZXksIGNhbGxlZSwgZXhwKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGlsZHJlbltrZXldKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2tleV0gPSBuZXcgQWNjZXNzb3IoY2FsbGVlLCBleHApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5ba2V5XTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbmFseXNlciB7XG4gICAgY29uc3RydWN0b3IocGFyc2VyKSB7XG4gICAgICAgIHRoaXMucGFyc2VyID0gcGFyc2VyIHx8IHtcbiAgICAgICAgICAgIHBhcnNlRXhwcmVzc2lvbjogcGFyc2VFeHBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY2Nlc3NvciA9IHt9O1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgRXhwQnVpbGRlcigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUFjY2Vzc29yKGtleSwgY2FsbGVlLCBleHApIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjY2Vzc29yW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuYWNjZXNzb3Jba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NvcltrZXldO1xuICAgIH1cblxuICAgIGFuYWx5c2UoZXhwKSB7XG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5wYXJzZXIucGFyc2VFeHByZXNzaW9uKGV4cCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFuYWx5c2VQcm9ncmFtKHByb2dyYW0pO1xuICAgIH1cblxuICAgIGFuYWx5c2VQcm9ncmFtKHByb2dyYW0pIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NvciA9IHt9O1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICBwcm9ncmFtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB0aGlzLmFuYWx5c2VOb2RlKGNoaWxkKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY2Vzc29yO1xuICAgIH1cblxuICAgIGFuYWx5c2VOb2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlRXhwcmVzc2lvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQ29uZGl0aW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlTG9naWMobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VVbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUNhbGwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZU1lbWJlcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlSWRlbnRpZmllcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlTGl0ZXJhbChub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZVByb3BlcnR5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VPYmplY3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGFuYWx5c2VFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICBleHAuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHRoaXMuYW5hbHlzZU5vZGUoY2hpbGQpKTtcbiAgICB9XG5cbiAgICBhbmFseXNlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYXNzaWdubWVudC5yaWdodCk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24udGVzdCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmFsdGVybmF0ZSk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VMb2dpYyhsb2dpYykge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLmxlZnQpO1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLnJpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmFseXNlQmluYXJ5KGJpbmFyeSkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGJpbmFyeS5sZWZ0KTtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShiaW5hcnkucmlnaHQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VVbmFyeSh1bmFyeSkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKHVuYXJ5LmFyZyk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUNhbGwoY2FsbCkge1xuICAgICAgICBjYWxsLmFyZ3MuZm9yRWFjaChhcmcgPT4gdGhpcy5hbmFseXNlTm9kZShhcmcpKTtcblxuICAgICAgICBpZiAoIWNhbGwuZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNhbGwuY2FsbGVlLCB7IGNhbGxlZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuYWx5c2VNZW1iZXIobWVtYmVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5vYmplY3QpO1xuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1lbWJlci5wcm9wZXJ0eS50eXBlID09PSBBU1QuTGl0ZXJhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3JlYXRlQ2hpbGQobWVtYmVyLnByb3BlcnR5LnZhbHVlLCBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChtZW1iZXIucHJvcGVydHkpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmNyZWF0ZUNoaWxkKGtleSwgY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hbmFseXNlTm9kZShtZW1iZXIucHJvcGVydHksIHtcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFuYWx5c2VJZGVudGlmaWVyKGlkZW50aWZpZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChpZGVudGlmaWVyKSxcbiAgICAgICAgICAgIGNhbGxlZSA9IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWU7XG5cbiAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnBhcmVudC5jcmVhdGVDaGlsZChrZXksIGNhbGxlZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVBY2Nlc3NvcihrZXksIGNhbGxlZSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUxpdGVyYWwobGl0ZXJhbCwgY29udGV4dCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGxpdGVyYWwpO1xuXG4gICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wYXJlbnQuY3JlYXRlQ2hpbGQoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuYWx5c2VQcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUocHJvcC52YWx1ZSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZU9iamVjdChvYmopIHtcbiAgICAgICAgb2JqLnByb3BlcnRpZXMuZm9yRWFjaChpdGVtID0+IHRoaXMuYW5hbHlzZU5vZGUoaXRlbSkpO1xuICAgIH1cblxuICAgIGFuYWx5c2VBcnJheShhcnIpIHtcbiAgICAgICAgYXJyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB0aGlzLmFuYWx5c2UoY2hpbGQpKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQVNULCBOdWxsRXhwcmVzc2lvbk5vZGUgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcbmltcG9ydCB7IHBhcnNlRXhwIH0gIGZyb20gJy4vZXhwLWFwaSc7XG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIGFzc2lnbkludGVyY2VwdG9yOiBudWxsLFxuICAgIGxvY2FsczogbnVsbFxufTtcblxuZXhwb3J0IGNsYXNzIEV2YWx1YXRvciB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBFeHBCdWlsZGVyKCk7XG4gICAgICAgIHRoaXMucGFyc2VyID0gc2NvcGUuJHBhcnNlciB8fCB7cGFyc2VFeHByZXNzaW9uOiBwYXJzZUV4cH07XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlIGZyb20gZXhwcmVzc2lvblxuICAgIGV2YWx1YXRlKGV4cCkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucGFyc2VyLnBhcnNlRXhwcmVzc2lvbihleHApO1xuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVQcm9ncmFtKHByb2dyYW0pIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuXG4gICAgICAgIHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpKTtcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC4kbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlIHRvIGV4cHJlc3Npb25cbiAgICBhc3NpZ24oZXhwLCB2YWx1ZSkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucGFyc2VyLnBhcnNlRXhwcmVzc2lvbihleHApO1xuICAgICAgICByZXR1cm4gdGhpcy5hc3NpZ25Qcm9ncmFtKHByb2dyYW0sIHZhbHVlKTtcbiAgICB9XG5cbiAgICBhc3NpZ25Qcm9ncmFtKHByb2dyYW0sIHZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleHByZXNzaW9uID0gdGhpcy5wcm9ncmFtLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYgKGV4cHJlc3Npb24uY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFzc2lnbm1lbnQgPSBleHByZXNzaW9uLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYgKGFzc2lnbm1lbnQudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50Lm9iamVjdCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBudWxsIG9yIHVuZGVmaW5lZCcsIHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50Lm9iamVjdCkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQucHJvcGVydHksIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleTogIWFzc2lnbm1lbnQuY29tcHV0ZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbnVsbCBvciB1bmRlZmluZWQnLCB0aGlzLmJ1aWxkZXIuYnVpbGQoYXNzaWdubWVudC5wcm9wZXJ0eSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRhcmdldCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXNzaWdubWVudC50eXBlID09PSBBU1QuSWRlbnRpZmllcikge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0aGlzLnNjb3BlLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVFeHByZXNzaW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUNvbmRpdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMb2dpYyhub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlVW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQ2FsbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU1lbWJlcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUlkZW50aWZpZXIobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMaXRlcmFsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVQcm9wZXJ0eShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU9iamVjdChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LmxlZnQsIHtcbiAgICAgICAgICAgIGFzc2lnbm1lbnRMZWZ0OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LnJpZ2h0KTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldC5vYmpbdGFyZ2V0LnByb3BdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0YXJnZXQub2JqLCB0YXJnZXQucHJvcCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZhbHVhdGVDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24udGVzdCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24uYWx0ZXJuYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24uY29uc2VxdWVudCk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVMb2dpYyhsb2dpYykge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUobG9naWMubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUobG9naWMucmlnaHQpO1xuXG4gICAgICAgIHN3aXRjaCAobG9naWMub3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJyYmJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3x8JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVCaW5hcnkoYmluYXJ5KSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShiaW5hcnkubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYmluYXJ5LnJpZ2h0KTtcblxuICAgICAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xuICAgICAgICBzd2l0Y2ggKGJpbmFyeS5vcGVyYXRvcikge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICsgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAtIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC8gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyUnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAlIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPCByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID4gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPD0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPj0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyE9JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz09PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnIT09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlVW5hcnkodW5hcnkpIHtcbiAgICAgICAgdmFyIHJlc3VsdCxcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUodW5hcnkuYXJnKTtcblxuICAgICAgICBzd2l0Y2ggKHVuYXJ5Lm9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IC12YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyEnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICF2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVDYWxsKGNhbGwpIHtcbiAgICAgICAgdmFyIGFyZ1ZhbHVlcyA9IGNhbGwuYXJncy5tYXAoYXJnID0+IHRoaXMuZXZhbHVhdGVOb2RlKGFyZykpO1xuXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2FsbC5jYWxsZWUsIHtcbiAgICAgICAgICAgIGNhbGxlZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY2FsbC5maWx0ZXIpIHtcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSB0aGlzLnBhcnNlci5yZXNvbHZlRmlsdGVyKGNvbnRleHQucHJvcCk7XG5cbiAgICAgICAgICAgIGlmKGZpbHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWx0ZXIgXCInICsgY29udGV4dC5wcm9wICsgJ1wiIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIudHJhbnNmb3JtLmFwcGx5KGZpbHRlciwgYXJnVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBmbiA9IGNvbnRleHQub2JqW2NvbnRleHQucHJvcF07XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dC5vYmosIGFyZ1ZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udGV4dC5wcm9wICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZhbHVhdGVNZW1iZXIobWVtYmVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIub2JqZWN0KTtcblxuICAgICAgICBpZiAob2JqID09IG51bGwgJiYgKHRoaXMub3B0aW9ucy5hbGxvd051bGwgfHwgbWVtYmVyLm9iamVjdC5hbGxvd051bGwpKSB7XG4gICAgICAgICAgICBvYmogPSBuZXcgTnVsbEV4cHJlc3Npb25Ob2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVtYmVyLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5wcm9wZXJ0eSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqW3Byb3BdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgdGFyZ2V0OiBvYmosXG4gICAgICAgICAgICB0YXJnZXROb2RlOiBtZW1iZXIub2JqZWN0LFxuICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlLFxuICAgICAgICAgICAgYXNzaWdubWVudExlZnQ6IGNvbnRleHQgJiYgY29udGV4dC5hc3NpZ25tZW50TGVmdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUlkZW50aWZpZXIoaWRlbnRpZmllciwgY29udGV4dCkge1xuICAgICAgICB2YXIgdGFyZ2V0O1xuXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IHt9O1xuXG4gICAgICAgIGlmIChjb250ZXh0LnRhcmdldE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5zY29wZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldCA9IGNvbnRleHQudGFyZ2V0XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5hc3NpZ25tZW50TGVmdCB8fCBjb250ZXh0LmNhbGxlZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvYmo6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBwcm9wOiBpZGVudGlmaWVyLm5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5wcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXIubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXRbaWRlbnRpZmllci5uYW1lXTtcblxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgdGhpcy5vcHRpb25zLmxvY2Fscykge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5vcHRpb25zLmxvY2Fsc1tpZGVudGlmaWVyLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUxpdGVyYWwobGl0ZXJhbCkge1xuICAgICAgICByZXR1cm4gbGl0ZXJhbC52YWx1ZTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZVByb3BlcnR5KHByb3ApIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZXZhbHVhdGVOb2RlKHByb3Aua2V5LCB7XG4gICAgICAgICAgICBwcm9wZXJ0eUtleTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShwcm9wLnZhbHVlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZU9iamVjdChvYmopIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIG9iai5wcm9wZXJ0aWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB2YXIgZGVmID0gdGhpcy5ldmFsdWF0ZU5vZGUoaXRlbSk7XG4gICAgICAgICAgICByZXN1bHRbZGVmLmtleV0gPSBkZWYudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVBcnJheShhcnIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGFyci5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59IiwiaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuL2V4cC1sZXhlcic7XG5pbXBvcnQgeyBFeHBQYXJzZXIgfSBmcm9tICcuL2V4cC1wYXJzZXInO1xuXG5mdW5jdGlvbiBsZXhFeHAoZXhwKSB7XG4gICAgcmV0dXJuIG5ldyBFeHBMZXhlcigpLmxleChleHApO1xufVxuXG5mdW5jdGlvbiBwYXJzZUV4cChleHApIHtcbiAgICByZXR1cm4gbmV3IEV4cFBhcnNlcihuZXcgRXhwTGV4ZXIoKSkucGFyc2UoZXhwKTtcbn1cblxuZXhwb3J0IHsgbGV4RXhwLCBwYXJzZUV4cCB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgRXhwQnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBidWlsZChub2RlKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEV4cHJlc3Npb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQXNzaWdubWVudChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQ29uZGl0aW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZExvZ2ljKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQmluYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQmluYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuVW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRVbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRDYWxsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTWVtYmVyRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkTWVtYmVyKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuSWRlbnRpZmllcjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkSWRlbnRpZmllcihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZExpdGVyYWwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5BcnJheUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEFycmF5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuUHJvcGVydHk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZFByb3BlcnR5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkT2JqZWN0KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBidWlsZEV4cHJlc3Npb24oZXhwKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBidWlsZEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5idWlsZChhc3NpZ25tZW50LmxlZnQpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKGFzc2lnbm1lbnQucmlnaHQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH09ezF9JywgdGFyZ2V0LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gdGhpcy5idWlsZChjb25kaXRpb24udGVzdCk7XG4gICAgICAgIHZhciBhbHRlcm5hdGUgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi5hbHRlcm5hdGUpO1xuICAgICAgICB2YXIgY29uc2VxdWVudCA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH0/ezF9OnsyfScsIHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XG4gICAgfVxuXG4gICAgYnVpbGRMb2dpYyhsb2dpYykge1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5idWlsZChsb2dpYy5sZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmJ1aWxkKGxvZ2ljLnJpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9ezF9ezJ9JywgbGVmdFZhbHVlLCBsb2dpYy5vcGVyYXRvciwgcmlnaHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRCaW5hcnkoYmluYXJ5KSB7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmJ1aWxkKGJpbmFyeS5sZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmJ1aWxkKGJpbmFyeS5yaWdodCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfXsyfScsIGxlZnRWYWx1ZSwgYmluYXJ5Lm9wZXJhdG9yLCByaWdodFZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZFVuYXJ5KHVuYXJ5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQodW5hcnkuYXJnKTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9ezF9JywgdW5hcnkub3BlcmF0b3IsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZENhbGwoY2FsbCkge1xuICAgICAgICB2YXIgcmVzID0gJycsIGFyZ1ZhbHVlcyA9IGNhbGwuYXJncy5tYXAoYXJnID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGFyZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBmbiA9IHRoaXMuYnVpbGQoY2FsbC5jYWxsZWUpO1xuXG4gICAgICAgIGlmIChjYWxsLmZpbHRlcikge1xuICAgICAgICAgICAgaWYgKGFyZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gYXJnVmFsdWVzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcyArPSAnIHwgJyArIGZuO1xuXG4gICAgICAgICAgICBpZiAoYXJnVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXMgKz0gJzonICsgYXJnVmFsdWVzLmpvaW4oJzonKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcyA9IHV0aWxzLmZvcm1hdCgnezB9KHsxfSknLCBmbiwgYXJnVmFsdWVzLmpvaW4oJywgJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBidWlsZE1lbWJlcihtZW1iZXIpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuYnVpbGQobWVtYmVyLm9iamVjdCk7XG4gICAgICAgIHZhciBwcm9wID0gdGhpcy5idWlsZChtZW1iZXIucHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfVt7MX1dJywgb2JqLCBwcm9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfS57MX0nLCBvYmosIHByb3ApO1xuICAgIH1cblxuICAgIGJ1aWxkSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgICAgIHJldHVybiBpZGVudGlmaWVyLm5hbWU7XG4gICAgfVxuXG4gICAgYnVpbGRMaXRlcmFsKGxpdGVyYWwpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGxpdGVyYWwudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCdcInswfVwiJywgbGl0ZXJhbC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGl0ZXJhbC52YWx1ZTtcbiAgICB9XG5cbiAgICBidWlsZFByb3BlcnR5KHByb3ApIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGQocHJvcC5rZXksIHtcbiAgICAgICAgICAgIHByb3BlcnR5S2V5OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQocHJvcC52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9OnsxfScsIGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkT2JqZWN0KG9iaikge1xuICAgICAgICB2YXIgcHJvcHMgPSBvYmoucHJvcGVydGllcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgne3swfX0nLCBwcm9wcy5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBidWlsZEFycmF5KGFycikge1xuICAgICAgICB2YXIgaXRlbXMgPSBhcnIuY2hpbGROb2Rlcy5tYXAoY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCdbezB9XScsIGl0ZW1zLmpvaW4oJywnKSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IE9QRVJBVE9SUyB9IGZyb20gJy4vZXhwLW9wZXJhdG9ycyc7XG5pbXBvcnQgeyBwYXJzZU9wdGlvbnMgfSBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgRXhwTGV4ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdXRpbHMubWVyZ2UocGFyc2VPcHRpb25zLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBsZXgodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSBbXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICcuJyAmJiB0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZE51bWJlcigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXMoY2gsICcoKXt9W10uLDs6PycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBjaCB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoMiA9IGNoICsgdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICAgICAgdmFyIGNoMyA9IGNoMiArIHRoaXMucGVlaygyKTtcbiAgICAgICAgICAgICAgICB2YXIgb3AxID0gT1BFUkFUT1JTW2NoXTtcbiAgICAgICAgICAgICAgICB2YXIgb3AyID0gT1BFUkFUT1JTW2NoMl07XG4gICAgICAgICAgICAgICAgdmFyIG9wMyA9IE9QRVJBVE9SU1tjaDNdO1xuICAgICAgICAgICAgICAgIGlmIChvcDEgfHwgb3AyIHx8IG9wMykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBvcDMgPyBjaDMgOiAob3AyID8gY2gyIDogY2gpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHRva2VuLCBvcGVyYXRvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSB0b2tlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIGlzKGNoLCBjaGFycykge1xuICAgICAgICByZXR1cm4gY2hhcnMuaW5kZXhPZihjaCkgIT09IC0xO1xuICAgIH1cblxuICAgIHBlZWsoaSkge1xuICAgICAgICB2YXIgbnVtID0gaSB8fCAxO1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPCB0aGlzLnRleHQubGVuZ3RoKSA/IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCArIG51bSkgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc051bWJlcihjaCkge1xuICAgICAgICByZXR1cm4gKCcwJyA8PSBjaCAmJiBjaCA8PSAnOScpICYmIHR5cGVvZiBjaCA9PT0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgaXNXaGl0ZXNwYWNlKGNoKSB7XG4gICAgICAgIC8vIElFIHRyZWF0cyBub24tYnJlYWtpbmcgc3BhY2UgYXMgXFx1MDBBMFxuICAgICAgICByZXR1cm4gKGNoID09PSAnICcgfHwgY2ggPT09ICdcXHInIHx8IGNoID09PSAnXFx0JyB8fFxuICAgICAgICAgICAgY2ggPT09ICdcXG4nIHx8IGNoID09PSAnXFx2JyB8fCBjaCA9PT0gJ1xcdTAwQTAnKTtcbiAgICB9XG5cbiAgICBpc0lkZW50aWZpZXJTdGFydChjaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0ID9cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydChjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCkge1xuICAgICAgICByZXR1cm4gKCdhJyA8PSBjaCAmJiBjaCA8PSAneicgfHxcbiAgICAgICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcbiAgICAgICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyk7XG4gICAgfVxuXG4gICAgaXNJZGVudGlmaWVyQ29udGludWUoY2gpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZSA/XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gpO1xuICAgIH1cblxuICAgIGlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gsIGNwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKTtcbiAgICB9XG5cbiAgICBjb2RlUG9pbnRBdChjaCkge1xuICAgICAgICBpZiAoY2gubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gY2guY2hhckNvZGVBdCgwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgICByZXR1cm4gKGNoLmNoYXJDb2RlQXQoMCkgPDwgMTApICsgY2guY2hhckNvZGVBdCgxKSAtIDB4MzVGREMwMDtcbiAgICB9XG5cbiAgICBwZWVrTXVsdGljaGFyKCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICB2YXIgcGVlayA9IHRoaXMucGVlaygpO1xuICAgICAgICBpZiAoIXBlZWspIHtcbiAgICAgICAgICAgIHJldHVybiBjaDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3AxID0gY2guY2hhckNvZGVBdCgwKTtcbiAgICAgICAgdmFyIGNwMiA9IHBlZWsuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgaWYgKGNwMSA+PSAweEQ4MDAgJiYgY3AxIDw9IDB4REJGRiAmJiBjcDIgPj0gMHhEQzAwICYmIGNwMiA8PSAweERGRkYpIHtcbiAgICAgICAgICAgIHJldHVybiBjaCArIHBlZWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoO1xuICAgIH1cblxuICAgIGlzRXhwT3BlcmF0b3IoY2gpIHtcbiAgICAgICAgcmV0dXJuIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycgfHwgdGhpcy5pc051bWJlcihjaCkpO1xuICAgIH1cblxuICAgIHRocm93RXJyb3IoZXJyb3IsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgZW5kID0gZW5kIHx8IHRoaXMuaW5kZXg7XG4gICAgICAgIHZhciBjb2xTdHIgPSAodXRpbHMuaXNEZWZpbmVkKHN0YXJ0KSA/ICdzICcgKyBzdGFydCArICctJyArIHRoaXMuaW5kZXggKyAnIFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyhzdGFydCwgZW5kKSArICddJyA6ICcgJyArIGVuZCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTGV4ZXIgRXJyb3I6ICcgKyBlcnJvciArICcgYXQgY29sdW1uJyArIGNvbFN0ciArICcgaW4gZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddLicpO1xuICAgIH1cblxuICAgIHJlYWROdW1iZXIoKSB7XG4gICAgICAgIHZhciBudW1iZXIgPSAnJztcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB1dGlscy5sb3dlcmNhc2UodGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KSk7XG4gICAgICAgICAgICBpZiAoY2ggPT09ICcuJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSkge1xuICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHBlZWtDaCA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ2UnICYmIHRoaXMuaXNFeHBPcGVyYXRvcihwZWVrQ2gpKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcbiAgICAgICAgICAgICAgICAgICAgcGVla0NoICYmIHRoaXMuaXNOdW1iZXIocGVla0NoKSAmJlxuICAgICAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcbiAgICAgICAgICAgICAgICAgICAgKCFwZWVrQ2ggfHwgIXRoaXMuaXNOdW1iZXIocGVla0NoKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgZXhwb25lbnQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICB0ZXh0OiBudW1iZXIsXG4gICAgICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIobnVtYmVyKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWFkSWRlbnQoKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHRoaXMuaW5kZXggKz0gdGhpcy5wZWVrTXVsdGljaGFyKCkubGVuZ3RoO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMucGVla011bHRpY2hhcigpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBjaC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQuc2xpY2Uoc3RhcnQsIHRoaXMuaW5kZXgpLFxuICAgICAgICAgICAgaWRlbnRpZmllcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWFkU3RyaW5nKHF1b3RlKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xuICAgICAgICB2YXIgcmF3U3RyaW5nID0gcXVvdGU7XG4gICAgICAgIHZhciBlc2NhcGUgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoZXggPSB0aGlzLnRleHQuc3Vic3RyaW5nKHRoaXMuaW5kZXggKyAxLCB0aGlzLmluZGV4ICsgNSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGV4Lm1hdGNoKC9bXFxkYS1mXXs0fS9pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIHVuaWNvZGUgZXNjYXBlIFtcXFxcdScgKyBoZXggKyAnXScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gNDtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4LCAxNikpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXAgPSBFU0NBUEVbY2hdO1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyAocmVwIHx8IGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXNjYXBlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICBlc2NhcGUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gcXVvdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignVW50ZXJtaW5hdGVkIHF1b3RlJywgc3RhcnQpO1xuICAgIH1cbn0iLCJleHBvcnQgdmFyIE9QRVJBVE9SUyA9IHt9O1xuXG52YXIgb3BlcmF0b3JUZXh0ID0gJysgLSAqIC8gJSA9PT0gIT09ID09ICE9IDwgPiA8PSA+PSAmJiB8fCAhID0gfCc7XG52YXIgRVNDQVBFID0geyAnbic6ICdcXG4nLCAnZic6ICdcXGYnLCAncic6ICdcXHInLCAndCc6ICdcXHQnLCAndic6ICdcXHYnLCAnXFwnJzogJ1xcJycsICdcIic6ICdcIicgfTtcblxub3BlcmF0b3JUZXh0LnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICBPUEVSQVRPUlNbb3BlcmF0b3JdID0gdHJ1ZTtcbn0pOyIsImltcG9ydCB7XG4gICAgQVNULFxuICAgIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSxcbiAgICBCaW5hcnlFeHByZXNzaW9uTm9kZSxcbiAgICBDYWxsRXhwcmVzc2lvbk5vZGUsXG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSxcbiAgICBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSxcbiAgICBJZGVudGlmaWVyTm9kZSxcbiAgICBMaXRlcmFsTm9kZSxcbiAgICBMb2dpY2FsRXhwcmVzc2lvbk5vZGUsXG4gICAgTWVtYmVyRXhwcmVzc2lvbk5vZGUsXG4gICAgT2JqZWN0RXhwcmVzc2lvbk5vZGUsXG4gICAgUHJvZ3JhbU5vZGUsXG4gICAgUHJvcGVydHlOb2RlLFxuICAgIFVuYXJ5RXhwcmVzc2lvbk5vZGUsXG4gICAgQXJyYXlFeHByZXNzaW9uTm9kZVxufSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi9leHAtbGV4ZXInO1xuaW1wb3J0IHsgcGFyc2VPcHRpb25zIH0gZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIEV4cFBhcnNlciB7XG4gICAgY29uc3RydWN0b3IobGV4ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShwYXJzZU9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHRocm93RXJyb3IobXNnLCB0b2tlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N5bnRheCBFcnJvcjogVG9rZW4gXFwnJyArIHRva2VuLnRleHQgKyAnXFwnJyArIG1zZyArICcgYXQgY29sdW1uICcgKyAodG9rZW4uaW5kZXggKyAxKSArXG4gICAgICAgICAgICAnIG9mIHRoZSBleHByZXNzaW9uIFsnICsgdGhpcy50ZXh0ICsgJ10gc3RhcnRpbmcgYXQgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHRva2VuLmluZGV4KSArICddLicpO1xuICAgIH1cblxuICAgIHBhcnNlKHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcblxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb2dyYW0oKTtcblxuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIGFuIHVuZXhwZWN0ZWQgdG9rZW4nLCB0aGlzLnRva2Vuc1swXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJvZ3JhbSgpIHtcbiAgICAgICAgdmFyIHByb2dyYW0gPSBuZXcgUHJvZ3JhbU5vZGUoKTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiAwICYmICF0aGlzLnBlZWsoJ30nLCAnKScsICc7JywgJ10nKSkge1xuICAgICAgICAgICAgICAgIHByb2dyYW0uYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdCgnOycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2dyYW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHByZXNzaW9uU3RhdGVtZW50KCkge1xuICAgICAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCk7XG4gICAgICAgIGV4cC5hcHBlbmRDaGlsZCh0aGlzLmZpbHRlckNoYWluKCkpO1xuICAgICAgICByZXR1cm4gZXhwO1xuICAgIH1cblxuICAgIGZpbHRlckNoYWluKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3wnKSkge1xuICAgICAgICAgICAgbGVmdCA9IHRoaXMuZmlsdGVyKGxlZnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIGV4cHJlc3Npb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQoKTtcbiAgICB9XG5cbiAgICBpc0Fzc2lnbmFibGUoYXN0KSB7XG4gICAgICAgIHJldHVybiBhc3QudHlwZSA9PT0gQVNULklkZW50aWZpZXIgfHwgYXN0LnR5cGUgPT09IEFTVC5NZW1iZXJFeHByZXNzaW9uO1xuICAgIH1cblxuICAgIGFzc2lnbm1lbnQoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnRlcm5hcnkoKTtcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc9JykpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Fzc2lnbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFzc2lnbiBhIHZhbHVlIHRvIGEgbm9uIGwtdmFsdWUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShyZXN1bHQsIHRoaXMuYXNzaWdubWVudCgpLCAnPScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdGVybmFyeSgpIHtcbiAgICAgICAgdmFyIHRlc3QgPSB0aGlzLmxvZ2ljYWxPUigpO1xuICAgICAgICB2YXIgYWx0ZXJuYXRlO1xuICAgICAgICB2YXIgY29uc2VxdWVudDtcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc/JykpIHtcbiAgICAgICAgICAgIGFsdGVybmF0ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uc3VtZSgnOicpKSB7XG4gICAgICAgICAgICAgICAgY29uc2VxdWVudCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXN0O1xuICAgIH1cblxuICAgIGxvZ2ljYWxPUigpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmxvZ2ljYWxBTkQoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCd8fCcpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnfHwnLCBsZWZ0LCB0aGlzLmxvZ2ljYWxBTkQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgbG9naWNhbEFORCgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmVxdWFsaXR5KCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnJiYnKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJyYmJywgbGVmdCwgdGhpcy5lcXVhbGl0eSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBlcXVhbGl0eSgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnJlbGF0aW9uYWwoKTtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJz09JywgJyE9JywgJz09PScsICchPT0nKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5yZWxhdGlvbmFsKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIHJlbGF0aW9uYWwoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5hZGRpdGl2ZSgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPCcsICc+JywgJzw9JywgJz49JykpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMuYWRkaXRpdmUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgYWRkaXRpdmUoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5tdWx0aXBsaWNhdGl2ZSgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJykpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMubXVsdGlwbGljYXRpdmUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgbXVsdGlwbGljYXRpdmUoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy51bmFyeSgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKicsICcvJywgJyUnKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy51bmFyeSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICB1bmFyeSgpIHtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICBpZiAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScsICchJykpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVuYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgdGhpcy51bmFyeSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaW1hcnkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaW1hcnkoKSB7XG4gICAgICAgIHZhciBwcmltYXJ5O1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJygnKSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuZmlsdGVyQ2hhaW4oKTtcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCdbJykpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmFycmF5RGVjbGFyYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgneycpKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5vYmplY3QoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubGl0ZXJhbHMuaGFzT3duUHJvcGVydHkodGhpcy5wZWVrKCkudGV4dCkpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTGl0ZXJhbE5vZGUodGhpcy5vcHRpb25zLmxpdGVyYWxzW3RoaXMuY29uc3VtZSgpLnRleHRdKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmNvbnN0YW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ25vdCBhIHByaW1hcnkgZXhwcmVzc2lvbicsIHRoaXMucGVlaygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXh0O1xuICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCcoJywgJ1snLCAnLicpIHx8ICh0aGlzLnBlZWsoJz8nKSAmJiB0aGlzLnBlZWtBaGVhZCgxLCAnLicpKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc/JykpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5LmFsbG93TnVsbCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHQgPSB0aGlzLmV4cGVjdCgnKCcsICdbJywgJy4nKTtcblxuICAgICAgICAgICAgaWYgKG5leHQudGV4dCA9PT0gJygnKSB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5wYXJzZUFyZ3VtZW50cygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dC50ZXh0ID09PSAnWycpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuZXhwcmVzc2lvbigpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dC50ZXh0ID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuaWRlbnRpZmllcigpLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSU1QT1NTSUJMRScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmltYXJ5O1xuICAgIH1cblxuICAgIGZpbHRlcihiYXNlRXhwcmVzc2lvbikge1xuICAgICAgICB2YXIgYXJncyA9IFtiYXNlRXhwcmVzc2lvbl0sIGlkZW50aWZpZXJzID0gW3RoaXMuaWRlbnRpZmllcigpXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJy4nKSkge1xuICAgICAgICAgICAgaWRlbnRpZmllcnMucHVzaCh0aGlzLmlkZW50aWZpZXIoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwbHVzIG5hbWVzcGFjZVxuICAgICAgICB2YXIgZW50aXJlTmFtZSA9IGlkZW50aWZpZXJzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZTtcbiAgICAgICAgfSkuam9pbignLicpO1xuXG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKG5ldyBJZGVudGlmaWVyTm9kZShlbnRpcmVOYW1lKSwgYXJncyk7XG5cbiAgICAgICAgcmVzdWx0LmZpbHRlciA9IHRydWU7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCc6JykpIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHBhcnNlQXJndW1lbnRzKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnKScpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2godGhpcy5maWx0ZXJDaGFpbigpKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXIoKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY29uc3VtZSgpO1xuICAgICAgICBpZiAoIXRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgbm90IGEgdmFsaWQgaWRlbnRpZmllcicsIHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IElkZW50aWZpZXJOb2RlKHRva2VuLnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0YW50KCkge1xuICAgICAgICAvLyBUT0RPIGNoZWNrIHRoYXQgaXQgaXMgYSBjb25zdGFudFxuICAgICAgICByZXR1cm4gbmV3IExpdGVyYWxOb2RlKHRoaXMuY29uc3VtZSgpLnZhbHVlKTtcbiAgICB9XG5cbiAgICBhcnJheURlY2xhcmF0aW9uKCkge1xuICAgICAgICB2YXIgYXJyID0gbmV3IEFycmF5RXhwcmVzc2lvbk5vZGUoKTtcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ10nKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnXScpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyci5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIG9iamVjdCgpIHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBbXSwgcHJvcGVydHk7XG4gICAgICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICd9Jykge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ30nKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eU5vZGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5jb25zdGFudCgpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJzonKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSBwcm9wZXJ0eS5rZXk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygnWycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnWycpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpbnZhbGlkIGtleScsIHRoaXMucGVlaygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnR5KTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZSgnfScpO1xuXG4gICAgICAgIHJldHVybiBuZXcgT2JqZWN0RXhwcmVzc2lvbk5vZGUocHJvcGVydGllcyk7XG4gICAgfVxuXG4gICAgY29uc3VtZShlMSkge1xuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5leHBlY3QoZTEpO1xuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIHVuZXhwZWN0ZWQsIGV4cGVjdGluZyBbJyArIGUxICsgJ10nLCB0aGlzLnBlZWsoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIHBlZWtUb2tlbigpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbMF07XG4gICAgfVxuXG4gICAgcGVlayhlMSwgZTIsIGUzLCBlNCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZWVrQWhlYWQoMCwgZTEsIGUyLCBlMywgZTQpO1xuICAgIH1cblxuICAgIHBlZWtBaGVhZChpLCBlMSwgZTIsIGUzLCBlNCkge1xuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gaSkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy50b2tlbnNbaV07XG4gICAgICAgICAgICB2YXIgdCA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBpZiAodCA9PT0gZTEgfHwgdCA9PT0gZTIgfHwgdCA9PT0gZTMgfHwgdCA9PT0gZTQgfHxcbiAgICAgICAgICAgICAgICAoIWUxICYmICFlMiAmJiAhZTMgJiYgIWU0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZXhwZWN0KGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMucGVlayhlMSwgZTIsIGUzLCBlNCk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgdGhpcy50b2tlbnMuc2hpZnQoKTtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4iLCJleHBvcnQgKiBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1sZXhlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1wYXJzZXInO1xuZXhwb3J0ICogZnJvbSAnLi9leHAtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWJ1aWxkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9ldmFsdWF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9hbmFseXNlcic7IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQXJyYXlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuQXJyYXlFeHByZXNzaW9uKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IobGVmdCwgcmlnaHQsIG9wZXJhdG9yKSB7XG4gICAgICAgIHN1cGVyKEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbiAgICB9XG5cbiAgICBhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgQVNUID0ge307XG5cbkFTVC5Qcm9ncmFtID0gJ1Byb2dyYW0nO1xuQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQgPSAnRXhwcmVzc2lvblN0YXRlbWVudCc7XG5BU1QuQXNzaWdubWVudEV4cHJlc3Npb24gPSAnQXNzaWdubWVudEV4cHJlc3Npb24nO1xuQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbiA9ICdDb25kaXRpb25hbEV4cHJlc3Npb24nO1xuQVNULkxvZ2ljYWxFeHByZXNzaW9uID0gJ0xvZ2ljYWxFeHByZXNzaW9uJztcbkFTVC5CaW5hcnlFeHByZXNzaW9uID0gJ0JpbmFyeUV4cHJlc3Npb24nO1xuQVNULlVuYXJ5RXhwcmVzc2lvbiA9ICdVbmFyeUV4cHJlc3Npb24nO1xuQVNULkNhbGxFeHByZXNzaW9uID0gJ0NhbGxFeHByZXNzaW9uJztcbkFTVC5NZW1iZXJFeHByZXNzaW9uID0gJ01lbWJlckV4cHJlc3Npb24nO1xuQVNULklkZW50aWZpZXIgPSAnSWRlbnRpZmllcic7XG5BU1QuTGl0ZXJhbCA9ICdMaXRlcmFsJztcbkFTVC5BcnJheUV4cHJlc3Npb24gPSAnQXJyYXlFeHByZXNzaW9uJztcbkFTVC5Qcm9wZXJ0eSA9ICdQcm9wZXJ0eSc7XG5BU1QuT2JqZWN0RXhwcmVzc2lvbiA9ICdPYmplY3RFeHByZXNzaW9uJztcblxuZXhwb3J0IGNsYXNzIE51bGxFeHByZXNzaW9uTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJG51bGwgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBCaW5hcnlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgICAgICBzdXBlcihBU1QuQmluYXJ5RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBDYWxsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWUsIGFyZ3MpIHtcbiAgICAgICAgc3VwZXIoQVNULkNhbGxFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpIHtcbiAgICAgICAgc3VwZXIoQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xuICAgICAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuRXhwcmVzc2lvblN0YXRlbWVudCk7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcihBU1QuSWRlbnRpZmllcik7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vYXN0JztcbmV4cG9ydCAqIGZyb20gJy4vYXN0LW5vZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hc3NpZ25tZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYmluYXJ5JztcbmV4cG9ydCAqIGZyb20gJy4vY2FsbCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmRpdGlvbmFsJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwcmVzc2lvbic7XG5leHBvcnQgKiBmcm9tICcuL2lkZW50aWZpZXInO1xuZXhwb3J0ICogZnJvbSAnLi9saXRlcmFsJztcbmV4cG9ydCAqIGZyb20gICcuL2xvZ2ljYWwnO1xuZXhwb3J0ICogZnJvbSAgJy4vbWVtYmVyJztcbmV4cG9ydCAqIGZyb20gICcuL29iamVjdCc7XG5leHBvcnQgKiBmcm9tICAnLi9wcm9ncmFtJztcbmV4cG9ydCAqIGZyb20gICcuL3Byb3BlcnR5JztcbmV4cG9ydCAqIGZyb20gICcuL3VuYXJ5JztcbmV4cG9ydCAqIGZyb20gJy4vYXJyYXknOyIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIExpdGVyYWxOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIoQVNULkxpdGVyYWwpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIExvZ2ljYWxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgICAgICBzdXBlcihBU1QuTG9naWNhbEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgTWVtYmVyRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBjb21wdXRlZCkge1xuICAgICAgICBzdXBlcihBU1QuTWVtYmVyRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgICAgIHRoaXMuY29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgT2JqZWN0RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHN1cGVyKEFTVC5PYmplY3RFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgUHJvZ3JhbU5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVNULlByb2dyYW0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eU5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVNULlByb3BlcnR5KTtcbiAgICAgICAgdGhpcy5raW5kID0gJ2luaXQnO1xuICAgICAgICB0aGlzLmtleSA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbXB1dGVkID0gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIFVuYXJ5RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgYXJnKSB7XG4gICAgICAgIHN1cGVyKEFTVC5VbmFyeUV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLnByZWZpeCA9IHRydWU7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5hcmcgPSBhcmc7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgcGFyc2VPcHRpb25zID0ge1xuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlOiBmYWxzZSxcbiAgICBpc0lkZW50aWZpZXJTdGFydDogZmFsc2UsXG4gICAgbGl0ZXJhbHM6IHtcbiAgICAgICAgZmFsc2U6IGZhbHNlLFxuICAgICAgICBudWxsOiBudWxsLFxuICAgICAgICB0cnVlOiB0cnVlLFxuICAgICAgICB1bmRlZmluZWQ6IHVuZGVmaW5lZFxuICAgIH1cbn07IiwiZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUnO1xuZXhwb3J0ICogZnJvbSAnLi9vYnNlcnZlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4cCc7XG5leHBvcnQgKiBmcm9tICcuL3RwbCc7XG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZpZXcnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWNvcmF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlJzsiLCJleHBvcnQgY2xhc3MgRGVsYXllciB7XG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgdGltZW91dCkge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgICAgICB0aGlzLmRlbGF5SWQgPSBudWxsO1xuICAgIH1cblxuICAgIGV4ZWN1dGUoc2NvcGUpIHtcbiAgICAgICAgaWYodGhpcy5kZWxheUlkICE9IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZWxheUlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlbGF5SWQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLmNhbGwoc2NvcGUpO1xuICAgICAgICB9LCB0aGlzLnRpbWVvdXQpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmRlbGF5SWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlJZCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9wcm94eSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vb2JzZXJ2ZXInOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEV2YWx1YXRvciwgQW5hbHlzZXIgfSBmcm9tICcuLi9leHAnO1xuaW1wb3J0IHsgV2F0Y2hlciB9IGZyb20gJy4vd2F0Y2hlcic7XG5pbXBvcnQgeyBEZWxheWVyIH0gZnJvbSAnLi9kZWxheWVyJztcblxuY2xhc3MgTGlzdGVuZXIge1xuICAgIGNvbnN0cnVjdG9yKGV4cCwgaGFuZGxlciwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0TmV3VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0Q29sbGVjdGlvbkNoYW5nZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVDaGFuZ2VkIHx8IHRoaXMuY29sbGVjdGlvbkNoYW5nZWQ7XG4gICAgfVxuXG4gICAgbm90aWZ5KHNjb3BlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMubmV3VmFsdWUsXG4gICAgICAgICAgICBjb2xsZWN0aW9uQ2hhbmdlZCA9IHRoaXMuY29sbGVjdGlvbkNoYW5nZWQ7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubmV3VmFsdWU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhbmRsZXIuY2FsbChzY29wZSwge1xuICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgY29sbGVjdGlvbkNoYW5nZWQ6IGNvbGxlY3Rpb25DaGFuZ2VkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuYWNjZXNzb3JzID0ge307XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMud2F0Y2hlciA9IG5ldyBXYXRjaGVyKCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZXIgPSBuZXcgQW5hbHlzZXIoc2NvcGUuJHBhcnNlcik7XG4gICAgICAgIHRoaXMuZGVsYXllciA9IG5ldyBEZWxheWVyKHRoaXMubm90aWZ5LCAxNik7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCB2YWx1ZSkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBuZXcgTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICAgIGlmKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeSgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICBpZihsaXN0ZW5lci5oYXNDaGFuZ2UoKSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLm5vdGlmeSh0aGlzLnNjb3BlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5Q2hhbmdlKGxpc3RlbmVyLCBuZXdWYWx1ZSkge1xuICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnNldENvbGxlY3Rpb25DaGFuZ2VkKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsYXllci5leGVjdXRlKHRoaXMpO1xuICAgIH1cblxuICAgIGdldEFjY2Vzc29yKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5hY2Nlc3NvcnNbZXhwXTtcblxuICAgICAgICBpZighcmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VyLmFuYWx5c2UoZXhwKTtcbiAgICAgICAgICAgIHRoaXMuYWNjZXNzb3JzW2V4cF0gPSByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXRpbHMuY29weSh0cnVlLCByZXN1bHQpO1xuICAgIH1cblxuICAgIHdhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGFjY2Vzc29yID0gdGhpcy5nZXRBY2Nlc3NvcihleHApO1xuICAgICAgICB2YXIgZXZhbHVhdG9yID0gIG5ldyBFdmFsdWF0b3IodGhpcy5zY29wZSwgeyBhbGxvd051bGw6IHRydWUsIGxvY2FsczogbG9jYWxzIH0pO1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUxpc3RlbmVyKGV4cCwgaGFuZGxlciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCkpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVud2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3JzKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKGFjY2Vzc29ycywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihpdGVtLnVud2F0Y2gpKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udW53YXRjaC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2ggPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB3YXRjaEFjY2Vzc29ycyhhY2Nlc3NvcnMsIHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCF1dGlscy5pc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKGFjY2Vzc29ycywgZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSB0YXJnZXQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5leHApIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gZXZhbHVhdG9yLmV2YWx1YXRlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodmFsdWVzID09PSBzZWxmLnNjb3BlICYmIGxvY2FscyAmJiBsb2NhbHNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBsb2NhbHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbS51bndhdGNoID0gc2VsZi53YXRjaGVyLndhdGNoKHZhbHVlcywga2V5LCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICB3YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuLCBhcmdzLmRhdGEubmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGlmeUNoYW5nZShsaXN0ZW5lciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbiwgdmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB3YXRjaEFjY2Vzc29ycyhhY2Nlc3NvciwgdGhpcy5zY29wZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVud2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3IpO1xuICAgICAgICAgICAgc2VsZi5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgd2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIGV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3IodGhpcy5zY29wZSwgeyBhbGxvd051bGw6IHRydWUsIGxvY2FsczogbG9jYWxzIH0pO1xuICAgICAgICB2YXIgdW53YXRjaFByb3BzID0gd2F0Y2hQcm9wcygpO1xuICAgICAgICB2YXIgdW53YXRjaEV4cCA9IHRoaXMud2F0Y2goZXhwLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodW53YXRjaFByb3BzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVud2F0Y2hQcm9wcyA9IHdhdGNoUHJvcHMoKTtcbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgbG9jYWxzKTtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5jcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIGV2YWx1YXRvci5ldmFsdWF0ZShleHApKTtcblxuICAgICAgICBmdW5jdGlvbiB3YXRjaFByb3BzKCkge1xuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBldmFsdWF0b3IuZXZhbHVhdGUoZXhwKTtcblxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbGxlY3Rpb24pIHx8IHV0aWxzLmlzQXJyYXkoY29sbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi53YXRjaGVyLndhdGNoKGNvbGxlY3Rpb24sICcqJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGlmeUNoYW5nZShsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdW53YXRjaEV4cC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdW53YXRjaFByb3BzICYmIHVud2F0Y2hQcm9wcy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgc2VsZi5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5kZWxheWVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy53YXRjaGVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgfVxufSIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG52YXIgaXNQcm94eVN5bWJvbCA9IFN5bWJvbCgnX19pc1Byb3h5JyksXG4gICAgdGFyZ2V0U3ltYm9sID0gU3ltYm9sKCdfX3RhcmdldCcpO1xuXG52YXIgaGFuZGxlciA9IHtcbiAgICBnZXQ6IGdldFByb3h5LFxuICAgIHNldDogc2V0UHJveHlcbn07XG5cbi8vIGV4dGVuZHMgb2JqZWN0IHByb3RvdHlwZSwgYWRkIGZ1bmN0aW9uIHRvUHJveHlcbi8vIE9iamVjdC5wcm90b3R5cGUudG9Qcm94eSA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICByZXR1cm4gaXNQcm94eSh0aGlzKSA/IHRoaXMgOiBuZXcgUHJveHkodGhpcywgaGFuZGxlcik7XG4vLyB9O1xuXG5mdW5jdGlvbiBpc1Byb3h5KHByb3h5KSB7XG4gICAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHByb3h5KSAmJiBwcm94eVtpc1Byb3h5U3ltYm9sXTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHByb3h5KSB7XG4gICAgcmV0dXJuIGlzUHJveHkocHJveHkpID8gcHJveHlbdGFyZ2V0U3ltYm9sXSA6IHByb3h5O1xufVxuXG5mdW5jdGlvbiBtYWtlUHJveHkodmFsdWUpIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QodmFsdWUpICYmICFpc1Byb3h5KHZhbHVlKSkge1xuICAgICAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoaXRlbSwga2V5KSB7XG4gICAgICAgICAgICB2YWx1ZVtrZXldID0gbWFrZVByb3h5KGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZSwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRQcm94eSh0YXJnZXQsIGtleSkge1xuICAgIGlmIChrZXkgPT09IGlzUHJveHlTeW1ib2wpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gdGFyZ2V0U3ltYm9sKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xufVxuXG5mdW5jdGlvbiBzZXRQcm94eSh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBnZXRUYXJnZXQodGFyZ2V0W2tleV0pLFxuICAgICAgICBuZXdWYWx1ZSA9IGdldFRhcmdldCh2YWx1ZSk7XG5cbiAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gbWFrZVByb3h5KHZhbHVlKTtcbiAgICAgICAgZXZlbnRzLnByb3BlcnR5Q2hhbmdlZC5maXJlKHtcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGFyZ2V0W2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7XG4gICAgaXNQcm94eSxcbiAgICBnZXRUYXJnZXQsXG4gICAgaGFuZGxlclxufSIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgZ2V0VGFyZ2V0IH0gZnJvbSAnLi9wcm94eSc7XG5cbmNsYXNzIE9iamVjdExpc3RlbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMua2V5cyA9IHt9O1xuICAgIH1cblxuICAgIGdldEhhbmRsZXJzKGtleSkge1xuICAgICAgICBpZiAoIXRoaXMua2V5c1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLmtleXNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMua2V5c1trZXldO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyS2V5KGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XG4gICAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgdW5yZWdpc3RlcktleShrZXksIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xuXG4gICAgICAgIGlmIChoYW5kbGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIGhhbmRsZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVLZXkoa2V5LCBhcmdzLCBzZWxmKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcbiAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbChzZWxmLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2F0Y2hlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMub2ZmUHJvcGVydHlDaGFuZ2VkID0gZXZlbnRzLnByb3BlcnR5Q2hhbmdlZC5vbihlID0+IHRoaXMuaGFuZGxlUHJvcGVydHlDaGFuZ2VkKGUuZGF0YSkpO1xuICAgIH1cblxuICAgIGhhbmRsZVByb3BlcnR5Q2hhbmdlZChkYXRhKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIodGhpcy5saXN0ZW5lcnMsIGRhdGEudGFyZ2V0KTtcblxuICAgICAgICBpZiAobGlzdGVuZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGlzdGVuZXIuZmlyZUtleShkYXRhLmtleSwgZGF0YSk7XG4gICAgICAgICAgICBsaXN0ZW5lci5maXJlS2V5KCcqJywgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIsIGZpbHRlcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGFyZ2V0ID09PSB0YXJnZXQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gZmlsdGVyc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBuZXcgT2JqZWN0TGlzdGVuZXIodGFyZ2V0KTtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgZ2V0T3JDcmVhdGVMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldExpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KTtcblxuICAgICAgICBpZiAobGlzdGVuZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICB3YXRjaCh0YXJnZXQsIGtleSwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0T3JDcmVhdGVMaXN0ZW5lcih0aGlzLmxpc3RlbmVycywgZ2V0VGFyZ2V0KHRhcmdldCkpO1xuXG4gICAgICAgIGxpc3RlbmVyLnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGlzdGVuZXIudW5yZWdpc3RlcktleShrZXksIGFjdGlvbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5vZmZQcm9wZXJ0eUNoYW5nZWQoKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgRXhwcmVzc2lvbiB9IGZyb20gJy4vZXhwcmVzc2lvbic7XG5cbmV4cG9ydCBjbGFzcyBCaW5kaW5nIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgdGV4dCwgbG9jYWxzKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XG4gICAgICAgIC8vIGlzIHRydWUsIGJpbmRpbmcgdGV4dCBpcyBhIGV4cHJlc3Npb25cbiAgICAgICAgdGhpcy5pc0V4cCA9IGZhbHNlO1xuICAgICAgICAvLyBpZiB0cnVlLCBiaW5kaW5nIHRleHQgaXMgYSBsb2dpY2FsIGV4cHJlc3Npb25cbiAgICAgICAgdGhpcy5sb2dpY2FsID0gZmFsc2U7XG4gICAgICAgIC8vIGlmIHRydWUsIGJpbmRpbmcgdGV4dCBpcyBhIGFzc2lnbm1lbnQgZXhwcmVzc2lvblxuICAgICAgICB0aGlzLmFzc2lnbm1lbnQgPSBmYWxzZTtcbiAgICAgICAgLy8gaGFuZGxlciB0byB1cGRhdGUgdmlldyBmcm9tIG1vZGVsIHZhbHVlXG4gICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucyA9IFtdO1xuICAgIH1cblxuICAgIGNyZWF0ZUV4cHJlc3Npb24odGV4dCkge1xuICAgICAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb24odGV4dCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMucHVzaChleHApO1xuICAgICAgICByZXR1cm4gZXhwO1xuICAgIH1cblxuICAgIGNvbXBpbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvZ2ljYWwgfHwgdGhpcy5hc3NpZ25tZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlzRXhwID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzRXhwKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUV4cHJlc3Npb24odGhpcy50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gL3t7KFtefV0qKX19L2c7XG4gICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgICAgICAgICB2YXIgc2VnbWVudCwgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy50ZXh0KTtcblxuICAgICAgICAgICAgd2hpbGUgKG1hdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2guaW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudCA9IHRoaXMudGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2godGhpcy5jcmVhdGVFeHByZXNzaW9uKG1hdGNoWzFdKSk7XG5cbiAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0aGlzLnRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0Lmxlbmd0aCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSB0aGlzLnRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGluaygpIHtcbiAgICAgICAgaWYgKHRoaXMuYXNzaWdubWVudCB8fCB0aGlzLmxvZ2ljYWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGV0ZWN0KCk7XG5cbiAgICAgICAgdGhpcy5leHByZXNzaW9ucy5mb3JFYWNoKGV4cCA9PiB7XG4gICAgICAgICAgICBleHAud2F0Y2godGhpcy5zY29wZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXRjaCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5sb2NhbHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMuY29tcHV0ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXQgdmFsdWVcbiAgICBjb21wdXRlKGxvY2Fscykge1xuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLmxvY2FscywgbG9jYWxzKTtcblxuICAgICAgICBpZiAodGhpcy5pc0V4cCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbnNbMF0uY29tcHV0ZSh0aGlzLnNjb3BlLCBsb2NhbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHMucmVkdWNlKChwcmV2LCBjdXIpID0+IHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjdXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXYgKyBjdXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpdCBpcyBhIGV4cHJlc3Npb25cbiAgICAgICAgICAgIHJldHVybiBwcmV2ICsgKGN1ci5jb21wdXRlKHRoaXMuc2NvcGUsIGxvY2FscykgfHwgJycpO1xuICAgICAgICB9LCAnJyk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlXG4gICAgYXNzaWduKHZhbHVlLCBsb2NhbHMpIHtcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy5sb2NhbHMsIGxvY2Fscyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFeHApIHtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNbMF0uYXNzaWduKHRoaXMuc2NvcGUsIHZhbHVlLCBsb2NhbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudGV4dCArICcgaXMgbm90IHZhbGlkIGV4cHJlc3Npb24nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyQXV0b21hdGlvbihhdXRvbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IGF1dG9tYXRpb247XG4gICAgfVxuXG4gICAgdW5yZWdpc3RlckF1dG9tYXRpb24oYXV0b21hdGlvbikge1xuICAgICAgICBpZiAodGhpcy5hdXRvbWF0aW9uID09PSBhdXRvbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9tYXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbW9kaWZ5IHZpZXcgYWNjb3JkaW5nIHRvIG1vZGVsXG4gICAgcGF0Y2goKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZWQgJiYgdGhpcy5hdXRvbWF0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hdXRvbWF0aW9uLmNhbGwodGhpcywgdGhpcy52YWx1ZSwgdGhpcy5vbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zLmZvckVhY2goZXhwID0+IHtcbiAgICAgICAgICAgIGV4cC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgRXhwcmVzc2lvbiB7XG4gICAgY29uc3RydWN0b3IodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBudWxsO1xuICAgICAgICB0aGlzLmhhc1RyYW5zbGF0aW9uID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlXG4gICAgY29tcHV0ZShzY29wZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiBzY29wZS4kZXZhbCh0aGlzLnRleHQsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlXG4gICAgYXNzaWduKHNjb3BlLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHNjb3BlLiRhc3NpZ24odGhpcy50ZXh0LCB2YWx1ZSwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICB3YXRjaChzY29wZSwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IHNjb3BlLiR3YXRjaCh0aGlzLnRleHQsIGhhbmRsZXIsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYodGhpcy51bndhdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudW53YXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL2V4cHJlc3Npb24nO1xuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcic7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5pbXBvcnQgeyBpc1ZUZXh0LCBpc1ZDb21tZW50LCBpc1ZFbG0gfSBmcm9tICcuLi90cGwnO1xuaW1wb3J0IHsgTG9jYWwgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xuaW1wb3J0IHsgTV9DTVBfQ0xBU1MgfSBmcm9tICcuLi9jc3MnO1xuaW1wb3J0IHsgU2luZ2xlTm9kZVZpZXcsIE11bHRpcGxlTm9kZVZpZXcgfSBmcm9tICcuL3ZpZXcnO1xuXG4vLyBXaW5kb3cgRXZlbnRzXG4vLyBjYXNlICdvbi1sb2FkJzpcbi8vIGNhc2UgJ29uLXVubG9hZCc6XG4vLyBGb3JtIEVsZW1lbnQgRXZlbnRzXG4vLyBjYXNlICdvbi1jaGFuZ2UnOlxuLy8gY2FzZSAnb24tc3VibWl0Jzpcbi8vIGNhc2UgJ29uLXJlc2V0Jzpcbi8vIGNhc2UgJ29uLXNlbGVjdCc6XG4vLyBjYXNlICdvbi1ibHVyJzpcbi8vIGNhc2UgJ29uLWZvY3VzJzpcbi8vIEltYWdlIEV2ZW50c1xuLy8gY2FzZSAnb24tYWJvcnQnOlxuLy8gS2V5Ym9hcmQgRXZlbnRzXG4vLyBjYXNlICdvbi1rZXlkb3duJzpcbi8vIGNhc2UgJ29uLWtleXByZXNzJzpcbi8vIGNhc2UgJ29uLWtleXVwJzpcbi8vIE1vdXNlIEV2ZW50c1xuLy8gY2FzZSAnb24tY2xpY2snOlxuLy8gY2FzZSAnb24tZGJsY2xpY2snOlxuLy8gY2FzZSAnb24tbW91c2Vkb3duJzpcbi8vIGNhc2UgJ29uLW1vdXNlbW92ZSc6XG4vLyBjYXNlICdvbi1tb3VzZW91dCc6XG4vLyBjYXNlICdvbi1tb3VzZW92ZXInOlxuLy8gY2FzZSAnb24tbW91c2V1cCc6XG52YXIgZXZlbnRUZXh0ID0gJ2xvYWQgdW5sb2FkIGNoYW5nZSBzdWJtaXQgcmVzZXQgc2VsZWN0IGJsdXIgZm9jdXMgYWJvcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwJztcbnZhciBkb21FdmVudHMgPSBldmVudFRleHQuc3BsaXQoJyAnKTtcblxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICBnZXQgaW5qZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLiRpbmplY3RvcjtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgbG9jYWxzKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XG4gICAgICAgIHRoaXMucGFyc2VyID0gc2NvcGUuJHBhcnNlcjtcbiAgICAgICAgdGhpcy52aWV3ID0gbnVsbDtcbiAgICB9XG5cbiAgICBuZXdCaW5kaW5nKHRleHQpIHtcbiAgICAgICAgdmFyIGJpbmRpbmcgPSBuZXcgQmluZGluZyh0aGlzLnNjb3BlLCB0ZXh0LCB0aGlzLmxvY2Fscyk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kaW5ncy5wdXNoKGJpbmRpbmcpO1xuICAgICAgICByZXR1cm4gYmluZGluZztcbiAgICB9XG5cbiAgICBuZXdDb21wb25lbnQoY2xzKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMuaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGNscyk7XG5cbiAgICAgICAgdGhpcy5zY29wZS4kYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB0aGlzLnZpZXcuY29tcG9uZW50cy5wdXNoKGNoaWxkKTtcblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgbmV3RGlyZWN0aXZlKGNscykge1xuICAgICAgICB2YXIgZGlyZWN0aXZlID0gdGhpcy5pbmplY3Rvci5jcmVhdGVEaXJlY3RpdmUoY2xzKTtcblxuICAgICAgICBkaXJlY3RpdmUuJCRzY29wZSA9IHRoaXMuc2NvcGU7XG5cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICB9XG5cbiAgICByZWNvZ25pemVDb21wb25lbnQodmVsbSkge1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5wYXJzZXIucmVzb2x2ZUNvbXBvbmVudCh2ZWxtLm5vZGVOYW1lKTtcblxuICAgICAgICAvLyB2ZWxtLm5vZGVEYXRhLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmVjb2duaXplRGlyZWN0aXZlKHZhdHRyKSB7XG4gICAgICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLnBhcnNlci5yZXNvbHZlRGlyZWN0aXZlKHZhdHRyLm5vZGVEYXRhLm5hbWUpO1xuXG4gICAgICAgIC8vIHZhdHRyLm5vZGVEYXRhLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuXG4gICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgfVxuXG4gICAgcmVuZGVyKHRlbXBsYXRlLCBjb250YWluZXIpIHtcbiAgICAgICAgdmFyIGhhc0NvbnRhaW5lciA9IGNvbnRhaW5lciAhPSBudWxsO1xuXG4gICAgICAgIGlmKGhhc0NvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy52aWV3ID0gbmV3IFNpbmdsZU5vZGVWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBtdXN0IHNldCBhIHJvb3QgZWxlbWVudCBmb3IgZGlyZWN0aXZlIGxpZmUgY3ljbGUgXCJhZnRlckxpbmtcIiBob29wc1xuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgdGhpcy52aWV3ID0gbmV3IE11bHRpcGxlTm9kZVZpZXcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmlldy52bm9kZXMgPSB0aGlzLnBhcnNlci5wYXJzZVRlbXBsYXRlKHRlbXBsYXRlKTtcblxuICAgICAgICB0aGlzLmNvbXBpbGVOb2Rlcyh0aGlzLnZpZXcudm5vZGVzKTtcblxuICAgICAgICAvLyB0aGlzLmVudGl0eS5kaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS4kcHJlbGluaygpKTtcblxuICAgICAgICB0aGlzLmxpbmtOb2Rlcyh0aGlzLnZpZXcudm5vZGVzKS5mb3JFYWNoKG5vZGUgPT4gY29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpKTtcblxuICAgICAgICAvLyBjYWxsIGRpcmVjdGl2ZSBsaWZlIGN5Y2xlIGhvb3BzXG4gICAgICAgIHRoaXMudmlldy5kaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS4kcG9zdGxpbmsoKSk7XG5cbiAgICAgICAgaWYoaGFzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcubm9kZSA9IGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNhY2hlIHRoZSBnZW5lcmF0ZWQgZWxlbWVudHNcbiAgICAgICAgICAgIGRvbS5nZXRDaGlsZHJlbk9mRWxlbWVudChjb250YWluZXIpLmZvckVhY2gobm9kZSA9PiB0aGlzLnZpZXcubm9kZXMucHVzaChub2RlKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy52aWV3O1xuICAgIH1cblxuICAgIGNvbXBpbGVOb2Rlcyh2bm9kZXMpIHtcbiAgICAgICAgdm5vZGVzLmZvckVhY2godm5vZGUgPT4gdGhpcy5jb21waWxlTm9kZSh2bm9kZSkpO1xuICAgIH1cblxuICAgIGNvbXBpbGVOb2RlKHZub2RlKSB7XG4gICAgICAgIGlmIChpc1ZUZXh0KHZub2RlKSkge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlVGV4dCh2bm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpc1ZDb21tZW50KHZub2RlKSl7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVDb21tZW50KHZub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUVsbSh2bm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rTm9kZXModm5vZGVzKSB7XG4gICAgICAgIHJldHVybiB2bm9kZXMubWFwKHZub2RlID0+IHRoaXMubGlua05vZGUodm5vZGUpKTtcbiAgICB9XG5cbiAgICBsaW5rTm9kZSh2bm9kZSkge1xuICAgICAgICBpZiAoaXNWVGV4dCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtUZXh0KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzVkNvbW1lbnQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rQ29tbWVudCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5saW5rRWxtKHZub2RlKTtcbiAgICB9XG5cbiAgICBjb21waWxlRWxtKHZlbG0pIHtcbiAgICAgICAgdmFyIGVsbURhdGEgPSB2ZWxtLm5vZGVEYXRhO1xuXG4gICAgICAgIGVsbURhdGEuY29tcG9uZW50ID0gdGhpcy5yZWNvZ25pemVDb21wb25lbnQodmVsbSk7XG5cbiAgICAgICAgdmFyIGRpcmVjdGl2ZXMgPSBbXTtcbiAgICAgICAgdmFyIGN1c3RvbUxpbmtlciA9IHZlbG0udmF0dHJzLnNvbWUodmF0dHIgPT4ge1xuICAgICAgICAgICAgdmFyIGF0dHJEYXRhID0gdmF0dHIubm9kZURhdGE7XG5cbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUF0dHIodmF0dHIpO1xuXG4gICAgICAgICAgICBpZiAoYXR0ckRhdGEuZGlyZWN0aXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzLnB1c2goYXR0ckRhdGEuZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICBlbG1EYXRhLmxpbmtlciA9IGF0dHJEYXRhLmxpbmtlcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtRGF0YS5saW5rZXIgIT0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzb3J0IGRpcmVjdGl2ZSBhY2NvcmRpbmcgdG8gaXRzIHByaW9yaXR5XG4gICAgICAgIHV0aWxzLm9yZGVyQnkoZGlyZWN0aXZlcywgZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS4kcHJpb3JpdHkpLmZvckVhY2goZGlyZWN0aXZlID0+IHRoaXMudmlldy5kaXJlY3RpdmVzLnB1c2goZGlyZWN0aXZlKSk7XG5cbiAgICAgICAgZWxtRGF0YS5kaXJlY3RpdmVzID0gZGlyZWN0aXZlcztcblxuICAgICAgICAvLyBkaXJlY3RpdmUgZGVmaW5lcyBjdXN0b20gbGlua2VyIGZvciB0aGlzIHZpcnR1YWwgbm9kZSwgcmVuZGVyIGVuZ2luZSB3aWxsIG5vdCByZW5kZXIgaXQgYWNjb3JkaW5nIHRvIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgaWYgKGN1c3RvbUxpbmtlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsbURhdGEuY29tcG9uZW50KSB7XG4gICAgICAgICAgICBlbG1EYXRhLnNsb3RzID0gdGhpcy5zZWVrU2xvdCh2ZWxtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZU5vZGVzKHZlbG0uY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21waWxlQXR0cih2YXR0cikge1xuICAgICAgICB2YXIgYXR0ck5hbWUgPSB2YXR0ci5ub2RlTmFtZSwgYXR0clZhbHVlID0gdmF0dHIubm9kZVZhbHVlLFxuICAgICAgICAgICAgYXR0ckRhdGEgPSB2YXR0ci5ub2RlRGF0YSwgYmluZGluZztcblxuICAgICAgICBpZihhdHRyVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgYmluZGluZyA9IHRoaXMubmV3QmluZGluZyhhdHRyVmFsdWUpO1xuICAgICAgICAgICAgYXR0ckRhdGEuYmluZGluZyA9IGJpbmRpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnQCcpKSB7XG4gICAgICAgICAgICBhdHRyRGF0YS5pc0V2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGF0dHJEYXRhLm5hbWUgPSBhdHRyTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBhdHRyRGF0YS5pc0RvbUV2ZW50ID0gdXRpbHMuc29tZShkb21FdmVudHMsIGUgPT4gZSA9PT0gYXR0ckRhdGEubmFtZSk7XG4gICAgICAgICAgICBiaW5kaW5nICYmIChiaW5kaW5nLmxvZ2ljYWwgPSB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCc6JykpIHtcbiAgICAgICAgICAgIGF0dHJEYXRhLm5hbWUgPSBhdHRyTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBiaW5kaW5nICYmIChiaW5kaW5nLmlzRXhwID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnKicpKSB7XG4gICAgICAgICAgICBhdHRyRGF0YS5kaXJlY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYXR0ckRhdGEubmFtZSA9IGF0dHJOYW1lLnN1YnN0cigxKTtcbiAgICAgICAgICAgIGJpbmRpbmcgJiYgKGJpbmRpbmcuaXNFeHAgPSB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dHJEYXRhLm5hbWUgPSBhdHRyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRyRGF0YS5kaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLnJlY29nbml6ZURpcmVjdGl2ZSh2YXR0cik7XG5cbiAgICAgICAgICAgIGlmIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBhdHRyRGF0YS5kaXJlY3RpdmUgPSB0aGlzLm5ld0RpcmVjdGl2ZShkaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgIGF0dHJEYXRhLmRpcmVjdGl2ZS4kJHZhdHRyID0gdmF0dHI7XG5cbiAgICAgICAgICAgICAgICBpZihiaW5kaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZy5hc3NpZ25tZW50ID0gYXR0ckRhdGEuZGlyZWN0aXZlLiRhc3NpZ25tZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhdHRyRGF0YS5kaXJlY3RpdmUuJGNvbXBpbGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRyRGF0YS5saW5rZXIgPSBhdHRyRGF0YS5kaXJlY3RpdmU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpcmVjdGl2ZSAnICsgYXR0ckRhdGEubmFtZSArICcgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGJpbmRpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEoYXR0ckRhdGEuaXNFdmVudCB8fCBhdHRyRGF0YS5kaXJlY3RpdmUpKSB7XG4gICAgICAgICAgICB2YXIgc2V0SHRtbEF0dHIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxtID0gdmF0dHIudmVsbS5lbG07XG5cbiAgICAgICAgICAgICAgICBpZiAoYXR0ckRhdGEubmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KGVsbSwgYXR0ckRhdGEubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShhdHRyRGF0YS5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHZhdHRyLnZlbG0ubm9kZURhdGEuY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnQgPSB2YXR0ci52ZWxtLm5vZGVEYXRhLmNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5TmFtZSA9IHV0aWxzLmNvbnZlcnRUb0h1bXBOYW1lKGF0dHJEYXRhLm5hbWUsICctJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC4kaGFzUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LiRzZXRQcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEh0bWxBdHRyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oc2V0SHRtbEF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYmluZGluZy5jb21waWxlKCk7XG4gICAgfVxuXG4gICAgY29tcGlsZVRleHQodnRleHQpIHtcbiAgICAgICAgdnRleHQubm9kZURhdGEuYmluZGluZyA9IHRoaXMubmV3QmluZGluZyh2dGV4dC5ub2RlVmFsdWUpO1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBlbG0sIG5ld1RleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodnRleHQucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZ0ZXh0LmVsbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbSA9IHZ0ZXh0LmVsbS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsbSA9IHZ0ZXh0LnBhcmVudE5vZGUuZWxtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodnRleHQuZWxtID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLmFwcGVuZENoaWxkKG5ld1RleHROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbS5yZXBsYWNlRWxlbWVudCh2dGV4dC5lbG0sIG5ld1RleHROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZ0ZXh0LmVsbSA9IG5ld1RleHROb2RlO1xuICAgICAgICB9KTtcbiAgICAgICAgdnRleHQubm9kZURhdGEuYmluZGluZy5jb21waWxlKCk7XG4gICAgfVxuXG4gICAgY29tcGlsZUNvbW1lbnQodmNtbnQpIHtcblxuICAgIH1cblxuICAgIGxpbmtFbG0odmVsbSkge1xuICAgICAgICB2YXIgZWxtRGF0YSA9IHZlbG0ubm9kZURhdGE7XG5cbiAgICAgICAgaWYgKGVsbURhdGEubGlua2VyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBlbG1EYXRhLmxpbmtlci4kbGluaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmVsbS5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZlbG0ubm9kZU5hbWUpO1xuXG4gICAgICAgIGlmIChlbG1EYXRhLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5uZXdDb21wb25lbnQoZWxtRGF0YS5jb21wb25lbnQpO1xuXG4gICAgICAgICAgICBlbG1EYXRhLmNvbXBvbmVudCA9IGluc3RhbmNlO1xuXG4gICAgICAgICAgICBkb20uYWRkQ2xhc3ModmVsbS5lbG0sIE1fQ01QX0NMQVNTKTtcblxuICAgICAgICAgICAgdmVsbS52YXR0cnMuZm9yRWFjaCh2YXR0ciA9PiB0aGlzLmxpbmtBdHRyKHZhdHRyKSk7XG5cbiAgICAgICAgICAgIGluc3RhbmNlLiQkdmVsbSA9IHZlbG07XG4gICAgICAgICAgICBpbnN0YW5jZS4kc2VyQ29udGFpbmVyKHZlbG0uZWxtKTtcbiAgICAgICAgICAgIGluc3RhbmNlLiRzZXRTbG90KGVsbURhdGEuc2xvdHMpO1xuICAgICAgICAgICAgaW5zdGFuY2UuJHJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmVsbS52YXR0cnMuZm9yRWFjaCh2YXR0ciA9PiB0aGlzLmxpbmtBdHRyKHZhdHRyKSk7XG4gICAgICAgICAgICB2ZWxtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB2ZWxtLmVsbS5hcHBlbmRDaGlsZCh0aGlzLmxpbmtOb2RlKGNoaWxkKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlbG0uZWxtO1xuICAgIH1cblxuICAgIGxpbmtBdHRyKHZhdHRyKSB7XG4gICAgICAgIHZhciB2ZWxtID0gdmF0dHIudmVsbSxcbiAgICAgICAgICAgIGVsbSA9IHZlbG0uZWxtLFxuICAgICAgICAgICAgYXR0ckRhdGEgPSB2YXR0ci5ub2RlRGF0YSxcbiAgICAgICAgICAgIGJpbmRpbmcgPSBhdHRyRGF0YS5iaW5kaW5nO1xuXG4gICAgICAgIGlmKGJpbmRpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0dHJEYXRhLmlzRXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChhdHRyRGF0YS5pc0RvbUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoYXR0ckRhdGEubmFtZSwgZSA9PiBiaW5kaW5nLmNvbXB1dGUobmV3IExvY2FsKGUsIGVsbSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZlbG0ubm9kZURhdGEuY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IHV0aWxzLmNvbnZlcnRUb0h1bXBOYW1lKGF0dHJEYXRhLm5hbWUsICctJyk7XG4gICAgICAgICAgICAgICAgdmVsbS5ub2RlRGF0YS5jb21wb25lbnQuJGJpbmQoZXZlbnROYW1lLCBlID0+IGJpbmRpbmcuY29tcHV0ZShuZXcgTG9jYWwoZSwgZWxtKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYmluZGluZy5saW5rKCk7XG4gICAgICAgICAgICBiaW5kaW5nLnBhdGNoKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZWdpc3RlciBiaW5kaW5nIGNoYW5nZSBoYW5kbGVyIGFmdGVyIGZpcnN0IHBhdGNoXG4gICAgICAgIGlmKGF0dHJEYXRhLmRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4gYXR0ckRhdGEuZGlyZWN0aXZlLiRjaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rVGV4dCh2dGV4dCkge1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLmxpbmsoKTtcbiAgICAgICAgdnRleHQuZWxtID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodnRleHQubm9kZURhdGEuYmluZGluZy52YWx1ZSk7XG4gICAgICAgIHJldHVybiB2dGV4dC5lbG07XG4gICAgfVxuXG4gICAgbGlua0NvbW1lbnQodmNtbnQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodmNtbnQubm9kZVZhbHVlKTtcbiAgICB9XG5cbiAgICBzZWVrU2xvdCh2ZWxtKSB7XG4gICAgICAgIHZhciBzbG90cyA9IHt9O1xuXG4gICAgICAgIHZlbG0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGlmKGlzVkVsbShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xvdCA9IGNoaWxkLmdldEF0dHIoJ3Nsb3QnKTtcblxuICAgICAgICAgICAgICAgIGlmKHNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xvdHNbc2xvdC5ub2RlVmFsdWVdID0gY2hpbGQuZ2V0SW5uZXJUcGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAgc2xvdHM7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmNsYXNzIFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy52bm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmJpbmRpbmdzID0gW107XHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVzID0gW107XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbW91bnQoc2VsZWN0b3JPckVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgZWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYmluZFRyYW5zbGF0ZUNoYW5nZWQoKSB7XHJcbiAgICAvLyAgICAgdmFyIGJpbmRpbmdzID0gdGhpcy5lbnRpdHkuYmluZGluZ3M7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGlmKCFiaW5kaW5ncy5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgLy8gdXBkYXRlIHRleHQgd2hpbGUgdHJhbnNsYXRlIGNoYW5nZWRcclxuICAgIC8vICAgICB0aGlzLnVuYmluZFRyYW5zbGF0ZUNoYW5nZWQgPSBldmVudHMudHJhbnNsYXRlQ2hhbmdlZC5vbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGJpbmRpbmdzLmZvckVhY2goYmluZGluZyA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBiaW5kaW5nLmRldGVjdCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgYmluZGluZy5wYXRjaCgpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS4kZGVzdHJveSgpKTtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uJGRlc3Ryb3koKSk7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5ncy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5kZXN0cm95KCkpO1xyXG4gICAgICAgIHRoaXMudm5vZGVzLmZvckVhY2goaXRlbSA9PiBpdGVtLmRlc3Ryb3koKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuYmluZGluZ3MubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnZub2Rlcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2luZ2xlTm9kZVZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuICAgIGdldCBjb250ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5vZGUgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVOb2RlVmlldyBleHRlbmRzIFZpZXcge1xyXG4gICAgZ2V0IGNvbnRlbnQoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKG5vZGUgPT4gY29udGVudC5hcHBlbmRDaGlsZChub2RlKSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubm9kZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vaW5qZWN0b3InOyIsImltcG9ydCB7IFNlcnZpY2UsIGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQHNlcnZpY2Uoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnaW5qZWN0b3InXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmplY3RvciBleHRlbmRzIFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZUNvbXBvbmVudChuYW1lLCB1c2luZywgZGVmYXVsdE5zKSB7XHJcbiAgICAgICAgcmV0dXJuIGluamVjdG9yLnBhcnNlQ29tcG9uZW50KG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRGlyZWN0aXZlKG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpIHtcclxuICAgICAgICByZXR1cm4gaW5qZWN0b3IucGFyc2VEaXJlY3RpdmUobmFtZSwgdXNpbmcsIGRlZmF1bHROcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VTZXJ2aWNlKG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpIHtcclxuICAgICAgICByZXR1cm4gaW5qZWN0b3IucGFyc2VTZXJ2aWNlKG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRmlsdGVyKG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpIHtcclxuICAgICAgICByZXR1cm4gaW5qZWN0b3IucGFyc2VGaWx0ZXIobmFtZSwgdXNpbmcsIGRlZmF1bHROcyk7XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3RwbC1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi90cGwtYnVpbGRlcic7IiwiZXhwb3J0ICogZnJvbSAnLi92bm9kZSc7XG5leHBvcnQgKiBmcm9tICcuL3ZhdHRyJztcbmV4cG9ydCAqIGZyb20gJy4vdmNtbnQnO1xuZXhwb3J0ICogZnJvbSAnLi92ZWxtJztcbmV4cG9ydCAqIGZyb20gJy4vdnRleHQnO1xuZXhwb3J0ICogZnJvbSAnLi92dHlwZSc7IiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWQXR0ciBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5hdHRyaWJ1dGUsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy52ZWxtID0gbnVsbDtcbiAgICAgICAgdGhpcy5xdW90ZSA9ICdcIic7XG4gICAgfVxuXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBvbkNsb25lTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWQXR0cih0aGlzLm5vZGVOYW1lLCB0aGlzLm5vZGVWYWx1ZSk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWQ21udCBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5jb21tZW50LCAnI2NvbW1lbnQnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgb25DbG9uZU5vZGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVkNtbnQodGhpcy5ub2RlTmFtZSwgdGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuaW1wb3J0IHsgVkF0dHIgfSBmcm9tICcuL3ZhdHRyJztcbmltcG9ydCB7IHBhcnNlVHBsIH0gZnJvbSAnLi4vdHBsLWFwaSc7XG5pbXBvcnQgeyBUcGxCdWlsZGVyIH0gZnJvbSAnLi4vdHBsLWJ1aWxkZXInO1xuXG5leHBvcnQgY2xhc3MgVkVsbSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLmVsZW1lbnQsIG5hbWUpO1xuICAgICAgICB0aGlzLmVsbSA9IG51bGw7XG4gICAgICAgIHRoaXMudmF0dHJzID0gW107XG4gICAgICAgIHRoaXMuc2VsZkNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgVHBsQnVpbGRlcigpO1xuICAgIH1cblxuICAgIHB1c2hBdHRyKGF0dHIpIHtcbiAgICAgICAgYXR0ci52ZWxtID0gdGhpcztcbiAgICAgICAgdGhpcy52YXR0cnMucHVzaChhdHRyKTtcbiAgICB9XG5cbiAgICBoYXNBdHRyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YXR0cnMubGVuZ3RoICE9PSAwO1xuICAgIH1cblxuICAgIGdldEF0dHIoa2V5KSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5ub2RlTmFtZSA9PT0ga2V5O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaGVzWzBdO1xuICAgIH1cblxuICAgIHNldEF0dHIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdGFyZ2V0LCBtYXRjaGVzID0gdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBtYXRjaGVzWzBdO1xuICAgICAgICAgICAgdGFyZ2V0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG5ldyBWQXR0cihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHRhcmdldC52ZWxtID0gdGhpcztcbiAgICAgICAgICAgIHRhcmdldC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YXR0cnMucHVzaCh0YXJnZXQpO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmVtb3ZlQXR0cihrZXkpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IFtdLCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgVkF0dHIpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudmF0dHJzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLnZhdHRycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gc2VsZi52YXR0cnMuaW5kZXhPZihtYXRjaCk7XG4gICAgICAgICAgICAgICAgbWF0Y2guZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYudmF0dHJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQubGVuZ3RoID4gMCA/IHRhcmdldFswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgYXBwZW5kQXR0cihhdHRyKSB7XG4gICAgICAgIGlmIChhdHRyLnZlbG0gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3VycmVudCBhdHRyaWJ1dGUgaXMgbm90IG5ldyFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBhdHRyLnZlbG0gPSB0aGlzO1xuICAgICAgICBhdHRyLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMudmF0dHJzLnB1c2goYXR0cik7XG4gICAgICAgIHJldHVybiBhdHRyO1xuICAgIH1cblxuICAgIGdldE91dGVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZGVyLmJ1aWxkKHRoaXMpO1xuICAgIH1cblxuICAgIGdldElubmVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZGVyLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgfSkuam9pbignJyk7XG4gICAgfVxuXG4gICAgc2V0T3V0ZXJUcGwodHBsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcGFyc2VUcGwodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYsIHZub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmKTtcbiAgICB9XG5cbiAgICBzZXRJbm5lclRwbCh0cGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFyQ2hpbGROb2RlcygpO1xuICAgICAgICBwYXJzZVRwbCh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYuYXBwZW5kQ2hpbGQodm5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsb25lTm9kZSgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgVkVsbSh0aGlzLm5vZGVOYW1lLCB0aGlzLm5vZGVWYWx1ZSk7XG5cbiAgICAgICAgbm9kZS52YXR0cnMgPSB0aGlzLnZhdHRycy5tYXAoZnVuY3Rpb24gKHZhdHRyKSB7XG4gICAgICAgICAgICB2YXIgY29weSA9IHZhdHRyLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgY29weS52ZWxtID0gbm9kZTtcbiAgICAgICAgICAgIHJldHVybiBjb3B5O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudmF0dHJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhdHRycy5sZW5ndGggPSAwO1xuICAgIH1cbn0iLCJleHBvcnQgdmFyIG5vZGVUeXBlID0ge1xuICAgIGVsZW1lbnQ6IDEsXG4gICAgYXR0cmlidXRlOiAyLFxuICAgIHRleHQ6IDMsXG4gICAgY2RhdGFTZWN0aW9uOiA0LFxuICAgIGVudGl0eVJlZmVyZW5jZTogNSxcbiAgICBlbnRpdHk6IDYsXG4gICAgcHJvY2Vzc2luZ0luc3RydWN0aW9uOiA3LFxuICAgIGNvbW1lbnQ6IDgsXG4gICAgZG9jdW1lbnQ6IDksXG4gICAgZG9jdW1lbnRUeXBlOiAxMCxcbiAgICBkb2N1bWVudEZyYWdtZW50OiAxMSxcbiAgICBub3RhdGlvbjogMTJcbn1cblxuLy8gdmlydHVhbCBub2RlXG5leHBvcnQgY2xhc3MgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9kZVR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLm5vZGVOYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gW107XG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5ub2RlRGF0YSA9IHt9O1xuICAgIH1cblxuICAgIHB1c2hDaGlsZChjaGlsZCkge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIGJ1aWxkU2libGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IChzZWxmLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5idWlsZFNpYmxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDaGlsZE5vZGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBjbGVhckNoaWxkTm9kZXMoKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZC5uZXh0U2libGluZyA9IGNoaWxkO1xuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gdGhpcy5sYXN0Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICBpbnNlcnRCZWZvcmUocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHJlZkNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQ7XG4gICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0NoaWxkO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAwLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBpbnNlcnRBZnRlcihyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKHJlZkNoaWxkLm5leHRTaWJsaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShyZWZDaGlsZC5uZXh0U2libGluZywgbmV3Q2hpbGQpO1xuICAgIH1cblxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmUgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZy5wcmV2aW91c1NpYmxpbmcgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgcmVwbGFjZUNoaWxkKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlyc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGFzdENoaWxkID09PSByZWZDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZkNoaWxkLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBjbG9uZU5vZGUoZGVlcCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMub25DbG9uZU5vZGUoZGVlcCk7XG5cbiAgICAgICAgaWYoZGVlcCkge1xuICAgICAgICAgICAgbm9kZS5jaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQuY2xvbmVOb2RlKGRlZXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBub2RlLmJ1aWxkU2libGluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcblxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGhvb3BzXG5cbiAgICAvLyBlbmQgb2YgaG9vcHNcbn1cbiIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuXG5leHBvcnQgY2xhc3MgVlRleHQgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUudGV4dCwgJyN0ZXh0JywgdmFsdWUpO1xuICAgICAgICB0aGlzLmVsbSA9IG51bGw7XG4gICAgfVxuXG4gICAgb25DbG9uZU5vZGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVlRleHQodGhpcy5ub2RlTmFtZSwgdGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZUeXBlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5kb2N1bWVudFR5cGUpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBUcGxMZXhlciB9IGZyb20gJy4vdHBsLWxleGVyJztcbmltcG9ydCB7IFRwbFBhcnNlciB9IGZyb20gJy4vdHBsLXBhcnNlcic7XG5pbXBvcnQgeyBub2RlVHlwZSB9IGZyb20gJy4vbW9kZWwnO1xuXG5mdW5jdGlvbiBsZXhUcGwodHBsKSB7XG4gICAgdHBsID0gdXRpbHMuZXNjYXBlSHRtbCh0cGwpO1xuICAgIHJldHVybiBuZXcgVHBsTGV4ZXIoKS5sZXgodHBsKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUcGwodHBsKSB7XG4gICAgdHBsID0gdXRpbHMuZXNjYXBlSHRtbCh0cGwpO1xuICAgIHJldHVybiBuZXcgVHBsUGFyc2VyKG5ldyBUcGxMZXhlcigpKS5wYXJzZSh0cGwpO1xufVxuXG5mdW5jdGlvbiBpc1ZFbG0odm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlLmVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzVkF0dHIodm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlLmF0dHJpYnV0ZTtcbn1cblxuZnVuY3Rpb24gaXNWVGV4dCh2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUudGV4dDtcbn1cblxuZnVuY3Rpb24gaXNWQ29tbWVudCh2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUuY29tbWVudDtcbn1cblxuZXhwb3J0IHsgbGV4VHBsLCBwYXJzZVRwbCwgaXNWRWxtLCBpc1ZBdHRyLCBpc1ZUZXh0LCBpc1ZDb21tZW50IH07IiwiaW1wb3J0IHsgaXNWVGV4dCwgaXNWQ29tbWVudCB9IGZyb20gJy4vdHBsLWFwaSdcblxuZXhwb3J0IGNsYXNzIFRwbEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgYnVpbGQodm5vZGUpIHtcbiAgICAgICAgaWYgKGlzVlRleHQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZFRleHQodm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNWQ29tbWVudCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQ29tbWVudCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5idWlsZEVsZW1lbnQodm5vZGUpO1xuICAgIH1cblxuICAgIGJ1aWxkRWxlbWVudCh2ZWxtKSB7XG4gICAgICAgIHZhciBhdHRyVHBsID0gdmVsbS52YXR0cnMubWFwKCh2YXR0cikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQXR0cmlidXRlKHZhdHRyKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJyAnKSxcbiAgICAgICAgICAgIGNoaWxkVHBsID0gdmVsbS5jaGlsZE5vZGVzLm1hcCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChjaGlsZCk7XG4gICAgICAgICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgICBpZihhdHRyVHBsKSB7XG4gICAgICAgICAgICBhdHRyVHBsID0gJyAnICsgYXR0clRwbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cGwgPSAnPCcgKyB2ZWxtLm5vZGVOYW1lICsgYXR0clRwbCArICc+JyArIGNoaWxkVHBsO1xuXG4gICAgICAgIGlmICghdmVsbS5zZWxmQ2xvc2VkKSB7XG4gICAgICAgICAgICB0cGwgKz0gKCc8LycgKyB2ZWxtLm5vZGVOYW1lICsgJz4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cGw7XG4gICAgfVxuXG4gICAgYnVpbGRBdHRyaWJ1dGUodmF0dHIpIHtcbiAgICAgICAgcmV0dXJuIHZhdHRyLm5vZGVOYW1lICsgKHZhdHRyLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdmF0dHIucXVvdGUgKyB2YXR0ci5ub2RlVmFsdWUgKyB2YXR0ci5xdW90ZSkpO1xuICAgIH1cblxuICAgIGJ1aWxkVGV4dCh2dGV4dCkge1xuICAgICAgICByZXR1cm4gdnRleHQubm9kZVZhbHVlO1xuICAgIH1cblxuICAgIGJ1aWxkQ29tbWVudCh2Y21udCkge1xuICAgICAgICByZXR1cm4gdmNtbnQubm9kZVZhbHVlO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuLi9leHAnO1xuXG5leHBvcnQgY2xhc3MgVHBsTGV4ZXIgZXh0ZW5kcyBFeHBMZXhlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxuICAgICAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxuICAgICAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnIHx8XG4gICAgICAgICAgICBjaCA9PT0gJ0AnIHx8IGNoID09PSAnOicgfHwgY2ggPT09ICcqJyk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCwgY3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpIHx8IGNoID09PSAnLScgfHwgY2ggPT09ICcuJztcbiAgICB9XG5cbiAgICBleHBlY3RTdHJpbmcoc3RyKSB7XG4gICAgICAgIHZhciBudW0gPSBzdHIubGVuZ3RoO1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPD0gdGhpcy50ZXh0Lmxlbmd0aCkgPyAoc3RyID09PSB0aGlzLnRleHQuc3Vic3RyKHRoaXMuaW5kZXgsIG51bSkpIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gaHRtbCBjb21tZW50IFwiPCEtLWNvbW1lbnQtLT5cIlxuICAgIHJlYWRDb21tZW50KGJlZ2luLCBlbmQpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICAgICAgdmFyIHJhd1N0cmluZyA9IGJlZ2luO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoZW5kKSkge1xuICAgICAgICAgICAgICAgIHJhd1N0cmluZyArPSBlbmQ7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignVW50ZXJtaW5hdGVkIGNvbW1lbnQnLCBzdGFydCk7XG4gICAgfVxuXG4gICAgLy8gaHRtbCB0ZXh0XG4gICAgcmVhZFRleHQoKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgaWYgKChjaCA9PT0gJzwnICYmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikgfHwgY2gyID09PSAnLycpKSB8fCB0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICB0ZXh0OiBzdHJpbmcsXG4gICAgICAgICAgICB0ZXh0VGFnOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGh0bWwgdGFnXG4gICAgcmVhZFRhZyhiZWdpbiwgZW5kLCBjbG9zaW5nLCBkb2N0eXBlKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogYmVnaW4sIHRhZzogdHJ1ZSwgY2xvc2luZzogY2xvc2luZywgYmVnaW46IHRydWUsIGRvY3R5cGU6IGRvY3R5cGUgfSk7XG4gICAgICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xuICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcblxuICAgICAgICAgICAgaWYgKCFjbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgICAgIHZhciBzdHIgPSBjaCArIGNoMjtcbiAgICAgICAgICAgICAgICBpZiAoc3RyID09PSAnLycgKyBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBzdHIsIHRhZzogdHJ1ZSwgY2xvc2luZzogdHJ1ZSwgZW5kOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHN0ci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoID09PSBlbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVuZCxcbiAgICAgICAgICAgICAgICAgICAgdGFnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbG9zaW5nOiAhIWRvY3R5cGUgPyB0cnVlIDogY2xvc2luZyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnPScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6ICc9JywgZXF1YWw6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxleCh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgICAgIHZhciBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIHZhciBjaDMgPSB0aGlzLnBlZWsoMik7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZENvbW1lbnQoJzwhLS0nLCAnLS0+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJzwnICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCcsICc+JywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwvJykgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8LycsICc+JywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCFET0NUWVBFJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCEnLCAnPicsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdET0NUWVBFIGlzIG5vdCBhbGxvd2VkJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRleHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgfVxufSIsImltcG9ydCB7IEV4cFBhcnNlciB9IGZyb20gJy4uL2V4cCc7XG5pbXBvcnQge1xuICAgIFZFbG0sIFZBdHRyLCBWVGV4dCwgVkNtbnQsIFZUeXBlXG59IGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgVHBsUGFyc2VyIGV4dGVuZHMgRXhwUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihsZXhlciwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsZXhlciwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcGFyc2UodGV4dCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcblxuICAgICAgICB2YXIgcm9vdCA9IG5ldyBWRWxtKCk7XG4gICAgICAgIHZhciBkb2N0eXBlLCBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLmRvY3R5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZG9jdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdHlwZSA9IHRoaXMuZG9jdHlwZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2goZG9jdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIG9ubHkgYWxsb3cgb25lXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBpcyBub3QgYWxsb3dlZFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IFZDbW50KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKGNvbW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGV4dFRhZykge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFZUZXh0KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2godGhpcy5lbGVtZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiaW1wb3NzaWJsZVwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByb290LmJ1aWxkU2libGluZygpO1xuXG4gICAgICAgIHJldHVybiByb290LmNoaWxkTm9kZXM7XG4gICAgfVxuXG4gICAgZG9jdHlwZSgpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHZhciBkb2NUeXBlID0gbmV3IFZUeXBlKCk7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBkb2NUeXBlLm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdHRycyhkb2NUeXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBkb2NUeXBlLmNoaWxkTm9kZXMucHVzaChhdHRyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZG9jVHlwZTtcbiAgICB9XG5cbiAgICBlbGVtZW50KHApIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHZhciBlbGUgPSBuZXcgVkVsbSgpO1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgZWxlLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXR0cnMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBlbGUucHVzaEF0dHIoYXR0cik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIGVsZS5zZWxmQ2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZEVsZW1lbnRzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLnB1c2hDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbiAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09IHRva2VuLnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGU7XG4gICAgfVxuXG4gICAgY2hpbGRFbGVtZW50cyhwKSB7XG4gICAgICAgIHZhciBlbGVzID0gW107XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBWQ21udCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2goY29tbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVlRleHQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKHRoaXMuZWxlbWVudChwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZXM7XG4gICAgfVxuXG4gICAgYXR0cnMocCkge1xuICAgICAgICB2YXIgYXR0cnMgPSBbXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhdHRyID0gbmV3IFZBdHRyKCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgYXR0ci5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICAgICAgYXR0ci5vcmlnaW4gPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLmVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4uY29uc3RhbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIubm9kZVZhbHVlID0gdG9rZW4udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF0dHJzLnB1c2goYXR0cik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXR0cnM7XG4gICAgfVxuXG4gICAgY3VycmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbn0iLCJ2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG4vLyBpc1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBBcnJheTtcbn1cblxuZnVuY3Rpb24gaXNNYXAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBNYXA7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzQmxhbmtPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG4vLyBlbmQgb2YgaXNcblxuLy8gdmFsdWVcbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICByZXR1cm4gaXNOYU4obikgPyB2YWx1ZSA6IG47XG59XG5cbmZ1bmN0aW9uIGxvd2VyY2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b0xvd2VyQ2FzZSgpIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB1cHBlcmNhc2Uoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9VcHBlckNhc2UoKSA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY29udmVydFRvSHVtcE5hbWUobmFtZSwgc2VwYXJhdG9yLCB1cHBlcmNhc2VGaXJzdExldHRlcikge1xuICAgIHJldHVybiBuYW1lLnNwbGl0KHNlcGFyYXRvcikubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwICYmICF1cHBlcmNhc2VGaXJzdExldHRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zdWJzdHJpbmcoMSk7XG4gICAgfSkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRGcm9tSHVtcE5hbWUobmFtZSwgc2VwYXJhdG9yLCB1cHBlcmNhc2VGaXJzdExldHRlcikge1xuICAgIHZhciBpID0gMCwgbmV3TmFtZSA9ICcnLCBjaGFyO1xuXG4gICAgd2hpbGUgKGkgPCBuYW1lLmxlbmd0aCkge1xuICAgICAgICBjaGFyID0gbmFtZVtpXTtcblxuICAgICAgICBpZiAoKGkgIT09IDAgfHwgdXBwZXJjYXNlRmlyc3RMZXR0ZXIpICYmIC9bQS1aXS8udGVzdChjaGFyKSkge1xuICAgICAgICAgICAgbmV3TmFtZSArPSBzZXBhcmF0b3I7XG4gICAgICAgICAgICBuZXdOYW1lICs9IGNoYXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld05hbWUgKz0gY2hhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGkrKztcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3TmFtZTtcbn1cbi8vIGVuZCBpZiB2YWx1ZVxuXG4vLyBvYmplY3RcbmZ1bmN0aW9uIGNvcHkoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgb2JqSW5kZXggPSAwLCBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdLCBmaWx0ZXI7XG5cbiAgICBpZiAoaXNCb29sZWFuKG9iaikpIHtcbiAgICAgICAgZGVlcCA9IG9iajtcbiAgICAgICAgb2JqSW5kZXgrKztcbiAgICAgICAgb2JqID0gYXJndW1lbnRzW29iakluZGV4XTtcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IG9iakluZGV4ICsgMSkge1xuICAgICAgICBmaWx0ZXIgPSBhcmd1bWVudHNbb2JqSW5kZXggKyAxXTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIHZhciBuZXdBcnIgPSBbXTtcbiAgICAgICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwgaW5kZXgsIGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZGVlcCA/IGNvcHkoZGVlcCwgaXRlbSkgOiBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgdmFyIG5ld09iaiA9IG9iamVjdChvYmopO1xuICAgICAgICBmb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBrZXksIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gZGVlcCA/IGNvcHkoZGVlcCwgdmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICBpZiAoaXNCb29sZWFuKHRhcmdldCkpIHtcbiAgICAgICAgZGVlcCA9IHRhcmdldDtcbiAgICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWysraW5kZXhdO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlKCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0ge307XG5cbiAgICBpZiAoaXNCb29sZWFuKGFyZ3VtZW50c1tpbmRleF0pKSB7XG4gICAgICAgIGRlZXAgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gcGxhaW5NZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QodGFyZ2V0W2tleV0pICYmIGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8gZW5kIG9mIG9iamVjdFxuXG4vLyBpdGVyYXRvclxuZnVuY3Rpb24gZm9yRWFjaCh0YXJnZXQsIGFjdGlvbikge1xuICAgIGlmIChpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgdGFyZ2V0LmZvckVhY2goYWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uKHRhcmdldFtrZXldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzb21lKHRhcmdldCwgZnVuYykge1xuICAgIGlmIChpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5zb21lKGZ1bmMpO1xuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChmdW5jKHRhcmdldFtrZXldLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIGVuZCBvZiBpdGVyYXRvclxuXG4vLyBhcnJheVxuZnVuY3Rpb24gb3JkZXJCeShsaXN0LCBnZXR0ZXIpIHtcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPCBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb3JkZXJCeURlc2NlbmRpbmcobGlzdCwgZ2V0dGVyKSB7XG4gICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XG4gICAgfTtcblxuICAgIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGdldFZhbHVlKGEpIDwgZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKGxpc3QsIHZhbHVlKSB7XG4gICAgdmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKHZhbHVlKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuLy8gZW5kIG9mIGFycmF5XG5cbmZ1bmN0aW9uIG9iamVjdChvKSB7XG4gICAgZnVuY3Rpb24gRigpIHtcbiAgICB9XG5cbiAgICBGLnByb3RvdHlwZSA9IG87XG4gICAgcmV0dXJuIG5ldyBGKCk7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XG4gICAgdmFyIHByb3RvdHlwZSA9IG9iamVjdChzdXBlclR5cGUucHJvdG90eXBlKTtcbiAgICBwcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJUeXBlO1xuICAgIHN1YlR5cGUucHJvdG90eXBlID0gcHJvdG90eXBlO1xufVxuXG5mdW5jdGlvbiBpbmhlcml0KHN1YlR5cGUsIHN1cGVyVHlwZSkge1xuICAgIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKTtcbiAgICBzdWJUeXBlLnN1cGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdXBlclR5cGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBoYXNQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB7XG4gICAgdmFyIGtleSwga2V5cyA9IHByb3BlcnR5LnNwbGl0KCcuJyk7XG5cbiAgICB3aGlsZSAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmICghaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXRba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNPYmplY3QodGFyZ2V0KSAmJiB0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5cy5zaGlmdCgpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgIHZhciBrZXksIGtleXMgPSBwcm9wZXJ0eS5zcGxpdCgnLicpO1xuXG4gICAgd2hpbGUgKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZighaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXRba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHZhciBrZXksIGtleXMgPSBwcm9wZXJ0eS5zcGxpdCgnLicpO1xuXG4gICAgd2hpbGUgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICBpZiAoIWlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0W2tleV07XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0KCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2gsIG1hdGNoVGV4dCwgaW5kZXgsIHJlc3VsdCA9ICcnLCB0ZXh0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICBwYXR0ZXJuID0gL1xceyhcXGQrKVxcfS9nLCBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcblxuICAgIHdoaWxlIChtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KSkge1xuICAgICAgICBtYXRjaFRleHQgPSBtYXRjaFswXTtcbiAgICAgICAgaW5kZXggPSBOdW1iZXIucGFyc2VJbnQobWF0Y2hbMV0pICsgMTtcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSBpbmRleCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmb3JtYXQgaXRlbSAnICsgaW5kZXggKyAnaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KSArIGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgIH1cblxuICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sKSB7XG4gICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvJmd0Oy9nLCAnPicpLnJlcGxhY2UoLyZsdDsvZywgJzwnKS5yZXBsYWNlKC8mYW1wOy9nLCAnJicpLnJlcGxhY2UoLyZxdW90ZTsvZywgJycpO1xufVxuXG5leHBvcnQge1xuICAgIGlzVW5kZWZpbmVkLFxuICAgIGlzRGVmaW5lZCxcbiAgICBpc09iamVjdCxcbiAgICBpc0JsYW5rT2JqZWN0LFxuICAgIGlzTnVtYmVyLFxuICAgIGlzRGF0ZSxcbiAgICBpc0Z1bmN0aW9uLFxuICAgIGlzUmVnRXhwLFxuICAgIGlzQm9vbGVhbixcbiAgICBpc0FycmF5LFxuICAgIGlzU3RyaW5nLFxuICAgIGlzRm9ybURhdGEsXG4gICAgdG9OdW1iZXIsXG4gICAgbG93ZXJjYXNlLFxuICAgIHVwcGVyY2FzZSxcbiAgICBjb252ZXJ0VG9IdW1wTmFtZSxcbiAgICBjb252ZXJ0RnJvbUh1bXBOYW1lLFxuICAgIGNvcHksXG4gICAgZXh0ZW5kLFxuICAgIG1lcmdlLFxuICAgIGZvckVhY2gsXG4gICAgc29tZSxcbiAgICByZW1vdmUsXG4gICAgY29uY2F0LFxuICAgIG9yZGVyQnksXG4gICAgb3JkZXJCeURlc2NlbmRpbmcsXG4gICAgb2JqZWN0LFxuICAgIGluaGVyaXQsXG4gICAgaGFzUHJvcGVydHksXG4gICAgZ2V0UHJvcGVydHksXG4gICAgc2V0UHJvcGVydHksXG4gICAgZm9ybWF0LFxuICAgIGVzY2FwZUh0bWxcbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vZG9tJztcbmltcG9ydCB7IE1fQ01QX0NMQVNTIH0gZnJvbSAnLi4vY3NzJztcbmltcG9ydCB7IGlzTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IHsgT2JzZXJ2ZXIsIGhhbmRsZXIgfSBmcm9tICcuLi9vYnNlcnZlcic7XG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL3JlbmRlcic7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuaW1wb3J0IHsgRXZhbHVhdG9yIH0gZnJvbSAnLi4vZXhwJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudENvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLiQkdmVsbSA9IG51bGw7XG4gICAgdGhpcy4kJHBhcmVudCA9IG51bGw7XG4gICAgdGhpcy4kJGNoaWxkcmVuID0gW107XG4gICAgdGhpcy4kJG1haW5WaWV3ID0gbnVsbDtcbiAgICB0aGlzLiRwYXJzZXIgPSBuZXcgUGFyc2VyKHRoaXMpO1xuICAgIHRoaXMuJG9ic2VydmVyID0gbmV3IE9ic2VydmVyKHRoaXMpO1xuICAgIHRoaXMuJGRhdGEgPSB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xuICAgIHRoaXMuJGNvbnRhaW5lciA9IHRoaXMuJG1ha2VDb250YWluZXIoKTtcbiAgICB0aGlzLnNsb3RzID0ge307XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB0aGlzLnByb3BzID0gdGhpcy4kZGVsZWdhdGUoe30pO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLiRkZWxlZ2F0ZSh7fSk7XG4gICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcywgdGhpcy4kZGF0YSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICAgIGdldCAkaW5qZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiBpbmplY3RvcjtcbiAgICB9XG5cbiAgICAkZGVsZWdhdGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodGFyZ2V0LCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICAkc2V0U2xvdChzbG90cykge1xuICAgICAgICB0aGlzLnNsb3RzID0gc2xvdHMgfHwge307XG4gICAgfVxuXG4gICAgJHNlckNvbnRhaW5lcihlbG0pIHtcbiAgICAgICAgdGhpcy4kY29udGFpbmVyID0gZWxtO1xuICAgIH1cblxuICAgICRzZXRTdGF0ZShzdGF0ZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy4kZGVsZWdhdGUoc3RhdGUpO1xuICAgIH1cblxuICAgICRzZXRQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0gdGhpcy4kZGVsZWdhdGUocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgY29tcG9uZW50Q29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9XG5cbiAgICAkbWFrZUNvbnRhaW5lcigpIHtcbiAgICAgICAgdmFyIGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodXRpbHMuY29udmVydEZyb21IdW1wTmFtZSh0aGlzLiRkYXRhLmtleSwgJy0nKSk7XG4gICAgICAgIGRvbS5hZGRDbGFzcyhlbG0sIE1fQ01QX0NMQVNTKTtcbiAgICAgICAgcmV0dXJuIGVsbTtcbiAgICB9XG5cbiAgICAkaGFzUHJvcGVydHkoa2V5KSB7XG4gICAgICAgIHJldHVybiB1dGlscy5oYXNQcm9wZXJ0eSh0aGlzLnByb3BzLCBrZXkpO1xuICAgIH1cblxuICAgICRnZXRQcm9wZXJ0eShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmdldFByb3BlcnR5KHRoaXMucHJvcHMsIGtleSk7XG4gICAgfVxuXG4gICAgJHNldFByb3BlcnR5KGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcy5wcm9wcywga2V5KTtcblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLnByb3BzLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZWQgJiYgdGhpcy5vblByb3BlcnR5Q2hhbmdlZChrZXksIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkaGFzTWVzc2FnZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXkpO1xuICAgIH1cblxuICAgICRiaW5kKGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXkpO1xuXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIG1lc3NhZ2Uub24oaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCdcInswfVwiIGlzIG5vdCBhIHZhbGlkIGV2ZW50Jywga2V5KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkdW5iaW5kKGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXkpO1xuXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIG1lc3NhZ2Uub2ZmKGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHdhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRvYnNlcnZlci53YXRjaChleHAsIGhhbmRsZXIsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgJHdhdGNoQ29sbGVjdGlvbihleHAsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gdGhpcy4kb2JzZXJ2ZXIud2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICAkZXZhbChleHAsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gbmV3IEV2YWx1YXRvcih0aGlzLCB7bG9jYWxzOiBsb2NhbHN9KS5ldmFsdWF0ZShleHApO1xuICAgIH1cblxuICAgICRhc3NpZ24oZXhwLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXZhbHVhdG9yKHRoaXMsIHtsb2NhbHM6IGxvY2Fsc30pLmFzc2lnbihleHAsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAkZ2V0VGVtcGxhdGUoKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy4kZGF0YTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZGF0YS50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRhdGEudGVtcGxhdGVJZCkpIHtcbiAgICAgICAgICAgIHZhciBlbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhLnRlbXBsYXRlSWQpO1xuXG4gICAgICAgICAgICBpZiAoZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtLmlubmVySFRNTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAkcmVuZGVyKCkge1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLiRnZXRUZW1wbGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuJCRtYWluVmlldyA9IG5ldyBSZW5kZXJlcih0aGlzKS5yZW5kZXIodGVtcGxhdGUsIHRoaXMuJGNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5hZnRlclZpZXdSZW5kZXJlZCAmJiB0aGlzLmFmdGVyVmlld1JlbmRlcmVkKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtYWluVmlldztcbiAgICB9XG5cbiAgICAkbW91bnQoc2VsZWN0b3JPckVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiRjb250YWluZXIpO1xuICAgIH1cblxuICAgICR1bm1vdW50KCkge1xuICAgICAgICBkb20ucmVtb3ZlRWxlbWVudCh0aGlzLiRjb250YWluZXIpO1xuICAgIH1cblxuICAgICRhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgICAgICB0aGlzLiQkY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIGNoaWxkLiQkcGFyZW50ID0gdGhpcztcbiAgICB9XG5cbiAgICAkcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kJGNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJCRjaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgY2hpbGQuJCRwYXJlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJHVubW91bnQoKTtcblxuICAgICAgICB0aGlzLiRvYnNlcnZlci5kZXN0cm95KCk7XG5cbiAgICAgICAgaWYodGhpcy4kJG1haW5WaWV3ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJCRtYWluVmlldy5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xuXG4gICAgICAgIGlmKHRoaXMuJCRwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kJHBhcmVudC4kcmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBNX0hJREVfQ0xBU1MgfSBmcm9tICcuLi9jc3MnO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vcmVuZGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZUNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLiQkc2NvcGUgPSBudWxsO1xuICAgIHRoaXMuJCR2YXR0ciA9IG51bGw7XG4gICAgdGhpcy4kcHJpb3JpdHkgPSA5O1xuICAgIC8vIGJpbmRpbmcgdGV4dCBpcyBhIGFzc2lnbm1lbnRcbiAgICB0aGlzLiRhc3NpZ25tZW50ID0gZmFsc2U7XG4gICAgdGhpcy4kcGxhY2Vob2xkZXIgPSBudWxsO1xuICAgIHRoaXMuJGRhdGEgPSB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJGRhdGEpO1xufVxuXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlIHtcbiAgICBnZXQgJGtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhZGF0YS5rZXk7XG4gICAgfVxuXG4gICAgZ2V0ICRuYW1lc3BhY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xuICAgIH1cblxuICAgIGdldCAkc2NvcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkc2NvcGU7XG4gICAgfVxuXG4gICAgZ2V0ICRyZW5kZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzY29wZS4kcmVuZGVyZXI7XG4gICAgfVxuXG4gICAgZ2V0ICRlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLnZlbG0uZWxtO1xuICAgIH1cblxuICAgIGdldCAkYmluZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci5ub2RlRGF0YS5iaW5kaW5nO1xuICAgIH1cblxuICAgIGdldCAkY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLnZlbG0ubm9kZURhdGEuY29tcG9uZW50O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZGlyZWN0aXZlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyB3aGlsZSBjb21waWxpbmdcbiAgICAkY29tcGlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25Db21waWxlICYmIHRoaXMub25Db21waWxlKHRoaXMuJCR2YXR0ci52ZWxtLCB0aGlzLiQkdmF0dHIpO1xuICAgIH1cblxuICAgICRsaW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkxpbmsgJiYgdGhpcy5vbkxpbmsodGhpcy4kc2NvcGUpO1xuICAgIH1cblxuICAgIC8vIGJlZm9yZSBsaW5raW5nXG4gICAgLy8gJHByZWxpbmsoKSB7XG4gICAgLy8gICAgIHRoaXMuYmVmb3JlTGluayAmJiB0aGlzLmJlZm9yZUxpbmsoKTtcbiAgICAvLyB9XG5cbiAgICAvLyBhZnRlciBsaW5raW5nXG4gICAgJHBvc3RsaW5rKCkge1xuICAgICAgICB0aGlzLmFmdGVyTGluayAmJiB0aGlzLmFmdGVyTGluaygpO1xuXG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNoYW5nZSh0aGlzLiRiaW5kaW5nLnZhbHVlLCB0aGlzLiRiaW5kaW5nLm9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoZSBpbnB1dCB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAgJGNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSAmJiB0aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XG4gICAgfVxuXG4gICAgJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgaWYoIW5hbWVzcGFjZSl7XG4gICAgICAgICAgICBuYW1lc3BhY2UgPSB0aGlzLiRuYW1lc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0ID0gdmVsbS5ub2RlRGF0YS5kaXJlY3RpdmVzLmZpbHRlcihpdGVtID0+IGl0ZW0uJGtleSA9PT0ga2V5ICYmIGl0ZW0uJG5hbWVzcGFjZSA9PT0gbmFtZXNwYWNlKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA/IHJlc3VsdFswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgJHNlZWtEaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIHZlbG0gPSB0aGlzLiQkdmF0dHIudmVsbTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5LCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgICRzZWVrVXBEaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIHZlbG0gPSB0aGlzLiQkdmF0dHIudmVsbS5wYXJlbnROb2RlO1xuICAgICAgICByZXR1cm4gdGhpcy4kJHNlYXJjaERpcmVjdGl2ZSh2ZWxtLCBrZXksIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgJHJlbW92ZUVsZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLiRlbGVtZW50LnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuJHBsYWNlaG9sZGVyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3lvdSBtdXN0IGRlZmluZSBlbGVtZW50IHBsYWNlaG9sZGVyIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9tLnJlcGxhY2VFbGVtZW50KHRoaXMuJGVsZW1lbnQsIHRoaXMuJHBsYWNlaG9sZGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRhcHBlbmRFbGVtZW50KCkge1xuICAgICAgICBpZiAodGhpcy4kZWxlbWVudC5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRwbGFjZWhvbGRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd5b3UgbXVzdCBkZWZpbmUgZWxlbWVudCBwbGFjZWhvbGRlciEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbS5yZXBsYWNlRWxlbWVudCh0aGlzLiRwbGFjZWhvbGRlciwgdGhpcy4kZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkaGlkZUVsZW1lbnQoKSB7XG4gICAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLiRlbGVtZW50LCBNX0hJREVfQ0xBU1MpO1xuICAgIH1cblxuICAgICRzaG93RWxlbWVudCgpIHtcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHRoaXMuJGVsZW1lbnQsIE1fSElERV9DTEFTUyk7XG4gICAgfVxuXG4gICAgJGV2YWwoZXhwLCBsb2NhbHMpIHtcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy4kYmluZGluZy5sb2NhbHMsIGxvY2Fscyk7XG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZS4kZXZhbChleHAsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgJGFzc2lnbihleHAsIHZhbHVlLCBsb2NhbHMpIHtcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy4kYmluZGluZy5sb2NhbHMsIGxvY2Fscyk7XG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZS4kYXNzaWduKGV4cCwgdmFsdWUpO1xuICAgIH1cblxuICAgICRyZW5kZXIodGVtcGxhdGUsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gbmV3IFJlbmRlcmVyKHRoaXMuJHNjb3BlLCBsb2NhbHMpLnJlbmRlcih0ZW1wbGF0ZSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IHJvbGVzIH0gZnJvbSAnLi9yb2xlcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIGNvbXBvbmVudENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBkaXJlY3RpdmVDb25zdHJ1Y3RvciB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IEZpbHRlciwgZmlsdGVyQ29uc3RydWN0b3IgfSBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgeyBTZXJ2aWNlLCBzZXJ2aWNlQ29uc3RydWN0b3IgfSBmcm9tICcuL3NlcnZpY2UnO1xuXG52YXIgbmFtZVBhdHRlcm4gPSAvXlthLXpdW2EtekEtWjAtOV0qJC87XG5cbi8vIHN0YXJ0IG1ha2UgY29uc3RydWN0b3IgZnVuY3Rpb24gYmVjYXVzZSBjbGFzcyBjYW4ndCBiZSBjYWxsIHdpdGhvdXQgbmV3LlxudmFyIGNvbXBvbmVudENsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gQ29tcG9uZW50KG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbXBvbmVudENvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuY29tcG9uZW50Q2xhc3MucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxudmFyIGRpcmVjdGl2ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gRGlyZWN0aXZlKG1ldGFkYXRhKSB7XG4gICAgICAgIGRpcmVjdGl2ZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuZGlyZWN0aXZlQ2xhc3MucHJvdG90eXBlID0gRGlyZWN0aXZlLnByb3RvdHlwZTtcblxudmFyIGZpbHRlckNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gRmlsdGVyKG1ldGFkYXRhKSB7XG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuZmlsdGVyQ2xhc3MucHJvdG90eXBlID0gRmlsdGVyLnByb3RvdHlwZTtcblxudmFyIHNlcnZpY2VDbGFzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFNlcnZpY2UobWV0YWRhdGEpIHtcbiAgICAgICAgc2VydmljZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpXG4gICAgfTtcbn0pKCk7XG5zZXJ2aWNlQ2xhc3MucHJvdG90eXBlID0gU2VydmljZS5wcm90b3R5cGU7XG4vLyBlbmQgb2YgbWFrZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBiZWNhdXNlIGNsYXNzIGNhbid0IGJlIGNhbGwgd2l0aG91dCBuZXcuXG5cbi8vIGNvbnN0cnVjdG9yIGZhY3RvcnksIGNyZWF0ZSBjb25zdHJ1Y3RvciBmb3IgY29tcG9uZW50LCBkaXJlY3RpdmUsIGZpbHRlciBhbmQgc2VydmljZVxuZXhwb3J0IGNsYXNzIEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcmVuYW1lKHJvbGVJZCwgbmFtZSkge1xuICAgICAgICBpZiAobmFtZVBhdHRlcm4udGVzdChuYW1lKSkge1xuICAgICAgICAgICAgdmFyIG5ld05hbWUgPSB1dGlscy51cHBlcmNhc2UobmFtZVswXSk7XG5cbiAgICAgICAgICAgIGlmIChuYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdOYW1lICs9IG5hbWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKHJvbGVJZCkge1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuY29tcG9uZW50OlxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdDb21wb25lbnQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmRpcmVjdGl2ZTpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnRGlyZWN0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5maWx0ZXI6XG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0ZpbHRlcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuc2VydmljZTpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnU2VydmljZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3TmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lICsgJ2lzIG5vdCBhIHZhbGlkIG5hbWUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2Uocm9sZUlkLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciwgY29uc3RydWN0b3JOYW1lID0gdGhpcy5yZW5hbWUocm9sZUlkLCBuYW1lKSxcbiAgICAgICAgICAgIG9uQ29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yLnN1cGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbmZpZy5jb25zdHJ1Y3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IEZ1bmN0aW9uKCdvbkNvbnN0cnVjdCcsICdcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24gJyArIGNvbnN0cnVjdG9yTmFtZSArICcoKXtvbkNvbnN0cnVjdC5jYWxsKHRoaXMpO307Jykob25Db25zdHJ1Y3QpO1xuXG4gICAgICAgIC8vIGV4dGVuZHMgY2xhc3NcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uZmlnLmV4dGVuZHMpKSB7XG4gICAgICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBjb25maWcuZXh0ZW5kcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KGtleSkgJiYga2V5ICE9PSAnZXh0ZW5kcycgJiYga2V5ICE9PSAnY29uc3RydWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZVtrZXldID0gY29uZmlnW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdG9yZSBtZXRhZGF0YSB0byBwcm90b3R5cGVcbiAgICAgICAgbWV0YWRhdGEua2V5ID0gbmFtZTtcbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgbWFrZUNvbXBvbmVudChuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGV4dGVuZHM6IGNvbXBvbmVudENsYXNzXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuY29tcG9uZW50LCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBtYWtlRGlyZWN0aXZlKG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgICAgICAgZXh0ZW5kczogZGlyZWN0aXZlQ2xhc3NcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5kaXJlY3RpdmUsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIG1ha2VGaWx0ZXIobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBleHRlbmRzOiBmaWx0ZXJDbGFzc1xuICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmZpbHRlciwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgbWFrZVNlcnZpY2UobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBleHRlbmRzOiBzZXJ2aWNlQ2xhc3NcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5zZXJ2aWNlLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgZmFjdG9yeSA9IG5ldyBGYWN0b3J5KCk7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLiRkYXRhID0gdXRpbHMubWVyZ2UodGhpcy4kJG1ldGFkYXRhLCBkYXRhKTtcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzLCB0aGlzLiRkYXRhKTtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmaWx0ZXJDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3ZpZXctYXBpJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IHJvbGVzIH0gZnJvbSAnLi9yb2xlcyc7XHJcbmltcG9ydCB7IGlzQ29tcG9uZW50LCBpc0RpcmVjdGl2ZSwgaXNTZXJ2aWNlLCBpc0ZpbHRlciB9IGZyb20gJy4vdmlldy1hcGknO1xyXG5cclxudmFyIGtleVBhdHRlcm4gPSAvXlthLXpdW2EtekEtWjAtOV0qJC87XHJcbnZhciBnbG9iYWxOYW1lc3BhY2UgPSAnYXV0b21hdGUnO1xyXG5cclxuY2xhc3MgTmFtZXNwYWNlQ29udGFpbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NDb250YWluZXIgPSB7fTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlQ29udGFpbmVyID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZUlkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIG1ldGFkYXRhIGV4YW1wbGVcclxuLy8geyBrZXk6ICcnLCBuYW1lc3BhY2U6ICcnLCBleHRlbmRzOiBudWxsLCBjb25zdHJ1Y3Q6IGZuLCBtZXRob2RzOiB7fSB9XHJcbmV4cG9ydCBjbGFzcyBJbmplY3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5zQ29udGFpbmVyID0ge307XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlU3RhY2sgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROYW1lc3BhY2VDb250YWluZXIobmFtZXNwYWNlKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKG5hbWVzcGFjZSkpIHtcclxuICAgICAgICAgICAgbmFtZXNwYWNlID0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMubnNDb250YWluZXJbbmFtZXNwYWNlXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uc0NvbnRhaW5lcltuYW1lc3BhY2VdID0gbmV3IE5hbWVzcGFjZUNvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uc0NvbnRhaW5lcltuYW1lc3BhY2VdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYW1lc3BhY2UgaXMgcmVxdWlyZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tLZXlOYW1lKGtleSkge1xyXG4gICAgICAgIGlmICgha2V5UGF0dGVybi50ZXN0KGtleSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICcgaXMgbm90IGEgdmFsaWQgbmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcihyb2xlSWQsIGtleSwgY29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLmNoZWNrS2V5TmFtZShrZXkpO1xyXG5cclxuICAgICAgICB2YXIgbmFtZXNwYWNlID0gY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2VDb250YWluZXIgPSB0aGlzLmdldE5hbWVzcGFjZUNvbnRhaW5lcihuYW1lc3BhY2UpO1xyXG4gICAgICAgIHZhciBjbGFzc0NvbnRhaW5lciA9IG5hbWVzcGFjZUNvbnRhaW5lci5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlID09PSBnbG9iYWxOYW1lc3BhY2UgJiYgcm9sZUlkID09PSByb2xlcy5kaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAga2V5ID0gdXRpbHMuZm9ybWF0KCdtezB9JywgdXRpbHMudXBwZXJjYXNlKGtleVswXSkgKyAoa2V5Lmxlbmd0aCA+IDEgPyBrZXkuc3Vic3RyKDEpIDogJycpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbGFzc0NvbnRhaW5lcltrZXldKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnIGlzIGV4aXN0IHVuZGVyIG5hbWVzcGFjZSAnICsgbmFtZXNwYWNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsYXNzQ29udGFpbmVyW2tleV0gPSBjb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckNvbXBvbmVudChrZXksIGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5jb21wb25lbnQsIGtleSwgY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmRpcmVjdGl2ZSwga2V5LCBjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJGaWx0ZXIoa2V5LCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuZmlsdGVyLCBrZXksIGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlclNlcnZpY2Uoa2V5LCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuc2VydmljZSwga2V5LCBjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzKHJvbGVJZCwga2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZUlkLCBrZXksIG5hbWVzcGFjZSkgIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBoYXNDb21wb25lbnQoa2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuY29tcG9uZW50LCBrZXksIG5hbWVzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzRGlyZWN0aXZlKGtleSwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLmRpcmVjdGl2ZSwga2V5LCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0ZpbHRlcihrZXksIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5maWx0ZXIsIGtleSwgbmFtZXNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNTZXJ2aWNlKGtleSwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLnNlcnZpY2UsIGtleSwgbmFtZXNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGcm9tR2xvYmFsTmFtZXNwYWNlKHJvbGVJZCwga2V5KSB7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZUNvbnRhaW5lciA9IHRoaXMuZ2V0TmFtZXNwYWNlQ29udGFpbmVyKGdsb2JhbE5hbWVzcGFjZSk7XHJcbiAgICAgICAgdmFyIGNsYXNzQ29udGFpbmVyID0gbmFtZXNwYWNlQ29udGFpbmVyLmdldENsYXNzQ29udGFpbmVyKHJvbGVJZCk7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzQ29udGFpbmVyW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHJvbGVJZCwga2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICB2YXIgbmFtZXNwYWNlQ29udGFpbmVyID0gdGhpcy5nZXROYW1lc3BhY2VDb250YWluZXIobmFtZXNwYWNlKTtcclxuICAgICAgICB2YXIgY2xhc3NDb250YWluZXIgPSBuYW1lc3BhY2VDb250YWluZXIuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcclxuICAgICAgICByZXR1cm4gY2xhc3NDb250YWluZXJba2V5XSB8fCB0aGlzLmdldEZyb21HbG9iYWxOYW1lc3BhY2Uocm9sZUlkLCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbXBvbmVudChrZXksIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5jb21wb25lbnQsIGtleSwgbmFtZXNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuZGlyZWN0aXZlLCBrZXksIG5hbWVzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsdGVyKGtleSwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLmZpbHRlciwga2V5LCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlcnZpY2Uoa2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuc2VydmljZSwga2V5LCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSW5zdGFuY2Uocm9sZUlkLCBpbnN0YW5jZSkge1xyXG4gICAgICAgIHZhciB2YWxpZGF0b3IsIHJvbGU7XHJcblxyXG4gICAgICAgIHN3aXRjaCAocm9sZUlkKSB7XHJcbiAgICAgICAgICAgIGNhc2Ugcm9sZXMuY29tcG9uZW50OlxyXG4gICAgICAgICAgICAgICAgcm9sZSA9ICdDb21wb25lbnQnO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yID0gaXNDb21wb25lbnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSByb2xlcy5kaXJlY3RpdmU6XHJcbiAgICAgICAgICAgICAgICByb2xlID0gJ0RpcmVjdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IgPSBpc0RpcmVjdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHJvbGVzLnNlcnZpY2U6XHJcbiAgICAgICAgICAgICAgICByb2xlID0gJ1NlcnZpY2UnO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yID0gaXNTZXJ2aWNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Ugcm9sZXMuZmlsdGVyOlxyXG4gICAgICAgICAgICAgICAgcm9sZSA9ICdGaWx0ZXInO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yID0gaXNGaWx0ZXI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWxpZGF0b3IgJiYgIXZhbGlkYXRvcihpbnN0YW5jZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnb2JqZWN0IGlzIGEgaW5zdGFuY2Ugb2YgezB9Jywgcm9sZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlQ29uc3RydWN0b3Iocm9sZUlkLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcclxuICAgICAgICB2YXIgY29uc3RydWN0b3I7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0KHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCdjYW4gbm90IGZpbmQgXCJ7MH1cIiBpbiBuYW1lc3BhY2UgXCJ7MX1cIicsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc0Z1bmN0aW9uKGtleU9yQ29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0ga2V5T3JDb25zdHJ1Y3RvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGFyYW1ldGVyJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgdmFyIENscyA9IHRoaXMucmVzb2x2ZUNvbnN0cnVjdG9yKHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ2xzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tJbnN0YW5jZShyb2xlSWQsIGluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNpbmdsZXRvbihyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSxcclxuICAgICAgICAgICAgQ2xzID0gdGhpcy5yZXNvbHZlQ29uc3RydWN0b3Iocm9sZUlkLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpLFxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBDbHMucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xyXG5cclxuICAgICAgICB2YXIgbmFtZXNwYWNlQ29udGFpbmVyID0gdGhpcy5nZXROYW1lc3BhY2VDb250YWluZXIobmFtZXNwYWNlKSxcclxuICAgICAgICAgICAgY29udGFpbmVyID0gbmFtZXNwYWNlQ29udGFpbmVyLmdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVJZCksXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRhaW5lci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2YgQ2xzO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgQ2xzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnN0YW5jZShyb2xlSWQsIGluc3RhbmNlKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNvbXBvbmVudChrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUocm9sZXMuY29tcG9uZW50LCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZURpcmVjdGl2ZShrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUocm9sZXMuZGlyZWN0aXZlLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZpbHRlcihrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTaW5nbGV0b24ocm9sZXMuZmlsdGVyLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNlcnZpY2Uoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgdmFyIFNlcnZpY2UgPSB0aGlzLnJlc29sdmVDb25zdHJ1Y3Rvcihyb2xlcy5zZXJ2aWNlLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xyXG5cclxuICAgICAgICBpZiAoU2VydmljZS5wcm90b3R5cGUuJCRtZXRhZGF0YS5ub25TaGFyZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHJvbGVzLnNlcnZpY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2luZ2xldG9uKHJvbGVzLnNlcnZpY2UsIFNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4dHJhY3ROc0FuZEtleShuYW1lKSB7XHJcbiAgICAgICAgdmFyIHNlZ21lbnRzID0gbmFtZS5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBrZXk6IHNlZ21lbnRzLnBvcCgpLFxyXG4gICAgICAgICAgICBuczogc2VnbWVudHMubGVuZ3RoID4gMCA/IHNlZ21lbnRzLmpvaW4oJy4nKSA6ICcnLFxyXG4gICAgICAgICAgICBjbHM6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRnVsbE5hbWUobmFtZSwgdXNpbmcpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIHJlc3VsdCA9IHRoaXMuZXh0cmFjdE5zQW5kS2V5KG5hbWUpO1xyXG5cclxuICAgICAgICBpZiAodXNpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzaW5nLmhhc093blByb3BlcnR5KHJlc3VsdC5ucykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNlIGFsaWFzIHdpdGggcmVhbCBuYW1lc3BhY2VcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQubnMgPSB1c2luZ1tyZXN1bHQubnNdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzaW5nLmhhc093blByb3BlcnR5KG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdXNpbmdbbmFtZV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHJlYWwgbmFtZXNwYWNlIGFuZCBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gc2VsZi5leHRyYWN0TnNBbmRLZXkodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiByZWFsIGNsYXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jbHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VDb25zdHJ1Y3RvcihnZXR0ZXIsIG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpIHtcclxuICAgICAgICB2YXIgaWRlbnRpZmllciA9IHRoaXMucGFyc2VGdWxsTmFtZShuYW1lLCB1c2luZyk7XHJcblxyXG4gICAgICAgIGlmIChpZGVudGlmaWVyLmNscykge1xyXG4gICAgICAgICAgICByZXR1cm4gaWRlbnRpZmllci5jbHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpc1tnZXR0ZXJdKGlkZW50aWZpZXIua2V5LCBpZGVudGlmaWVyLm5zIHx8IGRlZmF1bHROcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VDb21wb25lbnQobmFtZSwgdXNpbmcsIGRlZmF1bHROcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlQ29uc3RydWN0b3IoJ2dldENvbXBvbmVudCcsIG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRGlyZWN0aXZlKG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUNvbnN0cnVjdG9yKCdnZXREaXJlY3RpdmUnLCBuYW1lLCB1c2luZywgZGVmYXVsdE5zKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZVNlcnZpY2UobmFtZSwgdXNpbmcsIGRlZmF1bHROcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlQ29uc3RydWN0b3IoJ2dldFNlcnZpY2UnLCBuYW1lLCB1c2luZywgZGVmYXVsdE5zKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZUZpbHRlcihuYW1lLCB1c2luZywgZGVmYXVsdE5zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VDb25zdHJ1Y3RvcignZ2V0RmlsdGVyJywgbmFtZSwgdXNpbmcsIGRlZmF1bHROcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5qZWN0U2VydmljZXMoaW5zdGFuY2UsIG1ldGFkYXRhLCBjaGVja0xvb3BEZXBlbmRlbmN5KSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBzZXJ2aWNlRnVsbE5hbWUsIGhhc0xvb3BEZXBlbmRlbmN5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChjaGVja0xvb3BEZXBlbmRlbmN5KSB7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0aW5nIGEgc2VydmljZSBpbnN0YW5jZSBhdCB0aGUgbW9tZW50XHJcbiAgICAgICAgICAgIHNlcnZpY2VGdWxsTmFtZSA9IHV0aWxzLmZvcm1hdCgnezB9LnsxfScsIHV0aWxzLmxvd2VyY2FzZShtZXRhZGF0YS5uYW1lc3BhY2UpLCBtZXRhZGF0YS5rZXkpO1xyXG4gICAgICAgICAgICBoYXNMb29wRGVwZW5kZW5jeSA9IHRoaXMuc2VydmljZVN0YWNrLmluZGV4T2Yoc2VydmljZUZ1bGxOYW1lKSAhPT0gLTE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VTdGFjay5wdXNoKHNlcnZpY2VGdWxsTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaGFzTG9vcERlcGVuZGVuY3kpIHtcclxuICAgICAgICAgICAgICAgIC8vIG9jY3VycyBsb29wIGRlcGVuZGVuY3lcclxuICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IHV0aWxzLmZvcm1hdCgnTG9vcCBkZXBlbmRlbmN5OiB7MH0nLCB0aGlzLnNlcnZpY2VTdGFjay5qb2luKCcgLT4gJykpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgc2VydmljZSBkZXBlbmRlbmN5IHN0YWNrXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VTdGFjay5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhyb3cgZXJyb3JcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZXRhZGF0YSAmJiB1dGlscy5pc09iamVjdChtZXRhZGF0YS5pbmplY3QpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2gobWV0YWRhdGEuaW5qZWN0LCBmdW5jdGlvbiAoc2VydmljZSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VydmljZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlID0gc2VsZi5wYXJzZVNlcnZpY2Uoc2VydmljZSwgbWV0YWRhdGEudXNpbmcsIG1ldGFkYXRhLm5hbWVzcGFjZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZVtrZXldID0gc2VsZi5jcmVhdGVTZXJ2aWNlKHNlcnZpY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGVja0xvb3BEZXBlbmRlbmN5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmljZVN0YWNrLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBpbmplY3RvciA9IG5ldyBJbmplY3RvcigpOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgcGFyc2VFeHAgfSBmcm9tICcuLi9leHAnO1xyXG5pbXBvcnQgeyBwYXJzZVRwbCB9IGZyb20gJy4uL3RwbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyc2VyIHtcclxuICAgIGdldCBpbmplY3RvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS4kaW5qZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHVzaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLiRkYXRhLnVzaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbXMgPSB7fTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHt9LFxyXG4gICAgICAgICAgICBkaXJlY3RpdmVzOiB7fSxcclxuICAgICAgICAgICAgZmlsdGVyczoge31cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRXhwcmVzc2lvbihleHApIHtcclxuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbXNbZXhwXTtcclxuXHJcbiAgICAgICAgaWYgKCFwcm9ncmFtKSB7XHJcbiAgICAgICAgICAgIHByb2dyYW0gPSBwYXJzZUV4cChleHApO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW1zW2V4cF0gPSBwcm9ncmFtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VUZW1wbGF0ZSh0cGwpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VUcGwodHBsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlKHNlbGVjdG9yLCBidWZmZXIsIHBhcnNlcikge1xyXG4gICAgICAgIHZhciB0YXJnZXQsIGZ1bGxOYW1lLCBkZWZhdWx0TnMgPSB0aGlzLnNjb3BlLiRkYXRhLm5hbWVzcGFjZTtcclxuXHJcbiAgICAgICAgaWYgKGJ1ZmZlcltzZWxlY3Rvcl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBidWZmZXJbc2VsZWN0b3JdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZ1bGxOYW1lID0gdXRpbHMuY29udmVydFRvSHVtcE5hbWUoc2VsZWN0b3IsICctJyk7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuaW5qZWN0b3JbcGFyc2VyXShmdWxsTmFtZSwgdGhpcy51c2luZywgZGVmYXVsdE5zKTtcclxuICAgICAgICAgICAgYnVmZmVyW3NlbGVjdG9yXSA9IHRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzb2x2ZUNvbXBvbmVudChzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmUoc2VsZWN0b3IsIHRoaXMudHlwZS5jb21wb25lbnRzLCAncGFyc2VDb21wb25lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlRGlyZWN0aXZlKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZShzZWxlY3RvciwgdGhpcy50eXBlLmRpcmVjdGl2ZXMsICdwYXJzZURpcmVjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVGaWx0ZXIoc2VsZWN0b3IpIHtcclxuICAgICAgICB2YXIgZmlsdGVyLCBmaWx0ZXJDbHMsIGJ1ZmZlciA9IHRoaXMuZmlsdGVycztcclxuXHJcbiAgICAgICAgaWYgKGJ1ZmZlcltzZWxlY3Rvcl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmaWx0ZXIgPSBidWZmZXJbc2VsZWN0b3JdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbHRlckNscyA9IHRoaXMucmVzb2x2ZShzZWxlY3RvciwgdGhpcy50eXBlLmZpbHRlcnMsICdwYXJzZUZpbHRlcicpO1xyXG4gICAgICAgICAgICBmaWx0ZXIgPSB0aGlzLmluamVjdG9yLmNyZWF0ZUZpbHRlcihmaWx0ZXJDbHMpO1xyXG4gICAgICAgICAgICBidWZmZXJbc2VsZWN0b3JdID0gZmlsdGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IHZhciByb2xlcyA9IHtcbiAgICBmaWx0ZXI6IDAsXG4gICAgc2VydmljZTogMSxcbiAgICBjb21wb25lbnQ6IDIsXG4gICAgZGlyZWN0aXZlOiAzXG59OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlQ29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuJGRhdGEgPSB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJGRhdGEsIHRydWUpO1xufVxuXG5leHBvcnQgY2xhc3MgU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBzZXJ2aWNlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBmYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5JztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcblxuZnVuY3Rpb24gbmFtZXNwYWNlKG5hbWUpIHtcbiAgICBmdW5jdGlvbiBtZXJnZU1ldGFkYXRhKG1ldGFkYXRhKSB7XG4gICAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBuYW1lc3BhY2U6IG5hbWVcbiAgICAgICAgfSwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudChrZXksIGNvbmZpZywgbWVyZ2VNZXRhZGF0YShtZXRhZGF0YSkpO1xuICAgICAgICB9LFxuICAgICAgICBkaXJlY3RpdmU6IGZ1bmN0aW9uIChrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmUoa2V5LCBjb25maWcsIG1lcmdlTWV0YWRhdGEobWV0YWRhdGEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZTogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2Uoa2V5LCBjb25maWcsIG1lcmdlTWV0YWRhdGEobWV0YWRhdGEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKGtleSwgY29uZmlnLCBtZXJnZU1ldGFkYXRhKG1ldGFkYXRhKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKHNlbGVjdG9yLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgdmFyIFJvb3QgPSBmYWN0b3J5Lm1ha2VDb21wb25lbnQoJ2F1dG9tYXRlQXBwJywgY29uZmlnLCB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlOiBuYW1lLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBlbGVtZW50LmlubmVySFRNTFxuICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIHZhciByb290ID0gbmV3IFJvb3QoKTtcblxuICAgICAgICAgICAgZG9tLmNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICByb290LiRyZW5kZXIoKS5tb3VudChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudChrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VDb21wb25lbnQoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICBpbmplY3Rvci5yZWdpc3RlckNvbXBvbmVudChrZXksIGNvbnN0cnVjdG9yKTtcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdGl2ZShrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VEaXJlY3RpdmUoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICBpbmplY3Rvci5yZWdpc3RlckRpcmVjdGl2ZShrZXksIGNvbnN0cnVjdG9yKTtcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VGaWx0ZXIoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICBpbmplY3Rvci5yZWdpc3RlckZpbHRlcihrZXksIGNvbnN0cnVjdG9yKTtcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIHNlcnZpY2Uoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlU2VydmljZShrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyU2VydmljZShrZXksIGNvbnN0cnVjdG9yKTtcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIGlzQ29tcG9uZW50KGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgQ29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBpc0RpcmVjdGl2ZShpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIERpcmVjdGl2ZTtcbn1cblxuZnVuY3Rpb24gaXNGaWx0ZXIoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBGaWx0ZXI7XG59XG5cbmZ1bmN0aW9uIGlzU2VydmljZShpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIFNlcnZpY2U7XG59XG5cbmV4cG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIERpcmVjdGl2ZSxcbiAgICBGaWx0ZXIsXG4gICAgU2VydmljZSxcbiAgICBpc0NvbXBvbmVudCxcbiAgICBpc0RpcmVjdGl2ZSxcbiAgICBpc0ZpbHRlcixcbiAgICBpc1NlcnZpY2UsXG4gICAgbmFtZXNwYWNlLFxuICAgIGluamVjdG9yXG59OyJdLCJzb3VyY2VSb290IjoiIn0=