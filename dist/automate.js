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
  refreshView: new _message__WEBPACK_IMPORTED_MODULE_0__["Message"]()
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
/*! exports provided: isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isFormData, toNumber, lowercase, uppercase, convertToHumpName, convertFromHumpName, copy, extend, merge, forEach, some, remove, concat, orderBy, orderByDescending, object, inherit, hasProperty, getProperty, setProperty, format, escapeHtml, Local, Message, events, isMessage, isProxy, getTarget, handler, Observer, parseOptions, AST, NullExpressionNode, AstNode, AssignmentExpressionNode, BinaryExpressionNode, CallExpressionNode, ConditionalExpressionNode, ExpressionStatementNode, IdentifierNode, LiteralNode, LogicalExpressionNode, MemberExpressionNode, ObjectExpressionNode, ProgramNode, PropertyNode, UnaryExpressionNode, ArrayExpressionNode, ExpLexer, ExpParser, lexExp, parseExp, ExpBuilder, Evaluator, Analyser, nodeType, VNode, VAttr, VCmnt, VElm, VText, VType, lexTpl, parseTpl, isVElm, isVAttr, isVText, isVComment, TplBuilder, Binding, Expression, Renderer, Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, injector, component, directive, filter, service, ClassDirective, StyleDirective, Injector, HttpService */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _service__WEBPACK_IMPORTED_MODULE_10__["HttpService"]; });













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
      if (this.assignment || this.logical) {
        return;
      }

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
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/core/index.js");
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
    var _this = this;

    _classCallCheck(this, View);

    this.vnodes = [];
    this.bindings = [];
    this.directives = [];
    this.components = [];
    this.unsubscribe = _core__WEBPACK_IMPORTED_MODULE_1__["events"].refreshView.on(function () {
      return _this.refresh();
    });
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
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (!this.bindings.length) {
        return;
      }

      this.bindings.forEach(function (binding) {
        binding.detect();
        binding.patch();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.unsubscribe();
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
    var _this2;

    _classCallCheck(this, SingleNodeView);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(SingleNodeView).call(this));
    _this2.node = null;
    return _this2;
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
    var _this3;

    _classCallCheck(this, MultipleNodeView);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(MultipleNodeView).call(this));
    _this3.nodes = [];
    return _this3;
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

/***/ "./src/service/http.js":
/*!*****************************!*\
  !*** ./src/service/http.js ***!
  \*****************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
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




var HttpService = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["service"])({
  namespace: 'automate',
  key: 'http'
}), _dec(_class = /*#__PURE__*/function (_Service) {
  _inherits(HttpService, _Service);

  function HttpService() {
    _classCallCheck(this, HttpService);

    return _possibleConstructorReturn(this, _getPrototypeOf(HttpService).call(this));
  }

  _createClass(HttpService, [{
    key: "createXHR",
    value: function createXHR() {
      return new XMLHttpRequest();
    }
  }, {
    key: "createPromise",
    value: function createPromise(resolve, reject) {
      return new Promise(resolve, reject);
    }
  }, {
    key: "addUrlParam",
    value: function addUrlParam(url, name, value) {
      url += url.indexOf('?') === -1 ? '?' : '&';
      url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
      return url;
    }
  }, {
    key: "setHttpRequestHeaders",
    value: function setHttpRequestHeaders(xhr, config) {
      _utils__WEBPACK_IMPORTED_MODULE_2__["forEach"](config.headers, function (value, key) {
        key = _utils__WEBPACK_IMPORTED_MODULE_2__["convertFromHumpName"](key, '-');
        xhr.setRequestHeader(key, value);
      });
    }
  }, {
    key: "getHttpResponseHeaders",
    value: function getHttpResponseHeaders(headers) {
      var parsed = {};

      if (!headers) {
        return parsed;
      }

      var key, val, i;
      _utils__WEBPACK_IMPORTED_MODULE_2__["forEach"](headers.split('\n'), function (line, index) {
        i = line.indexOf(':');
        key = line.substr(0, i).trim().toLowerCase();
        val = line.substr(i + 1).trim();

        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }

          if (key === 'set-cookie') {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
          }
        }
      });
      return parsed;
    }
  }, {
    key: "buildUrl",
    value: function buildUrl(url, config) {
      var self = this;

      if (config.data != null && config.method.toLowerCase() === 'get') {
        _utils__WEBPACK_IMPORTED_MODULE_2__["forEach"](config.data, function (value, name) {
          self.addUrlParam(url, name, value);
        });
      }

      return url;
    }
  }, {
    key: "request",
    value: function request(config) {
      var self = this;
      return this.createPromise(function (resolve, reject) {
        var xhr = self.createXHR();

        xhr.onload = function () {
          // Prepare the response
          var responseHeaders = 'getAllResponseHeaders' in xhr ? self.getHttpResponseHeaders(xhr.getAllResponseHeaders()) : null;
          var responseData = !config.responseType || config.responseType === 'text' ? JSON.parse(xhr.responseText) : xhr.response;
          var response = {
            data: responseData,
            status: xhr.status,
            statusText: xhr.statusText,
            headers: responseHeaders,
            config: config,
            request: xhr
          };

          if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
            // successfully
            resolve(response);
          } else {
            // unsuccessfully
            reject(response);
          }

          xhr = null;
        };

        var method = config.method.toLowerCase(),
            url = self.buildUrl(config.url, config);
        xhr.open(method, url, true);
        xhr.send(config.data);
      });
    }
  }, {
    key: "get",
    value: function get(url, data, options) {
      var config = {
        method: 'get',
        url: url,
        data: data
      };

      if (options != null) {
        _utils__WEBPACK_IMPORTED_MODULE_2__["extend"](config, options);
      }

      return this.request(config);
    }
  }, {
    key: "post",
    value: function post(url, data, options) {
      var config = {
        method: 'post',
        url: url,
        headers: {
          contentType: 'application/json'
        },
        data: JSON.stringify(data)
      };

      if (options != null) {
        _utils__WEBPACK_IMPORTED_MODULE_2__["extend"](config, options);
      }

      return this.request(config);
    }
  }]);

  return HttpService;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Service"])) || _class);

/***/ }),

/***/ "./src/service/index.js":
/*!******************************!*\
  !*** ./src/service/index.js ***!
  \******************************/
/*! exports provided: Injector, HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./injector */ "./src/service/injector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return _injector__WEBPACK_IMPORTED_MODULE_0__["Injector"]; });

