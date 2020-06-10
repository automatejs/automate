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
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/core/index.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser */ "./src/view/parser.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observer */ "./src/observer/index.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render */ "./src/render/index.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../exp */ "./src/exp/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









function componentConstructor(data) {
  this.$$velm = null;
  this.$$parent = null;
  this.$$children = [];
  this.$$mainView = null;
  this.$parser = new _parser__WEBPACK_IMPORTED_MODULE_3__["Parser"](this);
  this.$observer = new _observer__WEBPACK_IMPORTED_MODULE_4__["Observer"](this);
  this.$data = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](this.$$metadata, data);
  this.$container = document.createElement(_utils__WEBPACK_IMPORTED_MODULE_0__["convertFromHumpName"](this.$data.key, '-'));
  this.slots = {};
  this.events = {};
  this.props = this.$delegate({});
  this.state = this.$delegate({});
  _injector__WEBPACK_IMPORTED_MODULE_6__["injector"].injectServices(this, this.$data);
}
var Component = /*#__PURE__*/function () {
  _createClass(Component, [{
    key: "$delegate",
    value: function $delegate(target) {
      return new Proxy(target, _observer__WEBPACK_IMPORTED_MODULE_4__["handler"]);
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
      return _injector__WEBPACK_IMPORTED_MODULE_6__["injector"];
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

      if (Object(_core__WEBPACK_IMPORTED_MODULE_2__["isMessage"])(message)) {
        message.on(handler);
      } else {
        throw new Error(_utils__WEBPACK_IMPORTED_MODULE_0__["format"]('"{0}" is not a valid event', key));
      }
    }
  }, {
    key: "$unbind",
    value: function $unbind(key, handler) {
      var message = _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this.events, key);

      if (Object(_core__WEBPACK_IMPORTED_MODULE_2__["isMessage"])(message)) {
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
      return new _exp__WEBPACK_IMPORTED_MODULE_7__["Evaluator"](this, {
        locals: locals
      }).evaluate(exp);
    }
  }, {
    key: "$assign",
    value: function $assign(exp, value, locals) {
      return new _exp__WEBPACK_IMPORTED_MODULE_7__["Evaluator"](this, {
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
      this.$$mainView = new _render__WEBPACK_IMPORTED_MODULE_5__["Renderer"](this).render(template, this.$container);
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
          Cls = this.resolveConstructor(roleId, keyOrConstructor, namespace);

      if (!namespace) {
        namespace = Cls.prototype.$$metadata.namespace;
      }

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
        return this.create(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service, Service, namespace);
      }

      return this.createSingleton(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service, Service, namespace);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvbXBvbmVudC9zbG90LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvZXZlbnRzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9sb2NhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY3NzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvYmluZC1odG1sLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9oaWRlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9pZi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvcmVhZG9ubHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3MtZXZlbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3Mtb2RkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLW9kZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC1kZWZhdWx0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLXdoZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9hbmFseXNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXZhbHVhdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWxleGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtb3BlcmF0b3JzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2Fzc2lnbm1lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FzdC1ub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3QuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY2FsbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY29uZGl0aW9uYWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2lkZW50aWZpZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9saXRlcmFsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9sb2dpY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9tZW1iZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL29iamVjdC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3VuYXJ5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL29ic2VydmVyL2RlbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvYmluZGluZy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3JlbmRlci92aWV3LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZhdHRyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92Y21udC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmVsbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Z0ZXh0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92dHlwZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWFwaS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1sZXhlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2luamVjdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvcm9sZXMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9zZXJ2aWNlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvdmlldy1hcGkuanMiXSwibmFtZXMiOlsiU2xvdENvbXBvbmVudCIsImNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImtleSIsInByb3BzIiwibmFtZSIsInNsb3RzIiwiJCRwYXJlbnQiLCJ0ZW1wbGF0ZSIsIiQkbWFpblZpZXciLCJSZW5kZXJlciIsInJlbmRlciIsIiRjb250YWluZXIiLCJkZXN0cm95IiwiQ29tcG9uZW50IiwiaXNNZXNzYWdlIiwib2JqIiwiTWVzc2FnZSIsImV2ZW50cyIsInByb3BlcnR5Q2hhbmdlZCIsInRyYW5zbGF0ZUNoYW5nZWQiLCJMb2NhbCIsImUiLCJlbG0iLCIkZXZlbnQiLCIkZWxlbWVudCIsImRhdGEiLCJoYW5kbGVycyIsImZuIiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsIkVycm9yIiwib2ZmIiwic3BsaWNlIiwic2NvcGUiLCJmb3JFYWNoIiwiaGFuZGxlciIsImNhbGwiLCJkb20iLCJNX0NNUF9DTEFTUyIsIk1fSElERV9DTEFTUyIsIm1ldGFkYXRhIiwidGFyZ2V0IiwicHJvdG90eXBlIiwiJCRtZXRhZGF0YSIsImluamVjdG9yIiwicmVnaXN0ZXJDb21wb25lbnQiLCJkaXJlY3RpdmUiLCJyZWdpc3RlckRpcmVjdGl2ZSIsImZpbHRlciIsInJlZ2lzdGVyRmlsdGVyIiwic2VydmljZSIsInJlZ2lzdGVyU2VydmljZSIsIkJpbmRIdG1sRGlyZWN0aXZlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJEaXJlY3RpdmUiLCJCaW5kRGlyZWN0aXZlIiwiaW5uZXJUZXh0IiwiSGlkZURpcmVjdGl2ZSIsIklmRGlyZWN0aXZlIiwiJHBsYWNlaG9sZGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVDb21tZW50IiwiTW9kZWxEaXJlY3RpdmUiLCJ2aWV3VmFsdWUiLCJtb2RlbFZhbHVlIiwicGFyc2VycyIsImZvcm1hdHRlcnMiLCJ2aWV3Q2hhbmdlTGlzdGVuZXJzIiwidmFsaWRhdG9ycyIsInN0YXR1cyIsImZlZWRiYWNrIiwicHJpc3RpbmUiLCJkaXJ0eSIsInZhbGlkIiwiaW52YWxpZCIsIm9wdGlvbnMiLCJjc3MiLCJjb21taXRNb2RlbFZhbHVlIiwiJHNjb3BlIiwic3RhdGUiLCIkY29tcG9uZW50IiwiJGJpbmQiLCJjb21taXRWaWV3VmFsdWUiLCJuZXd2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdWYWx1ZSIsInNlbGYiLCJ2YWxpZGF0b3IiLCJmb3JtYXR0ZXIiLCIkc2V0UHJvcGVydHkiLCJ1cGRhdGVFbG1Dc3NDbGFzcyIsIm1hcmtEaXJ0eVN0YXR1cyIsImxpc3RlbmVyIiwicGFyc2VyIiwiJGJpbmRpbmciLCJhc3NpZ24iLCJlbGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJSZXBlYXREaXJlY3RpdmUiLCJpdGVtRXhwIiwiaXRlbXNFeHAiLCJpdGVtVGVtcGxhdGUiLCJpdGVtVmlld3MiLCJNYXAiLCJ1bndhdGNoQ29sbGVjdGlvbiIsInZlbG0iLCJ2YXR0ciIsImFyZyIsIm5vZGVWYWx1ZSIsInBhdHRlcm4iLCJyZXN1bHQiLCJleGVjIiwicmVtb3ZlQXR0ciIsImdldE91dGVyVHBsIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaGVhZGVyIiwiZm9vdGVyIiwiYXBwZW5kQ2hpbGQiLCIkd2F0Y2hDb2xsZWN0aW9uIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIml0ZW1zIiwiJGV2YWwiLCJ1dGlscyIsIml0ZW0iLCJpdGVtVmlldyIsImdldFZpZXdGcm9tQnVmZmVyIiwibG9jYWxzIiwiJHJlbmRlciIsInNldFZpZXdUb0J1ZmZlciIsImNvbnRlbnQiLCJsaXN0IiwidmlldyIsImJ1ZmZlciIsImRhdGFJdGVtIiwiaGFzIiwiZ2V0IiwibGVuZ3RoIiwic2hpZnQiLCJzZXQiLCJTaG93RGlyZWN0aXZlIiwiQ2hlY2tlZERpcmVjdGl2ZSIsIlN0YXRlRGlyZWN0aXZlIiwiRGlzYWJsZWREaXJlY3RpdmUiLCJSZWFkb25seURpcmVjdGl2ZSIsIlNlbGVjdGVkRGlyZWN0aXZlIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiQ2xhc3NFdmVuRGlyZWN0aXZlIiwiQ2xhc3NEaXJlY3RpdmUiLCJDbGFzc09kZERpcmVjdGl2ZSIsIm5ld0NsYXNzIiwib2xkQ2xhc3MiLCJza2lwQ3VycmVudEVsbSIsImpvaW4iLCJTdHlsZUV2ZW5EaXJlY3RpdmUiLCJTdHlsZURpcmVjdGl2ZSIsIlN0eWxlT2RkRGlyZWN0aXZlIiwibmV3U3R5bGUiLCJvbGRTdHlsZSIsInN0eWxlIiwiU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSIsInN3aXRjaEN0cmwiLCIkc2Vla1VwRGlyZWN0aXZlIiwibWF0Y2hEZWZhdWx0Iiwib24iLCJkZWZhdWx0TWF0Y2hlZCIsIiRyZW1vdmVFbGVtZW50IiwiU3dpdGNoV2hlbkRpcmVjdGl2ZSIsIm1hdGNoZWQiLCJjaGFuZ2VkIiwicGx1c01hdGNoIiwibWludXNNYXRjaCIsIlN3aXRjaERpcmVjdGl2ZSIsIm1hdGNoQ291bnQiLCJmaXJlIiwiY2hlY2tEZWZhdWx0IiwiZ2V0Q2hpbGRyZW5PZkVsZW1lbnQiLCJBcnJheSIsInNsaWNlIiwiY2hpbGROb2RlcyIsImNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQiLCJjaGlsZCIsInJlbW92ZUNoaWxkIiwicmVwbGFjZUVsZW1lbnQiLCJuZXdFbG0iLCJyZW1vdmVFbGVtZW50IiwicmVtb3ZlRWxlbWVudHNCZXR3ZWVuIiwic3RhcnRFbG0iLCJlbmRFbG0iLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZyIsImFwcGVuZEVsZW1lbnQiLCJsYXN0Q2hpbGQiLCJhZGRDbGFzcyIsImNscyIsInRyaW0iLCJzcGxpdCIsImMiLCJjdXIiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVDbGFzcyIsInRhciIsInJlcGxhY2UiLCJsb2FkU3R5bGVTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIkFjY2Vzc29yIiwiY2FsbGVlIiwiZXhwIiwiY2hpbGRyZW4iLCJBbmFseXNlciIsInBhcnNlRXhwcmVzc2lvbiIsInBhcnNlRXhwIiwicHJvZ3JhbSIsImFjY2Vzc29yIiwiYnVpbGRlciIsIkV4cEJ1aWxkZXIiLCJhbmFseXNlUHJvZ3JhbSIsImFuYWx5c2VOb2RlIiwibm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiQVNUIiwiRXhwcmVzc2lvblN0YXRlbWVudCIsImFuYWx5c2VFeHByZXNzaW9uIiwiQXNzaWdubWVudEV4cHJlc3Npb24iLCJhbmFseXNlQXNzaWdubWVudCIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbiIsImFuYWx5c2VDb25kaXRpb24iLCJMb2dpY2FsRXhwcmVzc2lvbiIsImFuYWx5c2VMb2dpYyIsIkJpbmFyeUV4cHJlc3Npb24iLCJhbmFseXNlQmluYXJ5IiwiVW5hcnlFeHByZXNzaW9uIiwiYW5hbHlzZVVuYXJ5IiwiQ2FsbEV4cHJlc3Npb24iLCJhbmFseXNlQ2FsbCIsIk1lbWJlckV4cHJlc3Npb24iLCJhbmFseXNlTWVtYmVyIiwiSWRlbnRpZmllciIsImFuYWx5c2VJZGVudGlmaWVyIiwiTGl0ZXJhbCIsImFuYWx5c2VMaXRlcmFsIiwiQXJyYXlFeHByZXNzaW9uIiwiYW5hbHlzZUFycmF5IiwiUHJvcGVydHkiLCJhbmFseXNlUHJvcGVydHkiLCJPYmplY3RFeHByZXNzaW9uIiwiYW5hbHlzZU9iamVjdCIsImFzc2lnbm1lbnQiLCJyaWdodCIsImNvbmRpdGlvbiIsInRlc3QiLCJhbHRlcm5hdGUiLCJjb25zZXF1ZW50IiwibG9naWMiLCJsZWZ0IiwiYmluYXJ5IiwidW5hcnkiLCJhcmdzIiwibWVtYmVyIiwicGFyZW50Iiwib2JqZWN0IiwiY29tcHV0ZWQiLCJwcm9wZXJ0eSIsImNyZWF0ZUNoaWxkIiwiYnVpbGQiLCJpZGVudGlmaWVyIiwiY3JlYXRlQWNjZXNzb3IiLCJsaXRlcmFsIiwicHJvcCIsInByb3BlcnRpZXMiLCJhcnIiLCJhbmFseXNlIiwiZGVmYXVsdE9wdGlvbnMiLCJhbGxvd051bGwiLCJhc3NpZ25JbnRlcmNlcHRvciIsIkV2YWx1YXRvciIsIiRwYXJzZXIiLCJldmFsdWF0ZVByb2dyYW0iLCJldmFsdWF0ZU5vZGUiLCIkbnVsbCIsImFzc2lnblByb2dyYW0iLCJleHByZXNzaW9uIiwicHJvcGVydHlLZXkiLCJldmFsdWF0ZUV4cHJlc3Npb24iLCJldmFsdWF0ZUFzc2lnbm1lbnQiLCJldmFsdWF0ZUNvbmRpdGlvbiIsImV2YWx1YXRlTG9naWMiLCJldmFsdWF0ZUJpbmFyeSIsImV2YWx1YXRlVW5hcnkiLCJldmFsdWF0ZUNhbGwiLCJldmFsdWF0ZU1lbWJlciIsImV2YWx1YXRlSWRlbnRpZmllciIsImV2YWx1YXRlTGl0ZXJhbCIsImV2YWx1YXRlQXJyYXkiLCJldmFsdWF0ZVByb3BlcnR5IiwiZXZhbHVhdGVPYmplY3QiLCJhc3NpZ25tZW50TGVmdCIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJvcGVyYXRvciIsImFyZ1ZhbHVlcyIsIm1hcCIsInJlc29sdmVGaWx0ZXIiLCJ0cmFuc2Zvcm0iLCJhcHBseSIsIk51bGxFeHByZXNzaW9uTm9kZSIsInRhcmdldE5vZGUiLCJkZWYiLCJsZXhFeHAiLCJFeHBMZXhlciIsImxleCIsIkV4cFBhcnNlciIsInBhcnNlIiwiYnVpbGRFeHByZXNzaW9uIiwiYnVpbGRBc3NpZ25tZW50IiwiYnVpbGRDb25kaXRpb24iLCJidWlsZExvZ2ljIiwiYnVpbGRCaW5hcnkiLCJidWlsZFVuYXJ5IiwiYnVpbGRDYWxsIiwiYnVpbGRNZW1iZXIiLCJidWlsZElkZW50aWZpZXIiLCJidWlsZExpdGVyYWwiLCJidWlsZEFycmF5IiwiYnVpbGRQcm9wZXJ0eSIsImJ1aWxkT2JqZWN0IiwicmVzIiwicGFyc2VPcHRpb25zIiwidGV4dCIsInRva2VucyIsImNoIiwiY2hhckF0IiwicmVhZFN0cmluZyIsImlzTnVtYmVyIiwicGVlayIsInJlYWROdW1iZXIiLCJpc0lkZW50aWZpZXJTdGFydCIsInBlZWtNdWx0aWNoYXIiLCJyZWFkSWRlbnQiLCJpcyIsImlzV2hpdGVzcGFjZSIsImNoMiIsImNoMyIsIm9wMSIsIk9QRVJBVE9SUyIsIm9wMiIsIm9wMyIsInRva2VuIiwidGhyb3dFcnJvciIsImNoYXJzIiwiaSIsIm51bSIsImNvZGVQb2ludEF0IiwiaXNWYWxpZElkZW50aWZpZXJTdGFydCIsImlzSWRlbnRpZmllckNvbnRpbnVlIiwiaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSIsImNwIiwiY2hhckNvZGVBdCIsImNwMSIsImNwMiIsImVycm9yIiwic3RhcnQiLCJlbmQiLCJjb2xTdHIiLCJzdWJzdHJpbmciLCJudW1iZXIiLCJwZWVrQ2giLCJpc0V4cE9wZXJhdG9yIiwiY29uc3RhbnQiLCJOdW1iZXIiLCJxdW90ZSIsInN0cmluZyIsInJhd1N0cmluZyIsImVzY2FwZSIsImhleCIsIm1hdGNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJyZXAiLCJFU0NBUEUiLCJvcGVyYXRvclRleHQiLCJsZXhlciIsIm1zZyIsIlByb2dyYW1Ob2RlIiwiZXhwcmVzc2lvblN0YXRlbWVudCIsImV4cGVjdCIsIkV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIiwiZmlsdGVyQ2hhaW4iLCJhc3QiLCJ0ZXJuYXJ5IiwiaXNBc3NpZ25hYmxlIiwiQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbE9SIiwiY29uc3VtZSIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsQU5EIiwiTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZXF1YWxpdHkiLCJyZWxhdGlvbmFsIiwiQmluYXJ5RXhwcmVzc2lvbk5vZGUiLCJhZGRpdGl2ZSIsIm11bHRpcGxpY2F0aXZlIiwiVW5hcnlFeHByZXNzaW9uTm9kZSIsInByaW1hcnkiLCJhcnJheURlY2xhcmF0aW9uIiwibGl0ZXJhbHMiLCJoYXNPd25Qcm9wZXJ0eSIsIkxpdGVyYWxOb2RlIiwibmV4dCIsInBlZWtBaGVhZCIsIkNhbGxFeHByZXNzaW9uTm9kZSIsInBhcnNlQXJndW1lbnRzIiwiTWVtYmVyRXhwcmVzc2lvbk5vZGUiLCJiYXNlRXhwcmVzc2lvbiIsImlkZW50aWZpZXJzIiwiZW50aXJlTmFtZSIsIklkZW50aWZpZXJOb2RlIiwicGVla1Rva2VuIiwiQXJyYXlFeHByZXNzaW9uTm9kZSIsIlByb3BlcnR5Tm9kZSIsIk9iamVjdEV4cHJlc3Npb25Ob2RlIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJ0IiwiQXN0Tm9kZSIsIlByb2dyYW0iLCJraW5kIiwicHJlZml4IiwidW5kZWZpbmVkIiwiRGVsYXllciIsInRpbWVvdXQiLCJkZWxheUlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIkxpc3RlbmVyIiwidmFsdWVDaGFuZ2VkIiwiY29sbGVjdGlvbkNoYW5nZWQiLCJvbGRWYWx1ZSIsIk9ic2VydmVyIiwiYWNjZXNzb3JzIiwibGlzdGVuZXJzIiwid2F0Y2hlciIsIldhdGNoZXIiLCJhbmFseXNlciIsImRlbGF5ZXIiLCJub3RpZnkiLCJoYXNDaGFuZ2UiLCJzZXROZXdWYWx1ZSIsInNldENvbGxlY3Rpb25DaGFuZ2VkIiwiZXhlY3V0ZSIsImdldEFjY2Vzc29yIiwiZXZhbHVhdG9yIiwiY3JlYXRlTGlzdGVuZXIiLCJldmFsdWF0ZSIsInVud2F0Y2hBY2Nlc3NvcnMiLCJ1bndhdGNoIiwid2F0Y2hBY2Nlc3NvcnMiLCJ2YWx1ZXMiLCJ3YXRjaCIsIm5vdGlmeUNoYW5nZSIsInJlbW92ZUxpc3RlbmVyIiwidW53YXRjaFByb3BzIiwid2F0Y2hQcm9wcyIsInVud2F0Y2hFeHAiLCJhcmd1bWVudHMiLCJjb2xsZWN0aW9uIiwiaXNQcm94eVN5bWJvbCIsIlN5bWJvbCIsInRhcmdldFN5bWJvbCIsImdldFByb3h5Iiwic2V0UHJveHkiLCJpc1Byb3h5IiwicHJveHkiLCJnZXRUYXJnZXQiLCJtYWtlUHJveHkiLCJQcm94eSIsIk9iamVjdExpc3RlbmVyIiwia2V5cyIsImdldEhhbmRsZXJzIiwib2ZmUHJvcGVydHlDaGFuZ2VkIiwiaGFuZGxlUHJvcGVydHlDaGFuZ2VkIiwiZ2V0TGlzdGVuZXIiLCJmaXJlS2V5IiwiZmlsdGVycyIsImFjdGlvbiIsImdldE9yQ3JlYXRlTGlzdGVuZXIiLCJyZWdpc3RlcktleSIsInVucmVnaXN0ZXJLZXkiLCJCaW5kaW5nIiwiaXNFeHAiLCJsb2dpY2FsIiwiYXV0b21hdGlvbiIsInNlZ21lbnRzIiwiZXhwcmVzc2lvbnMiLCJFeHByZXNzaW9uIiwiY3JlYXRlRXhwcmVzc2lvbiIsImxhc3RJbmRleCIsInNlZ21lbnQiLCJkZXRlY3QiLCJwYXRjaCIsImNvbXB1dGUiLCJyZWR1Y2UiLCJwcmV2IiwiaGFzVHJhbnNsYXRpb24iLCIkYXNzaWduIiwiJHdhdGNoIiwiZXZlbnRUZXh0IiwiZG9tRXZlbnRzIiwiJGluamVjdG9yIiwiYmluZGluZyIsImJpbmRpbmdzIiwiY3JlYXRlQ29tcG9uZW50IiwiJGFwcGVuZENoaWxkIiwiY29tcG9uZW50cyIsImNyZWF0ZURpcmVjdGl2ZSIsIiQkc2NvcGUiLCJyZXNvbHZlQ29tcG9uZW50Iiwibm9kZU5hbWUiLCJyZXNvbHZlRGlyZWN0aXZlIiwibm9kZURhdGEiLCJjb250YWluZXIiLCJoYXNDb250YWluZXIiLCJTaW5nbGVOb2RlVmlldyIsIk11bHRpcGxlTm9kZVZpZXciLCJ2bm9kZXMiLCJwYXJzZVRlbXBsYXRlIiwiY29tcGlsZU5vZGVzIiwibGlua05vZGVzIiwiZGlyZWN0aXZlcyIsIiRwb3N0bGluayIsIm5vZGVzIiwidm5vZGUiLCJjb21waWxlTm9kZSIsImlzVlRleHQiLCJjb21waWxlVGV4dCIsImlzVkNvbW1lbnQiLCJjb21waWxlQ29tbWVudCIsImNvbXBpbGVFbG0iLCJsaW5rTm9kZSIsImxpbmtUZXh0IiwibGlua0NvbW1lbnQiLCJsaW5rRWxtIiwiZWxtRGF0YSIsInJlY29nbml6ZUNvbXBvbmVudCIsImN1c3RvbUxpbmtlciIsInZhdHRycyIsInNvbWUiLCJhdHRyRGF0YSIsImNvbXBpbGVBdHRyIiwibGlua2VyIiwiJHByaW9yaXR5Iiwic2Vla1Nsb3QiLCJhdHRyTmFtZSIsImF0dHJWYWx1ZSIsIm5ld0JpbmRpbmciLCJzdGFydHNXaXRoIiwiaXNFdmVudCIsInN1YnN0ciIsImlzRG9tRXZlbnQiLCJyZWNvZ25pemVEaXJlY3RpdmUiLCJuZXdEaXJlY3RpdmUiLCIkJHZhdHRyIiwiJGFzc2lnbm1lbnQiLCIkY29tcGlsZSIsInNldEh0bWxBdHRyIiwicmVnaXN0ZXJBdXRvbWF0aW9uIiwicHJvcGVydHlOYW1lIiwiJGhhc1Byb3BlcnR5IiwiY29tcGlsZSIsInZ0ZXh0IiwibmV3VGV4dE5vZGUiLCJ2Y21udCIsIiRsaW5rIiwiaW5zdGFuY2UiLCJuZXdDb21wb25lbnQiLCJsaW5rQXR0ciIsIiQkdmVsbSIsIiRzZXJDb250YWluZXIiLCIkc2V0U2xvdCIsImV2ZW50TmFtZSIsImxpbmsiLCIkY2hhbmdlIiwiaXNWRWxtIiwic2xvdCIsImdldEF0dHIiLCJnZXRJbm5lclRwbCIsIlZpZXciLCJzZWxlY3Rvck9yRWxlbWVudCIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25EZXN0cm95IiwiJGRlc3Ryb3kiLCJWQXR0ciIsIm5vZGVUeXBlIiwiYXR0cmlidXRlIiwiVk5vZGUiLCJWQ21udCIsImNvbW1lbnQiLCJWRWxtIiwic2VsZkNsb3NlZCIsIlRwbEJ1aWxkZXIiLCJhdHRyIiwibWF0Y2hlcyIsImJlbG9uZ1RvIiwic2V0VmFsdWUiLCJjb21waWxlT3B0aW9ucyIsInRwbCIsInBhcnNlVHBsIiwiY2xlYXJDaGlsZE5vZGVzIiwiY29weSIsImNsb25lTm9kZSIsImNkYXRhU2VjdGlvbiIsImVudGl0eVJlZmVyZW5jZSIsImVudGl0eSIsInByb2Nlc3NpbmdJbnN0cnVjdGlvbiIsImRvY3VtZW50VHlwZSIsImRvY3VtZW50RnJhZ21lbnQiLCJub3RhdGlvbiIsImZpcnN0Q2hpbGQiLCJidWlsZFNpYmxpbmciLCJyZWZDaGlsZCIsIm5ld0NoaWxkIiwiY2xlYXJQYXJlbnRBbmRTaWJsaW5nIiwiZGVlcCIsIm9uQ2xvbmVOb2RlIiwib3duZXJEb2N1bWVudCIsIlZUZXh0IiwiVlR5cGUiLCJsZXhUcGwiLCJUcGxMZXhlciIsIlRwbFBhcnNlciIsImlzVkF0dHIiLCJidWlsZFRleHQiLCJidWlsZENvbW1lbnQiLCJidWlsZEVsZW1lbnQiLCJhdHRyVHBsIiwiYnVpbGRBdHRyaWJ1dGUiLCJjaGlsZFRwbCIsInN0ciIsImJlZ2luIiwiZXhwZWN0U3RyaW5nIiwidGV4dFRhZyIsImNsb3NpbmciLCJkb2N0eXBlIiwidGFnIiwiZXF1YWwiLCJhbGxvd0RvY1R5cGUiLCJyZWFkQ29tbWVudCIsInJlYWRUYWciLCJyZWFkVGV4dCIsInJvb3QiLCJjdXJyZW50IiwiZG9jVHlwZSIsImF0dHJzIiwicCIsInB1c2hBdHRyIiwiY2hpbGRFbGVtZW50cyIsInB1c2hDaGlsZCIsImVsZXMiLCJvcmlnaW4iLCJ0b1N0cmluZyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiaXNVbmRlZmluZWQiLCJpc0RlZmluZWQiLCJpc0FycmF5IiwiaXNNYXAiLCJpc09iamVjdCIsImlzQmxhbmtPYmplY3QiLCJpc1N0cmluZyIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc1JlZ0V4cCIsImlzQm9vbGVhbiIsImlzRm9ybURhdGEiLCJGb3JtRGF0YSIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJpc05hTiIsImxvd2VyY2FzZSIsInRvTG93ZXJDYXNlIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJjb252ZXJ0VG9IdW1wTmFtZSIsInNlcGFyYXRvciIsInVwcGVyY2FzZUZpcnN0TGV0dGVyIiwiY29udmVydEZyb21IdW1wTmFtZSIsIm5ld05hbWUiLCJjaGFyIiwib2JqSW5kZXgiLCJuZXdBcnIiLCJuZXdPYmoiLCJleHRlbmQiLCJkZWVwTWVyZ2UiLCJwbGFpbk1lcmdlIiwibWVyZ2UiLCJzb3VyY2UiLCJmdW5jIiwib3JkZXJCeSIsImdldHRlciIsImdldFZhbHVlIiwic29ydCIsImEiLCJiIiwib3JkZXJCeURlc2NlbmRpbmciLCJjb25jYXQiLCJvIiwiRiIsImluaGVyaXRQcm90b3R5cGUiLCJzdWJUeXBlIiwic3VwZXJUeXBlIiwiY29uc3RydWN0b3IiLCJpbmhlcml0IiwiaGFzUHJvcGVydHkiLCJnZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiZm9ybWF0IiwibWF0Y2hUZXh0IiwiZXNjYXBlSHRtbCIsImh0bWwiLCJjb21wb25lbnRDb25zdHJ1Y3RvciIsIiQkY2hpbGRyZW4iLCJQYXJzZXIiLCIkb2JzZXJ2ZXIiLCIkZGF0YSIsIiRkZWxlZ2F0ZSIsImluamVjdFNlcnZpY2VzIiwib25Qcm9wZXJ0eUNoYW5nZWQiLCJtZXNzYWdlIiwid2F0Y2hDb2xsZWN0aW9uIiwidGVtcGxhdGVJZCIsImdldEVsZW1lbnRCeUlkIiwiJGdldFRlbXBsYXRlIiwiJHVubW91bnQiLCIkcmVtb3ZlQ2hpbGQiLCJkaXJlY3RpdmVDb25zdHJ1Y3RvciIsIiRyZW5kZXJlciIsIm9uQ29tcGlsZSIsIm9uTGluayIsImFmdGVyTGluayIsIm9uQ2hhbmdlIiwiJG5hbWVzcGFjZSIsIiRrZXkiLCIkJHNlYXJjaERpcmVjdGl2ZSIsIm5hbWVQYXR0ZXJuIiwiY29tcG9uZW50Q2xhc3MiLCJkaXJlY3RpdmVDbGFzcyIsImZpbHRlckNsYXNzIiwiRmlsdGVyIiwiZmlsdGVyQ29uc3RydWN0b3IiLCJzZXJ2aWNlQ2xhc3MiLCJTZXJ2aWNlIiwic2VydmljZUNvbnN0cnVjdG9yIiwiRmFjdG9yeSIsInJvbGVJZCIsInJvbGVzIiwiY29uZmlnIiwiY29uc3RydWN0b3JOYW1lIiwicmVuYW1lIiwib25Db25zdHJ1Y3QiLCJjb25zdHJ1Y3QiLCJGdW5jdGlvbiIsIm1ha2UiLCJmYWN0b3J5Iiwia2V5UGF0dGVybiIsImdsb2JhbE5hbWVzcGFjZSIsIk5hbWVzcGFjZUNvbnRhaW5lciIsImNsYXNzQ29udGFpbmVyIiwiaW5zdGFuY2VDb250YWluZXIiLCJJbmplY3RvciIsIm5zQ29udGFpbmVyIiwic2VydmljZVN0YWNrIiwiY2hlY2tLZXlOYW1lIiwibmFtZXNwYWNlQ29udGFpbmVyIiwiZ2V0TmFtZXNwYWNlQ29udGFpbmVyIiwiZ2V0Q2xhc3NDb250YWluZXIiLCJyZWdpc3RlciIsImdldEZyb21HbG9iYWxOYW1lc3BhY2UiLCJyb2xlIiwiaXNDb21wb25lbnQiLCJpc0RpcmVjdGl2ZSIsImlzU2VydmljZSIsImlzRmlsdGVyIiwia2V5T3JDb25zdHJ1Y3RvciIsIkNscyIsInJlc29sdmVDb25zdHJ1Y3RvciIsImNoZWNrSW5zdGFuY2UiLCJnZXRJbnN0YW5jZUNvbnRhaW5lciIsImNyZWF0ZSIsImNyZWF0ZVNpbmdsZXRvbiIsIm5vblNoYXJlZCIsInBvcCIsIm5zIiwidXNpbmciLCJleHRyYWN0TnNBbmRLZXkiLCJjaGVja0xvb3BEZXBlbmRlbmN5Iiwic2VydmljZUZ1bGxOYW1lIiwiaGFzTG9vcERlcGVuZGVuY3kiLCJpbmplY3QiLCJwYXJzZUZ1bGxOYW1lIiwiY3JlYXRlU2VydmljZSIsInByb2dyYW1zIiwic2VsZWN0b3IiLCJsb2FkZXIiLCJmdWxsTmFtZSIsImRlZmF1bHROcyIsInJlc29sdmUiLCJmaWx0ZXJDbHMiLCJjcmVhdGVGaWx0ZXIiLCJtZXJnZU1ldGFkYXRhIiwiUm9vdCIsIm1ha2VDb21wb25lbnQiLCJtb3VudCIsIm1ha2VEaXJlY3RpdmUiLCJtYWtlRmlsdGVyIiwibWFrZVNlcnZpY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztR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ZSI6ImF1dG9tYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYXV0b21hdGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYXV0b21hdGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9zbG90JzsiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9yZW5kZXInO1xyXG5cclxuQGNvbXBvbmVudCh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdzbG90J1xyXG59KVxyXG5jbGFzcyBTbG90Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5uYW1lID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgJHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgc2xvdHMgPSB0aGlzLiQkcGFyZW50LnNsb3RzO1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IHNsb3RzW3RoaXMucHJvcHMubmFtZV07XHJcblxyXG4gICAgICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLiQkbWFpblZpZXcgPSBuZXcgUmVuZGVyZXIodGhpcy4kJHBhcmVudCkucmVuZGVyKHRlbXBsYXRlLCB0aGlzLiRjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYodGhpcy4kJG1haW5WaWV3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCRtYWluVmlldy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNNZXNzYWdlKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1lc3NhZ2U7XHJcbn0iLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbi8vIGdsb2JhbCBldmVudHNcclxuZXhwb3J0IHZhciBldmVudHMgPSB7XHJcbiAgICBwcm9wZXJ0eUNoYW5nZWQ6IG5ldyBNZXNzYWdlKCksXHJcbiAgICB0cmFuc2xhdGVDaGFuZ2VkOiBuZXcgTWVzc2FnZSgpXHJcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9sb2NhbCc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9ldmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9hcGknOyIsImV4cG9ydCBjbGFzcyBMb2NhbCB7XG4gICAgY29uc3RydWN0b3IoZSwgZWxtKSB7XG4gICAgICAgIHRoaXMuJGV2ZW50ID0gZTtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9IGVsbTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH1cblxuICAgIG9uKGZuKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaGFuZGxlcnMuaW5kZXhPZihmbik7XG5cbiAgICAgICAgLy8gbm90IGZvdW5kXG4gICAgICAgIGlmKGluZGV4ID09PSAtMSl7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2goZm4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW4gbm90IHJlZ2lzdGVyIHNhbWUgZXZlbnQgaGFuZGxlciBtb3JlIHRoYW4gb25jZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMub2ZmKGZuKTtcbiAgICB9XG5cbiAgICBvZmYoZm4pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5oYW5kbGVycy5pbmRleE9mKGZuKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlKGRhdGEsIHNjb3BlKSB7XG4gICAgICAgIHNjb3BlID0gc2NvcGUgfHwgdGhpcztcbiAgICAgICAgLy8gYXR0YWNoIGV2ZW50IGRhdGFcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YSB8fCB7fTtcblxuICAgICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmNhbGwoc2NvcGUsIHRoaXMpKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vZG9tJztcclxuXHJcbmRvbS5sb2FkU3R5bGVTdHJpbmcoJy5tLWNvbXBvbmVudHtkaXNwbGF5OmluaGVyaXQ7fSAubS1oaWRle2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O30nKTtcclxuXHJcbmV4cG9ydCB2YXIgTV9DTVBfQ0xBU1MgPSAnbS1jb21wb25lbnQnO1xyXG5leHBvcnQgdmFyIE1fSElERV9DTEFTUyA9ICdtLWhpZGUnOyIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnQobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb21wb25lbnQoa2V5LCB0YXJnZXQpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZShtZXRhZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRhcmdldC5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckRpcmVjdGl2ZShrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vZmlsdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2UobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJTZXJ2aWNlKGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdiaW5kSHRtbCdcclxufSlcclxuY2xhc3MgQmluZEh0bWxEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdiaW5kJ1xufSlcbmNsYXNzIEJpbmREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ2hpZGUnXG59KVxuY2xhc3MgSGlkZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpc1t2YWx1ZSA/ICckaGlkZUVsZW1lbnQnIDogJyRzaG93RWxlbWVudCddKCk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdpZidcclxufSlcclxuY2xhc3MgSWZEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLiRwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ24taWYnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXNbdmFsdWUgPyAnJGFwcGVuZEVsZW1lbnQnIDogJyRyZW1vdmVFbGVtZW50J10oKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vYmluZCc7XG5leHBvcnQgKiBmcm9tICcuL2JpbmQtaHRtbCc7XG5leHBvcnQgKiBmcm9tICcuL3JlcGVhdCc7XG5leHBvcnQgKiBmcm9tICcuL21vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vaGlkZSc7XG5leHBvcnQgKiBmcm9tICcuL3Nob3cnO1xuZXhwb3J0ICogZnJvbSAnLi9zdGF0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0eWxlJztcbmV4cG9ydCAqIGZyb20gJy4vaWYnO1xuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gnOyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ21vZGVsJ1xufSlcbmNsYXNzIE1vZGVsRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcnNlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXJzID0gW107XG4gICAgICAgIHRoaXMudmlld0NoYW5nZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB7XG4gICAgICAgICAgICBmZWVkYmFjazogJycsXG4gICAgICAgICAgICBwcmlzdGluZTogdHJ1ZSxcbiAgICAgICAgICAgIGRpcnR5OiBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgaW52YWxpZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICAgICAgcHJpc3RpbmU6ICduLXByaXN0aW5lJyxcbiAgICAgICAgICAgICAgICBkaXJ0eTogJ24tZGlydHknLFxuICAgICAgICAgICAgICAgIHZhbGlkOiAnbi12YWxpZCcsXG4gICAgICAgICAgICAgICAgaW52YWxpZDogJ24taW52YWxpZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbW1pdE1vZGVsVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIGFmdGVyTGluaygpIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLiRlbGVtZW50Lm5hbWU7XG5cbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLnN0YXRlW25hbWVdID0gdGhpcy5zdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC4kYmluZCgnY2hhbmdlJywgZSA9PiB0aGlzLmNvbW1pdFZpZXdWYWx1ZShlLmRhdGEubmV3dmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHRoaXMuY29tbWl0Vmlld1ZhbHVlKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG5cbiAgICB9XG5cbiAgICBjb21taXRNb2RlbFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHRoaXMubW9kZWxWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMuZm9ybWF0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgbmV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy52aWV3VmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpZXdWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLiRjb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LiRzZXRQcm9wZXJ0eSgndmFsdWUnLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XG4gICAgfVxuXG4gICAgY29tbWl0Vmlld1ZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXdWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLm1hcmtEaXJ0eVN0YXR1cyh0cnVlKTtcblxuICAgICAgICB0aGlzLnZpZXdDaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHNlbGYudmlld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLnBhcnNlcnMuZm9yRWFjaChmdW5jdGlvbiAocGFyc2VyKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHBhcnNlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYodGhpcy5tb2RlbFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHNlbGYubW9kZWxWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMuJGJpbmRpbmcuYXNzaWduKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVFbG1Dc3NDbGFzcygpIHtcbiAgICAgICAgdmFyIGVsZSA9IHRoaXMuJGVsZW1lbnQsXG4gICAgICAgICAgICBjc3MgPSB0aGlzLm9wdGlvbnMuY3NzO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy5kaXJ0eSkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLmRpcnR5KTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5wcmlzdGluZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MucHJpc3RpbmUpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLmRpcnR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy52YWxpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrRGlydHlTdGF0dXMoZGlydHkpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMuZGlydHkgPSBkaXJ0eTtcbiAgICAgICAgdGhpcy5zdGF0dXMucHJpc3RpbmUgPSAhZGlydHk7XG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBtYXJrVmFsaWRTdGF0dXModmFsaWQsIGZlZWRiYWNrKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzLnZhbGlkID0gdmFsaWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzLmludmFsaWQgPSAhdmFsaWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzLmZlZWRiYWNrID0gZmVlZGJhY2s7XG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdyZXBlYXQnXG59KVxuY2xhc3MgUmVwZWF0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pdGVtRXhwID0gJyc7XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtVmlld3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudW53YXRjaENvbGxlY3Rpb24gPSBudWxsO1xuICAgIH1cblxuICAgIG9uQ29tcGlsZSh2ZWxtLCB2YXR0cikge1xuICAgICAgICB2YXIgYXJnID0gdmF0dHIubm9kZVZhbHVlO1xuICAgICAgICB2YXIgcGF0dGVybiA9IC9eKFthLXpfXStcXHcrKVxccytpblxccysoLispJC9pO1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGF0dGVybi5leGVjKGFyZyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ20tcmVwZWF0OiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1FeHAgPSByZXN1bHRbMV07XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSByZXN1bHRbMl07XG4gICAgICAgIHZlbG0ucmVtb3ZlQXR0cih2YXR0cik7XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gdmVsbS5nZXRPdXRlclRwbCgpO1xuXG4gICAgICAgIC8vIGlkZW50aWZ5IHRoaXMgZGlyZWN0aXZlIHdvdWxkIHRha2Ugb3ZlciBsaW5rIGZ1bmN0aW9uIGZvciByZWxhdGVkIHZpcnR1YWwgZWxlbWVudCBub2RlLCBvbkxpbmsgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb25MaW5rKHNjb3BlKSB7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0OiBtLXJlcGVhdCcpO1xuICAgICAgICB2YXIgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnZW5kOiBtLXJlcGVhdCcpO1xuXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyKHNjb3BlKSk7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICAgICAgdGhpcy51bndhdGNoQ29sbGVjdGlvbiA9IHNjb3BlLiR3YXRjaENvbGxlY3Rpb24odGhpcy5pdGVtc0V4cCwgKCkgPT4ge1xuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gdGhpcy5yZW5kZXIoc2NvcGUpO1xuICAgICAgICAgICAgZG9tLnJlbW92ZUVsZW1lbnRzQmV0d2VlbihoZWFkZXIsIGZvb3Rlcik7XG4gICAgICAgICAgICBmb290ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsIGZvb3Rlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG5cbiAgICByZW5kZXIoc2NvcGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgaXRlbXMgPSBzY29wZS4kZXZhbCh0aGlzLml0ZW1zRXhwKTtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB2YXIgaXRlbVZpZXdzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIHV0aWxzLmZvckVhY2goaXRlbXMsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBpdGVtVmlldyA9IHNlbGYuZ2V0Vmlld0Zyb21CdWZmZXIoc2VsZi5pdGVtVmlld3MsIGl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAoIWl0ZW1WaWV3KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2FscyA9IHt9O1xuICAgICAgICAgICAgICAgIGxvY2Fsc1snJGtleSddID0ga2V5O1xuICAgICAgICAgICAgICAgIGxvY2Fsc1snJGluZGV4J10gPSBrZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxzW3NlbGYuaXRlbUV4cF0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIGl0ZW1WaWV3ID0gc2VsZi4kcmVuZGVyKHNlbGYuaXRlbVRlbXBsYXRlLCBsb2NhbHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnNldFZpZXdUb0J1ZmZlcihpdGVtVmlld3MsIGl0ZW0sIGl0ZW1WaWV3KTtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGl0ZW1WaWV3LmNvbnRlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLml0ZW1WaWV3cy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgICAgICAgICB2aWV3LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLml0ZW1WaWV3cyA9IGl0ZW1WaWV3cztcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuXG4gICAgZ2V0Vmlld0Zyb21CdWZmZXIoYnVmZmVyLCBkYXRhSXRlbSkge1xuICAgICAgICB2YXIgdmlldztcblxuICAgICAgICBpZiAoYnVmZmVyLmhhcyhkYXRhSXRlbSkpIHtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gYnVmZmVyLmdldChkYXRhSXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZpZXcgPSBsaXN0LnNoaWZ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5kZWxldGUoZGF0YUl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfVxuXG4gICAgc2V0Vmlld1RvQnVmZmVyKGJ1ZmZlciwgZGF0YUl0ZW0sIHZpZXcpIHtcbiAgICAgICAgdmFyIGxpc3Q7XG5cbiAgICAgICAgaWYgKGJ1ZmZlci5oYXMoZGF0YUl0ZW0pKSB7XG4gICAgICAgICAgICBsaXN0ID0gYnVmZmVyLmdldChkYXRhSXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgICBidWZmZXIuc2V0KGRhdGFJdGVtLCBsaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaCh2aWV3KTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaXRlbVZpZXdzLmZvckVhY2goKGxpc3QpID0+IGxpc3QuZm9yRWFjaCh2aWV3ID0+IHZpZXcuZGVzdHJveSgpKSk7XG4gICAgICAgIHRoaXMudW53YXRjaENvbGxlY3Rpb24gJiYgdGhpcy51bndhdGNoQ29sbGVjdGlvbigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ3Nob3cnXG59KVxuY2xhc3MgU2hvd0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpc1t2YWx1ZSA/ICckc2hvd0VsZW1lbnQnIDogJyRoaWRlRWxlbWVudCddKCk7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnY2hlY2tlZCdcbn0pXG5jbGFzcyBDaGVja2VkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignY2hlY2tlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ2Rpc2FibGVkJ1xufSlcbmNsYXNzIERpc2FibGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGlzYWJsZWQnKTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9jaGVja2VkJ1xuZXhwb3J0ICogZnJvbSAnLi9kaXNhYmxlZCdcbmV4cG9ydCAqIGZyb20gJy4vcmVhZG9ubHknXG5leHBvcnQgKiBmcm9tICcuL3NlbGVjdGVkJyIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAncmVhZG9ubHknXG59KVxuY2xhc3MgUmVhZG9ubHlEaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdyZWFkb25seScpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ3NlbGVjdGVkJ1xufSlcbmNsYXNzIFNlbGVjdGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignc2VsZWN0ZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3Ioa2V5KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLiRlbGVtZW50Lmhhc0F0dHJpYnV0ZSh0aGlzLmtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLmtleSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQuaGFzQXR0cmlidXRlKHRoaXMua2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBDbGFzc0RpcmVjdGl2ZSB9IGZyb20gJy4vY2xhc3MnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdjbGFzc0V2ZW4nXHJcbn0pXHJcbmNsYXNzIENsYXNzRXZlbkRpcmVjdGl2ZSBleHRlbmRzIENsYXNzRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kZXZhbCgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9jbGFzcyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ2NsYXNzT2RkJ1xyXG59KVxyXG5jbGFzcyBDbGFzc09kZERpcmVjdGl2ZSBleHRlbmRzIENsYXNzRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kZXZhbCgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vZG9tJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnY2xhc3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGFzc0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKG5ld0NsYXNzLCBvbGRDbGFzcykge1xyXG4gICAgICAgIGlmICh0aGlzLnNraXBDdXJyZW50RWxtKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9sZENsYXNzKSB7XHJcbiAgICAgICAgICAgIGRvbS5yZW1vdmVDbGFzcyh0aGlzLiRlbGVtZW50LCBvbGRDbGFzcy5qb2luKCcgJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5ld0NsYXNzKSB7XHJcbiAgICAgICAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLiRlbGVtZW50LCBuZXdDbGFzcy5qb2luKCcgJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9jbGFzcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3MtZXZlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3Mtb2RkJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUtZXZlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUtb2RkJzsiLCJpbXBvcnQgeyBTdHlsZURpcmVjdGl2ZSB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdzdHlsZUV2ZW4nXHJcbn0pXHJcbmNsYXNzIFN0eWxlRXZlbkRpcmVjdGl2ZSBleHRlbmRzIFN0eWxlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kZXZhbCgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0eWxlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ3N0eWxlT2RkJ1xyXG59KVxyXG5jbGFzcyBTdHlsZU9kZERpcmVjdGl2ZSBleHRlbmRzIFN0eWxlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kZXZhbCgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ3N0eWxlJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UobmV3U3R5bGUsIG9sZFN0eWxlKSB7XG4gICAgICAgIGlmICh0aGlzLnNraXBDdXJyZW50RWxtKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAob2xkU3R5bGUpIHtcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2gob2xkU3R5bGUsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kZWxlbWVudC5zdHlsZVtrZXldID0gJyc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc09iamVjdChuZXdTdHlsZSkpIHtcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2gobmV3U3R5bGUsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNraXBDdXJyZW50RWxtKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vc3dpdGNoJ1xuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gtZGVmYXVsdCdcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoLXdoZW4nIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnc3dpdGNoRGVmYXVsdCdcbn0pXG5jbGFzcyBTd2l0Y2hEZWZhdWx0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsID0gbnVsbDtcbiAgICAgICAgdGhpcy4kcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdzd2l0Y2gtZGVmYXVsdCcpO1xuICAgIH1cblxuICAgIGFmdGVyTGluaygpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsID0gdGhpcy4kc2Vla1VwRGlyZWN0aXZlKCdzd2l0Y2gnKTtcblxuICAgICAgICBpZiAodGhpcy5zd2l0Y2hDdHJsID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZSBtLXN3aXRjaCBkaXJlY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybC5tYXRjaERlZmF1bHQub24oKCkgPT4ge1xuICAgICAgICAgICAgdGhpc1t0aGlzLnN3aXRjaEN0cmwuZGVmYXVsdE1hdGNoZWQgPyAnJGFwcGVuZEVsZW1lbnQnIDogJyRyZW1vdmVFbGVtZW50J10oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoIXRoaXMuc3dpdGNoQ3RybC5kZWZhdWx0TWF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy4kcmVtb3ZlRWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ3N3aXRjaFdoZW4nXG59KVxuY2xhc3MgU3dpdGNoV2hlbkRpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gbmV3IE1lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy4kcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdzd2l0Y2gtd2hlbicpO1xuICAgIH1cblxuICAgIGFmdGVyTGluaygpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsID0gdGhpcy4kc2Vla1VwRGlyZWN0aXZlKCdzd2l0Y2gnKTtcblxuICAgICAgICBpZiAodGhpcy5zd2l0Y2hDdHJsID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZSBtLXN3aXRjaCBkaXJlY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybC5jaGFuZ2VkLm9uKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBtYXRjaGVkID0gdGhpcy5zd2l0Y2hDdHJsLnZhbHVlID09PSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIGlmKHRoaXMubWF0Y2hlZCAhPSBtYXRjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLm1hdGNoZWQgPSBtYXRjaGVkO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoQ3RybC5wbHVzTWF0Y2goKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hDdHJsLm1pbnVzTWF0Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNbbWF0Y2hlZCA/ICckYXBwZW5kRWxlbWVudCcgOiAnJHJlbW92ZUVsZW1lbnQnXSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdzd2l0Y2gnXG59KVxuY2xhc3MgU3dpdGNoRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMubWF0Y2hDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuZGVmYXVsdE1hdGNoZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm1hdGNoRGVmYXVsdCA9IG5ldyBNZXNzYWdlKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNoYW5nZWQuZmlyZSgpO1xuICAgIH1cblxuICAgIHBsdXNNYXRjaCgpIHtcbiAgICAgICAgdGhpcy5tYXRjaENvdW50Kys7XG4gICAgICAgIHRoaXMuY2hlY2tEZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgbWludXNNYXRjaCgpIHtcbiAgICAgICAgdGhpcy5tYXRjaENvdW50LS07XG4gICAgICAgIHRoaXMuY2hlY2tEZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY2hlY2tEZWZhdWx0KCkge1xuICAgICAgICB2YXIgZGVmYXVsdE1hdGNoZWQgPSB0aGlzLm1hdGNoQ291bnQgPD0gMDtcblxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0TWF0Y2hlZCAhPT0gZGVmYXVsdE1hdGNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdE1hdGNoZWQgPSBkZWZhdWx0TWF0Y2hlZDtcbiAgICAgICAgICAgIHRoaXMubWF0Y2hEZWZhdWx0LmZpcmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJcbmZ1bmN0aW9uIGdldENoaWxkcmVuT2ZFbGVtZW50KGVsbSkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbG0uY2hpbGROb2RlcywgMCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQoZWxtKSB7XG4gICAgZ2V0Q2hpbGRyZW5PZkVsZW1lbnQoZWxtKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBlbG0ucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlRWxlbWVudChlbG0sIG5ld0VsbSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gZWxtLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbG0sIGVsbSk7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxtKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWxtKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBlbG0ucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxtKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRzQmV0d2VlbihzdGFydEVsbSwgZW5kRWxtKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBzdGFydEVsbS5wYXJlbnROb2RlO1xuICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGRyZW5PZkVsZW1lbnQocGFyZW50Tm9kZSk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgPT09IHN0YXJ0RWxtICYmIGNoaWxkICE9PSBlbmRFbG0pIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyA9PT0gZW5kRWxtICYmIGNoaWxkICE9PSBzdGFydEVsbSkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kRWxlbWVudChlbG0sIG5ld0VsbSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gZWxtLnBhcmVudE5vZGU7XG5cbiAgICBpZiAocGFyZW50Tm9kZS5sYXN0Q2hpbGQgPT09IGVsbSkge1xuICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld0VsbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWxtLCBlbG0ubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MgKGVsbSwgY2xzKSB7XG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZWxtLmNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbHMuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5jbGFzc0xpc3QuYWRkKGMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsbS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgICAgIGlmIChjdXIuaW5kZXhPZignICcgKyBjbHMgKyAnICcpIDwgMCkge1xuICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoY3VyICsgY2xzKS50cmltKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyAoZWxtLCBjbHMpIHtcbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChlbG0uY2xhc3NMaXN0KSB7XG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtLmNsYXNzTGlzdC5yZW1vdmUoYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbG0uY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbG0uZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgICAgICB2YXIgdGFyID0gJyAnICsgY2xzICsgJyAnO1xuICAgICAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XG4gICAgICAgICAgICBjdXIgPSBjdXIucmVwbGFjZSh0YXIsICcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgY3VyID0gY3VyLnRyaW0oKTtcbiAgICAgICAgaWYgKGN1cikge1xuICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjdXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZFN0eWxlU3RyaW5nKGNzcykge1xuICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxuZXhwb3J0IHtcbiAgICBhZGRDbGFzcyxcbiAgICByZW1vdmVDbGFzcyxcbiAgICBhcHBlbmRFbGVtZW50LFxuICAgIHJlbW92ZUVsZW1lbnQsXG4gICAgcmVwbGFjZUVsZW1lbnQsXG4gICAgZ2V0Q2hpbGRyZW5PZkVsZW1lbnQsXG4gICAgcmVtb3ZlRWxlbWVudHNCZXR3ZWVuLFxuICAgIGNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQsXG4gICAgbG9hZFN0eWxlU3RyaW5nXG59OyIsImltcG9ydCB7IEFTVCB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgcGFyc2VFeHAgfSAgZnJvbSAnLi9leHAtYXBpJztcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcblxuY2xhc3MgQWNjZXNzb3Ige1xuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgZXhwKSB7XG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHt9O1xuICAgIH1cblxuICAgIGNyZWF0ZUNoaWxkKGtleSwgY2FsbGVlLCBleHApIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5ba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltrZXldO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFuYWx5c2VyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJzZXIpIHtcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBwYXJzZXIgfHwge1xuICAgICAgICAgICAgcGFyc2VFeHByZXNzaW9uOiBwYXJzZUV4cFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgICAgICB0aGlzLmFjY2Vzc29yID0ge307XG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBFeHBCdWlsZGVyKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQWNjZXNzb3Ioa2V5LCBjYWxsZWUsIGV4cCkge1xuICAgICAgICBpZiAoIXRoaXMuYWNjZXNzb3Jba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5hY2Nlc3NvcltrZXldID0gbmV3IEFjY2Vzc29yKGNhbGxlZSwgZXhwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmFjY2Vzc29yW2tleV07XG4gICAgfVxuXG4gICAgYW5hbHlzZShleHApIHtcbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLnBhcnNlci5wYXJzZUV4cHJlc3Npb24oZXhwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5hbHlzZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZVByb2dyYW0ocHJvZ3JhbSkge1xuICAgICAgICB0aGlzLmFjY2Vzc29yID0ge307XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHByb2dyYW0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHRoaXMuYW5hbHlzZU5vZGUoY2hpbGQpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjZXNzb3I7XG4gICAgfVxuXG4gICAgYW5hbHlzZU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VFeHByZXNzaW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQXNzaWdubWVudChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VDb25kaXRpb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VMb2dpYyhub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQmluYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuVW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZVVuYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQ2FsbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlTWVtYmVyKG5vZGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuSWRlbnRpZmllcjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VJZGVudGlmaWVyKG5vZGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VMaXRlcmFsKG5vZGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUFycmF5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuUHJvcGVydHk6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlUHJvcGVydHkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZU9iamVjdChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYW5hbHlzZUV4cHJlc3Npb24oZXhwKSB7XG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gdGhpcy5hbmFseXNlTm9kZShjaGlsZCkpO1xuICAgIH1cblxuICAgIGFuYWx5c2VBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShhc3NpZ25tZW50LnJpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmFseXNlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNvbmRpdGlvbi50ZXN0KTtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24uYWx0ZXJuYXRlKTtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24uY29uc2VxdWVudCk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUxvZ2ljKGxvZ2ljKSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobG9naWMubGVmdCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobG9naWMucmlnaHQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VCaW5hcnkoYmluYXJ5KSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYmluYXJ5LmxlZnQpO1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGJpbmFyeS5yaWdodCk7XG4gICAgfVxuXG4gICAgYW5hbHlzZVVuYXJ5KHVuYXJ5KSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUodW5hcnkuYXJnKTtcbiAgICB9XG5cbiAgICBhbmFseXNlQ2FsbChjYWxsKSB7XG4gICAgICAgIGNhbGwuYXJncy5mb3JFYWNoKGFyZyA9PiB0aGlzLmFuYWx5c2VOb2RlKGFyZykpO1xuXG4gICAgICAgIGlmICghY2FsbC5maWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY2FsbC5jYWxsZWUsIHsgY2FsbGVlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5hbHlzZU1lbWJlcihtZW1iZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLm9iamVjdCk7XG5cbiAgICAgICAgaWYgKG1lbWJlci5jb21wdXRlZCkge1xuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShtZW1iZXIucHJvcGVydHksIHtcbiAgICAgICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWVtYmVyLnByb3BlcnR5LnR5cGUgPT09IEFTVC5MaXRlcmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5jcmVhdGVDaGlsZChtZW1iZXIucHJvcGVydHkudmFsdWUsIGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKG1lbWJlci5wcm9wZXJ0eSk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3JlYXRlQ2hpbGQoa2V5LCBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUlkZW50aWZpZXIoaWRlbnRpZmllciwgY29udGV4dCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGlkZW50aWZpZXIpLFxuICAgICAgICAgICAgY2FsbGVlID0gY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZTtcblxuICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucGFyZW50LmNyZWF0ZUNoaWxkKGtleSwgY2FsbGVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUFjY2Vzc29yKGtleSwgY2FsbGVlKTtcbiAgICB9XG5cbiAgICBhbmFseXNlTGl0ZXJhbChsaXRlcmFsLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQobGl0ZXJhbCk7XG5cbiAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnBhcmVudC5jcmVhdGVDaGlsZChrZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5hbHlzZVByb3BlcnR5KHByb3ApIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShwcm9wLnZhbHVlKTtcbiAgICB9XG5cbiAgICBhbmFseXNlT2JqZWN0KG9iaikge1xuICAgICAgICBvYmoucHJvcGVydGllcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5hbmFseXNlTm9kZShpdGVtKSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUFycmF5KGFycikge1xuICAgICAgICBhcnIuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHRoaXMuYW5hbHlzZShjaGlsZCkpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBBU1QsIE51bGxFeHByZXNzaW9uTm9kZSB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgRXhwQnVpbGRlciB9IGZyb20gJy4vZXhwLWJ1aWxkZXInO1xuaW1wb3J0IHsgcGFyc2VFeHAgfSAgZnJvbSAnLi9leHAtYXBpJztcblxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgYXNzaWduSW50ZXJjZXB0b3I6IG51bGwsXG4gICAgbG9jYWxzOiBudWxsXG59O1xuXG5leHBvcnQgY2xhc3MgRXZhbHVhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEV4cEJ1aWxkZXIoKTtcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBzY29wZS4kcGFyc2VyIHx8IHtwYXJzZUV4cHJlc3Npb246IHBhcnNlRXhwfTtcbiAgICB9XG5cbiAgICAvLyBnZXQgdmFsdWUgZnJvbSBleHByZXNzaW9uXG4gICAgZXZhbHVhdGUoZXhwKSB7XG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5wYXJzZXIucGFyc2VFeHByZXNzaW9uKGV4cCk7XG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZVByb2dyYW0ocHJvZ3JhbSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG5cbiAgICAgICAgdGhpcy5wcm9ncmFtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTm9kZShjaGlsZCkpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LiRudWxsKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBzZXQgdmFsdWUgdG8gZXhwcmVzc2lvblxuICAgIGFzc2lnbihleHAsIHZhbHVlKSB7XG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5wYXJzZXIucGFyc2VFeHByZXNzaW9uKGV4cCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnblByb2dyYW0ocHJvZ3JhbSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGFzc2lnblByb2dyYW0ocHJvZ3JhbSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcblxuICAgICAgICBpZiAodGhpcy5wcm9ncmFtLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGV4cHJlc3Npb24gPSB0aGlzLnByb2dyYW0uY2hpbGROb2Rlc1swXTtcblxuICAgICAgICBpZiAoZXhwcmVzc2lvbi5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXNzaWdubWVudCA9IGV4cHJlc3Npb24uY2hpbGROb2Rlc1swXTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudC50eXBlID09PSBBU1QuTWVtYmVyRXhwcmVzc2lvbikge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQub2JqZWN0KTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG51bGwgb3IgdW5kZWZpbmVkJywgdGhpcy5idWlsZGVyLmJ1aWxkKGFzc2lnbm1lbnQub2JqZWN0KSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5OiAhYXNzaWdubWVudC5jb21wdXRlZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChrZXkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBudWxsIG9yIHVuZGVmaW5lZCcsIHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50LnByb3BlcnR5KSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yLmNhbGwodGhpcywgdGFyZ2V0LCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhc3NpZ25tZW50LnR5cGUgPT09IEFTVC5JZGVudGlmaWVyKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGFzc2lnbm1lbnQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRoaXMuc2NvcGUsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2YWx1YXRlTm9kZShub2RlLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUV4cHJlc3Npb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQXNzaWdubWVudChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQ29uZGl0aW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUxvZ2ljKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQmluYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQmluYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuVW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVVbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVDYWxsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTWVtYmVyRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTWVtYmVyKG5vZGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuSWRlbnRpZmllcjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlSWRlbnRpZmllcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUxpdGVyYWwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5BcnJheUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUFycmF5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuUHJvcGVydHk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZVByb3BlcnR5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlT2JqZWN0KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUV4cHJlc3Npb24oZXhwKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTm9kZShjaGlsZCkpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQubGVmdCwge1xuICAgICAgICAgICAgYXNzaWdubWVudExlZnQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQucmlnaHQpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFyZ2V0Lm9ialt0YXJnZXQucHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRhcmdldC5vYmosIHRhcmdldC5wcm9wLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZUNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuZXZhbHVhdGVOb2RlKGNvbmRpdGlvbi50ZXN0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKGNvbmRpdGlvbi5hbHRlcm5hdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKGNvbmRpdGlvbi5jb25zZXF1ZW50KTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUxvZ2ljKGxvZ2ljKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShsb2dpYy5sZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShsb2dpYy5yaWdodCk7XG5cbiAgICAgICAgc3dpdGNoIChsb2dpYy5vcGVyYXRvcikge1xuICAgICAgICAgICAgY2FzZSAnJiYnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnfHwnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUJpbmFyeShiaW5hcnkpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGJpbmFyeS5sZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShiaW5hcnkucmlnaHQpO1xuXG4gICAgICAgIC8vICcrJywgJy0nLCAnKicsICcvJywgJyUnLCAnPCcsICc+JywgJzw9JywgJz49JywgJz09JywgJyE9JywgJz09PScsICchPT0nXG4gICAgICAgIHN3aXRjaCAoYmluYXJ5Lm9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKyByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAqIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLyByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICUgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPT0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnIT0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPT09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICchPT0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVVbmFyeSh1bmFyeSkge1xuICAgICAgICB2YXIgcmVzdWx0LFxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZSh1bmFyeS5hcmcpO1xuXG4gICAgICAgIHN3aXRjaCAodW5hcnkub3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gLXZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnISc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIXZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUNhbGwoY2FsbCkge1xuICAgICAgICB2YXIgYXJnVmFsdWVzID0gY2FsbC5hcmdzLm1hcChhcmcgPT4gdGhpcy5ldmFsdWF0ZU5vZGUoYXJnKSk7XG5cbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmV2YWx1YXRlTm9kZShjYWxsLmNhbGxlZSwge1xuICAgICAgICAgICAgY2FsbGVlOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjYWxsLmZpbHRlcikge1xuICAgICAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMucGFyc2VyLnJlc29sdmVGaWx0ZXIoY29udGV4dC5wcm9wKTtcblxuICAgICAgICAgICAgaWYoZmlsdGVyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpbHRlciBcIicgKyBjb250ZXh0LnByb3AgKyAnXCIgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlci50cmFuc2Zvcm0uYXBwbHkoZmlsdGVyLCBhcmdWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGZuID0gY29udGV4dC5vYmpbY29udGV4dC5wcm9wXTtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0Lm9iaiwgYXJnVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb250ZXh0LnByb3AgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZU1lbWJlcihtZW1iZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5vYmplY3QpO1xuXG4gICAgICAgIGlmIChvYmogPT0gbnVsbCAmJiAodGhpcy5vcHRpb25zLmFsbG93TnVsbCB8fCBtZW1iZXIub2JqZWN0LmFsbG93TnVsbCkpIHtcbiAgICAgICAgICAgIG9iaiA9IG5ldyBOdWxsRXhwcmVzc2lvbk5vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLnByb3BlcnR5KTtcbiAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgICB0YXJnZXQ6IG9iaixcbiAgICAgICAgICAgIHRhcmdldE5vZGU6IG1lbWJlci5vYmplY3QsXG4gICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50TGVmdDogY29udGV4dCAmJiBjb250ZXh0LmFzc2lnbm1lbnRMZWZ0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV2YWx1YXRlSWRlbnRpZmllcihpZGVudGlmaWVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciB0YXJnZXQ7XG5cbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwge307XG5cbiAgICAgICAgaWYgKGNvbnRleHQudGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLnNjb3BlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0ID0gY29udGV4dC50YXJnZXRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0LmFzc2lnbm1lbnRMZWZ0IHx8IGNvbnRleHQuY2FsbGVlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9iajogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIHByb3A6IGlkZW50aWZpZXIubmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0LnByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gaWRlbnRpZmllci5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldFtpZGVudGlmaWVyLm5hbWVdO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMubG9jYWxzKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLm9wdGlvbnMubG9jYWxzW2lkZW50aWZpZXIubmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlTGl0ZXJhbChsaXRlcmFsKSB7XG4gICAgICAgIHJldHVybiBsaXRlcmFsLnZhbHVlO1xuICAgIH1cblxuICAgIGV2YWx1YXRlUHJvcGVydHkocHJvcCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5ldmFsdWF0ZU5vZGUocHJvcC5rZXksIHtcbiAgICAgICAgICAgIHByb3BlcnR5S2V5OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKHByb3AudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGV2YWx1YXRlT2JqZWN0KG9iaikge1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICAgICAgb2JqLnByb3BlcnRpZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHZhciBkZWYgPSB0aGlzLmV2YWx1YXRlTm9kZShpdGVtKTtcbiAgICAgICAgICAgIHJlc3VsdFtkZWYua2V5XSA9IGRlZi52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUFycmF5KGFycikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgYXJyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmV2YWx1YXRlTm9kZShjaGlsZCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4vZXhwLWxleGVyJztcbmltcG9ydCB7IEV4cFBhcnNlciB9IGZyb20gJy4vZXhwLXBhcnNlcic7XG5cbmZ1bmN0aW9uIGxleEV4cChleHApIHtcbiAgICByZXR1cm4gbmV3IEV4cExleGVyKCkubGV4KGV4cCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRXhwKGV4cCkge1xuICAgIHJldHVybiBuZXcgRXhwUGFyc2VyKG5ldyBFeHBMZXhlcigpKS5wYXJzZShleHApO1xufVxuXG5leHBvcnQgeyBsZXhFeHAsIHBhcnNlRXhwIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBFeHBCdWlsZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIGJ1aWxkKG5vZGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkRXhwcmVzc2lvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRBc3NpZ25tZW50KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRDb25kaXRpb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkTG9naWMobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRCaW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZFVuYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZENhbGwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRNZW1iZXIobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRJZGVudGlmaWVyKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkTGl0ZXJhbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQXJyYXkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkUHJvcGVydHkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRPYmplY3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGJ1aWxkRXhwcmVzc2lvbihleHApIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICBleHAuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGQoY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGJ1aWxkQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmJ1aWxkKGFzc2lnbm1lbnQubGVmdCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQoYXNzaWdubWVudC5yaWdodCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfT17MX0nLCB0YXJnZXQsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZENvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICAgICAgdmFyIHRlc3QgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi50ZXN0KTtcbiAgICAgICAgdmFyIGFsdGVybmF0ZSA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLmFsdGVybmF0ZSk7XG4gICAgICAgIHZhciBjb25zZXF1ZW50ID0gdGhpcy5idWlsZChjb25kaXRpb24uY29uc2VxdWVudCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfT97MX06ezJ9JywgdGVzdCwgYWx0ZXJuYXRlLCBjb25zZXF1ZW50KTtcbiAgICB9XG5cbiAgICBidWlsZExvZ2ljKGxvZ2ljKSB7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmJ1aWxkKGxvZ2ljLmxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuYnVpbGQobG9naWMucmlnaHQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX17Mn0nLCBsZWZ0VmFsdWUsIGxvZ2ljLm9wZXJhdG9yLCByaWdodFZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZEJpbmFyeShiaW5hcnkpIHtcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuYnVpbGQoYmluYXJ5LmxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuYnVpbGQoYmluYXJ5LnJpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9ezF9ezJ9JywgbGVmdFZhbHVlLCBiaW5hcnkub3BlcmF0b3IsIHJpZ2h0VmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkVW5hcnkodW5hcnkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZCh1bmFyeS5hcmcpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX0nLCB1bmFyeS5vcGVyYXRvciwgdmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkQ2FsbChjYWxsKSB7XG4gICAgICAgIHZhciByZXMgPSAnJywgYXJnVmFsdWVzID0gY2FsbC5hcmdzLm1hcChhcmcgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoYXJnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGZuID0gdGhpcy5idWlsZChjYWxsLmNhbGxlZSk7XG5cbiAgICAgICAgaWYgKGNhbGwuZmlsdGVyKSB7XG4gICAgICAgICAgICBpZiAoYXJnVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXMgPSBhcmdWYWx1ZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzICs9ICcgfCAnICsgZm47XG5cbiAgICAgICAgICAgIGlmIChhcmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlcyArPSAnOicgKyBhcmdWYWx1ZXMuam9pbignOicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzID0gdXRpbHMuZm9ybWF0KCd7MH0oezF9KScsIGZuLCBhcmdWYWx1ZXMuam9pbignLCAnKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGJ1aWxkTWVtYmVyKG1lbWJlcikge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5idWlsZChtZW1iZXIub2JqZWN0KTtcbiAgICAgICAgdmFyIHByb3AgPSB0aGlzLmJ1aWxkKG1lbWJlci5wcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKG1lbWJlci5jb21wdXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9W3sxfV0nLCBvYmosIHByb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9LnsxfScsIG9iaiwgcHJvcCk7XG4gICAgfVxuXG4gICAgYnVpbGRJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aWZpZXIubmFtZTtcbiAgICB9XG5cbiAgICBidWlsZExpdGVyYWwobGl0ZXJhbCkge1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobGl0ZXJhbC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ1wiezB9XCInLCBsaXRlcmFsLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXRlcmFsLnZhbHVlO1xuICAgIH1cblxuICAgIGJ1aWxkUHJvcGVydHkocHJvcCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZChwcm9wLmtleSwge1xuICAgICAgICAgICAgcHJvcGVydHlLZXk6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZChwcm9wLnZhbHVlKTtcblxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH06ezF9Jywga2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRPYmplY3Qob2JqKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IG9iai5wcm9wZXJ0aWVzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7ezB9fScsIHByb3BzLmpvaW4oJywgJykpO1xuICAgIH1cblxuICAgIGJ1aWxkQXJyYXkoYXJyKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IGFyci5jaGlsZE5vZGVzLm1hcChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ1t7MH1dJywgaXRlbXMuam9pbignLCcpKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgT1BFUkFUT1JTIH0gZnJvbSAnLi9leHAtb3BlcmF0b3JzJztcbmltcG9ydCB7IHBhcnNlT3B0aW9ucyB9IGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBFeHBMZXhlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShwYXJzZU9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGxleCh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy4nICYmIHRoaXMuaXNOdW1iZXIodGhpcy5wZWVrKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkTnVtYmVyKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyhjaCwgJygpe31bXS4sOzo/JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGNoIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2gyID0gY2ggKyB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgICAgICB2YXIgY2gzID0gY2gyICsgdGhpcy5wZWVrKDIpO1xuICAgICAgICAgICAgICAgIHZhciBvcDEgPSBPUEVSQVRPUlNbY2hdO1xuICAgICAgICAgICAgICAgIHZhciBvcDIgPSBPUEVSQVRPUlNbY2gyXTtcbiAgICAgICAgICAgICAgICB2YXIgb3AzID0gT1BFUkFUT1JTW2NoM107XG4gICAgICAgICAgICAgICAgaWYgKG9wMSB8fCBvcDIgfHwgb3AzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IG9wMyA/IGNoMyA6IChvcDIgPyBjaDIgOiBjaCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogdG9rZW4sIG9wZXJhdG9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHRva2VuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgaXMoY2gsIGNoYXJzKSB7XG4gICAgICAgIHJldHVybiBjaGFycy5pbmRleE9mKGNoKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgcGVlayhpKSB7XG4gICAgICAgIHZhciBudW0gPSBpIHx8IDE7XG4gICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8IHRoaXMudGV4dC5sZW5ndGgpID8gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4ICsgbnVtKSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGlzTnVtYmVyKGNoKSB7XG4gICAgICAgIHJldHVybiAoJzAnIDw9IGNoICYmIGNoIDw9ICc5JykgJiYgdHlwZW9mIGNoID09PSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICBpc1doaXRlc3BhY2UoY2gpIHtcbiAgICAgICAgLy8gSUUgdHJlYXRzIG5vbi1icmVha2luZyBzcGFjZSBhcyBcXHUwMEEwXG4gICAgICAgIHJldHVybiAoY2ggPT09ICcgJyB8fCBjaCA9PT0gJ1xccicgfHwgY2ggPT09ICdcXHQnIHx8XG4gICAgICAgICAgICBjaCA9PT0gJ1xcbicgfHwgY2ggPT09ICdcXHYnIHx8IGNoID09PSAnXFx1MDBBMCcpO1xuICAgIH1cblxuICAgIGlzSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQgP1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0KGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxuICAgICAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxuICAgICAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnKTtcbiAgICB9XG5cbiAgICBpc0lkZW50aWZpZXJDb250aW51ZShjaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlID9cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZShjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCwgY3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpO1xuICAgIH1cblxuICAgIGNvZGVQb2ludEF0KGNoKSB7XG4gICAgICAgIGlmIChjaC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjaC5jaGFyQ29kZUF0KDApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICAgIHJldHVybiAoY2guY2hhckNvZGVBdCgwKSA8PCAxMCkgKyBjaC5jaGFyQ29kZUF0KDEpIC0gMHgzNUZEQzAwO1xuICAgIH1cblxuICAgIHBlZWtNdWx0aWNoYXIoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIHZhciBwZWVrID0gdGhpcy5wZWVrKCk7XG4gICAgICAgIGlmICghcGVlaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjcDEgPSBjaC5jaGFyQ29kZUF0KDApO1xuICAgICAgICB2YXIgY3AyID0gcGVlay5jaGFyQ29kZUF0KDApO1xuICAgICAgICBpZiAoY3AxID49IDB4RDgwMCAmJiBjcDEgPD0gMHhEQkZGICYmIGNwMiA+PSAweERDMDAgJiYgY3AyIDw9IDB4REZGRikge1xuICAgICAgICAgICAgcmV0dXJuIGNoICsgcGVlaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2g7XG4gICAgfVxuXG4gICAgaXNFeHBPcGVyYXRvcihjaCkge1xuICAgICAgICByZXR1cm4gKGNoID09PSAnLScgfHwgY2ggPT09ICcrJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSk7XG4gICAgfVxuXG4gICAgdGhyb3dFcnJvcihlcnJvciwgc3RhcnQsIGVuZCkge1xuICAgICAgICBlbmQgPSBlbmQgfHwgdGhpcy5pbmRleDtcbiAgICAgICAgdmFyIGNvbFN0ciA9ICh1dGlscy5pc0RlZmluZWQoc3RhcnQpID8gJ3MgJyArIHN0YXJ0ICsgJy0nICsgdGhpcy5pbmRleCArICcgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpICsgJ10nIDogJyAnICsgZW5kKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMZXhlciBFcnJvcjogJyArIGVycm9yICsgJyBhdCBjb2x1bW4nICsgY29sU3RyICsgJyBpbiBleHByZXNzaW9uIFsnICsgdGhpcy50ZXh0ICsgJ10uJyk7XG4gICAgfVxuXG4gICAgcmVhZE51bWJlcigpIHtcbiAgICAgICAgdmFyIG51bWJlciA9ICcnO1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHV0aWxzLmxvd2VyY2FzZSh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJy4nIHx8IHRoaXMuaXNOdW1iZXIoY2gpKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVla0NoID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAnZScgJiYgdGhpcy5pc0V4cE9wZXJhdG9yKHBlZWtDaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxuICAgICAgICAgICAgICAgICAgICBwZWVrQ2ggJiYgdGhpcy5pc051bWJlcihwZWVrQ2gpICYmXG4gICAgICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxuICAgICAgICAgICAgICAgICAgICAoIXBlZWtDaCB8fCAhdGhpcy5pc051bWJlcihwZWVrQ2gpKSAmJlxuICAgICAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCBleHBvbmVudCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgIHRleHQ6IG51bWJlcixcbiAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlcihudW1iZXIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlYWRJZGVudCgpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCArPSB0aGlzLnBlZWtNdWx0aWNoYXIoKS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy5wZWVrTXVsdGljaGFyKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNJZGVudGlmaWVyQ29udGludWUoY2gpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGNoLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dC5zbGljZShzdGFydCwgdGhpcy5pbmRleCksXG4gICAgICAgICAgICBpZGVudGlmaWVyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlYWRTdHJpbmcocXVvdGUpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgICAgIHZhciByYXdTdHJpbmcgPSBxdW90ZTtcbiAgICAgICAgdmFyIGVzY2FwZSA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAndScpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhleCA9IHRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyA1KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoZXgubWF0Y2goL1tcXGRhLWZdezR9L2kpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1JyArIGhleCArICddJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSA0O1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXgsIDE2KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcCA9IEVTQ0FQRVtjaF07XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZyArIChyZXAgfHwgY2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlc2NhcGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSBxdW90ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgcXVvdGUnLCBzdGFydCk7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgT1BFUkFUT1JTID0ge307XG5cbnZhciBvcGVyYXRvclRleHQgPSAnKyAtICogLyAlID09PSAhPT0gPT0gIT0gPCA+IDw9ID49ICYmIHx8ICEgPSB8JztcbnZhciBFU0NBUEUgPSB7ICduJzogJ1xcbicsICdmJzogJ1xcZicsICdyJzogJ1xccicsICd0JzogJ1xcdCcsICd2JzogJ1xcdicsICdcXCcnOiAnXFwnJywgJ1wiJzogJ1wiJyB9O1xuXG5vcGVyYXRvclRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgIE9QRVJBVE9SU1tvcGVyYXRvcl0gPSB0cnVlO1xufSk7IiwiaW1wb3J0IHtcbiAgICBBU1QsXG4gICAgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLFxuICAgIEJpbmFyeUV4cHJlc3Npb25Ob2RlLFxuICAgIENhbGxFeHByZXNzaW9uTm9kZSxcbiAgICBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLFxuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLFxuICAgIElkZW50aWZpZXJOb2RlLFxuICAgIExpdGVyYWxOb2RlLFxuICAgIExvZ2ljYWxFeHByZXNzaW9uTm9kZSxcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZSxcbiAgICBPYmplY3RFeHByZXNzaW9uTm9kZSxcbiAgICBQcm9ncmFtTm9kZSxcbiAgICBQcm9wZXJ0eU5vZGUsXG4gICAgVW5hcnlFeHByZXNzaW9uTm9kZSxcbiAgICBBcnJheUV4cHJlc3Npb25Ob2RlXG59IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuL2V4cC1sZXhlcic7XG5pbXBvcnQgeyBwYXJzZU9wdGlvbnMgfSBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgRXhwUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihsZXhlciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKHBhcnNlT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdGhyb3dFcnJvcihtc2csIHRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3ludGF4IEVycm9yOiBUb2tlbiBcXCcnICsgdG9rZW4udGV4dCArICdcXCcnICsgbXNnICsgJyBhdCBjb2x1bW4gJyArICh0b2tlbi5pbmRleCArIDEpICtcbiAgICAgICAgICAgICcgb2YgdGhlIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXSBzdGFydGluZyBhdCBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcodG9rZW4uaW5kZXgpICsgJ10uJyk7XG4gICAgfVxuXG4gICAgcGFyc2UodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvZ3JhbSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgYW4gdW5leHBlY3RlZCB0b2tlbicsIHRoaXMudG9rZW5zWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcm9ncmFtKCkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtTm9kZSgpO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMucGVlaygnfScsICcpJywgJzsnLCAnXScpKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3JhbS5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0KCc7JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cHJlc3Npb25TdGF0ZW1lbnQoKSB7XG4gICAgICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUoKTtcbiAgICAgICAgZXhwLmFwcGVuZENoaWxkKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XG4gICAgICAgIHJldHVybiBleHA7XG4gICAgfVxuXG4gICAgZmlsdGVyQ2hhaW4oKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfCcpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5maWx0ZXIobGVmdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgZXhwcmVzc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xuICAgIH1cblxuICAgIGlzQXNzaWduYWJsZShhc3QpIHtcbiAgICAgICAgcmV0dXJuIGFzdC50eXBlID09PSBBU1QuSWRlbnRpZmllciB8fCBhc3QudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb247XG4gICAgfVxuXG4gICAgYXNzaWdubWVudCgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudGVybmFyeSgpO1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJz0nKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXNzaWduYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYXNzaWduIGEgdmFsdWUgdG8gYSBub24gbC12YWx1ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKHJlc3VsdCwgdGhpcy5hc3NpZ25tZW50KCksICc9Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB0ZXJuYXJ5KCkge1xuICAgICAgICB2YXIgdGVzdCA9IHRoaXMubG9naWNhbE9SKCk7XG4gICAgICAgIHZhciBhbHRlcm5hdGU7XG4gICAgICAgIHZhciBjb25zZXF1ZW50O1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xuICAgICAgICAgICAgYWx0ZXJuYXRlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25zdW1lKCc6JykpIHtcbiAgICAgICAgICAgICAgICBjb25zZXF1ZW50ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlc3Q7XG4gICAgfVxuXG4gICAgbG9naWNhbE9SKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3x8JykpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCd8fCcsIGxlZnQsIHRoaXMubG9naWNhbEFORCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBsb2dpY2FsQU5EKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuZXF1YWxpdHkoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcmJicpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnJiYnLCBsZWZ0LCB0aGlzLmVxdWFsaXR5KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIGVxdWFsaXR5KCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMucmVsYXRpb25hbCgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPT0nLCAnIT0nLCAnPT09JywgJyE9PScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnJlbGF0aW9uYWwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgcmVsYXRpb25hbCgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmFkZGl0aXZlKCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5hZGRpdGl2ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBhZGRpdGl2ZSgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLm11bHRpcGxpY2F0aXZlKCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5tdWx0aXBsaWNhdGl2ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBtdWx0aXBsaWNhdGl2ZSgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnVuYXJ5KCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcqJywgJy8nLCAnJScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnVuYXJ5KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIHVuYXJ5KCkge1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIGlmICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJywgJyEnKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbWFyeSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpbWFyeSgpIHtcbiAgICAgICAgdmFyIHByaW1hcnk7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnKCcpKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5maWx0ZXJDaGFpbigpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ1snKSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuYXJyYXlEZWNsYXJhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCd7JykpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLm9iamVjdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5saXRlcmFscy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnBlZWsoKS50ZXh0KSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBMaXRlcmFsTm9kZSh0aGlzLm9wdGlvbnMubGl0ZXJhbHNbdGhpcy5jb25zdW1lKCkudGV4dF0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuY29uc3RhbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignbm90IGEgcHJpbWFyeSBleHByZXNzaW9uJywgdGhpcy5wZWVrKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoJygnLCAnWycsICcuJykgfHwgKHRoaXMucGVlaygnPycpICYmIHRoaXMucGVla0FoZWFkKDEsICcuJykpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xuICAgICAgICAgICAgICAgIHByaW1hcnkuYWxsb3dOdWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCA9IHRoaXMuZXhwZWN0KCcoJywgJ1snLCAnLicpO1xuXG4gICAgICAgICAgICBpZiAobmV4dC50ZXh0ID09PSAnKCcpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLnBhcnNlQXJndW1lbnRzKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICdbJykge1xuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5leHByZXNzaW9uKCksIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICcuJykge1xuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5pZGVudGlmaWVyKCksIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJTVBPU1NJQkxFJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByaW1hcnk7XG4gICAgfVxuXG4gICAgZmlsdGVyKGJhc2VFeHByZXNzaW9uKSB7XG4gICAgICAgIHZhciBhcmdzID0gW2Jhc2VFeHByZXNzaW9uXSwgaWRlbnRpZmllcnMgPSBbdGhpcy5pZGVudGlmaWVyKCldO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnLicpKSB7XG4gICAgICAgICAgICBpZGVudGlmaWVycy5wdXNoKHRoaXMuaWRlbnRpZmllcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBsdXMgbmFtZXNwYWNlXG4gICAgICAgIHZhciBlbnRpcmVOYW1lID0gaWRlbnRpZmllcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lO1xuICAgICAgICB9KS5qb2luKCcuJyk7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUobmV3IElkZW50aWZpZXJOb2RlKGVudGlyZU5hbWUpLCBhcmdzKTtcblxuICAgICAgICByZXN1bHQuZmlsdGVyID0gdHJ1ZTtcblxuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJzonKSkge1xuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcGFyc2VBcmd1bWVudHMoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICcpJykge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmZpbHRlckNoYWluKCkpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcigpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jb25zdW1lKCk7XG4gICAgICAgIGlmICghdG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBub3QgYSB2YWxpZCBpZGVudGlmaWVyJywgdG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSWRlbnRpZmllck5vZGUodG9rZW4udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3RhbnQoKSB7XG4gICAgICAgIC8vIFRPRE8gY2hlY2sgdGhhdCBpdCBpcyBhIGNvbnN0YW50XG4gICAgICAgIHJldHVybiBuZXcgTGl0ZXJhbE5vZGUodGhpcy5jb25zdW1lKCkudmFsdWUpO1xuICAgIH1cblxuICAgIGFycmF5RGVjbGFyYXRpb24oKSB7XG4gICAgICAgIHZhciBhcnIgPSBuZXcgQXJyYXlFeHByZXNzaW9uTm9kZSgpO1xuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnXScpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCddJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJyLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgb2JqZWN0KCkge1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IFtdLCBwcm9wZXJ0eTtcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ30nKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnfScpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5Tm9kZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmNvbnN0YW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnOicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHByb3BlcnR5LmtleTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCdbJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCdbJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2ludmFsaWQga2V5JywgdGhpcy5wZWVrKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25zdW1lKCd9Jyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBPYmplY3RFeHByZXNzaW9uTm9kZShwcm9wZXJ0aWVzKTtcbiAgICB9XG5cbiAgICBjb25zdW1lKGUxKSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdChlMSk7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFsnICsgZTEgKyAnXScsIHRoaXMucGVlaygpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuXG4gICAgcGVla1Rva2VuKCkge1xuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1swXTtcbiAgICB9XG5cbiAgICBwZWVrKGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlZWtBaGVhZCgwLCBlMSwgZTIsIGUzLCBlNCk7XG4gICAgfVxuXG4gICAgcGVla0FoZWFkKGksIGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiBpKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcbiAgICAgICAgICAgIHZhciB0ID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGlmICh0ID09PSBlMSB8fCB0ID09PSBlMiB8fCB0ID09PSBlMyB8fCB0ID09PSBlNCB8fFxuICAgICAgICAgICAgICAgICghZTEgJiYgIWUyICYmICFlMyAmJiAhZTQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBleHBlY3QoZTEsIGUyLCBlMywgZTQpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5wZWVrKGUxLCBlMiwgZTMsIGU0KTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5zaGlmdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbiIsImV4cG9ydCAqIGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL21vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWxleGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLXBhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9leHAtYnVpbGRlcic7XG5leHBvcnQgKiBmcm9tICcuL2V2YWx1YXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2FuYWx5c2VyJzsiLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBBcnJheUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5BcnJheUV4cHJlc3Npb24pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCwgb3BlcmF0b3IpIHtcbiAgICAgICAgc3VwZXIoQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgIH1cblxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICB9XG59IiwiZXhwb3J0IHZhciBBU1QgPSB7fTtcblxuQVNULlByb2dyYW0gPSAnUHJvZ3JhbSc7XG5BU1QuRXhwcmVzc2lvblN0YXRlbWVudCA9ICdFeHByZXNzaW9uU3RhdGVtZW50JztcbkFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbiA9ICdBc3NpZ25tZW50RXhwcmVzc2lvbic7XG5BU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uID0gJ0NvbmRpdGlvbmFsRXhwcmVzc2lvbic7XG5BU1QuTG9naWNhbEV4cHJlc3Npb24gPSAnTG9naWNhbEV4cHJlc3Npb24nO1xuQVNULkJpbmFyeUV4cHJlc3Npb24gPSAnQmluYXJ5RXhwcmVzc2lvbic7XG5BU1QuVW5hcnlFeHByZXNzaW9uID0gJ1VuYXJ5RXhwcmVzc2lvbic7XG5BU1QuQ2FsbEV4cHJlc3Npb24gPSAnQ2FsbEV4cHJlc3Npb24nO1xuQVNULk1lbWJlckV4cHJlc3Npb24gPSAnTWVtYmVyRXhwcmVzc2lvbic7XG5BU1QuSWRlbnRpZmllciA9ICdJZGVudGlmaWVyJztcbkFTVC5MaXRlcmFsID0gJ0xpdGVyYWwnO1xuQVNULkFycmF5RXhwcmVzc2lvbiA9ICdBcnJheUV4cHJlc3Npb24nO1xuQVNULlByb3BlcnR5ID0gJ1Byb3BlcnR5JztcbkFTVC5PYmplY3RFeHByZXNzaW9uID0gJ09iamVjdEV4cHJlc3Npb24nO1xuXG5leHBvcnQgY2xhc3MgTnVsbEV4cHJlc3Npb25Ob2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4kbnVsbCA9IHRydWU7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIEJpbmFyeUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHN1cGVyKEFTVC5CaW5hcnlFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIENhbGxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgYXJncykge1xuICAgICAgICBzdXBlcihBU1QuQ2FsbEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCkge1xuICAgICAgICBzdXBlcihBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICAgICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XG4gICAgICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5FeHByZXNzaW9uU3RhdGVtZW50KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllck5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHN1cGVyKEFTVC5JZGVudGlmaWVyKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9hc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9hc3Qtbm9kZSc7XG5leHBvcnQgKiBmcm9tICcuL2Fzc2lnbm1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9iaW5hcnknO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxsJztcbmV4cG9ydCAqIGZyb20gJy4vY29uZGl0aW9uYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9leHByZXNzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vaWRlbnRpZmllcic7XG5leHBvcnQgKiBmcm9tICcuL2xpdGVyYWwnO1xuZXhwb3J0ICogZnJvbSAgJy4vbG9naWNhbCc7XG5leHBvcnQgKiBmcm9tICAnLi9tZW1iZXInO1xuZXhwb3J0ICogZnJvbSAgJy4vb2JqZWN0JztcbmV4cG9ydCAqIGZyb20gICcuL3Byb2dyYW0nO1xuZXhwb3J0ICogZnJvbSAgJy4vcHJvcGVydHknO1xuZXhwb3J0ICogZnJvbSAgJy4vdW5hcnknO1xuZXhwb3J0ICogZnJvbSAnLi9hcnJheSc7IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbE5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcihBU1QuTGl0ZXJhbCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgTG9naWNhbEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHN1cGVyKEFTVC5Mb2dpY2FsRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBNZW1iZXJFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIGNvbXB1dGVkKSB7XG4gICAgICAgIHN1cGVyKEFTVC5NZW1iZXJFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgdGhpcy5jb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgICB0aGlzLmFsbG93TnVsbCA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcbiAgICAgICAgc3VwZXIoQVNULk9iamVjdEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmFtTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuUHJvZ3JhbSk7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5Tm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuUHJvcGVydHkpO1xuICAgICAgICB0aGlzLmtpbmQgPSAnaW5pdCc7XG4gICAgICAgIHRoaXMua2V5ID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgVW5hcnlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBhcmcpIHtcbiAgICAgICAgc3VwZXIoQVNULlVuYXJ5RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMucHJlZml4ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLmFyZyA9IGFyZztcbiAgICB9XG59IiwiZXhwb3J0IHZhciBwYXJzZU9wdGlvbnMgPSB7XG4gICAgaXNJZGVudGlmaWVyQ29udGludWU6IGZhbHNlLFxuICAgIGlzSWRlbnRpZmllclN0YXJ0OiBmYWxzZSxcbiAgICBsaXRlcmFsczoge1xuICAgICAgICBmYWxzZTogZmFsc2UsXG4gICAgICAgIG51bGw6IG51bGwsXG4gICAgICAgIHRydWU6IHRydWUsXG4gICAgICAgIHVuZGVmaW5lZDogdW5kZWZpbmVkXG4gICAgfVxufTsiLCJleHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZSc7XG5leHBvcnQgKiBmcm9tICcuL29ic2VydmVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwJztcbmV4cG9ydCAqIGZyb20gJy4vdHBsJztcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XG5leHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7IiwiZXhwb3J0IGNsYXNzIERlbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgdGhpcy5kZWxheUlkID0gbnVsbDtcbiAgICB9XG5cbiAgICBleGVjdXRlKHNjb3BlKSB7XG4gICAgICAgIGlmKHRoaXMuZGVsYXlJZCAhPSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVsYXlJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxheUlkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5jYWxsKHNjb3BlKTtcbiAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5kZWxheUlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5SWQpO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vcHJveHknO1xyXG5leHBvcnQgKiBmcm9tICcuL29ic2VydmVyJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBFdmFsdWF0b3IsIEFuYWx5c2VyIH0gZnJvbSAnLi4vZXhwJztcbmltcG9ydCB7IFdhdGNoZXIgfSBmcm9tICcuL3dhdGNoZXInO1xuaW1wb3J0IHsgRGVsYXllciB9IGZyb20gJy4vZGVsYXllcic7XG5cbmNsYXNzIExpc3RlbmVyIHtcbiAgICBjb25zdHJ1Y3RvcihleHAsIGhhbmRsZXIsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZXhwID0gZXhwO1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldE5ld1ZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldENvbGxlY3Rpb25DaGFuZ2VkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBoYXNDaGFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlQ2hhbmdlZCB8fCB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkO1xuICAgIH1cblxuICAgIG5vdGlmeShzY29wZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLm5ld1ZhbHVlLFxuICAgICAgICAgICAgY29sbGVjdGlvbkNoYW5nZWQgPSB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm5ld1ZhbHVlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVyLmNhbGwoc2NvcGUsIHtcbiAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25DaGFuZ2VkOiBjb2xsZWN0aW9uQ2hhbmdlZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmFjY2Vzc29ycyA9IHt9O1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLndhdGNoZXIgPSBuZXcgV2F0Y2hlcigpO1xuICAgICAgICB0aGlzLmFuYWx5c2VyID0gbmV3IEFuYWx5c2VyKHNjb3BlLiRwYXJzZXIpO1xuICAgICAgICB0aGlzLmRlbGF5ZXIgPSBuZXcgRGVsYXllcih0aGlzLm5vdGlmeSwgMTYpO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3RlbmVyKGV4cCwgaGFuZGxlciwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gbmV3IExpc3RlbmVyKGV4cCwgaGFuZGxlciwgdmFsdWUpO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxuICAgIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgICBpZihpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnkoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgaWYobGlzdGVuZXIuaGFzQ2hhbmdlKCkpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5ub3RpZnkodGhpcy5zY29wZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vdGlmeUNoYW5nZShsaXN0ZW5lciwgbmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5zZXRDb2xsZWN0aW9uQ2hhbmdlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlbGF5ZXIuZXhlY3V0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRBY2Nlc3NvcihleHApIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuYWNjZXNzb3JzW2V4cF07XG5cbiAgICAgICAgaWYoIXJlc3VsdCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlci5hbmFseXNlKGV4cCk7XG4gICAgICAgICAgICB0aGlzLmFjY2Vzc29yc1tleHBdID0gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmNvcHkodHJ1ZSwgcmVzdWx0KTtcbiAgICB9XG5cbiAgICB3YXRjaChleHAsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBhY2Nlc3NvciA9IHRoaXMuZ2V0QWNjZXNzb3IoZXhwKTtcbiAgICAgICAgdmFyIGV2YWx1YXRvciA9ICBuZXcgRXZhbHVhdG9yKHRoaXMuc2NvcGUsIHsgYWxsb3dOdWxsOiB0cnVlLCBsb2NhbHM6IGxvY2FscyB9KTtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5jcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIGV2YWx1YXRvci5ldmFsdWF0ZShleHApKTtcblxuICAgICAgICBmdW5jdGlvbiB1bndhdGNoQWNjZXNzb3JzKGFjY2Vzc29ycykge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChhY2Nlc3NvcnMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oaXRlbS51bndhdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2guY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51bndhdGNoID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3JzLCB0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghdXRpbHMuaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChhY2Nlc3NvcnMsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gdGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZXhwKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGV2YWx1YXRvci5ldmFsdWF0ZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHZhbHVlcyA9PT0gc2VsZi5zY29wZSAmJiBsb2NhbHMgJiYgbG9jYWxzW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gbG9jYWxzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZW0udW53YXRjaCA9IHNlbGYud2F0Y2hlci53YXRjaCh2YWx1ZXMsIGtleSwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbiwgYXJncy5kYXRhLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpZnlDaGFuZ2UobGlzdGVuZXIsIGV2YWx1YXRvci5ldmFsdWF0ZShleHApKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHdhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4sIHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3IsIHRoaXMuc2NvcGUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGFjY2Vzc29yKTtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHdhdGNoQ29sbGVjdGlvbihleHAsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBldmFsdWF0b3IgPSBuZXcgRXZhbHVhdG9yKHRoaXMuc2NvcGUsIHsgYWxsb3dOdWxsOiB0cnVlLCBsb2NhbHM6IGxvY2FscyB9KTtcbiAgICAgICAgdmFyIHVud2F0Y2hQcm9wcyA9IHdhdGNoUHJvcHMoKTtcbiAgICAgICAgdmFyIHVud2F0Y2hFeHAgPSB0aGlzLndhdGNoKGV4cCwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVud2F0Y2hQcm9wcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdW53YXRjaFByb3BzLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bndhdGNoUHJvcHMgPSB3YXRjaFByb3BzKCk7XG4gICAgICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sIGxvY2Fscyk7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCBldmFsdWF0b3IuZXZhbHVhdGUoZXhwKSk7XG5cbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hQcm9wcygpIHtcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCk7XG5cbiAgICAgICAgICAgIGlmICh1dGlscy5pc09iamVjdChjb2xsZWN0aW9uKSB8fCB1dGlscy5pc0FycmF5KGNvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYud2F0Y2hlci53YXRjaChjb2xsZWN0aW9uLCAnKicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpZnlDaGFuZ2UobGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVud2F0Y2hFeHAuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHVud2F0Y2hQcm9wcyAmJiB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGVsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMud2F0Y2hlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxudmFyIGlzUHJveHlTeW1ib2wgPSBTeW1ib2woJ19faXNQcm94eScpLFxuICAgIHRhcmdldFN5bWJvbCA9IFN5bWJvbCgnX190YXJnZXQnKTtcblxudmFyIGhhbmRsZXIgPSB7XG4gICAgZ2V0OiBnZXRQcm94eSxcbiAgICBzZXQ6IHNldFByb3h5XG59O1xuXG4vLyBleHRlbmRzIG9iamVjdCBwcm90b3R5cGUsIGFkZCBmdW5jdGlvbiB0b1Byb3h5XG4vLyBPYmplY3QucHJvdG90eXBlLnRvUHJveHkgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgcmV0dXJuIGlzUHJveHkodGhpcykgPyB0aGlzIDogbmV3IFByb3h5KHRoaXMsIGhhbmRsZXIpO1xuLy8gfTtcblxuZnVuY3Rpb24gaXNQcm94eShwcm94eSkge1xuICAgIHJldHVybiB1dGlscy5pc09iamVjdChwcm94eSkgJiYgcHJveHlbaXNQcm94eVN5bWJvbF07XG59XG5cbmZ1bmN0aW9uIGdldFRhcmdldChwcm94eSkge1xuICAgIHJldHVybiBpc1Byb3h5KHByb3h5KSA/IHByb3h5W3RhcmdldFN5bWJvbF0gOiBwcm94eTtcbn1cblxuZnVuY3Rpb24gbWFrZVByb3h5KHZhbHVlKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KHZhbHVlKSAmJiAhaXNQcm94eSh2YWx1ZSkpIHtcbiAgICAgICAgdXRpbHMuZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgdmFsdWVba2V5XSA9IG1ha2VQcm94eShpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodmFsdWUsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJveHkodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAoa2V5ID09PSBpc1Byb3h5U3ltYm9sKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09IHRhcmdldFN5bWJvbCkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbn1cblxuZnVuY3Rpb24gc2V0UHJveHkodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIG9sZFZhbHVlID0gZ2V0VGFyZ2V0KHRhcmdldFtrZXldKSxcbiAgICAgICAgbmV3VmFsdWUgPSBnZXRUYXJnZXQodmFsdWUpO1xuXG4gICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IG1ha2VQcm94eSh2YWx1ZSk7XG4gICAgICAgIGV2ZW50cy5wcm9wZXJ0eUNoYW5nZWQuZmlyZSh7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRhcmdldFtrZXldICE9PSB2YWx1ZSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQge1xuICAgIGlzUHJveHksXG4gICAgZ2V0VGFyZ2V0LFxuICAgIGhhbmRsZXJcbn0iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IGdldFRhcmdldCB9IGZyb20gJy4vcHJveHknO1xuXG5jbGFzcyBPYmplY3RMaXN0ZW5lciB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmtleXMgPSB7fTtcbiAgICB9XG5cbiAgICBnZXRIYW5kbGVycyhrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmtleXNba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5rZXlzW2tleV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmtleXNba2V5XTtcbiAgICB9XG5cbiAgICByZWdpc3RlcktleShrZXksIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xuICAgICAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHVucmVnaXN0ZXJLZXkoa2V5LCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcblxuICAgICAgICBpZiAoaGFuZGxlciA9PSBudWxsKSB7XG4gICAgICAgICAgICBoYW5kbGVycy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlS2V5KGtleSwgYXJncywgc2VsZikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XG4gICAgICAgIGhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwoc2VsZiwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLm9mZlByb3BlcnR5Q2hhbmdlZCA9IGV2ZW50cy5wcm9wZXJ0eUNoYW5nZWQub24oZSA9PiB0aGlzLmhhbmRsZVByb3BlcnR5Q2hhbmdlZChlLmRhdGEpKTtcbiAgICB9XG5cbiAgICBoYW5kbGVQcm9wZXJ0eUNoYW5nZWQoZGF0YSkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldExpc3RlbmVyKHRoaXMubGlzdGVuZXJzLCBkYXRhLnRhcmdldCk7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmZpcmVLZXkoZGF0YS5rZXksIGRhdGEpO1xuICAgICAgICAgICAgbGlzdGVuZXIuZmlyZUtleSgnKicsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyLCBmaWx0ZXJzID0gbGlzdGVuZXJzLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnRhcmdldCA9PT0gdGFyZ2V0O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IGZpbHRlcnNbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gbmV3IE9iamVjdExpc3RlbmVyKHRhcmdldCk7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxuICAgIGdldE9yQ3JlYXRlTGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCk7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyID09IG51bGwpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gdGhpcy5jcmVhdGVMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgd2F0Y2godGFyZ2V0LCBrZXksIGFjdGlvbikge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldE9yQ3JlYXRlTGlzdGVuZXIodGhpcy5saXN0ZW5lcnMsIGdldFRhcmdldCh0YXJnZXQpKTtcblxuICAgICAgICBsaXN0ZW5lci5yZWdpc3RlcktleShrZXksIGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnVucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMub2ZmUHJvcGVydHlDaGFuZ2VkKCk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tICcuL2V4cHJlc3Npb24nO1xuXG5leHBvcnQgY2xhc3MgQmluZGluZyB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIHRleHQsIGxvY2Fscykge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzO1xuICAgICAgICAvLyBpcyB0cnVlLCBiaW5kaW5nIHRleHQgaXMgYSBleHByZXNzaW9uXG4gICAgICAgIHRoaXMuaXNFeHAgPSBmYWxzZTtcbiAgICAgICAgLy8gaWYgdHJ1ZSwgYmluZGluZyB0ZXh0IGlzIGEgbG9naWNhbCBleHByZXNzaW9uXG4gICAgICAgIHRoaXMubG9naWNhbCA9IGZhbHNlO1xuICAgICAgICAvLyBpZiB0cnVlLCBiaW5kaW5nIHRleHQgaXMgYSBhc3NpZ25tZW50IGV4cHJlc3Npb25cbiAgICAgICAgdGhpcy5hc3NpZ25tZW50ID0gZmFsc2U7XG4gICAgICAgIC8vIGhhbmRsZXIgdG8gdXBkYXRlIHZpZXcgZnJvbSBtb2RlbCB2YWx1ZVxuICAgICAgICB0aGlzLmF1dG9tYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMgPSBbXTtcbiAgICB9XG5cbiAgICBjcmVhdGVFeHByZXNzaW9uKHRleHQpIHtcbiAgICAgICAgdmFyIGV4cCA9IG5ldyBFeHByZXNzaW9uKHRleHQpO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zLnB1c2goZXhwKTtcbiAgICAgICAgcmV0dXJuIGV4cDtcbiAgICB9XG5cbiAgICBjb21waWxlKCkge1xuICAgICAgICBpZiAodGhpcy5sb2dpY2FsIHx8IHRoaXMuYXNzaWdubWVudCkge1xuICAgICAgICAgICAgdGhpcy5pc0V4cCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0V4cCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVFeHByZXNzaW9uKHRoaXMudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IC97eyhbXn1dKil9fS9nO1xuICAgICAgICAgICAgdmFyIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgICAgICAgICAgdmFyIHNlZ21lbnQsIG1hdGNoID0gcGF0dGVybi5leGVjKHRoaXMudGV4dCk7XG5cbiAgICAgICAgICAgIHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoLmluZGV4ID4gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQgPSB0aGlzLnRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHRoaXMuY3JlYXRlRXhwcmVzc2lvbihtYXRjaFsxXSkpO1xuXG4gICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy50ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMudGV4dC5sZW5ndGggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzZWdtZW50ID0gdGhpcy50ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmFzc2lnbm1lbnQgfHwgdGhpcy5sb2dpY2FsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRldGVjdCgpO1xuXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMuZm9yRWFjaChleHAgPT4ge1xuICAgICAgICAgICAgZXhwLndhdGNoKHRoaXMuc2NvcGUsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRldGVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGF0Y2goKTtcbiAgICAgICAgICAgIH0sIHRoaXMubG9jYWxzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLmNvbXB1dGUoKTtcblxuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlXG4gICAgY29tcHV0ZShsb2NhbHMpIHtcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy5sb2NhbHMsIGxvY2Fscyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFeHApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb25zWzBdLmNvbXB1dGUodGhpcy5zY29wZSwgbG9jYWxzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNlZ21lbnRzLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoY3VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2ICsgY3VyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaXQgaXMgYSBleHByZXNzaW9uXG4gICAgICAgICAgICByZXR1cm4gcHJldiArIChjdXIuY29tcHV0ZSh0aGlzLnNjb3BlLCBsb2NhbHMpIHx8ICcnKTtcbiAgICAgICAgfSwgJycpO1xuICAgIH1cblxuICAgIC8vIHNldCB2YWx1ZVxuICAgIGFzc2lnbih2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMubG9jYWxzLCBsb2NhbHMpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRXhwKSB7XG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zWzBdLmFzc2lnbih0aGlzLnNjb3BlLCB2YWx1ZSwgbG9jYWxzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnRleHQgKyAnIGlzIG5vdCB2YWxpZCBleHByZXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlckF1dG9tYXRpb24oYXV0b21hdGlvbikge1xuICAgICAgICB0aGlzLmF1dG9tYXRpb24gPSBhdXRvbWF0aW9uO1xuICAgIH1cblxuICAgIHVucmVnaXN0ZXJBdXRvbWF0aW9uKGF1dG9tYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b21hdGlvbiA9PT0gYXV0b21hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1vZGlmeSB2aWV3IGFjY29yZGluZyB0byBtb2RlbFxuICAgIHBhdGNoKCkge1xuICAgICAgICBpZiAodGhpcy5jaGFuZ2VkICYmIHRoaXMuYXV0b21hdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGlvbi5jYWxsKHRoaXMsIHRoaXMudmFsdWUsIHRoaXMub2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucy5mb3JFYWNoKGV4cCA9PiB7XG4gICAgICAgICAgICBleHAuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEV4cHJlc3Npb24ge1xuICAgIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcbiAgICAgICAgdGhpcy5oYXNUcmFuc2xhdGlvbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGdldCB2YWx1ZVxuICAgIGNvbXB1dGUoc2NvcGUsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gc2NvcGUuJGV2YWwodGhpcy50ZXh0LCBsb2NhbHMpO1xuICAgIH1cblxuICAgIC8vIHNldCB2YWx1ZVxuICAgIGFzc2lnbihzY29wZSwgdmFsdWUsIGxvY2Fscykge1xuICAgICAgICBzY29wZS4kYXNzaWduKHRoaXMudGV4dCwgdmFsdWUsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgd2F0Y2goc2NvcGUsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBzY29wZS4kd2F0Y2godGhpcy50ZXh0LCBoYW5kbGVyLCBsb2NhbHMpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmKHRoaXMudW53YXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVud2F0Y2goKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmRpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9leHByZXNzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyZXInOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi9kb20nO1xuaW1wb3J0IHsgaXNWVGV4dCwgaXNWQ29tbWVudCwgaXNWRWxtIH0gZnJvbSAnLi4vdHBsJztcbmltcG9ydCB7IExvY2FsIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBCaW5kaW5nIH0gZnJvbSAnLi9iaW5kaW5nJztcbmltcG9ydCB7IE1fQ01QX0NMQVNTIH0gZnJvbSAnLi4vY3NzJztcbmltcG9ydCB7IFNpbmdsZU5vZGVWaWV3LCBNdWx0aXBsZU5vZGVWaWV3IH0gZnJvbSAnLi92aWV3JztcblxuLy8gV2luZG93IEV2ZW50c1xuLy8gY2FzZSAnb24tbG9hZCc6XG4vLyBjYXNlICdvbi11bmxvYWQnOlxuLy8gRm9ybSBFbGVtZW50IEV2ZW50c1xuLy8gY2FzZSAnb24tY2hhbmdlJzpcbi8vIGNhc2UgJ29uLXN1Ym1pdCc6XG4vLyBjYXNlICdvbi1yZXNldCc6XG4vLyBjYXNlICdvbi1zZWxlY3QnOlxuLy8gY2FzZSAnb24tYmx1cic6XG4vLyBjYXNlICdvbi1mb2N1cyc6XG4vLyBJbWFnZSBFdmVudHNcbi8vIGNhc2UgJ29uLWFib3J0Jzpcbi8vIEtleWJvYXJkIEV2ZW50c1xuLy8gY2FzZSAnb24ta2V5ZG93bic6XG4vLyBjYXNlICdvbi1rZXlwcmVzcyc6XG4vLyBjYXNlICdvbi1rZXl1cCc6XG4vLyBNb3VzZSBFdmVudHNcbi8vIGNhc2UgJ29uLWNsaWNrJzpcbi8vIGNhc2UgJ29uLWRibGNsaWNrJzpcbi8vIGNhc2UgJ29uLW1vdXNlZG93bic6XG4vLyBjYXNlICdvbi1tb3VzZW1vdmUnOlxuLy8gY2FzZSAnb24tbW91c2VvdXQnOlxuLy8gY2FzZSAnb24tbW91c2VvdmVyJzpcbi8vIGNhc2UgJ29uLW1vdXNldXAnOlxudmFyIGV2ZW50VGV4dCA9ICdsb2FkIHVubG9hZCBjaGFuZ2Ugc3VibWl0IHJlc2V0IHNlbGVjdCBibHVyIGZvY3VzIGFib3J0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNlbW92ZSBtb3VzZW91dCBtb3VzZW92ZXIgbW91c2V1cCc7XG52YXIgZG9tRXZlbnRzID0gZXZlbnRUZXh0LnNwbGl0KCcgJyk7XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XG4gICAgZ2V0IGluamVjdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS4kaW5qZWN0b3I7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIGxvY2Fscykge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzO1xuICAgICAgICB0aGlzLnBhcnNlciA9IHNjb3BlLiRwYXJzZXI7XG4gICAgICAgIHRoaXMudmlldyA9IG51bGw7XG4gICAgfVxuXG4gICAgbmV3QmluZGluZyh0ZXh0KSB7XG4gICAgICAgIHZhciBiaW5kaW5nID0gbmV3IEJpbmRpbmcodGhpcy5zY29wZSwgdGV4dCwgdGhpcy5sb2NhbHMpO1xuICAgICAgICB0aGlzLnZpZXcuYmluZGluZ3MucHVzaChiaW5kaW5nKTtcbiAgICAgICAgcmV0dXJuIGJpbmRpbmc7XG4gICAgfVxuXG4gICAgbmV3Q29tcG9uZW50KGNscykge1xuICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmluamVjdG9yLmNyZWF0ZUNvbXBvbmVudChjbHMpO1xuXG4gICAgICAgIHRoaXMuc2NvcGUuJGFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgdGhpcy52aWV3LmNvbXBvbmVudHMucHVzaChjaGlsZCk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIG5ld0RpcmVjdGl2ZShjbHMpIHtcbiAgICAgICAgdmFyIGRpcmVjdGl2ZSA9IHRoaXMuaW5qZWN0b3IuY3JlYXRlRGlyZWN0aXZlKGNscyk7XG5cbiAgICAgICAgZGlyZWN0aXZlLiQkc2NvcGUgPSB0aGlzLnNjb3BlO1xuXG4gICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgfVxuXG4gICAgcmVjb2duaXplQ29tcG9uZW50KHZlbG0pIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IHRoaXMucGFyc2VyLnJlc29sdmVDb21wb25lbnQodmVsbS5ub2RlTmFtZSk7XG5cbiAgICAgICAgLy8gdmVsbS5ub2RlRGF0YS5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcblxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIHJlY29nbml6ZURpcmVjdGl2ZSh2YXR0cikge1xuICAgICAgICB2YXIgZGlyZWN0aXZlID0gdGhpcy5wYXJzZXIucmVzb2x2ZURpcmVjdGl2ZSh2YXR0ci5ub2RlRGF0YS5uYW1lKTtcblxuICAgICAgICAvLyB2YXR0ci5ub2RlRGF0YS5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcblxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIH1cblxuICAgIHJlbmRlcih0ZW1wbGF0ZSwgY29udGFpbmVyKSB7XG4gICAgICAgIHZhciBoYXNDb250YWluZXIgPSBjb250YWluZXIgIT0gbnVsbDtcblxuICAgICAgICBpZihoYXNDb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMudmlldyA9IG5ldyBTaW5nbGVOb2RlVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gbXVzdCBzZXQgYSByb290IGVsZW1lbnQgZm9yIGRpcmVjdGl2ZSBsaWZlIGN5Y2xlIFwiYWZ0ZXJMaW5rXCIgaG9vcHNcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICAgIHRoaXMudmlldyA9IG5ldyBNdWx0aXBsZU5vZGVWaWV3KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpZXcudm5vZGVzID0gdGhpcy5wYXJzZXIucGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSk7XG5cbiAgICAgICAgdGhpcy5jb21waWxlTm9kZXModGhpcy52aWV3LnZub2Rlcyk7XG5cbiAgICAgICAgLy8gdGhpcy5lbnRpdHkuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiBkaXJlY3RpdmUuJHByZWxpbmsoKSk7XG5cbiAgICAgICAgdGhpcy5saW5rTm9kZXModGhpcy52aWV3LnZub2RlcykuZm9yRWFjaChub2RlID0+IGNvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlKSk7XG5cbiAgICAgICAgLy8gY2FsbCBkaXJlY3RpdmUgbGlmZSBjeWNsZSBob29wc1xuICAgICAgICB0aGlzLnZpZXcuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiBkaXJlY3RpdmUuJHBvc3RsaW5rKCkpO1xuXG4gICAgICAgIGlmKGhhc0NvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy52aWV3Lm5vZGUgPSBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBjYWNoZSB0aGUgZ2VuZXJhdGVkIGVsZW1lbnRzXG4gICAgICAgICAgICBkb20uZ2V0Q2hpbGRyZW5PZkVsZW1lbnQoY29udGFpbmVyKS5mb3JFYWNoKG5vZGUgPT4gdGhpcy52aWV3Lm5vZGVzLnB1c2gobm9kZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmlldztcbiAgICB9XG5cbiAgICBjb21waWxlTm9kZXModm5vZGVzKSB7XG4gICAgICAgIHZub2Rlcy5mb3JFYWNoKHZub2RlID0+IHRoaXMuY29tcGlsZU5vZGUodm5vZGUpKTtcbiAgICB9XG5cbiAgICBjb21waWxlTm9kZSh2bm9kZSkge1xuICAgICAgICBpZiAoaXNWVGV4dCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZVRleHQodm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaXNWQ29tbWVudCh2bm9kZSkpe1xuICAgICAgICAgICAgdGhpcy5jb21waWxlQ29tbWVudCh2bm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVFbG0odm5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlua05vZGVzKHZub2Rlcykge1xuICAgICAgICByZXR1cm4gdm5vZGVzLm1hcCh2bm9kZSA9PiB0aGlzLmxpbmtOb2RlKHZub2RlKSk7XG4gICAgfVxuXG4gICAgbGlua05vZGUodm5vZGUpIHtcbiAgICAgICAgaWYgKGlzVlRleHQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rVGV4dCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpc1ZDb21tZW50KHZub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua0NvbW1lbnQodm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubGlua0VsbSh2bm9kZSk7XG4gICAgfVxuXG4gICAgY29tcGlsZUVsbSh2ZWxtKSB7XG4gICAgICAgIHZhciBlbG1EYXRhID0gdmVsbS5ub2RlRGF0YTtcblxuICAgICAgICBlbG1EYXRhLmNvbXBvbmVudCA9IHRoaXMucmVjb2duaXplQ29tcG9uZW50KHZlbG0pO1xuXG4gICAgICAgIHZhciBkaXJlY3RpdmVzID0gW107XG4gICAgICAgIHZhciBjdXN0b21MaW5rZXIgPSB2ZWxtLnZhdHRycy5zb21lKHZhdHRyID0+IHtcbiAgICAgICAgICAgIHZhciBhdHRyRGF0YSA9IHZhdHRyLm5vZGVEYXRhO1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVBdHRyKHZhdHRyKTtcblxuICAgICAgICAgICAgaWYgKGF0dHJEYXRhLmRpcmVjdGl2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlcy5wdXNoKGF0dHJEYXRhLmRpcmVjdGl2ZSk7XG4gICAgICAgICAgICAgICAgZWxtRGF0YS5saW5rZXIgPSBhdHRyRGF0YS5saW5rZXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbURhdGEubGlua2VyICE9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc29ydCBkaXJlY3RpdmUgYWNjb3JkaW5nIHRvIGl0cyBwcmlvcml0eVxuICAgICAgICB1dGlscy5vcmRlckJ5KGRpcmVjdGl2ZXMsIGRpcmVjdGl2ZSA9PiBkaXJlY3RpdmUuJHByaW9yaXR5KS5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB0aGlzLnZpZXcuZGlyZWN0aXZlcy5wdXNoKGRpcmVjdGl2ZSkpO1xuXG4gICAgICAgIGVsbURhdGEuZGlyZWN0aXZlcyA9IGRpcmVjdGl2ZXM7XG5cbiAgICAgICAgLy8gZGlyZWN0aXZlIGRlZmluZXMgY3VzdG9tIGxpbmtlciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGUsIHJlbmRlciBlbmdpbmUgd2lsbCBub3QgcmVuZGVyIGl0IGFjY29yZGluZyB0byBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIGlmIChjdXN0b21MaW5rZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbG1EYXRhLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgZWxtRGF0YS5zbG90cyA9IHRoaXMuc2Vla1Nsb3QodmVsbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVOb2Rlcyh2ZWxtLmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGlsZUF0dHIodmF0dHIpIHtcbiAgICAgICAgdmFyIGF0dHJOYW1lID0gdmF0dHIubm9kZU5hbWUsIGF0dHJWYWx1ZSA9IHZhdHRyLm5vZGVWYWx1ZSxcbiAgICAgICAgICAgIGF0dHJEYXRhID0gdmF0dHIubm9kZURhdGEsIGJpbmRpbmc7XG5cbiAgICAgICAgaWYoYXR0clZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGJpbmRpbmcgPSB0aGlzLm5ld0JpbmRpbmcoYXR0clZhbHVlKTtcbiAgICAgICAgICAgIGF0dHJEYXRhLmJpbmRpbmcgPSBiaW5kaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0dHJOYW1lLnN0YXJ0c1dpdGgoJ0AnKSkge1xuICAgICAgICAgICAgYXR0ckRhdGEuaXNFdmVudCA9IHRydWU7XG4gICAgICAgICAgICBhdHRyRGF0YS5uYW1lID0gYXR0ck5hbWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgYXR0ckRhdGEuaXNEb21FdmVudCA9IHV0aWxzLnNvbWUoZG9tRXZlbnRzLCBlID0+IGUgPT09IGF0dHJEYXRhLm5hbWUpO1xuICAgICAgICAgICAgYmluZGluZyAmJiAoYmluZGluZy5sb2dpY2FsID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnOicpKSB7XG4gICAgICAgICAgICBhdHRyRGF0YS5uYW1lID0gYXR0ck5hbWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgYmluZGluZyAmJiAoYmluZGluZy5pc0V4cCA9IHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF0dHJOYW1lLnN0YXJ0c1dpdGgoJyonKSkge1xuICAgICAgICAgICAgYXR0ckRhdGEuZGlyZWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGF0dHJEYXRhLm5hbWUgPSBhdHRyTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBiaW5kaW5nICYmIChiaW5kaW5nLmlzRXhwID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhdHRyRGF0YS5uYW1lID0gYXR0ck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0ckRhdGEuZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB2YXIgZGlyZWN0aXZlID0gdGhpcy5yZWNvZ25pemVEaXJlY3RpdmUodmF0dHIpO1xuXG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgYXR0ckRhdGEuZGlyZWN0aXZlID0gdGhpcy5uZXdEaXJlY3RpdmUoZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICBhdHRyRGF0YS5kaXJlY3RpdmUuJCR2YXR0ciA9IHZhdHRyO1xuXG4gICAgICAgICAgICAgICAgaWYoYmluZGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmcuYXNzaWdubWVudCA9IGF0dHJEYXRhLmRpcmVjdGl2ZS4kYXNzaWdubWVudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYXR0ckRhdGEuZGlyZWN0aXZlLiRjb21waWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0ckRhdGEubGlua2VyID0gYXR0ckRhdGEuZGlyZWN0aXZlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXJlY3RpdmUgJyArIGF0dHJEYXRhLm5hbWUgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihiaW5kaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKGF0dHJEYXRhLmlzRXZlbnQgfHwgYXR0ckRhdGEuZGlyZWN0aXZlKSkge1xuICAgICAgICAgICAgdmFyIHNldEh0bWxBdHRyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsbSA9IHZhdHRyLnZlbG0uZWxtO1xuXG4gICAgICAgICAgICAgICAgaWYgKGF0dHJEYXRhLm5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eShlbG0sIGF0dHJEYXRhLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoYXR0ckRhdGEubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh2YXR0ci52ZWxtLm5vZGVEYXRhLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gdmF0dHIudmVsbS5ub2RlRGF0YS5jb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSB1dGlscy5jb252ZXJ0VG9IdW1wTmFtZShhdHRyRGF0YS5uYW1lLCAnLScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQuJGhhc1Byb3BlcnR5KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC4kc2V0UHJvcGVydHkocHJvcGVydHlOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIdG1sQXR0cih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKHNldEh0bWxBdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJpbmRpbmcuY29tcGlsZSgpO1xuICAgIH1cblxuICAgIGNvbXBpbGVUZXh0KHZ0ZXh0KSB7XG4gICAgICAgIHZ0ZXh0Lm5vZGVEYXRhLmJpbmRpbmcgPSB0aGlzLm5ld0JpbmRpbmcodnRleHQubm9kZVZhbHVlKTtcbiAgICAgICAgdnRleHQubm9kZURhdGEuYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZWxtLCBuZXdUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHZ0ZXh0LnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh2dGV4dC5lbG0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBlbG0gPSB2dGV4dC5lbG0ucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbG0gPSB2dGV4dC5wYXJlbnROb2RlLmVsbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZ0ZXh0LmVsbSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5hcHBlbmRDaGlsZChuZXdUZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb20ucmVwbGFjZUVsZW1lbnQodnRleHQuZWxtLCBuZXdUZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2dGV4dC5lbG0gPSBuZXdUZXh0Tm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZ0ZXh0Lm5vZGVEYXRhLmJpbmRpbmcuY29tcGlsZSgpO1xuICAgIH1cblxuICAgIGNvbXBpbGVDb21tZW50KHZjbW50KSB7XG5cbiAgICB9XG5cbiAgICBsaW5rRWxtKHZlbG0pIHtcbiAgICAgICAgdmFyIGVsbURhdGEgPSB2ZWxtLm5vZGVEYXRhO1xuXG4gICAgICAgIGlmIChlbG1EYXRhLmxpbmtlciAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxtRGF0YS5saW5rZXIuJGxpbmsoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZlbG0uZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh2ZWxtLm5vZGVOYW1lKTtcblxuICAgICAgICBpZiAoZWxtRGF0YS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMubmV3Q29tcG9uZW50KGVsbURhdGEuY29tcG9uZW50KTtcblxuICAgICAgICAgICAgZWxtRGF0YS5jb21wb25lbnQgPSBpbnN0YW5jZTtcblxuICAgICAgICAgICAgZG9tLmFkZENsYXNzKHZlbG0uZWxtLCBNX0NNUF9DTEFTUyk7XG5cbiAgICAgICAgICAgIHZlbG0udmF0dHJzLmZvckVhY2godmF0dHIgPT4gdGhpcy5saW5rQXR0cih2YXR0cikpO1xuXG4gICAgICAgICAgICBpbnN0YW5jZS4kJHZlbG0gPSB2ZWxtO1xuICAgICAgICAgICAgaW5zdGFuY2UuJHNlckNvbnRhaW5lcih2ZWxtLmVsbSk7XG4gICAgICAgICAgICBpbnN0YW5jZS4kc2V0U2xvdChlbG1EYXRhLnNsb3RzKTtcbiAgICAgICAgICAgIGluc3RhbmNlLiRyZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZlbG0udmF0dHJzLmZvckVhY2godmF0dHIgPT4gdGhpcy5saW5rQXR0cih2YXR0cikpO1xuICAgICAgICAgICAgdmVsbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gdmVsbS5lbG0uYXBwZW5kQ2hpbGQodGhpcy5saW5rTm9kZShjaGlsZCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZWxtLmVsbTtcbiAgICB9XG5cbiAgICBsaW5rQXR0cih2YXR0cikge1xuICAgICAgICB2YXIgdmVsbSA9IHZhdHRyLnZlbG0sXG4gICAgICAgICAgICBlbG0gPSB2ZWxtLmVsbSxcbiAgICAgICAgICAgIGF0dHJEYXRhID0gdmF0dHIubm9kZURhdGEsXG4gICAgICAgICAgICBiaW5kaW5nID0gYXR0ckRhdGEuYmluZGluZztcblxuICAgICAgICBpZihiaW5kaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRyRGF0YS5pc0V2ZW50KSB7XG4gICAgICAgICAgICBpZiAoYXR0ckRhdGEuaXNEb21FdmVudCkge1xuICAgICAgICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKGF0dHJEYXRhLm5hbWUsIGUgPT4gYmluZGluZy5jb21wdXRlKG5ldyBMb2NhbChlLCBlbG0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2ZWxtLm5vZGVEYXRhLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSB1dGlscy5jb252ZXJ0VG9IdW1wTmFtZShhdHRyRGF0YS5uYW1lLCAnLScpO1xuICAgICAgICAgICAgICAgIHZlbG0ubm9kZURhdGEuY29tcG9uZW50LiRiaW5kKGV2ZW50TmFtZSwgZSA9PiBiaW5kaW5nLmNvbXB1dGUobmV3IExvY2FsKGUsIGVsbSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJpbmRpbmcubGluaygpO1xuICAgICAgICAgICAgYmluZGluZy5wYXRjaCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVnaXN0ZXIgYmluZGluZyBjaGFuZ2UgaGFuZGxlciBhZnRlciBmaXJzdCBwYXRjaFxuICAgICAgICBpZihhdHRyRGF0YS5kaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKChuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IGF0dHJEYXRhLmRpcmVjdGl2ZS4kY2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlua1RleHQodnRleHQpIHtcbiAgICAgICAgdnRleHQubm9kZURhdGEuYmluZGluZy5saW5rKCk7XG4gICAgICAgIHZ0ZXh0LmVsbSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZ0ZXh0Lm5vZGVEYXRhLmJpbmRpbmcudmFsdWUpO1xuICAgICAgICByZXR1cm4gdnRleHQuZWxtO1xuICAgIH1cblxuICAgIGxpbmtDb21tZW50KHZjbW50KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHZjbW50Lm5vZGVWYWx1ZSk7XG4gICAgfVxuXG4gICAgc2Vla1Nsb3QodmVsbSkge1xuICAgICAgICB2YXIgc2xvdHMgPSB7fTtcblxuICAgICAgICB2ZWxtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBpZihpc1ZFbG0oY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsb3QgPSBjaGlsZC5nZXRBdHRyKCdzbG90Jyk7XG5cbiAgICAgICAgICAgICAgICBpZihzbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3RzW3Nsb3Qubm9kZVZhbHVlXSA9IGNoaWxkLmdldElubmVyVHBsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gIHNsb3RzO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcblxyXG5jbGFzcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudm5vZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdW50KHNlbGVjdG9yT3JFbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzZWxlY3Rvck9yRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGJpbmRUcmFuc2xhdGVDaGFuZ2VkKCkge1xyXG4gICAgLy8gICAgIHZhciBiaW5kaW5ncyA9IHRoaXMuZW50aXR5LmJpbmRpbmdzO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBpZighYmluZGluZ3MubGVuZ3RoKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIC8vIHVwZGF0ZSB0ZXh0IHdoaWxlIHRyYW5zbGF0ZSBjaGFuZ2VkXHJcbiAgICAvLyAgICAgdGhpcy51bmJpbmRUcmFuc2xhdGVDaGFuZ2VkID0gZXZlbnRzLnRyYW5zbGF0ZUNoYW5nZWQub24oKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBiaW5kaW5ncy5mb3JFYWNoKGJpbmRpbmcgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgYmluZGluZy5kZXRlY3QoKTtcclxuICAgIC8vICAgICAgICAgICAgIGJpbmRpbmcucGF0Y2goKTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChpdGVtID0+IGl0ZW0uJGRlc3Ryb3koKSk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVzLmZvckVhY2goaXRlbSA9PiBpdGVtLiRkZXN0cm95KCkpO1xyXG4gICAgICAgIHRoaXMuYmluZGluZ3MuZm9yRWFjaChpdGVtID0+IGl0ZW0uZGVzdHJveSgpKTtcclxuICAgICAgICB0aGlzLnZub2Rlcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5kZXN0cm95KCkpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZXMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmJpbmRpbmdzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy52bm9kZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpbmdsZU5vZGVWaWV3IGV4dGVuZHMgVmlldyB7XHJcbiAgICBnZXQgY29udGVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE11bHRpcGxlTm9kZVZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuICAgIGdldCBjb250ZW50KCkge1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaChub2RlID0+IGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSkpO1xyXG4gICAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm5vZGVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL21vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vdHBsLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL3RwbC1idWlsZGVyJzsiLCJleHBvcnQgKiBmcm9tICcuL3Zub2RlJztcbmV4cG9ydCAqIGZyb20gJy4vdmF0dHInO1xuZXhwb3J0ICogZnJvbSAnLi92Y21udCc7XG5leHBvcnQgKiBmcm9tICcuL3ZlbG0nO1xuZXhwb3J0ICogZnJvbSAnLi92dGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL3Z0eXBlJzsiLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZBdHRyIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLmF0dHJpYnV0ZSwgbmFtZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLnZlbG0gPSBudWxsO1xuICAgICAgICB0aGlzLnF1b3RlID0gJ1wiJztcbiAgICB9XG5cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIG9uQ2xvbmVOb2RlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZBdHRyKHRoaXMubm9kZU5hbWUsIHRoaXMubm9kZVZhbHVlKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZDbW50IGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLmNvbW1lbnQsICcjY29tbWVudCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBvbkNsb25lTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWQ21udCh0aGlzLm5vZGVOYW1lLCB0aGlzLm5vZGVWYWx1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5pbXBvcnQgeyBWQXR0ciB9IGZyb20gJy4vdmF0dHInO1xuaW1wb3J0IHsgcGFyc2VUcGwgfSBmcm9tICcuLi90cGwtYXBpJztcbmltcG9ydCB7IFRwbEJ1aWxkZXIgfSBmcm9tICcuLi90cGwtYnVpbGRlcic7XG5cbmV4cG9ydCBjbGFzcyBWRWxtIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUuZWxlbWVudCwgbmFtZSk7XG4gICAgICAgIHRoaXMuZWxtID0gbnVsbDtcbiAgICAgICAgdGhpcy52YXR0cnMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxmQ2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBUcGxCdWlsZGVyKCk7XG4gICAgfVxuXG4gICAgcHVzaEF0dHIoYXR0cikge1xuICAgICAgICBhdHRyLnZlbG0gPSB0aGlzO1xuICAgICAgICB0aGlzLnZhdHRycy5wdXNoKGF0dHIpO1xuICAgIH1cblxuICAgIGhhc0F0dHIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhdHRycy5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgZ2V0QXR0cihrZXkpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLm5vZGVOYW1lID09PSBrZXk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZXNbMF07XG4gICAgfVxuXG4gICAgc2V0QXR0cihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQsIG1hdGNoZXMgPSB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG1hdGNoZXNbMF07XG4gICAgICAgICAgICB0YXJnZXQuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0ID0gbmV3IFZBdHRyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgdGFyZ2V0LnZlbG0gPSB0aGlzO1xuICAgICAgICAgICAgdGFyZ2V0LmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZhdHRycy5wdXNoKHRhcmdldCk7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZW1vdmVBdHRyKGtleSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gW10sIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBWQXR0cikge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy52YXR0cnMuaW5kZXhPZihrZXkpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYudmF0dHJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzZWxmLnZhdHRycy5pbmRleE9mKG1hdGNoKTtcbiAgICAgICAgICAgICAgICBtYXRjaC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi52YXR0cnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldC5sZW5ndGggPiAwID8gdGFyZ2V0WzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICBhcHBlbmRBdHRyKGF0dHIpIHtcbiAgICAgICAgaWYgKGF0dHIudmVsbSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDdXJyZW50IGF0dHJpYnV0ZSBpcyBub3QgbmV3IVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF0dHIudmVsbSA9IHRoaXM7XG4gICAgICAgIGF0dHIuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy52YXR0cnMucHVzaChhdHRyKTtcbiAgICAgICAgcmV0dXJuIGF0dHI7XG4gICAgfVxuXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuYnVpbGQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0SW5uZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuYnVpbGQoY2hpbGQpO1xuICAgICAgICB9KS5qb2luKCcnKTtcbiAgICB9XG5cbiAgICBzZXRPdXRlclRwbCh0cGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBwYXJzZVRwbCh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZiwgdm5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYpO1xuICAgIH1cblxuICAgIHNldElubmVyVHBsKHRwbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2xlYXJDaGlsZE5vZGVzKCk7XG4gICAgICAgIHBhcnNlVHBsKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5hcHBlbmRDaGlsZCh2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xvbmVOb2RlKCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBWRWxtKHRoaXMubm9kZU5hbWUsIHRoaXMubm9kZVZhbHVlKTtcblxuICAgICAgICBub2RlLnZhdHRycyA9IHRoaXMudmF0dHJzLm1hcChmdW5jdGlvbiAodmF0dHIpIHtcbiAgICAgICAgICAgIHZhciBjb3B5ID0gdmF0dHIuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICBjb3B5LnZlbG0gPSBub2RlO1xuICAgICAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy52YXR0cnMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0ci5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmF0dHJzLmxlbmd0aCA9IDA7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgbm9kZVR5cGUgPSB7XG4gICAgZWxlbWVudDogMSxcbiAgICBhdHRyaWJ1dGU6IDIsXG4gICAgdGV4dDogMyxcbiAgICBjZGF0YVNlY3Rpb246IDQsXG4gICAgZW50aXR5UmVmZXJlbmNlOiA1LFxuICAgIGVudGl0eTogNixcbiAgICBwcm9jZXNzaW5nSW5zdHJ1Y3Rpb246IDcsXG4gICAgY29tbWVudDogOCxcbiAgICBkb2N1bWVudDogOSxcbiAgICBkb2N1bWVudFR5cGU6IDEwLFxuICAgIGRvY3VtZW50RnJhZ21lbnQ6IDExLFxuICAgIG5vdGF0aW9uOiAxMlxufVxuXG4vLyB2aXJ0dWFsIG5vZGVcbmV4cG9ydCBjbGFzcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IodHlwZSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5ub2RlVHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMubm9kZU5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5vZGVEYXRhID0ge307XG4gICAgfVxuXG4gICAgcHVzaENoaWxkKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgfVxuXG4gICAgYnVpbGRTaWJsaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzW3RoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gKHNlbGYuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmJ1aWxkU2libGluZygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhclBhcmVudEFuZFNpYmxpbmcoKSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0NoaWxkTm9kZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwO1xuICAgIH1cblxuICAgIGNsZWFyQ2hpbGROb2RlcygpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkLm5leHRTaWJsaW5nID0gY2hpbGQ7XG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSB0aGlzLmxhc3RDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIGluc2VydEJlZm9yZShyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcblxuICAgICAgICBpZiAocmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZDtcbiAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nID0gbmV3Q2hpbGQ7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDAsIG5ld0NoaWxkKTtcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgIH1cblxuICAgIGluc2VydEFmdGVyKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAocmVmQ2hpbGQubmV4dFNpYmxpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLm5leHRTaWJsaW5nLCBuZXdDaGlsZCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW92ZSBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nLnByZXZpb3VzU2libGluZyA9IGNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09ICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICByZXBsYWNlQ2hpbGQocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG4gICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICBpZiAodGhpcy5maXJzdENoaWxkID09PSByZWZDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sYXN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmQ2hpbGQuY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XG4gICAgICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEsIG5ld0NoaWxkKTtcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgIH1cblxuICAgIGNsb25lTm9kZShkZWVwKSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5vbkNsb25lTm9kZShkZWVwKTtcblxuICAgICAgICBpZihkZWVwKSB7XG4gICAgICAgICAgICBub2RlLmNoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZC5jbG9uZU5vZGUoZGVlcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5vZGUuYnVpbGRTaWJsaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xuXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJEb2N1bWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gaG9vcHNcblxuICAgIC8vIGVuZCBvZiBob29wc1xufVxuIiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWVGV4dCBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS50ZXh0LCAnI3RleHQnLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuZWxtID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbkNsb25lTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWVGV4dCh0aGlzLm5vZGVOYW1lLCB0aGlzLm5vZGVWYWx1ZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuXG5leHBvcnQgY2xhc3MgVlR5cGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLmRvY3VtZW50VHlwZSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFRwbExleGVyIH0gZnJvbSAnLi90cGwtbGV4ZXInO1xuaW1wb3J0IHsgVHBsUGFyc2VyIH0gZnJvbSAnLi90cGwtcGFyc2VyJztcbmltcG9ydCB7IG5vZGVUeXBlIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmZ1bmN0aW9uIGxleFRwbCh0cGwpIHtcbiAgICB0cGwgPSB1dGlscy5lc2NhcGVIdG1sKHRwbCk7XG4gICAgcmV0dXJuIG5ldyBUcGxMZXhlcigpLmxleCh0cGwpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRwbCh0cGwpIHtcbiAgICB0cGwgPSB1dGlscy5lc2NhcGVIdG1sKHRwbCk7XG4gICAgcmV0dXJuIG5ldyBUcGxQYXJzZXIobmV3IFRwbExleGVyKCkpLnBhcnNlKHRwbCk7XG59XG5cbmZ1bmN0aW9uIGlzVkVsbSh2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUuZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNWQXR0cih2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUuYXR0cmlidXRlO1xufVxuXG5mdW5jdGlvbiBpc1ZUZXh0KHZub2RlKSB7XG4gICAgcmV0dXJuIHZub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZS50ZXh0O1xufVxuXG5mdW5jdGlvbiBpc1ZDb21tZW50KHZub2RlKSB7XG4gICAgcmV0dXJuIHZub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZS5jb21tZW50O1xufVxuXG5leHBvcnQgeyBsZXhUcGwsIHBhcnNlVHBsLCBpc1ZFbG0sIGlzVkF0dHIsIGlzVlRleHQsIGlzVkNvbW1lbnQgfTsiLCJpbXBvcnQgeyBpc1ZUZXh0LCBpc1ZDb21tZW50IH0gZnJvbSAnLi90cGwtYXBpJ1xuXG5leHBvcnQgY2xhc3MgVHBsQnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBidWlsZCh2bm9kZSkge1xuICAgICAgICBpZiAoaXNWVGV4dCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkVGV4dCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpc1ZDb21tZW50KHZub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDb21tZW50KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkRWxlbWVudCh2bm9kZSk7XG4gICAgfVxuXG4gICAgYnVpbGRFbGVtZW50KHZlbG0pIHtcbiAgICAgICAgdmFyIGF0dHJUcGwgPSB2ZWxtLnZhdHRycy5tYXAoKHZhdHRyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRBdHRyaWJ1dGUodmF0dHIpO1xuICAgICAgICAgICAgfSkuam9pbignICcpLFxuICAgICAgICAgICAgY2hpbGRUcGwgPSB2ZWxtLmNoaWxkTm9kZXMubWFwKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJycpO1xuXG4gICAgICAgIGlmKGF0dHJUcGwpIHtcbiAgICAgICAgICAgIGF0dHJUcGwgPSAnICcgKyBhdHRyVHBsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRwbCA9ICc8JyArIHZlbG0ubm9kZU5hbWUgKyBhdHRyVHBsICsgJz4nICsgY2hpbGRUcGw7XG5cbiAgICAgICAgaWYgKCF2ZWxtLnNlbGZDbG9zZWQpIHtcbiAgICAgICAgICAgIHRwbCArPSAoJzwvJyArIHZlbG0ubm9kZU5hbWUgKyAnPicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRwbDtcbiAgICB9XG5cbiAgICBidWlsZEF0dHJpYnV0ZSh2YXR0cikge1xuICAgICAgICByZXR1cm4gdmF0dHIubm9kZU5hbWUgKyAodmF0dHIubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB2YXR0ci5xdW90ZSArIHZhdHRyLm5vZGVWYWx1ZSArIHZhdHRyLnF1b3RlKSk7XG4gICAgfVxuXG4gICAgYnVpbGRUZXh0KHZ0ZXh0KSB7XG4gICAgICAgIHJldHVybiB2dGV4dC5ub2RlVmFsdWU7XG4gICAgfVxuXG4gICAgYnVpbGRDb21tZW50KHZjbW50KSB7XG4gICAgICAgIHJldHVybiB2Y21udC5ub2RlVmFsdWU7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4uL2V4cCc7XG5cbmV4cG9ydCBjbGFzcyBUcGxMZXhlciBleHRlbmRzIEV4cExleGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpIHtcbiAgICAgICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XG4gICAgICAgICAgICAnQScgPD0gY2ggJiYgY2ggPD0gJ1onIHx8XG4gICAgICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcgfHxcbiAgICAgICAgICAgIGNoID09PSAnQCcgfHwgY2ggPT09ICc6JyB8fCBjaCA9PT0gJyonKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoLCBjcCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICctJyB8fCBjaCA9PT0gJy4nO1xuICAgIH1cblxuICAgIGV4cGVjdFN0cmluZyhzdHIpIHtcbiAgICAgICAgdmFyIG51bSA9IHN0ci5sZW5ndGg7XG4gICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8PSB0aGlzLnRleHQubGVuZ3RoKSA/IChzdHIgPT09IHRoaXMudGV4dC5zdWJzdHIodGhpcy5pbmRleCwgbnVtKSkgOiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBodG1sIGNvbW1lbnQgXCI8IS0tY29tbWVudC0tPlwiXG4gICAgcmVhZENvbW1lbnQoYmVnaW4sIGVuZCkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xuICAgICAgICB2YXIgcmF3U3RyaW5nID0gYmVnaW47XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHJhd1N0cmluZyArPSBjaDtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZyhlbmQpKSB7XG4gICAgICAgICAgICAgICAgcmF3U3RyaW5nICs9IGVuZDtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBjb21tZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCcsIHN0YXJ0KTtcbiAgICB9XG5cbiAgICAvLyBodG1sIHRleHRcbiAgICByZWFkVGV4dCgpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICBpZiAoKGNoID09PSAnPCcgJiYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSB8fCBjaDIgPT09ICcvJykpIHx8IHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcbiAgICAgICAgICAgIHRleHRUYWc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gaHRtbCB0YWdcbiAgICByZWFkVGFnKGJlZ2luLCBlbmQsIGNsb3NpbmcsIGRvY3R5cGUpIHtcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBiZWdpbiwgdGFnOiB0cnVlLCBjbG9zaW5nOiBjbG9zaW5nLCBiZWdpbjogdHJ1ZSwgZG9jdHlwZTogZG9jdHlwZSB9KTtcbiAgICAgICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XG4gICAgICAgIHRoaXMucmVhZElkZW50KCk7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuXG4gICAgICAgICAgICBpZiAoIWNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9IGNoICsgY2gyO1xuICAgICAgICAgICAgICAgIGlmIChzdHIgPT09ICcvJyArIGVuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHN0ciwgdGFnOiB0cnVlLCBjbG9zaW5nOiB0cnVlLCBlbmQ6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gc3RyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2ggPT09IGVuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZW5kLFxuICAgICAgICAgICAgICAgICAgICB0YWc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsb3Npbmc6ICEhZG9jdHlwZSA/IHRydWUgOiBjbG9zaW5nLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc9Jykge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogJz0nLCBlcXVhbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV4KHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMudG9rZW5zID0gW107XG5cbiAgICAgICAgdmFyIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgdmFyIGNoMyA9IHRoaXMucGVlaygyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkQ29tbWVudCgnPCEtLScsICctLT4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnPCcgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8JywgJz4nLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPC8nKSAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwvJywgJz4nLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IURPQ1RZUEUnKSkge1xuICAgICAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8IScsICc+JywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0RPQ1RZUEUgaXMgbm90IGFsbG93ZWQnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgICB9XG59IiwiaW1wb3J0IHsgRXhwUGFyc2VyIH0gZnJvbSAnLi4vZXhwJztcbmltcG9ydCB7XG4gICAgVkVsbSwgVkF0dHIsIFZUZXh0LCBWQ21udCwgVlR5cGVcbn0gZnJvbSAnLi9tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBUcGxQYXJzZXIgZXh0ZW5kcyBFeHBQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKGxleGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGxleGVyLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBwYXJzZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xuXG4gICAgICAgIHZhciByb290ID0gbmV3IFZFbG0oKTtcbiAgICAgICAgdmFyIGRvY3R5cGUsIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4uZG9jdHlwZSkge1xuICAgICAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0eXBlID0gdGhpcy5kb2N0eXBlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaChkb2N0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgb25seSBhbGxvdyBvbmVcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIGlzIG5vdCBhbGxvd2VkXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgVkNtbnQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2goY29tbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVlRleHQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaCh0aGlzLmVsZW1lbnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJpbXBvc3NpYmxlXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJvb3QuYnVpbGRTaWJsaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuIHJvb3QuY2hpbGROb2RlcztcbiAgICB9XG5cbiAgICBkb2N0eXBlKCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgdmFyIGRvY1R5cGUgPSBuZXcgVlR5cGUoKTtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGRvY1R5cGUubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmF0dHJzKGRvY1R5cGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGRvY1R5cGUuY2hpbGROb2Rlcy5wdXNoKGF0dHIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkb2NUeXBlO1xuICAgIH1cblxuICAgIGVsZW1lbnQocCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgdmFyIGVsZSA9IG5ldyBWRWxtKCk7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBlbGUubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdHRycyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGVsZS5wdXNoQXR0cihhdHRyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgZWxlLnNlbGZDbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudHMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBlbGUucHVzaENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gdG9rZW4udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZTtcbiAgICB9XG5cbiAgICBjaGlsZEVsZW1lbnRzKHApIHtcbiAgICAgICAgdmFyIGVsZXMgPSBbXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IFZDbW50KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIGVsZXMucHVzaChjb21tZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBWVGV4dCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2godGhpcy5lbGVtZW50KHApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlcztcbiAgICB9XG5cbiAgICBhdHRycyhwKSB7XG4gICAgICAgIHZhciBhdHRycyA9IFtdO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGF0dHIgPSBuZXcgVkF0dHIoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICBhdHRyLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgICAgICBhdHRyLm9yaWdpbiA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uZXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5jb25zdGFudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ci5ub2RlVmFsdWUgPSB0b2tlbi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXR0cnMucHVzaChhdHRyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhdHRycztcbiAgICB9XG5cbiAgICBjdXJyZW50KCkge1xuICAgICAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgfVxufSIsInZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbi8vIGlzXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5O1xufVxuXG5mdW5jdGlvbiBpc01hcCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIE1hcDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gaXNCbGFua09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFnZXRQcm90b3R5cGVPZih2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNSZWdFeHAodmFsdWUpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG59XG5cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cbi8vIGVuZCBvZiBpc1xuXG4vLyB2YWx1ZVxuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIHJldHVybiBpc05hTihuKSA/IHZhbHVlIDogbjtcbn1cblxuZnVuY3Rpb24gbG93ZXJjYXNlKHN0cmluZykge1xuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvTG93ZXJDYXNlKCkgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHVwcGVyY2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b1VwcGVyQ2FzZSgpIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9IdW1wTmFtZShuYW1lLCBzZXBhcmF0b3IsIHVwcGVyY2FzZUZpcnN0TGV0dGVyKSB7XG4gICAgcmV0dXJuIG5hbWUuc3BsaXQoc2VwYXJhdG9yKS5tYXAoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgIXVwcGVyY2FzZUZpcnN0TGV0dGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnN1YnN0cmluZygxKTtcbiAgICB9KS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gY29udmVydEZyb21IdW1wTmFtZShuYW1lLCBzZXBhcmF0b3IsIHVwcGVyY2FzZUZpcnN0TGV0dGVyKSB7XG4gICAgdmFyIGkgPSAwLCBuZXdOYW1lID0gJycsIGNoYXI7XG5cbiAgICB3aGlsZSAoaSA8IG5hbWUubGVuZ3RoKSB7XG4gICAgICAgIGNoYXIgPSBuYW1lW2ldO1xuXG4gICAgICAgIGlmICgoaSAhPT0gMCB8fCB1cHBlcmNhc2VGaXJzdExldHRlcikgJiYgL1tBLVpdLy50ZXN0KGNoYXIpKSB7XG4gICAgICAgICAgICBuZXdOYW1lICs9IHNlcGFyYXRvcjtcbiAgICAgICAgICAgIG5ld05hbWUgKz0gY2hhci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3TmFtZSArPSBjaGFyO1xuICAgICAgICB9XG5cbiAgICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdOYW1lO1xufVxuLy8gZW5kIGlmIHZhbHVlXG5cbi8vIG9iamVjdFxuZnVuY3Rpb24gY29weSgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBvYmpJbmRleCA9IDAsIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF0sIGZpbHRlcjtcblxuICAgIGlmIChpc0Jvb2xlYW4ob2JqKSkge1xuICAgICAgICBkZWVwID0gb2JqO1xuICAgICAgICBvYmpJbmRleCsrO1xuICAgICAgICBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdO1xuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gb2JqSW5kZXggKyAxKSB7XG4gICAgICAgIGZpbHRlciA9IGFyZ3VtZW50c1tvYmpJbmRleCArIDFdO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgdmFyIG5ld0FyciA9IFtdO1xuICAgICAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBpbmRleCwgaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChkZWVwID8gY29weShkZWVwLCBpdGVtKSA6IGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld0FycjtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICB2YXIgbmV3T2JqID0gb2JqZWN0KG9iaik7XG4gICAgICAgIGZvckVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsIHx8IGZpbHRlcihvYmosIGtleSwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBkZWVwID8gY29weShkZWVwLCB2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0gYXJndW1lbnRzW2luZGV4XTtcblxuICAgIGlmIChpc0Jvb2xlYW4odGFyZ2V0KSkge1xuICAgICAgICBkZWVwID0gdGFyZ2V0O1xuICAgICAgICB0YXJnZXQgPSBhcmd1bWVudHNbKytpbmRleF07XG4gICAgfVxuXG4gICAgaWYgKGRlZXApIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSB7fTtcblxuICAgIGlmIChpc0Jvb2xlYW4oYXJndW1lbnRzW2luZGV4XSkpIHtcbiAgICAgICAgZGVlcCA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgaWYgKGRlZXApIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBwbGFpbk1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZXBNZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAodGFyZ2V0W2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdCh0YXJnZXRba2V5XSkgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldFtrZXldLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyBlbmQgb2Ygb2JqZWN0XG5cbi8vIGl0ZXJhdG9yXG5mdW5jdGlvbiBmb3JFYWNoKHRhcmdldCwgYWN0aW9uKSB7XG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICB0YXJnZXQuZm9yRWFjaChhY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24odGFyZ2V0W2tleV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNvbWUodGFyZ2V0LCBmdW5jKSB7XG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0LnNvbWUoZnVuYyk7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZ1bmModGFyZ2V0W2tleV0sIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8gZW5kIG9mIGl0ZXJhdG9yXG5cbi8vIGFycmF5XG5mdW5jdGlvbiBvcmRlckJ5KGxpc3QsIGdldHRlcikge1xuICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChnZXR0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0dGVyKGl0ZW0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldFZhbHVlKGEpID4gZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvcmRlckJ5RGVzY2VuZGluZyhsaXN0LCBnZXR0ZXIpIHtcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPCBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldFZhbHVlKGEpID4gZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUobGlzdCwgdmFsdWUpIHtcbiAgICB2YXIgaW5kZXggPSBsaXN0LmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG4vLyBlbmQgb2YgYXJyYXlcblxuZnVuY3Rpb24gb2JqZWN0KG8pIHtcbiAgICBmdW5jdGlvbiBGKCkge1xuICAgIH1cblxuICAgIEYucHJvdG90eXBlID0gbztcbiAgICByZXR1cm4gbmV3IEYoKTtcbn1cblxuZnVuY3Rpb24gaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpIHtcbiAgICB2YXIgcHJvdG90eXBlID0gb2JqZWN0KHN1cGVyVHlwZS5wcm90b3R5cGUpO1xuICAgIHByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YlR5cGU7XG4gICAgc3ViVHlwZS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXQoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XG4gICAgaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpO1xuICAgIHN1YlR5cGUuc3VwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN1cGVyVHlwZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhc1Byb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHtcbiAgICB2YXIga2V5LCBrZXlzID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcblxuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYgKCFpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBpc09iamVjdCh0YXJnZXQpICYmIHRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXlzLnNoaWZ0KCkpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB7XG4gICAgdmFyIGtleSwga2V5cyA9IHByb3BlcnR5LnNwbGl0KCcuJyk7XG5cbiAgICB3aGlsZSAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmKCFpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgdmFyIGtleSwga2V5cyA9IHByb3BlcnR5LnNwbGl0KCcuJyk7XG5cbiAgICB3aGlsZSAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmICghaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXRba2V5XTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXQoKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtYXRjaCwgbWF0Y2hUZXh0LCBpbmRleCwgcmVzdWx0ID0gJycsIHRleHQgPSBhcmd1bWVudHNbMF0sXG4gICAgICAgIHBhdHRlcm4gPSAvXFx7KFxcZCspXFx9L2csIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuXG4gICAgd2hpbGUgKG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpKSB7XG4gICAgICAgIG1hdGNoVGV4dCA9IG1hdGNoWzBdO1xuICAgICAgICBpbmRleCA9IE51bWJlci5wYXJzZUludChtYXRjaFsxXSkgKyAxO1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Zvcm1hdCBpdGVtICcgKyBpbmRleCArICdpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpICsgYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBlc2NhcGVIdG1sKGh0bWwpIHtcbiAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC8mZ3Q7L2csICc+JykucmVwbGFjZSgvJmx0Oy9nLCAnPCcpLnJlcGxhY2UoLyZhbXA7L2csICcmJykucmVwbGFjZSgvJnF1b3RlOy9nLCAnJyk7XG59XG5cbmV4cG9ydCB7XG4gICAgaXNVbmRlZmluZWQsXG4gICAgaXNEZWZpbmVkLFxuICAgIGlzT2JqZWN0LFxuICAgIGlzQmxhbmtPYmplY3QsXG4gICAgaXNOdW1iZXIsXG4gICAgaXNEYXRlLFxuICAgIGlzRnVuY3Rpb24sXG4gICAgaXNSZWdFeHAsXG4gICAgaXNCb29sZWFuLFxuICAgIGlzQXJyYXksXG4gICAgaXNTdHJpbmcsXG4gICAgaXNGb3JtRGF0YSxcbiAgICB0b051bWJlcixcbiAgICBsb3dlcmNhc2UsXG4gICAgdXBwZXJjYXNlLFxuICAgIGNvbnZlcnRUb0h1bXBOYW1lLFxuICAgIGNvbnZlcnRGcm9tSHVtcE5hbWUsXG4gICAgY29weSxcbiAgICBleHRlbmQsXG4gICAgbWVyZ2UsXG4gICAgZm9yRWFjaCxcbiAgICBzb21lLFxuICAgIHJlbW92ZSxcbiAgICBjb25jYXQsXG4gICAgb3JkZXJCeSxcbiAgICBvcmRlckJ5RGVzY2VuZGluZyxcbiAgICBvYmplY3QsXG4gICAgaW5oZXJpdCxcbiAgICBoYXNQcm9wZXJ0eSxcbiAgICBnZXRQcm9wZXJ0eSxcbiAgICBzZXRQcm9wZXJ0eSxcbiAgICBmb3JtYXQsXG4gICAgZXNjYXBlSHRtbFxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi9kb20nO1xuaW1wb3J0IHsgaXNNZXNzYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XG5pbXBvcnQgeyBPYnNlcnZlciwgaGFuZGxlciB9IGZyb20gJy4uL29ic2VydmVyJztcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vcmVuZGVyJztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgeyBFdmFsdWF0b3IgfSBmcm9tICcuLi9leHAnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50Q29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuJCR2ZWxtID0gbnVsbDtcbiAgICB0aGlzLiQkcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLiQkY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLiQkbWFpblZpZXcgPSBudWxsO1xuICAgIHRoaXMuJHBhcnNlciA9IG5ldyBQYXJzZXIodGhpcyk7XG4gICAgdGhpcy4kb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXIodGhpcyk7XG4gICAgdGhpcy4kZGF0YSA9IHV0aWxzLm1lcmdlKHRoaXMuJCRtZXRhZGF0YSwgZGF0YSk7XG4gICAgdGhpcy4kY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh1dGlscy5jb252ZXJ0RnJvbUh1bXBOYW1lKHRoaXMuJGRhdGEua2V5LCAnLScpKTtcbiAgICB0aGlzLnNsb3RzID0ge307XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB0aGlzLnByb3BzID0gdGhpcy4kZGVsZWdhdGUoe30pO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLiRkZWxlZ2F0ZSh7fSk7XG4gICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcywgdGhpcy4kZGF0YSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICAgIGdldCAkaW5qZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiBpbmplY3RvcjtcbiAgICB9XG5cbiAgICAkZGVsZWdhdGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodGFyZ2V0LCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICAkc2V0U2xvdChzbG90cykge1xuICAgICAgICB0aGlzLnNsb3RzID0gc2xvdHMgfHwge307XG4gICAgfVxuXG4gICAgJHNlckNvbnRhaW5lcihlbG0pIHtcbiAgICAgICAgdGhpcy4kY29udGFpbmVyID0gZWxtO1xuICAgIH1cblxuICAgICRzZXRTdGF0ZShzdGF0ZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy4kZGVsZWdhdGUoc3RhdGUpO1xuICAgIH1cblxuICAgICRzZXRQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0gdGhpcy4kZGVsZWdhdGUocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgY29tcG9uZW50Q29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9XG5cbiAgICAkaGFzUHJvcGVydHkoa2V5KSB7XG4gICAgICAgIHJldHVybiB1dGlscy5oYXNQcm9wZXJ0eSh0aGlzLnByb3BzLCBrZXkpO1xuICAgIH1cblxuICAgICRnZXRQcm9wZXJ0eShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmdldFByb3BlcnR5KHRoaXMucHJvcHMsIGtleSk7XG4gICAgfVxuXG4gICAgJHNldFByb3BlcnR5KGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcy5wcm9wcywga2V5KTtcblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLnByb3BzLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZWQgJiYgdGhpcy5vblByb3BlcnR5Q2hhbmdlZChrZXksIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkaGFzTWVzc2FnZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXkpO1xuICAgIH1cblxuICAgICRiaW5kKGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXkpO1xuXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIG1lc3NhZ2Uub24oaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCdcInswfVwiIGlzIG5vdCBhIHZhbGlkIGV2ZW50Jywga2V5KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkdW5iaW5kKGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXkpO1xuXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIG1lc3NhZ2Uub2ZmKGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHdhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRvYnNlcnZlci53YXRjaChleHAsIGhhbmRsZXIsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgJHdhdGNoQ29sbGVjdGlvbihleHAsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gdGhpcy4kb2JzZXJ2ZXIud2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICAkZXZhbChleHAsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gbmV3IEV2YWx1YXRvcih0aGlzLCB7bG9jYWxzOiBsb2NhbHN9KS5ldmFsdWF0ZShleHApO1xuICAgIH1cblxuICAgICRhc3NpZ24oZXhwLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXZhbHVhdG9yKHRoaXMsIHtsb2NhbHM6IGxvY2Fsc30pLmFzc2lnbihleHAsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAkZ2V0VGVtcGxhdGUoKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy4kZGF0YTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZGF0YS50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRhdGEudGVtcGxhdGVJZCkpIHtcbiAgICAgICAgICAgIHZhciBlbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhLnRlbXBsYXRlSWQpO1xuXG4gICAgICAgICAgICBpZiAoZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtLmlubmVySFRNTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAkcmVuZGVyKCkge1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLiRnZXRUZW1wbGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuJCRtYWluVmlldyA9IG5ldyBSZW5kZXJlcih0aGlzKS5yZW5kZXIodGVtcGxhdGUsIHRoaXMuJGNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtYWluVmlldztcbiAgICB9XG5cbiAgICAkbW91bnQoc2VsZWN0b3JPckVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiRjb250YWluZXIpO1xuICAgIH1cblxuICAgICR1bm1vdW50KCkge1xuICAgICAgICBkb20ucmVtb3ZlRWxlbWVudCh0aGlzLiRjb250YWluZXIpO1xuICAgIH1cblxuICAgICRhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgICAgICB0aGlzLiQkY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIGNoaWxkLiQkcGFyZW50ID0gdGhpcztcbiAgICB9XG5cbiAgICAkcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kJGNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJCRjaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgY2hpbGQuJCRwYXJlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJHVubW91bnQoKTtcblxuICAgICAgICB0aGlzLiRvYnNlcnZlci5kZXN0cm95KCk7XG5cbiAgICAgICAgaWYodGhpcy4kJG1haW5WaWV3ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJCRtYWluVmlldy5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xuXG4gICAgICAgIGlmKHRoaXMuJCRwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kJHBhcmVudC4kcmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBNX0hJREVfQ0xBU1MgfSBmcm9tICcuLi9jc3MnO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vcmVuZGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZUNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLiQkc2NvcGUgPSBudWxsO1xuICAgIHRoaXMuJCR2YXR0ciA9IG51bGw7XG4gICAgdGhpcy4kcHJpb3JpdHkgPSA5O1xuICAgIC8vIGJpbmRpbmcgdGV4dCBpcyBhIGFzc2lnbm1lbnRcbiAgICB0aGlzLiRhc3NpZ25tZW50ID0gZmFsc2U7XG4gICAgdGhpcy4kcGxhY2Vob2xkZXIgPSBudWxsO1xuICAgIHRoaXMuJGRhdGEgPSB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJGRhdGEpO1xufVxuXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlIHtcbiAgICBnZXQgJGtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhZGF0YS5rZXk7XG4gICAgfVxuXG4gICAgZ2V0ICRuYW1lc3BhY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xuICAgIH1cblxuICAgIGdldCAkc2NvcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkc2NvcGU7XG4gICAgfVxuXG4gICAgZ2V0ICRyZW5kZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzY29wZS4kcmVuZGVyZXI7XG4gICAgfVxuXG4gICAgZ2V0ICRlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLnZlbG0uZWxtO1xuICAgIH1cblxuICAgIGdldCAkYmluZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci5ub2RlRGF0YS5iaW5kaW5nO1xuICAgIH1cblxuICAgIGdldCAkY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLnZlbG0ubm9kZURhdGEuY29tcG9uZW50O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZGlyZWN0aXZlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyB3aGlsZSBjb21waWxpbmdcbiAgICAkY29tcGlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25Db21waWxlICYmIHRoaXMub25Db21waWxlKHRoaXMuJCR2YXR0ci52ZWxtLCB0aGlzLiQkdmF0dHIpO1xuICAgIH1cblxuICAgICRsaW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkxpbmsgJiYgdGhpcy5vbkxpbmsodGhpcy4kc2NvcGUpO1xuICAgIH1cblxuICAgIC8vIGJlZm9yZSBsaW5raW5nXG4gICAgLy8gJHByZWxpbmsoKSB7XG4gICAgLy8gICAgIHRoaXMuYmVmb3JlTGluayAmJiB0aGlzLmJlZm9yZUxpbmsoKTtcbiAgICAvLyB9XG5cbiAgICAvLyBhZnRlciBsaW5raW5nXG4gICAgJHBvc3RsaW5rKCkge1xuICAgICAgICB0aGlzLmFmdGVyTGluayAmJiB0aGlzLmFmdGVyTGluaygpO1xuXG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNoYW5nZSh0aGlzLiRiaW5kaW5nLnZhbHVlLCB0aGlzLiRiaW5kaW5nLm9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoZSBpbnB1dCB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAgJGNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSAmJiB0aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XG4gICAgfVxuXG4gICAgJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgaWYoIW5hbWVzcGFjZSl7XG4gICAgICAgICAgICBuYW1lc3BhY2UgPSB0aGlzLiRuYW1lc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0ID0gdmVsbS5ub2RlRGF0YS5kaXJlY3RpdmVzLmZpbHRlcihpdGVtID0+IGl0ZW0uJGtleSA9PT0ga2V5ICYmIGl0ZW0uJG5hbWVzcGFjZSA9PT0gbmFtZXNwYWNlKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA/IHJlc3VsdFswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgJHNlZWtEaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIHZlbG0gPSB0aGlzLiQkdmF0dHIudmVsbTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5LCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgICRzZWVrVXBEaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIHZlbG0gPSB0aGlzLiQkdmF0dHIudmVsbS5wYXJlbnROb2RlO1xuICAgICAgICByZXR1cm4gdGhpcy4kJHNlYXJjaERpcmVjdGl2ZSh2ZWxtLCBrZXksIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgJHJlbW92ZUVsZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLiRlbGVtZW50LnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuJHBsYWNlaG9sZGVyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3lvdSBtdXN0IGRlZmluZSBlbGVtZW50IHBsYWNlaG9sZGVyIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9tLnJlcGxhY2VFbGVtZW50KHRoaXMuJGVsZW1lbnQsIHRoaXMuJHBsYWNlaG9sZGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRhcHBlbmRFbGVtZW50KCkge1xuICAgICAgICBpZiAodGhpcy4kZWxlbWVudC5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRwbGFjZWhvbGRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd5b3UgbXVzdCBkZWZpbmUgZWxlbWVudCBwbGFjZWhvbGRlciEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbS5yZXBsYWNlRWxlbWVudCh0aGlzLiRwbGFjZWhvbGRlciwgdGhpcy4kZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkaGlkZUVsZW1lbnQoKSB7XG4gICAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLiRlbGVtZW50LCBNX0hJREVfQ0xBU1MpO1xuICAgIH1cblxuICAgICRzaG93RWxlbWVudCgpIHtcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHRoaXMuJGVsZW1lbnQsIE1fSElERV9DTEFTUyk7XG4gICAgfVxuXG4gICAgJGV2YWwoZXhwLCBsb2NhbHMpIHtcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy4kYmluZGluZy5sb2NhbHMsIGxvY2Fscyk7XG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZS4kZXZhbChleHAsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgJGFzc2lnbihleHAsIHZhbHVlLCBsb2NhbHMpIHtcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy4kYmluZGluZy5sb2NhbHMsIGxvY2Fscyk7XG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZS4kYXNzaWduKGV4cCwgdmFsdWUpO1xuICAgIH1cblxuICAgICRyZW5kZXIodGVtcGxhdGUsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gbmV3IFJlbmRlcmVyKHRoaXMuJHNjb3BlLCBsb2NhbHMpLnJlbmRlcih0ZW1wbGF0ZSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IHJvbGVzIH0gZnJvbSAnLi9yb2xlcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIGNvbXBvbmVudENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBkaXJlY3RpdmVDb25zdHJ1Y3RvciB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IEZpbHRlciwgZmlsdGVyQ29uc3RydWN0b3IgfSBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgeyBTZXJ2aWNlLCBzZXJ2aWNlQ29uc3RydWN0b3IgfSBmcm9tICcuL3NlcnZpY2UnO1xuXG52YXIgbmFtZVBhdHRlcm4gPSAvXlthLXpdW2EtekEtWjAtOV0qJC87XG5cbi8vIHN0YXJ0IG1ha2UgY29uc3RydWN0b3IgZnVuY3Rpb24gYmVjYXVzZSBjbGFzcyBjYW4ndCBiZSBjYWxsIHdpdGhvdXQgbmV3LlxudmFyIGNvbXBvbmVudENsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gQ29tcG9uZW50KG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbXBvbmVudENvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuY29tcG9uZW50Q2xhc3MucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxudmFyIGRpcmVjdGl2ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gRGlyZWN0aXZlKG1ldGFkYXRhKSB7XG4gICAgICAgIGRpcmVjdGl2ZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuZGlyZWN0aXZlQ2xhc3MucHJvdG90eXBlID0gRGlyZWN0aXZlLnByb3RvdHlwZTtcblxudmFyIGZpbHRlckNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gRmlsdGVyKG1ldGFkYXRhKSB7XG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuZmlsdGVyQ2xhc3MucHJvdG90eXBlID0gRmlsdGVyLnByb3RvdHlwZTtcblxudmFyIHNlcnZpY2VDbGFzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFNlcnZpY2UobWV0YWRhdGEpIHtcbiAgICAgICAgc2VydmljZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpXG4gICAgfTtcbn0pKCk7XG5zZXJ2aWNlQ2xhc3MucHJvdG90eXBlID0gU2VydmljZS5wcm90b3R5cGU7XG4vLyBlbmQgb2YgbWFrZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBiZWNhdXNlIGNsYXNzIGNhbid0IGJlIGNhbGwgd2l0aG91dCBuZXcuXG5cbi8vIGNvbnN0cnVjdG9yIGZhY3RvcnksIGNyZWF0ZSBjb25zdHJ1Y3RvciBmb3IgY29tcG9uZW50LCBkaXJlY3RpdmUsIGZpbHRlciBhbmQgc2VydmljZVxuZXhwb3J0IGNsYXNzIEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcmVuYW1lKHJvbGVJZCwgbmFtZSkge1xuICAgICAgICBpZiAobmFtZVBhdHRlcm4udGVzdChuYW1lKSkge1xuICAgICAgICAgICAgdmFyIG5ld05hbWUgPSB1dGlscy51cHBlcmNhc2UobmFtZVswXSk7XG5cbiAgICAgICAgICAgIGlmIChuYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdOYW1lICs9IG5hbWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKHJvbGVJZCkge1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuY29tcG9uZW50OlxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdDb21wb25lbnQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmRpcmVjdGl2ZTpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnRGlyZWN0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5maWx0ZXI6XG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0ZpbHRlcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuc2VydmljZTpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnU2VydmljZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3TmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lICsgJ2lzIG5vdCBhIHZhbGlkIG5hbWUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2Uocm9sZUlkLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciwgY29uc3RydWN0b3JOYW1lID0gdGhpcy5yZW5hbWUocm9sZUlkLCBuYW1lKSxcbiAgICAgICAgICAgIG9uQ29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yLnN1cGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbmZpZy5jb25zdHJ1Y3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IEZ1bmN0aW9uKCdvbkNvbnN0cnVjdCcsICdcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24gJyArIGNvbnN0cnVjdG9yTmFtZSArICcoKXtvbkNvbnN0cnVjdC5jYWxsKHRoaXMpO307Jykob25Db25zdHJ1Y3QpO1xuXG4gICAgICAgIC8vIGV4dGVuZHMgY2xhc3NcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uZmlnLmV4dGVuZHMpKSB7XG4gICAgICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBjb25maWcuZXh0ZW5kcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KGtleSkgJiYga2V5ICE9PSAnZXh0ZW5kcycgJiYga2V5ICE9PSAnY29uc3RydWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZVtrZXldID0gY29uZmlnW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdG9yZSBtZXRhZGF0YSB0byBwcm90b3R5cGVcbiAgICAgICAgbWV0YWRhdGEua2V5ID0gbmFtZTtcbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgbWFrZUNvbXBvbmVudChuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGV4dGVuZHM6IGNvbXBvbmVudENsYXNzXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuY29tcG9uZW50LCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBtYWtlRGlyZWN0aXZlKG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgICAgICAgZXh0ZW5kczogZGlyZWN0aXZlQ2xhc3NcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5kaXJlY3RpdmUsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIG1ha2VGaWx0ZXIobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBleHRlbmRzOiBmaWx0ZXJDbGFzc1xuICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmZpbHRlciwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgbWFrZVNlcnZpY2UobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBleHRlbmRzOiBzZXJ2aWNlQ2xhc3NcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5zZXJ2aWNlLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgZmFjdG9yeSA9IG5ldyBGYWN0b3J5KCk7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLiRkYXRhID0gdXRpbHMubWVyZ2UodGhpcy4kJG1ldGFkYXRhLCBkYXRhKTtcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzLCB0aGlzLiRkYXRhKTtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmaWx0ZXJDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3ZpZXctYXBpJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyByb2xlcyB9IGZyb20gJy4vcm9sZXMnO1xuaW1wb3J0IHsgaXNDb21wb25lbnQsIGlzRGlyZWN0aXZlLCBpc1NlcnZpY2UsIGlzRmlsdGVyIH0gZnJvbSAnLi92aWV3LWFwaSc7XG5cbnZhciBrZXlQYXR0ZXJuID0gL15bYS16XVthLXpBLVowLTldKiQvO1xudmFyIGdsb2JhbE5hbWVzcGFjZSA9J2F1dG9tYXRlJztcblxuY2xhc3MgTmFtZXNwYWNlQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbGFzc0NvbnRhaW5lciA9IHt9O1xuICAgICAgICB0aGlzLmluc3RhbmNlQ29udGFpbmVyID0ge307XG4gICAgfVxuXG4gICAgZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKSB7XG4gICAgICAgIGlmICghdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdO1xuICAgIH1cblxuICAgIGdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVJZCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VDb250YWluZXJbcm9sZUlkXSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VDb250YWluZXJbcm9sZUlkXTtcbiAgICB9XG59XG5cbi8vIG1ldGFkYXRhIGV4YW1wbGVcbi8vIHsga2V5OiAnJywgbmFtZXNwYWNlOiAnJywgZXh0ZW5kczogbnVsbCwgY29uc3RydWN0OiBmbiwgbWV0aG9kczoge30gfVxuZXhwb3J0IGNsYXNzIEluamVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uc0NvbnRhaW5lciA9IHt9O1xuICAgICAgICB0aGlzLnNlcnZpY2VTdGFjayA9IFtdO1xuICAgIH1cblxuICAgIGdldE5hbWVzcGFjZUNvbnRhaW5lcihuYW1lc3BhY2UpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKG5hbWVzcGFjZSkpIHtcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMubnNDb250YWluZXJbbmFtZXNwYWNlXSkge1xuICAgICAgICAgICAgICAgIHRoaXMubnNDb250YWluZXJbbmFtZXNwYWNlXSA9IG5ldyBOYW1lc3BhY2VDb250YWluZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnNDb250YWluZXJbbmFtZXNwYWNlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbmFtZXNwYWNlIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0tleU5hbWUoa2V5KSB7XG4gICAgICAgIGlmICgha2V5UGF0dGVybi50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHZhbGlkIG5hbWUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyKHJvbGVJZCwga2V5LCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICB0aGlzLmNoZWNrS2V5TmFtZShrZXkpO1xuXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2U7XG4gICAgICAgIHZhciBuYW1lc3BhY2VDb250YWluZXIgPSB0aGlzLmdldE5hbWVzcGFjZUNvbnRhaW5lcihuYW1lc3BhY2UpO1xuICAgICAgICB2YXIgY2xhc3NDb250YWluZXIgPSBuYW1lc3BhY2VDb250YWluZXIuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcblxuICAgICAgICBpZiAobmFtZXNwYWNlID09PSBnbG9iYWxOYW1lc3BhY2UgJiYgcm9sZUlkID09PSByb2xlcy5kaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGtleSA9IHV0aWxzLmZvcm1hdCgnbXswfScsIHV0aWxzLnVwcGVyY2FzZShrZXlbMF0pICsgKGtleS5sZW5ndGggPiAxID8ga2V5LnN1YnN0cigxKSA6ICcnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xhc3NDb250YWluZXJba2V5XSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICcgaXMgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBuYW1lc3BhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xhc3NDb250YWluZXJba2V5XSA9IGNvbnN0cnVjdG9yO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ29tcG9uZW50KGtleSwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5jb21wb25lbnQsIGtleSwgY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5kaXJlY3RpdmUsIGtleSwgY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRmlsdGVyKGtleSwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5maWx0ZXIsIGtleSwgY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyU2VydmljZShrZXksIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuc2VydmljZSwga2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgaGFzKHJvbGVJZCwga2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVJZCwga2V5LCBuYW1lc3BhY2UpICE9IG51bGw7XG4gICAgfVxuXG4gICAgaGFzQ29tcG9uZW50KGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5jb21wb25lbnQsIGtleSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBoYXNEaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLmRpcmVjdGl2ZSwga2V5LCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGhhc0ZpbHRlcihrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZmlsdGVyLCBrZXksIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaGFzU2VydmljZShrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuc2VydmljZSwga2V5LCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGdldEZyb21HbG9iYWxOYW1lc3BhY2Uocm9sZUlkLCBrZXkpIHtcbiAgICAgICAgdmFyIG5hbWVzcGFjZUNvbnRhaW5lciA9IHRoaXMuZ2V0TmFtZXNwYWNlQ29udGFpbmVyKGdsb2JhbE5hbWVzcGFjZSk7XG4gICAgICAgIHZhciBjbGFzc0NvbnRhaW5lciA9IG5hbWVzcGFjZUNvbnRhaW5lci5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xuICAgICAgICByZXR1cm4gY2xhc3NDb250YWluZXJba2V5XTtcbiAgICB9XG5cbiAgICBnZXQocm9sZUlkLCBrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgbmFtZXNwYWNlQ29udGFpbmVyID0gdGhpcy5nZXROYW1lc3BhY2VDb250YWluZXIobmFtZXNwYWNlKTtcbiAgICAgICAgdmFyIGNsYXNzQ29udGFpbmVyID0gbmFtZXNwYWNlQ29udGFpbmVyLmdldENsYXNzQ29udGFpbmVyKHJvbGVJZCk7XG4gICAgICAgIHJldHVybiBjbGFzc0NvbnRhaW5lcltrZXldIHx8IHRoaXMuZ2V0RnJvbUdsb2JhbE5hbWVzcGFjZShyb2xlSWQsIGtleSk7XG4gICAgfVxuXG4gICAgZ2V0Q29tcG9uZW50KGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5jb21wb25lbnQsIGtleSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLmRpcmVjdGl2ZSwga2V5LCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGdldEZpbHRlcihrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuZmlsdGVyLCBrZXksIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgZ2V0U2VydmljZShrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuc2VydmljZSwga2V5LCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGNoZWNrSW5zdGFuY2Uocm9sZUlkLCBpbnN0YW5jZSkge1xuICAgICAgICB2YXIgdmFsaWRhdG9yLCByb2xlO1xuXG4gICAgICAgIHN3aXRjaCAocm9sZUlkKSB7XG4gICAgICAgICAgICBjYXNlIHJvbGVzLmNvbXBvbmVudDpcbiAgICAgICAgICAgICAgICByb2xlID0gJ0NvbXBvbmVudCc7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yID0gaXNDb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHJvbGVzLmRpcmVjdGl2ZTpcbiAgICAgICAgICAgICAgICByb2xlID0gJ0RpcmVjdGl2ZSc7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yID0gaXNEaXJlY3RpdmU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHJvbGVzLnNlcnZpY2U6XG4gICAgICAgICAgICAgICAgcm9sZSA9ICdTZXJ2aWNlJztcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IgPSBpc1NlcnZpY2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHJvbGVzLmZpbHRlcjpcbiAgICAgICAgICAgICAgICByb2xlID0gJ0ZpbHRlcic7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yID0gaXNGaWx0ZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdG9yICYmICF2YWxpZGF0b3IoaW5zdGFuY2UpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCdvYmplY3QgaXMgYSBpbnN0YW5jZSBvZiB7MH0nLCByb2xlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNvbHZlQ29uc3RydWN0b3Iocm9sZUlkLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yO1xuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldChyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnY2FuIG5vdCBmaW5kIFwiezB9XCIgaW4gbmFtZXNwYWNlIFwiezF9XCInLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc0Z1bmN0aW9uKGtleU9yQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IGtleU9yQ29uc3RydWN0b3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGFyYW1ldGVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgY3JlYXRlKHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBDbHMgPSB0aGlzLnJlc29sdmVDb25zdHJ1Y3Rvcihyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDbHMoKTtcblxuICAgICAgICB0aGlzLmNoZWNrSW5zdGFuY2Uocm9sZUlkLCBpbnN0YW5jZSk7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGNyZWF0ZVNpbmdsZXRvbihyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgaW5zdGFuY2UsXG4gICAgICAgICAgICBDbHMgPSB0aGlzLnJlc29sdmVDb25zdHJ1Y3Rvcihyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XG5cbiAgICAgICAgaWYoIW5hbWVzcGFjZSkge1xuICAgICAgICAgICAgbmFtZXNwYWNlID0gQ2xzLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5hbWVzcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuYW1lc3BhY2VDb250YWluZXIgPSB0aGlzLmdldE5hbWVzcGFjZUNvbnRhaW5lcihuYW1lc3BhY2UpLFxuICAgICAgICAgICAgY29udGFpbmVyID0gbmFtZXNwYWNlQ29udGFpbmVyLmdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVJZCksXG4gICAgICAgICAgICByZXN1bHQgPSBjb250YWluZXIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gaW5zdGFuY2VvZiBDbHM7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBDbHMoKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnN0YW5jZShyb2xlSWQsIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wb25lbnQoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XG4gICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHJvbGVzLmNvbXBvbmVudCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEaXJlY3RpdmUoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5kaXJlY3RpdmUsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlRmlsdGVyKGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTaW5nbGV0b24ocm9sZXMuZmlsdGVyLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGNyZWF0ZVNlcnZpY2Uoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBTZXJ2aWNlID0gdGhpcy5yZXNvbHZlQ29uc3RydWN0b3Iocm9sZXMuc2VydmljZSwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcblxuICAgICAgICBpZiAoU2VydmljZS5wcm90b3R5cGUuJCRtZXRhZGF0YS5ub25TaGFyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5zZXJ2aWNlLCBTZXJ2aWNlLCBuYW1lc3BhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2luZ2xldG9uKHJvbGVzLnNlcnZpY2UsIFNlcnZpY2UsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgZXh0cmFjdE5zQW5kS2V5KG5hbWUpIHtcbiAgICAgICAgdmFyIHNlZ21lbnRzID0gbmFtZS5zcGxpdCgnLicpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IHNlZ21lbnRzLnBvcCgpLFxuICAgICAgICAgICAgbnM6IHNlZ21lbnRzLmxlbmd0aCA+IDAgPyBzZWdtZW50cy5qb2luKCcuJykgOiAnJyxcbiAgICAgICAgICAgIGNsczogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHBhcnNlRnVsbE5hbWUobmFtZSwgdXNpbmcpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCByZXN1bHQgPSB0aGlzLmV4dHJhY3ROc0FuZEtleShuYW1lKTtcblxuICAgICAgICBpZiAodXNpbmcpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodXNpbmcuaGFzT3duUHJvcGVydHkocmVzdWx0Lm5zKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNlIGFsaWFzIHdpdGggcmVhbCBuYW1lc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm5zID0gdXNpbmdbcmVzdWx0Lm5zXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh1c2luZy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB1c2luZ1tuYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gcmVhbCBuYW1lc3BhY2UgYW5kIGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gc2VsZi5leHRyYWN0TnNBbmRLZXkodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHJlYWwgY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jbHMgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgaW5qZWN0U2VydmljZXMoaW5zdGFuY2UsIG1ldGFkYXRhLCBjaGVja0xvb3BEZXBlbmRlbmN5KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgc2VydmljZUZ1bGxOYW1lLCBoYXNMb29wRGVwZW5kZW5jeSA9IGZhbHNlO1xuXG4gICAgICAgIGlmKGNoZWNrTG9vcERlcGVuZGVuY3kpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0aW5nIGEgc2VydmljZSBpbnN0YW5jZSBhdCB0aGUgbW9tZW50XG4gICAgICAgICAgICBzZXJ2aWNlRnVsbE5hbWUgPSB1dGlscy5mb3JtYXQoJ3swfS57MX0nLCB1dGlscy5sb3dlcmNhc2UobWV0YWRhdGEubmFtZXNwYWNlKSwgbWV0YWRhdGEua2V5KTtcbiAgICAgICAgICAgIGhhc0xvb3BEZXBlbmRlbmN5ID0gdGhpcy5zZXJ2aWNlU3RhY2suaW5kZXhPZihzZXJ2aWNlRnVsbE5hbWUpICE9PSAtMTtcblxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlU3RhY2sucHVzaChzZXJ2aWNlRnVsbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoaGFzTG9vcERlcGVuZGVuY3kpIHtcbiAgICAgICAgICAgICAgICAvLyBvY2N1cnMgbG9vcCBkZXBlbmRlbmN5XG4gICAgICAgICAgICAgICAgdmFyIGVycm9yID0gdXRpbHMuZm9ybWF0KCdMb29wIGRlcGVuZGVuY3k6IHswfScsIHRoaXMuc2VydmljZVN0YWNrLmpvaW4oJyAtPiAnKSk7XG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgc2VydmljZSBkZXBlbmRlbmN5IHN0YWNrXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlU3RhY2subGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAvLyB0aHJvdyBlcnJvclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0YWRhdGEgJiYgdXRpbHMuaXNPYmplY3QobWV0YWRhdGEuaW5qZWN0KSkge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChtZXRhZGF0YS5pbmplY3QsIGZ1bmN0aW9uIChzZXJ2aWNlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VydmljZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkZW50aWZpZXIgPSBzZWxmLnBhcnNlRnVsbE5hbWUoc2VydmljZSwgbWV0YWRhdGEudXNpbmcpO1xuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZVtrZXldID0gc2VsZi5jcmVhdGVTZXJ2aWNlKGlkZW50aWZpZXIua2V5LCBpZGVudGlmaWVyLm5zIHx8IG1ldGFkYXRhLm5hbWVzcGFjZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2Vba2V5XSA9IHNlbGYuY3JlYXRlU2VydmljZShzZXJ2aWNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGNoZWNrTG9vcERlcGVuZGVuY3kpIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZVN0YWNrLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgdmFyIGluamVjdG9yID0gbmV3IEluamVjdG9yKCk7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBwYXJzZUV4cCB9IGZyb20gJy4uL2V4cCc7XHJcbmltcG9ydCB7IHBhcnNlVHBsIH0gZnJvbSAnLi4vdHBsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xyXG4gICAgZ2V0IGluamVjdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLiRpbmplY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdXNpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuJGRhdGEudXNpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NvcGUpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtcyA9IHt9O1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHtcclxuICAgICAgICAgICAgY29tcG9uZW50czoge30sXHJcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IHt9LFxyXG4gICAgICAgICAgICBmaWx0ZXJzOiB7fVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VFeHByZXNzaW9uKGV4cCkge1xyXG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5wcm9ncmFtc1tleHBdO1xyXG5cclxuICAgICAgICBpZiAoIXByb2dyYW0pIHtcclxuICAgICAgICAgICAgcHJvZ3JhbSA9IHBhcnNlRXhwKGV4cCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbXNbZXhwXSA9IHByb2dyYW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZVRlbXBsYXRlKHRwbCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZVRwbCh0cGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmUoc2VsZWN0b3IsIGJ1ZmZlciwgbG9hZGVyKSB7XHJcbiAgICAgICAgdmFyIGlkZW50aWZpZXIsIHRhcmdldCwgZnVsbE5hbWUsIGRlZmF1bHROcyA9IHRoaXMuc2NvcGUuJGRhdGEubmFtZXNwYWNlO1xyXG5cclxuICAgICAgICBpZiAoYnVmZmVyW3NlbGVjdG9yXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IGJ1ZmZlcltzZWxlY3Rvcl07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZnVsbE5hbWUgPSB1dGlscy5jb252ZXJ0VG9IdW1wTmFtZShzZWxlY3RvciwgJy0nKTtcclxuICAgICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMuaW5qZWN0b3IucGFyc2VGdWxsTmFtZShmdWxsTmFtZSwgdGhpcy51c2luZyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaWRlbnRpZmllci5jbHMpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlcltzZWxlY3Rvcl0gPSBpZGVudGlmaWVyLmNscztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuaW5qZWN0b3JbbG9hZGVyXShpZGVudGlmaWVyLmtleSwgaWRlbnRpZmllci5ucyB8fCBkZWZhdWx0TnMpO1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyW3NlbGVjdG9yXSA9IHRhcmdldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlQ29tcG9uZW50KHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZShzZWxlY3RvciwgdGhpcy50eXBlLmNvbXBvbmVudHMsICdnZXRDb21wb25lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlRGlyZWN0aXZlKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZShzZWxlY3RvciwgdGhpcy50eXBlLmRpcmVjdGl2ZXMsICdnZXREaXJlY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlRmlsdGVyKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdmFyIGZpbHRlciwgZmlsdGVyQ2xzLCBidWZmZXIgPSB0aGlzLmZpbHRlcnM7XHJcblxyXG4gICAgICAgIGlmIChidWZmZXJbc2VsZWN0b3JdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZmlsdGVyID0gYnVmZmVyW3NlbGVjdG9yXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaWx0ZXJDbHMgPSB0aGlzLnJlc29sdmUoc2VsZWN0b3IsIHRoaXMudHlwZS5maWx0ZXJzLCAnZ2V0RmlsdGVyJyk7XHJcbiAgICAgICAgICAgIGZpbHRlciA9IHRoaXMuaW5qZWN0b3IuY3JlYXRlRmlsdGVyKGZpbHRlckNscyk7XHJcbiAgICAgICAgICAgIGJ1ZmZlcltzZWxlY3Rvcl0gPSBmaWx0ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgdmFyIHJvbGVzID0ge1xuICAgIGZpbHRlcjogMCxcbiAgICBzZXJ2aWNlOiAxLFxuICAgIGNvbXBvbmVudDogMixcbiAgICBkaXJlY3RpdmU6IDNcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2VDb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy4kZGF0YSA9IHV0aWxzLm1lcmdlKHRoaXMuJCRtZXRhZGF0YSwgZGF0YSk7XG4gICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcywgdGhpcy4kZGF0YSwgdHJ1ZSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHNlcnZpY2VDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vZG9tJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UnO1xuXG5mdW5jdGlvbiBuYW1lc3BhY2UobmFtZSkge1xuICAgIGZ1bmN0aW9uIG1lcmdlTWV0YWRhdGEobWV0YWRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIG5hbWVzcGFjZTogbmFtZVxuICAgICAgICB9LCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tcG9uZW50OiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50KGtleSwgY29uZmlnLCBtZXJnZU1ldGFkYXRhKG1ldGFkYXRhKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpcmVjdGl2ZTogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZShrZXksIGNvbmZpZywgbWVyZ2VNZXRhZGF0YShtZXRhZGF0YSkpO1xuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VydmljZShrZXksIGNvbmZpZywgbWVyZ2VNZXRhZGF0YShtZXRhZGF0YSkpO1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIoa2V5LCBjb25maWcsIG1lcmdlTWV0YWRhdGEobWV0YWRhdGEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICB2YXIgUm9vdCA9IGZhY3RvcnkubWFrZUNvbXBvbmVudCgnYXV0b21hdGVBcHAnLCBjb25maWcsIHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5hbWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGVsZW1lbnQuaW5uZXJIVE1MXG4gICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgdmFyIHJvb3QgPSBuZXcgUm9vdCgpO1xuXG4gICAgICAgICAgICBkb20uY2xlYXJDaGlsZHJlbk9mRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIHJvb3QuJHJlbmRlcigpLm1vdW50KGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50KGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZUNvbXBvbmVudChrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyQ29tcG9uZW50KGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gZGlyZWN0aXZlKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZURpcmVjdGl2ZShrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZUZpbHRlcihrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gc2VydmljZShrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VTZXJ2aWNlKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJTZXJ2aWNlKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gaXNDb21wb25lbnQoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBDb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0aXZlKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgRGlyZWN0aXZlO1xufVxuXG5mdW5jdGlvbiBpc0ZpbHRlcihpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIEZpbHRlcjtcbn1cblxuZnVuY3Rpb24gaXNTZXJ2aWNlKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgU2VydmljZTtcbn1cblxuZXhwb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRGlyZWN0aXZlLFxuICAgIEZpbHRlcixcbiAgICBTZXJ2aWNlLFxuICAgIGlzQ29tcG9uZW50LFxuICAgIGlzRGlyZWN0aXZlLFxuICAgIGlzRmlsdGVyLFxuICAgIGlzU2VydmljZSxcbiAgICBuYW1lc3BhY2UsXG4gICAgaW5qZWN0b3Jcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==