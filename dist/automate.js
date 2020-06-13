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
/*! exports provided: isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isFormData, toNumber, lowercase, uppercase, convertToHumpName, convertFromHumpName, copy, extend, merge, forEach, some, remove, concat, orderBy, orderByDescending, object, inherit, hasProperty, getProperty, setProperty, format, escapeHtml, Local, Message, events, isMessage, isProxy, getTarget, handler, Observer, parseOptions, AST, NullExpressionNode, AstNode, AssignmentExpressionNode, BinaryExpressionNode, CallExpressionNode, ConditionalExpressionNode, ExpressionStatementNode, IdentifierNode, LiteralNode, LogicalExpressionNode, MemberExpressionNode, ObjectExpressionNode, ProgramNode, PropertyNode, UnaryExpressionNode, ArrayExpressionNode, ExpLexer, ExpParser, lexExp, parseExp, ExpBuilder, Evaluator, Analyser, nodeType, VNode, VAttr, VCmnt, VElm, VText, VType, lexTpl, parseTpl, isVElm, isVAttr, isVText, isVComment, TplBuilder, Binding, Expression, Renderer, Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, injector, component, directive, filter, service, ClassDirective, StyleDirective */
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
            var identifier = self.parseFullName(service, metadata.using);
            instance[key] = self.createService(identifier.key, identifier.ns || metadata.namespace);
          } else {
            instance[key] = self.createService(service);
          }
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
    value: function resolve(selector, buffer, loader) {
      var identifier,
          target,
          fullName,
          defaultNs = this.scope.$data.namespace;

      if (buffer[selector] !== undefined) {
        target = buffer[selector];
      } else {
        fullName = _utils__WEBPACK_IMPORTED_MODULE_0__["convertToHumpName"](selector, '-');
        identifier = this.injector.parseFullName(fullName, this.using);

        if (identifier.cls) {
          buffer[selector] = identifier.cls;
        } else {
          target = this.injector[loader](identifier.key, identifier.ns || defaultNs);
          buffer[selector] = target;
        }
      }

      return target;
    }
  }, {
    key: "resolveComponent",
    value: function resolveComponent(selector) {
      return this.resolve(selector, this.type.components, 'getComponent');
    }
  }, {
    key: "resolveDirective",
    value: function resolveDirective(selector) {
      return this.resolve(selector, this.type.directives, 'getDirective');
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
        filterCls = this.resolve(selector, this.type.filters, 'getFilter');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvbXBvbmVudC9zbG90LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvZXZlbnRzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9sb2NhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY3NzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvYmluZC1odG1sLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9oaWRlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9pZi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvcmVhZG9ubHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3MtZXZlbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3Mtb2RkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLW9kZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC1kZWZhdWx0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLXdoZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9hbmFseXNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXZhbHVhdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWxleGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtb3BlcmF0b3JzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2Fzc2lnbm1lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FzdC1ub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3QuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY2FsbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY29uZGl0aW9uYWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2lkZW50aWZpZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9saXRlcmFsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9sb2dpY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9tZW1iZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL29iamVjdC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3VuYXJ5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL29ic2VydmVyL2RlbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvYmluZGluZy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3JlbmRlci92aWV3LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZhdHRyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92Y21udC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmVsbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Z0ZXh0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92dHlwZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWFwaS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1sZXhlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2luamVjdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvcm9sZXMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9zZXJ2aWNlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvdmlldy1hcGkuanMiXSwibmFtZXMiOlsiU2xvdENvbXBvbmVudCIsImNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImtleSIsInByb3BzIiwibmFtZSIsInNsb3RzIiwiJCRwYXJlbnQiLCJ0ZW1wbGF0ZSIsIiQkbWFpblZpZXciLCJSZW5kZXJlciIsInJlbmRlciIsIiRjb250YWluZXIiLCJkZXN0cm95IiwiQ29tcG9uZW50IiwiaXNNZXNzYWdlIiwib2JqIiwiTWVzc2FnZSIsImV2ZW50cyIsInByb3BlcnR5Q2hhbmdlZCIsInRyYW5zbGF0ZUNoYW5nZWQiLCJMb2NhbCIsImUiLCJlbG0iLCIkZXZlbnQiLCIkZWxlbWVudCIsImRhdGEiLCJoYW5kbGVycyIsImZuIiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsIkVycm9yIiwib2ZmIiwic3BsaWNlIiwic2NvcGUiLCJmb3JFYWNoIiwiaGFuZGxlciIsImNhbGwiLCJkb20iLCJNX0NNUF9DTEFTUyIsIk1fSElERV9DTEFTUyIsIm1ldGFkYXRhIiwidGFyZ2V0IiwicHJvdG90eXBlIiwiJCRtZXRhZGF0YSIsImluamVjdG9yIiwicmVnaXN0ZXJDb21wb25lbnQiLCJkaXJlY3RpdmUiLCJyZWdpc3RlckRpcmVjdGl2ZSIsImZpbHRlciIsInJlZ2lzdGVyRmlsdGVyIiwic2VydmljZSIsInJlZ2lzdGVyU2VydmljZSIsIkJpbmRIdG1sRGlyZWN0aXZlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJEaXJlY3RpdmUiLCJCaW5kRGlyZWN0aXZlIiwiaW5uZXJUZXh0IiwiSGlkZURpcmVjdGl2ZSIsIklmRGlyZWN0aXZlIiwiJHBsYWNlaG9sZGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVDb21tZW50IiwiTW9kZWxEaXJlY3RpdmUiLCJ2aWV3VmFsdWUiLCJtb2RlbFZhbHVlIiwicGFyc2VycyIsImZvcm1hdHRlcnMiLCJ2aWV3Q2hhbmdlTGlzdGVuZXJzIiwidmFsaWRhdG9ycyIsInN0YXR1cyIsImZlZWRiYWNrIiwicHJpc3RpbmUiLCJkaXJ0eSIsInZhbGlkIiwiaW52YWxpZCIsIm9wdGlvbnMiLCJjc3MiLCJjb21taXRNb2RlbFZhbHVlIiwiJHNjb3BlIiwic3RhdGUiLCIkY29tcG9uZW50IiwiJGJpbmQiLCJjb21taXRWaWV3VmFsdWUiLCJuZXd2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdWYWx1ZSIsInNlbGYiLCJ2YWxpZGF0b3IiLCJmb3JtYXR0ZXIiLCIkc2V0UHJvcGVydHkiLCJ1cGRhdGVFbG1Dc3NDbGFzcyIsIm1hcmtEaXJ0eVN0YXR1cyIsImxpc3RlbmVyIiwicGFyc2VyIiwiJGJpbmRpbmciLCJhc3NpZ24iLCJlbGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJSZXBlYXREaXJlY3RpdmUiLCJpdGVtRXhwIiwiaXRlbXNFeHAiLCJpdGVtVGVtcGxhdGUiLCJpdGVtVmlld3MiLCJNYXAiLCJ1bndhdGNoQ29sbGVjdGlvbiIsInZlbG0iLCJ2YXR0ciIsImFyZyIsIm5vZGVWYWx1ZSIsInBhdHRlcm4iLCJyZXN1bHQiLCJleGVjIiwicmVtb3ZlQXR0ciIsImdldE91dGVyVHBsIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaGVhZGVyIiwiZm9vdGVyIiwiYXBwZW5kQ2hpbGQiLCIkd2F0Y2hDb2xsZWN0aW9uIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIml0ZW1zIiwiJGV2YWwiLCJ1dGlscyIsIml0ZW0iLCJpdGVtVmlldyIsImdldFZpZXdGcm9tQnVmZmVyIiwibG9jYWxzIiwiJHJlbmRlciIsInNldFZpZXdUb0J1ZmZlciIsImNvbnRlbnQiLCJsaXN0IiwidmlldyIsImJ1ZmZlciIsImRhdGFJdGVtIiwiaGFzIiwiZ2V0IiwibGVuZ3RoIiwic2hpZnQiLCJzZXQiLCJTaG93RGlyZWN0aXZlIiwiQ2hlY2tlZERpcmVjdGl2ZSIsIlN0YXRlRGlyZWN0aXZlIiwiRGlzYWJsZWREaXJlY3RpdmUiLCJSZWFkb25seURpcmVjdGl2ZSIsIlNlbGVjdGVkRGlyZWN0aXZlIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiQ2xhc3NFdmVuRGlyZWN0aXZlIiwiQ2xhc3NEaXJlY3RpdmUiLCJDbGFzc09kZERpcmVjdGl2ZSIsIm5ld0NsYXNzIiwib2xkQ2xhc3MiLCJza2lwQ3VycmVudEVsbSIsImpvaW4iLCJTdHlsZUV2ZW5EaXJlY3RpdmUiLCJTdHlsZURpcmVjdGl2ZSIsIlN0eWxlT2RkRGlyZWN0aXZlIiwibmV3U3R5bGUiLCJvbGRTdHlsZSIsInN0eWxlIiwiU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSIsInN3aXRjaEN0cmwiLCIkc2Vla1VwRGlyZWN0aXZlIiwibWF0Y2hEZWZhdWx0Iiwib24iLCJkZWZhdWx0TWF0Y2hlZCIsIiRyZW1vdmVFbGVtZW50IiwiU3dpdGNoV2hlbkRpcmVjdGl2ZSIsIm1hdGNoZWQiLCJjaGFuZ2VkIiwicGx1c01hdGNoIiwibWludXNNYXRjaCIsIlN3aXRjaERpcmVjdGl2ZSIsIm1hdGNoQ291bnQiLCJmaXJlIiwiY2hlY2tEZWZhdWx0IiwiZ2V0Q2hpbGRyZW5PZkVsZW1lbnQiLCJBcnJheSIsInNsaWNlIiwiY2hpbGROb2RlcyIsImNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQiLCJjaGlsZCIsInJlbW92ZUNoaWxkIiwicmVwbGFjZUVsZW1lbnQiLCJuZXdFbG0iLCJyZW1vdmVFbGVtZW50IiwicmVtb3ZlRWxlbWVudHNCZXR3ZWVuIiwic3RhcnRFbG0iLCJlbmRFbG0iLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZyIsImFwcGVuZEVsZW1lbnQiLCJsYXN0Q2hpbGQiLCJhZGRDbGFzcyIsImNscyIsInRyaW0iLCJzcGxpdCIsImMiLCJjdXIiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVDbGFzcyIsInRhciIsInJlcGxhY2UiLCJsb2FkU3R5bGVTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIkFjY2Vzc29yIiwiY2FsbGVlIiwiZXhwIiwiY2hpbGRyZW4iLCJBbmFseXNlciIsInBhcnNlRXhwcmVzc2lvbiIsInBhcnNlRXhwIiwicHJvZ3JhbSIsImFjY2Vzc29yIiwiYnVpbGRlciIsIkV4cEJ1aWxkZXIiLCJhbmFseXNlUHJvZ3JhbSIsImFuYWx5c2VOb2RlIiwibm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiQVNUIiwiRXhwcmVzc2lvblN0YXRlbWVudCIsImFuYWx5c2VFeHByZXNzaW9uIiwiQXNzaWdubWVudEV4cHJlc3Npb24iLCJhbmFseXNlQXNzaWdubWVudCIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbiIsImFuYWx5c2VDb25kaXRpb24iLCJMb2dpY2FsRXhwcmVzc2lvbiIsImFuYWx5c2VMb2dpYyIsIkJpbmFyeUV4cHJlc3Npb24iLCJhbmFseXNlQmluYXJ5IiwiVW5hcnlFeHByZXNzaW9uIiwiYW5hbHlzZVVuYXJ5IiwiQ2FsbEV4cHJlc3Npb24iLCJhbmFseXNlQ2FsbCIsIk1lbWJlckV4cHJlc3Npb24iLCJhbmFseXNlTWVtYmVyIiwiSWRlbnRpZmllciIsImFuYWx5c2VJZGVudGlmaWVyIiwiTGl0ZXJhbCIsImFuYWx5c2VMaXRlcmFsIiwiQXJyYXlFeHByZXNzaW9uIiwiYW5hbHlzZUFycmF5IiwiUHJvcGVydHkiLCJhbmFseXNlUHJvcGVydHkiLCJPYmplY3RFeHByZXNzaW9uIiwiYW5hbHlzZU9iamVjdCIsImFzc2lnbm1lbnQiLCJyaWdodCIsImNvbmRpdGlvbiIsInRlc3QiLCJhbHRlcm5hdGUiLCJjb25zZXF1ZW50IiwibG9naWMiLCJsZWZ0IiwiYmluYXJ5IiwidW5hcnkiLCJhcmdzIiwibWVtYmVyIiwicGFyZW50Iiwib2JqZWN0IiwiY29tcHV0ZWQiLCJwcm9wZXJ0eSIsImNyZWF0ZUNoaWxkIiwiYnVpbGQiLCJpZGVudGlmaWVyIiwiY3JlYXRlQWNjZXNzb3IiLCJsaXRlcmFsIiwicHJvcCIsInByb3BlcnRpZXMiLCJhcnIiLCJhbmFseXNlIiwiZGVmYXVsdE9wdGlvbnMiLCJhbGxvd051bGwiLCJhc3NpZ25JbnRlcmNlcHRvciIsIkV2YWx1YXRvciIsIiRwYXJzZXIiLCJldmFsdWF0ZVByb2dyYW0iLCJldmFsdWF0ZU5vZGUiLCIkbnVsbCIsImFzc2lnblByb2dyYW0iLCJleHByZXNzaW9uIiwicHJvcGVydHlLZXkiLCJldmFsdWF0ZUV4cHJlc3Npb24iLCJldmFsdWF0ZUFzc2lnbm1lbnQiLCJldmFsdWF0ZUNvbmRpdGlvbiIsImV2YWx1YXRlTG9naWMiLCJldmFsdWF0ZUJpbmFyeSIsImV2YWx1YXRlVW5hcnkiLCJldmFsdWF0ZUNhbGwiLCJldmFsdWF0ZU1lbWJlciIsImV2YWx1YXRlSWRlbnRpZmllciIsImV2YWx1YXRlTGl0ZXJhbCIsImV2YWx1YXRlQXJyYXkiLCJldmFsdWF0ZVByb3BlcnR5IiwiZXZhbHVhdGVPYmplY3QiLCJhc3NpZ25tZW50TGVmdCIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJvcGVyYXRvciIsImFyZ1ZhbHVlcyIsIm1hcCIsInJlc29sdmVGaWx0ZXIiLCJ0cmFuc2Zvcm0iLCJhcHBseSIsIk51bGxFeHByZXNzaW9uTm9kZSIsInRhcmdldE5vZGUiLCJkZWYiLCJsZXhFeHAiLCJFeHBMZXhlciIsImxleCIsIkV4cFBhcnNlciIsInBhcnNlIiwiYnVpbGRFeHByZXNzaW9uIiwiYnVpbGRBc3NpZ25tZW50IiwiYnVpbGRDb25kaXRpb24iLCJidWlsZExvZ2ljIiwiYnVpbGRCaW5hcnkiLCJidWlsZFVuYXJ5IiwiYnVpbGRDYWxsIiwiYnVpbGRNZW1iZXIiLCJidWlsZElkZW50aWZpZXIiLCJidWlsZExpdGVyYWwiLCJidWlsZEFycmF5IiwiYnVpbGRQcm9wZXJ0eSIsImJ1aWxkT2JqZWN0IiwicmVzIiwicGFyc2VPcHRpb25zIiwidGV4dCIsInRva2VucyIsImNoIiwiY2hhckF0IiwicmVhZFN0cmluZyIsImlzTnVtYmVyIiwicGVlayIsInJlYWROdW1iZXIiLCJpc0lkZW50aWZpZXJTdGFydCIsInBlZWtNdWx0aWNoYXIiLCJyZWFkSWRlbnQiLCJpcyIsImlzV2hpdGVzcGFjZSIsImNoMiIsImNoMyIsIm9wMSIsIk9QRVJBVE9SUyIsIm9wMiIsIm9wMyIsInRva2VuIiwidGhyb3dFcnJvciIsImNoYXJzIiwiaSIsIm51bSIsImNvZGVQb2ludEF0IiwiaXNWYWxpZElkZW50aWZpZXJTdGFydCIsImlzSWRlbnRpZmllckNvbnRpbnVlIiwiaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSIsImNwIiwiY2hhckNvZGVBdCIsImNwMSIsImNwMiIsImVycm9yIiwic3RhcnQiLCJlbmQiLCJjb2xTdHIiLCJzdWJzdHJpbmciLCJudW1iZXIiLCJwZWVrQ2giLCJpc0V4cE9wZXJhdG9yIiwiY29uc3RhbnQiLCJOdW1iZXIiLCJxdW90ZSIsInN0cmluZyIsInJhd1N0cmluZyIsImVzY2FwZSIsImhleCIsIm1hdGNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJyZXAiLCJFU0NBUEUiLCJvcGVyYXRvclRleHQiLCJsZXhlciIsIm1zZyIsIlByb2dyYW1Ob2RlIiwiZXhwcmVzc2lvblN0YXRlbWVudCIsImV4cGVjdCIsIkV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIiwiZmlsdGVyQ2hhaW4iLCJhc3QiLCJ0ZXJuYXJ5IiwiaXNBc3NpZ25hYmxlIiwiQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbE9SIiwiY29uc3VtZSIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsQU5EIiwiTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZXF1YWxpdHkiLCJyZWxhdGlvbmFsIiwiQmluYXJ5RXhwcmVzc2lvbk5vZGUiLCJhZGRpdGl2ZSIsIm11bHRpcGxpY2F0aXZlIiwiVW5hcnlFeHByZXNzaW9uTm9kZSIsInByaW1hcnkiLCJhcnJheURlY2xhcmF0aW9uIiwibGl0ZXJhbHMiLCJoYXNPd25Qcm9wZXJ0eSIsIkxpdGVyYWxOb2RlIiwibmV4dCIsInBlZWtBaGVhZCIsIkNhbGxFeHByZXNzaW9uTm9kZSIsInBhcnNlQXJndW1lbnRzIiwiTWVtYmVyRXhwcmVzc2lvbk5vZGUiLCJiYXNlRXhwcmVzc2lvbiIsImlkZW50aWZpZXJzIiwiZW50aXJlTmFtZSIsIklkZW50aWZpZXJOb2RlIiwicGVla1Rva2VuIiwiQXJyYXlFeHByZXNzaW9uTm9kZSIsIlByb3BlcnR5Tm9kZSIsIk9iamVjdEV4cHJlc3Npb25Ob2RlIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJ0IiwiQXN0Tm9kZSIsIlByb2dyYW0iLCJraW5kIiwicHJlZml4IiwidW5kZWZpbmVkIiwiRGVsYXllciIsInRpbWVvdXQiLCJkZWxheUlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIkxpc3RlbmVyIiwidmFsdWVDaGFuZ2VkIiwiY29sbGVjdGlvbkNoYW5nZWQiLCJvbGRWYWx1ZSIsIk9ic2VydmVyIiwiYWNjZXNzb3JzIiwibGlzdGVuZXJzIiwid2F0Y2hlciIsIldhdGNoZXIiLCJhbmFseXNlciIsImRlbGF5ZXIiLCJub3RpZnkiLCJoYXNDaGFuZ2UiLCJzZXROZXdWYWx1ZSIsInNldENvbGxlY3Rpb25DaGFuZ2VkIiwiZXhlY3V0ZSIsImdldEFjY2Vzc29yIiwiZXZhbHVhdG9yIiwiY3JlYXRlTGlzdGVuZXIiLCJldmFsdWF0ZSIsInVud2F0Y2hBY2Nlc3NvcnMiLCJ1bndhdGNoIiwid2F0Y2hBY2Nlc3NvcnMiLCJ2YWx1ZXMiLCJ3YXRjaCIsIm5vdGlmeUNoYW5nZSIsInJlbW92ZUxpc3RlbmVyIiwidW53YXRjaFByb3BzIiwid2F0Y2hQcm9wcyIsInVud2F0Y2hFeHAiLCJhcmd1bWVudHMiLCJjb2xsZWN0aW9uIiwiaXNQcm94eVN5bWJvbCIsIlN5bWJvbCIsInRhcmdldFN5bWJvbCIsImdldFByb3h5Iiwic2V0UHJveHkiLCJpc1Byb3h5IiwicHJveHkiLCJnZXRUYXJnZXQiLCJtYWtlUHJveHkiLCJQcm94eSIsIk9iamVjdExpc3RlbmVyIiwia2V5cyIsImdldEhhbmRsZXJzIiwib2ZmUHJvcGVydHlDaGFuZ2VkIiwiaGFuZGxlUHJvcGVydHlDaGFuZ2VkIiwiZ2V0TGlzdGVuZXIiLCJmaXJlS2V5IiwiZmlsdGVycyIsImFjdGlvbiIsImdldE9yQ3JlYXRlTGlzdGVuZXIiLCJyZWdpc3RlcktleSIsInVucmVnaXN0ZXJLZXkiLCJCaW5kaW5nIiwiaXNFeHAiLCJsb2dpY2FsIiwiYXV0b21hdGlvbiIsInNlZ21lbnRzIiwiZXhwcmVzc2lvbnMiLCJFeHByZXNzaW9uIiwiY3JlYXRlRXhwcmVzc2lvbiIsImxhc3RJbmRleCIsInNlZ21lbnQiLCJkZXRlY3QiLCJwYXRjaCIsImNvbXB1dGUiLCJyZWR1Y2UiLCJwcmV2IiwiaGFzVHJhbnNsYXRpb24iLCIkYXNzaWduIiwiJHdhdGNoIiwiZXZlbnRUZXh0IiwiZG9tRXZlbnRzIiwiJGluamVjdG9yIiwiYmluZGluZyIsImJpbmRpbmdzIiwiY3JlYXRlQ29tcG9uZW50IiwiJGFwcGVuZENoaWxkIiwiY29tcG9uZW50cyIsImNyZWF0ZURpcmVjdGl2ZSIsIiQkc2NvcGUiLCJyZXNvbHZlQ29tcG9uZW50Iiwibm9kZU5hbWUiLCJyZXNvbHZlRGlyZWN0aXZlIiwibm9kZURhdGEiLCJjb250YWluZXIiLCJoYXNDb250YWluZXIiLCJTaW5nbGVOb2RlVmlldyIsIk11bHRpcGxlTm9kZVZpZXciLCJ2bm9kZXMiLCJwYXJzZVRlbXBsYXRlIiwiY29tcGlsZU5vZGVzIiwibGlua05vZGVzIiwiZGlyZWN0aXZlcyIsIiRwb3N0bGluayIsIm5vZGVzIiwidm5vZGUiLCJjb21waWxlTm9kZSIsImlzVlRleHQiLCJjb21waWxlVGV4dCIsImlzVkNvbW1lbnQiLCJjb21waWxlQ29tbWVudCIsImNvbXBpbGVFbG0iLCJsaW5rTm9kZSIsImxpbmtUZXh0IiwibGlua0NvbW1lbnQiLCJsaW5rRWxtIiwiZWxtRGF0YSIsInJlY29nbml6ZUNvbXBvbmVudCIsImN1c3RvbUxpbmtlciIsInZhdHRycyIsInNvbWUiLCJhdHRyRGF0YSIsImNvbXBpbGVBdHRyIiwibGlua2VyIiwiJHByaW9yaXR5Iiwic2Vla1Nsb3QiLCJhdHRyTmFtZSIsImF0dHJWYWx1ZSIsIm5ld0JpbmRpbmciLCJzdGFydHNXaXRoIiwiaXNFdmVudCIsInN1YnN0ciIsImlzRG9tRXZlbnQiLCJyZWNvZ25pemVEaXJlY3RpdmUiLCJuZXdEaXJlY3RpdmUiLCIkJHZhdHRyIiwiJGFzc2lnbm1lbnQiLCIkY29tcGlsZSIsInNldEh0bWxBdHRyIiwicmVnaXN0ZXJBdXRvbWF0aW9uIiwicHJvcGVydHlOYW1lIiwiJGhhc1Byb3BlcnR5IiwiY29tcGlsZSIsInZ0ZXh0IiwibmV3VGV4dE5vZGUiLCJ2Y21udCIsIiRsaW5rIiwiaW5zdGFuY2UiLCJuZXdDb21wb25lbnQiLCJsaW5rQXR0ciIsIiQkdmVsbSIsIiRzZXJDb250YWluZXIiLCIkc2V0U2xvdCIsImV2ZW50TmFtZSIsImxpbmsiLCIkY2hhbmdlIiwiaXNWRWxtIiwic2xvdCIsImdldEF0dHIiLCJnZXRJbm5lclRwbCIsIlZpZXciLCJzZWxlY3Rvck9yRWxlbWVudCIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25EZXN0cm95IiwiJGRlc3Ryb3kiLCJWQXR0ciIsIm5vZGVUeXBlIiwiYXR0cmlidXRlIiwiVk5vZGUiLCJWQ21udCIsImNvbW1lbnQiLCJWRWxtIiwic2VsZkNsb3NlZCIsIlRwbEJ1aWxkZXIiLCJhdHRyIiwibWF0Y2hlcyIsImJlbG9uZ1RvIiwic2V0VmFsdWUiLCJjb21waWxlT3B0aW9ucyIsInRwbCIsInBhcnNlVHBsIiwiY2xlYXJDaGlsZE5vZGVzIiwiY29weSIsImNsb25lTm9kZSIsImNkYXRhU2VjdGlvbiIsImVudGl0eVJlZmVyZW5jZSIsImVudGl0eSIsInByb2Nlc3NpbmdJbnN0cnVjdGlvbiIsImRvY3VtZW50VHlwZSIsImRvY3VtZW50RnJhZ21lbnQiLCJub3RhdGlvbiIsImZpcnN0Q2hpbGQiLCJidWlsZFNpYmxpbmciLCJyZWZDaGlsZCIsIm5ld0NoaWxkIiwiY2xlYXJQYXJlbnRBbmRTaWJsaW5nIiwiZGVlcCIsIm9uQ2xvbmVOb2RlIiwib3duZXJEb2N1bWVudCIsIlZUZXh0IiwiVlR5cGUiLCJsZXhUcGwiLCJUcGxMZXhlciIsIlRwbFBhcnNlciIsImlzVkF0dHIiLCJidWlsZFRleHQiLCJidWlsZENvbW1lbnQiLCJidWlsZEVsZW1lbnQiLCJhdHRyVHBsIiwiYnVpbGRBdHRyaWJ1dGUiLCJjaGlsZFRwbCIsInN0ciIsImJlZ2luIiwiZXhwZWN0U3RyaW5nIiwidGV4dFRhZyIsImNsb3NpbmciLCJkb2N0eXBlIiwidGFnIiwiZXF1YWwiLCJhbGxvd0RvY1R5cGUiLCJyZWFkQ29tbWVudCIsInJlYWRUYWciLCJyZWFkVGV4dCIsInJvb3QiLCJjdXJyZW50IiwiZG9jVHlwZSIsImF0dHJzIiwicCIsInB1c2hBdHRyIiwiY2hpbGRFbGVtZW50cyIsInB1c2hDaGlsZCIsImVsZXMiLCJvcmlnaW4iLCJ0b1N0cmluZyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiaXNVbmRlZmluZWQiLCJpc0RlZmluZWQiLCJpc0FycmF5IiwiaXNNYXAiLCJpc09iamVjdCIsImlzQmxhbmtPYmplY3QiLCJpc1N0cmluZyIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc1JlZ0V4cCIsImlzQm9vbGVhbiIsImlzRm9ybURhdGEiLCJGb3JtRGF0YSIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJpc05hTiIsImxvd2VyY2FzZSIsInRvTG93ZXJDYXNlIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJjb252ZXJ0VG9IdW1wTmFtZSIsInNlcGFyYXRvciIsInVwcGVyY2FzZUZpcnN0TGV0dGVyIiwiY29udmVydEZyb21IdW1wTmFtZSIsIm5ld05hbWUiLCJjaGFyIiwib2JqSW5kZXgiLCJuZXdBcnIiLCJuZXdPYmoiLCJleHRlbmQiLCJkZWVwTWVyZ2UiLCJwbGFpbk1lcmdlIiwibWVyZ2UiLCJzb3VyY2UiLCJmdW5jIiwib3JkZXJCeSIsImdldHRlciIsImdldFZhbHVlIiwic29ydCIsImEiLCJiIiwib3JkZXJCeURlc2NlbmRpbmciLCJjb25jYXQiLCJvIiwiRiIsImluaGVyaXRQcm90b3R5cGUiLCJzdWJUeXBlIiwic3VwZXJUeXBlIiwiY29uc3RydWN0b3IiLCJpbmhlcml0IiwiaGFzUHJvcGVydHkiLCJnZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiZm9ybWF0IiwibWF0Y2hUZXh0IiwiZXNjYXBlSHRtbCIsImh0bWwiLCJjb21wb25lbnRDb25zdHJ1Y3RvciIsIiQkY2hpbGRyZW4iLCJQYXJzZXIiLCIkb2JzZXJ2ZXIiLCIkZGF0YSIsIiRtYWtlQ29udGFpbmVyIiwiJGRlbGVnYXRlIiwiaW5qZWN0U2VydmljZXMiLCJvblByb3BlcnR5Q2hhbmdlZCIsIm1lc3NhZ2UiLCJ3YXRjaENvbGxlY3Rpb24iLCJ0ZW1wbGF0ZUlkIiwiZ2V0RWxlbWVudEJ5SWQiLCIkZ2V0VGVtcGxhdGUiLCJhZnRlclZpZXdSZW5kZXJlZCIsIiR1bm1vdW50IiwiJHJlbW92ZUNoaWxkIiwiZGlyZWN0aXZlQ29uc3RydWN0b3IiLCIkcmVuZGVyZXIiLCJvbkNvbXBpbGUiLCJvbkxpbmsiLCJhZnRlckxpbmsiLCJvbkNoYW5nZSIsIiRuYW1lc3BhY2UiLCIka2V5IiwiJCRzZWFyY2hEaXJlY3RpdmUiLCJuYW1lUGF0dGVybiIsImNvbXBvbmVudENsYXNzIiwiZGlyZWN0aXZlQ2xhc3MiLCJmaWx0ZXJDbGFzcyIsIkZpbHRlciIsImZpbHRlckNvbnN0cnVjdG9yIiwic2VydmljZUNsYXNzIiwiU2VydmljZSIsInNlcnZpY2VDb25zdHJ1Y3RvciIsIkZhY3RvcnkiLCJyb2xlSWQiLCJyb2xlcyIsImNvbmZpZyIsImNvbnN0cnVjdG9yTmFtZSIsInJlbmFtZSIsIm9uQ29uc3RydWN0IiwiY29uc3RydWN0IiwiRnVuY3Rpb24iLCJtYWtlIiwiZmFjdG9yeSIsImtleVBhdHRlcm4iLCJnbG9iYWxOYW1lc3BhY2UiLCJOYW1lc3BhY2VDb250YWluZXIiLCJjbGFzc0NvbnRhaW5lciIsImluc3RhbmNlQ29udGFpbmVyIiwiSW5qZWN0b3IiLCJuc0NvbnRhaW5lciIsInNlcnZpY2VTdGFjayIsImNoZWNrS2V5TmFtZSIsIm5hbWVzcGFjZUNvbnRhaW5lciIsImdldE5hbWVzcGFjZUNvbnRhaW5lciIsImdldENsYXNzQ29udGFpbmVyIiwicmVnaXN0ZXIiLCJnZXRGcm9tR2xvYmFsTmFtZXNwYWNlIiwicm9sZSIsImlzQ29tcG9uZW50IiwiaXNEaXJlY3RpdmUiLCJpc1NlcnZpY2UiLCJpc0ZpbHRlciIsImtleU9yQ29uc3RydWN0b3IiLCJDbHMiLCJyZXNvbHZlQ29uc3RydWN0b3IiLCJjaGVja0luc3RhbmNlIiwiZ2V0SW5zdGFuY2VDb250YWluZXIiLCJjcmVhdGUiLCJjcmVhdGVTaW5nbGV0b24iLCJub25TaGFyZWQiLCJwb3AiLCJucyIsInVzaW5nIiwiZXh0cmFjdE5zQW5kS2V5IiwiY2hlY2tMb29wRGVwZW5kZW5jeSIsInNlcnZpY2VGdWxsTmFtZSIsImhhc0xvb3BEZXBlbmRlbmN5IiwiaW5qZWN0IiwicGFyc2VGdWxsTmFtZSIsImNyZWF0ZVNlcnZpY2UiLCJwcm9ncmFtcyIsInNlbGVjdG9yIiwibG9hZGVyIiwiZnVsbE5hbWUiLCJkZWZhdWx0TnMiLCJyZXNvbHZlIiwiZmlsdGVyQ2xzIiwiY3JlYXRlRmlsdGVyIiwibWVyZ2VNZXRhZGF0YSIsIlJvb3QiLCJtYWtlQ29tcG9uZW50IiwibW91bnQiLCJtYWtlRGlyZWN0aXZlIiwibWFrZUZpbHRlciIsIm1ha2VTZXJ2aWNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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dUIsUUFBVCxDQUFrQnBOLFFBQWxCLEVBQTRCO0FBQ3hCLFNBQU9BLFFBQVEsWUFBWWtMLDhDQUEzQjtBQUNIOztBQUVELFNBQVNpQyxTQUFULENBQW1Cbk4sUUFBbkIsRUFBNkI7QUFDekIsU0FBT0EsUUFBUSxZQUFZcUwsZ0RBQTNCO0FBQ0giLCJmaWxlIjoiYXV0b21hdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhdXRvbWF0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhdXRvbWF0ZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgKiBmcm9tICcuL3Nsb3QnOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL3JlbmRlcic7XHJcblxyXG5AY29tcG9uZW50KHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ3Nsb3QnXHJcbn0pXHJcbmNsYXNzIFNsb3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnByb3BzLm5hbWUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICAkcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBzbG90cyA9IHRoaXMuJCRwYXJlbnQuc2xvdHM7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gc2xvdHNbdGhpcy5wcm9wcy5uYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKHRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCRtYWluVmlldyA9IG5ldyBSZW5kZXJlcih0aGlzLiQkcGFyZW50KS5yZW5kZXIodGVtcGxhdGUsIHRoaXMuJGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBpZih0aGlzLiQkbWFpblZpZXcpIHtcclxuICAgICAgICAgICAgdGhpcy4kJG1haW5WaWV3LmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc01lc3NhZ2Uob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWVzc2FnZTtcclxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxuLy8gZ2xvYmFsIGV2ZW50c1xyXG5leHBvcnQgdmFyIGV2ZW50cyA9IHtcclxuICAgIHByb3BlcnR5Q2hhbmdlZDogbmV3IE1lc3NhZ2UoKSxcclxuICAgIHRyYW5zbGF0ZUNoYW5nZWQ6IG5ldyBNZXNzYWdlKClcclxufTsiLCJleHBvcnQgKiBmcm9tICcuL2xvY2FsJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL2V2ZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2FwaSc7IiwiZXhwb3J0IGNsYXNzIExvY2FsIHtcbiAgICBjb25zdHJ1Y3RvcihlLCBlbG0pIHtcbiAgICAgICAgdGhpcy4kZXZlbnQgPSBlO1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gZWxtO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgTWVzc2FnZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgfVxuXG4gICAgb24oZm4pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5oYW5kbGVycy5pbmRleE9mKGZuKTtcblxuICAgICAgICAvLyBub3QgZm91bmRcbiAgICAgICAgaWYoaW5kZXggPT09IC0xKXtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChmbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbiBub3QgcmVnaXN0ZXIgc2FtZSBldmVudCBoYW5kbGVyIG1vcmUgdGhhbiBvbmNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy5vZmYoZm4pO1xuICAgIH1cblxuICAgIG9mZihmbikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmhhbmRsZXJzLmluZGV4T2YoZm4pO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmUoZGF0YSwgc2NvcGUpIHtcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCB0aGlzO1xuICAgICAgICAvLyBhdHRhY2ggZXZlbnQgZGF0YVxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IHt9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuY2FsbChzY29wZSwgdGhpcykpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi9kb20nO1xyXG5cclxuZG9tLmxvYWRTdHlsZVN0cmluZygnLm0tY29tcG9uZW50e2Rpc3BsYXk6aW5oZXJpdDt9IC5tLWhpZGV7ZGlzcGxheTpub25lICFpbXBvcnRhbnQ7fScpO1xyXG5cclxuZXhwb3J0IHZhciBNX0NNUF9DTEFTUyA9ICdtLWNvbXBvbmVudCc7XHJcbmV4cG9ydCB2YXIgTV9ISURFX0NMQVNTID0gJ20taGlkZSc7IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudChtZXRhZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRhcmdldC5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckNvbXBvbmVudChrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlKG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJGaWx0ZXIoa2V5LCB0YXJnZXQpO1xuICAgIH07XG59IiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9maWx0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlJzsiLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VydmljZShtZXRhZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRhcmdldC5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlclNlcnZpY2Uoa2V5LCB0YXJnZXQpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ2JpbmRIdG1sJ1xyXG59KVxyXG5jbGFzcyBCaW5kSHRtbERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ2JpbmQnXG59KVxuY2xhc3MgQmluZERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnaGlkZSdcbn0pXG5jbGFzcyBIaWRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzW3ZhbHVlID8gJyRoaWRlRWxlbWVudCcgOiAnJHNob3dFbGVtZW50J10oKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ2lmJ1xyXG59KVxyXG5jbGFzcyBJZkRpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuJHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbi1pZicpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpc1t2YWx1ZSA/ICckYXBwZW5kRWxlbWVudCcgOiAnJHJlbW92ZUVsZW1lbnQnXSgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9iaW5kJztcbmV4cG9ydCAqIGZyb20gJy4vYmluZC1odG1sJztcbmV4cG9ydCAqIGZyb20gJy4vcmVwZWF0JztcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9oaWRlJztcbmV4cG9ydCAqIGZyb20gJy4vc2hvdyc7XG5leHBvcnQgKiBmcm9tICcuL3N0YXRlJztcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9pZic7XG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaCc7IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbW9kZWwnXG59KVxuY2xhc3MgTW9kZWxEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXdWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMucGFyc2VycyA9IFtdO1xuICAgICAgICB0aGlzLmZvcm1hdHRlcnMgPSBbXTtcbiAgICAgICAgdGhpcy52aWV3Q2hhbmdlTGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMudmFsaWRhdG9ycyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHtcbiAgICAgICAgICAgIGZlZWRiYWNrOiAnJyxcbiAgICAgICAgICAgIHByaXN0aW5lOiB0cnVlLFxuICAgICAgICAgICAgZGlydHk6IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgICAgICBpbnZhbGlkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjc3M6IHtcbiAgICAgICAgICAgICAgICBwcmlzdGluZTogJ24tcHJpc3RpbmUnLFxuICAgICAgICAgICAgICAgIGRpcnR5OiAnbi1kaXJ0eScsXG4gICAgICAgICAgICAgICAgdmFsaWQ6ICduLXZhbGlkJyxcbiAgICAgICAgICAgICAgICBpbnZhbGlkOiAnbi1pbnZhbGlkJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29tbWl0TW9kZWxWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgYWZ0ZXJMaW5rKCkge1xuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuJGVsZW1lbnQubmFtZTtcblxuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUuc3RhdGVbbmFtZV0gPSB0aGlzLnN0YXR1cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiRjb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LiRiaW5kKCdjaGFuZ2UnLCBlID0+IHRoaXMuY29tbWl0Vmlld1ZhbHVlKGUuZGF0YS5uZXd2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4gdGhpcy5jb21taXRWaWV3VmFsdWUoZS50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcblxuICAgIH1cblxuICAgIGNvbW1pdE1vZGVsVmFsdWUobmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZWxWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuY2FsbChzZWxmLCBuZXdWYWx1ZSwgdGhpcy5tb2RlbFZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgdGhpcy5mb3JtYXR0ZXJzLmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdHRlcikge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnZpZXdWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmlld1ZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuJGNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRjb21wb25lbnQuJHNldFByb3BlcnR5KCd2YWx1ZScsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBjb21taXRWaWV3VmFsdWUobmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlld1ZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMubWFya0RpcnR5U3RhdHVzKHRydWUpO1xuXG4gICAgICAgIHRoaXMudmlld0NoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbChzZWxmLCBuZXdWYWx1ZSwgc2VsZi52aWV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZpZXdWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMucGFyc2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gcGFyc2VyLmNhbGwoc2VsZiwgbmV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZih0aGlzLm1vZGVsVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuY2FsbChzZWxmLCBuZXdWYWx1ZSwgc2VsZi5tb2RlbFZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgdGhpcy4kYmluZGluZy5hc3NpZ24obmV3VmFsdWUpO1xuICAgIH1cblxuICAgIHVwZGF0ZUVsbUNzc0NsYXNzKCkge1xuICAgICAgICB2YXIgZWxlID0gdGhpcy4kZWxlbWVudCxcbiAgICAgICAgICAgIGNzcyA9IHRoaXMub3B0aW9ucy5jc3M7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzLmRpcnR5KSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MuZGlydHkpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLnByaXN0aW5lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5wcmlzdGluZSk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MuZGlydHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzLnZhbGlkKSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MudmFsaWQpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLmludmFsaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLmludmFsaWQpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLnZhbGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hcmtEaXJ0eVN0YXR1cyhkaXJ0eSkge1xuICAgICAgICB0aGlzLnN0YXR1cy5kaXJ0eSA9IGRpcnR5O1xuICAgICAgICB0aGlzLnN0YXR1cy5wcmlzdGluZSA9ICFkaXJ0eTtcbiAgICAgICAgdGhpcy51cGRhdGVFbG1Dc3NDbGFzcygpO1xuICAgIH1cblxuICAgIG1hcmtWYWxpZFN0YXR1cyh2YWxpZCwgZmVlZGJhY2spIHtcbiAgICAgICAgdGhpcy5zdGF0dXMudmFsaWQgPSB2YWxpZDtcbiAgICAgICAgdGhpcy5zdGF0dXMuaW52YWxpZCA9ICF2YWxpZDtcbiAgICAgICAgdGhpcy5zdGF0dXMuZmVlZGJhY2sgPSBmZWVkYmFjaztcbiAgICAgICAgdGhpcy51cGRhdGVFbG1Dc3NDbGFzcygpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vZG9tJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ3JlcGVhdCdcbn0pXG5jbGFzcyBSZXBlYXREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLml0ZW1FeHAgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1WaWV3cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy51bndhdGNoQ29sbGVjdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgb25Db21waWxlKHZlbG0sIHZhdHRyKSB7XG4gICAgICAgIHZhciBhcmcgPSB2YXR0ci5ub2RlVmFsdWU7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gL14oW2Etel9dK1xcdyspXFxzK2luXFxzKyguKykkL2k7XG4gICAgICAgIHZhciByZXN1bHQgPSBwYXR0ZXJuLmV4ZWMoYXJnKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbS1yZXBlYXQ6IHBhcmFtZXRlciBpcyBub3QgdmFsaWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbUV4cCA9IHJlc3VsdFsxXTtcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9IHJlc3VsdFsyXTtcbiAgICAgICAgdmVsbS5yZW1vdmVBdHRyKHZhdHRyKTtcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSB2ZWxtLmdldE91dGVyVHBsKCk7XG5cbiAgICAgICAgLy8gaWRlbnRpZnkgdGhpcyBkaXJlY3RpdmUgd291bGQgdGFrZSBvdmVyIGxpbmsgZnVuY3Rpb24gZm9yIHJlbGF0ZWQgdmlydHVhbCBlbGVtZW50IG5vZGUsIG9uTGluayBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkxpbmsoc2NvcGUpIHtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnc3RhcnQ6IG0tcmVwZWF0Jyk7XG4gICAgICAgIHZhciBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdlbmQ6IG0tcmVwZWF0Jyk7XG5cbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXIoc2NvcGUpKTtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgICAgICB0aGlzLnVud2F0Y2hDb2xsZWN0aW9uID0gc2NvcGUuJHdhdGNoQ29sbGVjdGlvbih0aGlzLml0ZW1zRXhwLCAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSB0aGlzLnJlbmRlcihzY29wZSk7XG4gICAgICAgICAgICBkb20ucmVtb3ZlRWxlbWVudHNCZXR3ZWVuKGhlYWRlciwgZm9vdGVyKTtcbiAgICAgICAgICAgIGZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmcmFnbWVudCwgZm9vdGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cblxuICAgIHJlbmRlcihzY29wZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBpdGVtcyA9IHNjb3BlLiRldmFsKHRoaXMuaXRlbXNFeHApO1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHZhciBpdGVtVmlld3MgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdXRpbHMuZm9yRWFjaChpdGVtcywgZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgdmFyIGl0ZW1WaWV3ID0gc2VsZi5nZXRWaWV3RnJvbUJ1ZmZlcihzZWxmLml0ZW1WaWV3cywgaXRlbSk7XG5cbiAgICAgICAgICAgIGlmICghaXRlbVZpZXcpIHtcbiAgICAgICAgICAgICAgICB2YXIgbG9jYWxzID0ge307XG4gICAgICAgICAgICAgICAgbG9jYWxzWycka2V5J10gPSBrZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxzWyckaW5kZXgnXSA9IGtleTtcbiAgICAgICAgICAgICAgICBsb2NhbHNbc2VsZi5pdGVtRXhwXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgaXRlbVZpZXcgPSBzZWxmLiRyZW5kZXIoc2VsZi5pdGVtVGVtcGxhdGUsIGxvY2Fscyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuc2V0Vmlld1RvQnVmZmVyKGl0ZW1WaWV3cywgaXRlbSwgaXRlbVZpZXcpO1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaXRlbVZpZXcuY29udGVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaXRlbVZpZXdzLmZvckVhY2goZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAodmlldykge1xuICAgICAgICAgICAgICAgIHZpZXcuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaXRlbVZpZXdzID0gaXRlbVZpZXdzO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG5cbiAgICBnZXRWaWV3RnJvbUJ1ZmZlcihidWZmZXIsIGRhdGFJdGVtKSB7XG4gICAgICAgIHZhciB2aWV3O1xuXG4gICAgICAgIGlmIChidWZmZXIuaGFzKGRhdGFJdGVtKSkge1xuICAgICAgICAgICAgdmFyIGxpc3QgPSBidWZmZXIuZ2V0KGRhdGFJdGVtKTtcblxuICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmlldyA9IGxpc3Quc2hpZnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLmRlbGV0ZShkYXRhSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmlldztcbiAgICB9XG5cbiAgICBzZXRWaWV3VG9CdWZmZXIoYnVmZmVyLCBkYXRhSXRlbSwgdmlldykge1xuICAgICAgICB2YXIgbGlzdDtcblxuICAgICAgICBpZiAoYnVmZmVyLmhhcyhkYXRhSXRlbSkpIHtcbiAgICAgICAgICAgIGxpc3QgPSBidWZmZXIuZ2V0KGRhdGFJdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3QgPSBbXTtcbiAgICAgICAgICAgIGJ1ZmZlci5zZXQoZGF0YUl0ZW0sIGxpc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKHZpZXcpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5pdGVtVmlld3MuZm9yRWFjaCgobGlzdCkgPT4gbGlzdC5mb3JFYWNoKHZpZXcgPT4gdmlldy5kZXN0cm95KCkpKTtcbiAgICAgICAgdGhpcy51bndhdGNoQ29sbGVjdGlvbiAmJiB0aGlzLnVud2F0Y2hDb2xsZWN0aW9uKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnc2hvdydcbn0pXG5jbGFzcyBTaG93RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzW3ZhbHVlID8gJyRzaG93RWxlbWVudCcgOiAnJGhpZGVFbGVtZW50J10oKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdjaGVja2VkJ1xufSlcbmNsYXNzIENoZWNrZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdjaGVja2VkJyk7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnZGlzYWJsZWQnXG59KVxuY2xhc3MgRGlzYWJsZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkaXNhYmxlZCcpO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2NoZWNrZWQnXG5leHBvcnQgKiBmcm9tICcuL2Rpc2FibGVkJ1xuZXhwb3J0ICogZnJvbSAnLi9yZWFkb25seSdcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0ZWQnIiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdyZWFkb25seSdcbn0pXG5jbGFzcyBSZWFkb25seURpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3JlYWRvbmx5Jyk7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnc2VsZWN0ZWQnXG59KVxuY2xhc3MgU2VsZWN0ZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdzZWxlY3RlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcblxuZXhwb3J0IGNsYXNzIFN0YXRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihrZXkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuJGVsZW1lbnQuaGFzQXR0cmlidXRlKHRoaXMua2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMua2V5LCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZWxlbWVudC5oYXNBdHRyaWJ1dGUodGhpcy5rZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IENsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9jbGFzcyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ2NsYXNzRXZlbidcclxufSlcclxuY2xhc3MgQ2xhc3NFdmVuRGlyZWN0aXZlIGV4dGVuZHMgQ2xhc3NEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiRldmFsKCckaW5kZXgnKTtcclxuICAgICAgICByZXR1cm4gaW5kZXggJiAxID09PSAxO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2NsYXNzJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnY2xhc3NPZGQnXHJcbn0pXHJcbmNsYXNzIENsYXNzT2RkRGlyZWN0aXZlIGV4dGVuZHMgQ2xhc3NEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiRldmFsKCckaW5kZXgnKTtcclxuICAgICAgICByZXR1cm4gaW5kZXggJiAxID09PSAwO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi8uLi9kb20nO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdjbGFzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIENsYXNzRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UobmV3Q2xhc3MsIG9sZENsYXNzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2tpcEN1cnJlbnRFbG0oKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob2xkQ2xhc3MpIHtcclxuICAgICAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHRoaXMuJGVsZW1lbnQsIG9sZENsYXNzLmpvaW4oJyAnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmV3Q2xhc3MpIHtcclxuICAgICAgICAgICAgZG9tLmFkZENsYXNzKHRoaXMuJGVsZW1lbnQsIG5ld0NsYXNzLmpvaW4oJyAnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL2NsYXNzJztcclxuZXhwb3J0ICogZnJvbSAnLi9jbGFzcy1ldmVuJztcclxuZXhwb3J0ICogZnJvbSAnLi9jbGFzcy1vZGQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHlsZS1ldmVuJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHlsZS1vZGQnOyIsImltcG9ydCB7IFN0eWxlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ3N0eWxlRXZlbidcclxufSlcclxuY2xhc3MgU3R5bGVFdmVuRGlyZWN0aXZlIGV4dGVuZHMgU3R5bGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiRldmFsKCckaW5kZXgnKTtcclxuICAgICAgICByZXR1cm4gaW5kZXggJiAxID09PSAxO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3R5bGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnc3R5bGVPZGQnXHJcbn0pXHJcbmNsYXNzIFN0eWxlT2RkRGlyZWN0aXZlIGV4dGVuZHMgU3R5bGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiRldmFsKCckaW5kZXgnKTtcclxuICAgICAgICByZXR1cm4gaW5kZXggJiAxID09PSAwO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnc3R5bGUnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZShuZXdTdHlsZSwgb2xkU3R5bGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2tpcEN1cnJlbnRFbG0oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvbGRTdHlsZSkge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChvbGRTdHlsZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRlbGVtZW50LnN0eWxlW2tleV0gPSAnJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG5ld1N0eWxlKSkge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChuZXdTdHlsZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRlbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC1kZWZhdWx0J1xuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gtd2hlbiciLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdzd2l0Y2hEZWZhdWx0J1xufSlcbmNsYXNzIFN3aXRjaERlZmF1bHREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN3aXRjaEN0cmwgPSBudWxsO1xuICAgICAgICB0aGlzLiRwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N3aXRjaC1kZWZhdWx0Jyk7XG4gICAgfVxuXG4gICAgYWZ0ZXJMaW5rKCkge1xuICAgICAgICB0aGlzLnN3aXRjaEN0cmwgPSB0aGlzLiRzZWVrVXBEaXJlY3RpdmUoJ3N3aXRjaCcpO1xuXG4gICAgICAgIGlmICh0aGlzLnN3aXRjaEN0cmwgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlIG0tc3dpdGNoIGRpcmVjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsLm1hdGNoRGVmYXVsdC5vbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzW3RoaXMuc3dpdGNoQ3RybC5kZWZhdWx0TWF0Y2hlZCA/ICckYXBwZW5kRWxlbWVudCcgOiAnJHJlbW92ZUVsZW1lbnQnXSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZighdGhpcy5zd2l0Y2hDdHJsLmRlZmF1bHRNYXRjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLiRyZW1vdmVFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnc3dpdGNoV2hlbidcbn0pXG5jbGFzcyBTd2l0Y2hXaGVuRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMubWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN3aXRjaEN0cmwgPSBudWxsO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLiRwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N3aXRjaC13aGVuJyk7XG4gICAgfVxuXG4gICAgYWZ0ZXJMaW5rKCkge1xuICAgICAgICB0aGlzLnN3aXRjaEN0cmwgPSB0aGlzLiRzZWVrVXBEaXJlY3RpdmUoJ3N3aXRjaCcpO1xuXG4gICAgICAgIGlmICh0aGlzLnN3aXRjaEN0cmwgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlIG0tc3dpdGNoIGRpcmVjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsLmNoYW5nZWQub24oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSB0aGlzLnN3aXRjaEN0cmwudmFsdWUgPT09IHRoaXMudmFsdWU7XG5cbiAgICAgICAgaWYodGhpcy5tYXRjaGVkICE9IG1hdGNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMubWF0Y2hlZCA9IG1hdGNoZWQ7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hDdHJsLnBsdXNNYXRjaCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaEN0cmwubWludXNNYXRjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1ttYXRjaGVkID8gJyRhcHBlbmRFbGVtZW50JyA6ICckcmVtb3ZlRWxlbWVudCddKCk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ3N3aXRjaCdcbn0pXG5jbGFzcyBTd2l0Y2hEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXRjaENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gbmV3IE1lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0TWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubWF0Y2hEZWZhdWx0ID0gbmV3IE1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2hhbmdlZC5maXJlKCk7XG4gICAgfVxuXG4gICAgcGx1c01hdGNoKCkge1xuICAgICAgICB0aGlzLm1hdGNoQ291bnQrKztcbiAgICAgICAgdGhpcy5jaGVja0RlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBtaW51c01hdGNoKCkge1xuICAgICAgICB0aGlzLm1hdGNoQ291bnQtLTtcbiAgICAgICAgdGhpcy5jaGVja0RlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjaGVja0RlZmF1bHQoKSB7XG4gICAgICAgIHZhciBkZWZhdWx0TWF0Y2hlZCA9IHRoaXMubWF0Y2hDb3VudCA8PSAwO1xuXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRNYXRjaGVkICE9PSBkZWZhdWx0TWF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TWF0Y2hlZCA9IGRlZmF1bHRNYXRjaGVkO1xuICAgICAgICAgICAgdGhpcy5tYXRjaERlZmF1bHQuZmlyZSgpO1xuICAgICAgICB9XG4gICAgfVxufSIsIlxuZnVuY3Rpb24gZ2V0Q2hpbGRyZW5PZkVsZW1lbnQoZWxtKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsbS5jaGlsZE5vZGVzLCAwKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDaGlsZHJlbk9mRWxlbWVudChlbG0pIHtcbiAgICBnZXRDaGlsZHJlbk9mRWxlbWVudChlbG0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGVsbS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VFbGVtZW50KGVsbSwgbmV3RWxtKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBlbG0ucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsbSwgZWxtKTtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbG0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbG0pIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGVsbS5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbG0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudHNCZXR3ZWVuKHN0YXJ0RWxtLCBlbmRFbG0pIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHN0YXJ0RWxtLnBhcmVudE5vZGU7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBnZXRDaGlsZHJlbk9mRWxlbWVudChwYXJlbnROb2RlKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyA9PT0gc3RhcnRFbG0gJiYgY2hpbGQgIT09IGVuZEVsbSkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nID09PSBlbmRFbG0gJiYgY2hpbGQgIT09IHN0YXJ0RWxtKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRFbGVtZW50KGVsbSwgbmV3RWxtKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBlbG0ucGFyZW50Tm9kZTtcblxuICAgIGlmIChwYXJlbnROb2RlLmxhc3RDaGlsZCA9PT0gZWxtKSB7XG4gICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3RWxtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbG0sIGVsbS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyAoZWxtLCBjbHMpIHtcbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChlbG0uY2xhc3NMaXN0KSB7XG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtLmNsYXNzTGlzdC5hZGQoYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWxtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICAgICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNscyArICcgJykgPCAwKSB7XG4gICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKCdjbGFzcycsIChjdXIgKyBjbHMpLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbG0sIGNscykge1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGVsbS5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbG0uY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVsbS5jbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsbS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgICAgIHZhciB0YXIgPSAnICcgKyBjbHMgKyAnICc7XG4gICAgICAgIHdoaWxlIChjdXIuaW5kZXhPZih0YXIpID49IDApIHtcbiAgICAgICAgICAgIGN1ciA9IGN1ci5yZXBsYWNlKHRhciwgJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBjdXIgPSBjdXIudHJpbSgpO1xuICAgICAgICBpZiAoY3VyKSB7XG4gICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKCdjbGFzcycsIGN1cik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkU3R5bGVTdHJpbmcoY3NzKSB7XG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5leHBvcnQge1xuICAgIGFkZENsYXNzLFxuICAgIHJlbW92ZUNsYXNzLFxuICAgIGFwcGVuZEVsZW1lbnQsXG4gICAgcmVtb3ZlRWxlbWVudCxcbiAgICByZXBsYWNlRWxlbWVudCxcbiAgICBnZXRDaGlsZHJlbk9mRWxlbWVudCxcbiAgICByZW1vdmVFbGVtZW50c0JldHdlZW4sXG4gICAgY2xlYXJDaGlsZHJlbk9mRWxlbWVudCxcbiAgICBsb2FkU3R5bGVTdHJpbmdcbn07IiwiaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBwYXJzZUV4cCB9ICBmcm9tICcuL2V4cC1hcGknO1xuaW1wb3J0IHsgRXhwQnVpbGRlciB9IGZyb20gJy4vZXhwLWJ1aWxkZXInO1xuXG5jbGFzcyBBY2Nlc3NvciB7XG4gICAgY29uc3RydWN0b3IoY2FsbGVlLCBleHApIHtcbiAgICAgICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgICAgIHRoaXMuZXhwID0gZXhwO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0ge307XG4gICAgfVxuXG4gICAgY3JlYXRlQ2hpbGQoa2V5LCBjYWxsZWUsIGV4cCkge1xuICAgICAgICBpZiAoIXRoaXMuY2hpbGRyZW5ba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltrZXldID0gbmV3IEFjY2Vzc29yKGNhbGxlZSwgZXhwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW2tleV07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5hbHlzZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhcnNlcikge1xuICAgICAgICB0aGlzLnBhcnNlciA9IHBhcnNlciB8fCB7XG4gICAgICAgICAgICBwYXJzZUV4cHJlc3Npb246IHBhcnNlRXhwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIHRoaXMuYWNjZXNzb3IgPSB7fTtcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEV4cEJ1aWxkZXIoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVBY2Nlc3NvcihrZXksIGNhbGxlZSwgZXhwKSB7XG4gICAgICAgIGlmICghdGhpcy5hY2Nlc3NvcltrZXldKSB7XG4gICAgICAgICAgICB0aGlzLmFjY2Vzc29yW2tleV0gPSBuZXcgQWNjZXNzb3IoY2FsbGVlLCBleHApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjZXNzb3Jba2V5XTtcbiAgICB9XG5cbiAgICBhbmFseXNlKGV4cCkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucGFyc2VyLnBhcnNlRXhwcmVzc2lvbihleHApO1xuICAgICAgICByZXR1cm4gdGhpcy5hbmFseXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICB9XG5cbiAgICBhbmFseXNlUHJvZ3JhbShwcm9ncmFtKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzb3IgPSB7fTtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgcHJvZ3JhbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gdGhpcy5hbmFseXNlTm9kZShjaGlsZCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NvcjtcbiAgICB9XG5cbiAgICBhbmFseXNlTm9kZShub2RlLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUV4cHJlc3Npb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VBc3NpZ25tZW50KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUNvbmRpdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUxvZ2ljKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQmluYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VCaW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlVW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VDYWxsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTWVtYmVyRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VNZW1iZXIobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZUlkZW50aWZpZXIobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZUxpdGVyYWwobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5BcnJheUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQXJyYXkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VQcm9wZXJ0eShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlT2JqZWN0KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBhbmFseXNlRXhwcmVzc2lvbihleHApIHtcbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB0aGlzLmFuYWx5c2VOb2RlKGNoaWxkKSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGFzc2lnbm1lbnQucmlnaHQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLnRlc3QpO1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNvbmRpdGlvbi5hbHRlcm5hdGUpO1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNvbmRpdGlvbi5jb25zZXF1ZW50KTtcbiAgICB9XG5cbiAgICBhbmFseXNlTG9naWMobG9naWMpIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShsb2dpYy5sZWZ0KTtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShsb2dpYy5yaWdodCk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUJpbmFyeShiaW5hcnkpIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShiaW5hcnkubGVmdCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYmluYXJ5LnJpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmFseXNlVW5hcnkodW5hcnkpIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZSh1bmFyeS5hcmcpO1xuICAgIH1cblxuICAgIGFuYWx5c2VDYWxsKGNhbGwpIHtcbiAgICAgICAgY2FsbC5hcmdzLmZvckVhY2goYXJnID0+IHRoaXMuYW5hbHlzZU5vZGUoYXJnKSk7XG5cbiAgICAgICAgaWYgKCFjYWxsLmZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjYWxsLmNhbGxlZSwgeyBjYWxsZWU6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmFseXNlTWVtYmVyKG1lbWJlciwgY29udGV4dCkge1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5hbmFseXNlTm9kZShtZW1iZXIub2JqZWN0KTtcblxuICAgICAgICBpZiAobWVtYmVyLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgICAgIGNhbGxlZTogY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtZW1iZXIucHJvcGVydHkudHlwZSA9PT0gQVNULkxpdGVyYWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LmNyZWF0ZUNoaWxkKG1lbWJlci5wcm9wZXJ0eS52YWx1ZSwgY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQobWVtYmVyLnByb3BlcnR5KTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5jcmVhdGVDaGlsZChrZXksIGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgIGNhbGxlZTogY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhbmFseXNlSWRlbnRpZmllcihpZGVudGlmaWVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQoaWRlbnRpZmllciksXG4gICAgICAgICAgICBjYWxsZWUgPSBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlO1xuXG4gICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wYXJlbnQuY3JlYXRlQ2hpbGQoa2V5LCBjYWxsZWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQWNjZXNzb3Ioa2V5LCBjYWxsZWUpO1xuICAgIH1cblxuICAgIGFuYWx5c2VMaXRlcmFsKGxpdGVyYWwsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChsaXRlcmFsKTtcblxuICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucGFyZW50LmNyZWF0ZUNoaWxkKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmFseXNlUHJvcGVydHkocHJvcCkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKHByb3AudmFsdWUpO1xuICAgIH1cblxuICAgIGFuYWx5c2VPYmplY3Qob2JqKSB7XG4gICAgICAgIG9iai5wcm9wZXJ0aWVzLmZvckVhY2goaXRlbSA9PiB0aGlzLmFuYWx5c2VOb2RlKGl0ZW0pKTtcbiAgICB9XG5cbiAgICBhbmFseXNlQXJyYXkoYXJyKSB7XG4gICAgICAgIGFyci5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gdGhpcy5hbmFseXNlKGNoaWxkKSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEFTVCwgTnVsbEV4cHJlc3Npb25Ob2RlIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBFeHBCdWlsZGVyIH0gZnJvbSAnLi9leHAtYnVpbGRlcic7XG5pbXBvcnQgeyBwYXJzZUV4cCB9ICBmcm9tICcuL2V4cC1hcGknO1xuXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICBhc3NpZ25JbnRlcmNlcHRvcjogbnVsbCxcbiAgICBsb2NhbHM6IG51bGxcbn07XG5cbmV4cG9ydCBjbGFzcyBFdmFsdWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdXRpbHMubWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgRXhwQnVpbGRlcigpO1xuICAgICAgICB0aGlzLnBhcnNlciA9IHNjb3BlLiRwYXJzZXIgfHwge3BhcnNlRXhwcmVzc2lvbjogcGFyc2VFeHB9O1xuICAgIH1cblxuICAgIC8vIGdldCB2YWx1ZSBmcm9tIGV4cHJlc3Npb25cbiAgICBldmFsdWF0ZShleHApIHtcbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLnBhcnNlci5wYXJzZUV4cHJlc3Npb24oZXhwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVQcm9ncmFtKHByb2dyYW0pO1xuICAgIH1cblxuICAgIGV2YWx1YXRlUHJvZ3JhbShwcm9ncmFtKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcblxuICAgICAgICB0aGlzLnByb2dyYW0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNoaWxkKSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuJG51bGwpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIHNldCB2YWx1ZSB0byBleHByZXNzaW9uXG4gICAgYXNzaWduKGV4cCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLnBhcnNlci5wYXJzZUV4cHJlc3Npb24oZXhwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWduUHJvZ3JhbShwcm9ncmFtLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgYXNzaWduUHJvZ3JhbShwcm9ncmFtLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuXG4gICAgICAgIGlmICh0aGlzLnByb2dyYW0uY2hpbGROb2Rlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhwcmVzc2lvbiA9IHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzWzBdO1xuXG4gICAgICAgIGlmIChleHByZXNzaW9uLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhc3NpZ25tZW50ID0gZXhwcmVzc2lvbi5jaGlsZE5vZGVzWzBdO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50LnR5cGUgPT09IEFTVC5NZW1iZXJFeHByZXNzaW9uKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5vYmplY3QpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbnVsbCBvciB1bmRlZmluZWQnLCB0aGlzLmJ1aWxkZXIuYnVpbGQoYXNzaWdubWVudC5vYmplY3QpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LnByb3BlcnR5LCB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXk6ICFhc3NpZ25tZW50LmNvbXB1dGVkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGtleSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG51bGwgb3IgdW5kZWZpbmVkJywgdGhpcy5idWlsZGVyLmJ1aWxkKGFzc2lnbm1lbnQucHJvcGVydHkpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0YXJnZXQsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFzc2lnbm1lbnQudHlwZSA9PT0gQVNULklkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQoYXNzaWdubWVudCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcGVba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yLmNhbGwodGhpcywgdGhpcy5zY29wZSwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZhbHVhdGVOb2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlRXhwcmVzc2lvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVBc3NpZ25tZW50KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVDb25kaXRpb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTG9naWMobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVCaW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZVVuYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUNhbGwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVNZW1iZXIobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVJZGVudGlmaWVyKG5vZGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTGl0ZXJhbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQXJyYXkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlUHJvcGVydHkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVPYmplY3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlRXhwcmVzc2lvbihleHApIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICBleHAuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNoaWxkKSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5sZWZ0LCB7XG4gICAgICAgICAgICBhc3NpZ25tZW50TGVmdDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5yaWdodCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXQub2JqW3RhcmdldC5wcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yLmNhbGwodGhpcywgdGFyZ2V0Lm9iaiwgdGFyZ2V0LnByb3AsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2YWx1YXRlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgICAgICBpZiAodGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uLnRlc3QpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uLmFsdGVybmF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xuICAgIH1cblxuICAgIGV2YWx1YXRlTG9naWMobG9naWMpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGxvZ2ljLmxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGxvZ2ljLnJpZ2h0KTtcblxuICAgICAgICBzd2l0Y2ggKGxvZ2ljLm9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICcmJic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd8fCc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQmluYXJ5KGJpbmFyeSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYmluYXJ5LmxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGJpbmFyeS5yaWdodCk7XG5cbiAgICAgICAgLy8gJysnLCAnLScsICcqJywgJy8nLCAnJScsICc8JywgJz4nLCAnPD0nLCAnPj0nLCAnPT0nLCAnIT0nLCAnPT09JywgJyE9PSdcbiAgICAgICAgc3dpdGNoIChiaW5hcnkub3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSArIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICogcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAvIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICclJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDwgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc8PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDw9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc+PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID49IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc9PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICchPSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc9PT0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyE9PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZVVuYXJ5KHVuYXJ5KSB7XG4gICAgICAgIHZhciByZXN1bHQsXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKHVuYXJ5LmFyZyk7XG5cbiAgICAgICAgc3dpdGNoICh1bmFyeS5vcGVyYXRvcikge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAtdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICchJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAhdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQ2FsbChjYWxsKSB7XG4gICAgICAgIHZhciBhcmdWYWx1ZXMgPSBjYWxsLmFyZ3MubWFwKGFyZyA9PiB0aGlzLmV2YWx1YXRlTm9kZShhcmcpKTtcblxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNhbGwuY2FsbGVlLCB7XG4gICAgICAgICAgICBjYWxsZWU6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNhbGwuZmlsdGVyKSB7XG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gdGhpcy5wYXJzZXIucmVzb2x2ZUZpbHRlcihjb250ZXh0LnByb3ApO1xuXG4gICAgICAgICAgICBpZihmaWx0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIFwiJyArIGNvbnRleHQucHJvcCArICdcIiBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyLnRyYW5zZm9ybS5hcHBseShmaWx0ZXIsIGFyZ1ZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZm4gPSBjb250ZXh0Lm9ialtjb250ZXh0LnByb3BdO1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQub2JqLCBhcmdWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRleHQucHJvcCArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2YWx1YXRlTWVtYmVyKG1lbWJlciwgY29udGV4dCkge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLm9iamVjdCk7XG5cbiAgICAgICAgaWYgKG9iaiA9PSBudWxsICYmICh0aGlzLm9wdGlvbnMuYWxsb3dOdWxsIHx8IG1lbWJlci5vYmplY3QuYWxsb3dOdWxsKSkge1xuICAgICAgICAgICAgb2JqID0gbmV3IE51bGxFeHByZXNzaW9uTm9kZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lbWJlci5jb21wdXRlZCkge1xuICAgICAgICAgICAgdmFyIHByb3AgPSB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIucHJvcGVydHkpO1xuICAgICAgICAgICAgcmV0dXJuIG9ialtwcm9wXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIucHJvcGVydHksIHtcbiAgICAgICAgICAgIHRhcmdldDogb2JqLFxuICAgICAgICAgICAgdGFyZ2V0Tm9kZTogbWVtYmVyLm9iamVjdCxcbiAgICAgICAgICAgIGNhbGxlZTogY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRMZWZ0OiBjb250ZXh0ICYmIGNvbnRleHQuYXNzaWdubWVudExlZnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVJZGVudGlmaWVyKGlkZW50aWZpZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHRhcmdldDtcblxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCB7fTtcblxuICAgICAgICBpZiAoY29udGV4dC50YXJnZXROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuc2NvcGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBjb250ZXh0LnRhcmdldFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQuYXNzaWdubWVudExlZnQgfHwgY29udGV4dC5jYWxsZWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb2JqOiB0YXJnZXQsXG4gICAgICAgICAgICAgICAgcHJvcDogaWRlbnRpZmllci5uYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQucHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBpZGVudGlmaWVyLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0W2lkZW50aWZpZXIubmFtZV07XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIHRoaXMub3B0aW9ucy5sb2NhbHMpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMub3B0aW9ucy5sb2NhbHNbaWRlbnRpZmllci5uYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVMaXRlcmFsKGxpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwudmFsdWU7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVQcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmV2YWx1YXRlTm9kZShwcm9wLmtleSwge1xuICAgICAgICAgICAgcHJvcGVydHlLZXk6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUocHJvcC52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZXZhbHVhdGVPYmplY3Qob2JqKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcblxuICAgICAgICBvYmoucHJvcGVydGllcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdmFyIGRlZiA9IHRoaXMuZXZhbHVhdGVOb2RlKGl0ZW0pO1xuICAgICAgICAgICAgcmVzdWx0W2RlZi5rZXldID0gZGVmLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQXJyYXkoYXJyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICBhcnIuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZXZhbHVhdGVOb2RlKGNoaWxkKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsImltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi9leHAtbGV4ZXInO1xuaW1wb3J0IHsgRXhwUGFyc2VyIH0gZnJvbSAnLi9leHAtcGFyc2VyJztcblxuZnVuY3Rpb24gbGV4RXhwKGV4cCkge1xuICAgIHJldHVybiBuZXcgRXhwTGV4ZXIoKS5sZXgoZXhwKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFeHAoZXhwKSB7XG4gICAgcmV0dXJuIG5ldyBFeHBQYXJzZXIobmV3IEV4cExleGVyKCkpLnBhcnNlKGV4cCk7XG59XG5cbmV4cG9ydCB7IGxleEV4cCwgcGFyc2VFeHAgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGNsYXNzIEV4cEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgYnVpbGQobm9kZSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRFeHByZXNzaW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZENvbmRpdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRMb2dpYyhub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkVW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQ2FsbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZE1lbWJlcihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZElkZW50aWZpZXIobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRMaXRlcmFsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRQcm9wZXJ0eShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZE9iamVjdChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYnVpbGRFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYnVpbGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuYnVpbGQoYXNzaWdubWVudC5sZWZ0KTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZChhc3NpZ25tZW50LnJpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9PXsxfScsIHRhcmdldCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgICAgICB2YXIgdGVzdCA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLnRlc3QpO1xuICAgICAgICB2YXIgYWx0ZXJuYXRlID0gdGhpcy5idWlsZChjb25kaXRpb24uYWx0ZXJuYXRlKTtcbiAgICAgICAgdmFyIGNvbnNlcXVlbnQgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi5jb25zZXF1ZW50KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9P3sxfTp7Mn0nLCB0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xuICAgIH1cblxuICAgIGJ1aWxkTG9naWMobG9naWMpIHtcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuYnVpbGQobG9naWMubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5idWlsZChsb2dpYy5yaWdodCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfXsyfScsIGxlZnRWYWx1ZSwgbG9naWMub3BlcmF0b3IsIHJpZ2h0VmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkQmluYXJ5KGJpbmFyeSkge1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5idWlsZChiaW5hcnkubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5idWlsZChiaW5hcnkucmlnaHQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX17Mn0nLCBsZWZ0VmFsdWUsIGJpbmFyeS5vcGVyYXRvciwgcmlnaHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRVbmFyeSh1bmFyeSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKHVuYXJ5LmFyZyk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfScsIHVuYXJ5Lm9wZXJhdG9yLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRDYWxsKGNhbGwpIHtcbiAgICAgICAgdmFyIHJlcyA9ICcnLCBhcmdWYWx1ZXMgPSBjYWxsLmFyZ3MubWFwKGFyZyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChhcmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZm4gPSB0aGlzLmJ1aWxkKGNhbGwuY2FsbGVlKTtcblxuICAgICAgICBpZiAoY2FsbC5maWx0ZXIpIHtcbiAgICAgICAgICAgIGlmIChhcmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlcyA9IGFyZ1ZhbHVlcy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXMgKz0gJyB8ICcgKyBmbjtcblxuICAgICAgICAgICAgaWYgKGFyZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzICs9ICc6JyArIGFyZ1ZhbHVlcy5qb2luKCc6Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXMgPSB1dGlscy5mb3JtYXQoJ3swfSh7MX0pJywgZm4sIGFyZ1ZhbHVlcy5qb2luKCcsICcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgYnVpbGRNZW1iZXIobWVtYmVyKSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmJ1aWxkKG1lbWJlci5vYmplY3QpO1xuICAgICAgICB2YXIgcHJvcCA9IHRoaXMuYnVpbGQobWVtYmVyLnByb3BlcnR5KTtcblxuICAgICAgICBpZiAobWVtYmVyLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH1bezF9XScsIG9iaiwgcHJvcCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH0uezF9Jywgb2JqLCBwcm9wKTtcbiAgICB9XG5cbiAgICBidWlsZElkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICAgICAgICByZXR1cm4gaWRlbnRpZmllci5uYW1lO1xuICAgIH1cblxuICAgIGJ1aWxkTGl0ZXJhbChsaXRlcmFsKSB7XG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhsaXRlcmFsLnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnXCJ7MH1cIicsIGxpdGVyYWwudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpdGVyYWwudmFsdWU7XG4gICAgfVxuXG4gICAgYnVpbGRQcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkKHByb3Aua2V5LCB7XG4gICAgICAgICAgICBwcm9wZXJ0eUtleTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKHByb3AudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfTp7MX0nLCBrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZE9iamVjdChvYmopIHtcbiAgICAgICAgdmFyIHByb3BzID0gb2JqLnByb3BlcnRpZXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3t7MH19JywgcHJvcHMuam9pbignLCAnKSk7XG4gICAgfVxuXG4gICAgYnVpbGRBcnJheShhcnIpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gYXJyLmNoaWxkTm9kZXMubWFwKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnW3swfV0nLCBpdGVtcy5qb2luKCcsJykpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBPUEVSQVRPUlMgfSBmcm9tICcuL2V4cC1vcGVyYXRvcnMnO1xuaW1wb3J0IHsgcGFyc2VPcHRpb25zIH0gZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcblxuZXhwb3J0IGNsYXNzIEV4cExleGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKHBhcnNlT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgbGV4KHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMudG9rZW5zID0gW107XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNOdW1iZXIoY2gpIHx8IGNoID09PSAnLicgJiYgdGhpcy5pc051bWJlcih0aGlzLnBlZWsoKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWROdW1iZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzKGNoLCAnKCl7fVtdLiw7Oj8nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogY2ggfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjaDIgPSBjaCArIHRoaXMucGVlaygpO1xuICAgICAgICAgICAgICAgIHZhciBjaDMgPSBjaDIgKyB0aGlzLnBlZWsoMik7XG4gICAgICAgICAgICAgICAgdmFyIG9wMSA9IE9QRVJBVE9SU1tjaF07XG4gICAgICAgICAgICAgICAgdmFyIG9wMiA9IE9QRVJBVE9SU1tjaDJdO1xuICAgICAgICAgICAgICAgIHZhciBvcDMgPSBPUEVSQVRPUlNbY2gzXTtcbiAgICAgICAgICAgICAgICBpZiAob3AxIHx8IG9wMiB8fCBvcDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gb3AzID8gY2gzIDogKG9wMiA/IGNoMiA6IGNoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiB0b2tlbiwgb3BlcmF0b3I6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gdG9rZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBpcyhjaCwgY2hhcnMpIHtcbiAgICAgICAgcmV0dXJuIGNoYXJzLmluZGV4T2YoY2gpICE9PSAtMTtcbiAgICB9XG5cbiAgICBwZWVrKGkpIHtcbiAgICAgICAgdmFyIG51bSA9IGkgfHwgMTtcbiAgICAgICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDwgdGhpcy50ZXh0Lmxlbmd0aCkgPyB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXggKyBudW0pIDogZmFsc2U7XG4gICAgfVxuXG4gICAgaXNOdW1iZXIoY2gpIHtcbiAgICAgICAgcmV0dXJuICgnMCcgPD0gY2ggJiYgY2ggPD0gJzknKSAmJiB0eXBlb2YgY2ggPT09ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIGlzV2hpdGVzcGFjZShjaCkge1xuICAgICAgICAvLyBJRSB0cmVhdHMgbm9uLWJyZWFraW5nIHNwYWNlIGFzIFxcdTAwQTBcbiAgICAgICAgcmV0dXJuIChjaCA9PT0gJyAnIHx8IGNoID09PSAnXFxyJyB8fCBjaCA9PT0gJ1xcdCcgfHxcbiAgICAgICAgICAgIGNoID09PSAnXFxuJyB8fCBjaCA9PT0gJ1xcdicgfHwgY2ggPT09ICdcXHUwMEEwJyk7XG4gICAgfVxuXG4gICAgaXNJZGVudGlmaWVyU3RhcnQoY2gpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydCA/XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpO1xuICAgIH1cblxuICAgIGlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpIHtcbiAgICAgICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XG4gICAgICAgICAgICAnQScgPD0gY2ggJiYgY2ggPD0gJ1onIHx8XG4gICAgICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcpO1xuICAgIH1cblxuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUgP1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoLCBjcCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCk7XG4gICAgfVxuXG4gICAgY29kZVBvaW50QXQoY2gpIHtcbiAgICAgICAgaWYgKGNoLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgICAgcmV0dXJuIChjaC5jaGFyQ29kZUF0KDApIDw8IDEwKSArIGNoLmNoYXJDb2RlQXQoMSkgLSAweDM1RkRDMDA7XG4gICAgfVxuXG4gICAgcGVla011bHRpY2hhcigpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgdmFyIHBlZWsgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgaWYgKCFwZWVrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2g7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNwMSA9IGNoLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIHZhciBjcDIgPSBwZWVrLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGlmIChjcDEgPj0gMHhEODAwICYmIGNwMSA8PSAweERCRkYgJiYgY3AyID49IDB4REMwMCAmJiBjcDIgPD0gMHhERkZGKSB7XG4gICAgICAgICAgICByZXR1cm4gY2ggKyBwZWVrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaDtcbiAgICB9XG5cbiAgICBpc0V4cE9wZXJhdG9yKGNoKSB7XG4gICAgICAgIHJldHVybiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnIHx8IHRoaXMuaXNOdW1iZXIoY2gpKTtcbiAgICB9XG5cbiAgICB0aHJvd0Vycm9yKGVycm9yLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIGVuZCA9IGVuZCB8fCB0aGlzLmluZGV4O1xuICAgICAgICB2YXIgY29sU3RyID0gKHV0aWxzLmlzRGVmaW5lZChzdGFydCkgPyAncyAnICsgc3RhcnQgKyAnLScgKyB0aGlzLmluZGV4ICsgJyBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCkgKyAnXScgOiAnICcgKyBlbmQpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xleGVyIEVycm9yOiAnICsgZXJyb3IgKyAnIGF0IGNvbHVtbicgKyBjb2xTdHIgKyAnIGluIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXS4nKTtcbiAgICB9XG5cbiAgICByZWFkTnVtYmVyKCkge1xuICAgICAgICB2YXIgbnVtYmVyID0gJyc7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdXRpbHMubG93ZXJjYXNlKHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCkpO1xuICAgICAgICAgICAgaWYgKGNoID09PSAnLicgfHwgdGhpcy5pc051bWJlcihjaCkpIHtcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBwZWVrQ2ggPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICdlJyAmJiB0aGlzLmlzRXhwT3BlcmF0b3IocGVla0NoKSkge1xuICAgICAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXG4gICAgICAgICAgICAgICAgICAgIHBlZWtDaCAmJiB0aGlzLmlzTnVtYmVyKHBlZWtDaCkgJiZcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXG4gICAgICAgICAgICAgICAgICAgICghcGVla0NoIHx8ICF0aGlzLmlzTnVtYmVyKHBlZWtDaCkpICYmXG4gICAgICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIGV4cG9uZW50Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgdGV4dDogbnVtYmVyLFxuICAgICAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogTnVtYmVyKG51bWJlcilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVhZElkZW50KCkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB0aGlzLmluZGV4ICs9IHRoaXMucGVla011bHRpY2hhcigpLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnBlZWtNdWx0aWNoYXIoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0lkZW50aWZpZXJDb250aW51ZShjaCkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gY2gubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0LnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KSxcbiAgICAgICAgICAgIGlkZW50aWZpZXI6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVhZFN0cmluZyhxdW90ZSkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICAgICAgdmFyIHJhd1N0cmluZyA9IHF1b3RlO1xuICAgICAgICB2YXIgZXNjYXBlID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHJhd1N0cmluZyArPSBjaDtcbiAgICAgICAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICd1Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGV4ID0gdGhpcy50ZXh0LnN1YnN0cmluZyh0aGlzLmluZGV4ICsgMSwgdGhpcy5pbmRleCArIDUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhleC5tYXRjaCgvW1xcZGEtZl17NH0vaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHUnICsgaGV4ICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IDQ7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGhleCwgMTYpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVwID0gRVNDQVBFW2NoXTtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgKHJlcCB8fCBjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVzY2FwZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgZXNjYXBlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09IHF1b3RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBxdW90ZScsIHN0YXJ0KTtcbiAgICB9XG59IiwiZXhwb3J0IHZhciBPUEVSQVRPUlMgPSB7fTtcblxudmFyIG9wZXJhdG9yVGV4dCA9ICcrIC0gKiAvICUgPT09ICE9PSA9PSAhPSA8ID4gPD0gPj0gJiYgfHwgISA9IHwnO1xudmFyIEVTQ0FQRSA9IHsgJ24nOiAnXFxuJywgJ2YnOiAnXFxmJywgJ3InOiAnXFxyJywgJ3QnOiAnXFx0JywgJ3YnOiAnXFx2JywgJ1xcJyc6ICdcXCcnLCAnXCInOiAnXCInIH07XG5cbm9wZXJhdG9yVGV4dC5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKG9wZXJhdG9yKSB7XG4gICAgT1BFUkFUT1JTW29wZXJhdG9yXSA9IHRydWU7XG59KTsiLCJpbXBvcnQge1xuICAgIEFTVCxcbiAgICBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUsXG4gICAgQmluYXJ5RXhwcmVzc2lvbk5vZGUsXG4gICAgQ2FsbEV4cHJlc3Npb25Ob2RlLFxuICAgIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUsXG4gICAgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUsXG4gICAgSWRlbnRpZmllck5vZGUsXG4gICAgTGl0ZXJhbE5vZGUsXG4gICAgTG9naWNhbEV4cHJlc3Npb25Ob2RlLFxuICAgIE1lbWJlckV4cHJlc3Npb25Ob2RlLFxuICAgIE9iamVjdEV4cHJlc3Npb25Ob2RlLFxuICAgIFByb2dyYW1Ob2RlLFxuICAgIFByb3BlcnR5Tm9kZSxcbiAgICBVbmFyeUV4cHJlc3Npb25Ob2RlLFxuICAgIEFycmF5RXhwcmVzc2lvbk5vZGVcbn0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4vZXhwLWxleGVyJztcbmltcG9ydCB7IHBhcnNlT3B0aW9ucyB9IGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBFeHBQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKGxleGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdXRpbHMubWVyZ2UocGFyc2VPcHRpb25zLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICB0aHJvd0Vycm9yKG1zZywgdG9rZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTeW50YXggRXJyb3I6IFRva2VuIFxcJycgKyB0b2tlbi50ZXh0ICsgJ1xcJycgKyBtc2cgKyAnIGF0IGNvbHVtbiAnICsgKHRva2VuLmluZGV4ICsgMSkgK1xuICAgICAgICAgICAgJyBvZiB0aGUgZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddIHN0YXJ0aW5nIGF0IFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyh0b2tlbi5pbmRleCkgKyAnXS4nKTtcbiAgICB9XG5cbiAgICBwYXJzZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9ncmFtKCk7XG5cbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBhbiB1bmV4cGVjdGVkIHRva2VuJywgdGhpcy50b2tlbnNbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHByb2dyYW0oKSB7XG4gICAgICAgIHZhciBwcm9ncmFtID0gbmV3IFByb2dyYW1Ob2RlKCk7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gMCAmJiAhdGhpcy5wZWVrKCd9JywgJyknLCAnOycsICddJykpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmFtLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3QoJzsnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9ncmFtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwcmVzc2lvblN0YXRlbWVudCgpIHtcbiAgICAgICAgdmFyIGV4cCA9IG5ldyBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSgpO1xuICAgICAgICBleHAuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJDaGFpbigpKTtcbiAgICAgICAgcmV0dXJuIGV4cDtcbiAgICB9XG5cbiAgICBmaWx0ZXJDaGFpbigpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCd8JykpIHtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLmZpbHRlcihsZWZ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBleHByZXNzaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50KCk7XG4gICAgfVxuXG4gICAgaXNBc3NpZ25hYmxlKGFzdCkge1xuICAgICAgICByZXR1cm4gYXN0LnR5cGUgPT09IEFTVC5JZGVudGlmaWVyIHx8IGFzdC50eXBlID09PSBBU1QuTWVtYmVyRXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBhc3NpZ25tZW50KCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy50ZXJuYXJ5KCk7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPScpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNBc3NpZ25hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhc3NpZ24gYSB2YWx1ZSB0byBhIG5vbiBsLXZhbHVlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUocmVzdWx0LCB0aGlzLmFzc2lnbm1lbnQoKSwgJz0nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHRlcm5hcnkoKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gdGhpcy5sb2dpY2FsT1IoKTtcbiAgICAgICAgdmFyIGFsdGVybmF0ZTtcbiAgICAgICAgdmFyIGNvbnNlcXVlbnQ7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XG4gICAgICAgICAgICBhbHRlcm5hdGUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnN1bWUoJzonKSkge1xuICAgICAgICAgICAgICAgIGNvbnNlcXVlbnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUodGVzdCwgYWx0ZXJuYXRlLCBjb25zZXF1ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVzdDtcbiAgICB9XG5cbiAgICBsb2dpY2FsT1IoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5sb2dpY2FsQU5EKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfHwnKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJ3x8JywgbGVmdCwgdGhpcy5sb2dpY2FsQU5EKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIGxvZ2ljYWxBTkQoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5lcXVhbGl0eSgpO1xuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJyYmJykpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCcmJicsIGxlZnQsIHRoaXMuZXF1YWxpdHkoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgZXF1YWxpdHkoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5yZWxhdGlvbmFsKCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc9PScsICchPScsICc9PT0nLCAnIT09JykpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMucmVsYXRpb25hbCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICByZWxhdGlvbmFsKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuYWRkaXRpdmUoKTtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJzwnLCAnPicsICc8PScsICc+PScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLmFkZGl0aXZlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIGFkZGl0aXZlKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMubXVsdGlwbGljYXRpdmUoKTtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLm11bHRpcGxpY2F0aXZlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIG11bHRpcGxpY2F0aXZlKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMudW5hcnkoKTtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJyonLCAnLycsICclJykpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMudW5hcnkoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgdW5hcnkoKSB7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgaWYgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nLCAnIScpKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIHRoaXMudW5hcnkoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmltYXJ5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmltYXJ5KCkge1xuICAgICAgICB2YXIgcHJpbWFyeTtcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCcoJykpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmZpbHRlckNoYWluKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgnWycpKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5hcnJheURlY2xhcmF0aW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ3snKSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMub2JqZWN0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmxpdGVyYWxzLmhhc093blByb3BlcnR5KHRoaXMucGVlaygpLnRleHQpKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IExpdGVyYWxOb2RlKHRoaXMub3B0aW9ucy5saXRlcmFsc1t0aGlzLmNvbnN1bWUoKS50ZXh0XSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuaWRlbnRpZmllcigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5jb25zdGFudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdub3QgYSBwcmltYXJ5IGV4cHJlc3Npb24nLCB0aGlzLnBlZWsoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV4dDtcbiAgICAgICAgd2hpbGUgKHRoaXMucGVlaygnKCcsICdbJywgJy4nKSB8fCAodGhpcy5wZWVrKCc/JykgJiYgdGhpcy5wZWVrQWhlYWQoMSwgJy4nKSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeS5hbGxvd051bGwgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0ID0gdGhpcy5leHBlY3QoJygnLCAnWycsICcuJyk7XG5cbiAgICAgICAgICAgIGlmIChuZXh0LnRleHQgPT09ICcoJykge1xuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMucGFyc2VBcmd1bWVudHMoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJ1snKSB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBNZW1iZXJFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLmV4cHJlc3Npb24oKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBNZW1iZXJFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLmlkZW50aWZpZXIoKSwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0lNUE9TU0lCTEUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJpbWFyeTtcbiAgICB9XG5cbiAgICBmaWx0ZXIoYmFzZUV4cHJlc3Npb24pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbYmFzZUV4cHJlc3Npb25dLCBpZGVudGlmaWVycyA9IFt0aGlzLmlkZW50aWZpZXIoKV07XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcuJykpIHtcbiAgICAgICAgICAgIGlkZW50aWZpZXJzLnB1c2godGhpcy5pZGVudGlmaWVyKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGx1cyBuYW1lc3BhY2VcbiAgICAgICAgdmFyIGVudGlyZU5hbWUgPSBpZGVudGlmaWVycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLm5hbWU7XG4gICAgICAgIH0pLmpvaW4oJy4nKTtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShuZXcgSWRlbnRpZmllck5vZGUoZW50aXJlTmFtZSksIGFyZ3MpO1xuXG4gICAgICAgIHJlc3VsdC5maWx0ZXIgPSB0cnVlO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnOicpKSB7XG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwYXJzZUFyZ3VtZW50cygpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJyknKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJncztcbiAgICB9XG5cbiAgICBpZGVudGlmaWVyKCkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmNvbnN1bWUoKTtcbiAgICAgICAgaWYgKCF0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIG5vdCBhIHZhbGlkIGlkZW50aWZpZXInLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBJZGVudGlmaWVyTm9kZSh0b2tlbi50ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdGFudCgpIHtcbiAgICAgICAgLy8gVE9ETyBjaGVjayB0aGF0IGl0IGlzIGEgY29uc3RhbnRcbiAgICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsTm9kZSh0aGlzLmNvbnN1bWUoKS52YWx1ZSk7XG4gICAgfVxuXG4gICAgYXJyYXlEZWNsYXJhdGlvbigpIHtcbiAgICAgICAgdmFyIGFyciA9IG5ldyBBcnJheUV4cHJlc3Npb25Ob2RlKCk7XG4gICAgICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICddJykge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ10nKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcnIuYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uKCkpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBvYmplY3QoKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gW10sIHByb3BlcnR5O1xuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnfScpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCd9JykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHlOb2RlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuY29uc3RhbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuaWRlbnRpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCc6JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gcHJvcGVydHkua2V5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoJ1snKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ1snKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaW52YWxpZCBrZXknLCB0aGlzLnBlZWsoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnN1bWUoJ30nKTtcblxuICAgICAgICByZXR1cm4gbmV3IE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpO1xuICAgIH1cblxuICAgIGNvbnN1bWUoZTEpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuZXhwZWN0KGUxKTtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyB1bmV4cGVjdGVkLCBleHBlY3RpbmcgWycgKyBlMSArICddJywgdGhpcy5wZWVrKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cbiAgICBwZWVrVG9rZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zWzBdO1xuICAgIH1cblxuICAgIHBlZWsoZTEsIGUyLCBlMywgZTQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVla0FoZWFkKDAsIGUxLCBlMiwgZTMsIGU0KTtcbiAgICB9XG5cbiAgICBwZWVrQWhlYWQoaSwgZTEsIGUyLCBlMywgZTQpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IGkpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW5zW2ldO1xuICAgICAgICAgICAgdmFyIHQgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgaWYgKHQgPT09IGUxIHx8IHQgPT09IGUyIHx8IHQgPT09IGUzIHx8IHQgPT09IGU0IHx8XG4gICAgICAgICAgICAgICAgKCFlMSAmJiAhZTIgJiYgIWUzICYmICFlNCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGV4cGVjdChlMSwgZTIsIGUzLCBlNCkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnBlZWsoZTEsIGUyLCBlMywgZTQpO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnNoaWZ0KCk7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9leHAtbGV4ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9leHAtcGFyc2VyJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1idWlsZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXZhbHVhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vYW5hbHlzZXInOyIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIEFycmF5RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVNULkFycmF5RXhwcmVzc2lvbik7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGxlZnQsIHJpZ2h0LCBvcGVyYXRvcikge1xuICAgICAgICBzdXBlcihBU1QuQXNzaWdubWVudEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gW107XG4gICAgfVxuXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgIH1cbn0iLCJleHBvcnQgdmFyIEFTVCA9IHt9O1xuXG5BU1QuUHJvZ3JhbSA9ICdQcm9ncmFtJztcbkFTVC5FeHByZXNzaW9uU3RhdGVtZW50ID0gJ0V4cHJlc3Npb25TdGF0ZW1lbnQnO1xuQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uID0gJ0Fzc2lnbm1lbnRFeHByZXNzaW9uJztcbkFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24gPSAnQ29uZGl0aW9uYWxFeHByZXNzaW9uJztcbkFTVC5Mb2dpY2FsRXhwcmVzc2lvbiA9ICdMb2dpY2FsRXhwcmVzc2lvbic7XG5BU1QuQmluYXJ5RXhwcmVzc2lvbiA9ICdCaW5hcnlFeHByZXNzaW9uJztcbkFTVC5VbmFyeUV4cHJlc3Npb24gPSAnVW5hcnlFeHByZXNzaW9uJztcbkFTVC5DYWxsRXhwcmVzc2lvbiA9ICdDYWxsRXhwcmVzc2lvbic7XG5BU1QuTWVtYmVyRXhwcmVzc2lvbiA9ICdNZW1iZXJFeHByZXNzaW9uJztcbkFTVC5JZGVudGlmaWVyID0gJ0lkZW50aWZpZXInO1xuQVNULkxpdGVyYWwgPSAnTGl0ZXJhbCc7XG5BU1QuQXJyYXlFeHByZXNzaW9uID0gJ0FycmF5RXhwcmVzc2lvbic7XG5BU1QuUHJvcGVydHkgPSAnUHJvcGVydHknO1xuQVNULk9iamVjdEV4cHJlc3Npb24gPSAnT2JqZWN0RXhwcmVzc2lvbic7XG5cbmV4cG9ydCBjbGFzcyBOdWxsRXhwcmVzc2lvbk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiRudWxsID0gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQmluYXJ5RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcbiAgICAgICAgc3VwZXIoQVNULkJpbmFyeUV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQ2FsbEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoY2FsbGVlLCBhcmdzKSB7XG4gICAgICAgIHN1cGVyKEFTVC5DYWxsRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgICAgICB0aGlzLmZpbHRlciA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IodGVzdCwgYWx0ZXJuYXRlLCBjb25zZXF1ZW50KSB7XG4gICAgICAgIHN1cGVyKEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICAgICAgICB0aGlzLmFsdGVybmF0ZSA9IGFsdGVybmF0ZTtcbiAgICAgICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIoQVNULklkZW50aWZpZXIpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFsbG93TnVsbCA9IGZhbHNlO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2FzdCc7XG5leHBvcnQgKiBmcm9tICcuL2FzdC1ub2RlJztcbmV4cG9ydCAqIGZyb20gJy4vYXNzaWdubWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2JpbmFyeSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbGwnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25kaXRpb25hbCc7XG5leHBvcnQgKiBmcm9tICcuL2V4cHJlc3Npb24nO1xuZXhwb3J0ICogZnJvbSAnLi9pZGVudGlmaWVyJztcbmV4cG9ydCAqIGZyb20gJy4vbGl0ZXJhbCc7XG5leHBvcnQgKiBmcm9tICAnLi9sb2dpY2FsJztcbmV4cG9ydCAqIGZyb20gICcuL21lbWJlcic7XG5leHBvcnQgKiBmcm9tICAnLi9vYmplY3QnO1xuZXhwb3J0ICogZnJvbSAgJy4vcHJvZ3JhbSc7XG5leHBvcnQgKiBmcm9tICAnLi9wcm9wZXJ0eSc7XG5leHBvcnQgKiBmcm9tICAnLi91bmFyeSc7XG5leHBvcnQgKiBmcm9tICcuL2FycmF5JzsiLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKEFTVC5MaXRlcmFsKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcbiAgICAgICAgc3VwZXIoQVNULkxvZ2ljYWxFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIE1lbWJlckV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgY29tcHV0ZWQpIHtcbiAgICAgICAgc3VwZXIoQVNULk1lbWJlckV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICB0aGlzLmNvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIE9iamVjdEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xuICAgICAgICBzdXBlcihBU1QuT2JqZWN0RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIFByb2dyYW1Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5Qcm9ncmFtKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5Qcm9wZXJ0eSk7XG4gICAgICAgIHRoaXMua2luZCA9ICdpbml0JztcbiAgICAgICAgdGhpcy5rZXkgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb21wdXRlZCA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBVbmFyeUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGFyZykge1xuICAgICAgICBzdXBlcihBU1QuVW5hcnlFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5wcmVmaXggPSB0cnVlO1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMuYXJnID0gYXJnO1xuICAgIH1cbn0iLCJleHBvcnQgdmFyIHBhcnNlT3B0aW9ucyA9IHtcbiAgICBpc0lkZW50aWZpZXJDb250aW51ZTogZmFsc2UsXG4gICAgaXNJZGVudGlmaWVyU3RhcnQ6IGZhbHNlLFxuICAgIGxpdGVyYWxzOiB7XG4gICAgICAgIGZhbHNlOiBmYWxzZSxcbiAgICAgICAgbnVsbDogbnVsbCxcbiAgICAgICAgdHJ1ZTogdHJ1ZSxcbiAgICAgICAgdW5kZWZpbmVkOiB1bmRlZmluZWRcbiAgICB9XG59OyIsImV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlJztcbmV4cG9ydCAqIGZyb20gJy4vb2JzZXJ2ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9leHAnO1xuZXhwb3J0ICogZnJvbSAnLi90cGwnO1xuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXInO1xuZXhwb3J0ICogZnJvbSAnLi92aWV3JztcbmV4cG9ydCAqIGZyb20gJy4vZGVjb3JhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JzsiLCJleHBvcnQgY2xhc3MgRGVsYXllciB7XG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgdGltZW91dCkge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgICAgICB0aGlzLmRlbGF5SWQgPSBudWxsO1xuICAgIH1cblxuICAgIGV4ZWN1dGUoc2NvcGUpIHtcbiAgICAgICAgaWYodGhpcy5kZWxheUlkICE9IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZWxheUlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlbGF5SWQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLmNhbGwoc2NvcGUpO1xuICAgICAgICB9LCB0aGlzLnRpbWVvdXQpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmRlbGF5SWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlJZCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9wcm94eSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vb2JzZXJ2ZXInOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEV2YWx1YXRvciwgQW5hbHlzZXIgfSBmcm9tICcuLi9leHAnO1xuaW1wb3J0IHsgV2F0Y2hlciB9IGZyb20gJy4vd2F0Y2hlcic7XG5pbXBvcnQgeyBEZWxheWVyIH0gZnJvbSAnLi9kZWxheWVyJztcblxuY2xhc3MgTGlzdGVuZXIge1xuICAgIGNvbnN0cnVjdG9yKGV4cCwgaGFuZGxlciwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0TmV3VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0Q29sbGVjdGlvbkNoYW5nZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVDaGFuZ2VkIHx8IHRoaXMuY29sbGVjdGlvbkNoYW5nZWQ7XG4gICAgfVxuXG4gICAgbm90aWZ5KHNjb3BlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMubmV3VmFsdWUsXG4gICAgICAgICAgICBjb2xsZWN0aW9uQ2hhbmdlZCA9IHRoaXMuY29sbGVjdGlvbkNoYW5nZWQ7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubmV3VmFsdWU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhbmRsZXIuY2FsbChzY29wZSwge1xuICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgY29sbGVjdGlvbkNoYW5nZWQ6IGNvbGxlY3Rpb25DaGFuZ2VkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuYWNjZXNzb3JzID0ge307XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMud2F0Y2hlciA9IG5ldyBXYXRjaGVyKCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZXIgPSBuZXcgQW5hbHlzZXIoc2NvcGUuJHBhcnNlcik7XG4gICAgICAgIHRoaXMuZGVsYXllciA9IG5ldyBEZWxheWVyKHRoaXMubm90aWZ5LCAxNik7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCB2YWx1ZSkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBuZXcgTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICAgIGlmKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeSgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICBpZihsaXN0ZW5lci5oYXNDaGFuZ2UoKSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLm5vdGlmeSh0aGlzLnNjb3BlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5Q2hhbmdlKGxpc3RlbmVyLCBuZXdWYWx1ZSkge1xuICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnNldENvbGxlY3Rpb25DaGFuZ2VkKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsYXllci5leGVjdXRlKHRoaXMpO1xuICAgIH1cblxuICAgIGdldEFjY2Vzc29yKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5hY2Nlc3NvcnNbZXhwXTtcblxuICAgICAgICBpZighcmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VyLmFuYWx5c2UoZXhwKTtcbiAgICAgICAgICAgIHRoaXMuYWNjZXNzb3JzW2V4cF0gPSByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXRpbHMuY29weSh0cnVlLCByZXN1bHQpO1xuICAgIH1cblxuICAgIHdhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGFjY2Vzc29yID0gdGhpcy5nZXRBY2Nlc3NvcihleHApO1xuICAgICAgICB2YXIgZXZhbHVhdG9yID0gIG5ldyBFdmFsdWF0b3IodGhpcy5zY29wZSwgeyBhbGxvd051bGw6IHRydWUsIGxvY2FsczogbG9jYWxzIH0pO1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUxpc3RlbmVyKGV4cCwgaGFuZGxlciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCkpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVud2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3JzKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKGFjY2Vzc29ycywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihpdGVtLnVud2F0Y2gpKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udW53YXRjaC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2ggPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB3YXRjaEFjY2Vzc29ycyhhY2Nlc3NvcnMsIHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCF1dGlscy5pc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKGFjY2Vzc29ycywgZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSB0YXJnZXQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5leHApIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gZXZhbHVhdG9yLmV2YWx1YXRlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodmFsdWVzID09PSBzZWxmLnNjb3BlICYmIGxvY2FscyAmJiBsb2NhbHNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBsb2NhbHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbS51bndhdGNoID0gc2VsZi53YXRjaGVyLndhdGNoKHZhbHVlcywga2V5LCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICB3YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuLCBhcmdzLmRhdGEubmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGlmeUNoYW5nZShsaXN0ZW5lciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbiwgdmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB3YXRjaEFjY2Vzc29ycyhhY2Nlc3NvciwgdGhpcy5zY29wZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVud2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3IpO1xuICAgICAgICAgICAgc2VsZi5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgd2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIGV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3IodGhpcy5zY29wZSwgeyBhbGxvd051bGw6IHRydWUsIGxvY2FsczogbG9jYWxzIH0pO1xuICAgICAgICB2YXIgdW53YXRjaFByb3BzID0gd2F0Y2hQcm9wcygpO1xuICAgICAgICB2YXIgdW53YXRjaEV4cCA9IHRoaXMud2F0Y2goZXhwLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodW53YXRjaFByb3BzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVud2F0Y2hQcm9wcyA9IHdhdGNoUHJvcHMoKTtcbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgbG9jYWxzKTtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5jcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIGV2YWx1YXRvci5ldmFsdWF0ZShleHApKTtcblxuICAgICAgICBmdW5jdGlvbiB3YXRjaFByb3BzKCkge1xuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBldmFsdWF0b3IuZXZhbHVhdGUoZXhwKTtcblxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbGxlY3Rpb24pIHx8IHV0aWxzLmlzQXJyYXkoY29sbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi53YXRjaGVyLndhdGNoKGNvbGxlY3Rpb24sICcqJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGlmeUNoYW5nZShsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdW53YXRjaEV4cC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdW53YXRjaFByb3BzICYmIHVud2F0Y2hQcm9wcy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgc2VsZi5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5kZWxheWVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy53YXRjaGVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgfVxufSIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG52YXIgaXNQcm94eVN5bWJvbCA9IFN5bWJvbCgnX19pc1Byb3h5JyksXG4gICAgdGFyZ2V0U3ltYm9sID0gU3ltYm9sKCdfX3RhcmdldCcpO1xuXG52YXIgaGFuZGxlciA9IHtcbiAgICBnZXQ6IGdldFByb3h5LFxuICAgIHNldDogc2V0UHJveHlcbn07XG5cbi8vIGV4dGVuZHMgb2JqZWN0IHByb3RvdHlwZSwgYWRkIGZ1bmN0aW9uIHRvUHJveHlcbi8vIE9iamVjdC5wcm90b3R5cGUudG9Qcm94eSA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICByZXR1cm4gaXNQcm94eSh0aGlzKSA/IHRoaXMgOiBuZXcgUHJveHkodGhpcywgaGFuZGxlcik7XG4vLyB9O1xuXG5mdW5jdGlvbiBpc1Byb3h5KHByb3h5KSB7XG4gICAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHByb3h5KSAmJiBwcm94eVtpc1Byb3h5U3ltYm9sXTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHByb3h5KSB7XG4gICAgcmV0dXJuIGlzUHJveHkocHJveHkpID8gcHJveHlbdGFyZ2V0U3ltYm9sXSA6IHByb3h5O1xufVxuXG5mdW5jdGlvbiBtYWtlUHJveHkodmFsdWUpIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QodmFsdWUpICYmICFpc1Byb3h5KHZhbHVlKSkge1xuICAgICAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoaXRlbSwga2V5KSB7XG4gICAgICAgICAgICB2YWx1ZVtrZXldID0gbWFrZVByb3h5KGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZSwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRQcm94eSh0YXJnZXQsIGtleSkge1xuICAgIGlmIChrZXkgPT09IGlzUHJveHlTeW1ib2wpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gdGFyZ2V0U3ltYm9sKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xufVxuXG5mdW5jdGlvbiBzZXRQcm94eSh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBnZXRUYXJnZXQodGFyZ2V0W2tleV0pLFxuICAgICAgICBuZXdWYWx1ZSA9IGdldFRhcmdldCh2YWx1ZSk7XG5cbiAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gbWFrZVByb3h5KHZhbHVlKTtcbiAgICAgICAgZXZlbnRzLnByb3BlcnR5Q2hhbmdlZC5maXJlKHtcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGFyZ2V0W2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7XG4gICAgaXNQcm94eSxcbiAgICBnZXRUYXJnZXQsXG4gICAgaGFuZGxlclxufSIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgZ2V0VGFyZ2V0IH0gZnJvbSAnLi9wcm94eSc7XG5cbmNsYXNzIE9iamVjdExpc3RlbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMua2V5cyA9IHt9O1xuICAgIH1cblxuICAgIGdldEhhbmRsZXJzKGtleSkge1xuICAgICAgICBpZiAoIXRoaXMua2V5c1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLmtleXNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMua2V5c1trZXldO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyS2V5KGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XG4gICAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgdW5yZWdpc3RlcktleShrZXksIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xuXG4gICAgICAgIGlmIChoYW5kbGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIGhhbmRsZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVLZXkoa2V5LCBhcmdzLCBzZWxmKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcbiAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbChzZWxmLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2F0Y2hlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMub2ZmUHJvcGVydHlDaGFuZ2VkID0gZXZlbnRzLnByb3BlcnR5Q2hhbmdlZC5vbihlID0+IHRoaXMuaGFuZGxlUHJvcGVydHlDaGFuZ2VkKGUuZGF0YSkpO1xuICAgIH1cblxuICAgIGhhbmRsZVByb3BlcnR5Q2hhbmdlZChkYXRhKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIodGhpcy5saXN0ZW5lcnMsIGRhdGEudGFyZ2V0KTtcblxuICAgICAgICBpZiAobGlzdGVuZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGlzdGVuZXIuZmlyZUtleShkYXRhLmtleSwgZGF0YSk7XG4gICAgICAgICAgICBsaXN0ZW5lci5maXJlS2V5KCcqJywgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIsIGZpbHRlcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGFyZ2V0ID09PSB0YXJnZXQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gZmlsdGVyc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBuZXcgT2JqZWN0TGlzdGVuZXIodGFyZ2V0KTtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgZ2V0T3JDcmVhdGVMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldExpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KTtcblxuICAgICAgICBpZiAobGlzdGVuZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICB3YXRjaCh0YXJnZXQsIGtleSwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0T3JDcmVhdGVMaXN0ZW5lcih0aGlzLmxpc3RlbmVycywgZ2V0VGFyZ2V0KHRhcmdldCkpO1xuXG4gICAgICAgIGxpc3RlbmVyLnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGlzdGVuZXIudW5yZWdpc3RlcktleShrZXksIGFjdGlvbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5vZmZQcm9wZXJ0eUNoYW5nZWQoKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgRXhwcmVzc2lvbiB9IGZyb20gJy4vZXhwcmVzc2lvbic7XG5cbmV4cG9ydCBjbGFzcyBCaW5kaW5nIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgdGV4dCwgbG9jYWxzKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XG4gICAgICAgIC8vIGlzIHRydWUsIGJpbmRpbmcgdGV4dCBpcyBhIGV4cHJlc3Npb25cbiAgICAgICAgdGhpcy5pc0V4cCA9IGZhbHNlO1xuICAgICAgICAvLyBpZiB0cnVlLCBiaW5kaW5nIHRleHQgaXMgYSBsb2dpY2FsIGV4cHJlc3Npb25cbiAgICAgICAgdGhpcy5sb2dpY2FsID0gZmFsc2U7XG4gICAgICAgIC8vIGlmIHRydWUsIGJpbmRpbmcgdGV4dCBpcyBhIGFzc2lnbm1lbnQgZXhwcmVzc2lvblxuICAgICAgICB0aGlzLmFzc2lnbm1lbnQgPSBmYWxzZTtcbiAgICAgICAgLy8gaGFuZGxlciB0byB1cGRhdGUgdmlldyBmcm9tIG1vZGVsIHZhbHVlXG4gICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucyA9IFtdO1xuICAgIH1cblxuICAgIGNyZWF0ZUV4cHJlc3Npb24odGV4dCkge1xuICAgICAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb24odGV4dCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMucHVzaChleHApO1xuICAgICAgICByZXR1cm4gZXhwO1xuICAgIH1cblxuICAgIGNvbXBpbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvZ2ljYWwgfHwgdGhpcy5hc3NpZ25tZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlzRXhwID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzRXhwKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUV4cHJlc3Npb24odGhpcy50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gL3t7KFtefV0qKX19L2c7XG4gICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgICAgICAgICB2YXIgc2VnbWVudCwgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy50ZXh0KTtcblxuICAgICAgICAgICAgd2hpbGUgKG1hdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2guaW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudCA9IHRoaXMudGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2godGhpcy5jcmVhdGVFeHByZXNzaW9uKG1hdGNoWzFdKSk7XG5cbiAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0aGlzLnRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0Lmxlbmd0aCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSB0aGlzLnRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGluaygpIHtcbiAgICAgICAgaWYgKHRoaXMuYXNzaWdubWVudCB8fCB0aGlzLmxvZ2ljYWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGV0ZWN0KCk7XG5cbiAgICAgICAgdGhpcy5leHByZXNzaW9ucy5mb3JFYWNoKGV4cCA9PiB7XG4gICAgICAgICAgICBleHAud2F0Y2godGhpcy5zY29wZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXRjaCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5sb2NhbHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMuY29tcHV0ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXQgdmFsdWVcbiAgICBjb21wdXRlKGxvY2Fscykge1xuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLmxvY2FscywgbG9jYWxzKTtcblxuICAgICAgICBpZiAodGhpcy5pc0V4cCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbnNbMF0uY29tcHV0ZSh0aGlzLnNjb3BlLCBsb2NhbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHMucmVkdWNlKChwcmV2LCBjdXIpID0+IHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjdXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXYgKyBjdXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpdCBpcyBhIGV4cHJlc3Npb25cbiAgICAgICAgICAgIHJldHVybiBwcmV2ICsgKGN1ci5jb21wdXRlKHRoaXMuc2NvcGUsIGxvY2FscykgfHwgJycpO1xuICAgICAgICB9LCAnJyk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlXG4gICAgYXNzaWduKHZhbHVlLCBsb2NhbHMpIHtcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy5sb2NhbHMsIGxvY2Fscyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFeHApIHtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNbMF0uYXNzaWduKHRoaXMuc2NvcGUsIHZhbHVlLCBsb2NhbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudGV4dCArICcgaXMgbm90IHZhbGlkIGV4cHJlc3Npb24nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyQXV0b21hdGlvbihhdXRvbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IGF1dG9tYXRpb247XG4gICAgfVxuXG4gICAgdW5yZWdpc3RlckF1dG9tYXRpb24oYXV0b21hdGlvbikge1xuICAgICAgICBpZiAodGhpcy5hdXRvbWF0aW9uID09PSBhdXRvbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9tYXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbW9kaWZ5IHZpZXcgYWNjb3JkaW5nIHRvIG1vZGVsXG4gICAgcGF0Y2goKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZWQgJiYgdGhpcy5hdXRvbWF0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hdXRvbWF0aW9uLmNhbGwodGhpcywgdGhpcy52YWx1ZSwgdGhpcy5vbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zLmZvckVhY2goZXhwID0+IHtcbiAgICAgICAgICAgIGV4cC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgRXhwcmVzc2lvbiB7XG4gICAgY29uc3RydWN0b3IodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBudWxsO1xuICAgICAgICB0aGlzLmhhc1RyYW5zbGF0aW9uID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlXG4gICAgY29tcHV0ZShzY29wZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiBzY29wZS4kZXZhbCh0aGlzLnRleHQsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlXG4gICAgYXNzaWduKHNjb3BlLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHNjb3BlLiRhc3NpZ24odGhpcy50ZXh0LCB2YWx1ZSwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICB3YXRjaChzY29wZSwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IHNjb3BlLiR3YXRjaCh0aGlzLnRleHQsIGhhbmRsZXIsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYodGhpcy51bndhdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudW53YXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL2V4cHJlc3Npb24nO1xuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcic7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5pbXBvcnQgeyBpc1ZUZXh0LCBpc1ZDb21tZW50LCBpc1ZFbG0gfSBmcm9tICcuLi90cGwnO1xuaW1wb3J0IHsgTG9jYWwgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xuaW1wb3J0IHsgTV9DTVBfQ0xBU1MgfSBmcm9tICcuLi9jc3MnO1xuaW1wb3J0IHsgU2luZ2xlTm9kZVZpZXcsIE11bHRpcGxlTm9kZVZpZXcgfSBmcm9tICcuL3ZpZXcnO1xuXG4vLyBXaW5kb3cgRXZlbnRzXG4vLyBjYXNlICdvbi1sb2FkJzpcbi8vIGNhc2UgJ29uLXVubG9hZCc6XG4vLyBGb3JtIEVsZW1lbnQgRXZlbnRzXG4vLyBjYXNlICdvbi1jaGFuZ2UnOlxuLy8gY2FzZSAnb24tc3VibWl0Jzpcbi8vIGNhc2UgJ29uLXJlc2V0Jzpcbi8vIGNhc2UgJ29uLXNlbGVjdCc6XG4vLyBjYXNlICdvbi1ibHVyJzpcbi8vIGNhc2UgJ29uLWZvY3VzJzpcbi8vIEltYWdlIEV2ZW50c1xuLy8gY2FzZSAnb24tYWJvcnQnOlxuLy8gS2V5Ym9hcmQgRXZlbnRzXG4vLyBjYXNlICdvbi1rZXlkb3duJzpcbi8vIGNhc2UgJ29uLWtleXByZXNzJzpcbi8vIGNhc2UgJ29uLWtleXVwJzpcbi8vIE1vdXNlIEV2ZW50c1xuLy8gY2FzZSAnb24tY2xpY2snOlxuLy8gY2FzZSAnb24tZGJsY2xpY2snOlxuLy8gY2FzZSAnb24tbW91c2Vkb3duJzpcbi8vIGNhc2UgJ29uLW1vdXNlbW92ZSc6XG4vLyBjYXNlICdvbi1tb3VzZW91dCc6XG4vLyBjYXNlICdvbi1tb3VzZW92ZXInOlxuLy8gY2FzZSAnb24tbW91c2V1cCc6XG52YXIgZXZlbnRUZXh0ID0gJ2xvYWQgdW5sb2FkIGNoYW5nZSBzdWJtaXQgcmVzZXQgc2VsZWN0IGJsdXIgZm9jdXMgYWJvcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwJztcbnZhciBkb21FdmVudHMgPSBldmVudFRleHQuc3BsaXQoJyAnKTtcblxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICBnZXQgaW5qZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLiRpbmplY3RvcjtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgbG9jYWxzKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XG4gICAgICAgIHRoaXMucGFyc2VyID0gc2NvcGUuJHBhcnNlcjtcbiAgICAgICAgdGhpcy52aWV3ID0gbnVsbDtcbiAgICB9XG5cbiAgICBuZXdCaW5kaW5nKHRleHQpIHtcbiAgICAgICAgdmFyIGJpbmRpbmcgPSBuZXcgQmluZGluZyh0aGlzLnNjb3BlLCB0ZXh0LCB0aGlzLmxvY2Fscyk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kaW5ncy5wdXNoKGJpbmRpbmcpO1xuICAgICAgICByZXR1cm4gYmluZGluZztcbiAgICB9XG5cbiAgICBuZXdDb21wb25lbnQoY2xzKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMuaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGNscyk7XG5cbiAgICAgICAgdGhpcy5zY29wZS4kYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB0aGlzLnZpZXcuY29tcG9uZW50cy5wdXNoKGNoaWxkKTtcblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgbmV3RGlyZWN0aXZlKGNscykge1xuICAgICAgICB2YXIgZGlyZWN0aXZlID0gdGhpcy5pbmplY3Rvci5jcmVhdGVEaXJlY3RpdmUoY2xzKTtcblxuICAgICAgICBkaXJlY3RpdmUuJCRzY29wZSA9IHRoaXMuc2NvcGU7XG5cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICB9XG5cbiAgICByZWNvZ25pemVDb21wb25lbnQodmVsbSkge1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5wYXJzZXIucmVzb2x2ZUNvbXBvbmVudCh2ZWxtLm5vZGVOYW1lKTtcblxuICAgICAgICAvLyB2ZWxtLm5vZGVEYXRhLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmVjb2duaXplRGlyZWN0aXZlKHZhdHRyKSB7XG4gICAgICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLnBhcnNlci5yZXNvbHZlRGlyZWN0aXZlKHZhdHRyLm5vZGVEYXRhLm5hbWUpO1xuXG4gICAgICAgIC8vIHZhdHRyLm5vZGVEYXRhLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuXG4gICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgfVxuXG4gICAgcmVuZGVyKHRlbXBsYXRlLCBjb250YWluZXIpIHtcbiAgICAgICAgdmFyIGhhc0NvbnRhaW5lciA9IGNvbnRhaW5lciAhPSBudWxsO1xuXG4gICAgICAgIGlmKGhhc0NvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy52aWV3ID0gbmV3IFNpbmdsZU5vZGVWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBtdXN0IHNldCBhIHJvb3QgZWxlbWVudCBmb3IgZGlyZWN0aXZlIGxpZmUgY3ljbGUgXCJhZnRlckxpbmtcIiBob29wc1xuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgdGhpcy52aWV3ID0gbmV3IE11bHRpcGxlTm9kZVZpZXcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmlldy52bm9kZXMgPSB0aGlzLnBhcnNlci5wYXJzZVRlbXBsYXRlKHRlbXBsYXRlKTtcblxuICAgICAgICB0aGlzLmNvbXBpbGVOb2Rlcyh0aGlzLnZpZXcudm5vZGVzKTtcblxuICAgICAgICAvLyB0aGlzLmVudGl0eS5kaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS4kcHJlbGluaygpKTtcblxuICAgICAgICB0aGlzLmxpbmtOb2Rlcyh0aGlzLnZpZXcudm5vZGVzKS5mb3JFYWNoKG5vZGUgPT4gY29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpKTtcblxuICAgICAgICAvLyBjYWxsIGRpcmVjdGl2ZSBsaWZlIGN5Y2xlIGhvb3BzXG4gICAgICAgIHRoaXMudmlldy5kaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS4kcG9zdGxpbmsoKSk7XG5cbiAgICAgICAgaWYoaGFzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcubm9kZSA9IGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNhY2hlIHRoZSBnZW5lcmF0ZWQgZWxlbWVudHNcbiAgICAgICAgICAgIGRvbS5nZXRDaGlsZHJlbk9mRWxlbWVudChjb250YWluZXIpLmZvckVhY2gobm9kZSA9PiB0aGlzLnZpZXcubm9kZXMucHVzaChub2RlKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy52aWV3O1xuICAgIH1cblxuICAgIGNvbXBpbGVOb2Rlcyh2bm9kZXMpIHtcbiAgICAgICAgdm5vZGVzLmZvckVhY2godm5vZGUgPT4gdGhpcy5jb21waWxlTm9kZSh2bm9kZSkpO1xuICAgIH1cblxuICAgIGNvbXBpbGVOb2RlKHZub2RlKSB7XG4gICAgICAgIGlmIChpc1ZUZXh0KHZub2RlKSkge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlVGV4dCh2bm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpc1ZDb21tZW50KHZub2RlKSl7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVDb21tZW50KHZub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUVsbSh2bm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rTm9kZXModm5vZGVzKSB7XG4gICAgICAgIHJldHVybiB2bm9kZXMubWFwKHZub2RlID0+IHRoaXMubGlua05vZGUodm5vZGUpKTtcbiAgICB9XG5cbiAgICBsaW5rTm9kZSh2bm9kZSkge1xuICAgICAgICBpZiAoaXNWVGV4dCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtUZXh0KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzVkNvbW1lbnQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rQ29tbWVudCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5saW5rRWxtKHZub2RlKTtcbiAgICB9XG5cbiAgICBjb21waWxlRWxtKHZlbG0pIHtcbiAgICAgICAgdmFyIGVsbURhdGEgPSB2ZWxtLm5vZGVEYXRhO1xuXG4gICAgICAgIGVsbURhdGEuY29tcG9uZW50ID0gdGhpcy5yZWNvZ25pemVDb21wb25lbnQodmVsbSk7XG5cbiAgICAgICAgdmFyIGRpcmVjdGl2ZXMgPSBbXTtcbiAgICAgICAgdmFyIGN1c3RvbUxpbmtlciA9IHZlbG0udmF0dHJzLnNvbWUodmF0dHIgPT4ge1xuICAgICAgICAgICAgdmFyIGF0dHJEYXRhID0gdmF0dHIubm9kZURhdGE7XG5cbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUF0dHIodmF0dHIpO1xuXG4gICAgICAgICAgICBpZiAoYXR0ckRhdGEuZGlyZWN0aXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzLnB1c2goYXR0ckRhdGEuZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICBlbG1EYXRhLmxpbmtlciA9IGF0dHJEYXRhLmxpbmtlcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtRGF0YS5saW5rZXIgIT0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzb3J0IGRpcmVjdGl2ZSBhY2NvcmRpbmcgdG8gaXRzIHByaW9yaXR5XG4gICAgICAgIHV0aWxzLm9yZGVyQnkoZGlyZWN0aXZlcywgZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS4kcHJpb3JpdHkpLmZvckVhY2goZGlyZWN0aXZlID0+IHRoaXMudmlldy5kaXJlY3RpdmVzLnB1c2goZGlyZWN0aXZlKSk7XG5cbiAgICAgICAgZWxtRGF0YS5kaXJlY3RpdmVzID0gZGlyZWN0aXZlcztcblxuICAgICAgICAvLyBkaXJlY3RpdmUgZGVmaW5lcyBjdXN0b20gbGlua2VyIGZvciB0aGlzIHZpcnR1YWwgbm9kZSwgcmVuZGVyIGVuZ2luZSB3aWxsIG5vdCByZW5kZXIgaXQgYWNjb3JkaW5nIHRvIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgaWYgKGN1c3RvbUxpbmtlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsbURhdGEuY29tcG9uZW50KSB7XG4gICAgICAgICAgICBlbG1EYXRhLnNsb3RzID0gdGhpcy5zZWVrU2xvdCh2ZWxtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZU5vZGVzKHZlbG0uY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21waWxlQXR0cih2YXR0cikge1xuICAgICAgICB2YXIgYXR0ck5hbWUgPSB2YXR0ci5ub2RlTmFtZSwgYXR0clZhbHVlID0gdmF0dHIubm9kZVZhbHVlLFxuICAgICAgICAgICAgYXR0ckRhdGEgPSB2YXR0ci5ub2RlRGF0YSwgYmluZGluZztcblxuICAgICAgICBpZihhdHRyVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgYmluZGluZyA9IHRoaXMubmV3QmluZGluZyhhdHRyVmFsdWUpO1xuICAgICAgICAgICAgYXR0ckRhdGEuYmluZGluZyA9IGJpbmRpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnQCcpKSB7XG4gICAgICAgICAgICBhdHRyRGF0YS5pc0V2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGF0dHJEYXRhLm5hbWUgPSBhdHRyTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBhdHRyRGF0YS5pc0RvbUV2ZW50ID0gdXRpbHMuc29tZShkb21FdmVudHMsIGUgPT4gZSA9PT0gYXR0ckRhdGEubmFtZSk7XG4gICAgICAgICAgICBiaW5kaW5nICYmIChiaW5kaW5nLmxvZ2ljYWwgPSB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCc6JykpIHtcbiAgICAgICAgICAgIGF0dHJEYXRhLm5hbWUgPSBhdHRyTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBiaW5kaW5nICYmIChiaW5kaW5nLmlzRXhwID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnKicpKSB7XG4gICAgICAgICAgICBhdHRyRGF0YS5kaXJlY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYXR0ckRhdGEubmFtZSA9IGF0dHJOYW1lLnN1YnN0cigxKTtcbiAgICAgICAgICAgIGJpbmRpbmcgJiYgKGJpbmRpbmcuaXNFeHAgPSB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dHJEYXRhLm5hbWUgPSBhdHRyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRyRGF0YS5kaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLnJlY29nbml6ZURpcmVjdGl2ZSh2YXR0cik7XG5cbiAgICAgICAgICAgIGlmIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBhdHRyRGF0YS5kaXJlY3RpdmUgPSB0aGlzLm5ld0RpcmVjdGl2ZShkaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgIGF0dHJEYXRhLmRpcmVjdGl2ZS4kJHZhdHRyID0gdmF0dHI7XG5cbiAgICAgICAgICAgICAgICBpZihiaW5kaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZy5hc3NpZ25tZW50ID0gYXR0ckRhdGEuZGlyZWN0aXZlLiRhc3NpZ25tZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhdHRyRGF0YS5kaXJlY3RpdmUuJGNvbXBpbGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRyRGF0YS5saW5rZXIgPSBhdHRyRGF0YS5kaXJlY3RpdmU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpcmVjdGl2ZSAnICsgYXR0ckRhdGEubmFtZSArICcgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGJpbmRpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEoYXR0ckRhdGEuaXNFdmVudCB8fCBhdHRyRGF0YS5kaXJlY3RpdmUpKSB7XG4gICAgICAgICAgICB2YXIgc2V0SHRtbEF0dHIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxtID0gdmF0dHIudmVsbS5lbG07XG5cbiAgICAgICAgICAgICAgICBpZiAoYXR0ckRhdGEubmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KGVsbSwgYXR0ckRhdGEubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShhdHRyRGF0YS5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHZhdHRyLnZlbG0ubm9kZURhdGEuY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnQgPSB2YXR0ci52ZWxtLm5vZGVEYXRhLmNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5TmFtZSA9IHV0aWxzLmNvbnZlcnRUb0h1bXBOYW1lKGF0dHJEYXRhLm5hbWUsICctJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC4kaGFzUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LiRzZXRQcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEh0bWxBdHRyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oc2V0SHRtbEF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYmluZGluZy5jb21waWxlKCk7XG4gICAgfVxuXG4gICAgY29tcGlsZVRleHQodnRleHQpIHtcbiAgICAgICAgdnRleHQubm9kZURhdGEuYmluZGluZyA9IHRoaXMubmV3QmluZGluZyh2dGV4dC5ub2RlVmFsdWUpO1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBlbG0sIG5ld1RleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodnRleHQucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZ0ZXh0LmVsbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbSA9IHZ0ZXh0LmVsbS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsbSA9IHZ0ZXh0LnBhcmVudE5vZGUuZWxtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodnRleHQuZWxtID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLmFwcGVuZENoaWxkKG5ld1RleHROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbS5yZXBsYWNlRWxlbWVudCh2dGV4dC5lbG0sIG5ld1RleHROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZ0ZXh0LmVsbSA9IG5ld1RleHROb2RlO1xuICAgICAgICB9KTtcbiAgICAgICAgdnRleHQubm9kZURhdGEuYmluZGluZy5jb21waWxlKCk7XG4gICAgfVxuXG4gICAgY29tcGlsZUNvbW1lbnQodmNtbnQpIHtcblxuICAgIH1cblxuICAgIGxpbmtFbG0odmVsbSkge1xuICAgICAgICB2YXIgZWxtRGF0YSA9IHZlbG0ubm9kZURhdGE7XG5cbiAgICAgICAgaWYgKGVsbURhdGEubGlua2VyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBlbG1EYXRhLmxpbmtlci4kbGluaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmVsbS5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZlbG0ubm9kZU5hbWUpO1xuXG4gICAgICAgIGlmIChlbG1EYXRhLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5uZXdDb21wb25lbnQoZWxtRGF0YS5jb21wb25lbnQpO1xuXG4gICAgICAgICAgICBlbG1EYXRhLmNvbXBvbmVudCA9IGluc3RhbmNlO1xuXG4gICAgICAgICAgICBkb20uYWRkQ2xhc3ModmVsbS5lbG0sIE1fQ01QX0NMQVNTKTtcblxuICAgICAgICAgICAgdmVsbS52YXR0cnMuZm9yRWFjaCh2YXR0ciA9PiB0aGlzLmxpbmtBdHRyKHZhdHRyKSk7XG5cbiAgICAgICAgICAgIGluc3RhbmNlLiQkdmVsbSA9IHZlbG07XG4gICAgICAgICAgICBpbnN0YW5jZS4kc2VyQ29udGFpbmVyKHZlbG0uZWxtKTtcbiAgICAgICAgICAgIGluc3RhbmNlLiRzZXRTbG90KGVsbURhdGEuc2xvdHMpO1xuICAgICAgICAgICAgaW5zdGFuY2UuJHJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmVsbS52YXR0cnMuZm9yRWFjaCh2YXR0ciA9PiB0aGlzLmxpbmtBdHRyKHZhdHRyKSk7XG4gICAgICAgICAgICB2ZWxtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB2ZWxtLmVsbS5hcHBlbmRDaGlsZCh0aGlzLmxpbmtOb2RlKGNoaWxkKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlbG0uZWxtO1xuICAgIH1cblxuICAgIGxpbmtBdHRyKHZhdHRyKSB7XG4gICAgICAgIHZhciB2ZWxtID0gdmF0dHIudmVsbSxcbiAgICAgICAgICAgIGVsbSA9IHZlbG0uZWxtLFxuICAgICAgICAgICAgYXR0ckRhdGEgPSB2YXR0ci5ub2RlRGF0YSxcbiAgICAgICAgICAgIGJpbmRpbmcgPSBhdHRyRGF0YS5iaW5kaW5nO1xuXG4gICAgICAgIGlmKGJpbmRpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0dHJEYXRhLmlzRXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChhdHRyRGF0YS5pc0RvbUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoYXR0ckRhdGEubmFtZSwgZSA9PiBiaW5kaW5nLmNvbXB1dGUobmV3IExvY2FsKGUsIGVsbSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZlbG0ubm9kZURhdGEuY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IHV0aWxzLmNvbnZlcnRUb0h1bXBOYW1lKGF0dHJEYXRhLm5hbWUsICctJyk7XG4gICAgICAgICAgICAgICAgdmVsbS5ub2RlRGF0YS5jb21wb25lbnQuJGJpbmQoZXZlbnROYW1lLCBlID0+IGJpbmRpbmcuY29tcHV0ZShuZXcgTG9jYWwoZSwgZWxtKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYmluZGluZy5saW5rKCk7XG4gICAgICAgICAgICBiaW5kaW5nLnBhdGNoKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZWdpc3RlciBiaW5kaW5nIGNoYW5nZSBoYW5kbGVyIGFmdGVyIGZpcnN0IHBhdGNoXG4gICAgICAgIGlmKGF0dHJEYXRhLmRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4gYXR0ckRhdGEuZGlyZWN0aXZlLiRjaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rVGV4dCh2dGV4dCkge1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLmxpbmsoKTtcbiAgICAgICAgdnRleHQuZWxtID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodnRleHQubm9kZURhdGEuYmluZGluZy52YWx1ZSk7XG4gICAgICAgIHJldHVybiB2dGV4dC5lbG07XG4gICAgfVxuXG4gICAgbGlua0NvbW1lbnQodmNtbnQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodmNtbnQubm9kZVZhbHVlKTtcbiAgICB9XG5cbiAgICBzZWVrU2xvdCh2ZWxtKSB7XG4gICAgICAgIHZhciBzbG90cyA9IHt9O1xuXG4gICAgICAgIHZlbG0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGlmKGlzVkVsbShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xvdCA9IGNoaWxkLmdldEF0dHIoJ3Nsb3QnKTtcblxuICAgICAgICAgICAgICAgIGlmKHNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xvdHNbc2xvdC5ub2RlVmFsdWVdID0gY2hpbGQuZ2V0SW5uZXJUcGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAgc2xvdHM7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmNsYXNzIFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy52bm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmJpbmRpbmdzID0gW107XHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVzID0gW107XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbW91bnQoc2VsZWN0b3JPckVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgZWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYmluZFRyYW5zbGF0ZUNoYW5nZWQoKSB7XHJcbiAgICAvLyAgICAgdmFyIGJpbmRpbmdzID0gdGhpcy5lbnRpdHkuYmluZGluZ3M7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGlmKCFiaW5kaW5ncy5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgLy8gdXBkYXRlIHRleHQgd2hpbGUgdHJhbnNsYXRlIGNoYW5nZWRcclxuICAgIC8vICAgICB0aGlzLnVuYmluZFRyYW5zbGF0ZUNoYW5nZWQgPSBldmVudHMudHJhbnNsYXRlQ2hhbmdlZC5vbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGJpbmRpbmdzLmZvckVhY2goYmluZGluZyA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBiaW5kaW5nLmRldGVjdCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgYmluZGluZy5wYXRjaCgpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS4kZGVzdHJveSgpKTtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uJGRlc3Ryb3koKSk7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5ncy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5kZXN0cm95KCkpO1xyXG4gICAgICAgIHRoaXMudm5vZGVzLmZvckVhY2goaXRlbSA9PiBpdGVtLmRlc3Ryb3koKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuYmluZGluZ3MubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnZub2Rlcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2luZ2xlTm9kZVZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuICAgIGdldCBjb250ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5vZGUgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVOb2RlVmlldyBleHRlbmRzIFZpZXcge1xyXG4gICAgZ2V0IGNvbnRlbnQoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKG5vZGUgPT4gY29udGVudC5hcHBlbmRDaGlsZChub2RlKSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubm9kZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi90cGwtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vdHBsLWJ1aWxkZXInOyIsImV4cG9ydCAqIGZyb20gJy4vdm5vZGUnO1xuZXhwb3J0ICogZnJvbSAnLi92YXR0cic7XG5leHBvcnQgKiBmcm9tICcuL3ZjbW50JztcbmV4cG9ydCAqIGZyb20gJy4vdmVsbSc7XG5leHBvcnQgKiBmcm9tICcuL3Z0ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vdnR5cGUnOyIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuXG5leHBvcnQgY2xhc3MgVkF0dHIgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUuYXR0cmlidXRlLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMudmVsbSA9IG51bGw7XG4gICAgICAgIHRoaXMucXVvdGUgPSAnXCInO1xuICAgIH1cblxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgb25DbG9uZU5vZGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVkF0dHIodGhpcy5ub2RlTmFtZSwgdGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuXG5leHBvcnQgY2xhc3MgVkNtbnQgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUuY29tbWVudCwgJyNjb21tZW50JywgdmFsdWUpO1xuICAgIH1cblxuICAgIG9uQ2xvbmVOb2RlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZDbW50KHRoaXMubm9kZU5hbWUsIHRoaXMubm9kZVZhbHVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcbmltcG9ydCB7IFZBdHRyIH0gZnJvbSAnLi92YXR0cic7XG5pbXBvcnQgeyBwYXJzZVRwbCB9IGZyb20gJy4uL3RwbC1hcGknO1xuaW1wb3J0IHsgVHBsQnVpbGRlciB9IGZyb20gJy4uL3RwbC1idWlsZGVyJztcblxuZXhwb3J0IGNsYXNzIFZFbG0gZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5lbGVtZW50LCBuYW1lKTtcbiAgICAgICAgdGhpcy5lbG0gPSBudWxsO1xuICAgICAgICB0aGlzLnZhdHRycyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGZDbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IFRwbEJ1aWxkZXIoKTtcbiAgICB9XG5cbiAgICBwdXNoQXR0cihhdHRyKSB7XG4gICAgICAgIGF0dHIudmVsbSA9IHRoaXM7XG4gICAgICAgIHRoaXMudmF0dHJzLnB1c2goYXR0cik7XG4gICAgfVxuXG4gICAgaGFzQXR0cigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmF0dHJzLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBnZXRBdHRyKGtleSkge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHRoaXMudmF0dHJzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgcmV0dXJuIGF0dHIubm9kZU5hbWUgPT09IGtleTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF0Y2hlc1swXTtcbiAgICB9XG5cbiAgICBzZXRBdHRyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHRhcmdldCwgbWF0Y2hlcyA9IHRoaXMudmF0dHJzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gbWF0Y2hlc1swXTtcbiAgICAgICAgICAgIHRhcmdldC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBuZXcgVkF0dHIoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB0YXJnZXQudmVsbSA9IHRoaXM7XG4gICAgICAgICAgICB0YXJnZXQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmF0dHJzLnB1c2godGFyZ2V0KTtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJlbW92ZUF0dHIoa2V5KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBbXSwgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGtleSBpbnN0YW5jZW9mIFZBdHRyKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnZhdHRycy5pbmRleE9mKGtleSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi52YXR0cnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmF0dHJzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XG4gICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHNlbGYudmF0dHJzLmluZGV4T2YobWF0Y2gpO1xuICAgICAgICAgICAgICAgIG1hdGNoLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLnZhdHRycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Lmxlbmd0aCA+IDAgPyB0YXJnZXRbMF0gOiBudWxsO1xuICAgIH1cblxuICAgIGFwcGVuZEF0dHIoYXR0cikge1xuICAgICAgICBpZiAoYXR0ci52ZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkN1cnJlbnQgYXR0cmlidXRlIGlzIG5vdCBuZXchXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXR0ci52ZWxtID0gdGhpcztcbiAgICAgICAgYXR0ci5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLnZhdHRycy5wdXNoKGF0dHIpO1xuICAgICAgICByZXR1cm4gYXR0cjtcbiAgICB9XG5cbiAgICBnZXRPdXRlclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRlci5idWlsZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRJbm5lclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRlci5idWlsZChjaGlsZCk7XG4gICAgICAgIH0pLmpvaW4oJycpO1xuICAgIH1cblxuICAgIHNldE91dGVyVHBsKHRwbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHBhcnNlVHBsKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLCB2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZik7XG4gICAgfVxuXG4gICAgc2V0SW5uZXJUcGwodHBsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jbGVhckNoaWxkTm9kZXMoKTtcbiAgICAgICAgcGFyc2VUcGwodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLmFwcGVuZENoaWxkKHZub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbG9uZU5vZGUoKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IFZFbG0odGhpcy5ub2RlTmFtZSwgdGhpcy5ub2RlVmFsdWUpO1xuXG4gICAgICAgIG5vZGUudmF0dHJzID0gdGhpcy52YXR0cnMubWFwKGZ1bmN0aW9uICh2YXR0cikge1xuICAgICAgICAgICAgdmFyIGNvcHkgPSB2YXR0ci5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgIGNvcHkudmVsbSA9IG5vZGU7XG4gICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnZhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBhdHRyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52YXR0cnMubGVuZ3RoID0gMDtcbiAgICB9XG59IiwiZXhwb3J0IHZhciBub2RlVHlwZSA9IHtcbiAgICBlbGVtZW50OiAxLFxuICAgIGF0dHJpYnV0ZTogMixcbiAgICB0ZXh0OiAzLFxuICAgIGNkYXRhU2VjdGlvbjogNCxcbiAgICBlbnRpdHlSZWZlcmVuY2U6IDUsXG4gICAgZW50aXR5OiA2LFxuICAgIHByb2Nlc3NpbmdJbnN0cnVjdGlvbjogNyxcbiAgICBjb21tZW50OiA4LFxuICAgIGRvY3VtZW50OiA5LFxuICAgIGRvY3VtZW50VHlwZTogMTAsXG4gICAgZG9jdW1lbnRGcmFnbWVudDogMTEsXG4gICAgbm90YXRpb246IDEyXG59XG5cbi8vIHZpcnR1YWwgbm9kZVxuZXhwb3J0IGNsYXNzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLm5vZGVUeXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5ub2RlTmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubm9kZURhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBwdXNoQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICBidWlsZFNpYmxpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAoc2VsZi5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuYnVpbGRTaWJsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyUGFyZW50QW5kU2libGluZygpIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzQ2hpbGROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgY2xlYXJDaGlsZE5vZGVzKCkge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQubmV4dFNpYmxpbmcgPSBjaGlsZDtcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHRoaXMubGFzdENoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZDtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChyZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkO1xuICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBuZXdDaGlsZDtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMCwgbmV3Q2hpbGQpO1xuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuXG4gICAgaW5zZXJ0QWZ0ZXIocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChyZWZDaGlsZC5uZXh0U2libGluZyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUocmVmQ2hpbGQubmV4dFNpYmxpbmcsIG5ld0NoaWxkKTtcbiAgICB9XG5cbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3ZlIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcucHJldmlvdXNTaWJsaW5nID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIHJlcGxhY2VDaGlsZChyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgIGlmICh0aGlzLmZpcnN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICByZWZDaGlsZC5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSwgbmV3Q2hpbGQpO1xuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuXG4gICAgY2xvbmVOb2RlKGRlZXApIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLm9uQ2xvbmVOb2RlKGRlZXApO1xuXG4gICAgICAgIGlmKGRlZXApIHtcbiAgICAgICAgICAgIG5vZGUuY2hpbGROb2RlcyA9IHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLmNsb25lTm9kZShkZWVwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbm9kZS5idWlsZFNpYmxpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lckRvY3VtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBob29wc1xuXG4gICAgLy8gZW5kIG9mIGhvb3BzXG59XG4iLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZUZXh0IGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLnRleHQsICcjdGV4dCcsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5lbG0gPSBudWxsO1xuICAgIH1cblxuICAgIG9uQ2xvbmVOb2RlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZUZXh0KHRoaXMubm9kZU5hbWUsIHRoaXMubm9kZVZhbHVlKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWVHlwZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUuZG9jdW1lbnRUeXBlKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgVHBsTGV4ZXIgfSBmcm9tICcuL3RwbC1sZXhlcic7XG5pbXBvcnQgeyBUcGxQYXJzZXIgfSBmcm9tICcuL3RwbC1wYXJzZXInO1xuaW1wb3J0IHsgbm9kZVR5cGUgfSBmcm9tICcuL21vZGVsJztcblxuZnVuY3Rpb24gbGV4VHBsKHRwbCkge1xuICAgIHRwbCA9IHV0aWxzLmVzY2FwZUh0bWwodHBsKTtcbiAgICByZXR1cm4gbmV3IFRwbExleGVyKCkubGV4KHRwbCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHBsKHRwbCkge1xuICAgIHRwbCA9IHV0aWxzLmVzY2FwZUh0bWwodHBsKTtcbiAgICByZXR1cm4gbmV3IFRwbFBhcnNlcihuZXcgVHBsTGV4ZXIoKSkucGFyc2UodHBsKTtcbn1cblxuZnVuY3Rpb24gaXNWRWxtKHZub2RlKSB7XG4gICAgcmV0dXJuIHZub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZS5lbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1ZBdHRyKHZub2RlKSB7XG4gICAgcmV0dXJuIHZub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZS5hdHRyaWJ1dGU7XG59XG5cbmZ1bmN0aW9uIGlzVlRleHQodm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlLnRleHQ7XG59XG5cbmZ1bmN0aW9uIGlzVkNvbW1lbnQodm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlLmNvbW1lbnQ7XG59XG5cbmV4cG9ydCB7IGxleFRwbCwgcGFyc2VUcGwsIGlzVkVsbSwgaXNWQXR0ciwgaXNWVGV4dCwgaXNWQ29tbWVudCB9OyIsImltcG9ydCB7IGlzVlRleHQsIGlzVkNvbW1lbnQgfSBmcm9tICcuL3RwbC1hcGknXG5cbmV4cG9ydCBjbGFzcyBUcGxCdWlsZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIGJ1aWxkKHZub2RlKSB7XG4gICAgICAgIGlmIChpc1ZUZXh0KHZub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRUZXh0KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzVkNvbW1lbnQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZENvbW1lbnQodm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRFbGVtZW50KHZub2RlKTtcbiAgICB9XG5cbiAgICBidWlsZEVsZW1lbnQodmVsbSkge1xuICAgICAgICB2YXIgYXR0clRwbCA9IHZlbG0udmF0dHJzLm1hcCgodmF0dHIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEF0dHJpYnV0ZSh2YXR0cik7XG4gICAgICAgICAgICB9KS5qb2luKCcgJyksXG4gICAgICAgICAgICBjaGlsZFRwbCA9IHZlbG0uY2hpbGROb2Rlcy5tYXAoKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoY2hpbGQpO1xuICAgICAgICAgICAgfSkuam9pbignJyk7XG5cbiAgICAgICAgaWYoYXR0clRwbCkge1xuICAgICAgICAgICAgYXR0clRwbCA9ICcgJyArIGF0dHJUcGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHBsID0gJzwnICsgdmVsbS5ub2RlTmFtZSArIGF0dHJUcGwgKyAnPicgKyBjaGlsZFRwbDtcblxuICAgICAgICBpZiAoIXZlbG0uc2VsZkNsb3NlZCkge1xuICAgICAgICAgICAgdHBsICs9ICgnPC8nICsgdmVsbS5ub2RlTmFtZSArICc+Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHBsO1xuICAgIH1cblxuICAgIGJ1aWxkQXR0cmlidXRlKHZhdHRyKSB7XG4gICAgICAgIHJldHVybiB2YXR0ci5ub2RlTmFtZSArICh2YXR0ci5ub2RlVmFsdWUgPT0gbnVsbCA/ICcnIDogKCc9JyArIHZhdHRyLnF1b3RlICsgdmF0dHIubm9kZVZhbHVlICsgdmF0dHIucXVvdGUpKTtcbiAgICB9XG5cbiAgICBidWlsZFRleHQodnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHZ0ZXh0Lm5vZGVWYWx1ZTtcbiAgICB9XG5cbiAgICBidWlsZENvbW1lbnQodmNtbnQpIHtcbiAgICAgICAgcmV0dXJuIHZjbW50Lm5vZGVWYWx1ZTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi4vZXhwJztcblxuZXhwb3J0IGNsYXNzIFRwbExleGVyIGV4dGVuZHMgRXhwTGV4ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCkge1xuICAgICAgICByZXR1cm4gKCdhJyA8PSBjaCAmJiBjaCA8PSAneicgfHxcbiAgICAgICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcbiAgICAgICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyB8fFxuICAgICAgICAgICAgY2ggPT09ICdAJyB8fCBjaCA9PT0gJzonIHx8IGNoID09PSAnKicpO1xuICAgIH1cblxuICAgIGlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gsIGNwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy0nIHx8IGNoID09PSAnLic7XG4gICAgfVxuXG4gICAgZXhwZWN0U3RyaW5nKHN0cikge1xuICAgICAgICB2YXIgbnVtID0gc3RyLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDw9IHRoaXMudGV4dC5sZW5ndGgpID8gKHN0ciA9PT0gdGhpcy50ZXh0LnN1YnN0cih0aGlzLmluZGV4LCBudW0pKSA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGh0bWwgY29tbWVudCBcIjwhLS1jb21tZW50LS0+XCJcbiAgICByZWFkQ29tbWVudChiZWdpbiwgZW5kKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgICAgIHZhciByYXdTdHJpbmcgPSBiZWdpbjtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKGVuZCkpIHtcbiAgICAgICAgICAgICAgICByYXdTdHJpbmcgKz0gZW5kO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBjb21tZW50Jywgc3RhcnQpO1xuICAgIH1cblxuICAgIC8vIGh0bWwgdGV4dFxuICAgIHJlYWRUZXh0KCkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIGlmICgoY2ggPT09ICc8JyAmJiAodGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpIHx8IGNoMiA9PT0gJy8nKSkgfHwgdGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgdGV4dFRhZzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBodG1sIHRhZ1xuICAgIHJlYWRUYWcoYmVnaW4sIGVuZCwgY2xvc2luZywgZG9jdHlwZSkge1xuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGJlZ2luLCB0YWc6IHRydWUsIGNsb3Npbmc6IGNsb3NpbmcsIGJlZ2luOiB0cnVlLCBkb2N0eXBlOiBkb2N0eXBlIH0pO1xuICAgICAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcbiAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG5cbiAgICAgICAgICAgIGlmICghY2xvc2luZykge1xuICAgICAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gY2ggKyBjaDI7XG4gICAgICAgICAgICAgICAgaWYgKHN0ciA9PT0gJy8nICsgZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogc3RyLCB0YWc6IHRydWUsIGNsb3Npbmc6IHRydWUsIGVuZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBzdHIubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaCA9PT0gZW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlbmQsXG4gICAgICAgICAgICAgICAgICAgIHRhZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2luZzogISFkb2N0eXBlID8gdHJ1ZSA6IGNsb3NpbmcsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiAnPScsIGVxdWFsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXgodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSBbXTtcblxuICAgICAgICB2YXIgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICB2YXIgY2gzID0gdGhpcy5wZWVrKDIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRDb21tZW50KCc8IS0tJywgJy0tPicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc8JyAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwnLCAnPicsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8LycpICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPC8nLCAnPicsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhRE9DVFlQRScpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwhJywgJz4nLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignRE9DVFlQRSBpcyBub3QgYWxsb3dlZCcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBFeHBQYXJzZXIgfSBmcm9tICcuLi9leHAnO1xuaW1wb3J0IHtcbiAgICBWRWxtLCBWQXR0ciwgVlRleHQsIFZDbW50LCBWVHlwZVxufSBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGNsYXNzIFRwbFBhcnNlciBleHRlbmRzIEV4cFBhcnNlciB7XG4gICAgY29uc3RydWN0b3IobGV4ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIobGV4ZXIsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHBhcnNlKHRleHQpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XG5cbiAgICAgICAgdmFyIHJvb3QgPSBuZXcgVkVsbSgpO1xuICAgICAgICB2YXIgZG9jdHlwZSwgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi5kb2N0eXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRvY3R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3R5cGUgPSB0aGlzLmRvY3R5cGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKGRvY3R5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBvbmx5IGFsbG93IG9uZVwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgaXMgbm90IGFsbG93ZWRcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBWQ21udCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaChjb21tZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBWVGV4dCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKHRoaXMuZWxlbWVudCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcImltcG9zc2libGVcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcm9vdC5idWlsZFNpYmxpbmcoKTtcblxuICAgICAgICByZXR1cm4gcm9vdC5jaGlsZE5vZGVzO1xuICAgIH1cblxuICAgIGRvY3R5cGUoKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB2YXIgZG9jVHlwZSA9IG5ldyBWVHlwZSgpO1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgZG9jVHlwZS5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXR0cnMoZG9jVHlwZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgZG9jVHlwZS5jaGlsZE5vZGVzLnB1c2goYXR0cik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRvY1R5cGU7XG4gICAgfVxuXG4gICAgZWxlbWVudChwKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB2YXIgZWxlID0gbmV3IFZFbG0oKTtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGVsZS5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmF0dHJzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgZWxlLnB1c2hBdHRyKGF0dHIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICBlbGUuc2VsZkNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRFbGVtZW50cyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5wdXNoQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4gJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSB0b2tlbi50ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlO1xuICAgIH1cblxuICAgIGNoaWxkRWxlbWVudHMocCkge1xuICAgICAgICB2YXIgZWxlcyA9IFtdO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgVkNtbnQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKGNvbW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGV4dFRhZykge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFZUZXh0KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIGVsZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xuICAgICAgICAgICAgICAgIGVsZXMucHVzaCh0aGlzLmVsZW1lbnQocCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVzO1xuICAgIH1cblxuICAgIGF0dHJzKHApIHtcbiAgICAgICAgdmFyIGF0dHJzID0gW107XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYXR0ciA9IG5ldyBWQXR0cigpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIGF0dHIubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgIGF0dHIub3JpZ2luID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5lcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLmNvbnN0YW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyLm5vZGVWYWx1ZSA9IHRva2VuLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhdHRycy5wdXNoKGF0dHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF0dHJzO1xuICAgIH1cblxuICAgIGN1cnJlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICB9XG59IiwidmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuLy8gaXNcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGlzTWFwKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgTWFwO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc0JsYW5rT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIWdldFByb3RvdHlwZU9mKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc1JlZ0V4cCh2YWx1ZSkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbn1cblxuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuLy8gZW5kIG9mIGlzXG5cbi8vIHZhbHVlXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgcmV0dXJuIGlzTmFOKG4pID8gdmFsdWUgOiBuO1xufVxuXG5mdW5jdGlvbiBsb3dlcmNhc2Uoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9Mb3dlckNhc2UoKSA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gdXBwZXJjYXNlKHN0cmluZykge1xuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvVXBwZXJDYXNlKCkgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0h1bXBOYW1lKG5hbWUsIHNlcGFyYXRvciwgdXBwZXJjYXNlRmlyc3RMZXR0ZXIpIHtcbiAgICByZXR1cm4gbmFtZS5zcGxpdChzZXBhcmF0b3IpLm1hcChmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiAhdXBwZXJjYXNlRmlyc3RMZXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc3Vic3RyaW5nKDEpO1xuICAgIH0pLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RnJvbUh1bXBOYW1lKG5hbWUsIHNlcGFyYXRvciwgdXBwZXJjYXNlRmlyc3RMZXR0ZXIpIHtcbiAgICB2YXIgaSA9IDAsIG5ld05hbWUgPSAnJywgY2hhcjtcblxuICAgIHdoaWxlIChpIDwgbmFtZS5sZW5ndGgpIHtcbiAgICAgICAgY2hhciA9IG5hbWVbaV07XG5cbiAgICAgICAgaWYgKChpICE9PSAwIHx8IHVwcGVyY2FzZUZpcnN0TGV0dGVyKSAmJiAvW0EtWl0vLnRlc3QoY2hhcikpIHtcbiAgICAgICAgICAgIG5ld05hbWUgKz0gc2VwYXJhdG9yO1xuICAgICAgICAgICAgbmV3TmFtZSArPSBjaGFyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdOYW1lICs9IGNoYXI7XG4gICAgICAgIH1cblxuICAgICAgICBpKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld05hbWU7XG59XG4vLyBlbmQgaWYgdmFsdWVcblxuLy8gb2JqZWN0XG5mdW5jdGlvbiBjb3B5KCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIG9iakluZGV4ID0gMCwgb2JqID0gYXJndW1lbnRzW29iakluZGV4XSwgZmlsdGVyO1xuXG4gICAgaWYgKGlzQm9vbGVhbihvYmopKSB7XG4gICAgICAgIGRlZXAgPSBvYmo7XG4gICAgICAgIG9iakluZGV4Kys7XG4gICAgICAgIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF07XG4gICAgfVxuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiBvYmpJbmRleCArIDEpIHtcbiAgICAgICAgZmlsdGVyID0gYXJndW1lbnRzW29iakluZGV4ICsgMV07XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICB2YXIgbmV3QXJyID0gW107XG4gICAgICAgIG9iai5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsIHx8IGZpbHRlcihvYmosIGluZGV4LCBpdGVtKSkge1xuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGRlZXAgPyBjb3B5KGRlZXAsIGl0ZW0pIDogaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3QXJyO1xuICAgIH1cblxuICAgIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICAgIHZhciBuZXdPYmogPSBvYmplY3Qob2JqKTtcbiAgICAgICAgZm9yRWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwga2V5LCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXdPYmpba2V5XSA9IGRlZXAgPyBjb3B5KGRlZXAsIHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld09iajtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSBhcmd1bWVudHNbaW5kZXhdO1xuXG4gICAgaWYgKGlzQm9vbGVhbih0YXJnZXQpKSB7XG4gICAgICAgIGRlZXAgPSB0YXJnZXQ7XG4gICAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1srK2luZGV4XTtcbiAgICB9XG5cbiAgICBpZiAoZGVlcCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZSgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IHt9O1xuXG4gICAgaWYgKGlzQm9vbGVhbihhcmd1bWVudHNbaW5kZXhdKSkge1xuICAgICAgICBkZWVwID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBpZiAoZGVlcCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHBsYWluTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmICh0YXJnZXRba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0W2tleV0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIGVuZCBvZiBvYmplY3RcblxuLy8gaXRlcmF0b3JcbmZ1bmN0aW9uIGZvckVhY2godGFyZ2V0LCBhY3Rpb24pIHtcbiAgICBpZiAoaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgIHRhcmdldC5mb3JFYWNoKGFjdGlvbik7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbih0YXJnZXRba2V5XSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc29tZSh0YXJnZXQsIGZ1bmMpIHtcbiAgICBpZiAoaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQuc29tZShmdW5jKTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZnVuYyh0YXJnZXRba2V5XSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBlbmQgb2YgaXRlcmF0b3JcblxuLy8gYXJyYXlcbmZ1bmN0aW9uIG9yZGVyQnkobGlzdCwgZ2V0dGVyKSB7XG4gICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XG4gICAgfTtcblxuICAgIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGdldFZhbHVlKGEpIDwgZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPiBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG9yZGVyQnlEZXNjZW5kaW5nKGxpc3QsIGdldHRlcikge1xuICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChnZXR0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0dGVyKGl0ZW0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPiBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjb25jYXQoKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShsaXN0LCB2YWx1ZSkge1xuICAgIHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cbi8vIGVuZCBvZiBhcnJheVxuXG5mdW5jdGlvbiBvYmplY3Qobykge1xuICAgIGZ1bmN0aW9uIEYoKSB7XG4gICAgfVxuXG4gICAgRi5wcm90b3R5cGUgPSBvO1xuICAgIHJldHVybiBuZXcgRigpO1xufVxuXG5mdW5jdGlvbiBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSkge1xuICAgIHZhciBwcm90b3R5cGUgPSBvYmplY3Qoc3VwZXJUeXBlLnByb3RvdHlwZSk7XG4gICAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViVHlwZTtcbiAgICBzdWJUeXBlLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbn1cblxuZnVuY3Rpb24gaW5oZXJpdChzdWJUeXBlLCBzdXBlclR5cGUpIHtcbiAgICBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSk7XG4gICAgc3ViVHlwZS5zdXBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3VwZXJUeXBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaGFzUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgIHZhciBrZXksIGtleXMgPSBwcm9wZXJ0eS5zcGxpdCgnLicpO1xuXG4gICAgd2hpbGUgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICBpZiAoIWlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0W2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzT2JqZWN0KHRhcmdldCkgJiYgdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleXMuc2hpZnQoKSk7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHtcbiAgICB2YXIga2V5LCBrZXlzID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcblxuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYoIWlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0W2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gc2V0UHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICB2YXIga2V5LCBrZXlzID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcblxuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYgKCFpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldFtrZXldO1xuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdCgpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoLCBtYXRjaFRleHQsIGluZGV4LCByZXN1bHQgPSAnJywgdGV4dCA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgcGF0dGVybiA9IC9cXHsoXFxkKylcXH0vZywgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG5cbiAgICB3aGlsZSAobWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCkpIHtcbiAgICAgICAgbWF0Y2hUZXh0ID0gbWF0Y2hbMF07XG4gICAgICAgIGluZGV4ID0gTnVtYmVyLnBhcnNlSW50KG1hdGNoWzFdKSArIDE7XG5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gaW5kZXgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZm9ybWF0IGl0ZW0gJyArIGluZGV4ICsgJ2lzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgKz0gdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleCkgKyBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwoaHRtbCkge1xuICAgIHJldHVybiBodG1sLnJlcGxhY2UoLyZndDsvZywgJz4nKS5yZXBsYWNlKC8mbHQ7L2csICc8JykucmVwbGFjZSgvJmFtcDsvZywgJyYnKS5yZXBsYWNlKC8mcXVvdGU7L2csICcnKTtcbn1cblxuZXhwb3J0IHtcbiAgICBpc1VuZGVmaW5lZCxcbiAgICBpc0RlZmluZWQsXG4gICAgaXNPYmplY3QsXG4gICAgaXNCbGFua09iamVjdCxcbiAgICBpc051bWJlcixcbiAgICBpc0RhdGUsXG4gICAgaXNGdW5jdGlvbixcbiAgICBpc1JlZ0V4cCxcbiAgICBpc0Jvb2xlYW4sXG4gICAgaXNBcnJheSxcbiAgICBpc1N0cmluZyxcbiAgICBpc0Zvcm1EYXRhLFxuICAgIHRvTnVtYmVyLFxuICAgIGxvd2VyY2FzZSxcbiAgICB1cHBlcmNhc2UsXG4gICAgY29udmVydFRvSHVtcE5hbWUsXG4gICAgY29udmVydEZyb21IdW1wTmFtZSxcbiAgICBjb3B5LFxuICAgIGV4dGVuZCxcbiAgICBtZXJnZSxcbiAgICBmb3JFYWNoLFxuICAgIHNvbWUsXG4gICAgcmVtb3ZlLFxuICAgIGNvbmNhdCxcbiAgICBvcmRlckJ5LFxuICAgIG9yZGVyQnlEZXNjZW5kaW5nLFxuICAgIG9iamVjdCxcbiAgICBpbmhlcml0LFxuICAgIGhhc1Byb3BlcnR5LFxuICAgIGdldFByb3BlcnR5LFxuICAgIHNldFByb3BlcnR5LFxuICAgIGZvcm1hdCxcbiAgICBlc2NhcGVIdG1sXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5pbXBvcnQgeyBNX0NNUF9DTEFTUyB9IGZyb20gJy4uL2Nzcyc7XG5pbXBvcnQgeyBpc01lc3NhZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7IE9ic2VydmVyLCBoYW5kbGVyIH0gZnJvbSAnLi4vb2JzZXJ2ZXInO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9yZW5kZXInO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcbmltcG9ydCB7IEV2YWx1YXRvciB9IGZyb20gJy4uL2V4cCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRDb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy4kJHZlbG0gPSBudWxsO1xuICAgIHRoaXMuJCRwYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuJCRjaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuJCRtYWluVmlldyA9IG51bGw7XG4gICAgdGhpcy4kcGFyc2VyID0gbmV3IFBhcnNlcih0aGlzKTtcbiAgICB0aGlzLiRvYnNlcnZlciA9IG5ldyBPYnNlcnZlcih0aGlzKTtcbiAgICB0aGlzLiRkYXRhID0gdXRpbHMubWVyZ2UodGhpcy4kJG1ldGFkYXRhLCBkYXRhKTtcbiAgICB0aGlzLiRjb250YWluZXIgPSB0aGlzLiRtYWtlQ29udGFpbmVyKCk7XG4gICAgdGhpcy5zbG90cyA9IHt9O1xuICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgdGhpcy5wcm9wcyA9IHRoaXMuJGRlbGVnYXRlKHt9KTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy4kZGVsZWdhdGUoe30pO1xuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJGRhdGEpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICBnZXQgJGluamVjdG9yKCkge1xuICAgICAgICByZXR1cm4gaW5qZWN0b3I7XG4gICAgfVxuXG4gICAgJGRlbGVnYXRlKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHRhcmdldCwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgJHNldFNsb3Qoc2xvdHMpIHtcbiAgICAgICAgdGhpcy5zbG90cyA9IHNsb3RzIHx8IHt9O1xuICAgIH1cblxuICAgICRzZXJDb250YWluZXIoZWxtKSB7XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lciA9IGVsbTtcbiAgICB9XG5cbiAgICAkc2V0U3RhdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuJGRlbGVnYXRlKHN0YXRlKTtcbiAgICB9XG5cbiAgICAkc2V0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHRoaXMuJGRlbGVnYXRlKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGNvbXBvbmVudENvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgfVxuXG4gICAgJG1ha2VDb250YWluZXIoKSB7XG4gICAgICAgIHZhciBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHV0aWxzLmNvbnZlcnRGcm9tSHVtcE5hbWUodGhpcy4kZGF0YS5rZXksICctJykpO1xuICAgICAgICBkb20uYWRkQ2xhc3MoZWxtLCBNX0NNUF9DTEFTUyk7XG4gICAgICAgIHJldHVybiBlbG07XG4gICAgfVxuXG4gICAgJGhhc1Byb3BlcnR5KGtleSkge1xuICAgICAgICByZXR1cm4gdXRpbHMuaGFzUHJvcGVydHkodGhpcy5wcm9wcywga2V5KTtcbiAgICB9XG5cbiAgICAkZ2V0UHJvcGVydHkoa2V5KSB7XG4gICAgICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLnByb3BzLCBrZXkpO1xuICAgIH1cblxuICAgICRzZXRQcm9wZXJ0eShrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMucHJvcHMsIGtleSk7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5wcm9wcywga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2VkICYmIHRoaXMub25Qcm9wZXJ0eUNoYW5nZWQoa2V5LCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGhhc01lc3NhZ2Uoa2V5KSB7XG4gICAgICAgIHJldHVybiB1dGlscy5oYXNQcm9wZXJ0eSh0aGlzLmV2ZW50cywga2V5KTtcbiAgICB9XG5cbiAgICAkYmluZChrZXksIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLmV2ZW50cywga2V5KTtcblxuICAgICAgICBpZiAoaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICBtZXNzYWdlLm9uKGhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnXCJ7MH1cIiBpcyBub3QgYSB2YWxpZCBldmVudCcsIGtleSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHVuYmluZChrZXksIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLmV2ZW50cywga2V5KTtcblxuICAgICAgICBpZiAoaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICBtZXNzYWdlLm9mZihoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICR3YXRjaChleHAsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gdGhpcy4kb2JzZXJ2ZXIud2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpO1xuICAgIH1cblxuICAgICR3YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJG9ic2VydmVyLndhdGNoQ29sbGVjdGlvbihleHAsIGhhbmRsZXIsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgJGV2YWwoZXhwLCBsb2NhbHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFdmFsdWF0b3IodGhpcywge2xvY2FsczogbG9jYWxzfSkuZXZhbHVhdGUoZXhwKTtcbiAgICB9XG5cbiAgICAkYXNzaWduKGV4cCwgdmFsdWUsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gbmV3IEV2YWx1YXRvcih0aGlzLCB7bG9jYWxzOiBsb2NhbHN9KS5hc3NpZ24oZXhwLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgJGdldFRlbXBsYXRlKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuJGRhdGE7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRhdGEudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS50ZW1wbGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkYXRhLnRlbXBsYXRlSWQpKSB7XG4gICAgICAgICAgICB2YXIgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YS50ZW1wbGF0ZUlkKTtcblxuICAgICAgICAgICAgaWYgKGVsbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5pbm5lckhUTUw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgJHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy4kZ2V0VGVtcGxhdGUoKTtcblxuICAgICAgICB0aGlzLiQkbWFpblZpZXcgPSBuZXcgUmVuZGVyZXIodGhpcykucmVuZGVyKHRlbXBsYXRlLCB0aGlzLiRjb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMuYWZ0ZXJWaWV3UmVuZGVyZWQgJiYgdGhpcy5hZnRlclZpZXdSZW5kZXJlZCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiQkbWFpblZpZXc7XG4gICAgfVxuXG4gICAgJG1vdW50KHNlbGVjdG9yT3JFbGVtZW50KSB7XG4gICAgICAgIHZhciBlbGVtZW50O1xuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzZWxlY3Rvck9yRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yT3JFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBzZWxlY3Rvck9yRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4kY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAkdW5tb3VudCgpIHtcbiAgICAgICAgZG9tLnJlbW92ZUVsZW1lbnQodGhpcy4kY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAkYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdGhpcy4kJGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICBjaGlsZC4kJHBhcmVudCA9IHRoaXM7XG4gICAgfVxuXG4gICAgJHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJCRjaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLiQkY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGNoaWxkLiQkcGFyZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRkZXN0cm95KCkge1xuICAgICAgICB0aGlzLiR1bm1vdW50KCk7XG5cbiAgICAgICAgdGhpcy4kb2JzZXJ2ZXIuZGVzdHJveSgpO1xuXG4gICAgICAgIGlmKHRoaXMuJCRtYWluVmlldyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkbWFpblZpZXcuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcblxuICAgICAgICBpZih0aGlzLiQkcGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJCRwYXJlbnQuJHJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi9kb20nO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgTV9ISURFX0NMQVNTIH0gZnJvbSAnLi4vY3NzJztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL3JlbmRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmVDb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy4kJHNjb3BlID0gbnVsbDtcbiAgICB0aGlzLiQkdmF0dHIgPSBudWxsO1xuICAgIHRoaXMuJHByaW9yaXR5ID0gOTtcbiAgICAvLyBiaW5kaW5nIHRleHQgaXMgYSBhc3NpZ25tZW50XG4gICAgdGhpcy4kYXNzaWdubWVudCA9IGZhbHNlO1xuICAgIHRoaXMuJHBsYWNlaG9sZGVyID0gbnVsbDtcbiAgICB0aGlzLiRkYXRhID0gdXRpbHMubWVyZ2UodGhpcy4kJG1ldGFkYXRhLCBkYXRhKTtcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzLCB0aGlzLiRkYXRhKTtcbn1cblxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZSB7XG4gICAgZ2V0ICRrZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkbWV0YWRhdGEua2V5O1xuICAgIH1cblxuICAgIGdldCAkbmFtZXNwYWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGFkYXRhLm5hbWVzcGFjZTtcbiAgICB9XG5cbiAgICBnZXQgJHNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHNjb3BlO1xuICAgIH1cblxuICAgIGdldCAkcmVuZGVyZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkc2NvcGUuJHJlbmRlcmVyO1xuICAgIH1cblxuICAgIGdldCAkZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci52ZWxtLmVsbTtcbiAgICB9XG5cbiAgICBnZXQgJGJpbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkdmF0dHIubm9kZURhdGEuYmluZGluZztcbiAgICB9XG5cbiAgICBnZXQgJGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci52ZWxtLm5vZGVEYXRhLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGRpcmVjdGl2ZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gd2hpbGUgY29tcGlsaW5nXG4gICAgJGNvbXBpbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uQ29tcGlsZSAmJiB0aGlzLm9uQ29tcGlsZSh0aGlzLiQkdmF0dHIudmVsbSwgdGhpcy4kJHZhdHRyKTtcbiAgICB9XG5cbiAgICAkbGluaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25MaW5rICYmIHRoaXMub25MaW5rKHRoaXMuJHNjb3BlKTtcbiAgICB9XG5cbiAgICAvLyBiZWZvcmUgbGlua2luZ1xuICAgIC8vICRwcmVsaW5rKCkge1xuICAgIC8vICAgICB0aGlzLmJlZm9yZUxpbmsgJiYgdGhpcy5iZWZvcmVMaW5rKCk7XG4gICAgLy8gfVxuXG4gICAgLy8gYWZ0ZXIgbGlua2luZ1xuICAgICRwb3N0bGluaygpIHtcbiAgICAgICAgdGhpcy5hZnRlckxpbmsgJiYgdGhpcy5hZnRlckxpbmsoKTtcblxuICAgICAgICBpZiAodGhpcy4kYmluZGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRjaGFuZ2UodGhpcy4kYmluZGluZy52YWx1ZSwgdGhpcy4kYmluZGluZy5vbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGUgaW5wdXQgdmFsdWUgaXMgY2hhbmdlZFxuICAgICRjaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgJiYgdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cblxuICAgICRkZXN0cm95KCkge1xuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xuICAgIH1cblxuICAgICQkc2VhcmNoRGlyZWN0aXZlKHZlbG0sIGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIGlmKCFuYW1lc3BhY2Upe1xuICAgICAgICAgICAgbmFtZXNwYWNlID0gdGhpcy4kbmFtZXNwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IHZlbG0ubm9kZURhdGEuZGlyZWN0aXZlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLiRrZXkgPT09IGtleSAmJiBpdGVtLiRuYW1lc3BhY2UgPT09IG5hbWVzcGFjZSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPyByZXN1bHRbMF0gOiBudWxsO1xuICAgIH1cblxuICAgICRzZWVrRGlyZWN0aXZlKGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciB2ZWxtID0gdGhpcy4kJHZhdHRyLnZlbG07XG4gICAgICAgIHJldHVybiB0aGlzLiQkc2VhcmNoRGlyZWN0aXZlKHZlbG0sIGtleSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICAkc2Vla1VwRGlyZWN0aXZlKGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciB2ZWxtID0gdGhpcy4kJHZhdHRyLnZlbG0ucGFyZW50Tm9kZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5LCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgICRyZW1vdmVFbGVtZW50KCkge1xuICAgICAgICBpZiAodGhpcy4kZWxlbWVudC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRwbGFjZWhvbGRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd5b3UgbXVzdCBkZWZpbmUgZWxlbWVudCBwbGFjZWhvbGRlciEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbS5yZXBsYWNlRWxlbWVudCh0aGlzLiRlbGVtZW50LCB0aGlzLiRwbGFjZWhvbGRlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkYXBwZW5kRWxlbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kcGxhY2Vob2xkZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigneW91IG11c3QgZGVmaW5lIGVsZW1lbnQgcGxhY2Vob2xkZXIhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb20ucmVwbGFjZUVsZW1lbnQodGhpcy4kcGxhY2Vob2xkZXIsIHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGhpZGVFbGVtZW50KCkge1xuICAgICAgICBkb20uYWRkQ2xhc3ModGhpcy4kZWxlbWVudCwgTV9ISURFX0NMQVNTKTtcbiAgICB9XG5cbiAgICAkc2hvd0VsZW1lbnQoKSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyh0aGlzLiRlbGVtZW50LCBNX0hJREVfQ0xBU1MpO1xuICAgIH1cblxuICAgICRldmFsKGV4cCwgbG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMuJGJpbmRpbmcubG9jYWxzLCBsb2NhbHMpO1xuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuJGV2YWwoZXhwLCBsb2NhbHMpO1xuICAgIH1cblxuICAgICRhc3NpZ24oZXhwLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMuJGJpbmRpbmcubG9jYWxzLCBsb2NhbHMpO1xuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuJGFzc2lnbihleHAsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAkcmVuZGVyKHRlbXBsYXRlLCBsb2NhbHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZW5kZXJlcih0aGlzLiRzY29wZSwgbG9jYWxzKS5yZW5kZXIodGVtcGxhdGUpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyByb2xlcyB9IGZyb20gJy4vcm9sZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBjb21wb25lbnRDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IERpcmVjdGl2ZSwgZGlyZWN0aXZlQ29uc3RydWN0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXIsIGZpbHRlckNvbnN0cnVjdG9yIH0gZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IHsgU2VydmljZSwgc2VydmljZUNvbnN0cnVjdG9yIH0gZnJvbSAnLi9zZXJ2aWNlJztcblxudmFyIG5hbWVQYXR0ZXJuID0gL15bYS16XVthLXpBLVowLTldKiQvO1xuXG4vLyBzdGFydCBtYWtlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGJlY2F1c2UgY2xhc3MgY2FuJ3QgYmUgY2FsbCB3aXRob3V0IG5ldy5cbnZhciBjb21wb25lbnRDbGFzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIENvbXBvbmVudChtZXRhZGF0YSkge1xuICAgICAgICBjb21wb25lbnRDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcbiAgICB9O1xufSkoKTtcbmNvbXBvbmVudENsYXNzLnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbnZhciBkaXJlY3RpdmVDbGFzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIERpcmVjdGl2ZShtZXRhZGF0YSkge1xuICAgICAgICBkaXJlY3RpdmVDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcbiAgICB9O1xufSkoKTtcbmRpcmVjdGl2ZUNsYXNzLnByb3RvdHlwZSA9IERpcmVjdGl2ZS5wcm90b3R5cGU7XG5cbnZhciBmaWx0ZXJDbGFzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIEZpbHRlcihtZXRhZGF0YSkge1xuICAgICAgICBmaWx0ZXJDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcbiAgICB9O1xufSkoKTtcbmZpbHRlckNsYXNzLnByb3RvdHlwZSA9IEZpbHRlci5wcm90b3R5cGU7XG5cbnZhciBzZXJ2aWNlQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBTZXJ2aWNlKG1ldGFkYXRhKSB7XG4gICAgICAgIHNlcnZpY2VDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKVxuICAgIH07XG59KSgpO1xuc2VydmljZUNsYXNzLnByb3RvdHlwZSA9IFNlcnZpY2UucHJvdG90eXBlO1xuLy8gZW5kIG9mIG1ha2UgY29uc3RydWN0b3IgZnVuY3Rpb24gYmVjYXVzZSBjbGFzcyBjYW4ndCBiZSBjYWxsIHdpdGhvdXQgbmV3LlxuXG4vLyBjb25zdHJ1Y3RvciBmYWN0b3J5LCBjcmVhdGUgY29uc3RydWN0b3IgZm9yIGNvbXBvbmVudCwgZGlyZWN0aXZlLCBmaWx0ZXIgYW5kIHNlcnZpY2VcbmV4cG9ydCBjbGFzcyBGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHJlbmFtZShyb2xlSWQsIG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWVQYXR0ZXJuLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICAgIHZhciBuZXdOYW1lID0gdXRpbHMudXBwZXJjYXNlKG5hbWVbMF0pO1xuXG4gICAgICAgICAgICBpZiAobmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3TmFtZSArPSBuYW1lLnN1YnN0cigxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChyb2xlSWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmNvbXBvbmVudDpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnQ29tcG9uZW50JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5kaXJlY3RpdmU6XG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0RpcmVjdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuZmlsdGVyOlxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdGaWx0ZXInO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLnNlcnZpY2U6XG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ1NlcnZpY2UnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ld05hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSArICdpcyBub3QgYSB2YWxpZCBuYW1lJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYWtlKHJvbGVJZCwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3IsIGNvbnN0cnVjdG9yTmFtZSA9IHRoaXMucmVuYW1lKHJvbGVJZCwgbmFtZSksXG4gICAgICAgICAgICBvbkNvbnN0cnVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25zdHJ1Y3Rvci5zdXBlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3Iuc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25maWcuY29uc3RydWN0KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuY29uc3RydWN0LmNhbGwodGhpcywgTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBGdW5jdGlvbignb25Db25zdHJ1Y3QnLCAnXCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uICcgKyBjb25zdHJ1Y3Rvck5hbWUgKyAnKCl7b25Db25zdHJ1Y3QuY2FsbCh0aGlzKTt9OycpKG9uQ29uc3RydWN0KTtcblxuICAgICAgICAvLyBleHRlbmRzIGNsYXNzXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbmZpZy5leHRlbmRzKSkge1xuICAgICAgICAgICAgdXRpbHMuaW5oZXJpdChjb25zdHJ1Y3RvciwgY29uZmlnLmV4dGVuZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3JlYXRlIG1ldGhvZHNcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbmZpZykge1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGtleSAhPT0gJ2V4dGVuZHMnICYmIGtleSAhPT0gJ2NvbnN0cnVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGVba2V5XSA9IGNvbmZpZ1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RvcmUgbWV0YWRhdGEgdG8gcHJvdG90eXBlXG4gICAgICAgIG1ldGFkYXRhLmtleSA9IG5hbWU7XG4gICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICAgIH1cblxuICAgIG1ha2VDb21wb25lbnQobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBleHRlbmRzOiBjb21wb25lbnRDbGFzc1xuICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmNvbXBvbmVudCwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgbWFrZURpcmVjdGl2ZShuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGV4dGVuZHM6IGRpcmVjdGl2ZUNsYXNzXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuZGlyZWN0aXZlLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBtYWtlRmlsdGVyKG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgICAgICAgZXh0ZW5kczogZmlsdGVyQ2xhc3NcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5maWx0ZXIsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIG1ha2VTZXJ2aWNlKG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgICAgICAgZXh0ZW5kczogc2VydmljZUNsYXNzXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuc2VydmljZSwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgfVxufVxuXG5leHBvcnQgdmFyIGZhY3RvcnkgPSBuZXcgRmFjdG9yeSgpOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy4kZGF0YSA9IHV0aWxzLm1lcmdlKHRoaXMuJCRtZXRhZGF0YSwgZGF0YSk7XG4gICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcywgdGhpcy4kZGF0YSk7XG59XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZmlsdGVyQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi92aWV3LWFwaSc7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyByb2xlcyB9IGZyb20gJy4vcm9sZXMnO1xyXG5pbXBvcnQgeyBpc0NvbXBvbmVudCwgaXNEaXJlY3RpdmUsIGlzU2VydmljZSwgaXNGaWx0ZXIgfSBmcm9tICcuL3ZpZXctYXBpJztcclxuXHJcbnZhciBrZXlQYXR0ZXJuID0gL15bYS16XVthLXpBLVowLTldKiQvO1xyXG52YXIgZ2xvYmFsTmFtZXNwYWNlID0nYXV0b21hdGUnO1xyXG5cclxuY2xhc3MgTmFtZXNwYWNlQ29udGFpbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NDb250YWluZXIgPSB7fTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlQ29udGFpbmVyID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZUlkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIG1ldGFkYXRhIGV4YW1wbGVcclxuLy8geyBrZXk6ICcnLCBuYW1lc3BhY2U6ICcnLCBleHRlbmRzOiBudWxsLCBjb25zdHJ1Y3Q6IGZuLCBtZXRob2RzOiB7fSB9XHJcbmV4cG9ydCBjbGFzcyBJbmplY3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5zQ29udGFpbmVyID0ge307XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlU3RhY2sgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROYW1lc3BhY2VDb250YWluZXIobmFtZXNwYWNlKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKG5hbWVzcGFjZSkpIHtcclxuICAgICAgICAgICAgbmFtZXNwYWNlID0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMubnNDb250YWluZXJbbmFtZXNwYWNlXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uc0NvbnRhaW5lcltuYW1lc3BhY2VdID0gbmV3IE5hbWVzcGFjZUNvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uc0NvbnRhaW5lcltuYW1lc3BhY2VdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYW1lc3BhY2UgaXMgcmVxdWlyZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tLZXlOYW1lKGtleSkge1xyXG4gICAgICAgIGlmICgha2V5UGF0dGVybi50ZXN0KGtleSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICcgaXMgbm90IGEgdmFsaWQgbmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcihyb2xlSWQsIGtleSwgY29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLmNoZWNrS2V5TmFtZShrZXkpO1xyXG5cclxuICAgICAgICB2YXIgbmFtZXNwYWNlID0gY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2VDb250YWluZXIgPSB0aGlzLmdldE5hbWVzcGFjZUNvbnRhaW5lcihuYW1lc3BhY2UpO1xyXG4gICAgICAgIHZhciBjbGFzc0NvbnRhaW5lciA9IG5hbWVzcGFjZUNvbnRhaW5lci5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlID09PSBnbG9iYWxOYW1lc3BhY2UgJiYgcm9sZUlkID09PSByb2xlcy5kaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAga2V5ID0gdXRpbHMuZm9ybWF0KCdtezB9JywgdXRpbHMudXBwZXJjYXNlKGtleVswXSkgKyAoa2V5Lmxlbmd0aCA+IDEgPyBrZXkuc3Vic3RyKDEpIDogJycpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbGFzc0NvbnRhaW5lcltrZXldKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnIGlzIGV4aXN0IHVuZGVyIG5hbWVzcGFjZSAnICsgbmFtZXNwYWNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsYXNzQ29udGFpbmVyW2tleV0gPSBjb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckNvbXBvbmVudChrZXksIGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5jb21wb25lbnQsIGtleSwgY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmRpcmVjdGl2ZSwga2V5LCBjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJGaWx0ZXIoa2V5LCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuZmlsdGVyLCBrZXksIGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlclNlcnZpY2Uoa2V5LCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuc2VydmljZSwga2V5LCBjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzKHJvbGVJZCwga2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZUlkLCBrZXksIG5hbWVzcGFjZSkgIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBoYXNDb21wb25lbnQoa2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuY29tcG9uZW50LCBrZXksIG5hbWVzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzRGlyZWN0aXZlKGtleSwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLmRpcmVjdGl2ZSwga2V5LCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0ZpbHRlcihrZXksIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5maWx0ZXIsIGtleSwgbmFtZXNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNTZXJ2aWNlKGtleSwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLnNlcnZpY2UsIGtleSwgbmFtZXNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGcm9tR2xvYmFsTmFtZXNwYWNlKHJvbGVJZCwga2V5KSB7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZUNvbnRhaW5lciA9IHRoaXMuZ2V0TmFtZXNwYWNlQ29udGFpbmVyKGdsb2JhbE5hbWVzcGFjZSk7XHJcbiAgICAgICAgdmFyIGNsYXNzQ29udGFpbmVyID0gbmFtZXNwYWNlQ29udGFpbmVyLmdldENsYXNzQ29udGFpbmVyKHJvbGVJZCk7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzQ29udGFpbmVyW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHJvbGVJZCwga2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICB2YXIgbmFtZXNwYWNlQ29udGFpbmVyID0gdGhpcy5nZXROYW1lc3BhY2VDb250YWluZXIobmFtZXNwYWNlKTtcclxuICAgICAgICB2YXIgY2xhc3NDb250YWluZXIgPSBuYW1lc3BhY2VDb250YWluZXIuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcclxuICAgICAgICByZXR1cm4gY2xhc3NDb250YWluZXJba2V5XSB8fCB0aGlzLmdldEZyb21HbG9iYWxOYW1lc3BhY2Uocm9sZUlkLCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbXBvbmVudChrZXksIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5jb21wb25lbnQsIGtleSwgbmFtZXNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuZGlyZWN0aXZlLCBrZXksIG5hbWVzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsdGVyKGtleSwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLmZpbHRlciwga2V5LCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlcnZpY2Uoa2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuc2VydmljZSwga2V5LCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSW5zdGFuY2Uocm9sZUlkLCBpbnN0YW5jZSkge1xyXG4gICAgICAgIHZhciB2YWxpZGF0b3IsIHJvbGU7XHJcblxyXG4gICAgICAgIHN3aXRjaCAocm9sZUlkKSB7XHJcbiAgICAgICAgICAgIGNhc2Ugcm9sZXMuY29tcG9uZW50OlxyXG4gICAgICAgICAgICAgICAgcm9sZSA9ICdDb21wb25lbnQnO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yID0gaXNDb21wb25lbnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSByb2xlcy5kaXJlY3RpdmU6XHJcbiAgICAgICAgICAgICAgICByb2xlID0gJ0RpcmVjdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IgPSBpc0RpcmVjdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHJvbGVzLnNlcnZpY2U6XHJcbiAgICAgICAgICAgICAgICByb2xlID0gJ1NlcnZpY2UnO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yID0gaXNTZXJ2aWNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Ugcm9sZXMuZmlsdGVyOlxyXG4gICAgICAgICAgICAgICAgcm9sZSA9ICdGaWx0ZXInO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yID0gaXNGaWx0ZXI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWxpZGF0b3IgJiYgIXZhbGlkYXRvcihpbnN0YW5jZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnb2JqZWN0IGlzIGEgaW5zdGFuY2Ugb2YgezB9Jywgcm9sZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlQ29uc3RydWN0b3Iocm9sZUlkLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcclxuICAgICAgICB2YXIgY29uc3RydWN0b3I7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0KHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCdjYW4gbm90IGZpbmQgXCJ7MH1cIiBpbiBuYW1lc3BhY2UgXCJ7MX1cIicsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc0Z1bmN0aW9uKGtleU9yQ29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0ga2V5T3JDb25zdHJ1Y3RvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGFyYW1ldGVyJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgdmFyIENscyA9IHRoaXMucmVzb2x2ZUNvbnN0cnVjdG9yKHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ2xzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tJbnN0YW5jZShyb2xlSWQsIGluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNpbmdsZXRvbihyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSxcclxuICAgICAgICAgICAgQ2xzID0gdGhpcy5yZXNvbHZlQ29uc3RydWN0b3Iocm9sZUlkLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpLFxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBDbHMucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xyXG5cclxuICAgICAgICB2YXIgbmFtZXNwYWNlQ29udGFpbmVyID0gdGhpcy5nZXROYW1lc3BhY2VDb250YWluZXIobmFtZXNwYWNlKSxcclxuICAgICAgICAgICAgY29udGFpbmVyID0gbmFtZXNwYWNlQ29udGFpbmVyLmdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVJZCksXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRhaW5lci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2YgQ2xzO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgQ2xzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnN0YW5jZShyb2xlSWQsIGluc3RhbmNlKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNvbXBvbmVudChrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcclxuICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5jb21wb25lbnQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRGlyZWN0aXZlKGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5kaXJlY3RpdmUsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRmlsdGVyKGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNpbmdsZXRvbihyb2xlcy5maWx0ZXIsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU2VydmljZShrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcclxuICAgICAgICB2YXIgU2VydmljZSA9IHRoaXMucmVzb2x2ZUNvbnN0cnVjdG9yKHJvbGVzLnNlcnZpY2UsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XHJcblxyXG4gICAgICAgIGlmIChTZXJ2aWNlLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5vblNoYXJlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUocm9sZXMuc2VydmljZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTaW5nbGV0b24ocm9sZXMuc2VydmljZSwgU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXh0cmFjdE5zQW5kS2V5KG5hbWUpIHtcclxuICAgICAgICB2YXIgc2VnbWVudHMgPSBuYW1lLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGtleTogc2VnbWVudHMucG9wKCksXHJcbiAgICAgICAgICAgIG5zOiBzZWdtZW50cy5sZW5ndGggPiAwID8gc2VnbWVudHMuam9pbignLicpIDogJycsXHJcbiAgICAgICAgICAgIGNsczogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VGdWxsTmFtZShuYW1lLCB1c2luZykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgcmVzdWx0ID0gdGhpcy5leHRyYWN0TnNBbmRLZXkobmFtZSk7XHJcblxyXG4gICAgICAgIGlmICh1c2luZykge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0Lm5zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNpbmcuaGFzT3duUHJvcGVydHkocmVzdWx0Lm5zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlcGxhY2UgYWxpYXMgd2l0aCByZWFsIG5hbWVzcGFjZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5ucyA9IHVzaW5nW3Jlc3VsdC5uc107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNpbmcuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB1c2luZ1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gcmVhbCBuYW1lc3BhY2UgYW5kIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzZWxmLmV4dHJhY3ROc0FuZEtleSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHJlYWwgY2xhc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNscyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBpbmplY3RTZXJ2aWNlcyhpbnN0YW5jZSwgbWV0YWRhdGEsIGNoZWNrTG9vcERlcGVuZGVuY3kpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIHNlcnZpY2VGdWxsTmFtZSwgaGFzTG9vcERlcGVuZGVuY3kgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYoY2hlY2tMb29wRGVwZW5kZW5jeSkge1xyXG4gICAgICAgICAgICAvLyBjcmVhdGluZyBhIHNlcnZpY2UgaW5zdGFuY2UgYXQgdGhlIG1vbWVudFxyXG4gICAgICAgICAgICBzZXJ2aWNlRnVsbE5hbWUgPSB1dGlscy5mb3JtYXQoJ3swfS57MX0nLCB1dGlscy5sb3dlcmNhc2UobWV0YWRhdGEubmFtZXNwYWNlKSwgbWV0YWRhdGEua2V5KTtcclxuICAgICAgICAgICAgaGFzTG9vcERlcGVuZGVuY3kgPSB0aGlzLnNlcnZpY2VTdGFjay5pbmRleE9mKHNlcnZpY2VGdWxsTmFtZSkgIT09IC0xO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlU3RhY2sucHVzaChzZXJ2aWNlRnVsbE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGhhc0xvb3BEZXBlbmRlbmN5KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvY2N1cnMgbG9vcCBkZXBlbmRlbmN5XHJcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSB1dGlscy5mb3JtYXQoJ0xvb3AgZGVwZW5kZW5jeTogezB9JywgdGhpcy5zZXJ2aWNlU3RhY2suam9pbignIC0+ICcpKTtcclxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIHNlcnZpY2UgZGVwZW5kZW5jeSBzdGFja1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlU3RhY2subGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgIC8vIHRocm93IGVycm9yXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWV0YWRhdGEgJiYgdXRpbHMuaXNPYmplY3QobWV0YWRhdGEuaW5qZWN0KSkge1xyXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG1ldGFkYXRhLmluamVjdCwgZnVuY3Rpb24gKHNlcnZpY2UsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlcnZpY2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkZW50aWZpZXIgPSBzZWxmLnBhcnNlRnVsbE5hbWUoc2VydmljZSwgbWV0YWRhdGEudXNpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlW2tleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2UoaWRlbnRpZmllci5rZXksIGlkZW50aWZpZXIubnMgfHwgbWV0YWRhdGEubmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2Vba2V5XSA9IHNlbGYuY3JlYXRlU2VydmljZShzZXJ2aWNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihjaGVja0xvb3BEZXBlbmRlbmN5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmljZVN0YWNrLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBpbmplY3RvciA9IG5ldyBJbmplY3RvcigpOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgcGFyc2VFeHAgfSBmcm9tICcuLi9leHAnO1xyXG5pbXBvcnQgeyBwYXJzZVRwbCB9IGZyb20gJy4uL3RwbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyc2VyIHtcclxuICAgIGdldCBpbmplY3RvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS4kaW5qZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHVzaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLiRkYXRhLnVzaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbXMgPSB7fTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHt9LFxyXG4gICAgICAgICAgICBkaXJlY3RpdmVzOiB7fSxcclxuICAgICAgICAgICAgZmlsdGVyczoge31cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRXhwcmVzc2lvbihleHApIHtcclxuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbXNbZXhwXTtcclxuXHJcbiAgICAgICAgaWYgKCFwcm9ncmFtKSB7XHJcbiAgICAgICAgICAgIHByb2dyYW0gPSBwYXJzZUV4cChleHApO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW1zW2V4cF0gPSBwcm9ncmFtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VUZW1wbGF0ZSh0cGwpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VUcGwodHBsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlKHNlbGVjdG9yLCBidWZmZXIsIGxvYWRlcikge1xyXG4gICAgICAgIHZhciBpZGVudGlmaWVyLCB0YXJnZXQsIGZ1bGxOYW1lLCBkZWZhdWx0TnMgPSB0aGlzLnNjb3BlLiRkYXRhLm5hbWVzcGFjZTtcclxuXHJcbiAgICAgICAgaWYgKGJ1ZmZlcltzZWxlY3Rvcl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBidWZmZXJbc2VsZWN0b3JdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZ1bGxOYW1lID0gdXRpbHMuY29udmVydFRvSHVtcE5hbWUoc2VsZWN0b3IsICctJyk7XHJcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSB0aGlzLmluamVjdG9yLnBhcnNlRnVsbE5hbWUoZnVsbE5hbWUsIHRoaXMudXNpbmcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlkZW50aWZpZXIuY2xzKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXJbc2VsZWN0b3JdID0gaWRlbnRpZmllci5jbHM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGlzLmluamVjdG9yW2xvYWRlcl0oaWRlbnRpZmllci5rZXksIGlkZW50aWZpZXIubnMgfHwgZGVmYXVsdE5zKTtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlcltzZWxlY3Rvcl0gPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzb2x2ZUNvbXBvbmVudChzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmUoc2VsZWN0b3IsIHRoaXMudHlwZS5jb21wb25lbnRzLCAnZ2V0Q29tcG9uZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzb2x2ZURpcmVjdGl2ZShzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmUoc2VsZWN0b3IsIHRoaXMudHlwZS5kaXJlY3RpdmVzLCAnZ2V0RGlyZWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzb2x2ZUZpbHRlcihzZWxlY3Rvcikge1xyXG4gICAgICAgIHZhciBmaWx0ZXIsIGZpbHRlckNscywgYnVmZmVyID0gdGhpcy5maWx0ZXJzO1xyXG5cclxuICAgICAgICBpZiAoYnVmZmVyW3NlbGVjdG9yXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZpbHRlciA9IGJ1ZmZlcltzZWxlY3Rvcl07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmlsdGVyQ2xzID0gdGhpcy5yZXNvbHZlKHNlbGVjdG9yLCB0aGlzLnR5cGUuZmlsdGVycywgJ2dldEZpbHRlcicpO1xyXG4gICAgICAgICAgICBmaWx0ZXIgPSB0aGlzLmluamVjdG9yLmNyZWF0ZUZpbHRlcihmaWx0ZXJDbHMpO1xyXG4gICAgICAgICAgICBidWZmZXJbc2VsZWN0b3JdID0gZmlsdGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IHZhciByb2xlcyA9IHtcbiAgICBmaWx0ZXI6IDAsXG4gICAgc2VydmljZTogMSxcbiAgICBjb21wb25lbnQ6IDIsXG4gICAgZGlyZWN0aXZlOiAzXG59OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlQ29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuJGRhdGEgPSB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJGRhdGEsIHRydWUpO1xufVxuXG5leHBvcnQgY2xhc3MgU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBzZXJ2aWNlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBmYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5JztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcblxuZnVuY3Rpb24gbmFtZXNwYWNlKG5hbWUpIHtcbiAgICBmdW5jdGlvbiBtZXJnZU1ldGFkYXRhKG1ldGFkYXRhKSB7XG4gICAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBuYW1lc3BhY2U6IG5hbWVcbiAgICAgICAgfSwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudChrZXksIGNvbmZpZywgbWVyZ2VNZXRhZGF0YShtZXRhZGF0YSkpO1xuICAgICAgICB9LFxuICAgICAgICBkaXJlY3RpdmU6IGZ1bmN0aW9uIChrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmUoa2V5LCBjb25maWcsIG1lcmdlTWV0YWRhdGEobWV0YWRhdGEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZTogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2Uoa2V5LCBjb25maWcsIG1lcmdlTWV0YWRhdGEobWV0YWRhdGEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKGtleSwgY29uZmlnLCBtZXJnZU1ldGFkYXRhKG1ldGFkYXRhKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKHNlbGVjdG9yLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgdmFyIFJvb3QgPSBmYWN0b3J5Lm1ha2VDb21wb25lbnQoJ2F1dG9tYXRlQXBwJywgY29uZmlnLCB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlOiBuYW1lLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBlbGVtZW50LmlubmVySFRNTFxuICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIHZhciByb290ID0gbmV3IFJvb3QoKTtcblxuICAgICAgICAgICAgZG9tLmNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICByb290LiRyZW5kZXIoKS5tb3VudChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudChrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VDb21wb25lbnQoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICBpbmplY3Rvci5yZWdpc3RlckNvbXBvbmVudChrZXksIGNvbnN0cnVjdG9yKTtcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdGl2ZShrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VEaXJlY3RpdmUoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICBpbmplY3Rvci5yZWdpc3RlckRpcmVjdGl2ZShrZXksIGNvbnN0cnVjdG9yKTtcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VGaWx0ZXIoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICBpbmplY3Rvci5yZWdpc3RlckZpbHRlcihrZXksIGNvbnN0cnVjdG9yKTtcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIHNlcnZpY2Uoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlU2VydmljZShrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyU2VydmljZShrZXksIGNvbnN0cnVjdG9yKTtcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIGlzQ29tcG9uZW50KGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgQ29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBpc0RpcmVjdGl2ZShpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIERpcmVjdGl2ZTtcbn1cblxuZnVuY3Rpb24gaXNGaWx0ZXIoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBGaWx0ZXI7XG59XG5cbmZ1bmN0aW9uIGlzU2VydmljZShpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIFNlcnZpY2U7XG59XG5cbmV4cG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIERpcmVjdGl2ZSxcbiAgICBGaWx0ZXIsXG4gICAgU2VydmljZSxcbiAgICBpc0NvbXBvbmVudCxcbiAgICBpc0RpcmVjdGl2ZSxcbiAgICBpc0ZpbHRlcixcbiAgICBpc1NlcnZpY2UsXG4gICAgbmFtZXNwYWNlLFxuICAgIGluamVjdG9yXG59OyJdLCJzb3VyY2VSb290IjoiIn0=