/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http */ "./src/service/http.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _http__WEBPACK_IMPORTED_MODULE_1__["HttpService"]; });




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvbXBvbmVudC9zbG90LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvZXZlbnRzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9sb2NhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY3NzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvYmluZC1odG1sLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9oaWRlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9pZi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvcmVhZG9ubHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3MtZXZlbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3Mtb2RkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLW9kZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC1kZWZhdWx0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLXdoZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9hbmFseXNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXZhbHVhdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWxleGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtb3BlcmF0b3JzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2Fzc2lnbm1lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FzdC1ub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3QuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY2FsbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY29uZGl0aW9uYWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2lkZW50aWZpZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9saXRlcmFsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9sb2dpY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9tZW1iZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL29iamVjdC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3VuYXJ5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL29ic2VydmVyL2RlbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvYmluZGluZy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3JlbmRlci92aWV3LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3NlcnZpY2UvaHR0cC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9zZXJ2aWNlL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3NlcnZpY2UvaW5qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmF0dHIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZjbW50LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92ZWxtLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92bm9kZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdnRleHQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Z0eXBlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC90cGwtYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC90cGwtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWxleGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC90cGwtcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvY29tcG9uZW50LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvaW5qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9yb2xlcy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy92aWV3LWFwaS5qcyJdLCJuYW1lcyI6WyJTbG90Q29tcG9uZW50IiwiY29tcG9uZW50IiwibmFtZXNwYWNlIiwia2V5IiwicHJvcHMiLCJuYW1lIiwic2xvdHMiLCIkJHBhcmVudCIsInRlbXBsYXRlIiwiJCRtYWluVmlldyIsIlJlbmRlcmVyIiwicmVuZGVyIiwiJGNvbnRhaW5lciIsImRlc3Ryb3kiLCJDb21wb25lbnQiLCJpc01lc3NhZ2UiLCJvYmoiLCJNZXNzYWdlIiwiZXZlbnRzIiwicHJvcGVydHlDaGFuZ2VkIiwicmVmcmVzaFZpZXciLCJMb2NhbCIsImUiLCJlbG0iLCIkZXZlbnQiLCIkZWxlbWVudCIsImRhdGEiLCJoYW5kbGVycyIsImZuIiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsIkVycm9yIiwib2ZmIiwic3BsaWNlIiwic2NvcGUiLCJmb3JFYWNoIiwiaGFuZGxlciIsImNhbGwiLCJkb20iLCJNX0NNUF9DTEFTUyIsIk1fSElERV9DTEFTUyIsIm1ldGFkYXRhIiwidGFyZ2V0IiwicHJvdG90eXBlIiwiJCRtZXRhZGF0YSIsImluamVjdG9yIiwicmVnaXN0ZXJDb21wb25lbnQiLCJkaXJlY3RpdmUiLCJyZWdpc3RlckRpcmVjdGl2ZSIsImZpbHRlciIsInJlZ2lzdGVyRmlsdGVyIiwic2VydmljZSIsInJlZ2lzdGVyU2VydmljZSIsIkJpbmRIdG1sRGlyZWN0aXZlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJEaXJlY3RpdmUiLCJCaW5kRGlyZWN0aXZlIiwiaW5uZXJUZXh0IiwiSGlkZURpcmVjdGl2ZSIsIklmRGlyZWN0aXZlIiwiJHBsYWNlaG9sZGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVDb21tZW50IiwiTW9kZWxEaXJlY3RpdmUiLCJ2aWV3VmFsdWUiLCJtb2RlbFZhbHVlIiwicGFyc2VycyIsImZvcm1hdHRlcnMiLCJ2aWV3Q2hhbmdlTGlzdGVuZXJzIiwidmFsaWRhdG9ycyIsInN0YXR1cyIsImZlZWRiYWNrIiwicHJpc3RpbmUiLCJkaXJ0eSIsInZhbGlkIiwiaW52YWxpZCIsIm9wdGlvbnMiLCJjc3MiLCJjb21taXRNb2RlbFZhbHVlIiwiJHNjb3BlIiwic3RhdGUiLCIkY29tcG9uZW50IiwiJGJpbmQiLCJjb21taXRWaWV3VmFsdWUiLCJuZXd2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdWYWx1ZSIsInNlbGYiLCJ2YWxpZGF0b3IiLCJmb3JtYXR0ZXIiLCIkc2V0UHJvcGVydHkiLCJ1cGRhdGVFbG1Dc3NDbGFzcyIsIm1hcmtEaXJ0eVN0YXR1cyIsImxpc3RlbmVyIiwicGFyc2VyIiwiJGJpbmRpbmciLCJhc3NpZ24iLCJlbGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJSZXBlYXREaXJlY3RpdmUiLCJpdGVtRXhwIiwiaXRlbXNFeHAiLCJpdGVtVGVtcGxhdGUiLCJpdGVtVmlld3MiLCJNYXAiLCJ1bndhdGNoQ29sbGVjdGlvbiIsInZlbG0iLCJ2YXR0ciIsImFyZyIsIm5vZGVWYWx1ZSIsInBhdHRlcm4iLCJyZXN1bHQiLCJleGVjIiwicmVtb3ZlQXR0ciIsImdldE91dGVyVHBsIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaGVhZGVyIiwiZm9vdGVyIiwiYXBwZW5kQ2hpbGQiLCIkd2F0Y2hDb2xsZWN0aW9uIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIml0ZW1zIiwiJGV2YWwiLCJ1dGlscyIsIml0ZW0iLCJpdGVtVmlldyIsImdldFZpZXdGcm9tQnVmZmVyIiwibG9jYWxzIiwiJHJlbmRlciIsInNldFZpZXdUb0J1ZmZlciIsImNvbnRlbnQiLCJsaXN0IiwidmlldyIsImJ1ZmZlciIsImRhdGFJdGVtIiwiaGFzIiwiZ2V0IiwibGVuZ3RoIiwic2hpZnQiLCJzZXQiLCJTaG93RGlyZWN0aXZlIiwiQ2hlY2tlZERpcmVjdGl2ZSIsIlN0YXRlRGlyZWN0aXZlIiwiRGlzYWJsZWREaXJlY3RpdmUiLCJSZWFkb25seURpcmVjdGl2ZSIsIlNlbGVjdGVkRGlyZWN0aXZlIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiQ2xhc3NFdmVuRGlyZWN0aXZlIiwiQ2xhc3NEaXJlY3RpdmUiLCJDbGFzc09kZERpcmVjdGl2ZSIsIm5ld0NsYXNzIiwib2xkQ2xhc3MiLCJza2lwQ3VycmVudEVsbSIsImpvaW4iLCJTdHlsZUV2ZW5EaXJlY3RpdmUiLCJTdHlsZURpcmVjdGl2ZSIsIlN0eWxlT2RkRGlyZWN0aXZlIiwibmV3U3R5bGUiLCJvbGRTdHlsZSIsInN0eWxlIiwiU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSIsInN3aXRjaEN0cmwiLCIkc2Vla1VwRGlyZWN0aXZlIiwibWF0Y2hEZWZhdWx0Iiwib24iLCJkZWZhdWx0TWF0Y2hlZCIsIiRyZW1vdmVFbGVtZW50IiwiU3dpdGNoV2hlbkRpcmVjdGl2ZSIsIm1hdGNoZWQiLCJjaGFuZ2VkIiwicGx1c01hdGNoIiwibWludXNNYXRjaCIsIlN3aXRjaERpcmVjdGl2ZSIsIm1hdGNoQ291bnQiLCJmaXJlIiwiY2hlY2tEZWZhdWx0IiwiZ2V0Q2hpbGRyZW5PZkVsZW1lbnQiLCJBcnJheSIsInNsaWNlIiwiY2hpbGROb2RlcyIsImNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQiLCJjaGlsZCIsInJlbW92ZUNoaWxkIiwicmVwbGFjZUVsZW1lbnQiLCJuZXdFbG0iLCJyZW1vdmVFbGVtZW50IiwicmVtb3ZlRWxlbWVudHNCZXR3ZWVuIiwic3RhcnRFbG0iLCJlbmRFbG0iLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZyIsImFwcGVuZEVsZW1lbnQiLCJsYXN0Q2hpbGQiLCJhZGRDbGFzcyIsImNscyIsInRyaW0iLCJzcGxpdCIsImMiLCJjdXIiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVDbGFzcyIsInRhciIsInJlcGxhY2UiLCJsb2FkU3R5bGVTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIkFjY2Vzc29yIiwiY2FsbGVlIiwiZXhwIiwiY2hpbGRyZW4iLCJBbmFseXNlciIsInBhcnNlRXhwcmVzc2lvbiIsInBhcnNlRXhwIiwicHJvZ3JhbSIsImFjY2Vzc29yIiwiYnVpbGRlciIsIkV4cEJ1aWxkZXIiLCJhbmFseXNlUHJvZ3JhbSIsImFuYWx5c2VOb2RlIiwibm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiQVNUIiwiRXhwcmVzc2lvblN0YXRlbWVudCIsImFuYWx5c2VFeHByZXNzaW9uIiwiQXNzaWdubWVudEV4cHJlc3Npb24iLCJhbmFseXNlQXNzaWdubWVudCIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbiIsImFuYWx5c2VDb25kaXRpb24iLCJMb2dpY2FsRXhwcmVzc2lvbiIsImFuYWx5c2VMb2dpYyIsIkJpbmFyeUV4cHJlc3Npb24iLCJhbmFseXNlQmluYXJ5IiwiVW5hcnlFeHByZXNzaW9uIiwiYW5hbHlzZVVuYXJ5IiwiQ2FsbEV4cHJlc3Npb24iLCJhbmFseXNlQ2FsbCIsIk1lbWJlckV4cHJlc3Npb24iLCJhbmFseXNlTWVtYmVyIiwiSWRlbnRpZmllciIsImFuYWx5c2VJZGVudGlmaWVyIiwiTGl0ZXJhbCIsImFuYWx5c2VMaXRlcmFsIiwiQXJyYXlFeHByZXNzaW9uIiwiYW5hbHlzZUFycmF5IiwiUHJvcGVydHkiLCJhbmFseXNlUHJvcGVydHkiLCJPYmplY3RFeHByZXNzaW9uIiwiYW5hbHlzZU9iamVjdCIsImFzc2lnbm1lbnQiLCJyaWdodCIsImNvbmRpdGlvbiIsInRlc3QiLCJhbHRlcm5hdGUiLCJjb25zZXF1ZW50IiwibG9naWMiLCJsZWZ0IiwiYmluYXJ5IiwidW5hcnkiLCJhcmdzIiwibWVtYmVyIiwicGFyZW50Iiwib2JqZWN0IiwiY29tcHV0ZWQiLCJwcm9wZXJ0eSIsImNyZWF0ZUNoaWxkIiwiYnVpbGQiLCJpZGVudGlmaWVyIiwiY3JlYXRlQWNjZXNzb3IiLCJsaXRlcmFsIiwicHJvcCIsInByb3BlcnRpZXMiLCJhcnIiLCJhbmFseXNlIiwiZGVmYXVsdE9wdGlvbnMiLCJhbGxvd051bGwiLCJhc3NpZ25JbnRlcmNlcHRvciIsIkV2YWx1YXRvciIsIiRwYXJzZXIiLCJldmFsdWF0ZVByb2dyYW0iLCJldmFsdWF0ZU5vZGUiLCIkbnVsbCIsImFzc2lnblByb2dyYW0iLCJleHByZXNzaW9uIiwicHJvcGVydHlLZXkiLCJldmFsdWF0ZUV4cHJlc3Npb24iLCJldmFsdWF0ZUFzc2lnbm1lbnQiLCJldmFsdWF0ZUNvbmRpdGlvbiIsImV2YWx1YXRlTG9naWMiLCJldmFsdWF0ZUJpbmFyeSIsImV2YWx1YXRlVW5hcnkiLCJldmFsdWF0ZUNhbGwiLCJldmFsdWF0ZU1lbWJlciIsImV2YWx1YXRlSWRlbnRpZmllciIsImV2YWx1YXRlTGl0ZXJhbCIsImV2YWx1YXRlQXJyYXkiLCJldmFsdWF0ZVByb3BlcnR5IiwiZXZhbHVhdGVPYmplY3QiLCJhc3NpZ25tZW50TGVmdCIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJvcGVyYXRvciIsImFyZ1ZhbHVlcyIsIm1hcCIsInJlc29sdmVGaWx0ZXIiLCJ0cmFuc2Zvcm0iLCJhcHBseSIsIk51bGxFeHByZXNzaW9uTm9kZSIsInRhcmdldE5vZGUiLCJkZWYiLCJsZXhFeHAiLCJFeHBMZXhlciIsImxleCIsIkV4cFBhcnNlciIsInBhcnNlIiwiYnVpbGRFeHByZXNzaW9uIiwiYnVpbGRBc3NpZ25tZW50IiwiYnVpbGRDb25kaXRpb24iLCJidWlsZExvZ2ljIiwiYnVpbGRCaW5hcnkiLCJidWlsZFVuYXJ5IiwiYnVpbGRDYWxsIiwiYnVpbGRNZW1iZXIiLCJidWlsZElkZW50aWZpZXIiLCJidWlsZExpdGVyYWwiLCJidWlsZEFycmF5IiwiYnVpbGRQcm9wZXJ0eSIsImJ1aWxkT2JqZWN0IiwicmVzIiwicGFyc2VPcHRpb25zIiwidGV4dCIsInRva2VucyIsImNoIiwiY2hhckF0IiwicmVhZFN0cmluZyIsImlzTnVtYmVyIiwicGVlayIsInJlYWROdW1iZXIiLCJpc0lkZW50aWZpZXJTdGFydCIsInBlZWtNdWx0aWNoYXIiLCJyZWFkSWRlbnQiLCJpcyIsImlzV2hpdGVzcGFjZSIsImNoMiIsImNoMyIsIm9wMSIsIk9QRVJBVE9SUyIsIm9wMiIsIm9wMyIsInRva2VuIiwidGhyb3dFcnJvciIsImNoYXJzIiwiaSIsIm51bSIsImNvZGVQb2ludEF0IiwiaXNWYWxpZElkZW50aWZpZXJTdGFydCIsImlzSWRlbnRpZmllckNvbnRpbnVlIiwiaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSIsImNwIiwiY2hhckNvZGVBdCIsImNwMSIsImNwMiIsImVycm9yIiwic3RhcnQiLCJlbmQiLCJjb2xTdHIiLCJzdWJzdHJpbmciLCJudW1iZXIiLCJwZWVrQ2giLCJpc0V4cE9wZXJhdG9yIiwiY29uc3RhbnQiLCJOdW1iZXIiLCJxdW90ZSIsInN0cmluZyIsInJhd1N0cmluZyIsImVzY2FwZSIsImhleCIsIm1hdGNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJyZXAiLCJFU0NBUEUiLCJvcGVyYXRvclRleHQiLCJsZXhlciIsIm1zZyIsIlByb2dyYW1Ob2RlIiwiZXhwcmVzc2lvblN0YXRlbWVudCIsImV4cGVjdCIsIkV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIiwiZmlsdGVyQ2hhaW4iLCJhc3QiLCJ0ZXJuYXJ5IiwiaXNBc3NpZ25hYmxlIiwiQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbE9SIiwiY29uc3VtZSIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsQU5EIiwiTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZXF1YWxpdHkiLCJyZWxhdGlvbmFsIiwiQmluYXJ5RXhwcmVzc2lvbk5vZGUiLCJhZGRpdGl2ZSIsIm11bHRpcGxpY2F0aXZlIiwiVW5hcnlFeHByZXNzaW9uTm9kZSIsInByaW1hcnkiLCJhcnJheURlY2xhcmF0aW9uIiwibGl0ZXJhbHMiLCJoYXNPd25Qcm9wZXJ0eSIsIkxpdGVyYWxOb2RlIiwibmV4dCIsInBlZWtBaGVhZCIsIkNhbGxFeHByZXNzaW9uTm9kZSIsInBhcnNlQXJndW1lbnRzIiwiTWVtYmVyRXhwcmVzc2lvbk5vZGUiLCJiYXNlRXhwcmVzc2lvbiIsImlkZW50aWZpZXJzIiwiZW50aXJlTmFtZSIsIklkZW50aWZpZXJOb2RlIiwicGVla1Rva2VuIiwiQXJyYXlFeHByZXNzaW9uTm9kZSIsIlByb3BlcnR5Tm9kZSIsIk9iamVjdEV4cHJlc3Npb25Ob2RlIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJ0IiwiQXN0Tm9kZSIsIlByb2dyYW0iLCJraW5kIiwicHJlZml4IiwidW5kZWZpbmVkIiwiRGVsYXllciIsInRpbWVvdXQiLCJkZWxheUlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIkxpc3RlbmVyIiwidmFsdWVDaGFuZ2VkIiwiY29sbGVjdGlvbkNoYW5nZWQiLCJvbGRWYWx1ZSIsIk9ic2VydmVyIiwiYWNjZXNzb3JzIiwibGlzdGVuZXJzIiwid2F0Y2hlciIsIldhdGNoZXIiLCJhbmFseXNlciIsImRlbGF5ZXIiLCJub3RpZnkiLCJoYXNDaGFuZ2UiLCJzZXROZXdWYWx1ZSIsInNldENvbGxlY3Rpb25DaGFuZ2VkIiwiZXhlY3V0ZSIsImdldEFjY2Vzc29yIiwiZXZhbHVhdG9yIiwiY3JlYXRlTGlzdGVuZXIiLCJldmFsdWF0ZSIsInVud2F0Y2hBY2Nlc3NvcnMiLCJ1bndhdGNoIiwid2F0Y2hBY2Nlc3NvcnMiLCJ2YWx1ZXMiLCJ3YXRjaCIsIm5vdGlmeUNoYW5nZSIsInJlbW92ZUxpc3RlbmVyIiwidW53YXRjaFByb3BzIiwid2F0Y2hQcm9wcyIsInVud2F0Y2hFeHAiLCJhcmd1bWVudHMiLCJjb2xsZWN0aW9uIiwiaXNQcm94eVN5bWJvbCIsIlN5bWJvbCIsInRhcmdldFN5bWJvbCIsImdldFByb3h5Iiwic2V0UHJveHkiLCJpc1Byb3h5IiwicHJveHkiLCJnZXRUYXJnZXQiLCJtYWtlUHJveHkiLCJQcm94eSIsIk9iamVjdExpc3RlbmVyIiwia2V5cyIsImdldEhhbmRsZXJzIiwib2ZmUHJvcGVydHlDaGFuZ2VkIiwiaGFuZGxlUHJvcGVydHlDaGFuZ2VkIiwiZ2V0TGlzdGVuZXIiLCJmaXJlS2V5IiwiZmlsdGVycyIsImFjdGlvbiIsImdldE9yQ3JlYXRlTGlzdGVuZXIiLCJyZWdpc3RlcktleSIsInVucmVnaXN0ZXJLZXkiLCJCaW5kaW5nIiwiaXNFeHAiLCJsb2dpY2FsIiwiYXV0b21hdGlvbiIsInNlZ21lbnRzIiwiZXhwcmVzc2lvbnMiLCJFeHByZXNzaW9uIiwiY3JlYXRlRXhwcmVzc2lvbiIsImxhc3RJbmRleCIsInNlZ21lbnQiLCJkZXRlY3QiLCJwYXRjaCIsImNvbXB1dGUiLCJyZWR1Y2UiLCJwcmV2IiwiaGFzVHJhbnNsYXRpb24iLCIkYXNzaWduIiwiJHdhdGNoIiwiZXZlbnRUZXh0IiwiZG9tRXZlbnRzIiwiJGluamVjdG9yIiwiYmluZGluZyIsImJpbmRpbmdzIiwiY3JlYXRlQ29tcG9uZW50IiwiJGFwcGVuZENoaWxkIiwiY29tcG9uZW50cyIsImNyZWF0ZURpcmVjdGl2ZSIsIiQkc2NvcGUiLCJyZXNvbHZlQ29tcG9uZW50Iiwibm9kZU5hbWUiLCJyZXNvbHZlRGlyZWN0aXZlIiwibm9kZURhdGEiLCJjb250YWluZXIiLCJoYXNDb250YWluZXIiLCJTaW5nbGVOb2RlVmlldyIsIk11bHRpcGxlTm9kZVZpZXciLCJ2bm9kZXMiLCJwYXJzZVRlbXBsYXRlIiwiY29tcGlsZU5vZGVzIiwibGlua05vZGVzIiwiZGlyZWN0aXZlcyIsIiRwb3N0bGluayIsIm5vZGVzIiwidm5vZGUiLCJjb21waWxlTm9kZSIsImlzVlRleHQiLCJjb21waWxlVGV4dCIsImlzVkNvbW1lbnQiLCJjb21waWxlQ29tbWVudCIsImNvbXBpbGVFbG0iLCJsaW5rTm9kZSIsImxpbmtUZXh0IiwibGlua0NvbW1lbnQiLCJsaW5rRWxtIiwiZWxtRGF0YSIsInJlY29nbml6ZUNvbXBvbmVudCIsImN1c3RvbUxpbmtlciIsInZhdHRycyIsInNvbWUiLCJhdHRyRGF0YSIsImNvbXBpbGVBdHRyIiwibGlua2VyIiwiJHByaW9yaXR5Iiwic2Vla1Nsb3QiLCJhdHRyTmFtZSIsImF0dHJWYWx1ZSIsIm5ld0JpbmRpbmciLCJzdGFydHNXaXRoIiwiaXNFdmVudCIsInN1YnN0ciIsImlzRG9tRXZlbnQiLCJyZWNvZ25pemVEaXJlY3RpdmUiLCJuZXdEaXJlY3RpdmUiLCIkJHZhdHRyIiwiJGFzc2lnbm1lbnQiLCIkY29tcGlsZSIsInNldEh0bWxBdHRyIiwicmVnaXN0ZXJBdXRvbWF0aW9uIiwicHJvcGVydHlOYW1lIiwiJGhhc1Byb3BlcnR5IiwiY29tcGlsZSIsInZ0ZXh0IiwibmV3VGV4dE5vZGUiLCJ2Y21udCIsIiRsaW5rIiwiaW5zdGFuY2UiLCJuZXdDb21wb25lbnQiLCJsaW5rQXR0ciIsIiQkdmVsbSIsIiRzZXJDb250YWluZXIiLCIkc2V0U2xvdCIsImV2ZW50TmFtZSIsImxpbmsiLCIkY2hhbmdlIiwiaXNWRWxtIiwic2xvdCIsImdldEF0dHIiLCJnZXRJbm5lclRwbCIsIlZpZXciLCJ1bnN1YnNjcmliZSIsInJlZnJlc2giLCJzZWxlY3Rvck9yRWxlbWVudCIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25EZXN0cm95IiwiJGRlc3Ryb3kiLCJIdHRwU2VydmljZSIsIlhNTEh0dHBSZXF1ZXN0IiwicmVzb2x2ZSIsInJlamVjdCIsIlByb21pc2UiLCJ1cmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ4aHIiLCJjb25maWciLCJoZWFkZXJzIiwic2V0UmVxdWVzdEhlYWRlciIsInBhcnNlZCIsInZhbCIsImxpbmUiLCJ0b0xvd2VyQ2FzZSIsImlnbm9yZUR1cGxpY2F0ZU9mIiwiY29uY2F0IiwibWV0aG9kIiwiYWRkVXJsUGFyYW0iLCJjcmVhdGVQcm9taXNlIiwiY3JlYXRlWEhSIiwib25sb2FkIiwicmVzcG9uc2VIZWFkZXJzIiwiZ2V0SHR0cFJlc3BvbnNlSGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInJlc3BvbnNlRGF0YSIsInJlc3BvbnNlVHlwZSIsIkpTT04iLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZSIsInN0YXR1c1RleHQiLCJyZXF1ZXN0IiwiYnVpbGRVcmwiLCJvcGVuIiwic2VuZCIsImNvbnRlbnRUeXBlIiwic3RyaW5naWZ5IiwiU2VydmljZSIsIkluamVjdG9yIiwidXNpbmciLCJkZWZhdWx0TnMiLCJwYXJzZUNvbXBvbmVudCIsInBhcnNlRGlyZWN0aXZlIiwicGFyc2VTZXJ2aWNlIiwicGFyc2VGaWx0ZXIiLCJWQXR0ciIsIm5vZGVUeXBlIiwiYXR0cmlidXRlIiwiVk5vZGUiLCJWQ21udCIsImNvbW1lbnQiLCJWRWxtIiwic2VsZkNsb3NlZCIsIlRwbEJ1aWxkZXIiLCJhdHRyIiwibWF0Y2hlcyIsImJlbG9uZ1RvIiwic2V0VmFsdWUiLCJjb21waWxlT3B0aW9ucyIsInRwbCIsInBhcnNlVHBsIiwiY2xlYXJDaGlsZE5vZGVzIiwiY29weSIsImNsb25lTm9kZSIsImNkYXRhU2VjdGlvbiIsImVudGl0eVJlZmVyZW5jZSIsImVudGl0eSIsInByb2Nlc3NpbmdJbnN0cnVjdGlvbiIsImRvY3VtZW50VHlwZSIsImRvY3VtZW50RnJhZ21lbnQiLCJub3RhdGlvbiIsImZpcnN0Q2hpbGQiLCJidWlsZFNpYmxpbmciLCJyZWZDaGlsZCIsIm5ld0NoaWxkIiwiY2xlYXJQYXJlbnRBbmRTaWJsaW5nIiwiZGVlcCIsIm9uQ2xvbmVOb2RlIiwib3duZXJEb2N1bWVudCIsIlZUZXh0IiwiVlR5cGUiLCJsZXhUcGwiLCJUcGxMZXhlciIsIlRwbFBhcnNlciIsImlzVkF0dHIiLCJidWlsZFRleHQiLCJidWlsZENvbW1lbnQiLCJidWlsZEVsZW1lbnQiLCJhdHRyVHBsIiwiYnVpbGRBdHRyaWJ1dGUiLCJjaGlsZFRwbCIsInN0ciIsImJlZ2luIiwiZXhwZWN0U3RyaW5nIiwidGV4dFRhZyIsImNsb3NpbmciLCJkb2N0eXBlIiwidGFnIiwiZXF1YWwiLCJhbGxvd0RvY1R5cGUiLCJyZWFkQ29tbWVudCIsInJlYWRUYWciLCJyZWFkVGV4dCIsInJvb3QiLCJjdXJyZW50IiwiZG9jVHlwZSIsImF0dHJzIiwicCIsInB1c2hBdHRyIiwiY2hpbGRFbGVtZW50cyIsInB1c2hDaGlsZCIsImVsZXMiLCJvcmlnaW4iLCJ0b1N0cmluZyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiaXNVbmRlZmluZWQiLCJpc0RlZmluZWQiLCJpc0FycmF5IiwiaXNNYXAiLCJpc09iamVjdCIsImlzQmxhbmtPYmplY3QiLCJpc1N0cmluZyIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc1JlZ0V4cCIsImlzQm9vbGVhbiIsImlzRm9ybURhdGEiLCJGb3JtRGF0YSIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJpc05hTiIsImxvd2VyY2FzZSIsInVwcGVyY2FzZSIsInRvVXBwZXJDYXNlIiwiY29udmVydFRvSHVtcE5hbWUiLCJzZXBhcmF0b3IiLCJ1cHBlcmNhc2VGaXJzdExldHRlciIsImNvbnZlcnRGcm9tSHVtcE5hbWUiLCJuZXdOYW1lIiwiY2hhciIsIm9iakluZGV4IiwibmV3QXJyIiwibmV3T2JqIiwiZXh0ZW5kIiwiZGVlcE1lcmdlIiwicGxhaW5NZXJnZSIsIm1lcmdlIiwic291cmNlIiwiZnVuYyIsIm9yZGVyQnkiLCJnZXR0ZXIiLCJnZXRWYWx1ZSIsInNvcnQiLCJhIiwiYiIsIm9yZGVyQnlEZXNjZW5kaW5nIiwibyIsIkYiLCJpbmhlcml0UHJvdG90eXBlIiwic3ViVHlwZSIsInN1cGVyVHlwZSIsImNvbnN0cnVjdG9yIiwiaW5oZXJpdCIsImhhc1Byb3BlcnR5IiwiZ2V0UHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsImZvcm1hdCIsIm1hdGNoVGV4dCIsImVzY2FwZUh0bWwiLCJodG1sIiwiY29tcG9uZW50Q29uc3RydWN0b3IiLCIkJGNoaWxkcmVuIiwiUGFyc2VyIiwiJG9ic2VydmVyIiwiJGRhdGEiLCIkbWFrZUNvbnRhaW5lciIsIiRkZWxlZ2F0ZSIsImluamVjdFNlcnZpY2VzIiwib25Qcm9wZXJ0eUNoYW5nZWQiLCJtZXNzYWdlIiwid2F0Y2hDb2xsZWN0aW9uIiwidGVtcGxhdGVJZCIsImdldEVsZW1lbnRCeUlkIiwiJGdldFRlbXBsYXRlIiwiYWZ0ZXJWaWV3UmVuZGVyZWQiLCIkdW5tb3VudCIsIiRyZW1vdmVDaGlsZCIsImRpcmVjdGl2ZUNvbnN0cnVjdG9yIiwiJHJlbmRlcmVyIiwib25Db21waWxlIiwib25MaW5rIiwiYWZ0ZXJMaW5rIiwib25DaGFuZ2UiLCIkbmFtZXNwYWNlIiwiJGtleSIsIiQkc2VhcmNoRGlyZWN0aXZlIiwibmFtZVBhdHRlcm4iLCJjb21wb25lbnRDbGFzcyIsImRpcmVjdGl2ZUNsYXNzIiwiZmlsdGVyQ2xhc3MiLCJGaWx0ZXIiLCJmaWx0ZXJDb25zdHJ1Y3RvciIsInNlcnZpY2VDbGFzcyIsInNlcnZpY2VDb25zdHJ1Y3RvciIsIkZhY3RvcnkiLCJyb2xlSWQiLCJyb2xlcyIsImNvbnN0cnVjdG9yTmFtZSIsInJlbmFtZSIsIm9uQ29uc3RydWN0IiwiY29uc3RydWN0IiwiRnVuY3Rpb24iLCJtYWtlIiwiZmFjdG9yeSIsImtleVBhdHRlcm4iLCJnbG9iYWxOYW1lc3BhY2UiLCJOYW1lc3BhY2VDb250YWluZXIiLCJjbGFzc0NvbnRhaW5lciIsImluc3RhbmNlQ29udGFpbmVyIiwibnNDb250YWluZXIiLCJzZXJ2aWNlU3RhY2siLCJjaGVja0tleU5hbWUiLCJuYW1lc3BhY2VDb250YWluZXIiLCJnZXROYW1lc3BhY2VDb250YWluZXIiLCJnZXRDbGFzc0NvbnRhaW5lciIsInJlZ2lzdGVyIiwiZ2V0RnJvbUdsb2JhbE5hbWVzcGFjZSIsInJvbGUiLCJpc0NvbXBvbmVudCIsImlzRGlyZWN0aXZlIiwiaXNTZXJ2aWNlIiwiaXNGaWx0ZXIiLCJrZXlPckNvbnN0cnVjdG9yIiwiQ2xzIiwicmVzb2x2ZUNvbnN0cnVjdG9yIiwiY2hlY2tJbnN0YW5jZSIsImdldEluc3RhbmNlQ29udGFpbmVyIiwiY3JlYXRlIiwiY3JlYXRlU2luZ2xldG9uIiwibm9uU2hhcmVkIiwicG9wIiwibnMiLCJleHRyYWN0TnNBbmRLZXkiLCJwYXJzZUZ1bGxOYW1lIiwicGFyc2VDb25zdHJ1Y3RvciIsImNoZWNrTG9vcERlcGVuZGVuY3kiLCJzZXJ2aWNlRnVsbE5hbWUiLCJoYXNMb29wRGVwZW5kZW5jeSIsImluamVjdCIsImNyZWF0ZVNlcnZpY2UiLCJwcm9ncmFtcyIsInNlbGVjdG9yIiwiZnVsbE5hbWUiLCJmaWx0ZXJDbHMiLCJjcmVhdGVGaWx0ZXIiLCJtZXJnZU1ldGFkYXRhIiwiUm9vdCIsIm1ha2VDb21wb25lbnQiLCJtb3VudCIsIm1ha2VEaXJlY3RpdmUiLCJtYWtlRmlsdGVyIiwibWFrZVNlcnZpY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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REQ7QUFFTixZQUFNLElBRkE7QUFHTixZQUFNLElBSEE7QUFJTnlCLGFBQVMsRUFBRUE7QUFKTDtBQUhZLENBQW5CLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUdvRCxnREFBTyxDQUFDZ0QsV0FBUixDQUFvQnAyQixHQUFwQixFQUF5QnFtQixNQUF6QixFQUFpQzlqQixRQUFqQyxDQUFsQjtBQUNBSSxvREFBUSxDQUFDTyxlQUFULENBQXlCbEQsR0FBekIsRUFBOEJnd0IsV0FBOUI7QUFDQSxTQUFPQSxXQUFQO0FBQ0g7O0FBRUQsU0FBU21FLFdBQVQsQ0FBcUIzUCxRQUFyQixFQUErQjtBQUMzQixTQUFPQSxRQUFRLFlBQVk3akIsb0RBQTNCO0FBQ0g7O0FBRUQsU0FBU3l6QixXQUFULENBQXFCNVAsUUFBckIsRUFBK0I7QUFDM0IsU0FBT0EsUUFBUSxZQUFZbGhCLG9EQUEzQjtBQUNIOztBQUVELFNBQVNneEIsUUFBVCxDQUFrQjlQLFFBQWxCLEVBQTRCO0FBQ3hCLFNBQU9BLFFBQVEsWUFBWStOLDhDQUEzQjtBQUNIOztBQUVELFNBQVM4QixTQUFULENBQW1CN1AsUUFBbkIsRUFBNkI7QUFDekIsU0FBT0EsUUFBUSxZQUFZMEQsZ0RBQTNCO0FBQ0giLCJmaWxlIjoiYXV0b21hdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhdXRvbWF0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhdXRvbWF0ZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgKiBmcm9tICcuL3Nsb3QnOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL3JlbmRlcic7XHJcblxyXG5AY29tcG9uZW50KHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ3Nsb3QnXHJcbn0pXHJcbmNsYXNzIFNsb3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnByb3BzLm5hbWUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICAkcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBzbG90cyA9IHRoaXMuJCRwYXJlbnQuc2xvdHM7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gc2xvdHNbdGhpcy5wcm9wcy5uYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKHRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCRtYWluVmlldyA9IG5ldyBSZW5kZXJlcih0aGlzLiQkcGFyZW50KS5yZW5kZXIodGVtcGxhdGUsIHRoaXMuJGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBpZih0aGlzLiQkbWFpblZpZXcpIHtcclxuICAgICAgICAgICAgdGhpcy4kJG1haW5WaWV3LmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc01lc3NhZ2Uob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWVzc2FnZTtcclxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxuLy8gZ2xvYmFsIGV2ZW50c1xyXG5leHBvcnQgdmFyIGV2ZW50cyA9IHtcclxuICAgIHByb3BlcnR5Q2hhbmdlZDogbmV3IE1lc3NhZ2UoKSxcclxuICAgIHJlZnJlc2hWaWV3OiBuZXcgTWVzc2FnZSgpXHJcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9sb2NhbCc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9ldmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9hcGknOyIsImV4cG9ydCBjbGFzcyBMb2NhbCB7XG4gICAgY29uc3RydWN0b3IoZSwgZWxtKSB7XG4gICAgICAgIHRoaXMuJGV2ZW50ID0gZTtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9IGVsbTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH1cblxuICAgIG9uKGZuKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaGFuZGxlcnMuaW5kZXhPZihmbik7XG5cbiAgICAgICAgLy8gbm90IGZvdW5kXG4gICAgICAgIGlmKGluZGV4ID09PSAtMSl7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2goZm4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW4gbm90IHJlZ2lzdGVyIHNhbWUgZXZlbnQgaGFuZGxlciBtb3JlIHRoYW4gb25jZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMub2ZmKGZuKTtcbiAgICB9XG5cbiAgICBvZmYoZm4pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5oYW5kbGVycy5pbmRleE9mKGZuKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlKGRhdGEsIHNjb3BlKSB7XG4gICAgICAgIHNjb3BlID0gc2NvcGUgfHwgdGhpcztcbiAgICAgICAgLy8gYXR0YWNoIGV2ZW50IGRhdGFcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YSB8fCB7fTtcblxuICAgICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmNhbGwoc2NvcGUsIHRoaXMpKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vZG9tJztcclxuXHJcbmRvbS5sb2FkU3R5bGVTdHJpbmcoJy5tLWNvbXBvbmVudHtkaXNwbGF5OmluaGVyaXQ7fSAubS1oaWRle2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O30nKTtcclxuXHJcbmV4cG9ydCB2YXIgTV9DTVBfQ0xBU1MgPSAnbS1jb21wb25lbnQnO1xyXG5leHBvcnQgdmFyIE1fSElERV9DTEFTUyA9ICdtLWhpZGUnOyIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnQobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb21wb25lbnQoa2V5LCB0YXJnZXQpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZShtZXRhZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRhcmdldC5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckRpcmVjdGl2ZShrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vZmlsdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2UobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJTZXJ2aWNlKGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdiaW5kSHRtbCdcclxufSlcclxuY2xhc3MgQmluZEh0bWxEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdiaW5kJ1xufSlcbmNsYXNzIEJpbmREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ2hpZGUnXG59KVxuY2xhc3MgSGlkZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpc1t2YWx1ZSA/ICckaGlkZUVsZW1lbnQnIDogJyRzaG93RWxlbWVudCddKCk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdpZidcclxufSlcclxuY2xhc3MgSWZEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLiRwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ24taWYnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXNbdmFsdWUgPyAnJGFwcGVuZEVsZW1lbnQnIDogJyRyZW1vdmVFbGVtZW50J10oKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vYmluZCc7XG5leHBvcnQgKiBmcm9tICcuL2JpbmQtaHRtbCc7XG5leHBvcnQgKiBmcm9tICcuL3JlcGVhdCc7XG5leHBvcnQgKiBmcm9tICcuL21vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vaGlkZSc7XG5leHBvcnQgKiBmcm9tICcuL3Nob3cnO1xuZXhwb3J0ICogZnJvbSAnLi9zdGF0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0eWxlJztcbmV4cG9ydCAqIGZyb20gJy4vaWYnO1xuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gnOyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ21vZGVsJ1xufSlcbmNsYXNzIE1vZGVsRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcnNlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXJzID0gW107XG4gICAgICAgIHRoaXMudmlld0NoYW5nZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB7XG4gICAgICAgICAgICBmZWVkYmFjazogJycsXG4gICAgICAgICAgICBwcmlzdGluZTogdHJ1ZSxcbiAgICAgICAgICAgIGRpcnR5OiBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgaW52YWxpZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICAgICAgcHJpc3RpbmU6ICduLXByaXN0aW5lJyxcbiAgICAgICAgICAgICAgICBkaXJ0eTogJ24tZGlydHknLFxuICAgICAgICAgICAgICAgIHZhbGlkOiAnbi12YWxpZCcsXG4gICAgICAgICAgICAgICAgaW52YWxpZDogJ24taW52YWxpZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbW1pdE1vZGVsVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIGFmdGVyTGluaygpIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLiRlbGVtZW50Lm5hbWU7XG5cbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLnN0YXRlW25hbWVdID0gdGhpcy5zdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC4kYmluZCgnY2hhbmdlJywgZSA9PiB0aGlzLmNvbW1pdFZpZXdWYWx1ZShlLmRhdGEubmV3dmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHRoaXMuY29tbWl0Vmlld1ZhbHVlKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG5cbiAgICB9XG5cbiAgICBjb21taXRNb2RlbFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHRoaXMubW9kZWxWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMuZm9ybWF0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgbmV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy52aWV3VmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpZXdWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLiRjb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LiRzZXRQcm9wZXJ0eSgndmFsdWUnLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XG4gICAgfVxuXG4gICAgY29tbWl0Vmlld1ZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXdWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLm1hcmtEaXJ0eVN0YXR1cyh0cnVlKTtcblxuICAgICAgICB0aGlzLnZpZXdDaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHNlbGYudmlld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLnBhcnNlcnMuZm9yRWFjaChmdW5jdGlvbiAocGFyc2VyKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHBhcnNlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYodGhpcy5tb2RlbFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHNlbGYubW9kZWxWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMuJGJpbmRpbmcuYXNzaWduKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVFbG1Dc3NDbGFzcygpIHtcbiAgICAgICAgdmFyIGVsZSA9IHRoaXMuJGVsZW1lbnQsXG4gICAgICAgICAgICBjc3MgPSB0aGlzLm9wdGlvbnMuY3NzO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy5kaXJ0eSkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLmRpcnR5KTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5wcmlzdGluZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MucHJpc3RpbmUpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLmRpcnR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy52YWxpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrRGlydHlTdGF0dXMoZGlydHkpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMuZGlydHkgPSBkaXJ0eTtcbiAgICAgICAgdGhpcy5zdGF0dXMucHJpc3RpbmUgPSAhZGlydHk7XG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBtYXJrVmFsaWRTdGF0dXModmFsaWQsIGZlZWRiYWNrKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzLnZhbGlkID0gdmFsaWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzLmludmFsaWQgPSAhdmFsaWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzLmZlZWRiYWNrID0gZmVlZGJhY2s7XG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdyZXBlYXQnXG59KVxuY2xhc3MgUmVwZWF0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pdGVtRXhwID0gJyc7XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtVmlld3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudW53YXRjaENvbGxlY3Rpb24gPSBudWxsO1xuICAgIH1cblxuICAgIG9uQ29tcGlsZSh2ZWxtLCB2YXR0cikge1xuICAgICAgICB2YXIgYXJnID0gdmF0dHIubm9kZVZhbHVlO1xuICAgICAgICB2YXIgcGF0dGVybiA9IC9eKFthLXpfXStcXHcrKVxccytpblxccysoLispJC9pO1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGF0dGVybi5leGVjKGFyZyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ20tcmVwZWF0OiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1FeHAgPSByZXN1bHRbMV07XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSByZXN1bHRbMl07XG4gICAgICAgIHZlbG0ucmVtb3ZlQXR0cih2YXR0cik7XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gdmVsbS5nZXRPdXRlclRwbCgpO1xuXG4gICAgICAgIC8vIGlkZW50aWZ5IHRoaXMgZGlyZWN0aXZlIHdvdWxkIHRha2Ugb3ZlciBsaW5rIGZ1bmN0aW9uIGZvciByZWxhdGVkIHZpcnR1YWwgZWxlbWVudCBub2RlLCBvbkxpbmsgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb25MaW5rKHNjb3BlKSB7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0OiBtLXJlcGVhdCcpO1xuICAgICAgICB2YXIgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnZW5kOiBtLXJlcGVhdCcpO1xuXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyKHNjb3BlKSk7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICAgICAgdGhpcy51bndhdGNoQ29sbGVjdGlvbiA9IHNjb3BlLiR3YXRjaENvbGxlY3Rpb24odGhpcy5pdGVtc0V4cCwgKCkgPT4ge1xuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gdGhpcy5yZW5kZXIoc2NvcGUpO1xuICAgICAgICAgICAgZG9tLnJlbW92ZUVsZW1lbnRzQmV0d2VlbihoZWFkZXIsIGZvb3Rlcik7XG4gICAgICAgICAgICBmb290ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsIGZvb3Rlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG5cbiAgICByZW5kZXIoc2NvcGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgaXRlbXMgPSBzY29wZS4kZXZhbCh0aGlzLml0ZW1zRXhwKTtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB2YXIgaXRlbVZpZXdzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIHV0aWxzLmZvckVhY2goaXRlbXMsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBpdGVtVmlldyA9IHNlbGYuZ2V0Vmlld0Zyb21CdWZmZXIoc2VsZi5pdGVtVmlld3MsIGl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAoIWl0ZW1WaWV3KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2FscyA9IHt9O1xuICAgICAgICAgICAgICAgIGxvY2Fsc1snJGtleSddID0ga2V5O1xuICAgICAgICAgICAgICAgIGxvY2Fsc1snJGluZGV4J10gPSBrZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxzW3NlbGYuaXRlbUV4cF0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIGl0ZW1WaWV3ID0gc2VsZi4kcmVuZGVyKHNlbGYuaXRlbVRlbXBsYXRlLCBsb2NhbHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnNldFZpZXdUb0J1ZmZlcihpdGVtVmlld3MsIGl0ZW0sIGl0ZW1WaWV3KTtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGl0ZW1WaWV3LmNvbnRlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLml0ZW1WaWV3cy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgICAgICAgICB2aWV3LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLml0ZW1WaWV3cyA9IGl0ZW1WaWV3cztcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuXG4gICAgZ2V0Vmlld0Zyb21CdWZmZXIoYnVmZmVyLCBkYXRhSXRlbSkge1xuICAgICAgICB2YXIgdmlldztcblxuICAgICAgICBpZiAoYnVmZmVyLmhhcyhkYXRhSXRlbSkpIHtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gYnVmZmVyLmdldChkYXRhSXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZpZXcgPSBsaXN0LnNoaWZ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5kZWxldGUoZGF0YUl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfVxuXG4gICAgc2V0Vmlld1RvQnVmZmVyKGJ1ZmZlciwgZGF0YUl0ZW0sIHZpZXcpIHtcbiAgICAgICAgdmFyIGxpc3Q7XG5cbiAgICAgICAgaWYgKGJ1ZmZlci5oYXMoZGF0YUl0ZW0pKSB7XG4gICAgICAgICAgICBsaXN0ID0gYnVmZmVyLmdldChkYXRhSXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgICBidWZmZXIuc2V0KGRhdGFJdGVtLCBsaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaCh2aWV3KTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaXRlbVZpZXdzLmZvckVhY2goKGxpc3QpID0+IGxpc3QuZm9yRWFjaCh2aWV3ID0+IHZpZXcuZGVzdHJveSgpKSk7XG4gICAgICAgIHRoaXMudW53YXRjaENvbGxlY3Rpb24gJiYgdGhpcy51bndhdGNoQ29sbGVjdGlvbigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ3Nob3cnXG59KVxuY2xhc3MgU2hvd0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpc1t2YWx1ZSA/ICckc2hvd0VsZW1lbnQnIDogJyRoaWRlRWxlbWVudCddKCk7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnY2hlY2tlZCdcbn0pXG5jbGFzcyBDaGVja2VkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignY2hlY2tlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ2Rpc2FibGVkJ1xufSlcbmNsYXNzIERpc2FibGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGlzYWJsZWQnKTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9jaGVja2VkJ1xuZXhwb3J0ICogZnJvbSAnLi9kaXNhYmxlZCdcbmV4cG9ydCAqIGZyb20gJy4vcmVhZG9ubHknXG5leHBvcnQgKiBmcm9tICcuL3NlbGVjdGVkJyIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAncmVhZG9ubHknXG59KVxuY2xhc3MgUmVhZG9ubHlEaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdyZWFkb25seScpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ3NlbGVjdGVkJ1xufSlcbmNsYXNzIFNlbGVjdGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignc2VsZWN0ZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3Ioa2V5KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLiRlbGVtZW50Lmhhc0F0dHJpYnV0ZSh0aGlzLmtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLmtleSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQuaGFzQXR0cmlidXRlKHRoaXMua2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBDbGFzc0RpcmVjdGl2ZSB9IGZyb20gJy4vY2xhc3MnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdjbGFzc0V2ZW4nXHJcbn0pXHJcbmNsYXNzIENsYXNzRXZlbkRpcmVjdGl2ZSBleHRlbmRzIENsYXNzRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kZXZhbCgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9jbGFzcyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ2NsYXNzT2RkJ1xyXG59KVxyXG5jbGFzcyBDbGFzc09kZERpcmVjdGl2ZSBleHRlbmRzIENsYXNzRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kZXZhbCgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vZG9tJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnY2xhc3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGFzc0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKG5ld0NsYXNzLCBvbGRDbGFzcykge1xyXG4gICAgICAgIGlmICh0aGlzLnNraXBDdXJyZW50RWxtKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9sZENsYXNzKSB7XHJcbiAgICAgICAgICAgIGRvbS5yZW1vdmVDbGFzcyh0aGlzLiRlbGVtZW50LCBvbGRDbGFzcy5qb2luKCcgJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5ld0NsYXNzKSB7XHJcbiAgICAgICAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLiRlbGVtZW50LCBuZXdDbGFzcy5qb2luKCcgJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9jbGFzcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3MtZXZlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3Mtb2RkJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUtZXZlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUtb2RkJzsiLCJpbXBvcnQgeyBTdHlsZURpcmVjdGl2ZSB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdzdHlsZUV2ZW4nXHJcbn0pXHJcbmNsYXNzIFN0eWxlRXZlbkRpcmVjdGl2ZSBleHRlbmRzIFN0eWxlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kZXZhbCgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0eWxlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ3N0eWxlT2RkJ1xyXG59KVxyXG5jbGFzcyBTdHlsZU9kZERpcmVjdGl2ZSBleHRlbmRzIFN0eWxlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kZXZhbCgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ3N0eWxlJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UobmV3U3R5bGUsIG9sZFN0eWxlKSB7XG4gICAgICAgIGlmICh0aGlzLnNraXBDdXJyZW50RWxtKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAob2xkU3R5bGUpIHtcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2gob2xkU3R5bGUsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kZWxlbWVudC5zdHlsZVtrZXldID0gJyc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc09iamVjdChuZXdTdHlsZSkpIHtcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2gobmV3U3R5bGUsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNraXBDdXJyZW50RWxtKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vc3dpdGNoJ1xuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gtZGVmYXVsdCdcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoLXdoZW4nIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnc3dpdGNoRGVmYXVsdCdcbn0pXG5jbGFzcyBTd2l0Y2hEZWZhdWx0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsID0gbnVsbDtcbiAgICAgICAgdGhpcy4kcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdzd2l0Y2gtZGVmYXVsdCcpO1xuICAgIH1cblxuICAgIGFmdGVyTGluaygpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsID0gdGhpcy4kc2Vla1VwRGlyZWN0aXZlKCdzd2l0Y2gnKTtcblxuICAgICAgICBpZiAodGhpcy5zd2l0Y2hDdHJsID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZSBtLXN3aXRjaCBkaXJlY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybC5tYXRjaERlZmF1bHQub24oKCkgPT4ge1xuICAgICAgICAgICAgdGhpc1t0aGlzLnN3aXRjaEN0cmwuZGVmYXVsdE1hdGNoZWQgPyAnJGFwcGVuZEVsZW1lbnQnIDogJyRyZW1vdmVFbGVtZW50J10oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoIXRoaXMuc3dpdGNoQ3RybC5kZWZhdWx0TWF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy4kcmVtb3ZlRWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ3N3aXRjaFdoZW4nXG59KVxuY2xhc3MgU3dpdGNoV2hlbkRpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gbmV3IE1lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy4kcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdzd2l0Y2gtd2hlbicpO1xuICAgIH1cblxuICAgIGFmdGVyTGluaygpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsID0gdGhpcy4kc2Vla1VwRGlyZWN0aXZlKCdzd2l0Y2gnKTtcblxuICAgICAgICBpZiAodGhpcy5zd2l0Y2hDdHJsID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZSBtLXN3aXRjaCBkaXJlY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybC5jaGFuZ2VkLm9uKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBtYXRjaGVkID0gdGhpcy5zd2l0Y2hDdHJsLnZhbHVlID09PSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIGlmKHRoaXMubWF0Y2hlZCAhPSBtYXRjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLm1hdGNoZWQgPSBtYXRjaGVkO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoQ3RybC5wbHVzTWF0Y2goKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hDdHJsLm1pbnVzTWF0Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNbbWF0Y2hlZCA/ICckYXBwZW5kRWxlbWVudCcgOiAnJHJlbW92ZUVsZW1lbnQnXSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdzd2l0Y2gnXG59KVxuY2xhc3MgU3dpdGNoRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMubWF0Y2hDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuZGVmYXVsdE1hdGNoZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm1hdGNoRGVmYXVsdCA9IG5ldyBNZXNzYWdlKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNoYW5nZWQuZmlyZSgpO1xuICAgIH1cblxuICAgIHBsdXNNYXRjaCgpIHtcbiAgICAgICAgdGhpcy5tYXRjaENvdW50Kys7XG4gICAgICAgIHRoaXMuY2hlY2tEZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgbWludXNNYXRjaCgpIHtcbiAgICAgICAgdGhpcy5tYXRjaENvdW50LS07XG4gICAgICAgIHRoaXMuY2hlY2tEZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY2hlY2tEZWZhdWx0KCkge1xuICAgICAgICB2YXIgZGVmYXVsdE1hdGNoZWQgPSB0aGlzLm1hdGNoQ291bnQgPD0gMDtcblxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0TWF0Y2hlZCAhPT0gZGVmYXVsdE1hdGNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdE1hdGNoZWQgPSBkZWZhdWx0TWF0Y2hlZDtcbiAgICAgICAgICAgIHRoaXMubWF0Y2hEZWZhdWx0LmZpcmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJcbmZ1bmN0aW9uIGdldENoaWxkcmVuT2ZFbGVtZW50KGVsbSkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbG0uY2hpbGROb2RlcywgMCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQoZWxtKSB7XG4gICAgZ2V0Q2hpbGRyZW5PZkVsZW1lbnQoZWxtKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBlbG0ucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlRWxlbWVudChlbG0sIG5ld0VsbSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gZWxtLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbG0sIGVsbSk7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxtKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWxtKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBlbG0ucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxtKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRzQmV0d2VlbihzdGFydEVsbSwgZW5kRWxtKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBzdGFydEVsbS5wYXJlbnROb2RlO1xuICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGRyZW5PZkVsZW1lbnQocGFyZW50Tm9kZSk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgPT09IHN0YXJ0RWxtICYmIGNoaWxkICE9PSBlbmRFbG0pIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyA9PT0gZW5kRWxtICYmIGNoaWxkICE9PSBzdGFydEVsbSkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kRWxlbWVudChlbG0sIG5ld0VsbSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gZWxtLnBhcmVudE5vZGU7XG5cbiAgICBpZiAocGFyZW50Tm9kZS5sYXN0Q2hpbGQgPT09IGVsbSkge1xuICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld0VsbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWxtLCBlbG0ubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MgKGVsbSwgY2xzKSB7XG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZWxtLmNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbHMuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5jbGFzc0xpc3QuYWRkKGMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsbS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgICAgIGlmIChjdXIuaW5kZXhPZignICcgKyBjbHMgKyAnICcpIDwgMCkge1xuICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoY3VyICsgY2xzKS50cmltKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyAoZWxtLCBjbHMpIHtcbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChlbG0uY2xhc3NMaXN0KSB7XG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtLmNsYXNzTGlzdC5yZW1vdmUoYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbG0uY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbG0uZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgICAgICB2YXIgdGFyID0gJyAnICsgY2xzICsgJyAnO1xuICAgICAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XG4gICAgICAgICAgICBjdXIgPSBjdXIucmVwbGFjZSh0YXIsICcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgY3VyID0gY3VyLnRyaW0oKTtcbiAgICAgICAgaWYgKGN1cikge1xuICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjdXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZFN0eWxlU3RyaW5nKGNzcykge1xuICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxuZXhwb3J0IHtcbiAgICBhZGRDbGFzcyxcbiAgICByZW1vdmVDbGFzcyxcbiAgICBhcHBlbmRFbGVtZW50LFxuICAgIHJlbW92ZUVsZW1lbnQsXG4gICAgcmVwbGFjZUVsZW1lbnQsXG4gICAgZ2V0Q2hpbGRyZW5PZkVsZW1lbnQsXG4gICAgcmVtb3ZlRWxlbWVudHNCZXR3ZWVuLFxuICAgIGNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQsXG4gICAgbG9hZFN0eWxlU3RyaW5nXG59OyIsImltcG9ydCB7IEFTVCB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgcGFyc2VFeHAgfSAgZnJvbSAnLi9leHAtYXBpJztcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcblxuY2xhc3MgQWNjZXNzb3Ige1xuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgZXhwKSB7XG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHt9O1xuICAgIH1cblxuICAgIGNyZWF0ZUNoaWxkKGtleSwgY2FsbGVlLCBleHApIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5ba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltrZXldO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFuYWx5c2VyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJzZXIpIHtcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBwYXJzZXIgfHwge1xuICAgICAgICAgICAgcGFyc2VFeHByZXNzaW9uOiBwYXJzZUV4cFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgICAgICB0aGlzLmFjY2Vzc29yID0ge307XG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBFeHBCdWlsZGVyKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQWNjZXNzb3Ioa2V5LCBjYWxsZWUsIGV4cCkge1xuICAgICAgICBpZiAoIXRoaXMuYWNjZXNzb3Jba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5hY2Nlc3NvcltrZXldID0gbmV3IEFjY2Vzc29yKGNhbGxlZSwgZXhwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmFjY2Vzc29yW2tleV07XG4gICAgfVxuXG4gICAgYW5hbHlzZShleHApIHtcbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLnBhcnNlci5wYXJzZUV4cHJlc3Npb24oZXhwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5hbHlzZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZVByb2dyYW0ocHJvZ3JhbSkge1xuICAgICAgICB0aGlzLmFjY2Vzc29yID0ge307XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHByb2dyYW0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHRoaXMuYW5hbHlzZU5vZGUoY2hpbGQpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjZXNzb3I7XG4gICAgfVxuXG4gICAgYW5hbHlzZU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VFeHByZXNzaW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQXNzaWdubWVudChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VDb25kaXRpb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VMb2dpYyhub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQmluYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuVW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZVVuYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQ2FsbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlTWVtYmVyKG5vZGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuSWRlbnRpZmllcjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VJZGVudGlmaWVyKG5vZGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VMaXRlcmFsKG5vZGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUFycmF5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuUHJvcGVydHk6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlUHJvcGVydHkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZU9iamVjdChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYW5hbHlzZUV4cHJlc3Npb24oZXhwKSB7XG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gdGhpcy5hbmFseXNlTm9kZShjaGlsZCkpO1xuICAgIH1cblxuICAgIGFuYWx5c2VBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShhc3NpZ25tZW50LnJpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmFseXNlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNvbmRpdGlvbi50ZXN0KTtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24uYWx0ZXJuYXRlKTtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24uY29uc2VxdWVudCk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUxvZ2ljKGxvZ2ljKSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobG9naWMubGVmdCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobG9naWMucmlnaHQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VCaW5hcnkoYmluYXJ5KSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYmluYXJ5LmxlZnQpO1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGJpbmFyeS5yaWdodCk7XG4gICAgfVxuXG4gICAgYW5hbHlzZVVuYXJ5KHVuYXJ5KSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUodW5hcnkuYXJnKTtcbiAgICB9XG5cbiAgICBhbmFseXNlQ2FsbChjYWxsKSB7XG4gICAgICAgIGNhbGwuYXJncy5mb3JFYWNoKGFyZyA9PiB0aGlzLmFuYWx5c2VOb2RlKGFyZykpO1xuXG4gICAgICAgIGlmICghY2FsbC5maWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY2FsbC5jYWxsZWUsIHsgY2FsbGVlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5hbHlzZU1lbWJlcihtZW1iZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLm9iamVjdCk7XG5cbiAgICAgICAgaWYgKG1lbWJlci5jb21wdXRlZCkge1xuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShtZW1iZXIucHJvcGVydHksIHtcbiAgICAgICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWVtYmVyLnByb3BlcnR5LnR5cGUgPT09IEFTVC5MaXRlcmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5jcmVhdGVDaGlsZChtZW1iZXIucHJvcGVydHkudmFsdWUsIGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKG1lbWJlci5wcm9wZXJ0eSk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3JlYXRlQ2hpbGQoa2V5LCBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUlkZW50aWZpZXIoaWRlbnRpZmllciwgY29udGV4dCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGlkZW50aWZpZXIpLFxuICAgICAgICAgICAgY2FsbGVlID0gY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZTtcblxuICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucGFyZW50LmNyZWF0ZUNoaWxkKGtleSwgY2FsbGVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUFjY2Vzc29yKGtleSwgY2FsbGVlKTtcbiAgICB9XG5cbiAgICBhbmFseXNlTGl0ZXJhbChsaXRlcmFsLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQobGl0ZXJhbCk7XG5cbiAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnBhcmVudC5jcmVhdGVDaGlsZChrZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5hbHlzZVByb3BlcnR5KHByb3ApIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShwcm9wLnZhbHVlKTtcbiAgICB9XG5cbiAgICBhbmFseXNlT2JqZWN0KG9iaikge1xuICAgICAgICBvYmoucHJvcGVydGllcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5hbmFseXNlTm9kZShpdGVtKSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUFycmF5KGFycikge1xuICAgICAgICBhcnIuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHRoaXMuYW5hbHlzZShjaGlsZCkpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBBU1QsIE51bGxFeHByZXNzaW9uTm9kZSB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgRXhwQnVpbGRlciB9IGZyb20gJy4vZXhwLWJ1aWxkZXInO1xuaW1wb3J0IHsgcGFyc2VFeHAgfSAgZnJvbSAnLi9leHAtYXBpJztcblxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgYXNzaWduSW50ZXJjZXB0b3I6IG51bGwsXG4gICAgbG9jYWxzOiBudWxsXG59O1xuXG5leHBvcnQgY2xhc3MgRXZhbHVhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEV4cEJ1aWxkZXIoKTtcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBzY29wZS4kcGFyc2VyIHx8IHtwYXJzZUV4cHJlc3Npb246IHBhcnNlRXhwfTtcbiAgICB9XG5cbiAgICAvLyBnZXQgdmFsdWUgZnJvbSBleHByZXNzaW9uXG4gICAgZXZhbHVhdGUoZXhwKSB7XG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5wYXJzZXIucGFyc2VFeHByZXNzaW9uKGV4cCk7XG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZVByb2dyYW0ocHJvZ3JhbSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG5cbiAgICAgICAgdGhpcy5wcm9ncmFtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTm9kZShjaGlsZCkpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LiRudWxsKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBzZXQgdmFsdWUgdG8gZXhwcmVzc2lvblxuICAgIGFzc2lnbihleHAsIHZhbHVlKSB7XG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5wYXJzZXIucGFyc2VFeHByZXNzaW9uKGV4cCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnblByb2dyYW0ocHJvZ3JhbSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGFzc2lnblByb2dyYW0ocHJvZ3JhbSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcblxuICAgICAgICBpZiAodGhpcy5wcm9ncmFtLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGV4cHJlc3Npb24gPSB0aGlzLnByb2dyYW0uY2hpbGROb2Rlc1swXTtcblxuICAgICAgICBpZiAoZXhwcmVzc2lvbi5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXNzaWdubWVudCA9IGV4cHJlc3Npb24uY2hpbGROb2Rlc1swXTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudC50eXBlID09PSBBU1QuTWVtYmVyRXhwcmVzc2lvbikge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQub2JqZWN0KTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG51bGwgb3IgdW5kZWZpbmVkJywgdGhpcy5idWlsZGVyLmJ1aWxkKGFzc2lnbm1lbnQub2JqZWN0KSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5OiAhYXNzaWdubWVudC5jb21wdXRlZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChrZXkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBudWxsIG9yIHVuZGVmaW5lZCcsIHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50LnByb3BlcnR5KSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yLmNhbGwodGhpcywgdGFyZ2V0LCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhc3NpZ25tZW50LnR5cGUgPT09IEFTVC5JZGVudGlmaWVyKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGFzc2lnbm1lbnQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRoaXMuc2NvcGUsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2YWx1YXRlTm9kZShub2RlLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUV4cHJlc3Npb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQXNzaWdubWVudChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQ29uZGl0aW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUxvZ2ljKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQmluYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQmluYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuVW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVVbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVDYWxsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTWVtYmVyRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTWVtYmVyKG5vZGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuSWRlbnRpZmllcjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlSWRlbnRpZmllcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUxpdGVyYWwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5BcnJheUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUFycmF5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuUHJvcGVydHk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZVByb3BlcnR5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlT2JqZWN0KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUV4cHJlc3Npb24oZXhwKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTm9kZShjaGlsZCkpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQubGVmdCwge1xuICAgICAgICAgICAgYXNzaWdubWVudExlZnQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQucmlnaHQpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFyZ2V0Lm9ialt0YXJnZXQucHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRhcmdldC5vYmosIHRhcmdldC5wcm9wLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZUNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuZXZhbHVhdGVOb2RlKGNvbmRpdGlvbi50ZXN0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKGNvbmRpdGlvbi5hbHRlcm5hdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKGNvbmRpdGlvbi5jb25zZXF1ZW50KTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUxvZ2ljKGxvZ2ljKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShsb2dpYy5sZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShsb2dpYy5yaWdodCk7XG5cbiAgICAgICAgc3dpdGNoIChsb2dpYy5vcGVyYXRvcikge1xuICAgICAgICAgICAgY2FzZSAnJiYnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnfHwnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUJpbmFyeShiaW5hcnkpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGJpbmFyeS5sZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShiaW5hcnkucmlnaHQpO1xuXG4gICAgICAgIC8vICcrJywgJy0nLCAnKicsICcvJywgJyUnLCAnPCcsICc+JywgJzw9JywgJz49JywgJz09JywgJyE9JywgJz09PScsICchPT0nXG4gICAgICAgIHN3aXRjaCAoYmluYXJ5Lm9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKyByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAqIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLyByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICUgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPT0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnIT0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPT09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICchPT0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVVbmFyeSh1bmFyeSkge1xuICAgICAgICB2YXIgcmVzdWx0LFxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZSh1bmFyeS5hcmcpO1xuXG4gICAgICAgIHN3aXRjaCAodW5hcnkub3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gLXZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnISc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIXZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUNhbGwoY2FsbCkge1xuICAgICAgICB2YXIgYXJnVmFsdWVzID0gY2FsbC5hcmdzLm1hcChhcmcgPT4gdGhpcy5ldmFsdWF0ZU5vZGUoYXJnKSk7XG5cbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmV2YWx1YXRlTm9kZShjYWxsLmNhbGxlZSwge1xuICAgICAgICAgICAgY2FsbGVlOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjYWxsLmZpbHRlcikge1xuICAgICAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMucGFyc2VyLnJlc29sdmVGaWx0ZXIoY29udGV4dC5wcm9wKTtcblxuICAgICAgICAgICAgaWYoZmlsdGVyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpbHRlciBcIicgKyBjb250ZXh0LnByb3AgKyAnXCIgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlci50cmFuc2Zvcm0uYXBwbHkoZmlsdGVyLCBhcmdWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGZuID0gY29udGV4dC5vYmpbY29udGV4dC5wcm9wXTtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0Lm9iaiwgYXJnVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb250ZXh0LnByb3AgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZU1lbWJlcihtZW1iZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5vYmplY3QpO1xuXG4gICAgICAgIGlmIChvYmogPT0gbnVsbCAmJiAodGhpcy5vcHRpb25zLmFsbG93TnVsbCB8fCBtZW1iZXIub2JqZWN0LmFsbG93TnVsbCkpIHtcbiAgICAgICAgICAgIG9iaiA9IG5ldyBOdWxsRXhwcmVzc2lvbk5vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLnByb3BlcnR5KTtcbiAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgICB0YXJnZXQ6IG9iaixcbiAgICAgICAgICAgIHRhcmdldE5vZGU6IG1lbWJlci5vYmplY3QsXG4gICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50TGVmdDogY29udGV4dCAmJiBjb250ZXh0LmFzc2lnbm1lbnRMZWZ0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV2YWx1YXRlSWRlbnRpZmllcihpZGVudGlmaWVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciB0YXJnZXQ7XG5cbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwge307XG5cbiAgICAgICAgaWYgKGNvbnRleHQudGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLnNjb3BlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0ID0gY29udGV4dC50YXJnZXRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0LmFzc2lnbm1lbnRMZWZ0IHx8IGNvbnRleHQuY2FsbGVlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9iajogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIHByb3A6IGlkZW50aWZpZXIubmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0LnByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gaWRlbnRpZmllci5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldFtpZGVudGlmaWVyLm5hbWVdO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMubG9jYWxzKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLm9wdGlvbnMubG9jYWxzW2lkZW50aWZpZXIubmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlTGl0ZXJhbChsaXRlcmFsKSB7XG4gICAgICAgIHJldHVybiBsaXRlcmFsLnZhbHVlO1xuICAgIH1cblxuICAgIGV2YWx1YXRlUHJvcGVydHkocHJvcCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5ldmFsdWF0ZU5vZGUocHJvcC5rZXksIHtcbiAgICAgICAgICAgIHByb3BlcnR5S2V5OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKHByb3AudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGV2YWx1YXRlT2JqZWN0KG9iaikge1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICAgICAgb2JqLnByb3BlcnRpZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHZhciBkZWYgPSB0aGlzLmV2YWx1YXRlTm9kZShpdGVtKTtcbiAgICAgICAgICAgIHJlc3VsdFtkZWYua2V5XSA9IGRlZi52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUFycmF5KGFycikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgYXJyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmV2YWx1YXRlTm9kZShjaGlsZCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4vZXhwLWxleGVyJztcbmltcG9ydCB7IEV4cFBhcnNlciB9IGZyb20gJy4vZXhwLXBhcnNlcic7XG5cbmZ1bmN0aW9uIGxleEV4cChleHApIHtcbiAgICByZXR1cm4gbmV3IEV4cExleGVyKCkubGV4KGV4cCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRXhwKGV4cCkge1xuICAgIHJldHVybiBuZXcgRXhwUGFyc2VyKG5ldyBFeHBMZXhlcigpKS5wYXJzZShleHApO1xufVxuXG5leHBvcnQgeyBsZXhFeHAsIHBhcnNlRXhwIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBFeHBCdWlsZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIGJ1aWxkKG5vZGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkRXhwcmVzc2lvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRBc3NpZ25tZW50KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRDb25kaXRpb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkTG9naWMobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRCaW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZFVuYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZENhbGwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRNZW1iZXIobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRJZGVudGlmaWVyKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkTGl0ZXJhbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQXJyYXkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkUHJvcGVydHkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRPYmplY3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGJ1aWxkRXhwcmVzc2lvbihleHApIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICBleHAuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGQoY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGJ1aWxkQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmJ1aWxkKGFzc2lnbm1lbnQubGVmdCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQoYXNzaWdubWVudC5yaWdodCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfT17MX0nLCB0YXJnZXQsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZENvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICAgICAgdmFyIHRlc3QgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi50ZXN0KTtcbiAgICAgICAgdmFyIGFsdGVybmF0ZSA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLmFsdGVybmF0ZSk7XG4gICAgICAgIHZhciBjb25zZXF1ZW50ID0gdGhpcy5idWlsZChjb25kaXRpb24uY29uc2VxdWVudCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfT97MX06ezJ9JywgdGVzdCwgYWx0ZXJuYXRlLCBjb25zZXF1ZW50KTtcbiAgICB9XG5cbiAgICBidWlsZExvZ2ljKGxvZ2ljKSB7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmJ1aWxkKGxvZ2ljLmxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuYnVpbGQobG9naWMucmlnaHQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX17Mn0nLCBsZWZ0VmFsdWUsIGxvZ2ljLm9wZXJhdG9yLCByaWdodFZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZEJpbmFyeShiaW5hcnkpIHtcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuYnVpbGQoYmluYXJ5LmxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuYnVpbGQoYmluYXJ5LnJpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9ezF9ezJ9JywgbGVmdFZhbHVlLCBiaW5hcnkub3BlcmF0b3IsIHJpZ2h0VmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkVW5hcnkodW5hcnkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZCh1bmFyeS5hcmcpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX0nLCB1bmFyeS5vcGVyYXRvciwgdmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkQ2FsbChjYWxsKSB7XG4gICAgICAgIHZhciByZXMgPSAnJywgYXJnVmFsdWVzID0gY2FsbC5hcmdzLm1hcChhcmcgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoYXJnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGZuID0gdGhpcy5idWlsZChjYWxsLmNhbGxlZSk7XG5cbiAgICAgICAgaWYgKGNhbGwuZmlsdGVyKSB7XG4gICAgICAgICAgICBpZiAoYXJnVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXMgPSBhcmdWYWx1ZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzICs9ICcgfCAnICsgZm47XG5cbiAgICAgICAgICAgIGlmIChhcmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlcyArPSAnOicgKyBhcmdWYWx1ZXMuam9pbignOicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzID0gdXRpbHMuZm9ybWF0KCd7MH0oezF9KScsIGZuLCBhcmdWYWx1ZXMuam9pbignLCAnKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGJ1aWxkTWVtYmVyKG1lbWJlcikge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5idWlsZChtZW1iZXIub2JqZWN0KTtcbiAgICAgICAgdmFyIHByb3AgPSB0aGlzLmJ1aWxkKG1lbWJlci5wcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKG1lbWJlci5jb21wdXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9W3sxfV0nLCBvYmosIHByb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9LnsxfScsIG9iaiwgcHJvcCk7XG4gICAgfVxuXG4gICAgYnVpbGRJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aWZpZXIubmFtZTtcbiAgICB9XG5cbiAgICBidWlsZExpdGVyYWwobGl0ZXJhbCkge1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobGl0ZXJhbC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ1wiezB9XCInLCBsaXRlcmFsLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXRlcmFsLnZhbHVlO1xuICAgIH1cblxuICAgIGJ1aWxkUHJvcGVydHkocHJvcCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZChwcm9wLmtleSwge1xuICAgICAgICAgICAgcHJvcGVydHlLZXk6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZChwcm9wLnZhbHVlKTtcblxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH06ezF9Jywga2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRPYmplY3Qob2JqKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IG9iai5wcm9wZXJ0aWVzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7ezB9fScsIHByb3BzLmpvaW4oJywgJykpO1xuICAgIH1cblxuICAgIGJ1aWxkQXJyYXkoYXJyKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IGFyci5jaGlsZE5vZGVzLm1hcChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ1t7MH1dJywgaXRlbXMuam9pbignLCcpKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgT1BFUkFUT1JTIH0gZnJvbSAnLi9leHAtb3BlcmF0b3JzJztcbmltcG9ydCB7IHBhcnNlT3B0aW9ucyB9IGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBFeHBMZXhlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShwYXJzZU9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGxleCh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy4nICYmIHRoaXMuaXNOdW1iZXIodGhpcy5wZWVrKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkTnVtYmVyKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyhjaCwgJygpe31bXS4sOzo/JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGNoIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2gyID0gY2ggKyB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgICAgICB2YXIgY2gzID0gY2gyICsgdGhpcy5wZWVrKDIpO1xuICAgICAgICAgICAgICAgIHZhciBvcDEgPSBPUEVSQVRPUlNbY2hdO1xuICAgICAgICAgICAgICAgIHZhciBvcDIgPSBPUEVSQVRPUlNbY2gyXTtcbiAgICAgICAgICAgICAgICB2YXIgb3AzID0gT1BFUkFUT1JTW2NoM107XG4gICAgICAgICAgICAgICAgaWYgKG9wMSB8fCBvcDIgfHwgb3AzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IG9wMyA/IGNoMyA6IChvcDIgPyBjaDIgOiBjaCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogdG9rZW4sIG9wZXJhdG9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHRva2VuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgaXMoY2gsIGNoYXJzKSB7XG4gICAgICAgIHJldHVybiBjaGFycy5pbmRleE9mKGNoKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgcGVlayhpKSB7XG4gICAgICAgIHZhciBudW0gPSBpIHx8IDE7XG4gICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8IHRoaXMudGV4dC5sZW5ndGgpID8gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4ICsgbnVtKSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGlzTnVtYmVyKGNoKSB7XG4gICAgICAgIHJldHVybiAoJzAnIDw9IGNoICYmIGNoIDw9ICc5JykgJiYgdHlwZW9mIGNoID09PSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICBpc1doaXRlc3BhY2UoY2gpIHtcbiAgICAgICAgLy8gSUUgdHJlYXRzIG5vbi1icmVha2luZyBzcGFjZSBhcyBcXHUwMEEwXG4gICAgICAgIHJldHVybiAoY2ggPT09ICcgJyB8fCBjaCA9PT0gJ1xccicgfHwgY2ggPT09ICdcXHQnIHx8XG4gICAgICAgICAgICBjaCA9PT0gJ1xcbicgfHwgY2ggPT09ICdcXHYnIHx8IGNoID09PSAnXFx1MDBBMCcpO1xuICAgIH1cblxuICAgIGlzSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQgP1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0KGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxuICAgICAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxuICAgICAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnKTtcbiAgICB9XG5cbiAgICBpc0lkZW50aWZpZXJDb250aW51ZShjaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlID9cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZShjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCwgY3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpO1xuICAgIH1cblxuICAgIGNvZGVQb2ludEF0KGNoKSB7XG4gICAgICAgIGlmIChjaC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjaC5jaGFyQ29kZUF0KDApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICAgIHJldHVybiAoY2guY2hhckNvZGVBdCgwKSA8PCAxMCkgKyBjaC5jaGFyQ29kZUF0KDEpIC0gMHgzNUZEQzAwO1xuICAgIH1cblxuICAgIHBlZWtNdWx0aWNoYXIoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIHZhciBwZWVrID0gdGhpcy5wZWVrKCk7XG4gICAgICAgIGlmICghcGVlaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjcDEgPSBjaC5jaGFyQ29kZUF0KDApO1xuICAgICAgICB2YXIgY3AyID0gcGVlay5jaGFyQ29kZUF0KDApO1xuICAgICAgICBpZiAoY3AxID49IDB4RDgwMCAmJiBjcDEgPD0gMHhEQkZGICYmIGNwMiA+PSAweERDMDAgJiYgY3AyIDw9IDB4REZGRikge1xuICAgICAgICAgICAgcmV0dXJuIGNoICsgcGVlaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2g7XG4gICAgfVxuXG4gICAgaXNFeHBPcGVyYXRvcihjaCkge1xuICAgICAgICByZXR1cm4gKGNoID09PSAnLScgfHwgY2ggPT09ICcrJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSk7XG4gICAgfVxuXG4gICAgdGhyb3dFcnJvcihlcnJvciwgc3RhcnQsIGVuZCkge1xuICAgICAgICBlbmQgPSBlbmQgfHwgdGhpcy5pbmRleDtcbiAgICAgICAgdmFyIGNvbFN0ciA9ICh1dGlscy5pc0RlZmluZWQoc3RhcnQpID8gJ3MgJyArIHN0YXJ0ICsgJy0nICsgdGhpcy5pbmRleCArICcgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpICsgJ10nIDogJyAnICsgZW5kKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMZXhlciBFcnJvcjogJyArIGVycm9yICsgJyBhdCBjb2x1bW4nICsgY29sU3RyICsgJyBpbiBleHByZXNzaW9uIFsnICsgdGhpcy50ZXh0ICsgJ10uJyk7XG4gICAgfVxuXG4gICAgcmVhZE51bWJlcigpIHtcbiAgICAgICAgdmFyIG51bWJlciA9ICcnO1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHV0aWxzLmxvd2VyY2FzZSh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJy4nIHx8IHRoaXMuaXNOdW1iZXIoY2gpKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVla0NoID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAnZScgJiYgdGhpcy5pc0V4cE9wZXJhdG9yKHBlZWtDaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxuICAgICAgICAgICAgICAgICAgICBwZWVrQ2ggJiYgdGhpcy5pc051bWJlcihwZWVrQ2gpICYmXG4gICAgICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxuICAgICAgICAgICAgICAgICAgICAoIXBlZWtDaCB8fCAhdGhpcy5pc051bWJlcihwZWVrQ2gpKSAmJlxuICAgICAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCBleHBvbmVudCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgIHRleHQ6IG51bWJlcixcbiAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlcihudW1iZXIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlYWRJZGVudCgpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCArPSB0aGlzLnBlZWtNdWx0aWNoYXIoKS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy5wZWVrTXVsdGljaGFyKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNJZGVudGlmaWVyQ29udGludWUoY2gpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGNoLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dC5zbGljZShzdGFydCwgdGhpcy5pbmRleCksXG4gICAgICAgICAgICBpZGVudGlmaWVyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlYWRTdHJpbmcocXVvdGUpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgICAgIHZhciByYXdTdHJpbmcgPSBxdW90ZTtcbiAgICAgICAgdmFyIGVzY2FwZSA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAndScpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhleCA9IHRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyA1KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoZXgubWF0Y2goL1tcXGRhLWZdezR9L2kpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1JyArIGhleCArICddJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSA0O1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXgsIDE2KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcCA9IEVTQ0FQRVtjaF07XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZyArIChyZXAgfHwgY2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlc2NhcGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSBxdW90ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgcXVvdGUnLCBzdGFydCk7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgT1BFUkFUT1JTID0ge307XG5cbnZhciBvcGVyYXRvclRleHQgPSAnKyAtICogLyAlID09PSAhPT0gPT0gIT0gPCA+IDw9ID49ICYmIHx8ICEgPSB8JztcbnZhciBFU0NBUEUgPSB7ICduJzogJ1xcbicsICdmJzogJ1xcZicsICdyJzogJ1xccicsICd0JzogJ1xcdCcsICd2JzogJ1xcdicsICdcXCcnOiAnXFwnJywgJ1wiJzogJ1wiJyB9O1xuXG5vcGVyYXRvclRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgIE9QRVJBVE9SU1tvcGVyYXRvcl0gPSB0cnVlO1xufSk7IiwiaW1wb3J0IHtcbiAgICBBU1QsXG4gICAgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLFxuICAgIEJpbmFyeUV4cHJlc3Npb25Ob2RlLFxuICAgIENhbGxFeHByZXNzaW9uTm9kZSxcbiAgICBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLFxuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLFxuICAgIElkZW50aWZpZXJOb2RlLFxuICAgIExpdGVyYWxOb2RlLFxuICAgIExvZ2ljYWxFeHByZXNzaW9uTm9kZSxcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZSxcbiAgICBPYmplY3RFeHByZXNzaW9uTm9kZSxcbiAgICBQcm9ncmFtTm9kZSxcbiAgICBQcm9wZXJ0eU5vZGUsXG4gICAgVW5hcnlFeHByZXNzaW9uTm9kZSxcbiAgICBBcnJheUV4cHJlc3Npb25Ob2RlXG59IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuL2V4cC1sZXhlcic7XG5pbXBvcnQgeyBwYXJzZU9wdGlvbnMgfSBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgRXhwUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihsZXhlciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKHBhcnNlT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdGhyb3dFcnJvcihtc2csIHRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3ludGF4IEVycm9yOiBUb2tlbiBcXCcnICsgdG9rZW4udGV4dCArICdcXCcnICsgbXNnICsgJyBhdCBjb2x1bW4gJyArICh0b2tlbi5pbmRleCArIDEpICtcbiAgICAgICAgICAgICcgb2YgdGhlIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXSBzdGFydGluZyBhdCBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcodG9rZW4uaW5kZXgpICsgJ10uJyk7XG4gICAgfVxuXG4gICAgcGFyc2UodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvZ3JhbSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgYW4gdW5leHBlY3RlZCB0b2tlbicsIHRoaXMudG9rZW5zWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcm9ncmFtKCkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtTm9kZSgpO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMucGVlaygnfScsICcpJywgJzsnLCAnXScpKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3JhbS5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0KCc7JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cHJlc3Npb25TdGF0ZW1lbnQoKSB7XG4gICAgICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUoKTtcbiAgICAgICAgZXhwLmFwcGVuZENoaWxkKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XG4gICAgICAgIHJldHVybiBleHA7XG4gICAgfVxuXG4gICAgZmlsdGVyQ2hhaW4oKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfCcpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5maWx0ZXIobGVmdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgZXhwcmVzc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xuICAgIH1cblxuICAgIGlzQXNzaWduYWJsZShhc3QpIHtcbiAgICAgICAgcmV0dXJuIGFzdC50eXBlID09PSBBU1QuSWRlbnRpZmllciB8fCBhc3QudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb247XG4gICAgfVxuXG4gICAgYXNzaWdubWVudCgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudGVybmFyeSgpO1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJz0nKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXNzaWduYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYXNzaWduIGEgdmFsdWUgdG8gYSBub24gbC12YWx1ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKHJlc3VsdCwgdGhpcy5hc3NpZ25tZW50KCksICc9Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB0ZXJuYXJ5KCkge1xuICAgICAgICB2YXIgdGVzdCA9IHRoaXMubG9naWNhbE9SKCk7XG4gICAgICAgIHZhciBhbHRlcm5hdGU7XG4gICAgICAgIHZhciBjb25zZXF1ZW50O1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xuICAgICAgICAgICAgYWx0ZXJuYXRlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25zdW1lKCc6JykpIHtcbiAgICAgICAgICAgICAgICBjb25zZXF1ZW50ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlc3Q7XG4gICAgfVxuXG4gICAgbG9naWNhbE9SKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3x8JykpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCd8fCcsIGxlZnQsIHRoaXMubG9naWNhbEFORCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBsb2dpY2FsQU5EKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuZXF1YWxpdHkoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcmJicpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnJiYnLCBsZWZ0LCB0aGlzLmVxdWFsaXR5KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIGVxdWFsaXR5KCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMucmVsYXRpb25hbCgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPT0nLCAnIT0nLCAnPT09JywgJyE9PScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnJlbGF0aW9uYWwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgcmVsYXRpb25hbCgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmFkZGl0aXZlKCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5hZGRpdGl2ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBhZGRpdGl2ZSgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLm11bHRpcGxpY2F0aXZlKCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5tdWx0aXBsaWNhdGl2ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBtdWx0aXBsaWNhdGl2ZSgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnVuYXJ5KCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcqJywgJy8nLCAnJScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnVuYXJ5KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIHVuYXJ5KCkge1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIGlmICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJywgJyEnKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbWFyeSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpbWFyeSgpIHtcbiAgICAgICAgdmFyIHByaW1hcnk7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnKCcpKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5maWx0ZXJDaGFpbigpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ1snKSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuYXJyYXlEZWNsYXJhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCd7JykpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLm9iamVjdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5saXRlcmFscy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnBlZWsoKS50ZXh0KSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBMaXRlcmFsTm9kZSh0aGlzLm9wdGlvbnMubGl0ZXJhbHNbdGhpcy5jb25zdW1lKCkudGV4dF0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuY29uc3RhbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignbm90IGEgcHJpbWFyeSBleHByZXNzaW9uJywgdGhpcy5wZWVrKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoJygnLCAnWycsICcuJykgfHwgKHRoaXMucGVlaygnPycpICYmIHRoaXMucGVla0FoZWFkKDEsICcuJykpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xuICAgICAgICAgICAgICAgIHByaW1hcnkuYWxsb3dOdWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCA9IHRoaXMuZXhwZWN0KCcoJywgJ1snLCAnLicpO1xuXG4gICAgICAgICAgICBpZiAobmV4dC50ZXh0ID09PSAnKCcpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLnBhcnNlQXJndW1lbnRzKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICdbJykge1xuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5leHByZXNzaW9uKCksIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICcuJykge1xuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5pZGVudGlmaWVyKCksIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJTVBPU1NJQkxFJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByaW1hcnk7XG4gICAgfVxuXG4gICAgZmlsdGVyKGJhc2VFeHByZXNzaW9uKSB7XG4gICAgICAgIHZhciBhcmdzID0gW2Jhc2VFeHByZXNzaW9uXSwgaWRlbnRpZmllcnMgPSBbdGhpcy5pZGVudGlmaWVyKCldO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnLicpKSB7XG4gICAgICAgICAgICBpZGVudGlmaWVycy5wdXNoKHRoaXMuaWRlbnRpZmllcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBsdXMgbmFtZXNwYWNlXG4gICAgICAgIHZhciBlbnRpcmVOYW1lID0gaWRlbnRpZmllcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lO1xuICAgICAgICB9KS5qb2luKCcuJyk7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUobmV3IElkZW50aWZpZXJOb2RlKGVudGlyZU5hbWUpLCBhcmdzKTtcblxuICAgICAgICByZXN1bHQuZmlsdGVyID0gdHJ1ZTtcblxuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJzonKSkge1xuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcGFyc2VBcmd1bWVudHMoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICcpJykge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmZpbHRlckNoYWluKCkpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcigpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jb25zdW1lKCk7XG4gICAgICAgIGlmICghdG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBub3QgYSB2YWxpZCBpZGVudGlmaWVyJywgdG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSWRlbnRpZmllck5vZGUodG9rZW4udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3RhbnQoKSB7XG4gICAgICAgIC8vIFRPRE8gY2hlY2sgdGhhdCBpdCBpcyBhIGNvbnN0YW50XG4gICAgICAgIHJldHVybiBuZXcgTGl0ZXJhbE5vZGUodGhpcy5jb25zdW1lKCkudmFsdWUpO1xuICAgIH1cblxuICAgIGFycmF5RGVjbGFyYXRpb24oKSB7XG4gICAgICAgIHZhciBhcnIgPSBuZXcgQXJyYXlFeHByZXNzaW9uTm9kZSgpO1xuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnXScpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCddJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJyLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgb2JqZWN0KCkge1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IFtdLCBwcm9wZXJ0eTtcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ30nKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnfScpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5Tm9kZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmNvbnN0YW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnOicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHByb3BlcnR5LmtleTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCdbJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCdbJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2ludmFsaWQga2V5JywgdGhpcy5wZWVrKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25zdW1lKCd9Jyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBPYmplY3RFeHByZXNzaW9uTm9kZShwcm9wZXJ0aWVzKTtcbiAgICB9XG5cbiAgICBjb25zdW1lKGUxKSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdChlMSk7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFsnICsgZTEgKyAnXScsIHRoaXMucGVlaygpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuXG4gICAgcGVla1Rva2VuKCkge1xuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1swXTtcbiAgICB9XG5cbiAgICBwZWVrKGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlZWtBaGVhZCgwLCBlMSwgZTIsIGUzLCBlNCk7XG4gICAgfVxuXG4gICAgcGVla0FoZWFkKGksIGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiBpKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcbiAgICAgICAgICAgIHZhciB0ID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGlmICh0ID09PSBlMSB8fCB0ID09PSBlMiB8fCB0ID09PSBlMyB8fCB0ID09PSBlNCB8fFxuICAgICAgICAgICAgICAgICghZTEgJiYgIWUyICYmICFlMyAmJiAhZTQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBleHBlY3QoZTEsIGUyLCBlMywgZTQpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5wZWVrKGUxLCBlMiwgZTMsIGU0KTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5zaGlmdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbiIsImV4cG9ydCAqIGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL21vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWxleGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLXBhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9leHAtYnVpbGRlcic7XG5leHBvcnQgKiBmcm9tICcuL2V2YWx1YXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2FuYWx5c2VyJzsiLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBBcnJheUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5BcnJheUV4cHJlc3Npb24pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCwgb3BlcmF0b3IpIHtcbiAgICAgICAgc3VwZXIoQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgIH1cblxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICB9XG59IiwiZXhwb3J0IHZhciBBU1QgPSB7fTtcblxuQVNULlByb2dyYW0gPSAnUHJvZ3JhbSc7XG5BU1QuRXhwcmVzc2lvblN0YXRlbWVudCA9ICdFeHByZXNzaW9uU3RhdGVtZW50JztcbkFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbiA9ICdBc3NpZ25tZW50RXhwcmVzc2lvbic7XG5BU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uID0gJ0NvbmRpdGlvbmFsRXhwcmVzc2lvbic7XG5BU1QuTG9naWNhbEV4cHJlc3Npb24gPSAnTG9naWNhbEV4cHJlc3Npb24nO1xuQVNULkJpbmFyeUV4cHJlc3Npb24gPSAnQmluYXJ5RXhwcmVzc2lvbic7XG5BU1QuVW5hcnlFeHByZXNzaW9uID0gJ1VuYXJ5RXhwcmVzc2lvbic7XG5BU1QuQ2FsbEV4cHJlc3Npb24gPSAnQ2FsbEV4cHJlc3Npb24nO1xuQVNULk1lbWJlckV4cHJlc3Npb24gPSAnTWVtYmVyRXhwcmVzc2lvbic7XG5BU1QuSWRlbnRpZmllciA9ICdJZGVudGlmaWVyJztcbkFTVC5MaXRlcmFsID0gJ0xpdGVyYWwnO1xuQVNULkFycmF5RXhwcmVzc2lvbiA9ICdBcnJheUV4cHJlc3Npb24nO1xuQVNULlByb3BlcnR5ID0gJ1Byb3BlcnR5JztcbkFTVC5PYmplY3RFeHByZXNzaW9uID0gJ09iamVjdEV4cHJlc3Npb24nO1xuXG5leHBvcnQgY2xhc3MgTnVsbEV4cHJlc3Npb25Ob2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4kbnVsbCA9IHRydWU7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIEJpbmFyeUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHN1cGVyKEFTVC5CaW5hcnlFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIENhbGxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgYXJncykge1xuICAgICAgICBzdXBlcihBU1QuQ2FsbEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCkge1xuICAgICAgICBzdXBlcihBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICAgICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XG4gICAgICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5FeHByZXNzaW9uU3RhdGVtZW50KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllck5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHN1cGVyKEFTVC5JZGVudGlmaWVyKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9hc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9hc3Qtbm9kZSc7XG5leHBvcnQgKiBmcm9tICcuL2Fzc2lnbm1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9iaW5hcnknO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxsJztcbmV4cG9ydCAqIGZyb20gJy4vY29uZGl0aW9uYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9leHByZXNzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vaWRlbnRpZmllcic7XG5leHBvcnQgKiBmcm9tICcuL2xpdGVyYWwnO1xuZXhwb3J0ICogZnJvbSAgJy4vbG9naWNhbCc7XG5leHBvcnQgKiBmcm9tICAnLi9tZW1iZXInO1xuZXhwb3J0ICogZnJvbSAgJy4vb2JqZWN0JztcbmV4cG9ydCAqIGZyb20gICcuL3Byb2dyYW0nO1xuZXhwb3J0ICogZnJvbSAgJy4vcHJvcGVydHknO1xuZXhwb3J0ICogZnJvbSAgJy4vdW5hcnknO1xuZXhwb3J0ICogZnJvbSAnLi9hcnJheSc7IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbE5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcihBU1QuTGl0ZXJhbCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgTG9naWNhbEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHN1cGVyKEFTVC5Mb2dpY2FsRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBNZW1iZXJFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIGNvbXB1dGVkKSB7XG4gICAgICAgIHN1cGVyKEFTVC5NZW1iZXJFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgdGhpcy5jb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgICB0aGlzLmFsbG93TnVsbCA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcbiAgICAgICAgc3VwZXIoQVNULk9iamVjdEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmFtTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuUHJvZ3JhbSk7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5Tm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuUHJvcGVydHkpO1xuICAgICAgICB0aGlzLmtpbmQgPSAnaW5pdCc7XG4gICAgICAgIHRoaXMua2V5ID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgVW5hcnlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBhcmcpIHtcbiAgICAgICAgc3VwZXIoQVNULlVuYXJ5RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMucHJlZml4ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLmFyZyA9IGFyZztcbiAgICB9XG59IiwiZXhwb3J0IHZhciBwYXJzZU9wdGlvbnMgPSB7XG4gICAgaXNJZGVudGlmaWVyQ29udGludWU6IGZhbHNlLFxuICAgIGlzSWRlbnRpZmllclN0YXJ0OiBmYWxzZSxcbiAgICBsaXRlcmFsczoge1xuICAgICAgICBmYWxzZTogZmFsc2UsXG4gICAgICAgIG51bGw6IG51bGwsXG4gICAgICAgIHRydWU6IHRydWUsXG4gICAgICAgIHVuZGVmaW5lZDogdW5kZWZpbmVkXG4gICAgfVxufTsiLCJleHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZSc7XG5leHBvcnQgKiBmcm9tICcuL29ic2VydmVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwJztcbmV4cG9ydCAqIGZyb20gJy4vdHBsJztcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XG5leHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UnOyIsImV4cG9ydCBjbGFzcyBEZWxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgICAgIHRoaXMuZGVsYXlJZCA9IG51bGw7XG4gICAgfVxuXG4gICAgZXhlY3V0ZShzY29wZSkge1xuICAgICAgICBpZih0aGlzLmRlbGF5SWQgIT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlbGF5SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVsYXlJZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuY2FsbChzY29wZSk7XG4gICAgICAgIH0sIHRoaXMudGltZW91dCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsYXlJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheUlkKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3Byb3h5JztcclxuZXhwb3J0ICogZnJvbSAnLi9vYnNlcnZlcic7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgRXZhbHVhdG9yLCBBbmFseXNlciB9IGZyb20gJy4uL2V4cCc7XG5pbXBvcnQgeyBXYXRjaGVyIH0gZnJvbSAnLi93YXRjaGVyJztcbmltcG9ydCB7IERlbGF5ZXIgfSBmcm9tICcuL2RlbGF5ZXInO1xuXG5jbGFzcyBMaXN0ZW5lciB7XG4gICAgY29uc3RydWN0b3IoZXhwLCBoYW5kbGVyLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXROZXdWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRDb2xsZWN0aW9uQ2hhbmdlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgaGFzQ2hhbmdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZUNoYW5nZWQgfHwgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZDtcbiAgICB9XG5cbiAgICBub3RpZnkoc2NvcGUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5uZXdWYWx1ZSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25DaGFuZ2VkID0gdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZDtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5uZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlci5jYWxsKHNjb3BlLCB7XG4gICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICBjb2xsZWN0aW9uQ2hhbmdlZDogY29sbGVjdGlvbkNoYW5nZWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5hY2Nlc3NvcnMgPSB7fTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy53YXRjaGVyID0gbmV3IFdhdGNoZXIoKTtcbiAgICAgICAgdGhpcy5hbmFseXNlciA9IG5ldyBBbmFseXNlcihzY29wZS4kcGFyc2VyKTtcbiAgICAgICAgdGhpcy5kZWxheWVyID0gbmV3IERlbGF5ZXIodGhpcy5ub3RpZnksIDE2KTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIHZhbHVlKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IG5ldyBMaXN0ZW5lcihleHAsIGhhbmRsZXIsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICAgaWYoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5KCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIGlmKGxpc3RlbmVyLmhhc0NoYW5nZSgpKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIubm90aWZ5KHRoaXMuc2NvcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlDaGFuZ2UobGlzdGVuZXIsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgbGlzdGVuZXIuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdGVuZXIuc2V0Q29sbGVjdGlvbkNoYW5nZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheWVyLmV4ZWN1dGUodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0QWNjZXNzb3IoZXhwKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmFjY2Vzc29yc1tleHBdO1xuXG4gICAgICAgIGlmKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZXIuYW5hbHlzZShleHApO1xuICAgICAgICAgICAgdGhpcy5hY2Nlc3NvcnNbZXhwXSA9IHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dGlscy5jb3B5KHRydWUsIHJlc3VsdCk7XG4gICAgfVxuXG4gICAgd2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgYWNjZXNzb3IgPSB0aGlzLmdldEFjY2Vzc29yKGV4cCk7XG4gICAgICAgIHZhciBldmFsdWF0b3IgPSAgbmV3IEV2YWx1YXRvcih0aGlzLnNjb3BlLCB7IGFsbG93TnVsbDogdHJ1ZSwgbG9jYWxzOiBsb2NhbHMgfSk7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCBldmFsdWF0b3IuZXZhbHVhdGUoZXhwKSk7XG5cbiAgICAgICAgZnVuY3Rpb24gdW53YXRjaEFjY2Vzc29ycyhhY2Nlc3NvcnMpIHtcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2goYWNjZXNzb3JzLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGl0ZW0udW53YXRjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51bndhdGNoLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udW53YXRjaCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVud2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoQWNjZXNzb3JzKGFjY2Vzc29ycywgdGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAoIXV0aWxzLmlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2goYWNjZXNzb3JzLCBmdW5jdGlvbiAoaXRlbSwga2V5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHRhcmdldDtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmV4cCkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBldmFsdWF0b3IuZXZhbHVhdGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZih2YWx1ZXMgPT09IHNlbGYuc2NvcGUgJiYgbG9jYWxzICYmIGxvY2Fsc1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IGxvY2FscztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2ggPSBzZWxmLndhdGNoZXIud2F0Y2godmFsdWVzLCBrZXksIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHVud2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIHdhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4sIGFyZ3MuZGF0YS5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWZ5Q2hhbmdlKGxpc3RlbmVyLCBldmFsdWF0b3IuZXZhbHVhdGUoZXhwKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB3YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdhdGNoQWNjZXNzb3JzKGFjY2Vzc29yLCB0aGlzLnNjb3BlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhhY2Nlc3Nvcik7XG4gICAgICAgICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB3YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgZXZhbHVhdG9yID0gbmV3IEV2YWx1YXRvcih0aGlzLnNjb3BlLCB7IGFsbG93TnVsbDogdHJ1ZSwgbG9jYWxzOiBsb2NhbHMgfSk7XG4gICAgICAgIHZhciB1bndhdGNoUHJvcHMgPSB3YXRjaFByb3BzKCk7XG4gICAgICAgIHZhciB1bndhdGNoRXhwID0gdGhpcy53YXRjaChleHAsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh1bndhdGNoUHJvcHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHVud2F0Y2hQcm9wcy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdW53YXRjaFByb3BzID0gd2F0Y2hQcm9wcygpO1xuICAgICAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCBsb2NhbHMpO1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUxpc3RlbmVyKGV4cCwgaGFuZGxlciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCkpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoUHJvcHMoKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IGV2YWx1YXRvci5ldmFsdWF0ZShleHApO1xuXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QoY29sbGVjdGlvbikgfHwgdXRpbHMuaXNBcnJheShjb2xsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLndhdGNoZXIud2F0Y2goY29sbGVjdGlvbiwgJyonLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWZ5Q2hhbmdlKGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1bndhdGNoRXhwLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB1bndhdGNoUHJvcHMgJiYgdW53YXRjaFByb3BzLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlbGF5ZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLndhdGNoZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMubGVuZ3RoID0gMDtcbiAgICB9XG59IiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbnZhciBpc1Byb3h5U3ltYm9sID0gU3ltYm9sKCdfX2lzUHJveHknKSxcbiAgICB0YXJnZXRTeW1ib2wgPSBTeW1ib2woJ19fdGFyZ2V0Jyk7XG5cbnZhciBoYW5kbGVyID0ge1xuICAgIGdldDogZ2V0UHJveHksXG4gICAgc2V0OiBzZXRQcm94eVxufTtcblxuLy8gZXh0ZW5kcyBvYmplY3QgcHJvdG90eXBlLCBhZGQgZnVuY3Rpb24gdG9Qcm94eVxuLy8gT2JqZWN0LnByb3RvdHlwZS50b1Byb3h5ID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIHJldHVybiBpc1Byb3h5KHRoaXMpID8gdGhpcyA6IG5ldyBQcm94eSh0aGlzLCBoYW5kbGVyKTtcbi8vIH07XG5cbmZ1bmN0aW9uIGlzUHJveHkocHJveHkpIHtcbiAgICByZXR1cm4gdXRpbHMuaXNPYmplY3QocHJveHkpICYmIHByb3h5W2lzUHJveHlTeW1ib2xdO1xufVxuXG5mdW5jdGlvbiBnZXRUYXJnZXQocHJveHkpIHtcbiAgICByZXR1cm4gaXNQcm94eShwcm94eSkgPyBwcm94eVt0YXJnZXRTeW1ib2xdIDogcHJveHk7XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm94eSh2YWx1ZSkge1xuICAgIGlmICh1dGlscy5pc09iamVjdCh2YWx1ZSkgJiYgIWlzUHJveHkodmFsdWUpKSB7XG4gICAgICAgIHV0aWxzLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgIHZhbHVlW2tleV0gPSBtYWtlUHJveHkoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHZhbHVlLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldFByb3h5KHRhcmdldCwga2V5KSB7XG4gICAgaWYgKGtleSA9PT0gaXNQcm94eVN5bWJvbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSB0YXJnZXRTeW1ib2wpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG59XG5cbmZ1bmN0aW9uIHNldFByb3h5KHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBvbGRWYWx1ZSA9IGdldFRhcmdldCh0YXJnZXRba2V5XSksXG4gICAgICAgIG5ld1ZhbHVlID0gZ2V0VGFyZ2V0KHZhbHVlKTtcblxuICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBtYWtlUHJveHkodmFsdWUpO1xuICAgICAgICBldmVudHMucHJvcGVydHlDaGFuZ2VkLmZpcmUoe1xuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0YXJnZXRba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IHtcbiAgICBpc1Byb3h5LFxuICAgIGdldFRhcmdldCxcbiAgICBoYW5kbGVyXG59IiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBnZXRUYXJnZXQgfSBmcm9tICcuL3Byb3h5JztcblxuY2xhc3MgT2JqZWN0TGlzdGVuZXIge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5rZXlzID0ge307XG4gICAgfVxuXG4gICAgZ2V0SGFuZGxlcnMoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5rZXlzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMua2V5c1trZXldID0gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5rZXlzW2tleV07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJLZXkoa2V5LCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcbiAgICAgICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyS2V5KGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XG5cbiAgICAgICAgaWYgKGhhbmRsZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgaGFuZGxlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUtleShrZXksIGFyZ3MsIHNlbGYpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHNlbGYsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5vZmZQcm9wZXJ0eUNoYW5nZWQgPSBldmVudHMucHJvcGVydHlDaGFuZ2VkLm9uKGUgPT4gdGhpcy5oYW5kbGVQcm9wZXJ0eUNoYW5nZWQoZS5kYXRhKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUHJvcGVydHlDaGFuZ2VkKGRhdGEpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRMaXN0ZW5lcih0aGlzLmxpc3RlbmVycywgZGF0YS50YXJnZXQpO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5maXJlS2V5KGRhdGEua2V5LCBkYXRhKTtcbiAgICAgICAgICAgIGxpc3RlbmVyLmZpcmVLZXkoJyonLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciwgZmlsdGVycyA9IGxpc3RlbmVycy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS50YXJnZXQgPT09IHRhcmdldDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBmaWx0ZXJzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IG5ldyBPYmplY3RMaXN0ZW5lcih0YXJnZXQpO1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBnZXRPckNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lciA9PSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxuICAgIHdhdGNoKHRhcmdldCwga2V5LCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRPckNyZWF0ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXJzLCBnZXRUYXJnZXQodGFyZ2V0KSk7XG5cbiAgICAgICAgbGlzdGVuZXIucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci51bnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLm9mZlByb3BlcnR5Q2hhbmdlZCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcblxuZXhwb3J0IGNsYXNzIEJpbmRpbmcge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCB0ZXh0LCBsb2NhbHMpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmxvY2FscyA9IGxvY2FscztcbiAgICAgICAgLy8gaXMgdHJ1ZSwgYmluZGluZyB0ZXh0IGlzIGEgZXhwcmVzc2lvblxuICAgICAgICB0aGlzLmlzRXhwID0gZmFsc2U7XG4gICAgICAgIC8vIGlmIHRydWUsIGJpbmRpbmcgdGV4dCBpcyBhIGxvZ2ljYWwgZXhwcmVzc2lvblxuICAgICAgICB0aGlzLmxvZ2ljYWwgPSBmYWxzZTtcbiAgICAgICAgLy8gaWYgdHJ1ZSwgYmluZGluZyB0ZXh0IGlzIGEgYXNzaWdubWVudCBleHByZXNzaW9uXG4gICAgICAgIHRoaXMuYXNzaWdubWVudCA9IGZhbHNlO1xuICAgICAgICAvLyBoYW5kbGVyIHRvIHVwZGF0ZSB2aWV3IGZyb20gbW9kZWwgdmFsdWVcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zID0gW107XG4gICAgfVxuXG4gICAgY3JlYXRlRXhwcmVzc2lvbih0ZXh0KSB7XG4gICAgICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvbih0ZXh0KTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucy5wdXNoKGV4cCk7XG4gICAgICAgIHJldHVybiBleHA7XG4gICAgfVxuXG4gICAgY29tcGlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9naWNhbCB8fCB0aGlzLmFzc2lnbm1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFeHAgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFeHApIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRXhwcmVzc2lvbih0aGlzLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSAve3soW159XSopfX0vZztcbiAgICAgICAgICAgIHZhciBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICAgICAgICAgIHZhciBzZWdtZW50LCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0aGlzLnRleHQpO1xuXG4gICAgICAgICAgICB3aGlsZSAobWF0Y2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaC5pbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50ID0gdGhpcy50ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh0aGlzLmNyZWF0ZUV4cHJlc3Npb24obWF0Y2hbMV0pKTtcblxuICAgICAgICAgICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgICAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybi5leGVjKHRoaXMudGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRleHQubGVuZ3RoID4gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgc2VnbWVudCA9IHRoaXMudGV4dC5zdWJzdHJpbmcobGFzdEluZGV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rKCkge1xuICAgICAgICBpZiAodGhpcy5hc3NpZ25tZW50IHx8IHRoaXMubG9naWNhbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZXRlY3QoKTtcblxuICAgICAgICB0aGlzLmV4cHJlc3Npb25zLmZvckVhY2goZXhwID0+IHtcbiAgICAgICAgICAgIGV4cC53YXRjaCh0aGlzLnNjb3BlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGNoKCk7XG4gICAgICAgICAgICB9LCB0aGlzLmxvY2Fscyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXNzaWdubWVudCB8fCB0aGlzLmxvZ2ljYWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5jb21wdXRlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCB2YWx1ZVxuICAgIGNvbXB1dGUobG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMubG9jYWxzLCBsb2NhbHMpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRXhwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uc1swXS5jb21wdXRlKHRoaXMuc2NvcGUsIGxvY2Fscyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zZWdtZW50cy5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGN1cikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldiArIGN1cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGl0IGlzIGEgZXhwcmVzc2lvblxuICAgICAgICAgICAgcmV0dXJuIHByZXYgKyAoY3VyLmNvbXB1dGUodGhpcy5zY29wZSwgbG9jYWxzKSB8fCAnJyk7XG4gICAgICAgIH0sICcnKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdmFsdWVcbiAgICBhc3NpZ24odmFsdWUsIGxvY2Fscykge1xuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLmxvY2FscywgbG9jYWxzKTtcblxuICAgICAgICBpZiAodGhpcy5pc0V4cCkge1xuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc1swXS5hc3NpZ24odGhpcy5zY29wZSwgdmFsdWUsIGxvY2Fscyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy50ZXh0ICsgJyBpcyBub3QgdmFsaWQgZXhwcmVzc2lvbicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJBdXRvbWF0aW9uKGF1dG9tYXRpb24pIHtcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gYXV0b21hdGlvbjtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyQXV0b21hdGlvbihhdXRvbWF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9tYXRpb24gPT09IGF1dG9tYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtb2RpZnkgdmlldyBhY2NvcmRpbmcgdG8gbW9kZWxcbiAgICBwYXRjaCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlZCAmJiB0aGlzLmF1dG9tYXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmF1dG9tYXRpb24uY2FsbCh0aGlzLCB0aGlzLnZhbHVlLCB0aGlzLm9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMuZm9yRWFjaChleHAgPT4ge1xuICAgICAgICAgICAgZXhwLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBFeHByZXNzaW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XG4gICAgICAgIHRoaXMuaGFzVHJhbnNsYXRpb24gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBnZXQgdmFsdWVcbiAgICBjb21wdXRlKHNjb3BlLCBsb2NhbHMpIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlLiRldmFsKHRoaXMudGV4dCwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdmFsdWVcbiAgICBhc3NpZ24oc2NvcGUsIHZhbHVlLCBsb2NhbHMpIHtcbiAgICAgICAgc2NvcGUuJGFzc2lnbih0aGlzLnRleHQsIHZhbHVlLCBsb2NhbHMpO1xuICAgIH1cblxuICAgIHdhdGNoKHNjb3BlLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgdGhpcy51bndhdGNoID0gc2NvcGUuJHdhdGNoKHRoaXMudGV4dCwgaGFuZGxlciwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZih0aGlzLnVud2F0Y2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51bndhdGNoKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9iaW5kaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwcmVzc2lvbic7XG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcmVyJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vZG9tJztcbmltcG9ydCB7IGlzVlRleHQsIGlzVkNvbW1lbnQsIGlzVkVsbSB9IGZyb20gJy4uL3RwbCc7XG5pbXBvcnQgeyBMb2NhbCB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgQmluZGluZyB9IGZyb20gJy4vYmluZGluZyc7XG5pbXBvcnQgeyBNX0NNUF9DTEFTUyB9IGZyb20gJy4uL2Nzcyc7XG5pbXBvcnQgeyBTaW5nbGVOb2RlVmlldywgTXVsdGlwbGVOb2RlVmlldyB9IGZyb20gJy4vdmlldyc7XG5cbi8vIFdpbmRvdyBFdmVudHNcbi8vIGNhc2UgJ29uLWxvYWQnOlxuLy8gY2FzZSAnb24tdW5sb2FkJzpcbi8vIEZvcm0gRWxlbWVudCBFdmVudHNcbi8vIGNhc2UgJ29uLWNoYW5nZSc6XG4vLyBjYXNlICdvbi1zdWJtaXQnOlxuLy8gY2FzZSAnb24tcmVzZXQnOlxuLy8gY2FzZSAnb24tc2VsZWN0Jzpcbi8vIGNhc2UgJ29uLWJsdXInOlxuLy8gY2FzZSAnb24tZm9jdXMnOlxuLy8gSW1hZ2UgRXZlbnRzXG4vLyBjYXNlICdvbi1hYm9ydCc6XG4vLyBLZXlib2FyZCBFdmVudHNcbi8vIGNhc2UgJ29uLWtleWRvd24nOlxuLy8gY2FzZSAnb24ta2V5cHJlc3MnOlxuLy8gY2FzZSAnb24ta2V5dXAnOlxuLy8gTW91c2UgRXZlbnRzXG4vLyBjYXNlICdvbi1jbGljayc6XG4vLyBjYXNlICdvbi1kYmxjbGljayc6XG4vLyBjYXNlICdvbi1tb3VzZWRvd24nOlxuLy8gY2FzZSAnb24tbW91c2Vtb3ZlJzpcbi8vIGNhc2UgJ29uLW1vdXNlb3V0Jzpcbi8vIGNhc2UgJ29uLW1vdXNlb3Zlcic6XG4vLyBjYXNlICdvbi1tb3VzZXVwJzpcbnZhciBldmVudFRleHQgPSAnbG9hZCB1bmxvYWQgY2hhbmdlIHN1Ym1pdCByZXNldCBzZWxlY3QgYmx1ciBmb2N1cyBhYm9ydCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZW1vdmUgbW91c2VvdXQgbW91c2VvdmVyIG1vdXNldXAnO1xudmFyIGRvbUV2ZW50cyA9IGV2ZW50VGV4dC5zcGxpdCgnICcpO1xuXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xuICAgIGdldCBpbmplY3RvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuJGluamVjdG9yO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCBsb2NhbHMpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmxvY2FscyA9IGxvY2FscztcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBzY29wZS4kcGFyc2VyO1xuICAgICAgICB0aGlzLnZpZXcgPSBudWxsO1xuICAgIH1cblxuICAgIG5ld0JpbmRpbmcodGV4dCkge1xuICAgICAgICB2YXIgYmluZGluZyA9IG5ldyBCaW5kaW5nKHRoaXMuc2NvcGUsIHRleHQsIHRoaXMubG9jYWxzKTtcbiAgICAgICAgdGhpcy52aWV3LmJpbmRpbmdzLnB1c2goYmluZGluZyk7XG4gICAgICAgIHJldHVybiBiaW5kaW5nO1xuICAgIH1cblxuICAgIG5ld0NvbXBvbmVudChjbHMpIHtcbiAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5pbmplY3Rvci5jcmVhdGVDb21wb25lbnQoY2xzKTtcblxuICAgICAgICB0aGlzLnNjb3BlLiRhcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIHRoaXMudmlldy5jb21wb25lbnRzLnB1c2goY2hpbGQpO1xuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICBuZXdEaXJlY3RpdmUoY2xzKSB7XG4gICAgICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLmluamVjdG9yLmNyZWF0ZURpcmVjdGl2ZShjbHMpO1xuXG4gICAgICAgIGRpcmVjdGl2ZS4kJHNjb3BlID0gdGhpcy5zY29wZTtcblxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIH1cblxuICAgIHJlY29nbml6ZUNvbXBvbmVudCh2ZWxtKSB7XG4gICAgICAgIHZhciBjb21wb25lbnQgPSB0aGlzLnBhcnNlci5yZXNvbHZlQ29tcG9uZW50KHZlbG0ubm9kZU5hbWUpO1xuXG4gICAgICAgIC8vIHZlbG0ubm9kZURhdGEuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZWNvZ25pemVEaXJlY3RpdmUodmF0dHIpIHtcbiAgICAgICAgdmFyIGRpcmVjdGl2ZSA9IHRoaXMucGFyc2VyLnJlc29sdmVEaXJlY3RpdmUodmF0dHIubm9kZURhdGEubmFtZSk7XG5cbiAgICAgICAgLy8gdmF0dHIubm9kZURhdGEuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG5cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICB9XG5cbiAgICByZW5kZXIodGVtcGxhdGUsIGNvbnRhaW5lcikge1xuICAgICAgICB2YXIgaGFzQ29udGFpbmVyID0gY29udGFpbmVyICE9IG51bGw7XG5cbiAgICAgICAgaWYoaGFzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcgPSBuZXcgU2luZ2xlTm9kZVZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIG11c3Qgc2V0IGEgcm9vdCBlbGVtZW50IGZvciBkaXJlY3RpdmUgbGlmZSBjeWNsZSBcImFmdGVyTGlua1wiIGhvb3BzXG4gICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcgPSBuZXcgTXVsdGlwbGVOb2RlVmlldygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52aWV3LnZub2RlcyA9IHRoaXMucGFyc2VyLnBhcnNlVGVtcGxhdGUodGVtcGxhdGUpO1xuXG4gICAgICAgIHRoaXMuY29tcGlsZU5vZGVzKHRoaXMudmlldy52bm9kZXMpO1xuXG4gICAgICAgIC8vIHRoaXMuZW50aXR5LmRpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmUgPT4gZGlyZWN0aXZlLiRwcmVsaW5rKCkpO1xuXG4gICAgICAgIHRoaXMubGlua05vZGVzKHRoaXMudmlldy52bm9kZXMpLmZvckVhY2gobm9kZSA9PiBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZSkpO1xuXG4gICAgICAgIC8vIGNhbGwgZGlyZWN0aXZlIGxpZmUgY3ljbGUgaG9vcHNcbiAgICAgICAgdGhpcy52aWV3LmRpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmUgPT4gZGlyZWN0aXZlLiRwb3N0bGluaygpKTtcblxuICAgICAgICBpZihoYXNDb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5ub2RlID0gY29udGFpbmVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gY2FjaGUgdGhlIGdlbmVyYXRlZCBlbGVtZW50c1xuICAgICAgICAgICAgZG9tLmdldENoaWxkcmVuT2ZFbGVtZW50KGNvbnRhaW5lcikuZm9yRWFjaChub2RlID0+IHRoaXMudmlldy5ub2Rlcy5wdXNoKG5vZGUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnZpZXc7XG4gICAgfVxuXG4gICAgY29tcGlsZU5vZGVzKHZub2Rlcykge1xuICAgICAgICB2bm9kZXMuZm9yRWFjaCh2bm9kZSA9PiB0aGlzLmNvbXBpbGVOb2RlKHZub2RlKSk7XG4gICAgfVxuXG4gICAgY29tcGlsZU5vZGUodm5vZGUpIHtcbiAgICAgICAgaWYgKGlzVlRleHQodm5vZGUpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVUZXh0KHZub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlzVkNvbW1lbnQodm5vZGUpKXtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUNvbW1lbnQodm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlRWxtKHZub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtOb2Rlcyh2bm9kZXMpIHtcbiAgICAgICAgcmV0dXJuIHZub2Rlcy5tYXAodm5vZGUgPT4gdGhpcy5saW5rTm9kZSh2bm9kZSkpO1xuICAgIH1cblxuICAgIGxpbmtOb2RlKHZub2RlKSB7XG4gICAgICAgIGlmIChpc1ZUZXh0KHZub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua1RleHQodm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNWQ29tbWVudCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtDb21tZW50KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtFbG0odm5vZGUpO1xuICAgIH1cblxuICAgIGNvbXBpbGVFbG0odmVsbSkge1xuICAgICAgICB2YXIgZWxtRGF0YSA9IHZlbG0ubm9kZURhdGE7XG5cbiAgICAgICAgZWxtRGF0YS5jb21wb25lbnQgPSB0aGlzLnJlY29nbml6ZUNvbXBvbmVudCh2ZWxtKTtcblxuICAgICAgICB2YXIgZGlyZWN0aXZlcyA9IFtdO1xuICAgICAgICB2YXIgY3VzdG9tTGlua2VyID0gdmVsbS52YXR0cnMuc29tZSh2YXR0ciA9PiB7XG4gICAgICAgICAgICB2YXIgYXR0ckRhdGEgPSB2YXR0ci5ub2RlRGF0YTtcblxuICAgICAgICAgICAgdGhpcy5jb21waWxlQXR0cih2YXR0cik7XG5cbiAgICAgICAgICAgIGlmIChhdHRyRGF0YS5kaXJlY3RpdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXMucHVzaChhdHRyRGF0YS5kaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgIGVsbURhdGEubGlua2VyID0gYXR0ckRhdGEubGlua2VyO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbG1EYXRhLmxpbmtlciAhPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHNvcnQgZGlyZWN0aXZlIGFjY29yZGluZyB0byBpdHMgcHJpb3JpdHlcbiAgICAgICAgdXRpbHMub3JkZXJCeShkaXJlY3RpdmVzLCBkaXJlY3RpdmUgPT4gZGlyZWN0aXZlLiRwcmlvcml0eSkuZm9yRWFjaChkaXJlY3RpdmUgPT4gdGhpcy52aWV3LmRpcmVjdGl2ZXMucHVzaChkaXJlY3RpdmUpKTtcblxuICAgICAgICBlbG1EYXRhLmRpcmVjdGl2ZXMgPSBkaXJlY3RpdmVzO1xuXG4gICAgICAgIC8vIGRpcmVjdGl2ZSBkZWZpbmVzIGN1c3RvbSBsaW5rZXIgZm9yIHRoaXMgdmlydHVhbCBub2RlLCByZW5kZXIgZW5naW5lIHdpbGwgbm90IHJlbmRlciBpdCBhY2NvcmRpbmcgdG8gZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICBpZiAoY3VzdG9tTGlua2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxtRGF0YS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIGVsbURhdGEuc2xvdHMgPSB0aGlzLnNlZWtTbG90KHZlbG0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlTm9kZXModmVsbS5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBpbGVBdHRyKHZhdHRyKSB7XG4gICAgICAgIHZhciBhdHRyTmFtZSA9IHZhdHRyLm5vZGVOYW1lLCBhdHRyVmFsdWUgPSB2YXR0ci5ub2RlVmFsdWUsXG4gICAgICAgICAgICBhdHRyRGF0YSA9IHZhdHRyLm5vZGVEYXRhLCBiaW5kaW5nO1xuXG4gICAgICAgIGlmKGF0dHJWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBiaW5kaW5nID0gdGhpcy5uZXdCaW5kaW5nKGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICBhdHRyRGF0YS5iaW5kaW5nID0gYmluZGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCdAJykpIHtcbiAgICAgICAgICAgIGF0dHJEYXRhLmlzRXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgYXR0ckRhdGEubmFtZSA9IGF0dHJOYW1lLnN1YnN0cigxKTtcbiAgICAgICAgICAgIGF0dHJEYXRhLmlzRG9tRXZlbnQgPSB1dGlscy5zb21lKGRvbUV2ZW50cywgZSA9PiBlID09PSBhdHRyRGF0YS5uYW1lKTtcbiAgICAgICAgICAgIGJpbmRpbmcgJiYgKGJpbmRpbmcubG9naWNhbCA9IHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF0dHJOYW1lLnN0YXJ0c1dpdGgoJzonKSkge1xuICAgICAgICAgICAgYXR0ckRhdGEubmFtZSA9IGF0dHJOYW1lLnN1YnN0cigxKTtcbiAgICAgICAgICAgIGJpbmRpbmcgJiYgKGJpbmRpbmcuaXNFeHAgPSB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCcqJykpIHtcbiAgICAgICAgICAgIGF0dHJEYXRhLmRpcmVjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBhdHRyRGF0YS5uYW1lID0gYXR0ck5hbWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgYmluZGluZyAmJiAoYmluZGluZy5pc0V4cCA9IHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0ckRhdGEubmFtZSA9IGF0dHJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0dHJEYXRhLmRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZSA9IHRoaXMucmVjb2duaXplRGlyZWN0aXZlKHZhdHRyKTtcblxuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGF0dHJEYXRhLmRpcmVjdGl2ZSA9IHRoaXMubmV3RGlyZWN0aXZlKGRpcmVjdGl2ZSk7XG4gICAgICAgICAgICAgICAgYXR0ckRhdGEuZGlyZWN0aXZlLiQkdmF0dHIgPSB2YXR0cjtcblxuICAgICAgICAgICAgICAgIGlmKGJpbmRpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nLmFzc2lnbm1lbnQgPSBhdHRyRGF0YS5kaXJlY3RpdmUuJGFzc2lnbm1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGF0dHJEYXRhLmRpcmVjdGl2ZS4kY29tcGlsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJEYXRhLmxpbmtlciA9IGF0dHJEYXRhLmRpcmVjdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGlyZWN0aXZlICcgKyBhdHRyRGF0YS5uYW1lICsgJyBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoYmluZGluZyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIShhdHRyRGF0YS5pc0V2ZW50IHx8IGF0dHJEYXRhLmRpcmVjdGl2ZSkpIHtcbiAgICAgICAgICAgIHZhciBzZXRIdG1sQXR0ciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbG0gPSB2YXR0ci52ZWxtLmVsbTtcblxuICAgICAgICAgICAgICAgIGlmIChhdHRyRGF0YS5uYW1lLnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkoZWxtLCBhdHRyRGF0YS5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKGF0dHJEYXRhLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodmF0dHIudmVsbS5ub2RlRGF0YS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudCA9IHZhdHRyLnZlbG0ubm9kZURhdGEuY29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcGVydHlOYW1lID0gdXRpbHMuY29udmVydFRvSHVtcE5hbWUoYXR0ckRhdGEubmFtZSwgJy0nKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LiRoYXNQcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuJHNldFByb3BlcnR5KHByb3BlcnR5TmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SHRtbEF0dHIodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihzZXRIdG1sQXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBiaW5kaW5nLmNvbXBpbGUoKTtcbiAgICB9XG5cbiAgICBjb21waWxlVGV4dCh2dGV4dCkge1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nID0gdGhpcy5uZXdCaW5kaW5nKHZ0ZXh0Lm5vZGVWYWx1ZSk7XG4gICAgICAgIHZ0ZXh0Lm5vZGVEYXRhLmJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGVsbSwgbmV3VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh2dGV4dC5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodnRleHQuZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtID0gdnRleHQuZWxtLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxtID0gdnRleHQucGFyZW50Tm9kZS5lbG07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbG0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh2dGV4dC5lbG0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBlbG0uYXBwZW5kQ2hpbGQobmV3VGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tLnJlcGxhY2VFbGVtZW50KHZ0ZXh0LmVsbSwgbmV3VGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdnRleHQuZWxtID0gbmV3VGV4dE5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLmNvbXBpbGUoKTtcbiAgICB9XG5cbiAgICBjb21waWxlQ29tbWVudCh2Y21udCkge1xuXG4gICAgfVxuXG4gICAgbGlua0VsbSh2ZWxtKSB7XG4gICAgICAgIHZhciBlbG1EYXRhID0gdmVsbS5ub2RlRGF0YTtcblxuICAgICAgICBpZiAoZWxtRGF0YS5saW5rZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsbURhdGEubGlua2VyLiRsaW5rKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2ZWxtLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodmVsbS5ub2RlTmFtZSk7XG5cbiAgICAgICAgaWYgKGVsbURhdGEuY29tcG9uZW50KSB7XG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLm5ld0NvbXBvbmVudChlbG1EYXRhLmNvbXBvbmVudCk7XG5cbiAgICAgICAgICAgIGVsbURhdGEuY29tcG9uZW50ID0gaW5zdGFuY2U7XG5cbiAgICAgICAgICAgIGRvbS5hZGRDbGFzcyh2ZWxtLmVsbSwgTV9DTVBfQ0xBU1MpO1xuXG4gICAgICAgICAgICB2ZWxtLnZhdHRycy5mb3JFYWNoKHZhdHRyID0+IHRoaXMubGlua0F0dHIodmF0dHIpKTtcblxuICAgICAgICAgICAgaW5zdGFuY2UuJCR2ZWxtID0gdmVsbTtcbiAgICAgICAgICAgIGluc3RhbmNlLiRzZXJDb250YWluZXIodmVsbS5lbG0pO1xuICAgICAgICAgICAgaW5zdGFuY2UuJHNldFNsb3QoZWxtRGF0YS5zbG90cyk7XG4gICAgICAgICAgICBpbnN0YW5jZS4kcmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2ZWxtLnZhdHRycy5mb3JFYWNoKHZhdHRyID0+IHRoaXMubGlua0F0dHIodmF0dHIpKTtcbiAgICAgICAgICAgIHZlbG0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHZlbG0uZWxtLmFwcGVuZENoaWxkKHRoaXMubGlua05vZGUoY2hpbGQpKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVsbS5lbG07XG4gICAgfVxuXG4gICAgbGlua0F0dHIodmF0dHIpIHtcbiAgICAgICAgdmFyIHZlbG0gPSB2YXR0ci52ZWxtLFxuICAgICAgICAgICAgZWxtID0gdmVsbS5lbG0sXG4gICAgICAgICAgICBhdHRyRGF0YSA9IHZhdHRyLm5vZGVEYXRhLFxuICAgICAgICAgICAgYmluZGluZyA9IGF0dHJEYXRhLmJpbmRpbmc7XG5cbiAgICAgICAgaWYoYmluZGluZyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0ckRhdGEuaXNFdmVudCkge1xuICAgICAgICAgICAgaWYgKGF0dHJEYXRhLmlzRG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihhdHRyRGF0YS5uYW1lLCBlID0+IGJpbmRpbmcuY29tcHV0ZShuZXcgTG9jYWwoZSwgZWxtKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmVsbS5ub2RlRGF0YS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gdXRpbHMuY29udmVydFRvSHVtcE5hbWUoYXR0ckRhdGEubmFtZSwgJy0nKTtcbiAgICAgICAgICAgICAgICB2ZWxtLm5vZGVEYXRhLmNvbXBvbmVudC4kYmluZChldmVudE5hbWUsIGUgPT4gYmluZGluZy5jb21wdXRlKG5ldyBMb2NhbChlLCBlbG0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBiaW5kaW5nLmxpbmsoKTtcbiAgICAgICAgICAgIGJpbmRpbmcucGF0Y2goKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlZ2lzdGVyIGJpbmRpbmcgY2hhbmdlIGhhbmRsZXIgYWZ0ZXIgZmlyc3QgcGF0Y2hcbiAgICAgICAgaWYoYXR0ckRhdGEuZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBiaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbigobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiBhdHRyRGF0YS5kaXJlY3RpdmUuJGNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtUZXh0KHZ0ZXh0KSB7XG4gICAgICAgIHZ0ZXh0Lm5vZGVEYXRhLmJpbmRpbmcubGluaygpO1xuICAgICAgICB2dGV4dC5lbG0gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZ0ZXh0LmVsbTtcbiAgICB9XG5cbiAgICBsaW5rQ29tbWVudCh2Y21udCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh2Y21udC5ub2RlVmFsdWUpO1xuICAgIH1cblxuICAgIHNlZWtTbG90KHZlbG0pIHtcbiAgICAgICAgdmFyIHNsb3RzID0ge307XG5cbiAgICAgICAgdmVsbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgaWYoaXNWRWxtKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIHZhciBzbG90ID0gY2hpbGQuZ2V0QXR0cignc2xvdCcpO1xuXG4gICAgICAgICAgICAgICAgaWYoc2xvdCkge1xuICAgICAgICAgICAgICAgICAgICBzbG90c1tzbG90Lm5vZGVWYWx1ZV0gPSBjaGlsZC5nZXRJbm5lclRwbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICBzbG90cztcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuLi9jb3JlJztcclxuXHJcbmNsYXNzIFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy52bm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmJpbmRpbmdzID0gW107XHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVzID0gW107XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IGV2ZW50cy5yZWZyZXNoVmlldy5vbigoKSA9PiB0aGlzLnJlZnJlc2goKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW91bnQoc2VsZWN0b3JPckVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgZWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYmluZGluZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmluZGluZ3MuZm9yRWFjaChiaW5kaW5nID0+IHtcclxuICAgICAgICAgICAgYmluZGluZy5kZXRlY3QoKTtcclxuICAgICAgICAgICAgYmluZGluZy5wYXRjaCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS4kZGVzdHJveSgpKTtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uJGRlc3Ryb3koKSk7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5ncy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5kZXN0cm95KCkpO1xyXG4gICAgICAgIHRoaXMudm5vZGVzLmZvckVhY2goaXRlbSA9PiBpdGVtLmRlc3Ryb3koKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuYmluZGluZ3MubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnZub2Rlcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2luZ2xlTm9kZVZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuICAgIGdldCBjb250ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5vZGUgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVOb2RlVmlldyBleHRlbmRzIFZpZXcge1xyXG4gICAgZ2V0IGNvbnRlbnQoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKG5vZGUgPT4gY29udGVudC5hcHBlbmRDaGlsZChub2RlKSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubm9kZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuXHJcbkBzZXJ2aWNlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ2h0dHAnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSBleHRlbmRzIFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVYSFIoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVByb21pc2UocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVXJsUGFyYW0odXJsLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpO1xyXG4gICAgICAgIHVybCArPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SHR0cFJlcXVlc3RIZWFkZXJzKHhociwgY29uZmlnKSB7XHJcbiAgICAgICAgdXRpbHMuZm9yRWFjaChjb25maWcuaGVhZGVycywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAga2V5ID0gdXRpbHMuY29udmVydEZyb21IdW1wTmFtZShrZXksICctJyk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEh0dHBSZXNwb25zZUhlYWRlcnMoaGVhZGVycykge1xyXG4gICAgICAgIHZhciBwYXJzZWQgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKCFoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIga2V5LCB2YWwsIGk7XHJcblxyXG4gICAgICAgIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIChsaW5lLCBpbmRleCkge1xyXG4gICAgICAgICAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XHJcbiAgICAgICAgICAgIGtleSA9IGxpbmUuc3Vic3RyKDAsIGkpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB2YWwgPSBsaW5lLnN1YnN0cihpICsgMSkudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRVcmwodXJsLCBjb25maWcpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChjb25maWcuZGF0YSAhPSBudWxsICYmIGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKSA9PT0gJ2dldCcpIHtcclxuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChjb25maWcuZGF0YSwgZnVuY3Rpb24gKHZhbHVlLCBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmFkZFVybFBhcmFtKHVybCwgbmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0KGNvbmZpZykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBzZWxmLmNyZWF0ZVhIUigpO1xyXG5cclxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4geGhyID8gc2VsZi5nZXRIdHRwUmVzcG9uc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkgOiB4aHIucmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogeGhyXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkgfHwgeGhyLnN0YXR1cyA9PSAzMDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdWNjZXNzZnVsbHlcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB4aHIgPSBudWxsO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgIHVybCA9IHNlbGYuYnVpbGRVcmwoY29uZmlnLnVybCwgY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoY29uZmlnLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCh1cmwsIGRhdGEsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdXRpbHMuZXh0ZW5kKGNvbmZpZywgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmV4dGVuZChjb25maWcsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChjb25maWcpO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCAqIGZyb20gJy4vaW5qZWN0b3InO1xyXG5leHBvcnQgKiBmcm9tICcuL2h0dHAnOyIsImltcG9ydCB7IFNlcnZpY2UsIGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQHNlcnZpY2Uoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnaW5qZWN0b3InXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmplY3RvciBleHRlbmRzIFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZUNvbXBvbmVudChuYW1lLCB1c2luZywgZGVmYXVsdE5zKSB7XHJcbiAgICAgICAgcmV0dXJuIGluamVjdG9yLnBhcnNlQ29tcG9uZW50KG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRGlyZWN0aXZlKG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpIHtcclxuICAgICAgICByZXR1cm4gaW5qZWN0b3IucGFyc2VEaXJlY3RpdmUobmFtZSwgdXNpbmcsIGRlZmF1bHROcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VTZXJ2aWNlKG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpIHtcclxuICAgICAgICByZXR1cm4gaW5qZWN0b3IucGFyc2VTZXJ2aWNlKG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRmlsdGVyKG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpIHtcclxuICAgICAgICByZXR1cm4gaW5qZWN0b3IucGFyc2VGaWx0ZXIobmFtZSwgdXNpbmcsIGRlZmF1bHROcyk7XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3RwbC1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi90cGwtYnVpbGRlcic7IiwiZXhwb3J0ICogZnJvbSAnLi92bm9kZSc7XG5leHBvcnQgKiBmcm9tICcuL3ZhdHRyJztcbmV4cG9ydCAqIGZyb20gJy4vdmNtbnQnO1xuZXhwb3J0ICogZnJvbSAnLi92ZWxtJztcbmV4cG9ydCAqIGZyb20gJy4vdnRleHQnO1xuZXhwb3J0ICogZnJvbSAnLi92dHlwZSc7IiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWQXR0ciBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5hdHRyaWJ1dGUsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy52ZWxtID0gbnVsbDtcbiAgICAgICAgdGhpcy5xdW90ZSA9ICdcIic7XG4gICAgfVxuXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBvbkNsb25lTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWQXR0cih0aGlzLm5vZGVOYW1lLCB0aGlzLm5vZGVWYWx1ZSk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWQ21udCBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5jb21tZW50LCAnI2NvbW1lbnQnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgb25DbG9uZU5vZGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVkNtbnQodGhpcy5ub2RlTmFtZSwgdGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuaW1wb3J0IHsgVkF0dHIgfSBmcm9tICcuL3ZhdHRyJztcbmltcG9ydCB7IHBhcnNlVHBsIH0gZnJvbSAnLi4vdHBsLWFwaSc7XG5pbXBvcnQgeyBUcGxCdWlsZGVyIH0gZnJvbSAnLi4vdHBsLWJ1aWxkZXInO1xuXG5leHBvcnQgY2xhc3MgVkVsbSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLmVsZW1lbnQsIG5hbWUpO1xuICAgICAgICB0aGlzLmVsbSA9IG51bGw7XG4gICAgICAgIHRoaXMudmF0dHJzID0gW107XG4gICAgICAgIHRoaXMuc2VsZkNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgVHBsQnVpbGRlcigpO1xuICAgIH1cblxuICAgIHB1c2hBdHRyKGF0dHIpIHtcbiAgICAgICAgYXR0ci52ZWxtID0gdGhpcztcbiAgICAgICAgdGhpcy52YXR0cnMucHVzaChhdHRyKTtcbiAgICB9XG5cbiAgICBoYXNBdHRyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YXR0cnMubGVuZ3RoICE9PSAwO1xuICAgIH1cblxuICAgIGdldEF0dHIoa2V5KSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5ub2RlTmFtZSA9PT0ga2V5O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaGVzWzBdO1xuICAgIH1cblxuICAgIHNldEF0dHIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdGFyZ2V0LCBtYXRjaGVzID0gdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBtYXRjaGVzWzBdO1xuICAgICAgICAgICAgdGFyZ2V0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG5ldyBWQXR0cihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHRhcmdldC52ZWxtID0gdGhpcztcbiAgICAgICAgICAgIHRhcmdldC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YXR0cnMucHVzaCh0YXJnZXQpO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmVtb3ZlQXR0cihrZXkpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IFtdLCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgVkF0dHIpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudmF0dHJzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLnZhdHRycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gc2VsZi52YXR0cnMuaW5kZXhPZihtYXRjaCk7XG4gICAgICAgICAgICAgICAgbWF0Y2guZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYudmF0dHJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQubGVuZ3RoID4gMCA/IHRhcmdldFswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgYXBwZW5kQXR0cihhdHRyKSB7XG4gICAgICAgIGlmIChhdHRyLnZlbG0gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3VycmVudCBhdHRyaWJ1dGUgaXMgbm90IG5ldyFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBhdHRyLnZlbG0gPSB0aGlzO1xuICAgICAgICBhdHRyLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMudmF0dHJzLnB1c2goYXR0cik7XG4gICAgICAgIHJldHVybiBhdHRyO1xuICAgIH1cblxuICAgIGdldE91dGVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZGVyLmJ1aWxkKHRoaXMpO1xuICAgIH1cblxuICAgIGdldElubmVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZGVyLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgfSkuam9pbignJyk7XG4gICAgfVxuXG4gICAgc2V0T3V0ZXJUcGwodHBsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcGFyc2VUcGwodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYsIHZub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmKTtcbiAgICB9XG5cbiAgICBzZXRJbm5lclRwbCh0cGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFyQ2hpbGROb2RlcygpO1xuICAgICAgICBwYXJzZVRwbCh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYuYXBwZW5kQ2hpbGQodm5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsb25lTm9kZSgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgVkVsbSh0aGlzLm5vZGVOYW1lLCB0aGlzLm5vZGVWYWx1ZSk7XG5cbiAgICAgICAgbm9kZS52YXR0cnMgPSB0aGlzLnZhdHRycy5tYXAoZnVuY3Rpb24gKHZhdHRyKSB7XG4gICAgICAgICAgICB2YXIgY29weSA9IHZhdHRyLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgY29weS52ZWxtID0gbm9kZTtcbiAgICAgICAgICAgIHJldHVybiBjb3B5O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudmF0dHJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhdHRycy5sZW5ndGggPSAwO1xuICAgIH1cbn0iLCJleHBvcnQgdmFyIG5vZGVUeXBlID0ge1xuICAgIGVsZW1lbnQ6IDEsXG4gICAgYXR0cmlidXRlOiAyLFxuICAgIHRleHQ6IDMsXG4gICAgY2RhdGFTZWN0aW9uOiA0LFxuICAgIGVudGl0eVJlZmVyZW5jZTogNSxcbiAgICBlbnRpdHk6IDYsXG4gICAgcHJvY2Vzc2luZ0luc3RydWN0aW9uOiA3LFxuICAgIGNvbW1lbnQ6IDgsXG4gICAgZG9jdW1lbnQ6IDksXG4gICAgZG9jdW1lbnRUeXBlOiAxMCxcbiAgICBkb2N1bWVudEZyYWdtZW50OiAxMSxcbiAgICBub3RhdGlvbjogMTJcbn1cblxuLy8gdmlydHVhbCBub2RlXG5leHBvcnQgY2xhc3MgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9kZVR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLm5vZGVOYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gW107XG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5ub2RlRGF0YSA9IHt9O1xuICAgIH1cblxuICAgIHB1c2hDaGlsZChjaGlsZCkge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIGJ1aWxkU2libGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IChzZWxmLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5idWlsZFNpYmxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDaGlsZE5vZGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBjbGVhckNoaWxkTm9kZXMoKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZC5uZXh0U2libGluZyA9IGNoaWxkO1xuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gdGhpcy5sYXN0Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICBpbnNlcnRCZWZvcmUocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHJlZkNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQ7XG4gICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0NoaWxkO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAwLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBpbnNlcnRBZnRlcihyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKHJlZkNoaWxkLm5leHRTaWJsaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShyZWZDaGlsZC5uZXh0U2libGluZywgbmV3Q2hpbGQpO1xuICAgIH1cblxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmUgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZy5wcmV2aW91c1NpYmxpbmcgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgcmVwbGFjZUNoaWxkKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlyc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGFzdENoaWxkID09PSByZWZDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZkNoaWxkLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBjbG9uZU5vZGUoZGVlcCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMub25DbG9uZU5vZGUoZGVlcCk7XG5cbiAgICAgICAgaWYoZGVlcCkge1xuICAgICAgICAgICAgbm9kZS5jaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQuY2xvbmVOb2RlKGRlZXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBub2RlLmJ1aWxkU2libGluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcblxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGhvb3BzXG5cbiAgICAvLyBlbmQgb2YgaG9vcHNcbn1cbiIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuXG5leHBvcnQgY2xhc3MgVlRleHQgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUudGV4dCwgJyN0ZXh0JywgdmFsdWUpO1xuICAgICAgICB0aGlzLmVsbSA9IG51bGw7XG4gICAgfVxuXG4gICAgb25DbG9uZU5vZGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVlRleHQodGhpcy5ub2RlTmFtZSwgdGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZUeXBlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5kb2N1bWVudFR5cGUpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBUcGxMZXhlciB9IGZyb20gJy4vdHBsLWxleGVyJztcbmltcG9ydCB7IFRwbFBhcnNlciB9IGZyb20gJy4vdHBsLXBhcnNlcic7XG5pbXBvcnQgeyBub2RlVHlwZSB9IGZyb20gJy4vbW9kZWwnO1xuXG5mdW5jdGlvbiBsZXhUcGwodHBsKSB7XG4gICAgdHBsID0gdXRpbHMuZXNjYXBlSHRtbCh0cGwpO1xuICAgIHJldHVybiBuZXcgVHBsTGV4ZXIoKS5sZXgodHBsKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUcGwodHBsKSB7XG4gICAgdHBsID0gdXRpbHMuZXNjYXBlSHRtbCh0cGwpO1xuICAgIHJldHVybiBuZXcgVHBsUGFyc2VyKG5ldyBUcGxMZXhlcigpKS5wYXJzZSh0cGwpO1xufVxuXG5mdW5jdGlvbiBpc1ZFbG0odm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlLmVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzVkF0dHIodm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlLmF0dHJpYnV0ZTtcbn1cblxuZnVuY3Rpb24gaXNWVGV4dCh2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUudGV4dDtcbn1cblxuZnVuY3Rpb24gaXNWQ29tbWVudCh2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUuY29tbWVudDtcbn1cblxuZXhwb3J0IHsgbGV4VHBsLCBwYXJzZVRwbCwgaXNWRWxtLCBpc1ZBdHRyLCBpc1ZUZXh0LCBpc1ZDb21tZW50IH07IiwiaW1wb3J0IHsgaXNWVGV4dCwgaXNWQ29tbWVudCB9IGZyb20gJy4vdHBsLWFwaSdcblxuZXhwb3J0IGNsYXNzIFRwbEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgYnVpbGQodm5vZGUpIHtcbiAgICAgICAgaWYgKGlzVlRleHQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZFRleHQodm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNWQ29tbWVudCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQ29tbWVudCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5idWlsZEVsZW1lbnQodm5vZGUpO1xuICAgIH1cblxuICAgIGJ1aWxkRWxlbWVudCh2ZWxtKSB7XG4gICAgICAgIHZhciBhdHRyVHBsID0gdmVsbS52YXR0cnMubWFwKCh2YXR0cikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQXR0cmlidXRlKHZhdHRyKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJyAnKSxcbiAgICAgICAgICAgIGNoaWxkVHBsID0gdmVsbS5jaGlsZE5vZGVzLm1hcCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChjaGlsZCk7XG4gICAgICAgICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgICBpZihhdHRyVHBsKSB7XG4gICAgICAgICAgICBhdHRyVHBsID0gJyAnICsgYXR0clRwbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cGwgPSAnPCcgKyB2ZWxtLm5vZGVOYW1lICsgYXR0clRwbCArICc+JyArIGNoaWxkVHBsO1xuXG4gICAgICAgIGlmICghdmVsbS5zZWxmQ2xvc2VkKSB7XG4gICAgICAgICAgICB0cGwgKz0gKCc8LycgKyB2ZWxtLm5vZGVOYW1lICsgJz4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cGw7XG4gICAgfVxuXG4gICAgYnVpbGRBdHRyaWJ1dGUodmF0dHIpIHtcbiAgICAgICAgcmV0dXJuIHZhdHRyLm5vZGVOYW1lICsgKHZhdHRyLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdmF0dHIucXVvdGUgKyB2YXR0ci5ub2RlVmFsdWUgKyB2YXR0ci5xdW90ZSkpO1xuICAgIH1cblxuICAgIGJ1aWxkVGV4dCh2dGV4dCkge1xuICAgICAgICByZXR1cm4gdnRleHQubm9kZVZhbHVlO1xuICAgIH1cblxuICAgIGJ1aWxkQ29tbWVudCh2Y21udCkge1xuICAgICAgICByZXR1cm4gdmNtbnQubm9kZVZhbHVlO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuLi9leHAnO1xuXG5leHBvcnQgY2xhc3MgVHBsTGV4ZXIgZXh0ZW5kcyBFeHBMZXhlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxuICAgICAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxuICAgICAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnIHx8XG4gICAgICAgICAgICBjaCA9PT0gJ0AnIHx8IGNoID09PSAnOicgfHwgY2ggPT09ICcqJyk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCwgY3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpIHx8IGNoID09PSAnLScgfHwgY2ggPT09ICcuJztcbiAgICB9XG5cbiAgICBleHBlY3RTdHJpbmcoc3RyKSB7XG4gICAgICAgIHZhciBudW0gPSBzdHIubGVuZ3RoO1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPD0gdGhpcy50ZXh0Lmxlbmd0aCkgPyAoc3RyID09PSB0aGlzLnRleHQuc3Vic3RyKHRoaXMuaW5kZXgsIG51bSkpIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gaHRtbCBjb21tZW50IFwiPCEtLWNvbW1lbnQtLT5cIlxuICAgIHJlYWRDb21tZW50KGJlZ2luLCBlbmQpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICAgICAgdmFyIHJhd1N0cmluZyA9IGJlZ2luO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoZW5kKSkge1xuICAgICAgICAgICAgICAgIHJhd1N0cmluZyArPSBlbmQ7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignVW50ZXJtaW5hdGVkIGNvbW1lbnQnLCBzdGFydCk7XG4gICAgfVxuXG4gICAgLy8gaHRtbCB0ZXh0XG4gICAgcmVhZFRleHQoKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgaWYgKChjaCA9PT0gJzwnICYmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikgfHwgY2gyID09PSAnLycpKSB8fCB0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICB0ZXh0OiBzdHJpbmcsXG4gICAgICAgICAgICB0ZXh0VGFnOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGh0bWwgdGFnXG4gICAgcmVhZFRhZyhiZWdpbiwgZW5kLCBjbG9zaW5nLCBkb2N0eXBlKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogYmVnaW4sIHRhZzogdHJ1ZSwgY2xvc2luZzogY2xvc2luZywgYmVnaW46IHRydWUsIGRvY3R5cGU6IGRvY3R5cGUgfSk7XG4gICAgICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xuICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcblxuICAgICAgICAgICAgaWYgKCFjbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgICAgIHZhciBzdHIgPSBjaCArIGNoMjtcbiAgICAgICAgICAgICAgICBpZiAoc3RyID09PSAnLycgKyBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBzdHIsIHRhZzogdHJ1ZSwgY2xvc2luZzogdHJ1ZSwgZW5kOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHN0ci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoID09PSBlbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVuZCxcbiAgICAgICAgICAgICAgICAgICAgdGFnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbG9zaW5nOiAhIWRvY3R5cGUgPyB0cnVlIDogY2xvc2luZyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnPScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6ICc9JywgZXF1YWw6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxleCh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgICAgIHZhciBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIHZhciBjaDMgPSB0aGlzLnBlZWsoMik7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZENvbW1lbnQoJzwhLS0nLCAnLS0+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJzwnICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCcsICc+JywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwvJykgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8LycsICc+JywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCFET0NUWVBFJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCEnLCAnPicsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdET0NUWVBFIGlzIG5vdCBhbGxvd2VkJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRleHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgfVxufSIsImltcG9ydCB7IEV4cFBhcnNlciB9IGZyb20gJy4uL2V4cCc7XG5pbXBvcnQge1xuICAgIFZFbG0sIFZBdHRyLCBWVGV4dCwgVkNtbnQsIFZUeXBlXG59IGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgVHBsUGFyc2VyIGV4dGVuZHMgRXhwUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihsZXhlciwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsZXhlciwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcGFyc2UodGV4dCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcblxuICAgICAgICB2YXIgcm9vdCA9IG5ldyBWRWxtKCk7XG4gICAgICAgIHZhciBkb2N0eXBlLCBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLmRvY3R5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZG9jdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdHlwZSA9IHRoaXMuZG9jdHlwZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2goZG9jdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIG9ubHkgYWxsb3cgb25lXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBpcyBub3QgYWxsb3dlZFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IFZDbW50KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKGNvbW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGV4dFRhZykge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFZUZXh0KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2godGhpcy5lbGVtZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiaW1wb3NzaWJsZVwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByb290LmJ1aWxkU2libGluZygpO1xuXG4gICAgICAgIHJldHVybiByb290LmNoaWxkTm9kZXM7XG4gICAgfVxuXG4gICAgZG9jdHlwZSgpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHZhciBkb2NUeXBlID0gbmV3IFZUeXBlKCk7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBkb2NUeXBlLm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdHRycyhkb2NUeXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBkb2NUeXBlLmNoaWxkTm9kZXMucHVzaChhdHRyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZG9jVHlwZTtcbiAgICB9XG5cbiAgICBlbGVtZW50KHApIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHZhciBlbGUgPSBuZXcgVkVsbSgpO1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgZWxlLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXR0cnMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBlbGUucHVzaEF0dHIoYXR0cik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIGVsZS5zZWxmQ2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZEVsZW1lbnRzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLnB1c2hDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbiAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09IHRva2VuLnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGU7XG4gICAgfVxuXG4gICAgY2hpbGRFbGVtZW50cyhwKSB7XG4gICAgICAgIHZhciBlbGVzID0gW107XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBWQ21udCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2goY29tbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVlRleHQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKHRoaXMuZWxlbWVudChwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZXM7XG4gICAgfVxuXG4gICAgYXR0cnMocCkge1xuICAgICAgICB2YXIgYXR0cnMgPSBbXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhdHRyID0gbmV3IFZBdHRyKCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgYXR0ci5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICAgICAgYXR0ci5vcmlnaW4gPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLmVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4uY29uc3RhbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIubm9kZVZhbHVlID0gdG9rZW4udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF0dHJzLnB1c2goYXR0cik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXR0cnM7XG4gICAgfVxuXG4gICAgY3VycmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbn0iLCJ2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG4vLyBpc1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBBcnJheTtcbn1cblxuZnVuY3Rpb24gaXNNYXAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBNYXA7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzQmxhbmtPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG4vLyBlbmQgb2YgaXNcblxuLy8gdmFsdWVcbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICByZXR1cm4gaXNOYU4obikgPyB2YWx1ZSA6IG47XG59XG5cbmZ1bmN0aW9uIGxvd2VyY2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b0xvd2VyQ2FzZSgpIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB1cHBlcmNhc2Uoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9VcHBlckNhc2UoKSA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY29udmVydFRvSHVtcE5hbWUobmFtZSwgc2VwYXJhdG9yLCB1cHBlcmNhc2VGaXJzdExldHRlcikge1xuICAgIHJldHVybiBuYW1lLnNwbGl0KHNlcGFyYXRvcikubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwICYmICF1cHBlcmNhc2VGaXJzdExldHRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zdWJzdHJpbmcoMSk7XG4gICAgfSkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRGcm9tSHVtcE5hbWUobmFtZSwgc2VwYXJhdG9yLCB1cHBlcmNhc2VGaXJzdExldHRlcikge1xuICAgIHZhciBpID0gMCwgbmV3TmFtZSA9ICcnLCBjaGFyO1xuXG4gICAgd2hpbGUgKGkgPCBuYW1lLmxlbmd0aCkge1xuICAgICAgICBjaGFyID0gbmFtZVtpXTtcblxuICAgICAgICBpZiAoKGkgIT09IDAgfHwgdXBwZXJjYXNlRmlyc3RMZXR0ZXIpICYmIC9bQS1aXS8udGVzdChjaGFyKSkge1xuICAgICAgICAgICAgbmV3TmFtZSArPSBzZXBhcmF0b3I7XG4gICAgICAgICAgICBuZXdOYW1lICs9IGNoYXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld05hbWUgKz0gY2hhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGkrKztcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3TmFtZTtcbn1cbi8vIGVuZCBpZiB2YWx1ZVxuXG4vLyBvYmplY3RcbmZ1bmN0aW9uIGNvcHkoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgb2JqSW5kZXggPSAwLCBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdLCBmaWx0ZXI7XG5cbiAgICBpZiAoaXNCb29sZWFuKG9iaikpIHtcbiAgICAgICAgZGVlcCA9IG9iajtcbiAgICAgICAgb2JqSW5kZXgrKztcbiAgICAgICAgb2JqID0gYXJndW1lbnRzW29iakluZGV4XTtcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IG9iakluZGV4ICsgMSkge1xuICAgICAgICBmaWx0ZXIgPSBhcmd1bWVudHNbb2JqSW5kZXggKyAxXTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIHZhciBuZXdBcnIgPSBbXTtcbiAgICAgICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwgaW5kZXgsIGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZGVlcCA/IGNvcHkoZGVlcCwgaXRlbSkgOiBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgdmFyIG5ld09iaiA9IG9iamVjdChvYmopO1xuICAgICAgICBmb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBrZXksIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gZGVlcCA/IGNvcHkoZGVlcCwgdmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICBpZiAoaXNCb29sZWFuKHRhcmdldCkpIHtcbiAgICAgICAgZGVlcCA9IHRhcmdldDtcbiAgICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWysraW5kZXhdO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlKCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0ge307XG5cbiAgICBpZiAoaXNCb29sZWFuKGFyZ3VtZW50c1tpbmRleF0pKSB7XG4gICAgICAgIGRlZXAgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gcGxhaW5NZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QodGFyZ2V0W2tleV0pICYmIGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8gZW5kIG9mIG9iamVjdFxuXG4vLyBpdGVyYXRvclxuZnVuY3Rpb24gZm9yRWFjaCh0YXJnZXQsIGFjdGlvbikge1xuICAgIGlmIChpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgdGFyZ2V0LmZvckVhY2goYWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uKHRhcmdldFtrZXldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzb21lKHRhcmdldCwgZnVuYykge1xuICAgIGlmIChpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5zb21lKGZ1bmMpO1xuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChmdW5jKHRhcmdldFtrZXldLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIGVuZCBvZiBpdGVyYXRvclxuXG4vLyBhcnJheVxuZnVuY3Rpb24gb3JkZXJCeShsaXN0LCBnZXR0ZXIpIHtcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPCBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb3JkZXJCeURlc2NlbmRpbmcobGlzdCwgZ2V0dGVyKSB7XG4gICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XG4gICAgfTtcblxuICAgIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGdldFZhbHVlKGEpIDwgZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKGxpc3QsIHZhbHVlKSB7XG4gICAgdmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKHZhbHVlKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuLy8gZW5kIG9mIGFycmF5XG5cbmZ1bmN0aW9uIG9iamVjdChvKSB7XG4gICAgZnVuY3Rpb24gRigpIHtcbiAgICB9XG5cbiAgICBGLnByb3RvdHlwZSA9IG87XG4gICAgcmV0dXJuIG5ldyBGKCk7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XG4gICAgdmFyIHByb3RvdHlwZSA9IG9iamVjdChzdXBlclR5cGUucHJvdG90eXBlKTtcbiAgICBwcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJUeXBlO1xuICAgIHN1YlR5cGUucHJvdG90eXBlID0gcHJvdG90eXBlO1xufVxuXG5mdW5jdGlvbiBpbmhlcml0KHN1YlR5cGUsIHN1cGVyVHlwZSkge1xuICAgIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKTtcbiAgICBzdWJUeXBlLnN1cGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdXBlclR5cGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBoYXNQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB7XG4gICAgdmFyIGtleSwga2V5cyA9IHByb3BlcnR5LnNwbGl0KCcuJyk7XG5cbiAgICB3aGlsZSAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmICghaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXRba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNPYmplY3QodGFyZ2V0KSAmJiB0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5cy5zaGlmdCgpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgIHZhciBrZXksIGtleXMgPSBwcm9wZXJ0eS5zcGxpdCgnLicpO1xuXG4gICAgd2hpbGUgKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZighaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXRba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHZhciBrZXksIGtleXMgPSBwcm9wZXJ0eS5zcGxpdCgnLicpO1xuXG4gICAgd2hpbGUgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICBpZiAoIWlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0W2tleV07XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0KCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2gsIG1hdGNoVGV4dCwgaW5kZXgsIHJlc3VsdCA9ICcnLCB0ZXh0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICBwYXR0ZXJuID0gL1xceyhcXGQrKVxcfS9nLCBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcblxuICAgIHdoaWxlIChtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KSkge1xuICAgICAgICBtYXRjaFRleHQgPSBtYXRjaFswXTtcbiAgICAgICAgaW5kZXggPSBOdW1iZXIucGFyc2VJbnQobWF0Y2hbMV0pICsgMTtcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSBpbmRleCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmb3JtYXQgaXRlbSAnICsgaW5kZXggKyAnaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KSArIGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgIH1cblxuICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sKSB7XG4gICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvJmd0Oy9nLCAnPicpLnJlcGxhY2UoLyZsdDsvZywgJzwnKS5yZXBsYWNlKC8mYW1wOy9nLCAnJicpLnJlcGxhY2UoLyZxdW90ZTsvZywgJycpO1xufVxuXG5leHBvcnQge1xuICAgIGlzVW5kZWZpbmVkLFxuICAgIGlzRGVmaW5lZCxcbiAgICBpc09iamVjdCxcbiAgICBpc0JsYW5rT2JqZWN0LFxuICAgIGlzTnVtYmVyLFxuICAgIGlzRGF0ZSxcbiAgICBpc0Z1bmN0aW9uLFxuICAgIGlzUmVnRXhwLFxuICAgIGlzQm9vbGVhbixcbiAgICBpc0FycmF5LFxuICAgIGlzU3RyaW5nLFxuICAgIGlzRm9ybURhdGEsXG4gICAgdG9OdW1iZXIsXG4gICAgbG93ZXJjYXNlLFxuICAgIHVwcGVyY2FzZSxcbiAgICBjb252ZXJ0VG9IdW1wTmFtZSxcbiAgICBjb252ZXJ0RnJvbUh1bXBOYW1lLFxuICAgIGNvcHksXG4gICAgZXh0ZW5kLFxuICAgIG1lcmdlLFxuICAgIGZvckVhY2gsXG4gICAgc29tZSxcbiAgICByZW1vdmUsXG4gICAgY29uY2F0LFxuICAgIG9yZGVyQnksXG4gICAgb3JkZXJCeURlc2NlbmRpbmcsXG4gICAgb2JqZWN0LFxuICAgIGluaGVyaXQsXG4gICAgaGFzUHJvcGVydHksXG4gICAgZ2V0UHJvcGVydHksXG4gICAgc2V0UHJvcGVydHksXG4gICAgZm9ybWF0LFxuICAgIGVzY2FwZUh0bWxcbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi9kb20nO1xyXG5pbXBvcnQgeyBNX0NNUF9DTEFTUyB9IGZyb20gJy4uL2Nzcyc7XHJcbmltcG9ydCB7IGlzTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xyXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XHJcbmltcG9ydCB7IE9ic2VydmVyLCBoYW5kbGVyIH0gZnJvbSAnLi4vb2JzZXJ2ZXInO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL3JlbmRlcic7XHJcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XHJcbmltcG9ydCB7IEV2YWx1YXRvciB9IGZyb20gJy4uL2V4cCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50Q29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgdGhpcy4kJHZlbG0gPSBudWxsO1xyXG4gICAgdGhpcy4kJHBhcmVudCA9IG51bGw7XHJcbiAgICB0aGlzLiQkY2hpbGRyZW4gPSBbXTtcclxuICAgIHRoaXMuJCRtYWluVmlldyA9IG51bGw7XHJcbiAgICB0aGlzLiRwYXJzZXIgPSBuZXcgUGFyc2VyKHRoaXMpO1xyXG4gICAgdGhpcy4kb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICB0aGlzLiRkYXRhID0gdXRpbHMubWVyZ2UodGhpcy4kJG1ldGFkYXRhLCBkYXRhKTtcclxuICAgIHRoaXMuJGNvbnRhaW5lciA9IHRoaXMuJG1ha2VDb250YWluZXIoKTtcclxuICAgIHRoaXMuc2xvdHMgPSB7fTtcclxuICAgIHRoaXMuZXZlbnRzID0ge307XHJcbiAgICB0aGlzLnByb3BzID0gdGhpcy4kZGVsZWdhdGUoe30pO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuJGRlbGVnYXRlKHt9KTtcclxuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcclxuICAgIGdldCAkaW5qZWN0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIGluamVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgICRkZWxlZ2F0ZSh0YXJnZXQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHRhcmdldCwgaGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgJHNldFNsb3Qoc2xvdHMpIHtcclxuICAgICAgICB0aGlzLnNsb3RzID0gc2xvdHMgfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgJHNlckNvbnRhaW5lcihlbG0pIHtcclxuICAgICAgICB0aGlzLiRjb250YWluZXIgPSBlbG07XHJcbiAgICB9XHJcblxyXG4gICAgJHNldFN0YXRlKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuJGRlbGVnYXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2V0UHJvcHMocHJvcHMpIHtcclxuICAgICAgICB0aGlzLnByb3BzID0gdGhpcy4kZGVsZWdhdGUocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICBjb21wb25lbnRDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgICRtYWtlQ29udGFpbmVyKCkge1xyXG4gICAgICAgIHZhciBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHV0aWxzLmNvbnZlcnRGcm9tSHVtcE5hbWUodGhpcy4kZGF0YS5rZXksICctJykpO1xyXG4gICAgICAgIGRvbS5hZGRDbGFzcyhlbG0sIE1fQ01QX0NMQVNTKTtcclxuICAgICAgICByZXR1cm4gZWxtO1xyXG4gICAgfVxyXG5cclxuICAgICRoYXNQcm9wZXJ0eShrZXkpIHtcclxuICAgICAgICByZXR1cm4gdXRpbHMuaGFzUHJvcGVydHkodGhpcy5wcm9wcywga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAkZ2V0UHJvcGVydHkoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmdldFByb3BlcnR5KHRoaXMucHJvcHMsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNldFByb3BlcnR5KGtleSwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLnByb3BzLCBrZXkpO1xyXG5cclxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMucHJvcHMsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2VkICYmIHRoaXMub25Qcm9wZXJ0eUNoYW5nZWQoa2V5LCB2YWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkaGFzTWVzc2FnZShrZXkpIHtcclxuICAgICAgICByZXR1cm4gdXRpbHMuaGFzUHJvcGVydHkodGhpcy5ldmVudHMsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgJGJpbmQoa2V5LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLmV2ZW50cywga2V5KTtcclxuXHJcbiAgICAgICAgaWYgKGlzTWVzc2FnZShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlLm9uKGhhbmRsZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ1wiezB9XCIgaXMgbm90IGEgdmFsaWQgZXZlbnQnLCBrZXkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJHVuYmluZChrZXksIGhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgbWVzc2FnZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXkpO1xyXG5cclxuICAgICAgICBpZiAoaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uub2ZmKGhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkd2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kb2JzZXJ2ZXIud2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpO1xyXG4gICAgfVxyXG5cclxuICAgICR3YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kb2JzZXJ2ZXIud2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKTtcclxuICAgIH1cclxuXHJcbiAgICAkZXZhbChleHAsIGxvY2Fscykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRXZhbHVhdG9yKHRoaXMsIHtsb2NhbHM6IGxvY2Fsc30pLmV2YWx1YXRlKGV4cCk7XHJcbiAgICB9XHJcblxyXG4gICAgJGFzc2lnbihleHAsIHZhbHVlLCBsb2NhbHMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEV2YWx1YXRvcih0aGlzLCB7bG9jYWxzOiBsb2NhbHN9KS5hc3NpZ24oZXhwLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgJGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gdGhpcy4kZGF0YTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRhdGEudGVtcGxhdGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnRlbXBsYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRhdGEudGVtcGxhdGVJZCkpIHtcclxuICAgICAgICAgICAgdmFyIGVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEudGVtcGxhdGVJZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbG0uaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgJHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLiRnZXRUZW1wbGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLiQkbWFpblZpZXcgPSBuZXcgUmVuZGVyZXIodGhpcykucmVuZGVyKHRlbXBsYXRlLCB0aGlzLiRjb250YWluZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmFmdGVyVmlld1JlbmRlcmVkICYmIHRoaXMuYWZ0ZXJWaWV3UmVuZGVyZWQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtYWluVmlldztcclxuICAgIH1cclxuXHJcbiAgICAkbW91bnQoc2VsZWN0b3JPckVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgZWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJGNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgJHVubW91bnQoKSB7XHJcbiAgICAgICAgZG9tLnJlbW92ZUVsZW1lbnQodGhpcy4kY29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAkYXBwZW5kQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICB0aGlzLiQkY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgY2hpbGQuJCRwYXJlbnQgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgICRyZW1vdmVDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJCRjaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLiQkY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgY2hpbGQuJCRwYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLiR1bm1vdW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMuJG9ic2VydmVyLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy4kJG1haW5WaWV3ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy4kJG1haW5WaWV3LmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuJCRwYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLiQkcGFyZW50LiRyZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vZG9tJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IE1fSElERV9DTEFTUyB9IGZyb20gJy4uL2Nzcyc7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9yZW5kZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlQ29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuJCRzY29wZSA9IG51bGw7XG4gICAgdGhpcy4kJHZhdHRyID0gbnVsbDtcbiAgICB0aGlzLiRwcmlvcml0eSA9IDk7XG4gICAgLy8gYmluZGluZyB0ZXh0IGlzIGEgYXNzaWdubWVudFxuICAgIHRoaXMuJGFzc2lnbm1lbnQgPSBmYWxzZTtcbiAgICB0aGlzLiRwbGFjZWhvbGRlciA9IG51bGw7XG4gICAgdGhpcy4kZGF0YSA9IHV0aWxzLm1lcmdlKHRoaXMuJCRtZXRhZGF0YSwgZGF0YSk7XG4gICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcywgdGhpcy4kZGF0YSk7XG59XG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUge1xuICAgIGdldCAka2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGFkYXRhLmtleTtcbiAgICB9XG5cbiAgICBnZXQgJG5hbWVzcGFjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhZGF0YS5uYW1lc3BhY2U7XG4gICAgfVxuXG4gICAgZ2V0ICRzY29wZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzY29wZTtcbiAgICB9XG5cbiAgICBnZXQgJHJlbmRlcmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHNjb3BlLiRyZW5kZXJlcjtcbiAgICB9XG5cbiAgICBnZXQgJGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkdmF0dHIudmVsbS5lbG07XG4gICAgfVxuXG4gICAgZ2V0ICRiaW5kaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLm5vZGVEYXRhLmJpbmRpbmc7XG4gICAgfVxuXG4gICAgZ2V0ICRjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkdmF0dHIudmVsbS5ub2RlRGF0YS5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBkaXJlY3RpdmVDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH1cblxuICAgIC8vIHdoaWxlIGNvbXBpbGluZ1xuICAgICRjb21waWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkNvbXBpbGUgJiYgdGhpcy5vbkNvbXBpbGUodGhpcy4kJHZhdHRyLnZlbG0sIHRoaXMuJCR2YXR0cik7XG4gICAgfVxuXG4gICAgJGxpbmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uTGluayAmJiB0aGlzLm9uTGluayh0aGlzLiRzY29wZSk7XG4gICAgfVxuXG4gICAgLy8gYmVmb3JlIGxpbmtpbmdcbiAgICAvLyAkcHJlbGluaygpIHtcbiAgICAvLyAgICAgdGhpcy5iZWZvcmVMaW5rICYmIHRoaXMuYmVmb3JlTGluaygpO1xuICAgIC8vIH1cblxuICAgIC8vIGFmdGVyIGxpbmtpbmdcbiAgICAkcG9zdGxpbmsoKSB7XG4gICAgICAgIHRoaXMuYWZ0ZXJMaW5rICYmIHRoaXMuYWZ0ZXJMaW5rKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuJGJpbmRpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kY2hhbmdlKHRoaXMuJGJpbmRpbmcudmFsdWUsIHRoaXMuJGJpbmRpbmcub2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhlIGlucHV0IHZhbHVlIGlzIGNoYW5nZWRcbiAgICAkY2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlICYmIHRoaXMub25DaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAkJHNlYXJjaERpcmVjdGl2ZSh2ZWxtLCBrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICBpZighbmFtZXNwYWNlKXtcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IHRoaXMuJG5hbWVzcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSB2ZWxtLm5vZGVEYXRhLmRpcmVjdGl2ZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS4ka2V5ID09PSBrZXkgJiYgaXRlbS4kbmFtZXNwYWNlID09PSBuYW1lc3BhY2UpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQubGVuZ3RoID8gcmVzdWx0WzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICAkc2Vla0RpcmVjdGl2ZShrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgdmVsbSA9IHRoaXMuJCR2YXR0ci52ZWxtO1xuICAgICAgICByZXR1cm4gdGhpcy4kJHNlYXJjaERpcmVjdGl2ZSh2ZWxtLCBrZXksIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgJHNlZWtVcERpcmVjdGl2ZShrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgdmVsbSA9IHRoaXMuJCR2YXR0ci52ZWxtLnBhcmVudE5vZGU7XG4gICAgICAgIHJldHVybiB0aGlzLiQkc2VhcmNoRGlyZWN0aXZlKHZlbG0sIGtleSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICAkcmVtb3ZlRWxlbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kcGxhY2Vob2xkZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigneW91IG11c3QgZGVmaW5lIGVsZW1lbnQgcGxhY2Vob2xkZXIhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb20ucmVwbGFjZUVsZW1lbnQodGhpcy4kZWxlbWVudCwgdGhpcy4kcGxhY2Vob2xkZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGFwcGVuZEVsZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLiRlbGVtZW50LnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuJHBsYWNlaG9sZGVyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3lvdSBtdXN0IGRlZmluZSBlbGVtZW50IHBsYWNlaG9sZGVyIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9tLnJlcGxhY2VFbGVtZW50KHRoaXMuJHBsYWNlaG9sZGVyLCB0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRoaWRlRWxlbWVudCgpIHtcbiAgICAgICAgZG9tLmFkZENsYXNzKHRoaXMuJGVsZW1lbnQsIE1fSElERV9DTEFTUyk7XG4gICAgfVxuXG4gICAgJHNob3dFbGVtZW50KCkge1xuICAgICAgICBkb20ucmVtb3ZlQ2xhc3ModGhpcy4kZWxlbWVudCwgTV9ISURFX0NMQVNTKTtcbiAgICB9XG5cbiAgICAkZXZhbChleHAsIGxvY2Fscykge1xuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLiRiaW5kaW5nLmxvY2FscywgbG9jYWxzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlLiRldmFsKGV4cCwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICAkYXNzaWduKGV4cCwgdmFsdWUsIGxvY2Fscykge1xuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLiRiaW5kaW5nLmxvY2FscywgbG9jYWxzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlLiRhc3NpZ24oZXhwLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgJHJlbmRlcih0ZW1wbGF0ZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVuZGVyZXIodGhpcy4kc2NvcGUsIGxvY2FscykucmVuZGVyKHRlbXBsYXRlKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgcm9sZXMgfSBmcm9tICcuL3JvbGVzJztcbmltcG9ydCB7IENvbXBvbmVudCwgY29tcG9uZW50Q29uc3RydWN0b3IgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIGRpcmVjdGl2ZUNvbnN0cnVjdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmlsdGVyLCBmaWx0ZXJDb25zdHJ1Y3RvciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IFNlcnZpY2UsIHNlcnZpY2VDb25zdHJ1Y3RvciB9IGZyb20gJy4vc2VydmljZSc7XG5cbnZhciBuYW1lUGF0dGVybiA9IC9eW2Etel1bYS16QS1aMC05XSokLztcblxuLy8gc3RhcnQgbWFrZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBiZWNhdXNlIGNsYXNzIGNhbid0IGJlIGNhbGwgd2l0aG91dCBuZXcuXG52YXIgY29tcG9uZW50Q2xhc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBDb21wb25lbnQobWV0YWRhdGEpIHtcbiAgICAgICAgY29tcG9uZW50Q29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XG4gICAgfTtcbn0pKCk7XG5jb21wb25lbnRDbGFzcy5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG52YXIgZGlyZWN0aXZlQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBEaXJlY3RpdmUobWV0YWRhdGEpIHtcbiAgICAgICAgZGlyZWN0aXZlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XG4gICAgfTtcbn0pKCk7XG5kaXJlY3RpdmVDbGFzcy5wcm90b3R5cGUgPSBEaXJlY3RpdmUucHJvdG90eXBlO1xuXG52YXIgZmlsdGVyQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBGaWx0ZXIobWV0YWRhdGEpIHtcbiAgICAgICAgZmlsdGVyQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XG4gICAgfTtcbn0pKCk7XG5maWx0ZXJDbGFzcy5wcm90b3R5cGUgPSBGaWx0ZXIucHJvdG90eXBlO1xuXG52YXIgc2VydmljZUNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gU2VydmljZShtZXRhZGF0YSkge1xuICAgICAgICBzZXJ2aWNlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSlcbiAgICB9O1xufSkoKTtcbnNlcnZpY2VDbGFzcy5wcm90b3R5cGUgPSBTZXJ2aWNlLnByb3RvdHlwZTtcbi8vIGVuZCBvZiBtYWtlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGJlY2F1c2UgY2xhc3MgY2FuJ3QgYmUgY2FsbCB3aXRob3V0IG5ldy5cblxuLy8gY29uc3RydWN0b3IgZmFjdG9yeSwgY3JlYXRlIGNvbnN0cnVjdG9yIGZvciBjb21wb25lbnQsIGRpcmVjdGl2ZSwgZmlsdGVyIGFuZCBzZXJ2aWNlXG5leHBvcnQgY2xhc3MgRmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICByZW5hbWUocm9sZUlkLCBuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lUGF0dGVybi50ZXN0KG5hbWUpKSB7XG4gICAgICAgICAgICB2YXIgbmV3TmFtZSA9IHV0aWxzLnVwcGVyY2FzZShuYW1lWzBdKTtcblxuICAgICAgICAgICAgaWYgKG5hbWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gbmFtZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAocm9sZUlkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5jb21wb25lbnQ6XG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0NvbXBvbmVudCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuZGlyZWN0aXZlOlxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdEaXJlY3RpdmUnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmZpbHRlcjpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnRmlsdGVyJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5zZXJ2aWNlOlxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdTZXJ2aWNlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdOYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG5hbWUgKyAnaXMgbm90IGEgdmFsaWQgbmFtZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFrZShyb2xlSWQsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yLCBjb25zdHJ1Y3Rvck5hbWUgPSB0aGlzLnJlbmFtZShyb2xlSWQsIG5hbWUpLFxuICAgICAgICAgICAgb25Db25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uc3RydWN0b3Iuc3VwZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yLnN1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uZmlnLmNvbnN0cnVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmNvbnN0cnVjdC5jYWxsKHRoaXMsIE1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgRnVuY3Rpb24oJ29uQ29uc3RydWN0JywgJ1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbiAnICsgY29uc3RydWN0b3JOYW1lICsgJygpe29uQ29uc3RydWN0LmNhbGwodGhpcyk7fTsnKShvbkNvbnN0cnVjdCk7XG5cbiAgICAgICAgLy8gZXh0ZW5kcyBjbGFzc1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25maWcuZXh0ZW5kcykpIHtcbiAgICAgICAgICAgIHV0aWxzLmluaGVyaXQoY29uc3RydWN0b3IsIGNvbmZpZy5leHRlbmRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBtZXRob2RzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBjb25maWcpIHtcbiAgICAgICAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkgIT09ICdleHRlbmRzJyAmJiBrZXkgIT09ICdjb25zdHJ1Y3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0b3JlIG1ldGFkYXRhIHRvIHByb3RvdHlwZVxuICAgICAgICBtZXRhZGF0YS5rZXkgPSBuYW1lO1xuICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICB9XG5cbiAgICBtYWtlQ29tcG9uZW50KG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgICAgICAgZXh0ZW5kczogY29tcG9uZW50Q2xhc3NcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5jb21wb25lbnQsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIG1ha2VEaXJlY3RpdmUobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBleHRlbmRzOiBkaXJlY3RpdmVDbGFzc1xuICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmRpcmVjdGl2ZSwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgbWFrZUZpbHRlcihuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGV4dGVuZHM6IGZpbHRlckNsYXNzXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuZmlsdGVyLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBtYWtlU2VydmljZShuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGV4dGVuZHM6IHNlcnZpY2VDbGFzc1xuICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLnNlcnZpY2UsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIH1cbn1cblxuZXhwb3J0IHZhciBmYWN0b3J5ID0gbmV3IEZhY3RvcnkoKTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuJGRhdGEgPSB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJGRhdGEpO1xufVxuXG5leHBvcnQgY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vdmlldy1hcGknOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgcm9sZXMgfSBmcm9tICcuL3JvbGVzJztcclxuaW1wb3J0IHsgaXNDb21wb25lbnQsIGlzRGlyZWN0aXZlLCBpc1NlcnZpY2UsIGlzRmlsdGVyIH0gZnJvbSAnLi92aWV3LWFwaSc7XHJcblxyXG52YXIga2V5UGF0dGVybiA9IC9eW2Etel1bYS16QS1aMC05XSokLztcclxudmFyIGdsb2JhbE5hbWVzcGFjZSA9ICdhdXRvbWF0ZSc7XHJcblxyXG5jbGFzcyBOYW1lc3BhY2VDb250YWluZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0NvbnRhaW5lciA9IHt9O1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VDb250YWluZXIgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2xhc3NDb250YWluZXJbcm9sZUlkXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NDb250YWluZXJbcm9sZUlkXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YW5jZUNvbnRhaW5lcihyb2xlSWQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VDb250YWluZXJbcm9sZUlkXSkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VDb250YWluZXJbcm9sZUlkXTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gbWV0YWRhdGEgZXhhbXBsZVxyXG4vLyB7IGtleTogJycsIG5hbWVzcGFjZTogJycsIGV4dGVuZHM6IG51bGwsIGNvbnN0cnVjdDogZm4sIG1ldGhvZHM6IHt9IH1cclxuZXhwb3J0IGNsYXNzIEluamVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubnNDb250YWluZXIgPSB7fTtcclxuICAgICAgICB0aGlzLnNlcnZpY2VTdGFjayA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hbWVzcGFjZUNvbnRhaW5lcihuYW1lc3BhY2UpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobmFtZXNwYWNlKSkge1xyXG4gICAgICAgICAgICBuYW1lc3BhY2UgPSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5uc0NvbnRhaW5lcltuYW1lc3BhY2VdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5zQ29udGFpbmVyW25hbWVzcGFjZV0gPSBuZXcgTmFtZXNwYWNlQ29udGFpbmVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5zQ29udGFpbmVyW25hbWVzcGFjZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25hbWVzcGFjZSBpcyByZXF1aXJlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0tleU5hbWUoa2V5KSB7XHJcbiAgICAgICAgaWYgKCFrZXlQYXR0ZXJuLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSB2YWxpZCBuYW1lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKHJvbGVJZCwga2V5LCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMuY2hlY2tLZXlOYW1lKGtleSk7XHJcblxyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2U7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZUNvbnRhaW5lciA9IHRoaXMuZ2V0TmFtZXNwYWNlQ29udGFpbmVyKG5hbWVzcGFjZSk7XHJcbiAgICAgICAgdmFyIGNsYXNzQ29udGFpbmVyID0gbmFtZXNwYWNlQ29udGFpbmVyLmdldENsYXNzQ29udGFpbmVyKHJvbGVJZCk7XHJcblxyXG4gICAgICAgIGlmIChuYW1lc3BhY2UgPT09IGdsb2JhbE5hbWVzcGFjZSAmJiByb2xlSWQgPT09IHJvbGVzLmRpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICBrZXkgPSB1dGlscy5mb3JtYXQoJ217MH0nLCB1dGlscy51cHBlcmNhc2Uoa2V5WzBdKSArIChrZXkubGVuZ3RoID4gMSA/IGtleS5zdWJzdHIoMSkgOiAnJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsYXNzQ29udGFpbmVyW2tleV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICcgaXMgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBuYW1lc3BhY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xhc3NDb250YWluZXJba2V5XSA9IGNvbnN0cnVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQ29tcG9uZW50KGtleSwgY29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmNvbXBvbmVudCwga2V5LCBjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuZGlyZWN0aXZlLCBrZXksIGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckZpbHRlcihrZXksIGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5maWx0ZXIsIGtleSwgY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyU2VydmljZShrZXksIGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5zZXJ2aWNlLCBrZXksIGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXMocm9sZUlkLCBrZXksIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlSWQsIGtleSwgbmFtZXNwYWNlKSAhPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0NvbXBvbmVudChrZXksIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5jb21wb25lbnQsIGtleSwgbmFtZXNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNEaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZGlyZWN0aXZlLCBrZXksIG5hbWVzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzRmlsdGVyKGtleSwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLmZpbHRlciwga2V5LCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc1NlcnZpY2Uoa2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuc2VydmljZSwga2V5LCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZyb21HbG9iYWxOYW1lc3BhY2Uocm9sZUlkLCBrZXkpIHtcclxuICAgICAgICB2YXIgbmFtZXNwYWNlQ29udGFpbmVyID0gdGhpcy5nZXROYW1lc3BhY2VDb250YWluZXIoZ2xvYmFsTmFtZXNwYWNlKTtcclxuICAgICAgICB2YXIgY2xhc3NDb250YWluZXIgPSBuYW1lc3BhY2VDb250YWluZXIuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcclxuICAgICAgICByZXR1cm4gY2xhc3NDb250YWluZXJba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQocm9sZUlkLCBrZXksIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2VDb250YWluZXIgPSB0aGlzLmdldE5hbWVzcGFjZUNvbnRhaW5lcihuYW1lc3BhY2UpO1xyXG4gICAgICAgIHZhciBjbGFzc0NvbnRhaW5lciA9IG5hbWVzcGFjZUNvbnRhaW5lci5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xyXG4gICAgICAgIHJldHVybiBjbGFzc0NvbnRhaW5lcltrZXldIHx8IHRoaXMuZ2V0RnJvbUdsb2JhbE5hbWVzcGFjZShyb2xlSWQsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tcG9uZW50KGtleSwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLmNvbXBvbmVudCwga2V5LCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpcmVjdGl2ZShrZXksIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5kaXJlY3RpdmUsIGtleSwgbmFtZXNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGaWx0ZXIoa2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuZmlsdGVyLCBrZXksIG5hbWVzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VydmljZShrZXksIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5zZXJ2aWNlLCBrZXksIG5hbWVzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJbnN0YW5jZShyb2xlSWQsIGluc3RhbmNlKSB7XHJcbiAgICAgICAgdmFyIHZhbGlkYXRvciwgcm9sZTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChyb2xlSWQpIHtcclxuICAgICAgICAgICAgY2FzZSByb2xlcy5jb21wb25lbnQ6XHJcbiAgICAgICAgICAgICAgICByb2xlID0gJ0NvbXBvbmVudCc7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IgPSBpc0NvbXBvbmVudDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHJvbGVzLmRpcmVjdGl2ZTpcclxuICAgICAgICAgICAgICAgIHJvbGUgPSAnRGlyZWN0aXZlJztcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvciA9IGlzRGlyZWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Ugcm9sZXMuc2VydmljZTpcclxuICAgICAgICAgICAgICAgIHJvbGUgPSAnU2VydmljZSc7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IgPSBpc1NlcnZpY2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSByb2xlcy5maWx0ZXI6XHJcbiAgICAgICAgICAgICAgICByb2xlID0gJ0ZpbHRlcic7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IgPSBpc0ZpbHRlcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbGlkYXRvciAmJiAhdmFsaWRhdG9yKGluc3RhbmNlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCdvYmplY3QgaXMgYSBpbnN0YW5jZSBvZiB7MH0nLCByb2xlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVDb25zdHJ1Y3Rvcihyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcjtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGtleU9yQ29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXQocm9sZUlkLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ2NhbiBub3QgZmluZCBcInswfVwiIGluIG5hbWVzcGFjZSBcInsxfVwiJywga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzRnVuY3Rpb24oa2V5T3JDb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBrZXlPckNvbnN0cnVjdG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwYXJhbWV0ZXInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUocm9sZUlkLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcclxuICAgICAgICB2YXIgQ2xzID0gdGhpcy5yZXNvbHZlQ29uc3RydWN0b3Iocm9sZUlkLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDbHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0luc3RhbmNlKHJvbGVJZCwgaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU2luZ2xldG9uKHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlLFxyXG4gICAgICAgICAgICBDbHMgPSB0aGlzLnJlc29sdmVDb25zdHJ1Y3Rvcihyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSksXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IENscy5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2U7XHJcblxyXG4gICAgICAgIHZhciBuYW1lc3BhY2VDb250YWluZXIgPSB0aGlzLmdldE5hbWVzcGFjZUNvbnRhaW5lcihuYW1lc3BhY2UpLFxyXG4gICAgICAgICAgICBjb250YWluZXIgPSBuYW1lc3BhY2VDb250YWluZXIuZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZUlkKSxcclxuICAgICAgICAgICAgcmVzdWx0ID0gY29udGFpbmVyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gaW5zdGFuY2VvZiBDbHM7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IHJlc3VsdFswXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBDbHMoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0luc3RhbmNlKHJvbGVJZCwgaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICBjb250YWluZXIucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ29tcG9uZW50KGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5jb21wb25lbnQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRGlyZWN0aXZlKGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5kaXJlY3RpdmUsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRmlsdGVyKGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNpbmdsZXRvbihyb2xlcy5maWx0ZXIsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU2VydmljZShrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcclxuICAgICAgICB2YXIgU2VydmljZSA9IHRoaXMucmVzb2x2ZUNvbnN0cnVjdG9yKHJvbGVzLnNlcnZpY2UsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XHJcblxyXG4gICAgICAgIGlmIChTZXJ2aWNlLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5vblNoYXJlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUocm9sZXMuc2VydmljZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTaW5nbGV0b24ocm9sZXMuc2VydmljZSwgU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXh0cmFjdE5zQW5kS2V5KG5hbWUpIHtcclxuICAgICAgICB2YXIgc2VnbWVudHMgPSBuYW1lLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGtleTogc2VnbWVudHMucG9wKCksXHJcbiAgICAgICAgICAgIG5zOiBzZWdtZW50cy5sZW5ndGggPiAwID8gc2VnbWVudHMuam9pbignLicpIDogJycsXHJcbiAgICAgICAgICAgIGNsczogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VGdWxsTmFtZShuYW1lLCB1c2luZykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgcmVzdWx0ID0gdGhpcy5leHRyYWN0TnNBbmRLZXkobmFtZSk7XHJcblxyXG4gICAgICAgIGlmICh1c2luZykge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0Lm5zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNpbmcuaGFzT3duUHJvcGVydHkocmVzdWx0Lm5zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlcGxhY2UgYWxpYXMgd2l0aCByZWFsIG5hbWVzcGFjZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5ucyA9IHVzaW5nW3Jlc3VsdC5uc107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNpbmcuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB1c2luZ1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gcmVhbCBuYW1lc3BhY2UgYW5kIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzZWxmLmV4dHJhY3ROc0FuZEtleSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHJlYWwgY2xhc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNscyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZUNvbnN0cnVjdG9yKGdldHRlciwgbmFtZSwgdXNpbmcsIGRlZmF1bHROcykge1xyXG4gICAgICAgIHZhciBpZGVudGlmaWVyID0gdGhpcy5wYXJzZUZ1bGxOYW1lKG5hbWUsIHVzaW5nKTtcclxuXHJcbiAgICAgICAgaWYgKGlkZW50aWZpZXIuY2xzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpZGVudGlmaWVyLmNscztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzW2dldHRlcl0oaWRlbnRpZmllci5rZXksIGlkZW50aWZpZXIubnMgfHwgZGVmYXVsdE5zKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZUNvbXBvbmVudChuYW1lLCB1c2luZywgZGVmYXVsdE5zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VDb25zdHJ1Y3RvcignZ2V0Q29tcG9uZW50JywgbmFtZSwgdXNpbmcsIGRlZmF1bHROcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VEaXJlY3RpdmUobmFtZSwgdXNpbmcsIGRlZmF1bHROcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlQ29uc3RydWN0b3IoJ2dldERpcmVjdGl2ZScsIG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlU2VydmljZShuYW1lLCB1c2luZywgZGVmYXVsdE5zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VDb25zdHJ1Y3RvcignZ2V0U2VydmljZScsIG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRmlsdGVyKG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUNvbnN0cnVjdG9yKCdnZXRGaWx0ZXInLCBuYW1lLCB1c2luZywgZGVmYXVsdE5zKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmplY3RTZXJ2aWNlcyhpbnN0YW5jZSwgbWV0YWRhdGEsIGNoZWNrTG9vcERlcGVuZGVuY3kpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIHNlcnZpY2VGdWxsTmFtZSwgaGFzTG9vcERlcGVuZGVuY3kgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrTG9vcERlcGVuZGVuY3kpIHtcclxuICAgICAgICAgICAgLy8gY3JlYXRpbmcgYSBzZXJ2aWNlIGluc3RhbmNlIGF0IHRoZSBtb21lbnRcclxuICAgICAgICAgICAgc2VydmljZUZ1bGxOYW1lID0gdXRpbHMuZm9ybWF0KCd7MH0uezF9JywgdXRpbHMubG93ZXJjYXNlKG1ldGFkYXRhLm5hbWVzcGFjZSksIG1ldGFkYXRhLmtleSk7XHJcbiAgICAgICAgICAgIGhhc0xvb3BEZXBlbmRlbmN5ID0gdGhpcy5zZXJ2aWNlU3RhY2suaW5kZXhPZihzZXJ2aWNlRnVsbE5hbWUpICE9PSAtMTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VydmljZVN0YWNrLnB1c2goc2VydmljZUZ1bGxOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChoYXNMb29wRGVwZW5kZW5jeSkge1xyXG4gICAgICAgICAgICAgICAgLy8gb2NjdXJzIGxvb3AgZGVwZW5kZW5jeVxyXG4gICAgICAgICAgICAgICAgdmFyIGVycm9yID0gdXRpbHMuZm9ybWF0KCdMb29wIGRlcGVuZGVuY3k6IHswfScsIHRoaXMuc2VydmljZVN0YWNrLmpvaW4oJyAtPiAnKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGVhciBzZXJ2aWNlIGRlcGVuZGVuY3kgc3RhY2tcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVN0YWNrLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICAvLyB0aHJvdyBlcnJvclxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1ldGFkYXRhICYmIHV0aWxzLmlzT2JqZWN0KG1ldGFkYXRhLmluamVjdCkpIHtcclxuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChtZXRhZGF0YS5pbmplY3QsIGZ1bmN0aW9uIChzZXJ2aWNlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzZXJ2aWNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UgPSBzZWxmLnBhcnNlU2VydmljZShzZXJ2aWNlLCBtZXRhZGF0YS51c2luZywgbWV0YWRhdGEubmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGluc3RhbmNlW2tleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2Uoc2VydmljZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoZWNrTG9vcERlcGVuZGVuY3kpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlU3RhY2sucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGluamVjdG9yID0gbmV3IEluamVjdG9yKCk7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBwYXJzZUV4cCB9IGZyb20gJy4uL2V4cCc7XHJcbmltcG9ydCB7IHBhcnNlVHBsIH0gZnJvbSAnLi4vdHBsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xyXG4gICAgZ2V0IGluamVjdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLiRpbmplY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdXNpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuJGRhdGEudXNpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NvcGUpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtcyA9IHt9O1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHtcclxuICAgICAgICAgICAgY29tcG9uZW50czoge30sXHJcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IHt9LFxyXG4gICAgICAgICAgICBmaWx0ZXJzOiB7fVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VFeHByZXNzaW9uKGV4cCkge1xyXG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5wcm9ncmFtc1tleHBdO1xyXG5cclxuICAgICAgICBpZiAoIXByb2dyYW0pIHtcclxuICAgICAgICAgICAgcHJvZ3JhbSA9IHBhcnNlRXhwKGV4cCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbXNbZXhwXSA9IHByb2dyYW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZVRlbXBsYXRlKHRwbCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZVRwbCh0cGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmUoc2VsZWN0b3IsIGJ1ZmZlciwgcGFyc2VyKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCwgZnVsbE5hbWUsIGRlZmF1bHROcyA9IHRoaXMuc2NvcGUuJGRhdGEubmFtZXNwYWNlO1xyXG5cclxuICAgICAgICBpZiAoYnVmZmVyW3NlbGVjdG9yXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IGJ1ZmZlcltzZWxlY3Rvcl07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZnVsbE5hbWUgPSB1dGlscy5jb252ZXJ0VG9IdW1wTmFtZShzZWxlY3RvciwgJy0nKTtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5pbmplY3RvcltwYXJzZXJdKGZ1bGxOYW1lLCB0aGlzLnVzaW5nLCBkZWZhdWx0TnMpO1xyXG4gICAgICAgICAgICBidWZmZXJbc2VsZWN0b3JdID0gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlQ29tcG9uZW50KHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZShzZWxlY3RvciwgdGhpcy50eXBlLmNvbXBvbmVudHMsICdwYXJzZUNvbXBvbmVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVEaXJlY3RpdmUoc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKHNlbGVjdG9yLCB0aGlzLnR5cGUuZGlyZWN0aXZlcywgJ3BhcnNlRGlyZWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzb2x2ZUZpbHRlcihzZWxlY3Rvcikge1xyXG4gICAgICAgIHZhciBmaWx0ZXIsIGZpbHRlckNscywgYnVmZmVyID0gdGhpcy5maWx0ZXJzO1xyXG5cclxuICAgICAgICBpZiAoYnVmZmVyW3NlbGVjdG9yXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZpbHRlciA9IGJ1ZmZlcltzZWxlY3Rvcl07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmlsdGVyQ2xzID0gdGhpcy5yZXNvbHZlKHNlbGVjdG9yLCB0aGlzLnR5cGUuZmlsdGVycywgJ3BhcnNlRmlsdGVyJyk7XHJcbiAgICAgICAgICAgIGZpbHRlciA9IHRoaXMuaW5qZWN0b3IuY3JlYXRlRmlsdGVyKGZpbHRlckNscyk7XHJcbiAgICAgICAgICAgIGJ1ZmZlcltzZWxlY3Rvcl0gPSBmaWx0ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgdmFyIHJvbGVzID0ge1xuICAgIGZpbHRlcjogMCxcbiAgICBzZXJ2aWNlOiAxLFxuICAgIGNvbXBvbmVudDogMixcbiAgICBkaXJlY3RpdmU6IDNcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2VDb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy4kZGF0YSA9IHV0aWxzLm1lcmdlKHRoaXMuJCRtZXRhZGF0YSwgZGF0YSk7XG4gICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcywgdGhpcy4kZGF0YSwgdHJ1ZSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHNlcnZpY2VDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vZG9tJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UnO1xuXG5mdW5jdGlvbiBuYW1lc3BhY2UobmFtZSkge1xuICAgIGZ1bmN0aW9uIG1lcmdlTWV0YWRhdGEobWV0YWRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIG5hbWVzcGFjZTogbmFtZVxuICAgICAgICB9LCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tcG9uZW50OiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50KGtleSwgY29uZmlnLCBtZXJnZU1ldGFkYXRhKG1ldGFkYXRhKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpcmVjdGl2ZTogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZShrZXksIGNvbmZpZywgbWVyZ2VNZXRhZGF0YShtZXRhZGF0YSkpO1xuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VydmljZShrZXksIGNvbmZpZywgbWVyZ2VNZXRhZGF0YShtZXRhZGF0YSkpO1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIoa2V5LCBjb25maWcsIG1lcmdlTWV0YWRhdGEobWV0YWRhdGEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICB2YXIgUm9vdCA9IGZhY3RvcnkubWFrZUNvbXBvbmVudCgnYXV0b21hdGVBcHAnLCBjb25maWcsIHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5hbWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGVsZW1lbnQuaW5uZXJIVE1MXG4gICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgdmFyIHJvb3QgPSBuZXcgUm9vdCgpO1xuXG4gICAgICAgICAgICBkb20uY2xlYXJDaGlsZHJlbk9mRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIHJvb3QuJHJlbmRlcigpLm1vdW50KGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50KGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZUNvbXBvbmVudChrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyQ29tcG9uZW50KGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gZGlyZWN0aXZlKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZURpcmVjdGl2ZShrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZUZpbHRlcihrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gc2VydmljZShrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VTZXJ2aWNlKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJTZXJ2aWNlKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gaXNDb21wb25lbnQoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBDb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0aXZlKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgRGlyZWN0aXZlO1xufVxuXG5mdW5jdGlvbiBpc0ZpbHRlcihpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIEZpbHRlcjtcbn1cblxuZnVuY3Rpb24gaXNTZXJ2aWNlKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgU2VydmljZTtcbn1cblxuZXhwb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRGlyZWN0aXZlLFxuICAgIEZpbHRlcixcbiAgICBTZXJ2aWNlLFxuICAgIGlzQ29tcG9uZW50LFxuICAgIGlzRGlyZWN0aXZlLFxuICAgIGlzRmlsdGVyLFxuICAgIGlzU2VydmljZSxcbiAgICBuYW1lc3BhY2UsXG4gICAgaW5qZWN0b3Jcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==