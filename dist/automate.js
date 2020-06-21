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
          var responseData = !config.responseType || config.responseType === 'text' ? xhr.responseText : xhr.response;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvbXBvbmVudC9zbG90LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvZXZlbnRzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9sb2NhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY3NzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvYmluZC1odG1sLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9oaWRlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9pZi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvcmVhZG9ubHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3MtZXZlbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3Mtb2RkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLW9kZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC1kZWZhdWx0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLXdoZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9hbmFseXNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXZhbHVhdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWxleGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtb3BlcmF0b3JzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2Fzc2lnbm1lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FzdC1ub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3QuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY2FsbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY29uZGl0aW9uYWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2lkZW50aWZpZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9saXRlcmFsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9sb2dpY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9tZW1iZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL29iamVjdC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3VuYXJ5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL29ic2VydmVyL2RlbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvYmluZGluZy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3JlbmRlci92aWV3LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3NlcnZpY2UvaHR0cC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9zZXJ2aWNlL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3NlcnZpY2UvaW5qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmF0dHIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZjbW50LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92ZWxtLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92bm9kZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdnRleHQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Z0eXBlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC90cGwtYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC90cGwtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWxleGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC90cGwtcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvY29tcG9uZW50LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvaW5qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9yb2xlcy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy92aWV3LWFwaS5qcyJdLCJuYW1lcyI6WyJTbG90Q29tcG9uZW50IiwiY29tcG9uZW50IiwibmFtZXNwYWNlIiwia2V5IiwicHJvcHMiLCJuYW1lIiwic2xvdHMiLCIkJHBhcmVudCIsInRlbXBsYXRlIiwiJCRtYWluVmlldyIsIlJlbmRlcmVyIiwicmVuZGVyIiwiJGNvbnRhaW5lciIsImRlc3Ryb3kiLCJDb21wb25lbnQiLCJpc01lc3NhZ2UiLCJvYmoiLCJNZXNzYWdlIiwiZXZlbnRzIiwicHJvcGVydHlDaGFuZ2VkIiwicmVmcmVzaFZpZXciLCJMb2NhbCIsImUiLCJlbG0iLCIkZXZlbnQiLCIkZWxlbWVudCIsImRhdGEiLCJoYW5kbGVycyIsImZuIiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsIkVycm9yIiwib2ZmIiwic3BsaWNlIiwic2NvcGUiLCJmb3JFYWNoIiwiaGFuZGxlciIsImNhbGwiLCJkb20iLCJNX0NNUF9DTEFTUyIsIk1fSElERV9DTEFTUyIsIm1ldGFkYXRhIiwidGFyZ2V0IiwicHJvdG90eXBlIiwiJCRtZXRhZGF0YSIsImluamVjdG9yIiwicmVnaXN0ZXJDb21wb25lbnQiLCJkaXJlY3RpdmUiLCJyZWdpc3RlckRpcmVjdGl2ZSIsImZpbHRlciIsInJlZ2lzdGVyRmlsdGVyIiwic2VydmljZSIsInJlZ2lzdGVyU2VydmljZSIsIkJpbmRIdG1sRGlyZWN0aXZlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJEaXJlY3RpdmUiLCJCaW5kRGlyZWN0aXZlIiwiaW5uZXJUZXh0IiwiSGlkZURpcmVjdGl2ZSIsIklmRGlyZWN0aXZlIiwiJHBsYWNlaG9sZGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVDb21tZW50IiwiTW9kZWxEaXJlY3RpdmUiLCJ2aWV3VmFsdWUiLCJtb2RlbFZhbHVlIiwicGFyc2VycyIsImZvcm1hdHRlcnMiLCJ2aWV3Q2hhbmdlTGlzdGVuZXJzIiwidmFsaWRhdG9ycyIsInN0YXR1cyIsImZlZWRiYWNrIiwicHJpc3RpbmUiLCJkaXJ0eSIsInZhbGlkIiwiaW52YWxpZCIsIm9wdGlvbnMiLCJjc3MiLCJjb21taXRNb2RlbFZhbHVlIiwiJHNjb3BlIiwic3RhdGUiLCIkY29tcG9uZW50IiwiJGJpbmQiLCJjb21taXRWaWV3VmFsdWUiLCJuZXd2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdWYWx1ZSIsInNlbGYiLCJ2YWxpZGF0b3IiLCJmb3JtYXR0ZXIiLCIkc2V0UHJvcGVydHkiLCJ1cGRhdGVFbG1Dc3NDbGFzcyIsIm1hcmtEaXJ0eVN0YXR1cyIsImxpc3RlbmVyIiwicGFyc2VyIiwiJGJpbmRpbmciLCJhc3NpZ24iLCJlbGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJSZXBlYXREaXJlY3RpdmUiLCJpdGVtRXhwIiwiaXRlbXNFeHAiLCJpdGVtVGVtcGxhdGUiLCJpdGVtVmlld3MiLCJNYXAiLCJ1bndhdGNoQ29sbGVjdGlvbiIsInZlbG0iLCJ2YXR0ciIsImFyZyIsIm5vZGVWYWx1ZSIsInBhdHRlcm4iLCJyZXN1bHQiLCJleGVjIiwicmVtb3ZlQXR0ciIsImdldE91dGVyVHBsIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaGVhZGVyIiwiZm9vdGVyIiwiYXBwZW5kQ2hpbGQiLCIkd2F0Y2hDb2xsZWN0aW9uIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIml0ZW1zIiwiJGV2YWwiLCJ1dGlscyIsIml0ZW0iLCJpdGVtVmlldyIsImdldFZpZXdGcm9tQnVmZmVyIiwibG9jYWxzIiwiJHJlbmRlciIsInNldFZpZXdUb0J1ZmZlciIsImNvbnRlbnQiLCJsaXN0IiwidmlldyIsImJ1ZmZlciIsImRhdGFJdGVtIiwiaGFzIiwiZ2V0IiwibGVuZ3RoIiwic2hpZnQiLCJzZXQiLCJTaG93RGlyZWN0aXZlIiwiQ2hlY2tlZERpcmVjdGl2ZSIsIlN0YXRlRGlyZWN0aXZlIiwiRGlzYWJsZWREaXJlY3RpdmUiLCJSZWFkb25seURpcmVjdGl2ZSIsIlNlbGVjdGVkRGlyZWN0aXZlIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiQ2xhc3NFdmVuRGlyZWN0aXZlIiwiQ2xhc3NEaXJlY3RpdmUiLCJDbGFzc09kZERpcmVjdGl2ZSIsIm5ld0NsYXNzIiwib2xkQ2xhc3MiLCJza2lwQ3VycmVudEVsbSIsImpvaW4iLCJTdHlsZUV2ZW5EaXJlY3RpdmUiLCJTdHlsZURpcmVjdGl2ZSIsIlN0eWxlT2RkRGlyZWN0aXZlIiwibmV3U3R5bGUiLCJvbGRTdHlsZSIsInN0eWxlIiwiU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSIsInN3aXRjaEN0cmwiLCIkc2Vla1VwRGlyZWN0aXZlIiwibWF0Y2hEZWZhdWx0Iiwib24iLCJkZWZhdWx0TWF0Y2hlZCIsIiRyZW1vdmVFbGVtZW50IiwiU3dpdGNoV2hlbkRpcmVjdGl2ZSIsIm1hdGNoZWQiLCJjaGFuZ2VkIiwicGx1c01hdGNoIiwibWludXNNYXRjaCIsIlN3aXRjaERpcmVjdGl2ZSIsIm1hdGNoQ291bnQiLCJmaXJlIiwiY2hlY2tEZWZhdWx0IiwiZ2V0Q2hpbGRyZW5PZkVsZW1lbnQiLCJBcnJheSIsInNsaWNlIiwiY2hpbGROb2RlcyIsImNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQiLCJjaGlsZCIsInJlbW92ZUNoaWxkIiwicmVwbGFjZUVsZW1lbnQiLCJuZXdFbG0iLCJyZW1vdmVFbGVtZW50IiwicmVtb3ZlRWxlbWVudHNCZXR3ZWVuIiwic3RhcnRFbG0iLCJlbmRFbG0iLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZyIsImFwcGVuZEVsZW1lbnQiLCJsYXN0Q2hpbGQiLCJhZGRDbGFzcyIsImNscyIsInRyaW0iLCJzcGxpdCIsImMiLCJjdXIiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVDbGFzcyIsInRhciIsInJlcGxhY2UiLCJsb2FkU3R5bGVTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIkFjY2Vzc29yIiwiY2FsbGVlIiwiZXhwIiwiY2hpbGRyZW4iLCJBbmFseXNlciIsInBhcnNlRXhwcmVzc2lvbiIsInBhcnNlRXhwIiwicHJvZ3JhbSIsImFjY2Vzc29yIiwiYnVpbGRlciIsIkV4cEJ1aWxkZXIiLCJhbmFseXNlUHJvZ3JhbSIsImFuYWx5c2VOb2RlIiwibm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiQVNUIiwiRXhwcmVzc2lvblN0YXRlbWVudCIsImFuYWx5c2VFeHByZXNzaW9uIiwiQXNzaWdubWVudEV4cHJlc3Npb24iLCJhbmFseXNlQXNzaWdubWVudCIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbiIsImFuYWx5c2VDb25kaXRpb24iLCJMb2dpY2FsRXhwcmVzc2lvbiIsImFuYWx5c2VMb2dpYyIsIkJpbmFyeUV4cHJlc3Npb24iLCJhbmFseXNlQmluYXJ5IiwiVW5hcnlFeHByZXNzaW9uIiwiYW5hbHlzZVVuYXJ5IiwiQ2FsbEV4cHJlc3Npb24iLCJhbmFseXNlQ2FsbCIsIk1lbWJlckV4cHJlc3Npb24iLCJhbmFseXNlTWVtYmVyIiwiSWRlbnRpZmllciIsImFuYWx5c2VJZGVudGlmaWVyIiwiTGl0ZXJhbCIsImFuYWx5c2VMaXRlcmFsIiwiQXJyYXlFeHByZXNzaW9uIiwiYW5hbHlzZUFycmF5IiwiUHJvcGVydHkiLCJhbmFseXNlUHJvcGVydHkiLCJPYmplY3RFeHByZXNzaW9uIiwiYW5hbHlzZU9iamVjdCIsImFzc2lnbm1lbnQiLCJyaWdodCIsImNvbmRpdGlvbiIsInRlc3QiLCJhbHRlcm5hdGUiLCJjb25zZXF1ZW50IiwibG9naWMiLCJsZWZ0IiwiYmluYXJ5IiwidW5hcnkiLCJhcmdzIiwibWVtYmVyIiwicGFyZW50Iiwib2JqZWN0IiwiY29tcHV0ZWQiLCJwcm9wZXJ0eSIsImNyZWF0ZUNoaWxkIiwiYnVpbGQiLCJpZGVudGlmaWVyIiwiY3JlYXRlQWNjZXNzb3IiLCJsaXRlcmFsIiwicHJvcCIsInByb3BlcnRpZXMiLCJhcnIiLCJhbmFseXNlIiwiZGVmYXVsdE9wdGlvbnMiLCJhbGxvd051bGwiLCJhc3NpZ25JbnRlcmNlcHRvciIsIkV2YWx1YXRvciIsIiRwYXJzZXIiLCJldmFsdWF0ZVByb2dyYW0iLCJldmFsdWF0ZU5vZGUiLCIkbnVsbCIsImFzc2lnblByb2dyYW0iLCJleHByZXNzaW9uIiwicHJvcGVydHlLZXkiLCJldmFsdWF0ZUV4cHJlc3Npb24iLCJldmFsdWF0ZUFzc2lnbm1lbnQiLCJldmFsdWF0ZUNvbmRpdGlvbiIsImV2YWx1YXRlTG9naWMiLCJldmFsdWF0ZUJpbmFyeSIsImV2YWx1YXRlVW5hcnkiLCJldmFsdWF0ZUNhbGwiLCJldmFsdWF0ZU1lbWJlciIsImV2YWx1YXRlSWRlbnRpZmllciIsImV2YWx1YXRlTGl0ZXJhbCIsImV2YWx1YXRlQXJyYXkiLCJldmFsdWF0ZVByb3BlcnR5IiwiZXZhbHVhdGVPYmplY3QiLCJhc3NpZ25tZW50TGVmdCIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJvcGVyYXRvciIsImFyZ1ZhbHVlcyIsIm1hcCIsInJlc29sdmVGaWx0ZXIiLCJ0cmFuc2Zvcm0iLCJhcHBseSIsIk51bGxFeHByZXNzaW9uTm9kZSIsInRhcmdldE5vZGUiLCJkZWYiLCJsZXhFeHAiLCJFeHBMZXhlciIsImxleCIsIkV4cFBhcnNlciIsInBhcnNlIiwiYnVpbGRFeHByZXNzaW9uIiwiYnVpbGRBc3NpZ25tZW50IiwiYnVpbGRDb25kaXRpb24iLCJidWlsZExvZ2ljIiwiYnVpbGRCaW5hcnkiLCJidWlsZFVuYXJ5IiwiYnVpbGRDYWxsIiwiYnVpbGRNZW1iZXIiLCJidWlsZElkZW50aWZpZXIiLCJidWlsZExpdGVyYWwiLCJidWlsZEFycmF5IiwiYnVpbGRQcm9wZXJ0eSIsImJ1aWxkT2JqZWN0IiwicmVzIiwicGFyc2VPcHRpb25zIiwidGV4dCIsInRva2VucyIsImNoIiwiY2hhckF0IiwicmVhZFN0cmluZyIsImlzTnVtYmVyIiwicGVlayIsInJlYWROdW1iZXIiLCJpc0lkZW50aWZpZXJTdGFydCIsInBlZWtNdWx0aWNoYXIiLCJyZWFkSWRlbnQiLCJpcyIsImlzV2hpdGVzcGFjZSIsImNoMiIsImNoMyIsIm9wMSIsIk9QRVJBVE9SUyIsIm9wMiIsIm9wMyIsInRva2VuIiwidGhyb3dFcnJvciIsImNoYXJzIiwiaSIsIm51bSIsImNvZGVQb2ludEF0IiwiaXNWYWxpZElkZW50aWZpZXJTdGFydCIsImlzSWRlbnRpZmllckNvbnRpbnVlIiwiaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSIsImNwIiwiY2hhckNvZGVBdCIsImNwMSIsImNwMiIsImVycm9yIiwic3RhcnQiLCJlbmQiLCJjb2xTdHIiLCJzdWJzdHJpbmciLCJudW1iZXIiLCJwZWVrQ2giLCJpc0V4cE9wZXJhdG9yIiwiY29uc3RhbnQiLCJOdW1iZXIiLCJxdW90ZSIsInN0cmluZyIsInJhd1N0cmluZyIsImVzY2FwZSIsImhleCIsIm1hdGNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJyZXAiLCJFU0NBUEUiLCJvcGVyYXRvclRleHQiLCJsZXhlciIsIm1zZyIsIlByb2dyYW1Ob2RlIiwiZXhwcmVzc2lvblN0YXRlbWVudCIsImV4cGVjdCIsIkV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIiwiZmlsdGVyQ2hhaW4iLCJhc3QiLCJ0ZXJuYXJ5IiwiaXNBc3NpZ25hYmxlIiwiQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbE9SIiwiY29uc3VtZSIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsQU5EIiwiTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZXF1YWxpdHkiLCJyZWxhdGlvbmFsIiwiQmluYXJ5RXhwcmVzc2lvbk5vZGUiLCJhZGRpdGl2ZSIsIm11bHRpcGxpY2F0aXZlIiwiVW5hcnlFeHByZXNzaW9uTm9kZSIsInByaW1hcnkiLCJhcnJheURlY2xhcmF0aW9uIiwibGl0ZXJhbHMiLCJoYXNPd25Qcm9wZXJ0eSIsIkxpdGVyYWxOb2RlIiwibmV4dCIsInBlZWtBaGVhZCIsIkNhbGxFeHByZXNzaW9uTm9kZSIsInBhcnNlQXJndW1lbnRzIiwiTWVtYmVyRXhwcmVzc2lvbk5vZGUiLCJiYXNlRXhwcmVzc2lvbiIsImlkZW50aWZpZXJzIiwiZW50aXJlTmFtZSIsIklkZW50aWZpZXJOb2RlIiwicGVla1Rva2VuIiwiQXJyYXlFeHByZXNzaW9uTm9kZSIsIlByb3BlcnR5Tm9kZSIsIk9iamVjdEV4cHJlc3Npb25Ob2RlIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJ0IiwiQXN0Tm9kZSIsIlByb2dyYW0iLCJraW5kIiwicHJlZml4IiwidW5kZWZpbmVkIiwiRGVsYXllciIsInRpbWVvdXQiLCJkZWxheUlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIkxpc3RlbmVyIiwidmFsdWVDaGFuZ2VkIiwiY29sbGVjdGlvbkNoYW5nZWQiLCJvbGRWYWx1ZSIsIk9ic2VydmVyIiwiYWNjZXNzb3JzIiwibGlzdGVuZXJzIiwid2F0Y2hlciIsIldhdGNoZXIiLCJhbmFseXNlciIsImRlbGF5ZXIiLCJub3RpZnkiLCJoYXNDaGFuZ2UiLCJzZXROZXdWYWx1ZSIsInNldENvbGxlY3Rpb25DaGFuZ2VkIiwiZXhlY3V0ZSIsImdldEFjY2Vzc29yIiwiZXZhbHVhdG9yIiwiY3JlYXRlTGlzdGVuZXIiLCJldmFsdWF0ZSIsInVud2F0Y2hBY2Nlc3NvcnMiLCJ1bndhdGNoIiwid2F0Y2hBY2Nlc3NvcnMiLCJ2YWx1ZXMiLCJ3YXRjaCIsIm5vdGlmeUNoYW5nZSIsInJlbW92ZUxpc3RlbmVyIiwidW53YXRjaFByb3BzIiwid2F0Y2hQcm9wcyIsInVud2F0Y2hFeHAiLCJhcmd1bWVudHMiLCJjb2xsZWN0aW9uIiwiaXNQcm94eVN5bWJvbCIsIlN5bWJvbCIsInRhcmdldFN5bWJvbCIsImdldFByb3h5Iiwic2V0UHJveHkiLCJpc1Byb3h5IiwicHJveHkiLCJnZXRUYXJnZXQiLCJtYWtlUHJveHkiLCJQcm94eSIsIk9iamVjdExpc3RlbmVyIiwia2V5cyIsImdldEhhbmRsZXJzIiwib2ZmUHJvcGVydHlDaGFuZ2VkIiwiaGFuZGxlUHJvcGVydHlDaGFuZ2VkIiwiZ2V0TGlzdGVuZXIiLCJmaXJlS2V5IiwiZmlsdGVycyIsImFjdGlvbiIsImdldE9yQ3JlYXRlTGlzdGVuZXIiLCJyZWdpc3RlcktleSIsInVucmVnaXN0ZXJLZXkiLCJCaW5kaW5nIiwiaXNFeHAiLCJsb2dpY2FsIiwiYXV0b21hdGlvbiIsInNlZ21lbnRzIiwiZXhwcmVzc2lvbnMiLCJFeHByZXNzaW9uIiwiY3JlYXRlRXhwcmVzc2lvbiIsImxhc3RJbmRleCIsInNlZ21lbnQiLCJkZXRlY3QiLCJwYXRjaCIsImNvbXB1dGUiLCJyZWR1Y2UiLCJwcmV2IiwiaGFzVHJhbnNsYXRpb24iLCIkYXNzaWduIiwiJHdhdGNoIiwiZXZlbnRUZXh0IiwiZG9tRXZlbnRzIiwiJGluamVjdG9yIiwiYmluZGluZyIsImJpbmRpbmdzIiwiY3JlYXRlQ29tcG9uZW50IiwiJGFwcGVuZENoaWxkIiwiY29tcG9uZW50cyIsImNyZWF0ZURpcmVjdGl2ZSIsIiQkc2NvcGUiLCJyZXNvbHZlQ29tcG9uZW50Iiwibm9kZU5hbWUiLCJyZXNvbHZlRGlyZWN0aXZlIiwibm9kZURhdGEiLCJjb250YWluZXIiLCJoYXNDb250YWluZXIiLCJTaW5nbGVOb2RlVmlldyIsIk11bHRpcGxlTm9kZVZpZXciLCJ2bm9kZXMiLCJwYXJzZVRlbXBsYXRlIiwiY29tcGlsZU5vZGVzIiwibGlua05vZGVzIiwiZGlyZWN0aXZlcyIsIiRwb3N0bGluayIsIm5vZGVzIiwidm5vZGUiLCJjb21waWxlTm9kZSIsImlzVlRleHQiLCJjb21waWxlVGV4dCIsImlzVkNvbW1lbnQiLCJjb21waWxlQ29tbWVudCIsImNvbXBpbGVFbG0iLCJsaW5rTm9kZSIsImxpbmtUZXh0IiwibGlua0NvbW1lbnQiLCJsaW5rRWxtIiwiZWxtRGF0YSIsInJlY29nbml6ZUNvbXBvbmVudCIsImN1c3RvbUxpbmtlciIsInZhdHRycyIsInNvbWUiLCJhdHRyRGF0YSIsImNvbXBpbGVBdHRyIiwibGlua2VyIiwiJHByaW9yaXR5Iiwic2Vla1Nsb3QiLCJhdHRyTmFtZSIsImF0dHJWYWx1ZSIsIm5ld0JpbmRpbmciLCJzdGFydHNXaXRoIiwiaXNFdmVudCIsInN1YnN0ciIsImlzRG9tRXZlbnQiLCJyZWNvZ25pemVEaXJlY3RpdmUiLCJuZXdEaXJlY3RpdmUiLCIkJHZhdHRyIiwiJGFzc2lnbm1lbnQiLCIkY29tcGlsZSIsInNldEh0bWxBdHRyIiwicmVnaXN0ZXJBdXRvbWF0aW9uIiwicHJvcGVydHlOYW1lIiwiJGhhc1Byb3BlcnR5IiwiY29tcGlsZSIsInZ0ZXh0IiwibmV3VGV4dE5vZGUiLCJ2Y21udCIsIiRsaW5rIiwiaW5zdGFuY2UiLCJuZXdDb21wb25lbnQiLCJsaW5rQXR0ciIsIiQkdmVsbSIsIiRzZXJDb250YWluZXIiLCIkc2V0U2xvdCIsImV2ZW50TmFtZSIsImxpbmsiLCIkY2hhbmdlIiwiaXNWRWxtIiwic2xvdCIsImdldEF0dHIiLCJnZXRJbm5lclRwbCIsIlZpZXciLCJ1bnN1YnNjcmliZSIsInJlZnJlc2giLCJzZWxlY3Rvck9yRWxlbWVudCIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25EZXN0cm95IiwiJGRlc3Ryb3kiLCJIdHRwU2VydmljZSIsIlhNTEh0dHBSZXF1ZXN0IiwicmVzb2x2ZSIsInJlamVjdCIsIlByb21pc2UiLCJ1cmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ4aHIiLCJjb25maWciLCJoZWFkZXJzIiwic2V0UmVxdWVzdEhlYWRlciIsInBhcnNlZCIsInZhbCIsImxpbmUiLCJ0b0xvd2VyQ2FzZSIsImlnbm9yZUR1cGxpY2F0ZU9mIiwiY29uY2F0IiwibWV0aG9kIiwiYWRkVXJsUGFyYW0iLCJjcmVhdGVQcm9taXNlIiwiY3JlYXRlWEhSIiwib25sb2FkIiwicmVzcG9uc2VIZWFkZXJzIiwiZ2V0SHR0cFJlc3BvbnNlSGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInJlc3BvbnNlRGF0YSIsInJlc3BvbnNlVHlwZSIsInJlc3BvbnNlVGV4dCIsInJlc3BvbnNlIiwic3RhdHVzVGV4dCIsInJlcXVlc3QiLCJidWlsZFVybCIsIm9wZW4iLCJzZW5kIiwiY29udGVudFR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiU2VydmljZSIsIkluamVjdG9yIiwidXNpbmciLCJkZWZhdWx0TnMiLCJwYXJzZUNvbXBvbmVudCIsInBhcnNlRGlyZWN0aXZlIiwicGFyc2VTZXJ2aWNlIiwicGFyc2VGaWx0ZXIiLCJWQXR0ciIsIm5vZGVUeXBlIiwiYXR0cmlidXRlIiwiVk5vZGUiLCJWQ21udCIsImNvbW1lbnQiLCJWRWxtIiwic2VsZkNsb3NlZCIsIlRwbEJ1aWxkZXIiLCJhdHRyIiwibWF0Y2hlcyIsImJlbG9uZ1RvIiwic2V0VmFsdWUiLCJjb21waWxlT3B0aW9ucyIsInRwbCIsInBhcnNlVHBsIiwiY2xlYXJDaGlsZE5vZGVzIiwiY29weSIsImNsb25lTm9kZSIsImNkYXRhU2VjdGlvbiIsImVudGl0eVJlZmVyZW5jZSIsImVudGl0eSIsInByb2Nlc3NpbmdJbnN0cnVjdGlvbiIsImRvY3VtZW50VHlwZSIsImRvY3VtZW50RnJhZ21lbnQiLCJub3RhdGlvbiIsImZpcnN0Q2hpbGQiLCJidWlsZFNpYmxpbmciLCJyZWZDaGlsZCIsIm5ld0NoaWxkIiwiY2xlYXJQYXJlbnRBbmRTaWJsaW5nIiwiZGVlcCIsIm9uQ2xvbmVOb2RlIiwib3duZXJEb2N1bWVudCIsIlZUZXh0IiwiVlR5cGUiLCJsZXhUcGwiLCJUcGxMZXhlciIsIlRwbFBhcnNlciIsImlzVkF0dHIiLCJidWlsZFRleHQiLCJidWlsZENvbW1lbnQiLCJidWlsZEVsZW1lbnQiLCJhdHRyVHBsIiwiYnVpbGRBdHRyaWJ1dGUiLCJjaGlsZFRwbCIsInN0ciIsImJlZ2luIiwiZXhwZWN0U3RyaW5nIiwidGV4dFRhZyIsImNsb3NpbmciLCJkb2N0eXBlIiwidGFnIiwiZXF1YWwiLCJhbGxvd0RvY1R5cGUiLCJyZWFkQ29tbWVudCIsInJlYWRUYWciLCJyZWFkVGV4dCIsInJvb3QiLCJjdXJyZW50IiwiZG9jVHlwZSIsImF0dHJzIiwicCIsInB1c2hBdHRyIiwiY2hpbGRFbGVtZW50cyIsInB1c2hDaGlsZCIsImVsZXMiLCJvcmlnaW4iLCJ0b1N0cmluZyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiaXNVbmRlZmluZWQiLCJpc0RlZmluZWQiLCJpc0FycmF5IiwiaXNNYXAiLCJpc09iamVjdCIsImlzQmxhbmtPYmplY3QiLCJpc1N0cmluZyIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc1JlZ0V4cCIsImlzQm9vbGVhbiIsImlzRm9ybURhdGEiLCJGb3JtRGF0YSIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJpc05hTiIsImxvd2VyY2FzZSIsInVwcGVyY2FzZSIsInRvVXBwZXJDYXNlIiwiY29udmVydFRvSHVtcE5hbWUiLCJzZXBhcmF0b3IiLCJ1cHBlcmNhc2VGaXJzdExldHRlciIsImNvbnZlcnRGcm9tSHVtcE5hbWUiLCJuZXdOYW1lIiwiY2hhciIsIm9iakluZGV4IiwibmV3QXJyIiwibmV3T2JqIiwiZXh0ZW5kIiwiZGVlcE1lcmdlIiwicGxhaW5NZXJnZSIsIm1lcmdlIiwic291cmNlIiwiZnVuYyIsIm9yZGVyQnkiLCJnZXR0ZXIiLCJnZXRWYWx1ZSIsInNvcnQiLCJhIiwiYiIsIm9yZGVyQnlEZXNjZW5kaW5nIiwibyIsIkYiLCJpbmhlcml0UHJvdG90eXBlIiwic3ViVHlwZSIsInN1cGVyVHlwZSIsImNvbnN0cnVjdG9yIiwiaW5oZXJpdCIsImhhc1Byb3BlcnR5IiwiZ2V0UHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsImZvcm1hdCIsIm1hdGNoVGV4dCIsImVzY2FwZUh0bWwiLCJodG1sIiwiY29tcG9uZW50Q29uc3RydWN0b3IiLCIkJGNoaWxkcmVuIiwiUGFyc2VyIiwiJG9ic2VydmVyIiwiJGRhdGEiLCIkbWFrZUNvbnRhaW5lciIsIiRkZWxlZ2F0ZSIsImluamVjdFNlcnZpY2VzIiwib25Qcm9wZXJ0eUNoYW5nZWQiLCJtZXNzYWdlIiwid2F0Y2hDb2xsZWN0aW9uIiwidGVtcGxhdGVJZCIsImdldEVsZW1lbnRCeUlkIiwiJGdldFRlbXBsYXRlIiwiYWZ0ZXJWaWV3UmVuZGVyZWQiLCIkdW5tb3VudCIsIiRyZW1vdmVDaGlsZCIsImRpcmVjdGl2ZUNvbnN0cnVjdG9yIiwiJHJlbmRlcmVyIiwib25Db21waWxlIiwib25MaW5rIiwiYWZ0ZXJMaW5rIiwib25DaGFuZ2UiLCIkbmFtZXNwYWNlIiwiJGtleSIsIiQkc2VhcmNoRGlyZWN0aXZlIiwibmFtZVBhdHRlcm4iLCJjb21wb25lbnRDbGFzcyIsImRpcmVjdGl2ZUNsYXNzIiwiZmlsdGVyQ2xhc3MiLCJGaWx0ZXIiLCJmaWx0ZXJDb25zdHJ1Y3RvciIsInNlcnZpY2VDbGFzcyIsInNlcnZpY2VDb25zdHJ1Y3RvciIsIkZhY3RvcnkiLCJyb2xlSWQiLCJyb2xlcyIsImNvbnN0cnVjdG9yTmFtZSIsInJlbmFtZSIsIm9uQ29uc3RydWN0IiwiY29uc3RydWN0IiwiRnVuY3Rpb24iLCJtYWtlIiwiZmFjdG9yeSIsImtleVBhdHRlcm4iLCJnbG9iYWxOYW1lc3BhY2UiLCJOYW1lc3BhY2VDb250YWluZXIiLCJjbGFzc0NvbnRhaW5lciIsImluc3RhbmNlQ29udGFpbmVyIiwibnNDb250YWluZXIiLCJzZXJ2aWNlU3RhY2siLCJjaGVja0tleU5hbWUiLCJuYW1lc3BhY2VDb250YWluZXIiLCJnZXROYW1lc3BhY2VDb250YWluZXIiLCJnZXRDbGFzc0NvbnRhaW5lciIsInJlZ2lzdGVyIiwiZ2V0RnJvbUdsb2JhbE5hbWVzcGFjZSIsInJvbGUiLCJpc0NvbXBvbmVudCIsImlzRGlyZWN0aXZlIiwiaXNTZXJ2aWNlIiwiaXNGaWx0ZXIiLCJrZXlPckNvbnN0cnVjdG9yIiwiQ2xzIiwicmVzb2x2ZUNvbnN0cnVjdG9yIiwiY2hlY2tJbnN0YW5jZSIsImdldEluc3RhbmNlQ29udGFpbmVyIiwiY3JlYXRlIiwiY3JlYXRlU2luZ2xldG9uIiwibm9uU2hhcmVkIiwicG9wIiwibnMiLCJleHRyYWN0TnNBbmRLZXkiLCJwYXJzZUZ1bGxOYW1lIiwicGFyc2VDb25zdHJ1Y3RvciIsImNoZWNrTG9vcERlcGVuZGVuY3kiLCJzZXJ2aWNlRnVsbE5hbWUiLCJoYXNMb29wRGVwZW5kZW5jeSIsImluamVjdCIsImNyZWF0ZVNlcnZpY2UiLCJwcm9ncmFtcyIsInNlbGVjdG9yIiwiZnVsbE5hbWUiLCJmaWx0ZXJDbHMiLCJjcmVhdGVGaWx0ZXIiLCJtZXJnZU1ldGFkYXRhIiwiUm9vdCIsIm1ha2VDb21wb25lbnQiLCJtb3VudCIsIm1ha2VEaXJlY3RpdmUiLCJtYWtlRmlsdGVyIiwibWFrZVNlcnZpY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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REQ7QUFFTixZQUFNLElBRkE7QUFHTixZQUFNLElBSEE7QUFJTnlCLGFBQVMsRUFBRUE7QUFKTDtBQUhZLENBQW5CLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RPLElBQU1DLE9BQWI7QUFDSSxtQkFBWXRaLE9BQVosRUFBcUJ1WixPQUFyQixFQUE4QjtBQUFBOztBQUMxQixTQUFLdlosT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS3VaLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0g7O0FBTEw7QUFBQTtBQUFBLDRCQU9ZMVosS0FQWixFQU9tQjtBQUFBOztBQUNYLFVBQUcsS0FBSzBaLE9BQUwsSUFBZ0IsSUFBbkIsRUFBd0I7QUFDcEI7QUFDSDs7QUFFRCxXQUFLQSxPQUFMLEdBQWVDLFVBQVUsQ0FBQyxZQUFNO0FBQzVCLGFBQUksQ0FBQ0QsT0FBTCxHQUFlLElBQWY7O0FBQ0EsYUFBSSxDQUFDeFosT0FBTCxDQUFhQyxJQUFiLENBQWtCSCxLQUFsQjtBQUNILE9BSHdCLEVBR3RCLEtBQUt5WixPQUhpQixDQUF6QjtBQUlIO0FBaEJMO0FBQUE7QUFBQSw4QkFrQmM7QUFDTixVQUFJLEtBQUtDLE9BQUwsSUFBZ0IsSUFBcEIsRUFBMEI7QUFDdEJFLG9CQUFZLENBQUMsS0FBS0YsT0FBTixDQUFaO0FBQ0g7QUFDSjtBQXRCTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztJQUVNRyxRO0FBQ0Ysb0JBQVl2TyxHQUFaLEVBQWlCcEwsT0FBakIsRUFBMEJrQixLQUExQixFQUFpQztBQUFBOztBQUM3QixTQUFLa0ssR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS3BMLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtrQixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLaUMsUUFBTCxHQUFnQmpDLEtBQWhCO0FBQ0EsU0FBSzBZLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QixLQUF6QjtBQUNIOzs7O2dDQUVXM1ksSyxFQUFPO0FBQ2YsV0FBS2lDLFFBQUwsR0FBZ0JqQyxLQUFoQjtBQUNBLFdBQUswWSxZQUFMLEdBQW9CLElBQXBCO0FBQ0g7Ozt5Q0FFb0IxWSxLLEVBQU87QUFDeEIsV0FBSzJZLGlCQUFMLEdBQXlCM1ksS0FBekI7QUFDSDs7O2dDQUVXO0FBQ1IsYUFBTyxLQUFLMFksWUFBTCxJQUFxQixLQUFLQyxpQkFBakM7QUFDSDs7OzJCQUVNL1osSyxFQUFPO0FBQ1YsVUFBSWdhLFFBQVEsR0FBRyxLQUFLNVksS0FBcEI7QUFBQSxVQUNJaUMsUUFBUSxHQUFHLEtBQUtBLFFBRHBCO0FBQUEsVUFFSTBXLGlCQUFpQixHQUFHLEtBQUtBLGlCQUY3QjtBQUlBLFdBQUszWSxLQUFMLEdBQWEsS0FBS2lDLFFBQWxCO0FBQ0EsV0FBSzBXLGlCQUFMLEdBQXlCLEtBQXpCO0FBRUEsV0FBSzdaLE9BQUwsQ0FBYUMsSUFBYixDQUFrQkgsS0FBbEIsRUFBeUI7QUFDckJnYSxnQkFBUSxFQUFFQSxRQURXO0FBRXJCM1csZ0JBQVEsRUFBRUEsUUFGVztBQUdyQjBXLHlCQUFpQixFQUFFQTtBQUhFLE9BQXpCO0FBS0g7Ozs7OztBQUdFLElBQU1FLFFBQWI7QUFDSSxvQkFBWWphLEtBQVosRUFBbUI7QUFBQTs7QUFDZixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLa2EsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsSUFBSUMsZ0RBQUosRUFBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSTlPLDZDQUFKLENBQWF4TCxLQUFLLENBQUM0UCxPQUFuQixDQUFoQjtBQUNBLFNBQUsySyxPQUFMLEdBQWUsSUFBSWYsZ0RBQUosQ0FBWSxLQUFLZ0IsTUFBakIsRUFBeUIsRUFBekIsQ0FBZjtBQUNIOztBQVJMO0FBQUE7QUFBQSxtQ0FVbUJsUCxHQVZuQixFQVV3QnBMLE9BVnhCLEVBVWlDa0IsS0FWakMsRUFVd0M7QUFDaEMsVUFBSXdDLFFBQVEsR0FBRyxJQUFJaVcsUUFBSixDQUFhdk8sR0FBYixFQUFrQnBMLE9BQWxCLEVBQTJCa0IsS0FBM0IsQ0FBZjtBQUNBLFdBQUsrWSxTQUFMLENBQWV2YSxJQUFmLENBQW9CZ0UsUUFBcEI7QUFDQSxhQUFPQSxRQUFQO0FBQ0g7QUFkTDtBQUFBO0FBQUEsbUNBZ0JtQkEsUUFoQm5CLEVBZ0I2QjtBQUNyQixVQUFJbEUsS0FBSyxHQUFHLEtBQUt5YSxTQUFMLENBQWV4YSxPQUFmLENBQXVCaUUsUUFBdkIsQ0FBWjs7QUFDQSxVQUFHbEUsS0FBSyxLQUFLLENBQUMsQ0FBZCxFQUFpQjtBQUNiLGFBQUt5YSxTQUFMLENBQWVwYSxNQUFmLENBQXNCTCxLQUF0QixFQUE2QixDQUE3QjtBQUNIO0FBQ0o7QUFyQkw7QUFBQTtBQUFBLDZCQXVCYTtBQUFBOztBQUNMLFdBQUt5YSxTQUFMLENBQWVsYSxPQUFmLENBQXVCLFVBQUEyRCxRQUFRLEVBQUk7QUFDL0IsWUFBR0EsUUFBUSxDQUFDNlcsU0FBVCxFQUFILEVBQXlCO0FBQ3JCN1csa0JBQVEsQ0FBQzRXLE1BQVQsQ0FBZ0IsS0FBSSxDQUFDeGEsS0FBckI7QUFDSDtBQUNKLE9BSkQ7QUFLSDtBQTdCTDtBQUFBO0FBQUEsaUNBK0JpQjRELFFBL0JqQixFQStCMkJQLFFBL0IzQixFQStCcUM7QUFDN0IsVUFBSUEsUUFBSixFQUFjO0FBQ1ZPLGdCQUFRLENBQUM4VyxXQUFULENBQXFCclgsUUFBckI7QUFDSCxPQUZELE1BRU87QUFDSE8sZ0JBQVEsQ0FBQytXLG9CQUFULENBQThCLElBQTlCO0FBQ0g7O0FBQ0QsV0FBS0osT0FBTCxDQUFhSyxPQUFiLENBQXFCLElBQXJCO0FBQ0g7QUF0Q0w7QUFBQTtBQUFBLGdDQXdDZ0J0UCxHQXhDaEIsRUF3Q3FCO0FBQ2IsVUFBSXRHLE1BQU0sR0FBRyxLQUFLa1YsU0FBTCxDQUFlNU8sR0FBZixDQUFiOztBQUVBLFVBQUcsQ0FBQ3RHLE1BQUosRUFBWTtBQUNSQSxjQUFNLEdBQUcsS0FBS3NWLFFBQUwsQ0FBYy9LLE9BQWQsQ0FBc0JqRSxHQUF0QixDQUFUO0FBQ0EsYUFBSzRPLFNBQUwsQ0FBZTVPLEdBQWYsSUFBc0J0RyxNQUF0QjtBQUNIOztBQUVELGFBQU9jLDJDQUFBLENBQVcsSUFBWCxFQUFpQmQsTUFBakIsQ0FBUDtBQUNIO0FBakRMO0FBQUE7QUFBQSwwQkFtRFVzRyxHQW5EVixFQW1EZXBMLE9BbkRmLEVBbUR3QmdHLE1BbkR4QixFQW1EZ0M7QUFDeEIsVUFBSTVDLElBQUksR0FBRyxJQUFYO0FBQ0EsVUFBSXNJLFFBQVEsR0FBRyxLQUFLaVAsV0FBTCxDQUFpQnZQLEdBQWpCLENBQWY7QUFDQSxVQUFJd1AsU0FBUyxHQUFJLElBQUluTCw4Q0FBSixDQUFjLEtBQUszUCxLQUFuQixFQUEwQjtBQUFFeVAsaUJBQVMsRUFBRSxJQUFiO0FBQW1CdkosY0FBTSxFQUFFQTtBQUEzQixPQUExQixDQUFqQjtBQUNBLFVBQUl0QyxRQUFRLEdBQUcsS0FBS21YLGNBQUwsQ0FBb0J6UCxHQUFwQixFQUF5QnBMLE9BQXpCLEVBQWtDNGEsU0FBUyxDQUFDRSxRQUFWLENBQW1CMVAsR0FBbkIsQ0FBbEMsQ0FBZjs7QUFFQSxlQUFTMlAsZ0JBQVQsQ0FBMEJmLFNBQTFCLEVBQXFDO0FBQ2pDcFUsc0RBQUEsQ0FBY29VLFNBQWQsRUFBeUIsVUFBVW5VLElBQVYsRUFBZ0I7QUFDckMsY0FBSUQsaURBQUEsQ0FBaUJDLElBQUksQ0FBQ21WLE9BQXRCLENBQUosRUFBb0M7QUFDaENuVixnQkFBSSxDQUFDbVYsT0FBTCxDQUFhL2EsSUFBYixDQUFrQixJQUFsQjtBQUNBNEYsZ0JBQUksQ0FBQ21WLE9BQUwsR0FBZSxJQUFmO0FBQ0g7O0FBQ0RELDBCQUFnQixDQUFDbFYsSUFBSSxDQUFDd0YsUUFBTixDQUFoQjtBQUNILFNBTkQ7QUFPSDs7QUFFRCxlQUFTNFAsY0FBVCxDQUF3QmpCLFNBQXhCLEVBQW1DMVosTUFBbkMsRUFBMkM7QUFDdkMsWUFBSSxDQUFDc0YsK0NBQUEsQ0FBZXRGLE1BQWYsQ0FBTCxFQUE2QjtBQUN6QjtBQUNIOztBQUVEc0Ysc0RBQUEsQ0FBY29VLFNBQWQsRUFBeUIsVUFBVW5VLElBQVYsRUFBZ0IvSCxHQUFoQixFQUFxQjtBQUMxQyxjQUFJb2QsTUFBTSxHQUFHNWEsTUFBYjs7QUFFQSxjQUFJdUYsSUFBSSxDQUFDdUYsR0FBVCxFQUFjO0FBQ1Z0TixlQUFHLEdBQUc4YyxTQUFTLENBQUNFLFFBQVYsQ0FBbUJoZCxHQUFuQixDQUFOO0FBQ0g7O0FBRUQsY0FBR29kLE1BQU0sS0FBSzlYLElBQUksQ0FBQ3RELEtBQWhCLElBQXlCa0csTUFBekIsSUFBbUNBLE1BQU0sQ0FBQ2xJLEdBQUQsQ0FBNUMsRUFBbUQ7QUFDL0NvZCxrQkFBTSxHQUFHbFYsTUFBVDtBQUNIOztBQUVESCxjQUFJLENBQUNtVixPQUFMLEdBQWU1WCxJQUFJLENBQUM4VyxPQUFMLENBQWFpQixLQUFiLENBQW1CRCxNQUFuQixFQUEyQnBkLEdBQTNCLEVBQWdDLFVBQVV5USxJQUFWLEVBQWdCO0FBQzNEd00sNEJBQWdCLENBQUNsVixJQUFJLENBQUN3RixRQUFOLENBQWhCO0FBQ0E0UCwwQkFBYyxDQUFDcFYsSUFBSSxDQUFDd0YsUUFBTixFQUFnQmtELElBQUksQ0FBQ2xQLElBQUwsQ0FBVThELFFBQTFCLENBQWQ7QUFDQUMsZ0JBQUksQ0FBQ2dZLFlBQUwsQ0FBa0IxWCxRQUFsQixFQUE0QmtYLFNBQVMsQ0FBQ0UsUUFBVixDQUFtQjFQLEdBQW5CLENBQTVCO0FBQ0gsV0FKYyxDQUFmO0FBTUE2UCx3QkFBYyxDQUFDcFYsSUFBSSxDQUFDd0YsUUFBTixFQUFnQjZQLE1BQU0sQ0FBQ3BkLEdBQUQsQ0FBdEIsQ0FBZDtBQUNILFNBbEJEO0FBbUJIOztBQUVEbWQsb0JBQWMsQ0FBQ3ZQLFFBQUQsRUFBVyxLQUFLNUwsS0FBaEIsQ0FBZDtBQUVBLGFBQU8sWUFBWTtBQUNmaWIsd0JBQWdCLENBQUNyUCxRQUFELENBQWhCO0FBQ0F0SSxZQUFJLENBQUNpWSxjQUFMLENBQW9CM1gsUUFBcEI7QUFDSCxPQUhEO0FBSUg7QUFuR0w7QUFBQTtBQUFBLG9DQXFHb0IwSCxHQXJHcEIsRUFxR3lCcEwsT0FyR3pCLEVBcUdrQ2dHLE1BckdsQyxFQXFHMEM7QUFBQTtBQUFBOztBQUNsQyxVQUFJNUMsSUFBSSxHQUFHLElBQVg7QUFBQSxVQUNJd1gsU0FBUyxHQUFHLElBQUluTCw4Q0FBSixDQUFjLEtBQUszUCxLQUFuQixFQUEwQjtBQUFFeVAsaUJBQVMsRUFBRSxJQUFiO0FBQW1CdkosY0FBTSxFQUFFQTtBQUEzQixPQUExQixDQURoQjtBQUVBLFVBQUlzVixZQUFZLEdBQUdDLFVBQVUsRUFBN0I7QUFDQSxVQUFJQyxVQUFVLEdBQUcsS0FBS0wsS0FBTCxDQUFXL1AsR0FBWCxFQUFnQixZQUFNO0FBQ25DLFlBQUlrUSxZQUFZLElBQUksSUFBcEIsRUFBMEI7QUFDdEJBLHNCQUFZLENBQUNyYixJQUFiLENBQWtCLE1BQWxCO0FBQ0g7O0FBQ0RxYixvQkFBWSxHQUFHQyxVQUFVLEVBQXpCO0FBQ0F2YixlQUFPLENBQUNzUixLQUFSLENBQWMsTUFBZCxFQUFvQm1LLFVBQXBCO0FBQ0gsT0FOZ0IsRUFNZHpWLE1BTmMsQ0FBakI7QUFPQSxVQUFJdEMsUUFBUSxHQUFHLEtBQUttWCxjQUFMLENBQW9CelAsR0FBcEIsRUFBeUJwTCxPQUF6QixFQUFrQzRhLFNBQVMsQ0FBQ0UsUUFBVixDQUFtQjFQLEdBQW5CLENBQWxDLENBQWY7O0FBRUEsZUFBU21RLFVBQVQsR0FBc0I7QUFDbEIsWUFBSUcsVUFBVSxHQUFHZCxTQUFTLENBQUNFLFFBQVYsQ0FBbUIxUCxHQUFuQixDQUFqQjs7QUFFQSxZQUFJeEYsK0NBQUEsQ0FBZThWLFVBQWYsS0FBOEI5Viw4Q0FBQSxDQUFjOFYsVUFBZCxDQUFsQyxFQUE2RDtBQUN6RCxpQkFBT3RZLElBQUksQ0FBQzhXLE9BQUwsQ0FBYWlCLEtBQWIsQ0FBbUJPLFVBQW5CLEVBQStCLEdBQS9CLEVBQW9DLFlBQVk7QUFDbkR0WSxnQkFBSSxDQUFDZ1ksWUFBTCxDQUFrQjFYLFFBQWxCO0FBQ0gsV0FGTSxDQUFQO0FBR0g7QUFDSjs7QUFFRCxhQUFPLFlBQVk7QUFDZjhYLGtCQUFVLENBQUN2YixJQUFYLENBQWdCLElBQWhCO0FBQ0FxYixvQkFBWSxJQUFJQSxZQUFZLENBQUNyYixJQUFiLENBQWtCLElBQWxCLENBQWhCO0FBQ0FtRCxZQUFJLENBQUNpWSxjQUFMLENBQW9CM1gsUUFBcEI7QUFDSCxPQUpEO0FBS0g7QUFqSUw7QUFBQTtBQUFBLDhCQW1JYztBQUNOLFdBQUsyVyxPQUFMLENBQWE3YixPQUFiO0FBQ0EsV0FBSzBiLE9BQUwsQ0FBYTFiLE9BQWI7QUFDQSxXQUFLc0IsS0FBTCxHQUFhLElBQWI7QUFDQSxXQUFLbWEsU0FBTCxDQUFldlQsTUFBZixHQUF3QixDQUF4QjtBQUNIO0FBeElMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFJaVYsYUFBYSxHQUFHQyxNQUFNLENBQUMsV0FBRCxDQUExQjtBQUFBLElBQ0lDLFlBQVksR0FBR0QsTUFBTSxDQUFDLFVBQUQsQ0FEekI7QUFHQSxJQUFJNWIsT0FBTyxHQUFHO0FBQ1Z5RyxLQUFHLEVBQUVxVixRQURLO0FBRVZsVixLQUFHLEVBQUVtVjtBQUZLLENBQWQsQyxDQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3BCLFNBQU9yVywrQ0FBQSxDQUFlcVcsS0FBZixLQUF5QkEsS0FBSyxDQUFDTixhQUFELENBQXJDO0FBQ0g7O0FBRUQsU0FBU08sU0FBVCxDQUFtQkQsS0FBbkIsRUFBMEI7QUFDdEIsU0FBT0QsT0FBTyxDQUFDQyxLQUFELENBQVAsR0FBaUJBLEtBQUssQ0FBQ0osWUFBRCxDQUF0QixHQUF1Q0ksS0FBOUM7QUFDSDs7QUFFRCxTQUFTRSxTQUFULENBQW1CamIsS0FBbkIsRUFBMEI7QUFDdEIsTUFBSTBFLCtDQUFBLENBQWUxRSxLQUFmLEtBQXlCLENBQUM4YSxPQUFPLENBQUM5YSxLQUFELENBQXJDLEVBQThDO0FBQzFDMEUsa0RBQUEsQ0FBYzFFLEtBQWQsRUFBcUIsVUFBVTJFLElBQVYsRUFBZ0IvSCxHQUFoQixFQUFxQjtBQUN0Q29ELFdBQUssQ0FBQ3BELEdBQUQsQ0FBTCxHQUFhcWUsU0FBUyxDQUFDdFcsSUFBRCxDQUF0QjtBQUNILEtBRkQ7QUFHQSxXQUFPLElBQUl1VyxLQUFKLENBQVVsYixLQUFWLEVBQWlCbEIsT0FBakIsQ0FBUDtBQUNIOztBQUVELFNBQU9rQixLQUFQO0FBQ0g7O0FBRUQsU0FBUzRhLFFBQVQsQ0FBa0J4YixNQUFsQixFQUEwQnhDLEdBQTFCLEVBQStCO0FBQzNCLE1BQUlBLEdBQUcsS0FBSzZkLGFBQVosRUFBMkI7QUFDdkIsV0FBTyxJQUFQO0FBQ0g7O0FBRUQsTUFBSTdkLEdBQUcsS0FBSytkLFlBQVosRUFBMEI7QUFDdEIsV0FBT3ZiLE1BQVA7QUFDSDs7QUFFRCxTQUFPQSxNQUFNLENBQUN4QyxHQUFELENBQWI7QUFDSDs7QUFFRCxTQUFTaWUsUUFBVCxDQUFrQnpiLE1BQWxCLEVBQTBCeEMsR0FBMUIsRUFBK0JvRCxLQUEvQixFQUFzQztBQUNsQyxNQUFJNFksUUFBUSxHQUFHb0MsU0FBUyxDQUFDNWIsTUFBTSxDQUFDeEMsR0FBRCxDQUFQLENBQXhCO0FBQUEsTUFDSXFGLFFBQVEsR0FBRytZLFNBQVMsQ0FBQ2hiLEtBQUQsQ0FEeEI7O0FBR0EsTUFBSTRZLFFBQVEsS0FBSzNXLFFBQWpCLEVBQTJCO0FBQ3ZCN0MsVUFBTSxDQUFDeEMsR0FBRCxDQUFOLEdBQWNxZSxTQUFTLENBQUNqYixLQUFELENBQXZCO0FBQ0FyQyxnREFBTSxDQUFDQyxlQUFQLENBQXVCbUssSUFBdkIsQ0FBNEI7QUFDeEIzSSxZQUFNLEVBQUVBLE1BRGdCO0FBRXhCeEMsU0FBRyxFQUFFQSxHQUZtQjtBQUd4QnVCLFVBQUksRUFBRTtBQUNGeWEsZ0JBQVEsRUFBRUEsUUFEUjtBQUVGM1csZ0JBQVEsRUFBRUE7QUFGUjtBQUhrQixLQUE1QjtBQVFILEdBVkQsTUFXSyxJQUFJN0MsTUFBTSxDQUFDeEMsR0FBRCxDQUFOLEtBQWdCb0QsS0FBcEIsRUFBMkI7QUFDNUJaLFVBQU0sQ0FBQ3hDLEdBQUQsQ0FBTixHQUFjb0QsS0FBZDtBQUNIOztBQUVELFNBQU8sSUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUQ7QUFDQTs7SUFFTW1iLGM7QUFDRiwwQkFBWS9iLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS2djLElBQUwsR0FBWSxFQUFaO0FBQ0g7Ozs7Z0NBRVd4ZSxHLEVBQUs7QUFDYixVQUFJLENBQUMsS0FBS3dlLElBQUwsQ0FBVXhlLEdBQVYsQ0FBTCxFQUFxQjtBQUNqQixhQUFLd2UsSUFBTCxDQUFVeGUsR0FBVixJQUFpQixFQUFqQjtBQUNIOztBQUVELGFBQU8sS0FBS3dlLElBQUwsQ0FBVXhlLEdBQVYsQ0FBUDtBQUNIOzs7Z0NBRVdBLEcsRUFBS2tDLE8sRUFBUztBQUN0QixVQUFJVixRQUFRLEdBQUcsS0FBS2lkLFdBQUwsQ0FBaUJ6ZSxHQUFqQixDQUFmO0FBQ0F3QixjQUFRLENBQUNJLElBQVQsQ0FBY00sT0FBZDtBQUNIOzs7a0NBRWFsQyxHLEVBQUtrQyxPLEVBQVM7QUFDeEIsVUFBSVYsUUFBUSxHQUFHLEtBQUtpZCxXQUFMLENBQWlCemUsR0FBakIsQ0FBZjs7QUFFQSxVQUFJa0MsT0FBTyxJQUFJLElBQWYsRUFBcUI7QUFDakJWLGdCQUFRLENBQUNvSCxNQUFULEdBQWtCLENBQWxCO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsWUFBSWxILEtBQUssR0FBR0YsUUFBUSxDQUFDRyxPQUFULENBQWlCTyxPQUFqQixDQUFaOztBQUVBLFlBQUlSLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDZEYsa0JBQVEsQ0FBQ08sTUFBVCxDQUFnQkwsS0FBaEIsRUFBdUIsQ0FBdkI7QUFDSDtBQUNKO0FBQ0o7Ozs0QkFFTzFCLEcsRUFBS3lRLEksRUFBTW5MLEksRUFBTTtBQUNyQixVQUFJOUQsUUFBUSxHQUFHLEtBQUtpZCxXQUFMLENBQWlCemUsR0FBakIsQ0FBZjtBQUNBd0IsY0FBUSxDQUFDUyxPQUFULENBQWlCLFVBQUFDLE9BQU8sRUFBSTtBQUN4QkEsZUFBTyxDQUFDQyxJQUFSLENBQWFtRCxJQUFiLEVBQW1CbUwsSUFBbkI7QUFDSCxPQUZEO0FBR0g7Ozs7OztBQUdFLElBQU00TCxPQUFiO0FBQ0kscUJBQWM7QUFBQTs7QUFBQTs7QUFDVixTQUFLRixTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS3VDLGtCQUFMLEdBQTBCM2QsNENBQU0sQ0FBQ0MsZUFBUCxDQUF1QnlKLEVBQXZCLENBQTBCLFVBQUF0SixDQUFDO0FBQUEsYUFBSSxLQUFJLENBQUN3ZCxxQkFBTCxDQUEyQnhkLENBQUMsQ0FBQ0ksSUFBN0IsQ0FBSjtBQUFBLEtBQTNCLENBQTFCO0FBQ0g7O0FBSkw7QUFBQTtBQUFBLDBDQU0wQkEsSUFOMUIsRUFNZ0M7QUFDeEIsVUFBSXFFLFFBQVEsR0FBRyxLQUFLZ1osV0FBTCxDQUFpQixLQUFLekMsU0FBdEIsRUFBaUM1YSxJQUFJLENBQUNpQixNQUF0QyxDQUFmOztBQUVBLFVBQUlvRCxRQUFRLElBQUksSUFBaEIsRUFBc0I7QUFDbEJBLGdCQUFRLENBQUNpWixPQUFULENBQWlCdGQsSUFBSSxDQUFDdkIsR0FBdEIsRUFBMkJ1QixJQUEzQjtBQUNBcUUsZ0JBQVEsQ0FBQ2laLE9BQVQsQ0FBaUIsR0FBakIsRUFBc0J0ZCxJQUF0QjtBQUNIO0FBQ0o7QUFiTDtBQUFBO0FBQUEsZ0NBZWdCNGEsU0FmaEIsRUFlMkIzWixNQWYzQixFQWVtQztBQUMzQixVQUFJb0QsUUFBSjtBQUFBLFVBQWNrWixPQUFPLEdBQUczQyxTQUFTLENBQUNwWixNQUFWLENBQWlCLFVBQUFnRixJQUFJLEVBQUk7QUFDN0MsZUFBT0EsSUFBSSxDQUFDdkYsTUFBTCxLQUFnQkEsTUFBdkI7QUFDSCxPQUZ1QixDQUF4Qjs7QUFJQSxVQUFJc2MsT0FBTyxDQUFDbFcsTUFBUixHQUFpQixDQUFyQixFQUF3QjtBQUNwQmhELGdCQUFRLEdBQUdrWixPQUFPLENBQUMsQ0FBRCxDQUFsQjtBQUNIOztBQUVELGFBQU9sWixRQUFQO0FBQ0g7QUF6Qkw7QUFBQTtBQUFBLG1DQTJCbUJ1VyxTQTNCbkIsRUEyQjhCM1osTUEzQjlCLEVBMkJzQztBQUM5QixVQUFJb0QsUUFBUSxHQUFHLElBQUkyWSxjQUFKLENBQW1CL2IsTUFBbkIsQ0FBZjtBQUNBMlosZUFBUyxDQUFDdmEsSUFBVixDQUFlZ0UsUUFBZjtBQUNBLGFBQU9BLFFBQVA7QUFDSDtBQS9CTDtBQUFBO0FBQUEsd0NBaUN3QnVXLFNBakN4QixFQWlDbUMzWixNQWpDbkMsRUFpQzJDO0FBQ25DLFVBQUlvRCxRQUFRLEdBQUcsS0FBS2daLFdBQUwsQ0FBaUJ6QyxTQUFqQixFQUE0QjNaLE1BQTVCLENBQWY7O0FBRUEsVUFBSW9ELFFBQVEsSUFBSSxJQUFoQixFQUFzQjtBQUNsQkEsZ0JBQVEsR0FBRyxLQUFLbVgsY0FBTCxDQUFvQlosU0FBcEIsRUFBK0IzWixNQUEvQixDQUFYO0FBQ0g7O0FBRUQsYUFBT29ELFFBQVA7QUFDSDtBQXpDTDtBQUFBO0FBQUEsMEJBMkNVcEQsTUEzQ1YsRUEyQ2tCeEMsR0EzQ2xCLEVBMkN1QitlLE1BM0N2QixFQTJDK0I7QUFDdkIsVUFBSW5aLFFBQVEsR0FBRyxLQUFLb1osbUJBQUwsQ0FBeUIsS0FBSzdDLFNBQTlCLEVBQXlDaUMsd0RBQVMsQ0FBQzViLE1BQUQsQ0FBbEQsQ0FBZjtBQUVBb0QsY0FBUSxDQUFDcVosV0FBVCxDQUFxQmpmLEdBQXJCLEVBQTBCK2UsTUFBMUI7QUFFQSxhQUFPLFlBQVk7QUFDZm5aLGdCQUFRLENBQUNzWixhQUFULENBQXVCbGYsR0FBdkIsRUFBNEIrZSxNQUE1QjtBQUNILE9BRkQ7QUFHSDtBQW5ETDtBQUFBO0FBQUEsOEJBcURjO0FBQ04sV0FBSzVDLFNBQUwsQ0FBZXZULE1BQWYsR0FBd0IsQ0FBeEI7QUFDQSxXQUFLOFYsa0JBQUw7QUFDSDtBQXhETDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUVPLElBQU1TLE9BQWI7QUFDSSxtQkFBWW5kLEtBQVosRUFBbUJnVCxJQUFuQixFQUF5QjlNLE1BQXpCLEVBQWlDO0FBQUE7O0FBQzdCLFNBQUtsRyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLZ1QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBSzlNLE1BQUwsR0FBY0EsTUFBZCxDQUg2QixDQUk3Qjs7QUFDQSxTQUFLa1gsS0FBTCxHQUFhLEtBQWIsQ0FMNkIsQ0FNN0I7O0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQWYsQ0FQNkIsQ0FRN0I7O0FBQ0EsU0FBS3RQLFVBQUwsR0FBa0IsS0FBbEIsQ0FUNkIsQ0FVN0I7O0FBQ0EsU0FBS3VQLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxTQUFLbGMsS0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLNFksUUFBTCxHQUFnQixJQUFoQjtBQUNBLFNBQUtsUixPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUt5VSxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNIOztBQWxCTDtBQUFBO0FBQUEscUNBb0JxQnhLLElBcEJyQixFQW9CMkI7QUFDbkIsVUFBSTFILEdBQUcsR0FBRyxJQUFJbVMsc0RBQUosQ0FBZXpLLElBQWYsQ0FBVjtBQUNBLFdBQUt3SyxXQUFMLENBQWlCNWQsSUFBakIsQ0FBc0IwTCxHQUF0QjtBQUNBLGFBQU9BLEdBQVA7QUFDSDtBQXhCTDtBQUFBO0FBQUEsOEJBMEJjO0FBQ04sVUFBSSxLQUFLK1IsT0FBTCxJQUFnQixLQUFLdFAsVUFBekIsRUFBcUM7QUFDakMsYUFBS3FQLEtBQUwsR0FBYSxJQUFiO0FBQ0g7O0FBRUQsVUFBSSxLQUFLQSxLQUFULEVBQWdCO0FBQ1osYUFBS00sZ0JBQUwsQ0FBc0IsS0FBSzFLLElBQTNCO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsWUFBSWpPLE9BQU8sR0FBRyxjQUFkO0FBQ0EsWUFBSTRZLFNBQVMsR0FBRzVZLE9BQU8sQ0FBQzRZLFNBQXhCO0FBQ0EsWUFBSUMsT0FBSjtBQUFBLFlBQWE3SCxLQUFLLEdBQUdoUixPQUFPLENBQUNFLElBQVIsQ0FBYSxLQUFLK04sSUFBbEIsQ0FBckI7O0FBRUEsZUFBTytDLEtBQUssSUFBSSxJQUFoQixFQUFzQjtBQUNsQixjQUFJQSxLQUFLLENBQUNyVyxLQUFOLEdBQWNpZSxTQUFsQixFQUE2QjtBQUN6QkMsbUJBQU8sR0FBRyxLQUFLNUssSUFBTCxDQUFVb0MsU0FBVixDQUFvQnVJLFNBQXBCLEVBQStCNUgsS0FBSyxDQUFDclcsS0FBckMsQ0FBVjtBQUNBLGlCQUFLNmQsUUFBTCxDQUFjM2QsSUFBZCxDQUFtQmdlLE9BQW5CO0FBQ0g7O0FBRUQsZUFBS0wsUUFBTCxDQUFjM2QsSUFBZCxDQUFtQixLQUFLOGQsZ0JBQUwsQ0FBc0IzSCxLQUFLLENBQUMsQ0FBRCxDQUEzQixDQUFuQjtBQUVBNEgsbUJBQVMsR0FBRzVZLE9BQU8sQ0FBQzRZLFNBQXBCO0FBQ0E1SCxlQUFLLEdBQUdoUixPQUFPLENBQUNFLElBQVIsQ0FBYSxLQUFLK04sSUFBbEIsQ0FBUjtBQUNIOztBQUVELFlBQUksS0FBS0EsSUFBTCxDQUFVcE0sTUFBVixHQUFtQitXLFNBQXZCLEVBQWtDO0FBQzlCQyxpQkFBTyxHQUFHLEtBQUs1SyxJQUFMLENBQVVvQyxTQUFWLENBQW9CdUksU0FBcEIsQ0FBVjtBQUNBLGVBQUtKLFFBQUwsQ0FBYzNkLElBQWQsQ0FBbUJnZSxPQUFuQjtBQUNIO0FBQ0o7QUFDSjtBQXhETDtBQUFBO0FBQUEsMkJBMERXO0FBQUE7O0FBQ0gsVUFBSSxLQUFLN1AsVUFBTCxJQUFtQixLQUFLc1AsT0FBNUIsRUFBcUM7QUFDakM7QUFDSDs7QUFFRCxXQUFLUSxNQUFMO0FBRUEsV0FBS0wsV0FBTCxDQUFpQnZkLE9BQWpCLENBQXlCLFVBQUFxTCxHQUFHLEVBQUk7QUFDNUJBLFdBQUcsQ0FBQytQLEtBQUosQ0FBVSxLQUFJLENBQUNyYixLQUFmLEVBQXNCLFlBQU07QUFDeEIsZUFBSSxDQUFDNmQsTUFBTDs7QUFDQSxlQUFJLENBQUNDLEtBQUw7QUFDSCxTQUhELEVBR0csS0FBSSxDQUFDNVgsTUFIUjtBQUlILE9BTEQ7QUFNSDtBQXZFTDtBQUFBO0FBQUEsNkJBeUVhO0FBQ0wsVUFBSSxLQUFLNkgsVUFBTCxJQUFtQixLQUFLc1AsT0FBNUIsRUFBcUM7QUFDakM7QUFDSDs7QUFFRCxVQUFJaGEsUUFBUSxHQUFHLEtBQUswYSxPQUFMLEVBQWY7O0FBRUEsVUFBSSxLQUFLM2MsS0FBTCxJQUFjaUMsUUFBbEIsRUFBNEI7QUFDeEIsYUFBS3lGLE9BQUwsR0FBZSxJQUFmO0FBQ0EsYUFBS2tSLFFBQUwsR0FBZ0IsS0FBSzVZLEtBQXJCO0FBQ0EsYUFBS0EsS0FBTCxHQUFhaUMsUUFBYjtBQUNIO0FBQ0osS0FyRkwsQ0F1Rkk7O0FBdkZKO0FBQUE7QUFBQSw0QkF3Rlk2QyxNQXhGWixFQXdGb0I7QUFBQTs7QUFDWkEsWUFBTSxHQUFHSiw0Q0FBQSxDQUFZLEtBQUtJLE1BQWpCLEVBQXlCQSxNQUF6QixDQUFUOztBQUVBLFVBQUksS0FBS2tYLEtBQVQsRUFBZ0I7QUFDWixlQUFPLEtBQUtJLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0JPLE9BQXBCLENBQTRCLEtBQUsvZCxLQUFqQyxFQUF3Q2tHLE1BQXhDLENBQVA7QUFDSDs7QUFFRCxhQUFPLEtBQUtxWCxRQUFMLENBQWNTLE1BQWQsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPdFQsR0FBUCxFQUFlO0FBQ3ZDLFlBQUk3RSwrQ0FBQSxDQUFlNkUsR0FBZixDQUFKLEVBQXlCO0FBQ3JCLGlCQUFPc1QsSUFBSSxHQUFHdFQsR0FBZDtBQUNILFNBSHNDLENBSXZDOzs7QUFDQSxlQUFPc1QsSUFBSSxJQUFJdFQsR0FBRyxDQUFDb1QsT0FBSixDQUFZLE1BQUksQ0FBQy9kLEtBQWpCLEVBQXdCa0csTUFBeEIsS0FBbUMsRUFBdkMsQ0FBWDtBQUNILE9BTk0sRUFNSixFQU5JLENBQVA7QUFPSCxLQXRHTCxDQXdHSTs7QUF4R0o7QUFBQTtBQUFBLDJCQXlHVzlFLEtBekdYLEVBeUdrQjhFLE1BekdsQixFQXlHMEI7QUFDbEJBLFlBQU0sR0FBR0osNENBQUEsQ0FBWSxLQUFLSSxNQUFqQixFQUF5QkEsTUFBekIsQ0FBVDs7QUFFQSxVQUFJLEtBQUtrWCxLQUFULEVBQWdCO0FBQ1osYUFBS0ksV0FBTCxDQUFpQixDQUFqQixFQUFvQnpaLE1BQXBCLENBQTJCLEtBQUsvRCxLQUFoQyxFQUF1Q29CLEtBQXZDLEVBQThDOEUsTUFBOUM7QUFDSCxPQUZELE1BRU87QUFDSCxjQUFNLElBQUlyRyxLQUFKLENBQVUsS0FBS21ULElBQUwsR0FBWSwwQkFBdEIsQ0FBTjtBQUNIO0FBQ0o7QUFqSEw7QUFBQTtBQUFBLHVDQW1IdUJzSyxVQW5IdkIsRUFtSG1DO0FBQzNCLFdBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0g7QUFySEw7QUFBQTtBQUFBLHlDQXVIeUJBLFVBdkh6QixFQXVIcUM7QUFDN0IsVUFBSSxLQUFLQSxVQUFMLEtBQW9CQSxVQUF4QixFQUFvQztBQUNoQyxhQUFLQSxVQUFMLEdBQWtCLElBQWxCO0FBQ0g7QUFDSixLQTNITCxDQTZISTs7QUE3SEo7QUFBQTtBQUFBLDRCQThIWTtBQUNKLFVBQUksS0FBS3hVLE9BQUwsSUFBZ0IsS0FBS3dVLFVBQUwsSUFBbUIsSUFBdkMsRUFBNkM7QUFDekMsYUFBS3hVLE9BQUwsR0FBZSxLQUFmO0FBQ0EsYUFBS3dVLFVBQUwsQ0FBZ0JuZCxJQUFoQixDQUFxQixJQUFyQixFQUEyQixLQUFLaUIsS0FBaEMsRUFBdUMsS0FBSzRZLFFBQTVDO0FBQ0g7QUFDSjtBQW5JTDtBQUFBO0FBQUEsOEJBcUljO0FBQ04sV0FBS3dELFdBQUwsQ0FBaUJ2ZCxPQUFqQixDQUF5QixVQUFBcUwsR0FBRyxFQUFJO0FBQzVCQSxXQUFHLENBQUM1TSxPQUFKO0FBQ0gsT0FGRDtBQUdIO0FBeklMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNITyxJQUFNK2UsVUFBYjtBQUNJLHNCQUFZekssSUFBWixFQUFrQjtBQUFBOztBQUNkLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtySCxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUt1UCxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUtnRCxjQUFMLEdBQXNCLEtBQXRCO0FBQ0gsR0FOTCxDQVFJOzs7QUFSSjtBQUFBO0FBQUEsNEJBU1lsZSxLQVRaLEVBU21Ca0csTUFUbkIsRUFTMkI7QUFDbkIsYUFBT2xHLEtBQUssQ0FBQzZGLEtBQU4sQ0FBWSxLQUFLbU4sSUFBakIsRUFBdUI5TSxNQUF2QixDQUFQO0FBQ0gsS0FYTCxDQWFJOztBQWJKO0FBQUE7QUFBQSwyQkFjV2xHLEtBZFgsRUFja0JvQixLQWRsQixFQWN5QjhFLE1BZHpCLEVBY2lDO0FBQ3pCbEcsV0FBSyxDQUFDbWUsT0FBTixDQUFjLEtBQUtuTCxJQUFuQixFQUF5QjVSLEtBQXpCLEVBQWdDOEUsTUFBaEM7QUFDSDtBQWhCTDtBQUFBO0FBQUEsMEJBa0JVbEcsS0FsQlYsRUFrQmlCRSxPQWxCakIsRUFrQjBCZ0csTUFsQjFCLEVBa0JrQztBQUMxQixXQUFLZ1YsT0FBTCxHQUFlbGIsS0FBSyxDQUFDb2UsTUFBTixDQUFhLEtBQUtwTCxJQUFsQixFQUF3QjlTLE9BQXhCLEVBQWlDZ0csTUFBakMsQ0FBZjtBQUNIO0FBcEJMO0FBQUE7QUFBQSw4QkFzQmM7QUFDTixVQUFHLEtBQUtnVixPQUFMLElBQWdCLElBQW5CLEVBQXlCO0FBQ3JCLGFBQUtBLE9BQUw7QUFDSDtBQUNKO0FBMUJMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQUltRCxTQUFTLEdBQUcsOElBQWhCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxTQUFTLENBQUM1VCxLQUFWLENBQWdCLEdBQWhCLENBQWhCO0FBRU8sSUFBTWxNLFFBQWI7QUFBQTtBQUFBO0FBQUEsd0JBQ21CO0FBQ1gsYUFBTyxLQUFLeUIsS0FBTCxDQUFXdWUsU0FBbEI7QUFDSDtBQUhMOztBQUtJLG9CQUFZdmUsS0FBWixFQUFtQmtHLE1BQW5CLEVBQTJCO0FBQUE7O0FBQ3ZCLFNBQUtsRyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLa0csTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS3JDLE1BQUwsR0FBYzdELEtBQUssQ0FBQzRQLE9BQXBCO0FBQ0EsU0FBS3JKLElBQUwsR0FBWSxJQUFaO0FBQ0g7O0FBVkw7QUFBQTtBQUFBLCtCQVlleU0sSUFaZixFQVlxQjtBQUNiLFVBQUl3TCxPQUFPLEdBQUcsSUFBSXJCLGdEQUFKLENBQVksS0FBS25kLEtBQWpCLEVBQXdCZ1QsSUFBeEIsRUFBOEIsS0FBSzlNLE1BQW5DLENBQWQ7QUFDQSxXQUFLSyxJQUFMLENBQVVrWSxRQUFWLENBQW1CN2UsSUFBbkIsQ0FBd0I0ZSxPQUF4QjtBQUNBLGFBQU9BLE9BQVA7QUFDSDtBQWhCTDtBQUFBO0FBQUEsaUNBa0JpQmpVLEdBbEJqQixFQWtCc0I7QUFDZCxVQUFJYixLQUFLLEdBQUcsS0FBSy9JLFFBQUwsQ0FBYytkLGVBQWQsQ0FBOEJuVSxHQUE5QixDQUFaO0FBRUEsV0FBS3ZLLEtBQUwsQ0FBVzJlLFlBQVgsQ0FBd0JqVixLQUF4QjtBQUNBLFdBQUtuRCxJQUFMLENBQVVxWSxVQUFWLENBQXFCaGYsSUFBckIsQ0FBMEI4SixLQUExQjtBQUVBLGFBQU9BLEtBQVA7QUFDSDtBQXpCTDtBQUFBO0FBQUEsaUNBMkJpQmEsR0EzQmpCLEVBMkJzQjtBQUNkLFVBQUkxSixTQUFTLEdBQUcsS0FBS0YsUUFBTCxDQUFja2UsZUFBZCxDQUE4QnRVLEdBQTlCLENBQWhCO0FBRUExSixlQUFTLENBQUNpZSxPQUFWLEdBQW9CLEtBQUs5ZSxLQUF6QjtBQUVBLGFBQU9hLFNBQVA7QUFDSDtBQWpDTDtBQUFBO0FBQUEsdUNBbUN1QjhELElBbkN2QixFQW1DNkI7QUFDckIsVUFBSTdHLFNBQVMsR0FBRyxLQUFLK0YsTUFBTCxDQUFZa2IsZ0JBQVosQ0FBNkJwYSxJQUFJLENBQUNxYSxRQUFsQyxDQUFoQixDQURxQixDQUdyQjs7QUFFQSxhQUFPbGhCLFNBQVA7QUFDSDtBQXpDTDtBQUFBO0FBQUEsdUNBMkN1QjhHLEtBM0N2QixFQTJDOEI7QUFDdEIsVUFBSS9ELFNBQVMsR0FBRyxLQUFLZ0QsTUFBTCxDQUFZb2IsZ0JBQVosQ0FBNkJyYSxLQUFLLENBQUNzYSxRQUFOLENBQWVoaEIsSUFBNUMsQ0FBaEIsQ0FEc0IsQ0FHdEI7O0FBRUEsYUFBTzJDLFNBQVA7QUFDSDtBQWpETDtBQUFBO0FBQUEsMkJBbURXeEMsUUFuRFgsRUFtRHFCOGdCLFNBbkRyQixFQW1EZ0M7QUFBQTs7QUFDeEIsVUFBSUMsWUFBWSxHQUFHRCxTQUFTLElBQUksSUFBaEM7O0FBRUEsVUFBR0MsWUFBSCxFQUFpQjtBQUNiLGFBQUs3WSxJQUFMLEdBQVksSUFBSThZLG9EQUFKLEVBQVo7QUFDSCxPQUZELE1BR0s7QUFDRDtBQUNBRixpQkFBUyxHQUFHdmQsUUFBUSxDQUFDeUQsc0JBQVQsRUFBWjtBQUNBLGFBQUtrQixJQUFMLEdBQVksSUFBSStZLHNEQUFKLEVBQVo7QUFDSDs7QUFFRCxXQUFLL1ksSUFBTCxDQUFVZ1osTUFBVixHQUFtQixLQUFLMWIsTUFBTCxDQUFZMmIsYUFBWixDQUEwQm5oQixRQUExQixDQUFuQjtBQUVBLFdBQUtvaEIsWUFBTCxDQUFrQixLQUFLbFosSUFBTCxDQUFVZ1osTUFBNUIsRUFkd0IsQ0FnQnhCOztBQUVBLFdBQUtHLFNBQUwsQ0FBZSxLQUFLblosSUFBTCxDQUFVZ1osTUFBekIsRUFBaUN0ZixPQUFqQyxDQUF5QyxVQUFBZ00sSUFBSTtBQUFBLGVBQUlrVCxTQUFTLENBQUMzWixXQUFWLENBQXNCeUcsSUFBdEIsQ0FBSjtBQUFBLE9BQTdDLEVBbEJ3QixDQW9CeEI7O0FBQ0EsV0FBSzFGLElBQUwsQ0FBVW9aLFVBQVYsQ0FBcUIxZixPQUFyQixDQUE2QixVQUFBWSxTQUFTO0FBQUEsZUFBSUEsU0FBUyxDQUFDK2UsU0FBVixFQUFKO0FBQUEsT0FBdEM7O0FBRUEsVUFBR1IsWUFBSCxFQUFpQjtBQUNiLGFBQUs3WSxJQUFMLENBQVUwRixJQUFWLEdBQWlCa1QsU0FBakI7QUFDSCxPQUZELE1BR0s7QUFDRDtBQUNBL2UsaUVBQUEsQ0FBeUIrZSxTQUF6QixFQUFvQ2xmLE9BQXBDLENBQTRDLFVBQUFnTSxJQUFJO0FBQUEsaUJBQUksS0FBSSxDQUFDMUYsSUFBTCxDQUFVc1osS0FBVixDQUFnQmpnQixJQUFoQixDQUFxQnFNLElBQXJCLENBQUo7QUFBQSxTQUFoRDtBQUNIOztBQUVELGFBQU8sS0FBSzFGLElBQVo7QUFDSDtBQW5GTDtBQUFBO0FBQUEsaUNBcUZpQmdaLE1BckZqQixFQXFGeUI7QUFBQTs7QUFDakJBLFlBQU0sQ0FBQ3RmLE9BQVAsQ0FBZSxVQUFBNmYsS0FBSztBQUFBLGVBQUksTUFBSSxDQUFDQyxXQUFMLENBQWlCRCxLQUFqQixDQUFKO0FBQUEsT0FBcEI7QUFDSDtBQXZGTDtBQUFBO0FBQUEsZ0NBeUZnQkEsS0F6RmhCLEVBeUZ1QjtBQUNmLFVBQUlFLG9EQUFPLENBQUNGLEtBQUQsQ0FBWCxFQUFvQjtBQUNoQixhQUFLRyxXQUFMLENBQWlCSCxLQUFqQjtBQUNILE9BRkQsTUFHSyxJQUFHSSx1REFBVSxDQUFDSixLQUFELENBQWIsRUFBcUI7QUFDdEIsYUFBS0ssY0FBTCxDQUFvQkwsS0FBcEI7QUFDSCxPQUZJLE1BR0E7QUFDRCxhQUFLTSxVQUFMLENBQWdCTixLQUFoQjtBQUNIO0FBQ0o7QUFuR0w7QUFBQTtBQUFBLDhCQXFHY1AsTUFyR2QsRUFxR3NCO0FBQUE7O0FBQ2QsYUFBT0EsTUFBTSxDQUFDbE8sR0FBUCxDQUFXLFVBQUF5TyxLQUFLO0FBQUEsZUFBSSxNQUFJLENBQUNPLFFBQUwsQ0FBY1AsS0FBZCxDQUFKO0FBQUEsT0FBaEIsQ0FBUDtBQUNIO0FBdkdMO0FBQUE7QUFBQSw2QkF5R2FBLEtBekdiLEVBeUdvQjtBQUNaLFVBQUlFLG9EQUFPLENBQUNGLEtBQUQsQ0FBWCxFQUFvQjtBQUNoQixlQUFPLEtBQUtRLFFBQUwsQ0FBY1IsS0FBZCxDQUFQO0FBQ0g7O0FBRUQsVUFBR0ksdURBQVUsQ0FBQ0osS0FBRCxDQUFiLEVBQXNCO0FBQ2xCLGVBQU8sS0FBS1MsV0FBTCxDQUFpQlQsS0FBakIsQ0FBUDtBQUNIOztBQUVELGFBQU8sS0FBS1UsT0FBTCxDQUFhVixLQUFiLENBQVA7QUFDSDtBQW5ITDtBQUFBO0FBQUEsK0JBcUhlbmIsSUFySGYsRUFxSHFCO0FBQUE7O0FBQ2IsVUFBSThiLE9BQU8sR0FBRzliLElBQUksQ0FBQ3VhLFFBQW5CO0FBRUF1QixhQUFPLENBQUMzaUIsU0FBUixHQUFvQixLQUFLNGlCLGtCQUFMLENBQXdCL2IsSUFBeEIsQ0FBcEI7QUFFQSxVQUFJZ2IsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsVUFBSWdCLFlBQVksR0FBR2hjLElBQUksQ0FBQ2ljLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixVQUFBamMsS0FBSyxFQUFJO0FBQ3pDLFlBQUlrYyxRQUFRLEdBQUdsYyxLQUFLLENBQUNzYSxRQUFyQjs7QUFFQSxjQUFJLENBQUM2QixXQUFMLENBQWlCbmMsS0FBakI7O0FBRUEsWUFBSWtjLFFBQVEsQ0FBQ2pnQixTQUFULElBQXNCLElBQTFCLEVBQWdDO0FBQzVCOGUsb0JBQVUsQ0FBQy9mLElBQVgsQ0FBZ0JraEIsUUFBUSxDQUFDamdCLFNBQXpCO0FBQ0E0ZixpQkFBTyxDQUFDTyxNQUFSLEdBQWlCRixRQUFRLENBQUNFLE1BQTFCO0FBQ0EsaUJBQU9QLE9BQU8sQ0FBQ08sTUFBUixJQUFrQixJQUF6QjtBQUNIOztBQUVELGVBQU8sS0FBUDtBQUNILE9BWmtCLENBQW5CLENBTmEsQ0FvQmI7O0FBQ0FsYixvREFBQSxDQUFjNlosVUFBZCxFQUEwQixVQUFBOWUsU0FBUztBQUFBLGVBQUlBLFNBQVMsQ0FBQ29nQixTQUFkO0FBQUEsT0FBbkMsRUFBNERoaEIsT0FBNUQsQ0FBb0UsVUFBQVksU0FBUztBQUFBLGVBQUksTUFBSSxDQUFDMEYsSUFBTCxDQUFVb1osVUFBVixDQUFxQi9mLElBQXJCLENBQTBCaUIsU0FBMUIsQ0FBSjtBQUFBLE9BQTdFO0FBRUE0ZixhQUFPLENBQUNkLFVBQVIsR0FBcUJBLFVBQXJCLENBdkJhLENBeUJiOztBQUNBLFVBQUlnQixZQUFKLEVBQWtCO0FBQ2Q7QUFDSDs7QUFFRCxVQUFJRixPQUFPLENBQUMzaUIsU0FBWixFQUF1QjtBQUNuQjJpQixlQUFPLENBQUN0aUIsS0FBUixHQUFnQixLQUFLK2lCLFFBQUwsQ0FBY3ZjLElBQWQsQ0FBaEI7QUFDSCxPQUZELE1BR0s7QUFDRCxhQUFLOGEsWUFBTCxDQUFrQjlhLElBQUksQ0FBQzZFLFVBQXZCO0FBQ0g7QUFDSjtBQXpKTDtBQUFBO0FBQUEsZ0NBMkpnQjVFLEtBM0poQixFQTJKdUI7QUFDZixVQUFJdWMsUUFBUSxHQUFHdmMsS0FBSyxDQUFDb2EsUUFBckI7QUFBQSxVQUErQm9DLFNBQVMsR0FBR3hjLEtBQUssQ0FBQ0UsU0FBakQ7QUFBQSxVQUNJZ2MsUUFBUSxHQUFHbGMsS0FBSyxDQUFDc2EsUUFEckI7QUFBQSxVQUMrQlYsT0FEL0I7O0FBR0EsVUFBRzRDLFNBQVMsSUFBSSxJQUFoQixFQUFzQjtBQUNsQjVDLGVBQU8sR0FBRyxLQUFLNkMsVUFBTCxDQUFnQkQsU0FBaEIsQ0FBVjtBQUNBTixnQkFBUSxDQUFDdEMsT0FBVCxHQUFtQkEsT0FBbkI7QUFDSDs7QUFFRCxVQUFJMkMsUUFBUSxDQUFDRyxVQUFULENBQW9CLEdBQXBCLENBQUosRUFBOEI7QUFDMUJSLGdCQUFRLENBQUNTLE9BQVQsR0FBbUIsSUFBbkI7QUFDQVQsZ0JBQVEsQ0FBQzVpQixJQUFULEdBQWdCaWpCLFFBQVEsQ0FBQ0ssTUFBVCxDQUFnQixDQUFoQixDQUFoQjtBQUNBVixnQkFBUSxDQUFDVyxVQUFULEdBQXNCM2IsMkNBQUEsQ0FBV3dZLFNBQVgsRUFBc0IsVUFBQW5mLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxLQUFLMmhCLFFBQVEsQ0FBQzVpQixJQUFuQjtBQUFBLFNBQXZCLENBQXRCO0FBQ0FzZ0IsZUFBTyxLQUFLQSxPQUFPLENBQUNuQixPQUFSLEdBQWtCLElBQXZCLENBQVA7QUFDSCxPQUxELE1BTUssSUFBSThELFFBQVEsQ0FBQ0csVUFBVCxDQUFvQixHQUFwQixDQUFKLEVBQThCO0FBQy9CUixnQkFBUSxDQUFDNWlCLElBQVQsR0FBZ0JpakIsUUFBUSxDQUFDSyxNQUFULENBQWdCLENBQWhCLENBQWhCO0FBQ0FoRCxlQUFPLEtBQUtBLE9BQU8sQ0FBQ3BCLEtBQVIsR0FBZ0IsSUFBckIsQ0FBUDtBQUNILE9BSEksTUFJQSxJQUFJK0QsUUFBUSxDQUFDRyxVQUFULENBQW9CLEdBQXBCLENBQUosRUFBOEI7QUFDL0JSLGdCQUFRLENBQUNqZ0IsU0FBVCxHQUFxQixJQUFyQjtBQUNBaWdCLGdCQUFRLENBQUM1aUIsSUFBVCxHQUFnQmlqQixRQUFRLENBQUNLLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBaEI7QUFDQWhELGVBQU8sS0FBS0EsT0FBTyxDQUFDcEIsS0FBUixHQUFnQixJQUFyQixDQUFQO0FBQ0gsT0FKSSxNQUtBO0FBQ0QwRCxnQkFBUSxDQUFDNWlCLElBQVQsR0FBZ0JpakIsUUFBaEI7QUFDSDs7QUFFRCxVQUFJTCxRQUFRLENBQUNqZ0IsU0FBYixFQUF3QjtBQUNwQixZQUFJQSxTQUFTLEdBQUcsS0FBSzZnQixrQkFBTCxDQUF3QjljLEtBQXhCLENBQWhCOztBQUVBLFlBQUkvRCxTQUFKLEVBQWU7QUFDWGlnQixrQkFBUSxDQUFDamdCLFNBQVQsR0FBcUIsS0FBSzhnQixZQUFMLENBQWtCOWdCLFNBQWxCLENBQXJCO0FBQ0FpZ0Isa0JBQVEsQ0FBQ2pnQixTQUFULENBQW1CK2dCLE9BQW5CLEdBQTZCaGQsS0FBN0I7O0FBRUEsY0FBRzRaLE9BQU8sSUFBSSxJQUFkLEVBQW9CO0FBQ2hCQSxtQkFBTyxDQUFDelEsVUFBUixHQUFxQitTLFFBQVEsQ0FBQ2pnQixTQUFULENBQW1CZ2hCLFdBQXhDO0FBQ0g7O0FBRUQsY0FBSWYsUUFBUSxDQUFDamdCLFNBQVQsQ0FBbUJpaEIsUUFBbkIsRUFBSixFQUFtQztBQUMvQmhCLG9CQUFRLENBQUNFLE1BQVQsR0FBa0JGLFFBQVEsQ0FBQ2pnQixTQUEzQjtBQUNBO0FBQ0g7QUFDSixTQVpELE1BYUs7QUFDRCxnQkFBTSxJQUFJaEIsS0FBSixDQUFVLGVBQWVpaEIsUUFBUSxDQUFDNWlCLElBQXhCLEdBQStCLGlCQUF6QyxDQUFOO0FBQ0g7QUFDSjs7QUFFRCxVQUFHc2dCLE9BQU8sSUFBSSxJQUFkLEVBQW9CO0FBQ2hCO0FBQ0g7O0FBRUQsVUFBSSxFQUFFc0MsUUFBUSxDQUFDUyxPQUFULElBQW9CVCxRQUFRLENBQUNqZ0IsU0FBL0IsQ0FBSixFQUErQztBQUMzQyxZQUFJa2hCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVUzZ0IsS0FBVixFQUFpQjtBQUMvQixjQUFJaEMsR0FBRyxHQUFHd0YsS0FBSyxDQUFDRCxJQUFOLENBQVd2RixHQUFyQjs7QUFFQSxjQUFJMGhCLFFBQVEsQ0FBQzVpQixJQUFULENBQWNvakIsVUFBZCxDQUF5QixPQUF6QixDQUFKLEVBQXVDO0FBQ25DeGIsOERBQUEsQ0FBa0IxRyxHQUFsQixFQUF1QjBoQixRQUFRLENBQUM1aUIsSUFBaEMsRUFBc0NrRCxLQUF0QztBQUNILFdBRkQsTUFHSztBQUNEaEMsZUFBRyxDQUFDa0ksWUFBSixDQUFpQndaLFFBQVEsQ0FBQzVpQixJQUExQixFQUFnQ2tELEtBQWhDO0FBQ0g7QUFDSixTQVREOztBQVdBLFlBQUl3RCxLQUFLLENBQUNELElBQU4sQ0FBV3VhLFFBQVgsQ0FBb0JwaEIsU0FBeEIsRUFBbUM7QUFDL0IwZ0IsaUJBQU8sQ0FBQ3dELGtCQUFSLENBQTJCLFVBQVU1Z0IsS0FBVixFQUFpQjtBQUN4QyxnQkFBSXRELFNBQVMsR0FBRzhHLEtBQUssQ0FBQ0QsSUFBTixDQUFXdWEsUUFBWCxDQUFvQnBoQixTQUFwQztBQUNBLGdCQUFJbWtCLFlBQVksR0FBR25jLHdEQUFBLENBQXdCZ2IsUUFBUSxDQUFDNWlCLElBQWpDLEVBQXVDLEdBQXZDLENBQW5COztBQUVBLGdCQUFJSixTQUFTLENBQUNva0IsWUFBVixDQUF1QkQsWUFBdkIsQ0FBSixFQUEwQztBQUN0Q25rQix1QkFBUyxDQUFDMkYsWUFBVixDQUF1QndlLFlBQXZCLEVBQXFDN2dCLEtBQXJDO0FBQ0gsYUFGRCxNQUdLO0FBQ0QyZ0IseUJBQVcsQ0FBQzNnQixLQUFELENBQVg7QUFDSDtBQUNKLFdBVkQ7QUFXSCxTQVpELE1BYUs7QUFDRG9kLGlCQUFPLENBQUN3RCxrQkFBUixDQUEyQkQsV0FBM0I7QUFDSDtBQUNKOztBQUVEdkQsYUFBTyxDQUFDMkQsT0FBUjtBQUNIO0FBL09MO0FBQUE7QUFBQSxnQ0FpUGdCQyxLQWpQaEIsRUFpUHVCO0FBQ2ZBLFdBQUssQ0FBQ2xELFFBQU4sQ0FBZVYsT0FBZixHQUF5QixLQUFLNkMsVUFBTCxDQUFnQmUsS0FBSyxDQUFDdGQsU0FBdEIsQ0FBekI7QUFDQXNkLFdBQUssQ0FBQ2xELFFBQU4sQ0FBZVYsT0FBZixDQUF1QndELGtCQUF2QixDQUEwQyxVQUFVNWdCLEtBQVYsRUFBaUI7QUFDdkQsWUFBSWhDLEdBQUo7QUFBQSxZQUFTaWpCLFdBQVcsR0FBR3pnQixRQUFRLENBQUNzSixjQUFULENBQXdCOUosS0FBeEIsQ0FBdkI7O0FBRUEsWUFBSWdoQixLQUFLLENBQUMxYyxVQUFOLElBQW9CLElBQXhCLEVBQThCO0FBQzFCLGNBQUkwYyxLQUFLLENBQUNoakIsR0FBTixJQUFhLElBQWpCLEVBQXVCO0FBQ25CQSxlQUFHLEdBQUdnakIsS0FBSyxDQUFDaGpCLEdBQU4sQ0FBVXNHLFVBQWhCO0FBQ0g7QUFDSixTQUpELE1BS0s7QUFDRHRHLGFBQUcsR0FBR2dqQixLQUFLLENBQUMxYyxVQUFOLENBQWlCdEcsR0FBdkI7QUFDSDs7QUFFRCxZQUFJQSxHQUFHLElBQUksSUFBWCxFQUFpQjtBQUNiLGNBQUlnakIsS0FBSyxDQUFDaGpCLEdBQU4sSUFBYSxJQUFqQixFQUF1QjtBQUNuQkEsZUFBRyxDQUFDb0csV0FBSixDQUFnQjZjLFdBQWhCO0FBQ0gsV0FGRCxNQUdLO0FBQ0RqaUIsK0RBQUEsQ0FBbUJnaUIsS0FBSyxDQUFDaGpCLEdBQXpCLEVBQThCaWpCLFdBQTlCO0FBQ0g7QUFDSjs7QUFFREQsYUFBSyxDQUFDaGpCLEdBQU4sR0FBWWlqQixXQUFaO0FBQ0gsT0F0QkQ7QUF1QkFELFdBQUssQ0FBQ2xELFFBQU4sQ0FBZVYsT0FBZixDQUF1QjJELE9BQXZCO0FBQ0g7QUEzUUw7QUFBQTtBQUFBLG1DQTZRbUJHLEtBN1FuQixFQTZRMEIsQ0FFckI7QUEvUUw7QUFBQTtBQUFBLDRCQWlSWTNkLElBalJaLEVBaVJrQjtBQUFBOztBQUNWLFVBQUk4YixPQUFPLEdBQUc5YixJQUFJLENBQUN1YSxRQUFuQjs7QUFFQSxVQUFJdUIsT0FBTyxDQUFDTyxNQUFSLElBQWtCLElBQXRCLEVBQTRCO0FBQ3hCLGVBQU9QLE9BQU8sQ0FBQ08sTUFBUixDQUFldUIsS0FBZixFQUFQO0FBQ0g7O0FBRUQ1ZCxVQUFJLENBQUN2RixHQUFMLEdBQVd3QyxRQUFRLENBQUNxSixhQUFULENBQXVCdEcsSUFBSSxDQUFDcWEsUUFBNUIsQ0FBWDs7QUFFQSxVQUFJeUIsT0FBTyxDQUFDM2lCLFNBQVosRUFBdUI7QUFDbkIsWUFBSTBrQixRQUFRLEdBQUcsS0FBS0MsWUFBTCxDQUFrQmhDLE9BQU8sQ0FBQzNpQixTQUExQixDQUFmO0FBRUEyaUIsZUFBTyxDQUFDM2lCLFNBQVIsR0FBb0Iwa0IsUUFBcEI7QUFFQXBpQixxREFBQSxDQUFhdUUsSUFBSSxDQUFDdkYsR0FBbEIsRUFBdUJpQixnREFBdkI7QUFFQXNFLFlBQUksQ0FBQ2ljLE1BQUwsQ0FBWTNnQixPQUFaLENBQW9CLFVBQUEyRSxLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDOGQsUUFBTCxDQUFjOWQsS0FBZCxDQUFKO0FBQUEsU0FBekI7QUFFQTRkLGdCQUFRLENBQUNHLE1BQVQsR0FBa0JoZSxJQUFsQjtBQUNBNmQsZ0JBQVEsQ0FBQ0ksYUFBVCxDQUF1QmplLElBQUksQ0FBQ3ZGLEdBQTVCO0FBQ0FvakIsZ0JBQVEsQ0FBQ0ssUUFBVCxDQUFrQnBDLE9BQU8sQ0FBQ3RpQixLQUExQjtBQUNBcWtCLGdCQUFRLENBQUNyYyxPQUFUO0FBQ0gsT0FiRCxNQWNLO0FBQ0R4QixZQUFJLENBQUNpYyxNQUFMLENBQVkzZ0IsT0FBWixDQUFvQixVQUFBMkUsS0FBSztBQUFBLGlCQUFJLE1BQUksQ0FBQzhkLFFBQUwsQ0FBYzlkLEtBQWQsQ0FBSjtBQUFBLFNBQXpCO0FBQ0FELFlBQUksQ0FBQzZFLFVBQUwsQ0FBZ0J2SixPQUFoQixDQUF3QixVQUFBeUosS0FBSztBQUFBLGlCQUFJL0UsSUFBSSxDQUFDdkYsR0FBTCxDQUFTb0csV0FBVCxDQUFxQixNQUFJLENBQUM2YSxRQUFMLENBQWMzVyxLQUFkLENBQXJCLENBQUo7QUFBQSxTQUE3QjtBQUNIOztBQUVELGFBQU8vRSxJQUFJLENBQUN2RixHQUFaO0FBQ0g7QUE5U0w7QUFBQTtBQUFBLDZCQWdUYXdGLEtBaFRiLEVBZ1RvQjtBQUNaLFVBQUlELElBQUksR0FBR0MsS0FBSyxDQUFDRCxJQUFqQjtBQUFBLFVBQ0l2RixHQUFHLEdBQUd1RixJQUFJLENBQUN2RixHQURmO0FBQUEsVUFFSTBoQixRQUFRLEdBQUdsYyxLQUFLLENBQUNzYSxRQUZyQjtBQUFBLFVBR0lWLE9BQU8sR0FBR3NDLFFBQVEsQ0FBQ3RDLE9BSHZCOztBQUtBLFVBQUdBLE9BQU8sSUFBSSxJQUFkLEVBQW9CO0FBQ2hCO0FBQ0g7O0FBRUQsVUFBSXNDLFFBQVEsQ0FBQ1MsT0FBYixFQUFzQjtBQUNsQixZQUFJVCxRQUFRLENBQUNXLFVBQWIsRUFBeUI7QUFDckJyaUIsYUFBRyxDQUFDZ0UsZ0JBQUosQ0FBcUIwZCxRQUFRLENBQUM1aUIsSUFBOUIsRUFBb0MsVUFBQWlCLENBQUM7QUFBQSxtQkFBSXFmLE9BQU8sQ0FBQ1QsT0FBUixDQUFnQixJQUFJN2UsMkNBQUosQ0FBVUMsQ0FBVixFQUFhQyxHQUFiLENBQWhCLENBQUo7QUFBQSxXQUFyQztBQUNILFNBRkQsTUFHSyxJQUFJdUYsSUFBSSxDQUFDdWEsUUFBTCxDQUFjcGhCLFNBQWxCLEVBQTZCO0FBQzlCLGNBQUlnbEIsU0FBUyxHQUFHaGQsd0RBQUEsQ0FBd0JnYixRQUFRLENBQUM1aUIsSUFBakMsRUFBdUMsR0FBdkMsQ0FBaEI7QUFDQXlHLGNBQUksQ0FBQ3VhLFFBQUwsQ0FBY3BoQixTQUFkLENBQXdCbUYsS0FBeEIsQ0FBOEI2ZixTQUE5QixFQUF5QyxVQUFBM2pCLENBQUM7QUFBQSxtQkFBSXFmLE9BQU8sQ0FBQ1QsT0FBUixDQUFnQixJQUFJN2UsMkNBQUosQ0FBVUMsQ0FBVixFQUFhQyxHQUFiLENBQWhCLENBQUo7QUFBQSxXQUExQztBQUNIO0FBQ0osT0FSRCxNQVNLO0FBQ0RvZixlQUFPLENBQUN1RSxJQUFSO0FBQ0F2RSxlQUFPLENBQUNWLEtBQVI7QUFDSCxPQXRCVyxDQXdCWjs7O0FBQ0EsVUFBR2dELFFBQVEsQ0FBQ2pnQixTQUFaLEVBQXVCO0FBQ25CMmQsZUFBTyxDQUFDd0Qsa0JBQVIsQ0FBMkIsVUFBQzNlLFFBQUQsRUFBVzJXLFFBQVg7QUFBQSxpQkFBd0I4RyxRQUFRLENBQUNqZ0IsU0FBVCxDQUFtQm1pQixPQUFuQixDQUEyQjNmLFFBQTNCLEVBQXFDMlcsUUFBckMsQ0FBeEI7QUFBQSxTQUEzQjtBQUNIO0FBQ0o7QUE1VUw7QUFBQTtBQUFBLDZCQThVYW9JLEtBOVViLEVBOFVvQjtBQUNaQSxXQUFLLENBQUNsRCxRQUFOLENBQWVWLE9BQWYsQ0FBdUJ1RSxJQUF2QjtBQUNBWCxXQUFLLENBQUNoakIsR0FBTixHQUFZd0MsUUFBUSxDQUFDc0osY0FBVCxDQUF3QmtYLEtBQUssQ0FBQ2xELFFBQU4sQ0FBZVYsT0FBZixDQUF1QnBkLEtBQS9DLENBQVo7QUFDQSxhQUFPZ2hCLEtBQUssQ0FBQ2hqQixHQUFiO0FBQ0g7QUFsVkw7QUFBQTtBQUFBLGdDQW9WZ0JrakIsS0FwVmhCLEVBb1Z1QjtBQUNmLGFBQU8xZ0IsUUFBUSxDQUFDQyxhQUFULENBQXVCeWdCLEtBQUssQ0FBQ3hkLFNBQTdCLENBQVA7QUFDSDtBQXRWTDtBQUFBO0FBQUEsNkJBd1ZhSCxJQXhWYixFQXdWbUI7QUFDWCxVQUFJeEcsS0FBSyxHQUFHLEVBQVo7QUFFQXdHLFVBQUksQ0FBQzZFLFVBQUwsQ0FBZ0J2SixPQUFoQixDQUF3QixVQUFBeUosS0FBSyxFQUFJO0FBQzdCLFlBQUd1WixtREFBTSxDQUFDdlosS0FBRCxDQUFULEVBQWtCO0FBQ2QsY0FBSXdaLElBQUksR0FBR3haLEtBQUssQ0FBQ3laLE9BQU4sQ0FBYyxNQUFkLENBQVg7O0FBRUEsY0FBR0QsSUFBSCxFQUFTO0FBQ0wva0IsaUJBQUssQ0FBQytrQixJQUFJLENBQUNwZSxTQUFOLENBQUwsR0FBd0I0RSxLQUFLLENBQUMwWixXQUFOLEVBQXhCO0FBQ0g7QUFDSjtBQUNKLE9BUkQ7QUFVQSxhQUFRamxCLEtBQVI7QUFDSDtBQXRXTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7O0lBRU1rbEIsSTtBQUNGLGtCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsU0FBSzlELE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS2QsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtrQixVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS2YsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUswRSxXQUFMLEdBQW1CdmtCLDRDQUFNLENBQUNFLFdBQVAsQ0FBbUJ3SixFQUFuQixDQUFzQjtBQUFBLGFBQU0sS0FBSSxDQUFDOGEsT0FBTCxFQUFOO0FBQUEsS0FBdEIsQ0FBbkI7QUFDSDs7OzswQkFFS0MsaUIsRUFBbUI7QUFDckIsVUFBSUMsT0FBSjs7QUFFQSxVQUFJM2QsK0NBQUEsQ0FBZTBkLGlCQUFmLENBQUosRUFBdUM7QUFDbkNDLGVBQU8sR0FBRzdoQixRQUFRLENBQUM4aEIsYUFBVCxDQUF1QkYsaUJBQXZCLENBQVY7QUFDSCxPQUZELE1BR0s7QUFDREMsZUFBTyxHQUFHRCxpQkFBVjtBQUNIOztBQUVEQyxhQUFPLENBQUNqZSxXQUFSLENBQW9CLEtBQUthLE9BQXpCO0FBQ0g7Ozs4QkFFUztBQUNOLFVBQUksQ0FBQyxLQUFLb1ksUUFBTCxDQUFjN1gsTUFBbkIsRUFBMkI7QUFDdkI7QUFDSDs7QUFFRCxXQUFLNlgsUUFBTCxDQUFjeGUsT0FBZCxDQUFzQixVQUFBdWUsT0FBTyxFQUFJO0FBQzdCQSxlQUFPLENBQUNYLE1BQVI7QUFDQVcsZUFBTyxDQUFDVixLQUFSO0FBQ0gsT0FIRDtBQUlIOzs7OEJBRVM7QUFDTixXQUFLd0YsV0FBTDtBQUNBLFdBQUtLLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxFQUFsQjtBQUVBLFdBQUsvRSxVQUFMLENBQWdCM2UsT0FBaEIsQ0FBd0IsVUFBQThGLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUM2ZCxRQUFMLEVBQUo7QUFBQSxPQUE1QjtBQUNBLFdBQUtqRSxVQUFMLENBQWdCMWYsT0FBaEIsQ0FBd0IsVUFBQThGLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUM2ZCxRQUFMLEVBQUo7QUFBQSxPQUE1QjtBQUNBLFdBQUtuRixRQUFMLENBQWN4ZSxPQUFkLENBQXNCLFVBQUE4RixJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDckgsT0FBTCxFQUFKO0FBQUEsT0FBMUI7QUFDQSxXQUFLNmdCLE1BQUwsQ0FBWXRmLE9BQVosQ0FBb0IsVUFBQThGLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUNySCxPQUFMLEVBQUo7QUFBQSxPQUF4QjtBQUVBLFdBQUtrZ0IsVUFBTCxDQUFnQmhZLE1BQWhCLEdBQXlCLENBQXpCO0FBQ0EsV0FBSytZLFVBQUwsQ0FBZ0IvWSxNQUFoQixHQUF5QixDQUF6QjtBQUNBLFdBQUs2WCxRQUFMLENBQWM3WCxNQUFkLEdBQXVCLENBQXZCO0FBQ0EsV0FBSzJZLE1BQUwsQ0FBWTNZLE1BQVosR0FBcUIsQ0FBckI7QUFDSDs7Ozs7O0FBR0UsSUFBTXlZLGNBQWI7QUFBQTs7QUFBQTtBQUFBO0FBQUEsd0JBQ2tCO0FBQ1YsYUFBTyxLQUFLcFQsSUFBWjtBQUNIO0FBSEw7O0FBS0ksNEJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFdBQUtBLElBQUwsR0FBWSxJQUFaO0FBRlU7QUFHYjs7QUFSTDtBQUFBLEVBQW9Db1gsSUFBcEM7QUFXTyxJQUFNL0QsZ0JBQWI7QUFBQTs7QUFBQTtBQUFBO0FBQUEsd0JBQ2tCO0FBQ1YsVUFBSWpaLE9BQU8sR0FBR3pFLFFBQVEsQ0FBQ3lELHNCQUFULEVBQWQ7QUFDQSxXQUFLd2EsS0FBTCxDQUFXNWYsT0FBWCxDQUFtQixVQUFBZ00sSUFBSTtBQUFBLGVBQUk1RixPQUFPLENBQUNiLFdBQVIsQ0FBb0J5RyxJQUFwQixDQUFKO0FBQUEsT0FBdkI7QUFDQSxhQUFPNUYsT0FBUDtBQUNIO0FBTEw7O0FBT0ksOEJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFdBQUt3WixLQUFMLEdBQWEsRUFBYjtBQUZVO0FBR2I7O0FBVkw7QUFBQTtBQUFBLGdDQVlnQjtBQUNSLFdBQUtBLEtBQUwsQ0FBV2paLE1BQVgsR0FBb0IsQ0FBcEI7QUFDSDtBQWRMOztBQUFBO0FBQUEsRUFBc0N5YyxJQUF0QyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQU1PLElBQU1RLFdBQWIsV0FKQzVpQiwwREFBTyxDQUFDO0FBQ0xsRCxXQUFTLEVBQUUsVUFETjtBQUVMQyxLQUFHLEVBQUU7QUFGQSxDQUFELENBSVI7QUFBQTs7QUFDSSx5QkFBYztBQUFBOztBQUFBO0FBRWI7O0FBSEw7QUFBQTtBQUFBLGdDQUtnQjtBQUNSLGFBQU8sSUFBSThsQixjQUFKLEVBQVA7QUFDSDtBQVBMO0FBQUE7QUFBQSxrQ0FTa0JDLE9BVGxCLEVBUzJCQyxNQVQzQixFQVNtQztBQUMzQixhQUFPLElBQUlDLE9BQUosQ0FBWUYsT0FBWixFQUFxQkMsTUFBckIsQ0FBUDtBQUNIO0FBWEw7QUFBQTtBQUFBLGdDQWFnQkUsR0FiaEIsRUFhcUJobUIsSUFickIsRUFhMkJrRCxLQWIzQixFQWFrQztBQUMxQjhpQixTQUFHLElBQUtBLEdBQUcsQ0FBQ3ZrQixPQUFKLENBQVksR0FBWixNQUFxQixDQUFDLENBQXRCLEdBQTBCLEdBQTFCLEdBQWdDLEdBQXhDO0FBQ0F1a0IsU0FBRyxJQUFJQyxrQkFBa0IsQ0FBQ2ptQixJQUFELENBQWxCLEdBQTJCLEdBQTNCLEdBQWlDaW1CLGtCQUFrQixDQUFDL2lCLEtBQUQsQ0FBMUQ7QUFDQSxhQUFPOGlCLEdBQVA7QUFDSDtBQWpCTDtBQUFBO0FBQUEsMENBbUIwQkUsR0FuQjFCLEVBbUIrQkMsTUFuQi9CLEVBbUJ1QztBQUMvQnZlLG9EQUFBLENBQWN1ZSxNQUFNLENBQUNDLE9BQXJCLEVBQThCLFVBQVVsakIsS0FBVixFQUFpQnBELEdBQWpCLEVBQXNCO0FBQ2hEQSxXQUFHLEdBQUc4SCwwREFBQSxDQUEwQjlILEdBQTFCLEVBQStCLEdBQS9CLENBQU47QUFDQW9tQixXQUFHLENBQUNHLGdCQUFKLENBQXFCdm1CLEdBQXJCLEVBQTBCb0QsS0FBMUI7QUFDSCxPQUhEO0FBSUg7QUF4Qkw7QUFBQTtBQUFBLDJDQTBCMkJrakIsT0ExQjNCLEVBMEJvQztBQUM1QixVQUFJRSxNQUFNLEdBQUcsRUFBYjs7QUFFQSxVQUFJLENBQUNGLE9BQUwsRUFBYztBQUNWLGVBQU9FLE1BQVA7QUFDSDs7QUFFRCxVQUFJeG1CLEdBQUosRUFBU3ltQixHQUFULEVBQWNuUSxDQUFkO0FBRUF4TyxvREFBQSxDQUFjd2UsT0FBTyxDQUFDN1osS0FBUixDQUFjLElBQWQsQ0FBZCxFQUFtQyxVQUFVaWEsSUFBVixFQUFnQmhsQixLQUFoQixFQUF1QjtBQUN0RDRVLFNBQUMsR0FBR29RLElBQUksQ0FBQy9rQixPQUFMLENBQWEsR0FBYixDQUFKO0FBQ0EzQixXQUFHLEdBQUcwbUIsSUFBSSxDQUFDbEQsTUFBTCxDQUFZLENBQVosRUFBZWxOLENBQWYsRUFBa0I5SixJQUFsQixHQUF5Qm1hLFdBQXpCLEVBQU47QUFDQUYsV0FBRyxHQUFHQyxJQUFJLENBQUNsRCxNQUFMLENBQVlsTixDQUFDLEdBQUcsQ0FBaEIsRUFBbUI5SixJQUFuQixFQUFOOztBQUVBLFlBQUl4TSxHQUFKLEVBQVM7QUFDTCxjQUFJd21CLE1BQU0sQ0FBQ3htQixHQUFELENBQU4sSUFBZTRtQixpQkFBaUIsQ0FBQ2psQixPQUFsQixDQUEwQjNCLEdBQTFCLEtBQWtDLENBQXJELEVBQXdEO0FBQ3BEO0FBQ0g7O0FBQ0QsY0FBSUEsR0FBRyxLQUFLLFlBQVosRUFBMEI7QUFDdEJ3bUIsa0JBQU0sQ0FBQ3htQixHQUFELENBQU4sR0FBYyxDQUFDd21CLE1BQU0sQ0FBQ3htQixHQUFELENBQU4sR0FBY3dtQixNQUFNLENBQUN4bUIsR0FBRCxDQUFwQixHQUE0QixFQUE3QixFQUFpQzZtQixNQUFqQyxDQUF3QyxDQUFDSixHQUFELENBQXhDLENBQWQ7QUFDSCxXQUZELE1BRU87QUFDSEQsa0JBQU0sQ0FBQ3htQixHQUFELENBQU4sR0FBY3dtQixNQUFNLENBQUN4bUIsR0FBRCxDQUFOLEdBQWN3bUIsTUFBTSxDQUFDeG1CLEdBQUQsQ0FBTixHQUFjLElBQWQsR0FBcUJ5bUIsR0FBbkMsR0FBeUNBLEdBQXZEO0FBQ0g7QUFDSjtBQUNKLE9BZkQ7QUFpQkEsYUFBT0QsTUFBUDtBQUNIO0FBckRMO0FBQUE7QUFBQSw2QkF1RGFOLEdBdkRiLEVBdURrQkcsTUF2RGxCLEVBdUQwQjtBQUNsQixVQUFJL2dCLElBQUksR0FBRyxJQUFYOztBQUVBLFVBQUkrZ0IsTUFBTSxDQUFDOWtCLElBQVAsSUFBZSxJQUFmLElBQXVCOGtCLE1BQU0sQ0FBQ1MsTUFBUCxDQUFjSCxXQUFkLE9BQWdDLEtBQTNELEVBQWtFO0FBQzlEN2Usc0RBQUEsQ0FBY3VlLE1BQU0sQ0FBQzlrQixJQUFyQixFQUEyQixVQUFVNkIsS0FBVixFQUFpQmxELElBQWpCLEVBQXVCO0FBQzlDb0YsY0FBSSxDQUFDeWhCLFdBQUwsQ0FBaUJiLEdBQWpCLEVBQXNCaG1CLElBQXRCLEVBQTRCa0QsS0FBNUI7QUFDSCxTQUZEO0FBR0g7O0FBQ0QsYUFBTzhpQixHQUFQO0FBQ0g7QUFoRUw7QUFBQTtBQUFBLDRCQWtFWUcsTUFsRVosRUFrRW9CO0FBQ1osVUFBSS9nQixJQUFJLEdBQUcsSUFBWDtBQUVBLGFBQU8sS0FBSzBoQixhQUFMLENBQW1CLFVBQVVqQixPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUNqRCxZQUFJSSxHQUFHLEdBQUc5Z0IsSUFBSSxDQUFDMmhCLFNBQUwsRUFBVjs7QUFFQWIsV0FBRyxDQUFDYyxNQUFKLEdBQWEsWUFBWTtBQUNyQjtBQUNBLGNBQUlDLGVBQWUsR0FBRywyQkFBMkJmLEdBQTNCLEdBQWlDOWdCLElBQUksQ0FBQzhoQixzQkFBTCxDQUE0QmhCLEdBQUcsQ0FBQ2lCLHFCQUFKLEVBQTVCLENBQWpDLEdBQTRGLElBQWxIO0FBQ0EsY0FBSUMsWUFBWSxHQUFHLENBQUNqQixNQUFNLENBQUNrQixZQUFSLElBQXdCbEIsTUFBTSxDQUFDa0IsWUFBUCxLQUF3QixNQUFoRCxHQUF5RG5CLEdBQUcsQ0FBQ29CLFlBQTdELEdBQTRFcEIsR0FBRyxDQUFDcUIsUUFBbkc7QUFDQSxjQUFJQSxRQUFRLEdBQUc7QUFDWGxtQixnQkFBSSxFQUFFK2xCLFlBREs7QUFFWGpqQixrQkFBTSxFQUFFK2hCLEdBQUcsQ0FBQy9oQixNQUZEO0FBR1hxakIsc0JBQVUsRUFBRXRCLEdBQUcsQ0FBQ3NCLFVBSEw7QUFJWHBCLG1CQUFPLEVBQUVhLGVBSkU7QUFLWGQsa0JBQU0sRUFBRUEsTUFMRztBQU1Yc0IsbUJBQU8sRUFBRXZCO0FBTkUsV0FBZjs7QUFTQSxjQUFLQSxHQUFHLENBQUMvaEIsTUFBSixJQUFjLEdBQWQsSUFBcUIraEIsR0FBRyxDQUFDL2hCLE1BQUosR0FBYSxHQUFuQyxJQUEyQytoQixHQUFHLENBQUMvaEIsTUFBSixJQUFjLEdBQTdELEVBQWtFO0FBQzlEO0FBQ0EwaEIsbUJBQU8sQ0FBQzBCLFFBQUQsQ0FBUDtBQUNILFdBSEQsTUFJSztBQUNEO0FBQ0F6QixrQkFBTSxDQUFDeUIsUUFBRCxDQUFOO0FBQ0g7O0FBRURyQixhQUFHLEdBQUcsSUFBTjtBQUNILFNBdkJEOztBQXlCQSxZQUFJVSxNQUFNLEdBQUdULE1BQU0sQ0FBQ1MsTUFBUCxDQUFjSCxXQUFkLEVBQWI7QUFBQSxZQUNJVCxHQUFHLEdBQUc1Z0IsSUFBSSxDQUFDc2lCLFFBQUwsQ0FBY3ZCLE1BQU0sQ0FBQ0gsR0FBckIsRUFBMEJHLE1BQTFCLENBRFY7QUFHQUQsV0FBRyxDQUFDeUIsSUFBSixDQUFTZixNQUFULEVBQWlCWixHQUFqQixFQUFzQixJQUF0QjtBQUNBRSxXQUFHLENBQUMwQixJQUFKLENBQVN6QixNQUFNLENBQUM5a0IsSUFBaEI7QUFDSCxPQWpDTSxDQUFQO0FBa0NIO0FBdkdMO0FBQUE7QUFBQSx3QkF5R1Eya0IsR0F6R1IsRUF5R2Eza0IsSUF6R2IsRUF5R21Cb0QsT0F6R25CLEVBeUc0QjtBQUNwQixVQUFJMGhCLE1BQU0sR0FBRztBQUNUUyxjQUFNLEVBQUUsS0FEQztBQUVUWixXQUFHLEVBQUVBLEdBRkk7QUFHVDNrQixZQUFJLEVBQUVBO0FBSEcsT0FBYjs7QUFNQSxVQUFJb0QsT0FBTyxJQUFJLElBQWYsRUFBcUI7QUFDakJtRCxxREFBQSxDQUFhdWUsTUFBYixFQUFxQjFoQixPQUFyQjtBQUNIOztBQUVELGFBQU8sS0FBS2dqQixPQUFMLENBQWF0QixNQUFiLENBQVA7QUFDSDtBQXJITDtBQUFBO0FBQUEseUJBdUhTSCxHQXZIVCxFQXVIYzNrQixJQXZIZCxFQXVIb0JvRCxPQXZIcEIsRUF1SDZCO0FBQ3JCLFVBQUkwaEIsTUFBTSxHQUFHO0FBQ1RTLGNBQU0sRUFBRSxNQURDO0FBRVRaLFdBQUcsRUFBRUEsR0FGSTtBQUdUSSxlQUFPLEVBQUU7QUFDTHlCLHFCQUFXLEVBQUU7QUFEUixTQUhBO0FBTVR4bUIsWUFBSSxFQUFFeW1CLElBQUksQ0FBQ0MsU0FBTCxDQUFlMW1CLElBQWY7QUFORyxPQUFiOztBQVNBLFVBQUlvRCxPQUFPLElBQUksSUFBZixFQUFxQjtBQUNqQm1ELHFEQUFBLENBQWF1ZSxNQUFiLEVBQXFCMWhCLE9BQXJCO0FBQ0g7O0FBRUQsYUFBTyxLQUFLZ2pCLE9BQUwsQ0FBYXRCLE1BQWIsQ0FBUDtBQUNIO0FBdElMOztBQUFBO0FBQUEsRUFBaUM2Qiw2Q0FBakMsYzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFNTyxJQUFNQyxRQUFiLFdBSkNsbEIsMERBQU8sQ0FBQztBQUNMbEQsV0FBUyxFQUFFLFVBRE47QUFFTEMsS0FBRyxFQUFFO0FBRkEsQ0FBRCxDQUlSO0FBQUE7O0FBQ0ksc0JBQWM7QUFBQTs7QUFBQTtBQUViOztBQUhMO0FBQUE7QUFBQSxtQ0FLbUJFLElBTG5CLEVBS3lCa29CLEtBTHpCLEVBS2dDQyxTQUxoQyxFQUsyQztBQUNuQyxhQUFPMWxCLDhDQUFRLENBQUMybEIsY0FBVCxDQUF3QnBvQixJQUF4QixFQUE4QmtvQixLQUE5QixFQUFxQ0MsU0FBckMsQ0FBUDtBQUNIO0FBUEw7QUFBQTtBQUFBLG1DQVNtQm5vQixJQVRuQixFQVN5QmtvQixLQVR6QixFQVNnQ0MsU0FUaEMsRUFTMkM7QUFDbkMsYUFBTzFsQiw4Q0FBUSxDQUFDNGxCLGNBQVQsQ0FBd0Jyb0IsSUFBeEIsRUFBOEJrb0IsS0FBOUIsRUFBcUNDLFNBQXJDLENBQVA7QUFDSDtBQVhMO0FBQUE7QUFBQSxpQ0FhaUJub0IsSUFiakIsRUFhdUJrb0IsS0FidkIsRUFhOEJDLFNBYjlCLEVBYXlDO0FBQ2pDLGFBQU8xbEIsOENBQVEsQ0FBQzZsQixZQUFULENBQXNCdG9CLElBQXRCLEVBQTRCa29CLEtBQTVCLEVBQW1DQyxTQUFuQyxDQUFQO0FBQ0g7QUFmTDtBQUFBO0FBQUEsZ0NBaUJnQm5vQixJQWpCaEIsRUFpQnNCa29CLEtBakJ0QixFQWlCNkJDLFNBakI3QixFQWlCd0M7QUFDaEMsYUFBTzFsQiw4Q0FBUSxDQUFDOGxCLFdBQVQsQ0FBcUJ2b0IsSUFBckIsRUFBMkJrb0IsS0FBM0IsRUFBa0NDLFNBQWxDLENBQVA7QUFDSDtBQW5CTDs7QUFBQTtBQUFBLEVBQThCSCw2Q0FBOUIsYzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFFTyxJQUFNUSxLQUFiO0FBQUE7O0FBQ0ksaUJBQVl4b0IsSUFBWixFQUFrQmtELEtBQWxCLEVBQXlCO0FBQUE7O0FBQUE7O0FBQ3JCLCtFQUFNdWxCLCtDQUFRLENBQUNDLFNBQWYsRUFBMEIxb0IsSUFBMUIsRUFBZ0NrRCxLQUFoQztBQUNBLFVBQUt1RCxJQUFMLEdBQVksSUFBWjtBQUNBLFVBQUsrUSxLQUFMLEdBQWEsR0FBYjtBQUhxQjtBQUl4Qjs7QUFMTDtBQUFBO0FBQUEsNkJBT2F0VSxLQVBiLEVBT29CO0FBQ1osV0FBSzBELFNBQUwsR0FBaUIxRCxLQUFqQjtBQUNIO0FBVEw7QUFBQTtBQUFBLGtDQVdrQjtBQUNWLGFBQU8sSUFBSXNsQixLQUFKLENBQVUsS0FBSzFILFFBQWYsRUFBeUIsS0FBS2xhLFNBQTlCLENBQVA7QUFDSDtBQWJMO0FBQUE7QUFBQSxnQ0FlZ0IsQ0FFWDtBQWpCTDs7QUFBQTtBQUFBLEVBQTJCK2hCLDRDQUEzQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVPLElBQU1DLEtBQWI7QUFBQTs7QUFDSSxpQkFBWTFsQixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEVBQ1R1bEIsK0NBQVEsQ0FBQ0ksT0FEQSxFQUNTLFVBRFQsRUFDcUIzbEIsS0FEckI7QUFFbEI7O0FBSEw7QUFBQTtBQUFBLGtDQUtrQjtBQUNWLGFBQU8sSUFBSTBsQixLQUFKLENBQVUsS0FBSzlILFFBQWYsRUFBeUIsS0FBS2xhLFNBQTlCLENBQVA7QUFDSDtBQVBMOztBQUFBO0FBQUEsRUFBMkIraEIsNENBQTNCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUcsSUFBYjtBQUFBOztBQUNJLGdCQUFZOW9CLElBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4RUFBTXlvQiwrQ0FBUSxDQUFDbEQsT0FBZixFQUF3QnZsQixJQUF4QjtBQUNBLFVBQUtrQixHQUFMLEdBQVcsSUFBWDtBQUNBLFVBQUt3aEIsTUFBTCxHQUFjLEVBQWQ7QUFDQSxVQUFLcUcsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFVBQUtwYixPQUFMLEdBQWUsSUFBSXFiLHVEQUFKLEVBQWY7QUFMYztBQU1qQjs7QUFQTDtBQUFBO0FBQUEsNkJBU2FDLElBVGIsRUFTbUI7QUFDWEEsVUFBSSxDQUFDeGlCLElBQUwsR0FBWSxJQUFaO0FBQ0EsV0FBS2ljLE1BQUwsQ0FBWWhoQixJQUFaLENBQWlCdW5CLElBQWpCO0FBQ0g7QUFaTDtBQUFBO0FBQUEsOEJBY2M7QUFDTixhQUFPLEtBQUt2RyxNQUFMLENBQVloYSxNQUFaLEtBQXVCLENBQTlCO0FBQ0g7QUFoQkw7QUFBQTtBQUFBLDRCQWtCWTVJLEdBbEJaLEVBa0JpQjtBQUNULFVBQUlvcEIsT0FBTyxHQUFHLEtBQUt4RyxNQUFMLENBQVk3ZixNQUFaLENBQW1CLFVBQVVvbUIsSUFBVixFQUFnQjtBQUM3QyxlQUFPQSxJQUFJLENBQUNuSSxRQUFMLEtBQWtCaGhCLEdBQXpCO0FBQ0gsT0FGYSxDQUFkOztBQUlBLFVBQUksQ0FBQ29wQixPQUFPLENBQUN4Z0IsTUFBYixFQUFxQjtBQUNqQixlQUFPLElBQVA7QUFDSDs7QUFFRCxhQUFPd2dCLE9BQU8sQ0FBQyxDQUFELENBQWQ7QUFDSDtBQTVCTDtBQUFBO0FBQUEsNEJBOEJZcHBCLEdBOUJaLEVBOEJpQm9ELEtBOUJqQixFQThCd0I7QUFDaEIsVUFBSVosTUFBSjtBQUFBLFVBQVk0bUIsT0FBTyxHQUFHLEtBQUt4RyxNQUFMLENBQVk3ZixNQUFaLENBQW1CLFVBQVVvbUIsSUFBVixFQUFnQjtBQUNyRCxlQUFPQSxJQUFJLENBQUNFLFFBQUwsQ0FBY3JwQixHQUFkLENBQVA7QUFDSCxPQUZxQixDQUF0Qjs7QUFJQSxVQUFJb3BCLE9BQU8sQ0FBQ3hnQixNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQ3BCcEcsY0FBTSxHQUFHNG1CLE9BQU8sQ0FBQyxDQUFELENBQWhCO0FBQ0E1bUIsY0FBTSxDQUFDOG1CLFFBQVAsQ0FBZ0JsbUIsS0FBaEI7QUFDSCxPQUhELE1BSUs7QUFDRFosY0FBTSxHQUFHLElBQUlrbUIsNENBQUosQ0FBVTFvQixHQUFWLEVBQWVvRCxLQUFmLENBQVQ7QUFDQVosY0FBTSxDQUFDbUUsSUFBUCxHQUFjLElBQWQ7QUFDQW5FLGNBQU0sQ0FBQzJoQixPQUFQLENBQWUsS0FBS29GLGNBQXBCO0FBQ0g7O0FBRUQsV0FBSzNHLE1BQUwsQ0FBWWhoQixJQUFaLENBQWlCWSxNQUFqQjtBQUVBLGFBQU9BLE1BQVA7QUFDSDtBQWhETDtBQUFBO0FBQUEsK0JBa0RleEMsR0FsRGYsRUFrRG9CO0FBQ1osVUFBSXdDLE1BQU0sR0FBRyxFQUFiO0FBQUEsVUFBaUI4QyxJQUFJLEdBQUcsSUFBeEI7O0FBRUEsVUFBSXRGLEdBQUcsWUFBWTBvQiw0Q0FBbkIsRUFBMEI7QUFDdEIsWUFBSWhuQixLQUFLLEdBQUcsS0FBS2toQixNQUFMLENBQVlqaEIsT0FBWixDQUFvQjNCLEdBQXBCLENBQVo7O0FBQ0EsWUFBSTBCLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDZGMsZ0JBQU0sR0FBRzhDLElBQUksQ0FBQ3NkLE1BQUwsQ0FBWTdnQixNQUFaLENBQW1CTCxLQUFuQixFQUEwQixDQUExQixDQUFUO0FBQ0g7QUFDSixPQUxELE1BTUs7QUFDRCxhQUFLa2hCLE1BQUwsQ0FBWTdmLE1BQVosQ0FBbUIsVUFBVW9tQixJQUFWLEVBQWdCO0FBQy9CLGlCQUFPQSxJQUFJLENBQUNFLFFBQUwsQ0FBY3JwQixHQUFkLENBQVA7QUFDSCxTQUZELEVBRUdpQyxPQUZILENBRVcsVUFBVThWLEtBQVYsRUFBaUI7QUFDeEIsY0FBSXJXLEtBQUssR0FBRzRELElBQUksQ0FBQ3NkLE1BQUwsQ0FBWWpoQixPQUFaLENBQW9Cb1csS0FBcEIsQ0FBWjtBQUNBQSxlQUFLLENBQUNyWCxPQUFOO0FBQ0E4QixnQkFBTSxHQUFHOEMsSUFBSSxDQUFDc2QsTUFBTCxDQUFZN2dCLE1BQVosQ0FBbUJMLEtBQW5CLEVBQTBCLENBQTFCLENBQVQ7QUFDSCxTQU5EO0FBT0g7O0FBRUQsYUFBT2MsTUFBTSxDQUFDb0csTUFBUCxHQUFnQixDQUFoQixHQUFvQnBHLE1BQU0sQ0FBQyxDQUFELENBQTFCLEdBQWdDLElBQXZDO0FBQ0g7QUF0RUw7QUFBQTtBQUFBLCtCQXdFZTJtQixJQXhFZixFQXdFcUI7QUFDYixVQUFJQSxJQUFJLENBQUN4aUIsSUFBTCxJQUFhLElBQWpCLEVBQXVCO0FBQ25CLGNBQU0sSUFBSTlFLEtBQUosQ0FBVSwrQkFBVixDQUFOO0FBQ0g7O0FBRURzbkIsVUFBSSxDQUFDeGlCLElBQUwsR0FBWSxJQUFaO0FBQ0F3aUIsVUFBSSxDQUFDaEYsT0FBTCxDQUFhLEtBQUtvRixjQUFsQjtBQUNBLFdBQUszRyxNQUFMLENBQVloaEIsSUFBWixDQUFpQnVuQixJQUFqQjtBQUNBLGFBQU9BLElBQVA7QUFDSDtBQWpGTDtBQUFBO0FBQUEsa0NBbUZrQjtBQUNWLGFBQU8sS0FBS3RiLE9BQUwsQ0FBYW1ELEtBQWIsQ0FBbUIsSUFBbkIsQ0FBUDtBQUNIO0FBckZMO0FBQUE7QUFBQSxrQ0F1RmtCO0FBQUE7O0FBQ1YsYUFBTyxLQUFLeEYsVUFBTCxDQUFnQjZILEdBQWhCLENBQW9CLFVBQUEzSCxLQUFLLEVBQUk7QUFDaEMsZUFBTyxNQUFJLENBQUNtQyxPQUFMLENBQWFtRCxLQUFiLENBQW1CdEYsS0FBbkIsQ0FBUDtBQUNILE9BRk0sRUFFSjVCLElBRkksQ0FFQyxFQUZELENBQVA7QUFHSDtBQTNGTDtBQUFBO0FBQUEsZ0NBNkZnQjBmLEdBN0ZoQixFQTZGcUI7QUFDYixVQUFJbGtCLElBQUksR0FBRyxJQUFYO0FBQ0Fta0IsK0RBQVEsQ0FBQ0QsR0FBRCxDQUFSLENBQWN2bkIsT0FBZCxDQUFzQixVQUFVNmYsS0FBVixFQUFpQjtBQUNuQ0EsYUFBSyxDQUFDcGEsVUFBTixHQUFtQixJQUFuQjtBQUNBcEMsWUFBSSxDQUFDb0MsVUFBTCxDQUFnQkMsWUFBaEIsQ0FBNkJyQyxJQUE3QixFQUFtQ3djLEtBQW5DO0FBQ0gsT0FIRDtBQUlBeGMsVUFBSSxDQUFDb0MsVUFBTCxDQUFnQmlFLFdBQWhCLENBQTRCckcsSUFBNUI7QUFDSDtBQXBHTDtBQUFBO0FBQUEsZ0NBc0dnQmtrQixHQXRHaEIsRUFzR3FCO0FBQ2IsVUFBSWxrQixJQUFJLEdBQUcsSUFBWDtBQUNBLFdBQUtva0IsZUFBTDtBQUNBRCwrREFBUSxDQUFDRCxHQUFELENBQVIsQ0FBY3ZuQixPQUFkLENBQXNCLFVBQVU2ZixLQUFWLEVBQWlCO0FBQ25DQSxhQUFLLENBQUNwYSxVQUFOLEdBQW1CLElBQW5CO0FBQ0FwQyxZQUFJLENBQUNrQyxXQUFMLENBQWlCc2EsS0FBakI7QUFDSCxPQUhEO0FBSUg7QUE3R0w7QUFBQTtBQUFBLGtDQStHa0I7QUFDVixVQUFJN1QsSUFBSSxHQUFHLElBQUkrYSxJQUFKLENBQVMsS0FBS2hJLFFBQWQsRUFBd0IsS0FBS2xhLFNBQTdCLENBQVg7QUFFQW1ILFVBQUksQ0FBQzJVLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVl2UCxHQUFaLENBQWdCLFVBQVV6TSxLQUFWLEVBQWlCO0FBQzNDLFlBQUkraUIsSUFBSSxHQUFHL2lCLEtBQUssQ0FBQ2dqQixTQUFOLEVBQVg7QUFDQUQsWUFBSSxDQUFDaGpCLElBQUwsR0FBWXNILElBQVo7QUFDQSxlQUFPMGIsSUFBUDtBQUNILE9BSmEsQ0FBZDtBQU1BLGFBQU8xYixJQUFQO0FBQ0g7QUF6SEw7QUFBQTtBQUFBLGdDQTJIZ0I7QUFDUixXQUFLMlUsTUFBTCxDQUFZM2dCLE9BQVosQ0FBb0IsVUFBVWtuQixJQUFWLEVBQWdCO0FBQ2hDQSxZQUFJLENBQUN6b0IsT0FBTDtBQUNILE9BRkQ7QUFJQSxXQUFLa2lCLE1BQUwsQ0FBWWhhLE1BQVosR0FBcUIsQ0FBckI7QUFDSDtBQWpJTDs7QUFBQTtBQUFBLEVBQTBCaWdCLDRDQUExQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMTyxJQUFJRixRQUFRLEdBQUc7QUFDbEJsRCxTQUFPLEVBQUUsQ0FEUztBQUVsQm1ELFdBQVMsRUFBRSxDQUZPO0FBR2xCNVQsTUFBSSxFQUFFLENBSFk7QUFJbEI2VSxjQUFZLEVBQUUsQ0FKSTtBQUtsQkMsaUJBQWUsRUFBRSxDQUxDO0FBTWxCQyxRQUFNLEVBQUUsQ0FOVTtBQU9sQkMsdUJBQXFCLEVBQUUsQ0FQTDtBQVFsQmpCLFNBQU8sRUFBRSxDQVJTO0FBU2xCbmxCLFVBQVEsRUFBRSxDQVRRO0FBVWxCcW1CLGNBQVksRUFBRSxFQVZJO0FBV2xCQyxrQkFBZ0IsRUFBRSxFQVhBO0FBWWxCQyxVQUFRLEVBQUU7QUFaUSxDQUFmLEMsQ0FlUDs7QUFDTyxJQUFNdEIsS0FBYjtBQUNJLGlCQUFZMWEsSUFBWixFQUFrQmpPLElBQWxCLEVBQXdCa0QsS0FBeEIsRUFBK0I7QUFBQTs7QUFDM0IsU0FBS3VsQixRQUFMLEdBQWdCeGEsSUFBaEI7QUFDQSxTQUFLNlMsUUFBTCxHQUFnQjlnQixJQUFoQjtBQUNBLFNBQUs0RyxTQUFMLEdBQWlCMUQsS0FBakI7QUFDQSxTQUFLb0ksVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUs0ZSxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsU0FBSy9kLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxTQUFLM0UsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQUt3RSxlQUFMLEdBQXVCLElBQXZCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLFNBQUsrVSxRQUFMLEdBQWdCLEVBQWhCO0FBQ0g7O0FBWkw7QUFBQTtBQUFBLDhCQWNjeFYsS0FkZCxFQWNxQjtBQUNiQSxXQUFLLENBQUNoRSxVQUFOLEdBQW1CLElBQW5CO0FBQ0EsV0FBSzhELFVBQUwsQ0FBZ0I1SixJQUFoQixDQUFxQjhKLEtBQXJCO0FBQ0g7QUFqQkw7QUFBQTtBQUFBLG1DQW1CbUI7QUFDWCxVQUFJLEtBQUtGLFVBQUwsQ0FBZ0I1QyxNQUFoQixLQUEyQixDQUEvQixFQUFrQztBQUM5QjtBQUNIOztBQUVELFVBQUl0RCxJQUFJLEdBQUcsSUFBWDs7QUFFQSxVQUFJLEtBQUtrRyxVQUFMLENBQWdCNUMsTUFBaEIsS0FBMkIsQ0FBL0IsRUFBa0M7QUFDOUIsYUFBS3doQixVQUFMLEdBQWtCLEtBQUs1ZSxVQUFMLENBQWdCLENBQWhCLENBQWxCO0FBQ0EsYUFBS2EsU0FBTCxHQUFpQixLQUFLYixVQUFMLENBQWdCLENBQWhCLENBQWpCO0FBQ0gsT0FIRCxNQUlLO0FBQ0QsYUFBSzRlLFVBQUwsR0FBa0IsS0FBSzVlLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBbEI7QUFDQSxhQUFLYSxTQUFMLEdBQWlCLEtBQUtiLFVBQUwsQ0FBZ0IsS0FBS0EsVUFBTCxDQUFnQjVDLE1BQWhCLEdBQXlCLENBQXpDLENBQWpCO0FBRUEsYUFBSzRDLFVBQUwsQ0FBZ0J2SixPQUFoQixDQUF3QixVQUFVeUosS0FBVixFQUFpQmhLLEtBQWpCLEVBQXdCO0FBQzVDLGNBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2JnSyxpQkFBSyxDQUFDUyxXQUFOLEdBQW9CN0csSUFBSSxDQUFDa0csVUFBTCxDQUFnQjlKLEtBQUssR0FBRyxDQUF4QixDQUFwQjtBQUNBO0FBQ0g7O0FBQ0QsY0FBSUEsS0FBSyxLQUFNNEQsSUFBSSxDQUFDa0csVUFBTCxDQUFnQjVDLE1BQWhCLEdBQXlCLENBQXhDLEVBQTRDO0FBQ3hDOEMsaUJBQUssQ0FBQ1EsZUFBTixHQUF3QjVHLElBQUksQ0FBQ2tHLFVBQUwsQ0FBZ0I5SixLQUFLLEdBQUcsQ0FBeEIsQ0FBeEI7QUFDQTtBQUNIOztBQUNEZ0ssZUFBSyxDQUFDUSxlQUFOLEdBQXdCNUcsSUFBSSxDQUFDa0csVUFBTCxDQUFnQjlKLEtBQUssR0FBRyxDQUF4QixDQUF4QjtBQUNBZ0ssZUFBSyxDQUFDUyxXQUFOLEdBQW9CN0csSUFBSSxDQUFDa0csVUFBTCxDQUFnQjlKLEtBQUssR0FBRyxDQUF4QixDQUFwQjtBQUNILFNBWEQ7QUFZSDs7QUFFRCxXQUFLOEosVUFBTCxDQUFnQnZKLE9BQWhCLENBQXdCLFVBQVV5SixLQUFWLEVBQWlCO0FBQ3JDQSxhQUFLLENBQUMyZSxZQUFOO0FBQ0gsT0FGRDtBQUdIO0FBbkRMO0FBQUE7QUFBQSw0Q0FxRDRCO0FBQ3BCLFdBQUszaUIsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFdBQUt3RSxlQUFMLEdBQXVCLElBQXZCO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNIO0FBekRMO0FBQUE7QUFBQSw2QkEyRGE7QUFDTCxVQUFJLEtBQUt6RSxVQUFMLElBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLGFBQUtBLFVBQUwsQ0FBZ0JpRSxXQUFoQixDQUE0QixJQUE1QjtBQUNIO0FBQ0o7QUEvREw7QUFBQTtBQUFBLG9DQWlFb0I7QUFDWixhQUFPLEtBQUtILFVBQUwsQ0FBZ0I1QyxNQUFoQixLQUEyQixDQUFsQztBQUNIO0FBbkVMO0FBQUE7QUFBQSxzQ0FxRXNCO0FBQ2QsV0FBSzRDLFVBQUwsQ0FBZ0J2SixPQUFoQixDQUF3QixVQUFVeUosS0FBVixFQUFpQjtBQUNyQ0EsYUFBSyxDQUFDaEwsT0FBTjtBQUNILE9BRkQ7QUFHQSxXQUFLOEssVUFBTCxDQUFnQjVDLE1BQWhCLEdBQXlCLENBQXpCO0FBQ0g7QUExRUw7QUFBQTtBQUFBLGdDQTRFZ0I4QyxLQTVFaEIsRUE0RXVCO0FBQ2YsVUFBSUEsS0FBSyxDQUFDaEUsVUFBTixJQUFvQixJQUF4QixFQUE4QjtBQUMxQmdFLGFBQUssQ0FBQ2hFLFVBQU4sQ0FBaUJpRSxXQUFqQixDQUE2QkQsS0FBN0I7QUFDSDs7QUFFREEsV0FBSyxDQUFDaEUsVUFBTixHQUFtQixJQUFuQjs7QUFFQSxVQUFJLEtBQUs4RCxVQUFMLENBQWdCNUMsTUFBaEIsS0FBMkIsQ0FBL0IsRUFBa0M7QUFDOUIsYUFBS3doQixVQUFMLEdBQWtCMWUsS0FBbEI7QUFDSCxPQUZELE1BR0s7QUFDRCxhQUFLVyxTQUFMLENBQWVGLFdBQWYsR0FBNkJULEtBQTdCO0FBQ0FBLGFBQUssQ0FBQ1EsZUFBTixHQUF3QixLQUFLRyxTQUE3QjtBQUNIOztBQUVEWCxXQUFLLENBQUN5WSxPQUFOLENBQWMsS0FBS29GLGNBQW5CO0FBQ0EsV0FBS2xkLFNBQUwsR0FBaUJYLEtBQWpCO0FBQ0EsV0FBS0YsVUFBTCxDQUFnQjVKLElBQWhCLENBQXFCOEosS0FBckI7QUFDQSxhQUFPQSxLQUFQO0FBQ0g7QUEvRkw7QUFBQTtBQUFBLGlDQWlHaUI0ZSxRQWpHakIsRUFpRzJCQyxRQWpHM0IsRUFpR3FDO0FBQzdCLFVBQUlBLFFBQVEsQ0FBQzdpQixVQUFULElBQXVCLElBQTNCLEVBQWlDO0FBQzdCNmlCLGdCQUFRLENBQUM3aUIsVUFBVCxDQUFvQmlFLFdBQXBCLENBQWdDNGUsUUFBaEM7QUFDSDs7QUFDRCxVQUFJN29CLEtBQUssR0FBRyxLQUFLOEosVUFBTCxDQUFnQjdKLE9BQWhCLENBQXdCMm9CLFFBQXhCLENBQVo7O0FBQ0EsVUFBSTVvQixLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2QsY0FBTSxJQUFJRyxLQUFKLENBQVUsMkNBQVYsQ0FBTjtBQUNIOztBQUVEMG9CLGNBQVEsQ0FBQzdpQixVQUFULEdBQXNCLElBQXRCOztBQUVBLFVBQUk0aUIsUUFBUSxDQUFDcGUsZUFBVCxJQUE0QixJQUFoQyxFQUFzQztBQUNsQ3FlLGdCQUFRLENBQUNyZSxlQUFULEdBQTJCb2UsUUFBUSxDQUFDcGUsZUFBcEM7QUFDQW9lLGdCQUFRLENBQUNwZSxlQUFULENBQXlCQyxXQUF6QixHQUF1Q29lLFFBQXZDO0FBQ0g7O0FBRURBLGNBQVEsQ0FBQ3BlLFdBQVQsR0FBdUJtZSxRQUF2QjtBQUNBQSxjQUFRLENBQUNwZSxlQUFULEdBQTJCcWUsUUFBM0I7O0FBRUEsVUFBSTdvQixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLGFBQUswb0IsVUFBTCxHQUFrQkcsUUFBbEI7QUFDSDs7QUFFREEsY0FBUSxDQUFDcEcsT0FBVCxDQUFpQixLQUFLb0YsY0FBdEI7QUFDQSxXQUFLL2QsVUFBTCxDQUFnQnpKLE1BQWhCLENBQXVCTCxLQUF2QixFQUE4QixDQUE5QixFQUFpQzZvQixRQUFqQztBQUNBLGFBQU9BLFFBQVA7QUFDSDtBQTNITDtBQUFBO0FBQUEsZ0NBNkhnQkQsUUE3SGhCLEVBNkgwQkMsUUE3SDFCLEVBNkhvQztBQUM1QixVQUFJRCxRQUFRLENBQUNuZSxXQUFULElBQXdCLElBQTVCLEVBQWtDO0FBQzlCLGVBQU8sS0FBSzNFLFdBQUwsQ0FBaUIraUIsUUFBakIsQ0FBUDtBQUNIOztBQUVELGFBQU8sS0FBSzVpQixZQUFMLENBQWtCMmlCLFFBQVEsQ0FBQ25lLFdBQTNCLEVBQXdDb2UsUUFBeEMsQ0FBUDtBQUNIO0FBbklMO0FBQUE7QUFBQSxnQ0FxSWdCN2UsS0FySWhCLEVBcUl1QjtBQUNmLFVBQUloSyxLQUFLLEdBQUcsS0FBSzhKLFVBQUwsQ0FBZ0I3SixPQUFoQixDQUF3QitKLEtBQXhCLENBQVo7O0FBQ0EsVUFBSWhLLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDZCxjQUFNLElBQUlHLEtBQUosQ0FBVSw4Q0FBVixDQUFOO0FBQ0g7O0FBRUQsVUFBSTZKLEtBQUssQ0FBQ1EsZUFBTixJQUF5QixJQUE3QixFQUFtQztBQUMvQlIsYUFBSyxDQUFDUSxlQUFOLENBQXNCQyxXQUF0QixHQUFvQ1QsS0FBSyxDQUFDUyxXQUExQztBQUNIOztBQUVELFVBQUlULEtBQUssQ0FBQ1MsV0FBTixJQUFxQixJQUF6QixFQUErQjtBQUMzQlQsYUFBSyxDQUFDUyxXQUFOLENBQWtCRCxlQUFsQixHQUFvQ1IsS0FBSyxDQUFDUSxlQUExQztBQUNIOztBQUVELFVBQUl4SyxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLGFBQUswb0IsVUFBTCxHQUFrQjFlLEtBQUssQ0FBQ1MsV0FBeEI7QUFDSDs7QUFFRCxVQUFJekssS0FBSyxLQUFNLEtBQUs4SixVQUFMLENBQWdCNUMsTUFBaEIsR0FBeUIsQ0FBeEMsRUFBNEM7QUFDeEMsYUFBS3lELFNBQUwsR0FBaUJYLEtBQUssQ0FBQ1EsZUFBdkI7QUFDSDs7QUFFRFIsV0FBSyxDQUFDOGUscUJBQU47QUFDQSxXQUFLaGYsVUFBTCxDQUFnQnpKLE1BQWhCLENBQXVCTCxLQUF2QixFQUE4QixDQUE5QjtBQUVBLGFBQU9nSyxLQUFQO0FBQ0g7QUEvSkw7QUFBQTtBQUFBLGlDQWlLaUI0ZSxRQWpLakIsRUFpSzJCQyxRQWpLM0IsRUFpS3FDO0FBQzdCLFVBQUlBLFFBQVEsQ0FBQzdpQixVQUFULElBQXVCLElBQTNCLEVBQWlDO0FBQzdCNmlCLGdCQUFRLENBQUM3aUIsVUFBVCxDQUFvQmlFLFdBQXBCLENBQWdDNGUsUUFBaEM7QUFDSDs7QUFDRCxVQUFJN29CLEtBQUssR0FBRyxLQUFLOEosVUFBTCxDQUFnQjdKLE9BQWhCLENBQXdCMm9CLFFBQXhCLENBQVo7O0FBQ0EsVUFBSTVvQixLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2QsY0FBTSxJQUFJRyxLQUFKLENBQVUsMkNBQVYsQ0FBTjtBQUNIOztBQUVEMG9CLGNBQVEsQ0FBQzdpQixVQUFULEdBQXNCLElBQXRCO0FBQ0E2aUIsY0FBUSxDQUFDcmUsZUFBVCxHQUEyQm9lLFFBQVEsQ0FBQ3BlLGVBQXBDO0FBQ0FxZSxjQUFRLENBQUNwZSxXQUFULEdBQXVCbWUsUUFBUSxDQUFDbmUsV0FBaEM7O0FBRUEsVUFBSSxLQUFLaWUsVUFBTCxLQUFvQkUsUUFBeEIsRUFBa0M7QUFDOUIsYUFBS0YsVUFBTCxHQUFrQkcsUUFBbEI7QUFDSDs7QUFFRCxVQUFJLEtBQUtsZSxTQUFMLEtBQW1CaWUsUUFBdkIsRUFBaUM7QUFDN0IsYUFBS2plLFNBQUwsR0FBaUJrZSxRQUFqQjtBQUNIOztBQUVERCxjQUFRLENBQUNFLHFCQUFUO0FBQ0FELGNBQVEsQ0FBQ3BHLE9BQVQsQ0FBaUIsS0FBS29GLGNBQXRCO0FBQ0EsV0FBSy9kLFVBQUwsQ0FBZ0J6SixNQUFoQixDQUF1QkwsS0FBdkIsRUFBOEIsQ0FBOUIsRUFBaUM2b0IsUUFBakM7QUFDQSxhQUFPQSxRQUFQO0FBQ0g7QUExTEw7QUFBQTtBQUFBLDhCQTRMY0UsSUE1TGQsRUE0TG9CO0FBQ1osVUFBSXhjLElBQUksR0FBRyxLQUFLeWMsV0FBTCxDQUFpQkQsSUFBakIsQ0FBWDs7QUFFQSxVQUFHQSxJQUFILEVBQVM7QUFDTHhjLFlBQUksQ0FBQ3pDLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQjZILEdBQWhCLENBQW9CLFVBQVUzSCxLQUFWLEVBQWlCO0FBQ25ELGlCQUFPQSxLQUFLLENBQUNrZSxTQUFOLENBQWdCYSxJQUFoQixDQUFQO0FBQ0gsU0FGaUIsQ0FBbEI7QUFHQXhjLFlBQUksQ0FBQ29jLFlBQUw7QUFDSDs7QUFFRCxhQUFPcGMsSUFBUDtBQUNIO0FBdk1MO0FBQUE7QUFBQSw4QkF5TWM7QUFDTixXQUFLMFgsU0FBTCxJQUFrQixLQUFLQSxTQUFMLEVBQWxCO0FBRUEsV0FBS25hLFVBQUwsQ0FBZ0I2SCxHQUFoQixDQUFvQixVQUFVM0gsS0FBVixFQUFpQjtBQUNqQ0EsYUFBSyxDQUFDaEwsT0FBTjtBQUNILE9BRkQ7QUFJQSxXQUFLeUYsTUFBTDtBQUNBLFdBQUtxa0IscUJBQUw7QUFDQSxXQUFLaGYsVUFBTCxDQUFnQjVDLE1BQWhCLEdBQXlCLENBQXpCO0FBQ0EsV0FBS3doQixVQUFMLEdBQWtCLElBQWxCO0FBQ0EsV0FBSy9kLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxXQUFLc2UsYUFBTCxHQUFxQixJQUFyQjtBQUNILEtBdE5MLENBd05JO0FBRUE7O0FBMU5KOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRU8sSUFBTUMsS0FBYjtBQUFBOztBQUNJLGlCQUFZeG5CLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiwrRUFBTXVsQiwrQ0FBUSxDQUFDM1QsSUFBZixFQUFxQixPQUFyQixFQUE4QjVSLEtBQTlCO0FBQ0EsVUFBS2hDLEdBQUwsR0FBVyxJQUFYO0FBRmU7QUFHbEI7O0FBSkw7QUFBQTtBQUFBLGtDQU1rQjtBQUNWLGFBQU8sSUFBSXdwQixLQUFKLENBQVUsS0FBSzVKLFFBQWYsRUFBeUIsS0FBS2xhLFNBQTlCLENBQVA7QUFDSDtBQVJMOztBQUFBO0FBQUEsRUFBMkIraEIsNENBQTNCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFTyxJQUFNZ0MsS0FBYjtBQUFBOztBQUNJLG1CQUFjO0FBQUE7O0FBQUEsOEVBQ0psQywrQ0FBUSxDQUFDc0IsWUFETDtBQUViOztBQUhMO0FBQUEsRUFBMkJwQiw0Q0FBM0IsRTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNpQyxNQUFULENBQWdCdEIsR0FBaEIsRUFBcUI7QUFDakJBLEtBQUcsR0FBRzFoQixpREFBQSxDQUFpQjBoQixHQUFqQixDQUFOO0FBQ0EsU0FBTyxJQUFJdUIsbURBQUosR0FBZWpYLEdBQWYsQ0FBbUIwVixHQUFuQixDQUFQO0FBQ0g7O0FBRUQsU0FBU0MsUUFBVCxDQUFrQkQsR0FBbEIsRUFBdUI7QUFDbkJBLEtBQUcsR0FBRzFoQixpREFBQSxDQUFpQjBoQixHQUFqQixDQUFOO0FBQ0EsU0FBTyxJQUFJd0IscURBQUosQ0FBYyxJQUFJRCxtREFBSixFQUFkLEVBQThCL1csS0FBOUIsQ0FBb0N3VixHQUFwQyxDQUFQO0FBQ0g7O0FBRUQsU0FBU3ZFLE1BQVQsQ0FBZ0JuRCxLQUFoQixFQUF1QjtBQUNuQixTQUFPQSxLQUFLLENBQUM2RyxRQUFOLEtBQW1CQSwrQ0FBUSxDQUFDbEQsT0FBbkM7QUFDSDs7QUFFRCxTQUFTd0YsT0FBVCxDQUFpQm5KLEtBQWpCLEVBQXdCO0FBQ3BCLFNBQU9BLEtBQUssQ0FBQzZHLFFBQU4sS0FBbUJBLCtDQUFRLENBQUNDLFNBQW5DO0FBQ0g7O0FBRUQsU0FBUzVHLE9BQVQsQ0FBaUJGLEtBQWpCLEVBQXdCO0FBQ3BCLFNBQU9BLEtBQUssQ0FBQzZHLFFBQU4sS0FBbUJBLCtDQUFRLENBQUMzVCxJQUFuQztBQUNIOztBQUVELFNBQVNrTixVQUFULENBQW9CSixLQUFwQixFQUEyQjtBQUN2QixTQUFPQSxLQUFLLENBQUM2RyxRQUFOLEtBQW1CQSwrQ0FBUSxDQUFDSSxPQUFuQztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCRDtBQUVPLElBQU1HLFVBQWI7QUFDSSx3QkFBYztBQUFBO0FBRWI7O0FBSEw7QUFBQTtBQUFBLDBCQUtVcEgsS0FMVixFQUtpQjtBQUNULFVBQUlFLHdEQUFPLENBQUNGLEtBQUQsQ0FBWCxFQUFvQjtBQUNoQixlQUFPLEtBQUtvSixTQUFMLENBQWVwSixLQUFmLENBQVA7QUFDSDs7QUFFRCxVQUFHSSwyREFBVSxDQUFDSixLQUFELENBQWIsRUFBc0I7QUFDbEIsZUFBTyxLQUFLcUosWUFBTCxDQUFrQnJKLEtBQWxCLENBQVA7QUFDSDs7QUFFRCxhQUFPLEtBQUtzSixZQUFMLENBQWtCdEosS0FBbEIsQ0FBUDtBQUNIO0FBZkw7QUFBQTtBQUFBLGlDQWlCaUJuYixJQWpCakIsRUFpQnVCO0FBQUE7O0FBQ2YsVUFBSTBrQixPQUFPLEdBQUcxa0IsSUFBSSxDQUFDaWMsTUFBTCxDQUFZdlAsR0FBWixDQUFnQixVQUFDek0sS0FBRCxFQUFXO0FBQ2pDLGVBQU8sS0FBSSxDQUFDMGtCLGNBQUwsQ0FBb0Ixa0IsS0FBcEIsQ0FBUDtBQUNILE9BRlMsRUFFUGtELElBRk8sQ0FFRixHQUZFLENBQWQ7QUFBQSxVQUdJeWhCLFFBQVEsR0FBRzVrQixJQUFJLENBQUM2RSxVQUFMLENBQWdCNkgsR0FBaEIsQ0FBb0IsVUFBQzNILEtBQUQsRUFBVztBQUN0QyxlQUFPLEtBQUksQ0FBQ3NGLEtBQUwsQ0FBV3RGLEtBQVgsQ0FBUDtBQUNILE9BRlUsRUFFUjVCLElBRlEsQ0FFSCxFQUZHLENBSGY7O0FBT0EsVUFBR3VoQixPQUFILEVBQVk7QUFDUkEsZUFBTyxHQUFHLE1BQU1BLE9BQWhCO0FBQ0g7O0FBRUQsVUFBSTdCLEdBQUcsR0FBRyxNQUFNN2lCLElBQUksQ0FBQ3FhLFFBQVgsR0FBc0JxSyxPQUF0QixHQUFnQyxHQUFoQyxHQUFzQ0UsUUFBaEQ7O0FBRUEsVUFBSSxDQUFDNWtCLElBQUksQ0FBQ3NpQixVQUFWLEVBQXNCO0FBQ2xCTyxXQUFHLElBQUssT0FBTzdpQixJQUFJLENBQUNxYSxRQUFaLEdBQXVCLEdBQS9CO0FBQ0g7O0FBRUQsYUFBT3dJLEdBQVA7QUFDSDtBQXBDTDtBQUFBO0FBQUEsbUNBc0NtQjVpQixLQXRDbkIsRUFzQzBCO0FBQ2xCLGFBQU9BLEtBQUssQ0FBQ29hLFFBQU4sSUFBa0JwYSxLQUFLLENBQUNFLFNBQU4sSUFBbUIsSUFBbkIsR0FBMEIsRUFBMUIsR0FBZ0MsTUFBTUYsS0FBSyxDQUFDOFEsS0FBWixHQUFvQjlRLEtBQUssQ0FBQ0UsU0FBMUIsR0FBc0NGLEtBQUssQ0FBQzhRLEtBQTlGLENBQVA7QUFDSDtBQXhDTDtBQUFBO0FBQUEsOEJBMENjME0sS0ExQ2QsRUEwQ3FCO0FBQ2IsYUFBT0EsS0FBSyxDQUFDdGQsU0FBYjtBQUNIO0FBNUNMO0FBQUE7QUFBQSxpQ0E4Q2lCd2QsS0E5Q2pCLEVBOEN3QjtBQUNoQixhQUFPQSxLQUFLLENBQUN4ZCxTQUFiO0FBQ0g7QUFoREw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVPLElBQU1pa0IsUUFBYjtBQUFBOztBQUNJLG9CQUFZcG1CLE9BQVosRUFBcUI7QUFBQTs7QUFBQSxpRkFDWEEsT0FEVztBQUVwQjs7QUFITDtBQUFBO0FBQUEsMkNBSzJCdVEsRUFMM0IsRUFLK0I7QUFDdkIsYUFBUSxPQUFPQSxFQUFQLElBQWFBLEVBQUUsSUFBSSxHQUFuQixJQUNKLE9BQU9BLEVBQVAsSUFBYUEsRUFBRSxJQUFJLEdBRGYsSUFFSixRQUFRQSxFQUZKLElBRVVBLEVBQUUsS0FBSyxHQUZqQixJQUdKQSxFQUFFLEtBQUssR0FISCxJQUdVQSxFQUFFLEtBQUssR0FIakIsSUFHd0JBLEVBQUUsS0FBSyxHQUh2QztBQUlIO0FBVkw7QUFBQTtBQUFBLDhDQVk4QkEsRUFaOUIsRUFZa0MwQixFQVpsQyxFQVlzQztBQUM5QixhQUFPLEtBQUtILHNCQUFMLENBQTRCdkIsRUFBNUIsRUFBZ0MwQixFQUFoQyxLQUF1QyxLQUFLdkIsUUFBTCxDQUFjSCxFQUFkLENBQXZDLElBQTREQSxFQUFFLEtBQUssR0FBbkUsSUFBMEVBLEVBQUUsS0FBSyxHQUF4RjtBQUNIO0FBZEw7QUFBQTtBQUFBLGlDQWdCaUJzVyxHQWhCakIsRUFnQnNCO0FBQ2QsVUFBSWpWLEdBQUcsR0FBR2lWLEdBQUcsQ0FBQzVpQixNQUFkO0FBQ0EsYUFBUSxLQUFLbEgsS0FBTCxHQUFhNlUsR0FBYixJQUFvQixLQUFLdkIsSUFBTCxDQUFVcE0sTUFBL0IsR0FBMEM0aUIsR0FBRyxLQUFLLEtBQUt4VyxJQUFMLENBQVV3TyxNQUFWLENBQWlCLEtBQUs5aEIsS0FBdEIsRUFBNkI2VSxHQUE3QixDQUFsRCxHQUF1RixLQUE5RjtBQUNILEtBbkJMLENBcUJJOztBQXJCSjtBQUFBO0FBQUEsZ0NBc0JnQmtWLEtBdEJoQixFQXNCdUJ2VSxHQXRCdkIsRUFzQjRCO0FBQ3BCLFVBQUlELEtBQUssR0FBRyxLQUFLdlYsS0FBakI7QUFDQSxXQUFLQSxLQUFMLElBQWMrcEIsS0FBSyxDQUFDN2lCLE1BQXBCO0FBQ0EsVUFBSStPLE1BQU0sR0FBRyxFQUFiO0FBQ0EsVUFBSUMsU0FBUyxHQUFHNlQsS0FBaEI7O0FBQ0EsYUFBTyxLQUFLL3BCLEtBQUwsR0FBYSxLQUFLc1QsSUFBTCxDQUFVcE0sTUFBOUIsRUFBc0M7QUFDbEMsWUFBSXNNLEVBQUUsR0FBRyxLQUFLRixJQUFMLENBQVVHLE1BQVYsQ0FBaUIsS0FBS3pULEtBQXRCLENBQVQ7QUFDQWtXLGlCQUFTLElBQUkxQyxFQUFiOztBQUNBLFlBQUksS0FBS3dXLFlBQUwsQ0FBa0J4VSxHQUFsQixDQUFKLEVBQTRCO0FBQ3hCVSxtQkFBUyxJQUFJVixHQUFiO0FBQ0EsZUFBS3hWLEtBQUwsSUFBY3dWLEdBQUcsQ0FBQ3RPLE1BQWxCO0FBQ0EsZUFBS3FNLE1BQUwsQ0FBWXJULElBQVosQ0FBaUI7QUFDYkYsaUJBQUssRUFBRXVWLEtBRE07QUFFYmpDLGdCQUFJLEVBQUU0QyxTQUZPO0FBR2JtUixtQkFBTyxFQUFFLElBSEk7QUFJYjNsQixpQkFBSyxFQUFFdVU7QUFKTSxXQUFqQjtBQU1BO0FBQ0gsU0FWRCxNQVVPO0FBQ0hBLGdCQUFNLElBQUl6QyxFQUFWO0FBQ0g7O0FBQ0QsYUFBS3hULEtBQUw7QUFDSDs7QUFDRCxXQUFLMFUsVUFBTCxDQUFnQixzQkFBaEIsRUFBd0NhLEtBQXhDO0FBQ0gsS0E5Q0wsQ0FnREk7O0FBaERKO0FBQUE7QUFBQSwrQkFpRGU7QUFDUCxVQUFJQSxLQUFLLEdBQUcsS0FBS3ZWLEtBQWpCO0FBQ0EsVUFBSWlXLE1BQU0sR0FBRyxFQUFiOztBQUNBLGFBQU8sS0FBS2pXLEtBQUwsR0FBYSxLQUFLc1QsSUFBTCxDQUFVcE0sTUFBOUIsRUFBc0M7QUFDbEMsWUFBSXNNLEVBQUUsR0FBRyxLQUFLRixJQUFMLENBQVVHLE1BQVYsQ0FBaUIsS0FBS3pULEtBQXRCLENBQVQ7QUFDQSxZQUFJbVUsR0FBRyxHQUFHLEtBQUtQLElBQUwsRUFBVjs7QUFDQSxZQUFLSixFQUFFLEtBQUssR0FBUCxLQUFlLEtBQUtNLGlCQUFMLENBQXVCSyxHQUF2QixLQUErQkEsR0FBRyxLQUFLLEdBQXRELENBQUQsSUFBZ0UsS0FBSzZWLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBcEUsRUFBK0Y7QUFDM0Y7QUFDSDs7QUFDRC9ULGNBQU0sSUFBSXpDLEVBQVY7QUFDQSxhQUFLeFQsS0FBTDtBQUNIOztBQUNELFdBQUt1VCxNQUFMLENBQVlyVCxJQUFaLENBQWlCO0FBQ2JGLGFBQUssRUFBRXVWLEtBRE07QUFFYmpDLFlBQUksRUFBRTJDLE1BRk87QUFHYmdVLGVBQU8sRUFBRTtBQUhJLE9BQWpCO0FBS0gsS0FsRUwsQ0FvRUk7O0FBcEVKO0FBQUE7QUFBQSw0QkFxRVlGLEtBckVaLEVBcUVtQnZVLEdBckVuQixFQXFFd0IwVSxPQXJFeEIsRUFxRWlDQyxPQXJFakMsRUFxRTBDO0FBQ2xDLFdBQUs1VyxNQUFMLENBQVlyVCxJQUFaLENBQWlCO0FBQUVGLGFBQUssRUFBRSxLQUFLQSxLQUFkO0FBQXFCc1QsWUFBSSxFQUFFeVcsS0FBM0I7QUFBa0NLLFdBQUcsRUFBRSxJQUF2QztBQUE2Q0YsZUFBTyxFQUFFQSxPQUF0RDtBQUErREgsYUFBSyxFQUFFLElBQXRFO0FBQTRFSSxlQUFPLEVBQUVBO0FBQXJGLE9BQWpCO0FBQ0EsV0FBS25xQixLQUFMLElBQWMrcEIsS0FBSyxDQUFDN2lCLE1BQXBCO0FBQ0EsV0FBSzhNLFNBQUw7O0FBRUEsYUFBTyxLQUFLaFUsS0FBTCxHQUFhLEtBQUtzVCxJQUFMLENBQVVwTSxNQUE5QixFQUFzQztBQUNsQyxZQUFJc00sRUFBRSxHQUFHLEtBQUtGLElBQUwsQ0FBVUcsTUFBVixDQUFpQixLQUFLelQsS0FBdEIsQ0FBVDs7QUFFQSxZQUFJLENBQUNrcUIsT0FBTCxFQUFjO0FBQ1YsY0FBSS9WLEdBQUcsR0FBRyxLQUFLUCxJQUFMLEVBQVY7QUFDQSxjQUFJa1csR0FBRyxHQUFHdFcsRUFBRSxHQUFHVyxHQUFmOztBQUNBLGNBQUkyVixHQUFHLEtBQUssTUFBTXRVLEdBQWxCLEVBQXVCO0FBQ25CLGlCQUFLakMsTUFBTCxDQUFZclQsSUFBWixDQUFpQjtBQUFFRixtQkFBSyxFQUFFLEtBQUtBLEtBQWQ7QUFBcUJzVCxrQkFBSSxFQUFFd1csR0FBM0I7QUFBZ0NNLGlCQUFHLEVBQUUsSUFBckM7QUFBMkNGLHFCQUFPLEVBQUUsSUFBcEQ7QUFBMEQxVSxpQkFBRyxFQUFFO0FBQS9ELGFBQWpCO0FBQ0EsaUJBQUt4VixLQUFMLElBQWM4cEIsR0FBRyxDQUFDNWlCLE1BQWxCO0FBQ0E7QUFDSDtBQUNKOztBQUVELFlBQUlzTSxFQUFFLEtBQUtnQyxHQUFYLEVBQWdCO0FBQ1osZUFBS2pDLE1BQUwsQ0FBWXJULElBQVosQ0FBaUI7QUFDYkYsaUJBQUssRUFBRSxLQUFLQSxLQURDO0FBRWJzVCxnQkFBSSxFQUFFa0MsR0FGTztBQUdiNFUsZUFBRyxFQUFFLElBSFE7QUFJYkYsbUJBQU8sRUFBRSxDQUFDLENBQUNDLE9BQUYsR0FBWSxJQUFaLEdBQW1CRCxPQUpmO0FBS2IxVSxlQUFHLEVBQUU7QUFMUSxXQUFqQjtBQU9BLGVBQUt4VixLQUFMLElBQWN3VixHQUFHLENBQUN0TyxNQUFsQjtBQUNBO0FBQ0g7O0FBRUQsWUFBSSxLQUFLNE0saUJBQUwsQ0FBdUIsS0FBS0MsYUFBTCxFQUF2QixDQUFKLEVBQWtEO0FBQzlDLGVBQUtDLFNBQUw7QUFDSCxTQUZELE1BR0ssSUFBSVIsRUFBRSxLQUFLLEdBQVAsSUFBY0EsRUFBRSxLQUFLLElBQXpCLEVBQStCO0FBQ2hDLGVBQUtFLFVBQUwsQ0FBZ0JGLEVBQWhCO0FBQ0gsU0FGSSxNQUdBLElBQUksS0FBS1UsWUFBTCxDQUFrQlYsRUFBbEIsQ0FBSixFQUEyQjtBQUM1QixlQUFLeFQsS0FBTDtBQUNILFNBRkksTUFHQSxJQUFJd1QsRUFBRSxLQUFLLEdBQVgsRUFBZ0I7QUFDakIsZUFBS0QsTUFBTCxDQUFZclQsSUFBWixDQUFpQjtBQUFFRixpQkFBSyxFQUFFLEtBQUtBLEtBQWQ7QUFBcUJzVCxnQkFBSSxFQUFFLEdBQTNCO0FBQWdDK1csaUJBQUssRUFBRTtBQUF2QyxXQUFqQjtBQUNBLGVBQUtycUIsS0FBTDtBQUNILFNBSEksTUFJQTtBQUNELGVBQUswVSxVQUFMLENBQWdCLDRCQUFoQixFQUE4QyxLQUFLMVUsS0FBbkQsRUFBMEQsS0FBS0EsS0FBTCxHQUFhLENBQXZFO0FBQ0g7QUFDSjtBQUNKO0FBcEhMO0FBQUE7QUFBQSx3QkFzSFFzVCxJQXRIUixFQXNIYztBQUNOLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFdBQUt0VCxLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUt1VCxNQUFMLEdBQWMsRUFBZDtBQUVBLFVBQUkrVyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUtybkIsT0FBTCxDQUFhcW5CLFlBQWxDOztBQUNBLGFBQU8sS0FBS3RxQixLQUFMLEdBQWEsS0FBS3NULElBQUwsQ0FBVXBNLE1BQTlCLEVBQXNDO0FBQ2xDLFlBQUlzTSxFQUFFLEdBQUcsS0FBS0YsSUFBTCxDQUFVRyxNQUFWLENBQWlCLEtBQUt6VCxLQUF0QixDQUFUO0FBQ0EsWUFBSW1VLEdBQUcsR0FBRyxLQUFLUCxJQUFMLEVBQVY7QUFDQSxZQUFJUSxHQUFHLEdBQUcsS0FBS1IsSUFBTCxDQUFVLENBQVYsQ0FBVjs7QUFDQSxZQUFJLEtBQUtvVyxZQUFMLENBQWtCLE1BQWxCLENBQUosRUFBK0I7QUFDM0IsZUFBS08sV0FBTCxDQUFpQixNQUFqQixFQUF5QixLQUF6QjtBQUNILFNBRkQsTUFHSyxJQUFJL1csRUFBRSxLQUFLLEdBQVAsSUFBYyxLQUFLTSxpQkFBTCxDQUF1QkssR0FBdkIsQ0FBbEIsRUFBK0M7QUFDaEQsZUFBS3FXLE9BQUwsQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEtBQXZCO0FBQ0gsU0FGSSxNQUdBLElBQUksS0FBS1IsWUFBTCxDQUFrQixJQUFsQixLQUEyQixLQUFLbFcsaUJBQUwsQ0FBdUJNLEdBQXZCLENBQS9CLEVBQTREO0FBQzdELGVBQUtvVyxPQUFMLENBQWEsSUFBYixFQUFtQixHQUFuQixFQUF3QixJQUF4QjtBQUNILFNBRkksTUFHQSxJQUFJLEtBQUtSLFlBQUwsQ0FBa0IsV0FBbEIsQ0FBSixFQUFvQztBQUNyQyxjQUFJTSxZQUFKLEVBQWtCO0FBQ2QsaUJBQUtFLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLEdBQW5CLEVBQXdCLElBQXhCLEVBQThCLElBQTlCO0FBQ0gsV0FGRCxNQUdLO0FBQ0QsaUJBQUs5VixVQUFMLENBQWdCLHdCQUFoQixFQUEwQyxLQUFLMVUsS0FBL0MsRUFBc0QsS0FBS0EsS0FBTCxHQUFhLENBQW5FO0FBQ0g7QUFDSixTQVBJLE1BUUE7QUFDRCxlQUFLeXFCLFFBQUw7QUFDSDtBQUNKOztBQUNELGFBQU8sS0FBS2xYLE1BQVo7QUFDSDtBQXRKTDs7QUFBQTtBQUFBLEVBQThCcEIsNkNBQTlCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBSU8sSUFBTW1YLFNBQWI7QUFBQTs7QUFDSSxxQkFBWTFTLEtBQVosRUFBbUIzVCxPQUFuQixFQUE0QjtBQUFBOztBQUFBLGtGQUNsQjJULEtBRGtCLEVBQ1gzVCxPQURXO0FBRTNCOztBQUhMO0FBQUE7QUFBQSwwQkFLVXFRLElBTFYsRUFLZ0I7QUFDUixXQUFLdFQsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLc1QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLEtBQUtxRCxLQUFMLENBQVd4RSxHQUFYLENBQWVrQixJQUFmLENBQWQ7QUFFQSxVQUFJb1gsSUFBSSxHQUFHLElBQUlwRCwyQ0FBSixFQUFYO0FBQ0EsVUFBSTZDLE9BQUo7QUFBQSxVQUFhRyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUtybkIsT0FBTCxDQUFhcW5CLFlBQTNDOztBQUNBLGFBQU8sS0FBS3RxQixLQUFMLEdBQWEsS0FBS3VULE1BQUwsQ0FBWXJNLE1BQWhDLEVBQXdDO0FBQ3BDLFlBQUl1TixLQUFLLEdBQUcsS0FBS2tXLE9BQUwsRUFBWjs7QUFFQSxZQUFJbFcsS0FBSyxDQUFDMFYsT0FBVixFQUFtQjtBQUNmLGNBQUlHLFlBQUosRUFBa0I7QUFDZCxnQkFBSSxDQUFDSCxPQUFMLEVBQWM7QUFDVkEscUJBQU8sR0FBRyxLQUFLQSxPQUFMLEVBQVY7QUFDQU8sa0JBQUksQ0FBQzVnQixVQUFMLENBQWdCNUosSUFBaEIsQ0FBcUJpcUIsT0FBckI7QUFDSCxhQUhELE1BSUs7QUFDRCxtQkFBS3pWLFVBQUwsQ0FBZ0Isd0JBQWhCLEVBQTBDRCxLQUExQztBQUNIO0FBQ0osV0FSRCxNQVNLO0FBQ0QsaUJBQUtDLFVBQUwsQ0FBZ0Isd0JBQWhCLEVBQTBDRCxLQUExQztBQUNIO0FBQ0osU0FiRCxNQWNLLElBQUlBLEtBQUssQ0FBQzRTLE9BQVYsRUFBbUI7QUFDcEIsY0FBSUEsT0FBTyxHQUFHLElBQUlELDRDQUFKLENBQVUzUyxLQUFLLENBQUNuQixJQUFoQixDQUFkO0FBQ0FvWCxjQUFJLENBQUM1Z0IsVUFBTCxDQUFnQjVKLElBQWhCLENBQXFCbW5CLE9BQXJCO0FBQ0EsZUFBSzlPLElBQUw7QUFDSCxTQUpJLE1BS0EsSUFBSTlELEtBQUssQ0FBQ3dWLE9BQVYsRUFBbUI7QUFDcEIsY0FBSTNXLElBQUksR0FBRyxJQUFJNFYsNENBQUosQ0FBVXpVLEtBQUssQ0FBQ25CLElBQWhCLENBQVg7QUFDQW9YLGNBQUksQ0FBQzVnQixVQUFMLENBQWdCNUosSUFBaEIsQ0FBcUJvVCxJQUFyQjtBQUNBLGVBQUtpRixJQUFMO0FBQ0gsU0FKSSxNQUtBLElBQUk5RCxLQUFLLENBQUMyVixHQUFOLElBQWEzVixLQUFLLENBQUNzVixLQUF2QixFQUE4QjtBQUMvQlcsY0FBSSxDQUFDNWdCLFVBQUwsQ0FBZ0I1SixJQUFoQixDQUFxQixLQUFLNmpCLE9BQUwsRUFBckI7QUFDSCxTQUZJLE1BR0E7QUFDRCxlQUFLclAsVUFBTCxDQUFnQixZQUFoQixFQUE4QkQsS0FBOUI7QUFDSDtBQUNKOztBQUVEaVcsVUFBSSxDQUFDL0IsWUFBTDtBQUVBLGFBQU8rQixJQUFJLENBQUM1Z0IsVUFBWjtBQUNIO0FBbERMO0FBQUE7QUFBQSw4QkFvRGM7QUFDTixXQUFLeU8sSUFBTDtBQUNBLFVBQUlxUyxPQUFPLEdBQUcsSUFBSXpCLDRDQUFKLEVBQWQ7QUFDQSxVQUFJMVUsS0FBSyxHQUFHLEtBQUtrVyxPQUFMLEVBQVo7O0FBRUEsVUFBSWxXLEtBQUssQ0FBQ2xGLFVBQVYsRUFBc0I7QUFDbEJxYixlQUFPLENBQUN4bEIsU0FBUixHQUFvQnFQLEtBQUssQ0FBQ25CLElBQTFCO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsYUFBS29CLFVBQUwsQ0FBZ0IsY0FBaEIsRUFBZ0NELEtBQWhDO0FBQ0g7O0FBRUQsV0FBS29XLEtBQUwsQ0FBV0QsT0FBWCxFQUFvQnJxQixPQUFwQixDQUE0QixVQUFVa25CLElBQVYsRUFBZ0I7QUFDeENtRCxlQUFPLENBQUM5Z0IsVUFBUixDQUFtQjVKLElBQW5CLENBQXdCdW5CLElBQXhCO0FBQ0gsT0FGRDtBQUlBaFQsV0FBSyxHQUFHLEtBQUtrVyxPQUFMLEVBQVI7O0FBRUEsVUFBSWxXLEtBQUssQ0FBQzJWLEdBQU4sSUFBYTNWLEtBQUssQ0FBQ2UsR0FBbkIsSUFBMEJmLEtBQUssQ0FBQ3lWLE9BQXBDLEVBQTZDO0FBQ3pDLGFBQUszUixJQUFMO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsYUFBSzdELFVBQUwsQ0FBZ0IsY0FBaEIsRUFBZ0NELEtBQWhDO0FBQ0g7O0FBRUQsYUFBT21XLE9BQVA7QUFDSDtBQTlFTDtBQUFBO0FBQUEsNEJBZ0ZZRSxDQWhGWixFQWdGZTtBQUNQLFdBQUt2UyxJQUFMO0FBQ0EsVUFBSWpVLEdBQUcsR0FBRyxJQUFJZ2pCLDJDQUFKLEVBQVY7QUFDQSxVQUFJN1MsS0FBSyxHQUFHLEtBQUtrVyxPQUFMLEVBQVo7O0FBRUEsVUFBSWxXLEtBQUssQ0FBQ2xGLFVBQVYsRUFBc0I7QUFDbEJqTCxXQUFHLENBQUNnYixRQUFKLEdBQWU3SyxLQUFLLENBQUNuQixJQUFyQjtBQUNBLGFBQUtpRixJQUFMO0FBQ0gsT0FIRCxNQUlLO0FBQ0QsYUFBSzdELFVBQUwsQ0FBZ0IsY0FBaEIsRUFBZ0NELEtBQWhDO0FBQ0g7O0FBRUQsV0FBS29XLEtBQUwsQ0FBV3ZtQixHQUFYLEVBQWdCL0QsT0FBaEIsQ0FBd0IsVUFBVWtuQixJQUFWLEVBQWdCO0FBQ3BDbmpCLFdBQUcsQ0FBQ3ltQixRQUFKLENBQWF0RCxJQUFiO0FBQ0gsT0FGRDtBQUlBaFQsV0FBSyxHQUFHLEtBQUtrVyxPQUFMLEVBQVI7O0FBRUEsVUFBSWxXLEtBQUssQ0FBQzJWLEdBQU4sSUFBYTNWLEtBQUssQ0FBQ2UsR0FBdkIsRUFBNEI7QUFDeEIsYUFBSytDLElBQUw7O0FBQ0EsWUFBSWpVLEdBQUcsQ0FBQ2diLFFBQUosS0FBaUIsT0FBckIsRUFBOEI7QUFDMUJoYixhQUFHLENBQUNpakIsVUFBSixHQUFpQixJQUFqQjtBQUNBLGlCQUFPampCLEdBQVA7QUFDSDs7QUFDRCxZQUFJLENBQUNtUSxLQUFLLENBQUN5VixPQUFYLEVBQW9CO0FBQ2hCLGVBQUtjLGFBQUwsQ0FBbUIxbUIsR0FBbkIsRUFBd0IvRCxPQUF4QixDQUFnQyxVQUFVeUosS0FBVixFQUFpQjtBQUM3QzFGLGVBQUcsQ0FBQzJtQixTQUFKLENBQWNqaEIsS0FBZDtBQUNILFdBRkQ7QUFHSDtBQUNKLE9BWEQsTUFZSztBQUNELGFBQUswSyxVQUFMLENBQWdCLGNBQWhCLEVBQWdDRCxLQUFoQztBQUNIOztBQUVEQSxXQUFLLEdBQUcsS0FBS2tXLE9BQUwsRUFBUjs7QUFDQSxVQUFJbFcsS0FBSyxDQUFDMlYsR0FBTixJQUFhM1YsS0FBSyxDQUFDc1YsS0FBbkIsSUFBNEJ0VixLQUFLLENBQUN5VixPQUF0QyxFQUErQztBQUMzQyxhQUFLM1IsSUFBTDtBQUNBOUQsYUFBSyxHQUFHLEtBQUtrVyxPQUFMLEVBQVI7O0FBQ0EsWUFBSWxXLEtBQUssQ0FBQ2xGLFVBQVYsRUFBc0I7QUFDbEIsY0FBSWpMLEdBQUcsQ0FBQ2diLFFBQUosS0FBaUI3SyxLQUFLLENBQUNuQixJQUEzQixFQUFpQztBQUM3QixpQkFBS2lGLElBQUw7QUFDQTlELGlCQUFLLEdBQUcsS0FBS2tXLE9BQUwsRUFBUjs7QUFDQSxnQkFBSWxXLEtBQUssQ0FBQzJWLEdBQU4sSUFBYTNWLEtBQUssQ0FBQ2UsR0FBbkIsSUFBMEJmLEtBQUssQ0FBQ3lWLE9BQXBDLEVBQTZDO0FBQ3pDLG1CQUFLM1IsSUFBTDtBQUNILGFBRkQsTUFHSztBQUNELG1CQUFLN0QsVUFBTCxDQUFnQixjQUFoQixFQUFnQ0QsS0FBaEM7QUFDSDtBQUNKLFdBVEQsTUFVSztBQUNELGlCQUFLQyxVQUFMLENBQWdCLGNBQWhCLEVBQWdDRCxLQUFoQztBQUNIO0FBQ0osU0FkRCxNQWVLO0FBQ0QsZUFBS0MsVUFBTCxDQUFnQixjQUFoQixFQUFnQ0QsS0FBaEM7QUFDSDtBQUNKLE9BckJELE1Bc0JLO0FBQ0QsYUFBS0MsVUFBTCxDQUFnQixjQUFoQixFQUFnQ0QsS0FBaEM7QUFDSDs7QUFFRCxhQUFPblEsR0FBUDtBQUNIO0FBL0lMO0FBQUE7QUFBQSxrQ0FpSmtCd21CLENBakpsQixFQWlKcUI7QUFDYixVQUFJSSxJQUFJLEdBQUcsRUFBWDs7QUFFQSxhQUFPLEtBQUtsckIsS0FBTCxHQUFhLEtBQUt1VCxNQUFMLENBQVlyTSxNQUFoQyxFQUF3QztBQUNwQyxZQUFJdU4sS0FBSyxHQUFHLEtBQUtrVyxPQUFMLEVBQVo7O0FBRUEsWUFBSWxXLEtBQUssQ0FBQzJWLEdBQU4sSUFBYTNWLEtBQUssQ0FBQ3lWLE9BQXZCLEVBQWdDO0FBQzVCO0FBQ0gsU0FGRCxNQUdLLElBQUl6VixLQUFLLENBQUM0UyxPQUFWLEVBQW1CO0FBQ3BCLGNBQUlBLE9BQU8sR0FBRyxJQUFJRCw0Q0FBSixDQUFVM1MsS0FBSyxDQUFDbkIsSUFBaEIsQ0FBZDtBQUNBNFgsY0FBSSxDQUFDaHJCLElBQUwsQ0FBVW1uQixPQUFWO0FBQ0EsZUFBSzlPLElBQUw7QUFDSCxTQUpJLE1BS0EsSUFBSTlELEtBQUssQ0FBQ3dWLE9BQVYsRUFBbUI7QUFDcEIsY0FBSTNXLElBQUksR0FBRyxJQUFJNFYsNENBQUosQ0FBVXpVLEtBQUssQ0FBQ25CLElBQWhCLENBQVg7QUFDQTRYLGNBQUksQ0FBQ2hyQixJQUFMLENBQVVvVCxJQUFWO0FBQ0EsZUFBS2lGLElBQUw7QUFDSCxTQUpJLE1BS0EsSUFBSTlELEtBQUssQ0FBQzJWLEdBQU4sSUFBYTNWLEtBQUssQ0FBQ3NWLEtBQXZCLEVBQThCO0FBQy9CbUIsY0FBSSxDQUFDaHJCLElBQUwsQ0FBVSxLQUFLNmpCLE9BQUwsQ0FBYStHLENBQWIsQ0FBVjtBQUNILFNBRkksTUFHQTtBQUNELGVBQUtwVyxVQUFMLENBQWdCLGNBQWhCLEVBQWdDRCxLQUFoQztBQUNIO0FBQ0o7O0FBRUQsYUFBT3lXLElBQVA7QUFDSDtBQTdLTDtBQUFBO0FBQUEsMEJBK0tVSixDQS9LVixFQStLYTtBQUNMLFVBQUlELEtBQUssR0FBRyxFQUFaOztBQUVBLGFBQU8sS0FBSzdxQixLQUFMLEdBQWEsS0FBS3VULE1BQUwsQ0FBWXJNLE1BQWhDLEVBQXdDO0FBQ3BDLFlBQUl1TixLQUFLLEdBQUcsS0FBS2tXLE9BQUwsRUFBWjs7QUFFQSxZQUFJbFcsS0FBSyxDQUFDMlYsR0FBTixJQUFhM1YsS0FBSyxDQUFDZSxHQUF2QixFQUE0QjtBQUN4QjtBQUNIOztBQUVELFlBQUlpUyxJQUFJLEdBQUcsSUFBSVQsNENBQUosRUFBWDs7QUFFQSxZQUFJdlMsS0FBSyxDQUFDbEYsVUFBVixFQUFzQjtBQUNsQmtZLGNBQUksQ0FBQ25JLFFBQUwsR0FBZ0I3SyxLQUFLLENBQUNuQixJQUF0QjtBQUNBbVUsY0FBSSxDQUFDMEQsTUFBTCxHQUFjMVcsS0FBSyxDQUFDbkIsSUFBcEI7QUFDQSxlQUFLaUYsSUFBTDtBQUNBOUQsZUFBSyxHQUFHLEtBQUtrVyxPQUFMLEVBQVI7O0FBQ0EsY0FBSWxXLEtBQUssQ0FBQzRWLEtBQVYsRUFBaUI7QUFDYixpQkFBSzlSLElBQUw7QUFDQTlELGlCQUFLLEdBQUcsS0FBS2tXLE9BQUwsRUFBUjs7QUFDQSxnQkFBSWxXLEtBQUssQ0FBQ3FCLFFBQVYsRUFBb0I7QUFDaEIyUixrQkFBSSxDQUFDcmlCLFNBQUwsR0FBaUJxUCxLQUFLLENBQUMvUyxLQUF2QjtBQUNBLG1CQUFLNlcsSUFBTDtBQUNILGFBSEQsTUFJSztBQUNELG1CQUFLN0QsVUFBTCxDQUFnQixjQUFoQixFQUFnQ0QsS0FBaEM7QUFDSDtBQUNKO0FBQ0o7O0FBRURvVyxhQUFLLENBQUMzcUIsSUFBTixDQUFXdW5CLElBQVg7QUFDSDs7QUFFRCxhQUFPb0QsS0FBUDtBQUNIO0FBak5MO0FBQUE7QUFBQSw4QkFtTmM7QUFDTixVQUFJLEtBQUs3cUIsS0FBTCxHQUFhLEtBQUt1VCxNQUFMLENBQVlyTSxNQUE3QixFQUFxQztBQUNqQyxlQUFPLEtBQUtxTSxNQUFMLENBQVksS0FBS3ZULEtBQWpCLENBQVA7QUFDSDs7QUFDRCxhQUFPLEVBQVA7QUFDSDtBQXhOTDtBQUFBO0FBQUEsMkJBME5XO0FBQ0gsV0FBS0EsS0FBTDtBQUNIO0FBNU5MOztBQUFBO0FBQUEsRUFBK0JxUyw4Q0FBL0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEEsSUFBSStZLFFBQVEsR0FBR0MsTUFBTSxDQUFDdHFCLFNBQVAsQ0FBaUJxcUIsUUFBaEM7QUFBQSxJQUNJRSxjQUFjLEdBQUdELE1BQU0sQ0FBQ0MsY0FENUIsQyxDQUdBOztBQUNBLFNBQVNDLFdBQVQsQ0FBcUI3cEIsS0FBckIsRUFBNEI7QUFDeEIsU0FBTyxPQUFPQSxLQUFQLEtBQWlCLFdBQXhCO0FBQ0g7O0FBRUQsU0FBUzhwQixTQUFULENBQW1COXBCLEtBQW5CLEVBQTBCO0FBQ3RCLFNBQU8sT0FBT0EsS0FBUCxLQUFpQixXQUF4QjtBQUNIOztBQUVELFNBQVMrcEIsT0FBVCxDQUFpQi9wQixLQUFqQixFQUF3QjtBQUNwQixTQUFPQSxLQUFLLFlBQVlrSSxLQUF4QjtBQUNIOztBQUVELFNBQVM4aEIsS0FBVCxDQUFlaHFCLEtBQWYsRUFBc0I7QUFDbEIsU0FBT0EsS0FBSyxZQUFZcUQsR0FBeEI7QUFDSDs7QUFFRCxTQUFTNG1CLFFBQVQsQ0FBa0JqcUIsS0FBbEIsRUFBeUI7QUFDckIsU0FBT0EsS0FBSyxLQUFLLElBQVYsSUFBa0IsUUFBT0EsS0FBUCxNQUFpQixRQUExQztBQUNIOztBQUVELFNBQVNrcUIsYUFBVCxDQUF1QmxxQixLQUF2QixFQUE4QjtBQUMxQixTQUFPQSxLQUFLLEtBQUssSUFBVixJQUFrQixRQUFPQSxLQUFQLE1BQWlCLFFBQW5DLElBQStDLENBQUM0cEIsY0FBYyxDQUFDNXBCLEtBQUQsQ0FBckU7QUFDSDs7QUFFRCxTQUFTbXFCLFFBQVQsQ0FBa0JucUIsS0FBbEIsRUFBeUI7QUFDckIsU0FBTyxPQUFPQSxLQUFQLEtBQWlCLFFBQXhCO0FBQ0g7O0FBRUQsU0FBU2lTLFFBQVQsQ0FBa0JqUyxLQUFsQixFQUF5QjtBQUNyQixTQUFPLE9BQU9BLEtBQVAsS0FBaUIsUUFBeEI7QUFDSDs7QUFFRCxTQUFTb3FCLE1BQVQsQ0FBZ0JwcUIsS0FBaEIsRUFBdUI7QUFDbkIsU0FBTzBwQixRQUFRLENBQUMzcUIsSUFBVCxDQUFjaUIsS0FBZCxNQUF5QixlQUFoQztBQUNIOztBQUVELFNBQVNxcUIsVUFBVCxDQUFvQnJxQixLQUFwQixFQUEyQjtBQUN2QixTQUFPLE9BQU9BLEtBQVAsS0FBaUIsVUFBeEI7QUFDSDs7QUFFRCxTQUFTc3FCLFFBQVQsQ0FBa0J0cUIsS0FBbEIsRUFBeUI7QUFDckIsU0FBTzBwQixRQUFRLENBQUMzcUIsSUFBVCxDQUFjaUIsS0FBZCxNQUF5QixpQkFBaEM7QUFDSDs7QUFFRCxTQUFTdXFCLFNBQVQsQ0FBbUJ2cUIsS0FBbkIsRUFBMEI7QUFDdEIsU0FBTyxPQUFPQSxLQUFQLEtBQWlCLFNBQXhCO0FBQ0g7O0FBRUQsU0FBU3dxQixVQUFULENBQW9CeHFCLEtBQXBCLEVBQTJCO0FBQ3ZCLFNBQVEsT0FBT3lxQixRQUFQLEtBQW9CLFdBQXJCLElBQXNDenFCLEtBQUssWUFBWXlxQixRQUE5RDtBQUNILEMsQ0FDRDtBQUVBOzs7QUFDQSxTQUFTQyxRQUFULENBQWtCMXFCLEtBQWxCLEVBQXlCO0FBQ3JCLE1BQUkycUIsQ0FBQyxHQUFHQyxVQUFVLENBQUM1cUIsS0FBRCxDQUFsQjtBQUNBLFNBQU82cUIsS0FBSyxDQUFDRixDQUFELENBQUwsR0FBVzNxQixLQUFYLEdBQW1CMnFCLENBQTFCO0FBQ0g7O0FBRUQsU0FBU0csU0FBVCxDQUFtQnZXLE1BQW5CLEVBQTJCO0FBQ3ZCLFNBQU80VixRQUFRLENBQUM1VixNQUFELENBQVIsR0FBbUJBLE1BQU0sQ0FBQ2dQLFdBQVAsRUFBbkIsR0FBMENoUCxNQUFqRDtBQUNIOztBQUVELFNBQVN3VyxTQUFULENBQW1CeFcsTUFBbkIsRUFBMkI7QUFDdkIsU0FBTzRWLFFBQVEsQ0FBQzVWLE1BQUQsQ0FBUixHQUFtQkEsTUFBTSxDQUFDeVcsV0FBUCxFQUFuQixHQUEwQ3pXLE1BQWpEO0FBQ0g7O0FBRUQsU0FBUzBXLGlCQUFULENBQTJCbnVCLElBQTNCLEVBQWlDb3VCLFNBQWpDLEVBQTRDQyxvQkFBNUMsRUFBa0U7QUFDOUQsU0FBT3J1QixJQUFJLENBQUN1TSxLQUFMLENBQVc2aEIsU0FBWCxFQUFzQmpiLEdBQXRCLENBQTBCLFVBQVVqUSxLQUFWLEVBQWlCMUIsS0FBakIsRUFBd0I7QUFDckQsUUFBSUEsS0FBSyxLQUFLLENBQVYsSUFBZSxDQUFDNnNCLG9CQUFwQixFQUEwQztBQUN0QyxhQUFPbnJCLEtBQVA7QUFDSDs7QUFFRCxRQUFJQSxLQUFLLENBQUN3RixNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLGFBQU94RixLQUFLLENBQUNnckIsV0FBTixFQUFQO0FBQ0g7O0FBRUQsV0FBT2hyQixLQUFLLENBQUMrUixNQUFOLENBQWEsQ0FBYixFQUFnQmlaLFdBQWhCLEtBQWdDaHJCLEtBQUssQ0FBQ2dVLFNBQU4sQ0FBZ0IsQ0FBaEIsQ0FBdkM7QUFDSCxHQVZNLEVBVUp0TixJQVZJLENBVUMsRUFWRCxDQUFQO0FBV0g7O0FBRUQsU0FBUzBrQixtQkFBVCxDQUE2QnR1QixJQUE3QixFQUFtQ291QixTQUFuQyxFQUE4Q0Msb0JBQTlDLEVBQW9FO0FBQ2hFLE1BQUlqWSxDQUFDLEdBQUcsQ0FBUjtBQUFBLE1BQVdtWSxPQUFPLEdBQUcsRUFBckI7QUFBQSxNQUF5QkMsS0FBekI7O0FBRUEsU0FBT3BZLENBQUMsR0FBR3BXLElBQUksQ0FBQzBJLE1BQWhCLEVBQXdCO0FBQ3BCOGxCLFNBQUksR0FBR3h1QixJQUFJLENBQUNvVyxDQUFELENBQVg7O0FBRUEsUUFBSSxDQUFDQSxDQUFDLEtBQUssQ0FBTixJQUFXaVksb0JBQVosS0FBcUMsUUFBUXJlLElBQVIsQ0FBYXdlLEtBQWIsQ0FBekMsRUFBNkQ7QUFDekRELGFBQU8sSUFBSUgsU0FBWDtBQUNBRyxhQUFPLElBQUlDLEtBQUksQ0FBQy9ILFdBQUwsRUFBWDtBQUNILEtBSEQsTUFHTztBQUNIOEgsYUFBTyxJQUFJQyxLQUFYO0FBQ0g7O0FBRURwWSxLQUFDO0FBQ0o7O0FBRUQsU0FBT21ZLE9BQVA7QUFDSCxDLENBQ0Q7QUFFQTs7O0FBQ0EsU0FBUzlFLElBQVQsR0FBZ0I7QUFDWixNQUFJYyxJQUFJLEdBQUcsS0FBWDtBQUFBLE1BQWtCa0UsUUFBUSxHQUFHLENBQTdCO0FBQUEsTUFBZ0M5dEIsR0FBRyxHQUFHOGMsU0FBUyxDQUFDZ1IsUUFBRCxDQUEvQztBQUFBLE1BQTJENXJCLE1BQTNEOztBQUVBLE1BQUk0cUIsU0FBUyxDQUFDOXNCLEdBQUQsQ0FBYixFQUFvQjtBQUNoQjRwQixRQUFJLEdBQUc1cEIsR0FBUDtBQUNBOHRCLFlBQVE7QUFDUjl0QixPQUFHLEdBQUc4YyxTQUFTLENBQUNnUixRQUFELENBQWY7QUFDSDs7QUFFRCxNQUFJaFIsU0FBUyxDQUFDL1UsTUFBVixHQUFtQitsQixRQUFRLEdBQUcsQ0FBbEMsRUFBcUM7QUFDakM1ckIsVUFBTSxHQUFHNGEsU0FBUyxDQUFDZ1IsUUFBUSxHQUFHLENBQVosQ0FBbEI7QUFDSDs7QUFFRCxNQUFJeEIsT0FBTyxDQUFDdHNCLEdBQUQsQ0FBWCxFQUFrQjtBQUNkLFFBQUkrdEIsTUFBTSxHQUFHLEVBQWI7QUFDQS90QixPQUFHLENBQUNvQixPQUFKLENBQVksVUFBVThGLElBQVYsRUFBZ0JyRyxLQUFoQixFQUF1QjtBQUMvQixVQUFJcUIsTUFBTSxJQUFJLElBQVYsSUFBa0JBLE1BQU0sQ0FBQ2xDLEdBQUQsRUFBTWEsS0FBTixFQUFhcUcsSUFBYixDQUE1QixFQUFnRDtBQUM1QzZtQixjQUFNLENBQUNodEIsSUFBUCxDQUFZNm9CLElBQUksR0FBR2QsSUFBSSxDQUFDYyxJQUFELEVBQU8xaUIsSUFBUCxDQUFQLEdBQXNCQSxJQUF0QztBQUNIO0FBQ0osS0FKRDtBQUtBLFdBQU82bUIsTUFBUDtBQUNIOztBQUVELE1BQUl2QixRQUFRLENBQUN4c0IsR0FBRCxDQUFaLEVBQW1CO0FBQ2YsUUFBSWd1QixNQUFNLEdBQUdqZSxNQUFNLENBQUMvUCxHQUFELENBQW5CO0FBQ0FvQixXQUFPLENBQUNwQixHQUFELEVBQU0sVUFBVXVDLEtBQVYsRUFBaUJwRCxHQUFqQixFQUFzQjtBQUMvQixVQUFJK0MsTUFBTSxJQUFJLElBQVYsSUFBa0JBLE1BQU0sQ0FBQ2xDLEdBQUQsRUFBTWIsR0FBTixFQUFXb0QsS0FBWCxDQUE1QixFQUErQztBQUMzQ3lyQixjQUFNLENBQUM3dUIsR0FBRCxDQUFOLEdBQWN5cUIsSUFBSSxHQUFHZCxJQUFJLENBQUNjLElBQUQsRUFBT3JuQixLQUFQLENBQVAsR0FBdUJBLEtBQXpDO0FBQ0g7QUFDSixLQUpNLENBQVA7QUFLQSxXQUFPeXJCLE1BQVA7QUFDSDs7QUFFRCxTQUFPaHVCLEdBQVA7QUFDSDs7QUFFRCxTQUFTaXVCLE1BQVQsR0FBa0I7QUFDZCxNQUFJckUsSUFBSSxHQUFHLEtBQVg7QUFBQSxNQUFrQi9vQixLQUFLLEdBQUcsQ0FBMUI7QUFBQSxNQUE2QmMsTUFBTSxHQUFHbWIsU0FBUyxDQUFDamMsS0FBRCxDQUEvQzs7QUFFQSxNQUFJaXNCLFNBQVMsQ0FBQ25yQixNQUFELENBQWIsRUFBdUI7QUFDbkJpb0IsUUFBSSxHQUFHam9CLE1BQVA7QUFDQUEsVUFBTSxHQUFHbWIsU0FBUyxDQUFDLEVBQUVqYyxLQUFILENBQWxCO0FBQ0g7O0FBRUQsTUFBSStvQixJQUFKLEVBQVU7QUFDTm5mLFNBQUssQ0FBQzdJLFNBQU4sQ0FBZ0I4SSxLQUFoQixDQUFzQnBKLElBQXRCLENBQTJCd2IsU0FBM0IsRUFBc0NqYyxLQUFLLEdBQUcsQ0FBOUMsRUFBaURPLE9BQWpELENBQXlELFVBQVU4RixJQUFWLEVBQWdCO0FBQ3JFZ25CLGVBQVMsQ0FBQ3ZzQixNQUFELEVBQVN1RixJQUFULENBQVQ7QUFDSCxLQUZEO0FBR0gsR0FKRCxNQUtLO0FBQ0R1RCxTQUFLLENBQUM3SSxTQUFOLENBQWdCOEksS0FBaEIsQ0FBc0JwSixJQUF0QixDQUEyQndiLFNBQTNCLEVBQXNDamMsS0FBSyxHQUFHLENBQTlDLEVBQWlETyxPQUFqRCxDQUF5RCxVQUFVOEYsSUFBVixFQUFnQjtBQUNyRWluQixnQkFBVSxDQUFDeHNCLE1BQUQsRUFBU3VGLElBQVQsQ0FBVjtBQUNILEtBRkQ7QUFHSDtBQUNKOztBQUVELFNBQVNrbkIsS0FBVCxHQUFpQjtBQUNiLE1BQUl4RSxJQUFJLEdBQUcsS0FBWDtBQUFBLE1BQWtCL29CLEtBQUssR0FBRyxDQUExQjtBQUFBLE1BQTZCYyxNQUFNLEdBQUcsRUFBdEM7O0FBRUEsTUFBSW1yQixTQUFTLENBQUNoUSxTQUFTLENBQUNqYyxLQUFELENBQVYsQ0FBYixFQUFpQztBQUM3QitvQixRQUFJLEdBQUc5TSxTQUFTLENBQUNqYyxLQUFELENBQWhCO0FBQ0FBLFNBQUs7QUFDUjs7QUFFRCxNQUFJK29CLElBQUosRUFBVTtBQUNObmYsU0FBSyxDQUFDN0ksU0FBTixDQUFnQjhJLEtBQWhCLENBQXNCcEosSUFBdEIsQ0FBMkJ3YixTQUEzQixFQUFzQ2pjLEtBQXRDLEVBQTZDTyxPQUE3QyxDQUFxRCxVQUFVOEYsSUFBVixFQUFnQjtBQUNqRWduQixlQUFTLENBQUN2c0IsTUFBRCxFQUFTdUYsSUFBVCxDQUFUO0FBQ0gsS0FGRDtBQUdILEdBSkQsTUFLSztBQUNEdUQsU0FBSyxDQUFDN0ksU0FBTixDQUFnQjhJLEtBQWhCLENBQXNCcEosSUFBdEIsQ0FBMkJ3YixTQUEzQixFQUFzQ2pjLEtBQXRDLEVBQTZDTyxPQUE3QyxDQUFxRCxVQUFVOEYsSUFBVixFQUFnQjtBQUNqRWluQixnQkFBVSxDQUFDeHNCLE1BQUQsRUFBU3VGLElBQVQsQ0FBVjtBQUNILEtBRkQ7QUFHSDs7QUFFRCxTQUFPdkYsTUFBUDtBQUNIOztBQUVELFNBQVN3c0IsVUFBVCxDQUFvQnhzQixNQUFwQixFQUE0QjBzQixNQUE1QixFQUFvQztBQUNoQ2p0QixTQUFPLENBQUNpdEIsTUFBRCxFQUFTLFVBQVU5ckIsS0FBVixFQUFpQnBELEdBQWpCLEVBQXNCO0FBQ2xDd0MsVUFBTSxDQUFDeEMsR0FBRCxDQUFOLEdBQWNvRCxLQUFkO0FBQ0gsR0FGTSxDQUFQO0FBR0g7O0FBRUQsU0FBUzJyQixTQUFULENBQW1CdnNCLE1BQW5CLEVBQTJCMHNCLE1BQTNCLEVBQW1DO0FBQy9CanRCLFNBQU8sQ0FBQ2l0QixNQUFELEVBQVMsVUFBVTlyQixLQUFWLEVBQWlCcEQsR0FBakIsRUFBc0I7QUFDbEMsUUFBSXdDLE1BQU0sQ0FBQ3hDLEdBQUQsQ0FBTixJQUFlLElBQW5CLEVBQXlCO0FBQ3JCd0MsWUFBTSxDQUFDeEMsR0FBRCxDQUFOLEdBQWNvRCxLQUFkO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsVUFBSWlxQixRQUFRLENBQUM3cUIsTUFBTSxDQUFDeEMsR0FBRCxDQUFQLENBQVIsSUFBeUJxdEIsUUFBUSxDQUFDanFCLEtBQUQsQ0FBckMsRUFBOEM7QUFDMUMyckIsaUJBQVMsQ0FBQ3ZzQixNQUFNLENBQUN4QyxHQUFELENBQVAsRUFBY29ELEtBQWQsQ0FBVDtBQUNILE9BRkQsTUFHSztBQUNEWixjQUFNLENBQUN4QyxHQUFELENBQU4sR0FBY29ELEtBQWQ7QUFDSDtBQUNKO0FBQ0osR0FaTSxDQUFQO0FBYUgsQyxDQUNEO0FBRUE7OztBQUNBLFNBQVNuQixPQUFULENBQWlCTyxNQUFqQixFQUF5QnVjLE1BQXpCLEVBQWlDO0FBQzdCLE1BQUlvTyxPQUFPLENBQUMzcUIsTUFBRCxDQUFYLEVBQXFCO0FBQ2pCQSxVQUFNLENBQUNQLE9BQVAsQ0FBZThjLE1BQWY7QUFDSCxHQUZELE1BRU8sSUFBSXNPLFFBQVEsQ0FBQzdxQixNQUFELENBQVosRUFBc0I7QUFDekIsU0FBSyxJQUFJeEMsR0FBVCxJQUFnQndDLE1BQWhCLEVBQXdCO0FBQ3BCLFVBQUlBLE1BQU0sQ0FBQ3VYLGNBQVAsQ0FBc0IvWixHQUF0QixDQUFKLEVBQWdDO0FBQzVCK2UsY0FBTSxDQUFDdmMsTUFBTSxDQUFDeEMsR0FBRCxDQUFQLEVBQWNBLEdBQWQsQ0FBTjtBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQUVELFNBQVM2aUIsSUFBVCxDQUFjcmdCLE1BQWQsRUFBc0Iyc0IsSUFBdEIsRUFBNEI7QUFDeEIsTUFBSWhDLE9BQU8sQ0FBQzNxQixNQUFELENBQVgsRUFBcUI7QUFDakIsV0FBT0EsTUFBTSxDQUFDcWdCLElBQVAsQ0FBWXNNLElBQVosQ0FBUDtBQUNIOztBQUVELE1BQUk5QixRQUFRLENBQUM3cUIsTUFBRCxDQUFaLEVBQXNCO0FBQ2xCLFNBQUssSUFBSXhDLEdBQVQsSUFBZ0J3QyxNQUFoQixFQUF3QjtBQUNwQixVQUFJQSxNQUFNLENBQUN1WCxjQUFQLENBQXNCL1osR0FBdEIsQ0FBSixFQUFnQztBQUM1QixZQUFJbXZCLElBQUksQ0FBQzNzQixNQUFNLENBQUN4QyxHQUFELENBQVAsRUFBY0EsR0FBZCxDQUFSLEVBQTRCO0FBQ3hCLGlCQUFPLElBQVA7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNKLEMsQ0FDRDtBQUVBOzs7QUFDQSxTQUFTb3ZCLE9BQVQsQ0FBaUI5bUIsSUFBakIsRUFBdUIrbUIsTUFBdkIsRUFBK0I7QUFDM0IsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBVXZuQixJQUFWLEVBQWdCO0FBQzNCLFFBQUlzbkIsTUFBTSxJQUFJLElBQWQsRUFBb0I7QUFDaEIsYUFBT3RuQixJQUFQO0FBQ0g7O0FBRUQsV0FBT3NuQixNQUFNLENBQUN0bkIsSUFBRCxDQUFiO0FBQ0gsR0FORDs7QUFRQSxTQUFPTyxJQUFJLENBQUNpbkIsSUFBTCxDQUFVLFVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUM3QixRQUFJSCxRQUFRLENBQUNFLENBQUQsQ0FBUixHQUFjRixRQUFRLENBQUNHLENBQUQsQ0FBMUIsRUFBK0I7QUFDM0IsYUFBTyxDQUFDLENBQVI7QUFDSDs7QUFDRCxRQUFJSCxRQUFRLENBQUNFLENBQUQsQ0FBUixHQUFjRixRQUFRLENBQUNHLENBQUQsQ0FBMUIsRUFBK0I7QUFDM0IsYUFBTyxDQUFQO0FBQ0g7O0FBQ0QsV0FBTyxDQUFQO0FBQ0gsR0FSTSxDQUFQO0FBU0g7O0FBRUQsU0FBU0MsaUJBQVQsQ0FBMkJwbkIsSUFBM0IsRUFBaUMrbUIsTUFBakMsRUFBeUM7QUFDckMsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBVXZuQixJQUFWLEVBQWdCO0FBQzNCLFFBQUlzbkIsTUFBTSxJQUFJLElBQWQsRUFBb0I7QUFDaEIsYUFBT3RuQixJQUFQO0FBQ0g7O0FBRUQsV0FBT3NuQixNQUFNLENBQUN0bkIsSUFBRCxDQUFiO0FBQ0gsR0FORDs7QUFRQSxTQUFPTyxJQUFJLENBQUNpbkIsSUFBTCxDQUFVLFVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUM3QixRQUFJSCxRQUFRLENBQUNFLENBQUQsQ0FBUixHQUFjRixRQUFRLENBQUNHLENBQUQsQ0FBMUIsRUFBK0I7QUFDM0IsYUFBTyxDQUFQO0FBQ0g7O0FBQ0QsUUFBSUgsUUFBUSxDQUFDRSxDQUFELENBQVIsR0FBY0YsUUFBUSxDQUFDRyxDQUFELENBQTFCLEVBQStCO0FBQzNCLGFBQU8sQ0FBQyxDQUFSO0FBQ0g7O0FBQ0QsV0FBTyxDQUFQO0FBQ0gsR0FSTSxDQUFQO0FBU0g7O0FBRUQsU0FBUzVJLE1BQVQsR0FBa0I7QUFDZCxTQUFPdmIsS0FBSyxDQUFDN0ksU0FBTixDQUFnQm9rQixNQUFoQixDQUF1QnJULEtBQXZCLENBQTZCLEVBQTdCLEVBQWlDbUssU0FBakMsQ0FBUDtBQUNIOztBQUVELFNBQVN4WCxNQUFULENBQWdCbUMsSUFBaEIsRUFBc0JsRixLQUF0QixFQUE2QjtBQUN6QixNQUFJMUIsS0FBSyxHQUFHNEcsSUFBSSxDQUFDM0csT0FBTCxDQUFheUIsS0FBYixDQUFaOztBQUNBLE1BQUkxQixLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2QsV0FBTzRHLElBQUksQ0FBQ3ZHLE1BQUwsQ0FBWUwsS0FBWixFQUFtQixDQUFuQixDQUFQO0FBQ0g7QUFDSixDLENBQ0Q7OztBQUVBLFNBQVNrUCxNQUFULENBQWdCK2UsQ0FBaEIsRUFBbUI7QUFDZixXQUFTQyxDQUFULEdBQWEsQ0FDWjs7QUFFREEsR0FBQyxDQUFDbnRCLFNBQUYsR0FBY2t0QixDQUFkO0FBQ0EsU0FBTyxJQUFJQyxDQUFKLEVBQVA7QUFDSDs7QUFFRCxTQUFTQyxnQkFBVCxDQUEwQkMsT0FBMUIsRUFBbUNDLFNBQW5DLEVBQThDO0FBQzFDLE1BQUl0dEIsU0FBUyxHQUFHbU8sTUFBTSxDQUFDbWYsU0FBUyxDQUFDdHRCLFNBQVgsQ0FBdEI7QUFDQUEsV0FBUyxDQUFDdXRCLFdBQVYsR0FBd0JGLE9BQXhCO0FBQ0FBLFNBQU8sQ0FBQ3J0QixTQUFSLEdBQW9CQSxTQUFwQjtBQUNIOztBQUVELFNBQVN3dEIsT0FBVCxDQUFpQkgsT0FBakIsRUFBMEJDLFNBQTFCLEVBQXFDO0FBQ2pDRixrQkFBZ0IsQ0FBQ0MsT0FBRCxFQUFVQyxTQUFWLENBQWhCOztBQUNBRCxTQUFPLFNBQVAsR0FBZ0IsWUFBWTtBQUN4QkMsYUFBUyxDQUFDdmMsS0FBVixDQUFnQixJQUFoQixFQUFzQm1LLFNBQXRCO0FBQ0gsR0FGRDtBQUdIOztBQUVELFNBQVN1UyxXQUFULENBQXFCMXRCLE1BQXJCLEVBQTZCc08sUUFBN0IsRUFBdUM7QUFDbkMsTUFBSTlRLEdBQUo7QUFBQSxNQUFTd2UsSUFBSSxHQUFHMU4sUUFBUSxDQUFDckUsS0FBVCxDQUFlLEdBQWYsQ0FBaEI7O0FBRUEsU0FBTytSLElBQUksQ0FBQzVWLE1BQUwsR0FBYyxDQUFyQixFQUF3QjtBQUNwQixRQUFJLENBQUN5a0IsUUFBUSxDQUFDN3FCLE1BQUQsQ0FBYixFQUF1QjtBQUNuQixhQUFPLEtBQVA7QUFDSDs7QUFFRHhDLE9BQUcsR0FBR3dlLElBQUksQ0FBQzNWLEtBQUwsRUFBTjtBQUNBckcsVUFBTSxHQUFHQSxNQUFNLENBQUN4QyxHQUFELENBQWY7QUFDSDs7QUFFRCxTQUFPcXRCLFFBQVEsQ0FBQzdxQixNQUFELENBQVIsSUFBb0JBLE1BQU0sQ0FBQ3VYLGNBQVAsQ0FBc0J5RSxJQUFJLENBQUMzVixLQUFMLEVBQXRCLENBQTNCO0FBQ0g7O0FBRUQsU0FBU3NuQixXQUFULENBQXFCM3RCLE1BQXJCLEVBQTZCc08sUUFBN0IsRUFBdUM7QUFDbkMsTUFBSTlRLEdBQUo7QUFBQSxNQUFTd2UsSUFBSSxHQUFHMU4sUUFBUSxDQUFDckUsS0FBVCxDQUFlLEdBQWYsQ0FBaEI7O0FBRUEsU0FBTytSLElBQUksQ0FBQzVWLE1BQUwsR0FBYyxDQUFyQixFQUF3QjtBQUNwQixRQUFHLENBQUN5a0IsUUFBUSxDQUFDN3FCLE1BQUQsQ0FBWixFQUFzQjtBQUNsQjtBQUNIOztBQUVEeEMsT0FBRyxHQUFHd2UsSUFBSSxDQUFDM1YsS0FBTCxFQUFOO0FBQ0FyRyxVQUFNLEdBQUdBLE1BQU0sQ0FBQ3hDLEdBQUQsQ0FBZjtBQUNIOztBQUVELFNBQU93QyxNQUFQO0FBQ0g7O0FBRUQsU0FBUzR0QixXQUFULENBQXFCNXRCLE1BQXJCLEVBQTZCc08sUUFBN0IsRUFBdUMxTixLQUF2QyxFQUE4QztBQUMxQyxNQUFJcEQsR0FBSjtBQUFBLE1BQVN3ZSxJQUFJLEdBQUcxTixRQUFRLENBQUNyRSxLQUFULENBQWUsR0FBZixDQUFoQjs7QUFFQSxTQUFPK1IsSUFBSSxDQUFDNVYsTUFBTCxHQUFjLENBQXJCLEVBQXdCO0FBQ3BCLFFBQUksQ0FBQ3lrQixRQUFRLENBQUM3cUIsTUFBRCxDQUFiLEVBQXVCO0FBQ25CO0FBQ0g7O0FBRUR4QyxPQUFHLEdBQUd3ZSxJQUFJLENBQUMzVixLQUFMLEVBQU47QUFDQXJHLFVBQU0sR0FBR0EsTUFBTSxDQUFDeEMsR0FBRCxDQUFmO0FBQ0g7O0FBRUQsTUFBSXF0QixRQUFRLENBQUM3cUIsTUFBRCxDQUFaLEVBQXNCO0FBQ2xCeEMsT0FBRyxHQUFHd2UsSUFBSSxDQUFDM1YsS0FBTCxFQUFOO0FBQ0FyRyxVQUFNLENBQUN4QyxHQUFELENBQU4sR0FBY29ELEtBQWQ7QUFDSDtBQUNKOztBQUVELFNBQVNpdEIsTUFBVCxHQUFrQjtBQUNkLE1BQUkxUyxTQUFTLENBQUMvVSxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQ3hCO0FBQ0g7O0FBRUQsTUFBSW1QLEtBQUo7QUFBQSxNQUFXdVksU0FBWDtBQUFBLE1BQXNCNXVCLEtBQXRCO0FBQUEsTUFBNkJzRixNQUFNLEdBQUcsRUFBdEM7QUFBQSxNQUEwQ2dPLElBQUksR0FBRzJJLFNBQVMsQ0FBQyxDQUFELENBQTFEO0FBQUEsTUFDSTVXLE9BQU8sR0FBRyxZQURkO0FBQUEsTUFDNEI0WSxTQUFTLEdBQUc1WSxPQUFPLENBQUM0WSxTQURoRDs7QUFHQSxTQUFPNUgsS0FBSyxHQUFHaFIsT0FBTyxDQUFDRSxJQUFSLENBQWErTixJQUFiLENBQWYsRUFBbUM7QUFDL0JzYixhQUFTLEdBQUd2WSxLQUFLLENBQUMsQ0FBRCxDQUFqQjtBQUNBclcsU0FBSyxHQUFHK1YsTUFBTSxDQUFDUyxRQUFQLENBQWdCSCxLQUFLLENBQUMsQ0FBRCxDQUFyQixJQUE0QixDQUFwQzs7QUFFQSxRQUFJNEYsU0FBUyxDQUFDL1UsTUFBVixJQUFvQmxILEtBQXhCLEVBQStCO0FBQzNCLFlBQU0sSUFBSUcsS0FBSixDQUFVLGlCQUFpQkgsS0FBakIsR0FBeUIsZ0JBQW5DLENBQU47QUFDSDs7QUFFRHNGLFVBQU0sSUFBSWdPLElBQUksQ0FBQ29DLFNBQUwsQ0FBZXVJLFNBQWYsRUFBMEI1SCxLQUFLLENBQUNyVyxLQUFoQyxJQUF5Q2ljLFNBQVMsQ0FBQ2pjLEtBQUQsQ0FBNUQ7QUFDQWllLGFBQVMsR0FBRzVZLE9BQU8sQ0FBQzRZLFNBQXBCO0FBQ0g7O0FBRUQzWSxRQUFNLElBQUlnTyxJQUFJLENBQUNvQyxTQUFMLENBQWV1SSxTQUFmLENBQVY7QUFFQSxTQUFPM1ksTUFBUDtBQUNIOztBQUVELFNBQVN1cEIsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDdEIsU0FBT0EsSUFBSSxDQUFDempCLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLEdBQXRCLEVBQTJCQSxPQUEzQixDQUFtQyxPQUFuQyxFQUE0QyxHQUE1QyxFQUFpREEsT0FBakQsQ0FBeUQsUUFBekQsRUFBbUUsR0FBbkUsRUFBd0VBLE9BQXhFLENBQWdGLFVBQWhGLEVBQTRGLEVBQTVGLENBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsWUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBUzBqQixvQkFBVCxDQUE4Qmx2QixJQUE5QixFQUFvQztBQUN2QyxPQUFLb2pCLE1BQUwsR0FBYyxJQUFkO0FBQ0EsT0FBS3ZrQixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsT0FBS3N3QixVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsT0FBS3B3QixVQUFMLEdBQWtCLElBQWxCO0FBQ0EsT0FBS3NSLE9BQUwsR0FBZSxJQUFJK2UsOENBQUosQ0FBVyxJQUFYLENBQWY7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLElBQUkzVSxrREFBSixDQUFhLElBQWIsQ0FBakI7QUFDQSxPQUFLNFUsS0FBTCxHQUFhL29CLDRDQUFBLENBQVksS0FBS3BGLFVBQWpCLEVBQTZCbkIsSUFBN0IsQ0FBYjtBQUNBLE9BQUtkLFVBQUwsR0FBa0IsS0FBS3F3QixjQUFMLEVBQWxCO0FBQ0EsT0FBSzN3QixLQUFMLEdBQWEsRUFBYjtBQUNBLE9BQUtZLE1BQUwsR0FBYyxFQUFkO0FBQ0EsT0FBS2QsS0FBTCxHQUFhLEtBQUs4d0IsU0FBTCxDQUFlLEVBQWYsQ0FBYjtBQUNBLE9BQUtoc0IsS0FBTCxHQUFhLEtBQUtnc0IsU0FBTCxDQUFlLEVBQWYsQ0FBYjtBQUNBcHVCLG9EQUFRLENBQUNxdUIsY0FBVCxDQUF3QixJQUF4QixFQUE4QixLQUFLSCxLQUFuQztBQUNIO0FBRU0sSUFBTWx3QixTQUFiO0FBQUE7QUFBQTtBQUFBLDhCQUtjNkIsTUFMZCxFQUtzQjtBQUNkLGFBQU8sSUFBSThiLEtBQUosQ0FBVTliLE1BQVYsRUFBa0JOLGlEQUFsQixDQUFQO0FBQ0g7QUFQTDtBQUFBO0FBQUEsNkJBU2EvQixLQVRiLEVBU29CO0FBQ1osV0FBS0EsS0FBTCxHQUFhQSxLQUFLLElBQUksRUFBdEI7QUFDSDtBQVhMO0FBQUE7QUFBQSxrQ0Fha0JpQixHQWJsQixFQWF1QjtBQUNmLFdBQUtYLFVBQUwsR0FBa0JXLEdBQWxCO0FBQ0g7QUFmTDtBQUFBO0FBQUEsOEJBaUJjMkQsS0FqQmQsRUFpQnFCO0FBQ2IsV0FBS0EsS0FBTCxHQUFhLEtBQUtnc0IsU0FBTCxDQUFlaHNCLEtBQWYsQ0FBYjtBQUNIO0FBbkJMO0FBQUE7QUFBQSw4QkFxQmM5RSxLQXJCZCxFQXFCcUI7QUFDYixXQUFLQSxLQUFMLEdBQWEsS0FBSzh3QixTQUFMLENBQWU5d0IsS0FBZixDQUFiO0FBQ0g7QUF2Qkw7QUFBQTtBQUFBLHdCQUNvQjtBQUNaLGFBQU8wQyxrREFBUDtBQUNIO0FBSEw7O0FBeUJJLHFCQUFZcEIsSUFBWixFQUFrQjtBQUFBOztBQUNka3ZCLHdCQUFvQixDQUFDdHVCLElBQXJCLENBQTBCLElBQTFCLEVBQWdDWixJQUFoQztBQUNIOztBQTNCTDtBQUFBO0FBQUEscUNBNkJxQjtBQUNiLFVBQUlILEdBQUcsR0FBR3dDLFFBQVEsQ0FBQ3FKLGFBQVQsQ0FBdUJuRiwwREFBQSxDQUEwQixLQUFLK29CLEtBQUwsQ0FBVzd3QixHQUFyQyxFQUEwQyxHQUExQyxDQUF2QixDQUFWO0FBQ0FvQyxtREFBQSxDQUFhaEIsR0FBYixFQUFrQmlCLGdEQUFsQjtBQUNBLGFBQU9qQixHQUFQO0FBQ0g7QUFqQ0w7QUFBQTtBQUFBLGlDQW1DaUJwQixHQW5DakIsRUFtQ3NCO0FBQ2QsYUFBTzhILGtEQUFBLENBQWtCLEtBQUs3SCxLQUF2QixFQUE4QkQsR0FBOUIsQ0FBUDtBQUNIO0FBckNMO0FBQUE7QUFBQSxpQ0F1Q2lCQSxHQXZDakIsRUF1Q3NCO0FBQ2QsYUFBTzhILGtEQUFBLENBQWtCLEtBQUs3SCxLQUF2QixFQUE4QkQsR0FBOUIsQ0FBUDtBQUNIO0FBekNMO0FBQUE7QUFBQSxpQ0EyQ2lCQSxHQTNDakIsRUEyQ3NCb0QsS0EzQ3RCLEVBMkM2QjtBQUNyQixVQUFJNFksUUFBUSxHQUFHbFUsa0RBQUEsQ0FBa0IsS0FBSzdILEtBQXZCLEVBQThCRCxHQUE5QixDQUFmOztBQUVBLFVBQUlnYyxRQUFRLEtBQUs1WSxLQUFqQixFQUF3QjtBQUNwQjBFLDBEQUFBLENBQWtCLEtBQUs3SCxLQUF2QixFQUE4QkQsR0FBOUIsRUFBbUNvRCxLQUFuQztBQUNBLGFBQUs2dEIsaUJBQUwsSUFBMEIsS0FBS0EsaUJBQUwsQ0FBdUJqeEIsR0FBdkIsRUFBNEJvRCxLQUE1QixFQUFtQzRZLFFBQW5DLENBQTFCO0FBQ0g7QUFDSjtBQWxETDtBQUFBO0FBQUEsZ0NBb0RnQmhjLEdBcERoQixFQW9EcUI7QUFDYixhQUFPOEgsa0RBQUEsQ0FBa0IsS0FBSy9HLE1BQXZCLEVBQStCZixHQUEvQixDQUFQO0FBQ0g7QUF0REw7QUFBQTtBQUFBLDBCQXdEVUEsR0F4RFYsRUF3RGVrQyxPQXhEZixFQXdEd0I7QUFDaEIsVUFBSWd2QixPQUFPLEdBQUdwcEIsa0RBQUEsQ0FBa0IsS0FBSy9HLE1BQXZCLEVBQStCZixHQUEvQixDQUFkOztBQUVBLFVBQUlZLHVEQUFTLENBQUNzd0IsT0FBRCxDQUFiLEVBQXdCO0FBQ3BCQSxlQUFPLENBQUN6bUIsRUFBUixDQUFXdkksT0FBWDtBQUNILE9BRkQsTUFFTztBQUNILGNBQU0sSUFBSUwsS0FBSixDQUFVaUcsNkNBQUEsQ0FBYSw0QkFBYixFQUEyQzlILEdBQTNDLENBQVYsQ0FBTjtBQUNIO0FBQ0o7QUFoRUw7QUFBQTtBQUFBLDRCQWtFWUEsR0FsRVosRUFrRWlCa0MsT0FsRWpCLEVBa0UwQjtBQUNsQixVQUFJZ3ZCLE9BQU8sR0FBR3BwQixrREFBQSxDQUFrQixLQUFLL0csTUFBdkIsRUFBK0JmLEdBQS9CLENBQWQ7O0FBRUEsVUFBSVksdURBQVMsQ0FBQ3N3QixPQUFELENBQWIsRUFBd0I7QUFDcEJBLGVBQU8sQ0FBQ3B2QixHQUFSLENBQVlJLE9BQVo7QUFDSDtBQUNKO0FBeEVMO0FBQUE7QUFBQSwyQkEwRVdvTCxHQTFFWCxFQTBFZ0JwTCxPQTFFaEIsRUEwRXlCZ0csTUExRXpCLEVBMEVpQztBQUN6QixhQUFPLEtBQUswb0IsU0FBTCxDQUFldlQsS0FBZixDQUFxQi9QLEdBQXJCLEVBQTBCcEwsT0FBMUIsRUFBbUNnRyxNQUFuQyxDQUFQO0FBQ0g7QUE1RUw7QUFBQTtBQUFBLHFDQThFcUJvRixHQTlFckIsRUE4RTBCcEwsT0E5RTFCLEVBOEVtQ2dHLE1BOUVuQyxFQThFMkM7QUFDbkMsYUFBTyxLQUFLMG9CLFNBQUwsQ0FBZU8sZUFBZixDQUErQjdqQixHQUEvQixFQUFvQ3BMLE9BQXBDLEVBQTZDZ0csTUFBN0MsQ0FBUDtBQUNIO0FBaEZMO0FBQUE7QUFBQSwwQkFrRlVvRixHQWxGVixFQWtGZXBGLE1BbEZmLEVBa0Z1QjtBQUNmLGFBQU8sSUFBSXlKLDhDQUFKLENBQWMsSUFBZCxFQUFvQjtBQUFDekosY0FBTSxFQUFFQTtBQUFULE9BQXBCLEVBQXNDOFUsUUFBdEMsQ0FBK0MxUCxHQUEvQyxDQUFQO0FBQ0g7QUFwRkw7QUFBQTtBQUFBLDRCQXNGWUEsR0F0RlosRUFzRmlCbEssS0F0RmpCLEVBc0Z3QjhFLE1BdEZ4QixFQXNGZ0M7QUFDeEIsYUFBTyxJQUFJeUosOENBQUosQ0FBYyxJQUFkLEVBQW9CO0FBQUN6SixjQUFNLEVBQUVBO0FBQVQsT0FBcEIsRUFBc0NuQyxNQUF0QyxDQUE2Q3VILEdBQTdDLEVBQWtEbEssS0FBbEQsQ0FBUDtBQUNIO0FBeEZMO0FBQUE7QUFBQSxtQ0EwRm1CO0FBQ1gsVUFBSTdCLElBQUksR0FBRyxLQUFLc3ZCLEtBQWhCOztBQUVBLFVBQUkvb0IsK0NBQUEsQ0FBZXZHLElBQUksQ0FBQ2xCLFFBQXBCLENBQUosRUFBbUM7QUFDL0IsZUFBT2tCLElBQUksQ0FBQ2xCLFFBQVo7QUFDSDs7QUFFRCxVQUFJeUgsK0NBQUEsQ0FBZXZHLElBQUksQ0FBQzZ2QixVQUFwQixDQUFKLEVBQXFDO0FBQ2pDLFlBQUlod0IsR0FBRyxHQUFHd0MsUUFBUSxDQUFDeXRCLGNBQVQsQ0FBd0I5dkIsSUFBSSxDQUFDNnZCLFVBQTdCLENBQVY7O0FBRUEsWUFBSWh3QixHQUFHLElBQUksSUFBWCxFQUFpQjtBQUNiLGlCQUFPQSxHQUFHLENBQUNpQyxTQUFYO0FBQ0g7QUFDSjs7QUFFRCxhQUFPLEVBQVA7QUFDSDtBQTFHTDtBQUFBO0FBQUEsOEJBNEdjO0FBQ04sVUFBSWhELFFBQVEsR0FBRyxLQUFLaXhCLFlBQUwsRUFBZjtBQUVBLFdBQUtoeEIsVUFBTCxHQUFrQixJQUFJQyxnREFBSixDQUFhLElBQWIsRUFBbUJDLE1BQW5CLENBQTBCSCxRQUExQixFQUFvQyxLQUFLSSxVQUF6QyxDQUFsQjtBQUVBLFdBQUs4d0IsaUJBQUwsSUFBMEIsS0FBS0EsaUJBQUwsRUFBMUI7QUFFQSxhQUFPLEtBQUtqeEIsVUFBWjtBQUNIO0FBcEhMO0FBQUE7QUFBQSwyQkFzSFdrbEIsaUJBdEhYLEVBc0g4QjtBQUN0QixVQUFJQyxPQUFKOztBQUVBLFVBQUkzZCwrQ0FBQSxDQUFlMGQsaUJBQWYsQ0FBSixFQUF1QztBQUNuQ0MsZUFBTyxHQUFHN2hCLFFBQVEsQ0FBQzhoQixhQUFULENBQXVCRixpQkFBdkIsQ0FBVjtBQUNILE9BRkQsTUFHSztBQUNEQyxlQUFPLEdBQUdELGlCQUFWO0FBQ0g7O0FBRURDLGFBQU8sQ0FBQ2plLFdBQVIsQ0FBb0IsS0FBSy9HLFVBQXpCO0FBQ0g7QUFqSUw7QUFBQTtBQUFBLCtCQW1JZTtBQUNQMkIsd0RBQUEsQ0FBa0IsS0FBSzNCLFVBQXZCO0FBQ0g7QUFySUw7QUFBQTtBQUFBLGlDQXVJaUJpTCxLQXZJakIsRUF1SXdCO0FBQ2hCLFdBQUtnbEIsVUFBTCxDQUFnQjl1QixJQUFoQixDQUFxQjhKLEtBQXJCO0FBQ0FBLFdBQUssQ0FBQ3RMLFFBQU4sR0FBaUIsSUFBakI7QUFDSDtBQTFJTDtBQUFBO0FBQUEsaUNBNElpQnNMLEtBNUlqQixFQTRJd0I7QUFDaEIsVUFBSWhLLEtBQUssR0FBRyxLQUFLZ3ZCLFVBQUwsQ0FBZ0IvdUIsT0FBaEIsQ0FBd0IrSixLQUF4QixDQUFaOztBQUVBLFVBQUloSyxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2QsYUFBS2d2QixVQUFMLENBQWdCM3VCLE1BQWhCLENBQXVCTCxLQUF2QixFQUE4QixDQUE5QjtBQUNBZ0ssYUFBSyxDQUFDdEwsUUFBTixHQUFpQixJQUFqQjtBQUNIO0FBQ0o7QUFuSkw7QUFBQTtBQUFBLCtCQXFKZTtBQUNQLFdBQUtveEIsUUFBTDtBQUVBLFdBQUtaLFNBQUwsQ0FBZWx3QixPQUFmOztBQUVBLFVBQUcsS0FBS0osVUFBTCxJQUFtQixJQUF0QixFQUE0QjtBQUN4QixhQUFLQSxVQUFMLENBQWdCSSxPQUFoQjtBQUNIOztBQUVELFdBQUtpbEIsU0FBTCxJQUFrQixLQUFLQSxTQUFMLEVBQWxCOztBQUVBLFVBQUcsS0FBS3ZsQixRQUFMLElBQWlCLElBQXBCLEVBQTBCO0FBQ3RCLGFBQUtBLFFBQUwsQ0FBY3F4QixZQUFkLENBQTJCLElBQTNCO0FBQ0g7QUFDSjtBQW5LTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQyxvQkFBVCxDQUE4Qm53QixJQUE5QixFQUFvQztBQUN2QyxPQUFLdWYsT0FBTCxHQUFlLElBQWY7QUFDQSxPQUFLOEMsT0FBTCxHQUFlLElBQWY7QUFDQSxPQUFLWCxTQUFMLEdBQWlCLENBQWpCLENBSHVDLENBSXZDOztBQUNBLE9BQUtZLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxPQUFLbGdCLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxPQUFLa3RCLEtBQUwsR0FBYS9vQiw0Q0FBQSxDQUFZLEtBQUtwRixVQUFqQixFQUE2Qm5CLElBQTdCLENBQWI7QUFDQW9CLG9EQUFRLENBQUNxdUIsY0FBVCxDQUF3QixJQUF4QixFQUE4QixLQUFLSCxLQUFuQztBQUNIO0FBRU0sSUFBTXZ0QixTQUFiO0FBQUE7QUFBQTtBQUFBLHdCQUNlO0FBQ1AsYUFBTyxLQUFLWixVQUFMLENBQWdCMUMsR0FBdkI7QUFDSDtBQUhMO0FBQUE7QUFBQSx3QkFLcUI7QUFDYixhQUFPLEtBQUswQyxVQUFMLENBQWdCM0MsU0FBdkI7QUFDSDtBQVBMO0FBQUE7QUFBQSx3QkFTaUI7QUFDVCxhQUFPLEtBQUsrZ0IsT0FBWjtBQUNIO0FBWEw7QUFBQTtBQUFBLHdCQWFvQjtBQUNaLGFBQU8sS0FBS0EsT0FBTCxDQUFhNlEsU0FBcEI7QUFDSDtBQWZMO0FBQUE7QUFBQSx3QkFpQm1CO0FBQ1gsYUFBTyxLQUFLL04sT0FBTCxDQUFhamQsSUFBYixDQUFrQnZGLEdBQXpCO0FBQ0g7QUFuQkw7QUFBQTtBQUFBLHdCQXFCbUI7QUFDWCxhQUFPLEtBQUt3aUIsT0FBTCxDQUFhMUMsUUFBYixDQUFzQlYsT0FBN0I7QUFDSDtBQXZCTDtBQUFBO0FBQUEsd0JBeUJxQjtBQUNiLGFBQU8sS0FBS29ELE9BQUwsQ0FBYWpkLElBQWIsQ0FBa0J1YSxRQUFsQixDQUEyQnBoQixTQUFsQztBQUNIO0FBM0JMOztBQTZCSSxxQkFBWXlCLElBQVosRUFBa0I7QUFBQTs7QUFDZG13Qix3QkFBb0IsQ0FBQ3Z2QixJQUFyQixDQUEwQixJQUExQixFQUFnQ1osSUFBaEM7QUFDSCxHQS9CTCxDQWlDSTs7O0FBakNKO0FBQUE7QUFBQSwrQkFrQ2U7QUFDUCxhQUFPLEtBQUtxd0IsU0FBTCxJQUFrQixLQUFLQSxTQUFMLENBQWUsS0FBS2hPLE9BQUwsQ0FBYWpkLElBQTVCLEVBQWtDLEtBQUtpZCxPQUF2QyxDQUF6QjtBQUNIO0FBcENMO0FBQUE7QUFBQSw0QkFzQ1k7QUFDSixhQUFPLEtBQUtpTyxNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZLEtBQUsvc0IsTUFBakIsQ0FBdEI7QUFDSCxLQXhDTCxDQTBDSTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQS9DSjtBQUFBO0FBQUEsZ0NBZ0RnQjtBQUNSLFdBQUtndEIsU0FBTCxJQUFrQixLQUFLQSxTQUFMLEVBQWxCOztBQUVBLFVBQUksS0FBS2hzQixRQUFMLElBQWlCLElBQXJCLEVBQTJCO0FBQ3ZCLGFBQUtrZixPQUFMLENBQWEsS0FBS2xmLFFBQUwsQ0FBYzFDLEtBQTNCLEVBQWtDLEtBQUswQyxRQUFMLENBQWNrVyxRQUFoRDtBQUNIO0FBQ0osS0F0REwsQ0F3REk7O0FBeERKO0FBQUE7QUFBQSw0QkF5RFkzVyxRQXpEWixFQXlEc0IyVyxRQXpEdEIsRUF5RGdDO0FBQ3hCLFdBQUsrVixRQUFMLElBQWlCLEtBQUtBLFFBQUwsQ0FBYzFzQixRQUFkLEVBQXdCMlcsUUFBeEIsQ0FBakI7QUFDSDtBQTNETDtBQUFBO0FBQUEsK0JBNkRlO0FBQ1AsV0FBSzJKLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxFQUFsQjtBQUNIO0FBL0RMO0FBQUE7QUFBQSxzQ0FpRXNCaGYsSUFqRXRCLEVBaUU0QjNHLEdBakU1QixFQWlFaUNELFNBakVqQyxFQWlFNEM7QUFDcEMsVUFBRyxDQUFDQSxTQUFKLEVBQWM7QUFDVkEsaUJBQVMsR0FBRyxLQUFLaXlCLFVBQWpCO0FBQ0g7O0FBRUQsVUFBSWhyQixNQUFNLEdBQUdMLElBQUksQ0FBQ3VhLFFBQUwsQ0FBY1MsVUFBZCxDQUF5QjVlLE1BQXpCLENBQWdDLFVBQUFnRixJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDa3FCLElBQUwsS0FBY2p5QixHQUFkLElBQXFCK0gsSUFBSSxDQUFDaXFCLFVBQUwsS0FBb0JqeUIsU0FBN0M7QUFBQSxPQUFwQyxDQUFiO0FBRUEsYUFBT2lILE1BQU0sQ0FBQzRCLE1BQVAsR0FBZ0I1QixNQUFNLENBQUMsQ0FBRCxDQUF0QixHQUE0QixJQUFuQztBQUNIO0FBekVMO0FBQUE7QUFBQSxtQ0EyRW1CaEgsR0EzRW5CLEVBMkV3QkQsU0EzRXhCLEVBMkVtQztBQUMzQixVQUFJNEcsSUFBSSxHQUFHLEtBQUtpZCxPQUFMLENBQWFqZCxJQUF4QjtBQUNBLGFBQU8sS0FBS3VyQixpQkFBTCxDQUF1QnZyQixJQUF2QixFQUE2QjNHLEdBQTdCLEVBQWtDRCxTQUFsQyxDQUFQO0FBQ0g7QUE5RUw7QUFBQTtBQUFBLHFDQWdGcUJDLEdBaEZyQixFQWdGMEJELFNBaEYxQixFQWdGcUM7QUFDN0IsVUFBSTRHLElBQUksR0FBRyxLQUFLaWQsT0FBTCxDQUFhamQsSUFBYixDQUFrQmUsVUFBN0I7QUFDQSxhQUFPLEtBQUt3cUIsaUJBQUwsQ0FBdUJ2ckIsSUFBdkIsRUFBNkIzRyxHQUE3QixFQUFrQ0QsU0FBbEMsQ0FBUDtBQUNIO0FBbkZMO0FBQUE7QUFBQSxxQ0FxRnFCO0FBQ2IsVUFBSSxLQUFLdUIsUUFBTCxDQUFjb0csVUFBZCxJQUE0QixJQUFoQyxFQUFzQztBQUNsQyxZQUFJLEtBQUsvRCxZQUFMLElBQXFCLElBQXpCLEVBQStCO0FBQzNCLGdCQUFNLElBQUk5QixLQUFKLENBQVUsc0NBQVYsQ0FBTjtBQUNIOztBQUNETywyREFBQSxDQUFtQixLQUFLZCxRQUF4QixFQUFrQyxLQUFLcUMsWUFBdkM7QUFDSDtBQUNKO0FBNUZMO0FBQUE7QUFBQSxxQ0E4RnFCO0FBQ2IsVUFBSSxLQUFLckMsUUFBTCxDQUFjb0csVUFBZCxJQUE0QixJQUFoQyxFQUFzQztBQUNsQyxZQUFJLEtBQUsvRCxZQUFMLElBQXFCLElBQXpCLEVBQStCO0FBQzNCLGdCQUFNLElBQUk5QixLQUFKLENBQVUsc0NBQVYsQ0FBTjtBQUNIOztBQUNETywyREFBQSxDQUFtQixLQUFLdUIsWUFBeEIsRUFBc0MsS0FBS3JDLFFBQTNDO0FBQ0g7QUFDSjtBQXJHTDtBQUFBO0FBQUEsbUNBdUdtQjtBQUNYYyxtREFBQSxDQUFhLEtBQUtkLFFBQWxCLEVBQTRCZ0IsaURBQTVCO0FBQ0g7QUF6R0w7QUFBQTtBQUFBLG1DQTJHbUI7QUFDWEYsc0RBQUEsQ0FBZ0IsS0FBS2QsUUFBckIsRUFBK0JnQixpREFBL0I7QUFDSDtBQTdHTDtBQUFBO0FBQUEsMEJBK0dVZ0wsR0EvR1YsRUErR2VwRixNQS9HZixFQStHdUI7QUFDZkEsWUFBTSxHQUFHSiw0Q0FBQSxDQUFZLEtBQUtoQyxRQUFMLENBQWNvQyxNQUExQixFQUFrQ0EsTUFBbEMsQ0FBVDtBQUNBLGFBQU8sS0FBS3BELE1BQUwsQ0FBWStDLEtBQVosQ0FBa0J5RixHQUFsQixFQUF1QnBGLE1BQXZCLENBQVA7QUFDSDtBQWxITDtBQUFBO0FBQUEsNEJBb0hZb0YsR0FwSFosRUFvSGlCbEssS0FwSGpCLEVBb0h3QjhFLE1BcEh4QixFQW9IZ0M7QUFDeEJBLFlBQU0sR0FBR0osNENBQUEsQ0FBWSxLQUFLaEMsUUFBTCxDQUFjb0MsTUFBMUIsRUFBa0NBLE1BQWxDLENBQVQ7QUFDQSxhQUFPLEtBQUtwRCxNQUFMLENBQVlxYixPQUFaLENBQW9CN1MsR0FBcEIsRUFBeUJsSyxLQUF6QixDQUFQO0FBQ0g7QUF2SEw7QUFBQTtBQUFBLDRCQXlIWS9DLFFBekhaLEVBeUhzQjZILE1Bekh0QixFQXlIOEI7QUFDdEIsYUFBTyxJQUFJM0gsZ0RBQUosQ0FBYSxLQUFLdUUsTUFBbEIsRUFBMEJvRCxNQUExQixFQUFrQzFILE1BQWxDLENBQXlDSCxRQUF6QyxDQUFQO0FBQ0g7QUEzSEw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSTh4QixXQUFXLEdBQUcscUJBQWxCLEMsQ0FFQTs7QUFDQSxJQUFJQyxjQUFjLEdBQUksWUFBWTtBQUM5QixTQUFPLFNBQVN6eEIsU0FBVCxDQUFtQjRCLFFBQW5CLEVBQTZCO0FBQ2hDa3VCLG1FQUFvQixDQUFDdHVCLElBQXJCLENBQTBCLElBQTFCLEVBQWdDSSxRQUFoQztBQUNILEdBRkQ7QUFHSCxDQUpvQixFQUFyQjs7QUFLQTZ2QixjQUFjLENBQUMzdkIsU0FBZixHQUEyQjlCLG9EQUFTLENBQUM4QixTQUFyQzs7QUFFQSxJQUFJNHZCLGNBQWMsR0FBSSxZQUFZO0FBQzlCLFNBQU8sU0FBUy91QixTQUFULENBQW1CZixRQUFuQixFQUE2QjtBQUNoQ212QixtRUFBb0IsQ0FBQ3Z2QixJQUFyQixDQUEwQixJQUExQixFQUFnQ0ksUUFBaEM7QUFDSCxHQUZEO0FBR0gsQ0FKb0IsRUFBckI7O0FBS0E4dkIsY0FBYyxDQUFDNXZCLFNBQWYsR0FBMkJhLG9EQUFTLENBQUNiLFNBQXJDOztBQUVBLElBQUk2dkIsV0FBVyxHQUFJLFlBQVk7QUFDM0IsU0FBTyxTQUFTQyxNQUFULENBQWdCaHdCLFFBQWhCLEVBQTBCO0FBQzdCaXdCLDZEQUFpQixDQUFDcndCLElBQWxCLENBQXVCLElBQXZCLEVBQTZCSSxRQUE3QjtBQUNILEdBRkQ7QUFHSCxDQUppQixFQUFsQjs7QUFLQSt2QixXQUFXLENBQUM3dkIsU0FBWixHQUF3Qjh2Qiw4Q0FBTSxDQUFDOXZCLFNBQS9COztBQUVBLElBQUlnd0IsWUFBWSxHQUFJLFlBQVk7QUFDNUIsU0FBTyxTQUFTdkssT0FBVCxDQUFpQjNsQixRQUFqQixFQUEyQjtBQUM5Qm13QiwrREFBa0IsQ0FBQ3Z3QixJQUFuQixDQUF3QixJQUF4QixFQUE4QkksUUFBOUI7QUFDSCxHQUZEO0FBR0gsQ0FKa0IsRUFBbkI7O0FBS0Frd0IsWUFBWSxDQUFDaHdCLFNBQWIsR0FBeUJ5bEIsZ0RBQU8sQ0FBQ3psQixTQUFqQyxDLENBQ0E7QUFFQTs7QUFDTyxJQUFNa3dCLE9BQWI7QUFDSSxxQkFBYztBQUFBO0FBRWI7O0FBSEw7QUFBQTtBQUFBLDJCQUtXQyxNQUxYLEVBS21CMXlCLElBTG5CLEVBS3lCO0FBQ2pCLFVBQUlpeUIsV0FBVyxDQUFDamlCLElBQVosQ0FBaUJoUSxJQUFqQixDQUFKLEVBQTRCO0FBQ3hCLFlBQUl1dUIsT0FBTyxHQUFHM21CLGdEQUFBLENBQWdCNUgsSUFBSSxDQUFDLENBQUQsQ0FBcEIsQ0FBZDs7QUFFQSxZQUFJQSxJQUFJLENBQUMwSSxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDakI2bEIsaUJBQU8sSUFBSXZ1QixJQUFJLENBQUNzakIsTUFBTCxDQUFZLENBQVosQ0FBWDtBQUNIOztBQUVELGdCQUFRb1AsTUFBUjtBQUNJLGVBQUtDLDRDQUFLLENBQUMveUIsU0FBWDtBQUNJMnVCLG1CQUFPLElBQUksV0FBWDtBQUNBOztBQUNKLGVBQUtvRSw0Q0FBSyxDQUFDaHdCLFNBQVg7QUFDSTRyQixtQkFBTyxJQUFJLFdBQVg7QUFDQTs7QUFDSixlQUFLb0UsNENBQUssQ0FBQzl2QixNQUFYO0FBQ0kwckIsbUJBQU8sSUFBSSxRQUFYO0FBQ0E7O0FBQ0osZUFBS29FLDRDQUFLLENBQUM1dkIsT0FBWDtBQUNJd3JCLG1CQUFPLElBQUksU0FBWDtBQUNBO0FBWlI7O0FBZUEsZUFBT0EsT0FBUDtBQUNILE9BdkJELE1BdUJPO0FBQ0gsY0FBTSxJQUFJNXNCLEtBQUosQ0FBVTNCLElBQUksR0FBRyxxQkFBakIsQ0FBTjtBQUNIO0FBQ0o7QUFoQ0w7QUFBQTtBQUFBLHlCQWtDUzB5QixNQWxDVCxFQWtDaUIxeUIsSUFsQ2pCLEVBa0N1Qm1tQixNQWxDdkIsRUFrQytCOWpCLFFBbEMvQixFQWtDeUM7QUFDakMsVUFBSXl0QixXQUFKO0FBQUEsVUFBaUI4QyxlQUFlLEdBQUcsS0FBS0MsTUFBTCxDQUFZSCxNQUFaLEVBQW9CMXlCLElBQXBCLENBQW5DO0FBQUEsVUFDSTh5QixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFZO0FBQ3RCLFlBQUlsckIsaURBQUEsQ0FBaUJrb0IsV0FBVyxTQUE1QixDQUFKLEVBQXlDO0FBQ3JDQSxxQkFBVyxTQUFYLENBQWtCN3RCLElBQWxCLENBQXVCLElBQXZCO0FBQ0gsU0FIcUIsQ0FJdEI7OztBQUNBLFlBQUkyRixpREFBQSxDQUFpQnVlLE1BQU0sQ0FBQzRNLFNBQXhCLENBQUosRUFBd0M7QUFDcEM1TSxnQkFBTSxDQUFDNE0sU0FBUCxDQUFpQjl3QixJQUFqQixDQUFzQixJQUF0QixFQUE0QnJCLDZDQUE1QjtBQUNIO0FBQ0osT0FUTDs7QUFXQWt2QixpQkFBVyxHQUFHLElBQUlrRCxRQUFKLENBQWEsYUFBYixFQUE0QixrQ0FBa0NKLGVBQWxDLEdBQW9ELDhCQUFoRixFQUFnSEUsV0FBaEgsQ0FBZCxDQVppQyxDQWNqQzs7QUFDQSxVQUFJbHJCLGlEQUFBLENBQWlCdWUsTUFBTSxXQUF2QixDQUFKLEVBQXNDO0FBQ2xDdmUsc0RBQUEsQ0FBY2tvQixXQUFkLEVBQTJCM0osTUFBTSxXQUFqQztBQUNILE9BakJnQyxDQW1CakM7OztBQUNBLFdBQUssSUFBSXJtQixHQUFULElBQWdCcW1CLE1BQWhCLEVBQXdCO0FBQ3BCLFlBQUlBLE1BQU0sQ0FBQ3RNLGNBQVAsQ0FBc0IvWixHQUF0QixLQUE4QkEsR0FBRyxLQUFLLFNBQXRDLElBQW1EQSxHQUFHLEtBQUssV0FBL0QsRUFBNEU7QUFDeEVnd0IscUJBQVcsQ0FBQ3Z0QixTQUFaLENBQXNCekMsR0FBdEIsSUFBNkJxbUIsTUFBTSxDQUFDcm1CLEdBQUQsQ0FBbkM7QUFDSDtBQUNKLE9BeEJnQyxDQTBCakM7OztBQUNBdUMsY0FBUSxDQUFDdkMsR0FBVCxHQUFlRSxJQUFmO0FBQ0E4dkIsaUJBQVcsQ0FBQ3Z0QixTQUFaLENBQXNCQyxVQUF0QixHQUFtQ0gsUUFBbkM7QUFFQSxhQUFPeXRCLFdBQVA7QUFDSDtBQWpFTDtBQUFBO0FBQUEsa0NBbUVrQjl2QixJQW5FbEIsRUFtRXdCbW1CLE1BbkV4QixFQW1FZ0M5akIsUUFuRWhDLEVBbUUwQztBQUNsQzhqQixZQUFNLEdBQUd2ZSw0Q0FBQSxDQUFZO0FBQ2pCLG1CQUFTc3FCO0FBRFEsT0FBWixFQUVOL0wsTUFGTSxDQUFUO0FBR0EsYUFBTyxLQUFLOE0sSUFBTCxDQUFVTiw0Q0FBSyxDQUFDL3lCLFNBQWhCLEVBQTJCSSxJQUEzQixFQUFpQ21tQixNQUFqQyxFQUF5QzlqQixRQUF6QyxDQUFQO0FBQ0g7QUF4RUw7QUFBQTtBQUFBLGtDQTBFa0JyQyxJQTFFbEIsRUEwRXdCbW1CLE1BMUV4QixFQTBFZ0M5akIsUUExRWhDLEVBMEUwQztBQUNsQzhqQixZQUFNLEdBQUd2ZSw0Q0FBQSxDQUFZO0FBQ2pCLG1CQUFTdXFCO0FBRFEsT0FBWixFQUVOaE0sTUFGTSxDQUFUO0FBR0EsYUFBTyxLQUFLOE0sSUFBTCxDQUFVTiw0Q0FBSyxDQUFDaHdCLFNBQWhCLEVBQTJCM0MsSUFBM0IsRUFBaUNtbUIsTUFBakMsRUFBeUM5akIsUUFBekMsQ0FBUDtBQUNIO0FBL0VMO0FBQUE7QUFBQSwrQkFpRmVyQyxJQWpGZixFQWlGcUJtbUIsTUFqRnJCLEVBaUY2QjlqQixRQWpGN0IsRUFpRnVDO0FBQy9COGpCLFlBQU0sR0FBR3ZlLDRDQUFBLENBQVk7QUFDakIsbUJBQVN3cUI7QUFEUSxPQUFaLEVBRU5qTSxNQUZNLENBQVQ7QUFHQSxhQUFPLEtBQUs4TSxJQUFMLENBQVVOLDRDQUFLLENBQUM5dkIsTUFBaEIsRUFBd0I3QyxJQUF4QixFQUE4Qm1tQixNQUE5QixFQUFzQzlqQixRQUF0QyxDQUFQO0FBQ0g7QUF0Rkw7QUFBQTtBQUFBLGdDQXdGZ0JyQyxJQXhGaEIsRUF3RnNCbW1CLE1BeEZ0QixFQXdGOEI5akIsUUF4RjlCLEVBd0Z3QztBQUNoQzhqQixZQUFNLEdBQUd2ZSw0Q0FBQSxDQUFZO0FBQ2pCLG1CQUFTMnFCO0FBRFEsT0FBWixFQUVOcE0sTUFGTSxDQUFUO0FBR0EsYUFBTyxLQUFLOE0sSUFBTCxDQUFVTiw0Q0FBSyxDQUFDNXZCLE9BQWhCLEVBQXlCL0MsSUFBekIsRUFBK0JtbUIsTUFBL0IsRUFBdUM5akIsUUFBdkMsQ0FBUDtBQUNIO0FBN0ZMOztBQUFBO0FBQUE7QUFnR08sSUFBSTZ3QixPQUFPLEdBQUcsSUFBSVQsT0FBSixFQUFkLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SVA7QUFDQTtBQUVPLFNBQVNILGlCQUFULENBQTJCanhCLElBQTNCLEVBQWlDO0FBQ3BDLE9BQUtzdkIsS0FBTCxHQUFhL29CLDRDQUFBLENBQVksS0FBS3BGLFVBQWpCLEVBQTZCbkIsSUFBN0IsQ0FBYjtBQUNBb0Isb0RBQVEsQ0FBQ3F1QixjQUFULENBQXdCLElBQXhCLEVBQThCLEtBQUtILEtBQW5DO0FBQ0g7QUFFTSxJQUFNMEIsTUFBYixHQUNJLGdCQUFZaHhCLElBQVosRUFBa0I7QUFBQTs7QUFDZGl4QixtQkFBaUIsQ0FBQ3J3QixJQUFsQixDQUF1QixJQUF2QixFQUE2QlosSUFBN0I7QUFDSCxDQUhMLEM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBRUEsSUFBSTh4QixVQUFVLEdBQUcscUJBQWpCO0FBQ0EsSUFBSUMsZUFBZSxHQUFHLFVBQXRCOztJQUVNQyxrQjtBQUNGLGdDQUFjO0FBQUE7O0FBQ1YsU0FBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCLEVBQXpCO0FBQ0g7Ozs7c0NBRWlCYixNLEVBQVE7QUFDdEIsVUFBSSxDQUFDLEtBQUtZLGNBQUwsQ0FBb0JaLE1BQXBCLENBQUwsRUFBa0M7QUFDOUIsYUFBS1ksY0FBTCxDQUFvQlosTUFBcEIsSUFBOEIsRUFBOUI7QUFDSDs7QUFDRCxhQUFPLEtBQUtZLGNBQUwsQ0FBb0JaLE1BQXBCLENBQVA7QUFDSDs7O3lDQUVvQkEsTSxFQUFRO0FBQ3pCLFVBQUksQ0FBQyxLQUFLYSxpQkFBTCxDQUF1QmIsTUFBdkIsQ0FBTCxFQUFxQztBQUNqQyxhQUFLYSxpQkFBTCxDQUF1QmIsTUFBdkIsSUFBaUMsRUFBakM7QUFDSDs7QUFDRCxhQUFPLEtBQUthLGlCQUFMLENBQXVCYixNQUF2QixDQUFQO0FBQ0g7Ozs7S0FHTDtBQUNBOzs7QUFDTyxJQUFNekssUUFBYjtBQUNJLHNCQUFjO0FBQUE7O0FBQ1YsU0FBS3VMLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0g7O0FBSkw7QUFBQTtBQUFBLDBDQU0wQjV6QixTQU4xQixFQU1xQztBQUM3QixVQUFJK0gsK0NBQUEsQ0FBZS9ILFNBQWYsQ0FBSixFQUErQjtBQUMzQkEsaUJBQVMsR0FBRytILGdEQUFBLENBQWdCL0gsU0FBaEIsQ0FBWjs7QUFFQSxZQUFJLENBQUMsS0FBSzJ6QixXQUFMLENBQWlCM3pCLFNBQWpCLENBQUwsRUFBa0M7QUFDOUIsZUFBSzJ6QixXQUFMLENBQWlCM3pCLFNBQWpCLElBQThCLElBQUl3ekIsa0JBQUosRUFBOUI7QUFDSDs7QUFFRCxlQUFPLEtBQUtHLFdBQUwsQ0FBaUIzekIsU0FBakIsQ0FBUDtBQUNILE9BUkQsTUFTSztBQUNELGNBQU0sSUFBSThCLEtBQUosQ0FBVSx1QkFBVixDQUFOO0FBQ0g7QUFDSjtBQW5CTDtBQUFBO0FBQUEsaUNBcUJpQjdCLEdBckJqQixFQXFCc0I7QUFDZCxVQUFJLENBQUNxekIsVUFBVSxDQUFDbmpCLElBQVgsQ0FBZ0JsUSxHQUFoQixDQUFMLEVBQTJCO0FBQ3ZCLGNBQU0sSUFBSTZCLEtBQUosQ0FBVTdCLEdBQUcsR0FBRyxzQkFBaEIsQ0FBTjtBQUNIO0FBQ0o7QUF6Qkw7QUFBQTtBQUFBLDZCQTJCYTR5QixNQTNCYixFQTJCcUI1eUIsR0EzQnJCLEVBMkIwQmd3QixXQTNCMUIsRUEyQnVDO0FBQy9CLFdBQUs0RCxZQUFMLENBQWtCNXpCLEdBQWxCO0FBRUEsVUFBSUQsU0FBUyxHQUFHaXdCLFdBQVcsQ0FBQ3Z0QixTQUFaLENBQXNCQyxVQUF0QixDQUFpQzNDLFNBQWpEO0FBQ0EsVUFBSTh6QixrQkFBa0IsR0FBRyxLQUFLQyxxQkFBTCxDQUEyQi96QixTQUEzQixDQUF6QjtBQUNBLFVBQUl5ekIsY0FBYyxHQUFHSyxrQkFBa0IsQ0FBQ0UsaUJBQW5CLENBQXFDbkIsTUFBckMsQ0FBckI7O0FBRUEsVUFBSTd5QixTQUFTLEtBQUt1ekIsZUFBZCxJQUFpQ1YsTUFBTSxLQUFLQyw0Q0FBSyxDQUFDaHdCLFNBQXRELEVBQWlFO0FBQzdEN0MsV0FBRyxHQUFHOEgsNkNBQUEsQ0FBYSxNQUFiLEVBQXFCQSxnREFBQSxDQUFnQjlILEdBQUcsQ0FBQyxDQUFELENBQW5CLEtBQTJCQSxHQUFHLENBQUM0SSxNQUFKLEdBQWEsQ0FBYixHQUFpQjVJLEdBQUcsQ0FBQ3dqQixNQUFKLENBQVcsQ0FBWCxDQUFqQixHQUFpQyxFQUE1RCxDQUFyQixDQUFOO0FBQ0g7O0FBRUQsVUFBSWdRLGNBQWMsQ0FBQ3h6QixHQUFELENBQWxCLEVBQXlCO0FBQ3JCLGNBQU0sSUFBSTZCLEtBQUosQ0FBVTdCLEdBQUcsR0FBRyw0QkFBTixHQUFxQ0QsU0FBL0MsQ0FBTjtBQUNIOztBQUVEeXpCLG9CQUFjLENBQUN4ekIsR0FBRCxDQUFkLEdBQXNCZ3dCLFdBQXRCO0FBQ0g7QUEzQ0w7QUFBQTtBQUFBLHNDQTZDc0Jod0IsR0E3Q3RCLEVBNkMyQmd3QixXQTdDM0IsRUE2Q3dDO0FBQ2hDLFdBQUtnRSxRQUFMLENBQWNuQiw0Q0FBSyxDQUFDL3lCLFNBQXBCLEVBQStCRSxHQUEvQixFQUFvQ2d3QixXQUFwQztBQUNIO0FBL0NMO0FBQUE7QUFBQSxzQ0FpRHNCaHdCLEdBakR0QixFQWlEMkJnd0IsV0FqRDNCLEVBaUR3QztBQUNoQyxXQUFLZ0UsUUFBTCxDQUFjbkIsNENBQUssQ0FBQ2h3QixTQUFwQixFQUErQjdDLEdBQS9CLEVBQW9DZ3dCLFdBQXBDO0FBQ0g7QUFuREw7QUFBQTtBQUFBLG1DQXFEbUJod0IsR0FyRG5CLEVBcUR3Qmd3QixXQXJEeEIsRUFxRHFDO0FBQzdCLFdBQUtnRSxRQUFMLENBQWNuQiw0Q0FBSyxDQUFDOXZCLE1BQXBCLEVBQTRCL0MsR0FBNUIsRUFBaUNnd0IsV0FBakM7QUFDSDtBQXZETDtBQUFBO0FBQUEsb0NBeURvQmh3QixHQXpEcEIsRUF5RHlCZ3dCLFdBekR6QixFQXlEc0M7QUFDOUIsV0FBS2dFLFFBQUwsQ0FBY25CLDRDQUFLLENBQUM1dkIsT0FBcEIsRUFBNkJqRCxHQUE3QixFQUFrQ2d3QixXQUFsQztBQUNIO0FBM0RMO0FBQUE7QUFBQSx3QkE2RFE0QyxNQTdEUixFQTZEZ0I1eUIsR0E3RGhCLEVBNkRxQkQsU0E3RHJCLEVBNkRnQztBQUN4QixhQUFPLEtBQUs0SSxHQUFMLENBQVNpcUIsTUFBVCxFQUFpQjV5QixHQUFqQixFQUFzQkQsU0FBdEIsS0FBb0MsSUFBM0M7QUFDSDtBQS9ETDtBQUFBO0FBQUEsaUNBaUVpQkMsR0FqRWpCLEVBaUVzQkQsU0FqRXRCLEVBaUVpQztBQUN6QixhQUFPLEtBQUsySSxHQUFMLENBQVNtcUIsNENBQUssQ0FBQy95QixTQUFmLEVBQTBCRSxHQUExQixFQUErQkQsU0FBL0IsQ0FBUDtBQUNIO0FBbkVMO0FBQUE7QUFBQSxpQ0FxRWlCQyxHQXJFakIsRUFxRXNCRCxTQXJFdEIsRUFxRWlDO0FBQ3pCLGFBQU8sS0FBSzJJLEdBQUwsQ0FBU21xQiw0Q0FBSyxDQUFDaHdCLFNBQWYsRUFBMEI3QyxHQUExQixFQUErQkQsU0FBL0IsQ0FBUDtBQUNIO0FBdkVMO0FBQUE7QUFBQSw4QkF5RWNDLEdBekVkLEVBeUVtQkQsU0F6RW5CLEVBeUU4QjtBQUN0QixhQUFPLEtBQUsySSxHQUFMLENBQVNtcUIsNENBQUssQ0FBQzl2QixNQUFmLEVBQXVCL0MsR0FBdkIsRUFBNEJELFNBQTVCLENBQVA7QUFDSDtBQTNFTDtBQUFBO0FBQUEsK0JBNkVlQyxHQTdFZixFQTZFb0JELFNBN0VwQixFQTZFK0I7QUFDdkIsYUFBTyxLQUFLMkksR0FBTCxDQUFTbXFCLDRDQUFLLENBQUM1dkIsT0FBZixFQUF3QmpELEdBQXhCLEVBQTZCRCxTQUE3QixDQUFQO0FBQ0g7QUEvRUw7QUFBQTtBQUFBLDJDQWlGMkI2eUIsTUFqRjNCLEVBaUZtQzV5QixHQWpGbkMsRUFpRndDO0FBQ2hDLFVBQUk2ekIsa0JBQWtCLEdBQUcsS0FBS0MscUJBQUwsQ0FBMkJSLGVBQTNCLENBQXpCO0FBQ0EsVUFBSUUsY0FBYyxHQUFHSyxrQkFBa0IsQ0FBQ0UsaUJBQW5CLENBQXFDbkIsTUFBckMsQ0FBckI7QUFDQSxhQUFPWSxjQUFjLENBQUN4ekIsR0FBRCxDQUFyQjtBQUNIO0FBckZMO0FBQUE7QUFBQSx3QkF1RlE0eUIsTUF2RlIsRUF1RmdCNXlCLEdBdkZoQixFQXVGcUJELFNBdkZyQixFQXVGZ0M7QUFDeEIsVUFBSTh6QixrQkFBa0IsR0FBRyxLQUFLQyxxQkFBTCxDQUEyQi96QixTQUEzQixDQUF6QjtBQUNBLFVBQUl5ekIsY0FBYyxHQUFHSyxrQkFBa0IsQ0FBQ0UsaUJBQW5CLENBQXFDbkIsTUFBckMsQ0FBckI7QUFDQSxhQUFPWSxjQUFjLENBQUN4ekIsR0FBRCxDQUFkLElBQXVCLEtBQUtpMEIsc0JBQUwsQ0FBNEJyQixNQUE1QixFQUFvQzV5QixHQUFwQyxDQUE5QjtBQUNIO0FBM0ZMO0FBQUE7QUFBQSxpQ0E2RmlCQSxHQTdGakIsRUE2RnNCRCxTQTdGdEIsRUE2RmlDO0FBQ3pCLGFBQU8sS0FBSzRJLEdBQUwsQ0FBU2txQiw0Q0FBSyxDQUFDL3lCLFNBQWYsRUFBMEJFLEdBQTFCLEVBQStCRCxTQUEvQixDQUFQO0FBQ0g7QUEvRkw7QUFBQTtBQUFBLGlDQWlHaUJDLEdBakdqQixFQWlHc0JELFNBakd0QixFQWlHaUM7QUFDekIsYUFBTyxLQUFLNEksR0FBTCxDQUFTa3FCLDRDQUFLLENBQUNod0IsU0FBZixFQUEwQjdDLEdBQTFCLEVBQStCRCxTQUEvQixDQUFQO0FBQ0g7QUFuR0w7QUFBQTtBQUFBLDhCQXFHY0MsR0FyR2QsRUFxR21CRCxTQXJHbkIsRUFxRzhCO0FBQ3RCLGFBQU8sS0FBSzRJLEdBQUwsQ0FBU2txQiw0Q0FBSyxDQUFDOXZCLE1BQWYsRUFBdUIvQyxHQUF2QixFQUE0QkQsU0FBNUIsQ0FBUDtBQUNIO0FBdkdMO0FBQUE7QUFBQSwrQkF5R2VDLEdBekdmLEVBeUdvQkQsU0F6R3BCLEVBeUcrQjtBQUN2QixhQUFPLEtBQUs0SSxHQUFMLENBQVNrcUIsNENBQUssQ0FBQzV2QixPQUFmLEVBQXdCakQsR0FBeEIsRUFBNkJELFNBQTdCLENBQVA7QUFDSDtBQTNHTDtBQUFBO0FBQUEsa0NBNkdrQjZ5QixNQTdHbEIsRUE2RzBCcE8sUUE3RzFCLEVBNkdvQztBQUM1QixVQUFJamYsU0FBSixFQUFlMnVCLElBQWY7O0FBRUEsY0FBUXRCLE1BQVI7QUFDSSxhQUFLQyw0Q0FBSyxDQUFDL3lCLFNBQVg7QUFDSW8wQixjQUFJLEdBQUcsV0FBUDtBQUNBM3VCLG1CQUFTLEdBQUc0dUIscURBQVo7QUFDQTs7QUFDSixhQUFLdEIsNENBQUssQ0FBQ2h3QixTQUFYO0FBQ0lxeEIsY0FBSSxHQUFHLFdBQVA7QUFDQTN1QixtQkFBUyxHQUFHNnVCLHFEQUFaO0FBQ0E7O0FBQ0osYUFBS3ZCLDRDQUFLLENBQUM1dkIsT0FBWDtBQUNJaXhCLGNBQUksR0FBRyxTQUFQO0FBQ0EzdUIsbUJBQVMsR0FBRzh1QixtREFBWjtBQUNBOztBQUNKLGFBQUt4Qiw0Q0FBSyxDQUFDOXZCLE1BQVg7QUFDSW14QixjQUFJLEdBQUcsUUFBUDtBQUNBM3VCLG1CQUFTLEdBQUcrdUIsa0RBQVo7QUFDQTtBQWhCUjs7QUFtQkEsVUFBSS91QixTQUFTLElBQUksQ0FBQ0EsU0FBUyxDQUFDaWYsUUFBRCxDQUEzQixFQUF1QztBQUNuQyxjQUFNLElBQUkzaUIsS0FBSixDQUFVaUcsNkNBQUEsQ0FBYSw2QkFBYixFQUE0Q29zQixJQUE1QyxDQUFWLENBQU47QUFDSDtBQUNKO0FBdElMO0FBQUE7QUFBQSx1Q0F3SXVCdEIsTUF4SXZCLEVBd0krQjJCLGdCQXhJL0IsRUF3SWlEeDBCLFNBeElqRCxFQXdJNEQ7QUFDcEQsVUFBSWl3QixXQUFKOztBQUVBLFVBQUlsb0IsK0NBQUEsQ0FBZXlzQixnQkFBZixDQUFKLEVBQXNDO0FBQ2xDdkUsbUJBQVcsR0FBRyxLQUFLcm5CLEdBQUwsQ0FBU2lxQixNQUFULEVBQWlCMkIsZ0JBQWpCLEVBQW1DeDBCLFNBQW5DLENBQWQ7O0FBRUEsWUFBSWl3QixXQUFXLElBQUksSUFBbkIsRUFBeUI7QUFDckIsZ0JBQU0sSUFBSW51QixLQUFKLENBQVVpRyw2Q0FBQSxDQUFhLHVDQUFiLEVBQXNEeXNCLGdCQUF0RCxFQUF3RXgwQixTQUF4RSxDQUFWLENBQU47QUFDSDtBQUNKLE9BTkQsTUFNTyxJQUFJK0gsaURBQUEsQ0FBaUJ5c0IsZ0JBQWpCLENBQUosRUFBd0M7QUFDM0N2RSxtQkFBVyxHQUFHdUUsZ0JBQWQ7QUFDSCxPQUZNLE1BRUE7QUFDSCxjQUFNLElBQUkxeUIsS0FBSixDQUFVLG1CQUFWLENBQU47QUFDSDs7QUFFRCxhQUFPbXVCLFdBQVA7QUFDSDtBQXhKTDtBQUFBO0FBQUEsMkJBMEpXNEMsTUExSlgsRUEwSm1CMkIsZ0JBMUpuQixFQTBKcUN4MEIsU0ExSnJDLEVBMEpnRDtBQUN4QyxVQUFJeTBCLEdBQUcsR0FBRyxLQUFLQyxrQkFBTCxDQUF3QjdCLE1BQXhCLEVBQWdDMkIsZ0JBQWhDLEVBQWtEeDBCLFNBQWxELENBQVY7QUFDQSxVQUFJeWtCLFFBQVEsR0FBRyxJQUFJZ1EsR0FBSixFQUFmO0FBRUEsV0FBS0UsYUFBTCxDQUFtQjlCLE1BQW5CLEVBQTJCcE8sUUFBM0I7QUFFQSxhQUFPQSxRQUFQO0FBQ0g7QUFqS0w7QUFBQTtBQUFBLG9DQW1Lb0JvTyxNQW5LcEIsRUFtSzRCMkIsZ0JBbks1QixFQW1LOEN4MEIsU0FuSzlDLEVBbUt5RDtBQUNqRCxVQUFJeWtCLFFBQUo7QUFBQSxVQUNJZ1EsR0FBRyxHQUFHLEtBQUtDLGtCQUFMLENBQXdCN0IsTUFBeEIsRUFBZ0MyQixnQkFBaEMsRUFBa0R4MEIsU0FBbEQsQ0FEVjtBQUFBLFVBRUlBLFNBQVMsR0FBR3kwQixHQUFHLENBQUMveEIsU0FBSixDQUFjQyxVQUFkLENBQXlCM0MsU0FGekM7QUFJQSxVQUFJOHpCLGtCQUFrQixHQUFHLEtBQUtDLHFCQUFMLENBQTJCL3pCLFNBQTNCLENBQXpCO0FBQUEsVUFDSW9oQixTQUFTLEdBQUcwUyxrQkFBa0IsQ0FBQ2Msb0JBQW5CLENBQXdDL0IsTUFBeEMsQ0FEaEI7QUFBQSxVQUVJNXJCLE1BQU0sR0FBR21hLFNBQVMsQ0FBQ3BlLE1BQVYsQ0FBaUIsVUFBVWdGLElBQVYsRUFBZ0I7QUFDdEMsZUFBT0EsSUFBSSxZQUFZeXNCLEdBQXZCO0FBQ0gsT0FGUSxDQUZiOztBQU1BLFVBQUl4dEIsTUFBTSxDQUFDNEIsTUFBWCxFQUFtQjtBQUNmNGIsZ0JBQVEsR0FBR3hkLE1BQU0sQ0FBQyxDQUFELENBQWpCO0FBQ0gsT0FGRCxNQUVPO0FBQ0h3ZCxnQkFBUSxHQUFHLElBQUlnUSxHQUFKLEVBQVg7QUFDQSxhQUFLRSxhQUFMLENBQW1COUIsTUFBbkIsRUFBMkJwTyxRQUEzQjtBQUNBckQsaUJBQVMsQ0FBQ3ZmLElBQVYsQ0FBZTRpQixRQUFmO0FBQ0g7O0FBRUQsYUFBT0EsUUFBUDtBQUNIO0FBdkxMO0FBQUE7QUFBQSxvQ0F5TG9CK1AsZ0JBekxwQixFQXlMc0N4MEIsU0F6THRDLEVBeUxpRDtBQUN6QyxhQUFPLEtBQUs2MEIsTUFBTCxDQUFZL0IsNENBQUssQ0FBQy95QixTQUFsQixFQUE2QnkwQixnQkFBN0IsRUFBK0N4MEIsU0FBL0MsQ0FBUDtBQUNIO0FBM0xMO0FBQUE7QUFBQSxvQ0E2TG9CdzBCLGdCQTdMcEIsRUE2THNDeDBCLFNBN0x0QyxFQTZMaUQ7QUFDekMsYUFBTyxLQUFLNjBCLE1BQUwsQ0FBWS9CLDRDQUFLLENBQUNod0IsU0FBbEIsRUFBNkIweEIsZ0JBQTdCLEVBQStDeDBCLFNBQS9DLENBQVA7QUFDSDtBQS9MTDtBQUFBO0FBQUEsaUNBaU1pQncwQixnQkFqTWpCLEVBaU1tQ3gwQixTQWpNbkMsRUFpTThDO0FBQ3RDLGFBQU8sS0FBSzgwQixlQUFMLENBQXFCaEMsNENBQUssQ0FBQzl2QixNQUEzQixFQUFtQ3d4QixnQkFBbkMsRUFBcUR4MEIsU0FBckQsQ0FBUDtBQUNIO0FBbk1MO0FBQUE7QUFBQSxrQ0FxTWtCdzBCLGdCQXJNbEIsRUFxTW9DeDBCLFNBck1wQyxFQXFNK0M7QUFDdkMsVUFBSW1vQixPQUFPLEdBQUcsS0FBS3VNLGtCQUFMLENBQXdCNUIsNENBQUssQ0FBQzV2QixPQUE5QixFQUF1Q3N4QixnQkFBdkMsRUFBeUR4MEIsU0FBekQsQ0FBZDs7QUFFQSxVQUFJbW9CLE9BQU8sQ0FBQ3psQixTQUFSLENBQWtCQyxVQUFsQixDQUE2Qm95QixTQUFqQyxFQUE0QztBQUN4QyxlQUFPLEtBQUtGLE1BQUwsQ0FBWS9CLDRDQUFLLENBQUM1dkIsT0FBbEIsQ0FBUDtBQUNIOztBQUVELGFBQU8sS0FBSzR4QixlQUFMLENBQXFCaEMsNENBQUssQ0FBQzV2QixPQUEzQixFQUFvQ2lsQixPQUFwQyxDQUFQO0FBQ0g7QUE3TUw7QUFBQTtBQUFBLG9DQStNb0Job0IsSUEvTXBCLEVBK00wQjtBQUNsQixVQUFJcWYsUUFBUSxHQUFHcmYsSUFBSSxDQUFDdU0sS0FBTCxDQUFXLEdBQVgsQ0FBZjtBQUVBLGFBQU87QUFDSHpNLFdBQUcsRUFBRXVmLFFBQVEsQ0FBQ3dWLEdBQVQsRUFERjtBQUVIQyxVQUFFLEVBQUV6VixRQUFRLENBQUMzVyxNQUFULEdBQWtCLENBQWxCLEdBQXNCMlcsUUFBUSxDQUFDelYsSUFBVCxDQUFjLEdBQWQsQ0FBdEIsR0FBMkMsRUFGNUM7QUFHSHlDLFdBQUcsRUFBRTtBQUhGLE9BQVA7QUFLSDtBQXZOTDtBQUFBO0FBQUEsa0NBeU5rQnJNLElBek5sQixFQXlOd0Jrb0IsS0F6TnhCLEVBeU4rQjtBQUN2QixVQUFJOWlCLElBQUksR0FBRyxJQUFYO0FBQUEsVUFBaUIwQixNQUFNLEdBQUcsS0FBS2l1QixlQUFMLENBQXFCLzBCLElBQXJCLENBQTFCOztBQUVBLFVBQUlrb0IsS0FBSixFQUFXO0FBQ1AsWUFBSXBoQixNQUFNLENBQUNndUIsRUFBWCxFQUFlO0FBQ1gsY0FBSTVNLEtBQUssQ0FBQ3JPLGNBQU4sQ0FBcUIvUyxNQUFNLENBQUNndUIsRUFBNUIsQ0FBSixFQUFxQztBQUNqQztBQUNBaHVCLGtCQUFNLENBQUNndUIsRUFBUCxHQUFZNU0sS0FBSyxDQUFDcGhCLE1BQU0sQ0FBQ2d1QixFQUFSLENBQWpCO0FBQ0g7QUFDSixTQUxELE1BS087QUFDSCxjQUFJNU0sS0FBSyxDQUFDck8sY0FBTixDQUFxQjdaLElBQXJCLENBQUosRUFBZ0M7QUFDNUIsZ0JBQUlrRCxLQUFLLEdBQUdnbEIsS0FBSyxDQUFDbG9CLElBQUQsQ0FBakI7O0FBRUEsZ0JBQUk0SCwrQ0FBQSxDQUFlMUUsS0FBZixDQUFKLEVBQTJCO0FBQ3ZCO0FBQ0E0RCxvQkFBTSxHQUFHMUIsSUFBSSxDQUFDMnZCLGVBQUwsQ0FBcUI3eEIsS0FBckIsQ0FBVDtBQUNILGFBSEQsTUFHTztBQUNIO0FBQ0E0RCxvQkFBTSxDQUFDdUYsR0FBUCxHQUFhbkosS0FBYjtBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQUVELGFBQU80RCxNQUFQO0FBQ0g7QUFsUEw7QUFBQTtBQUFBLHFDQW9QcUJxb0IsTUFwUHJCLEVBb1A2Qm52QixJQXBQN0IsRUFvUG1Da29CLEtBcFBuQyxFQW9QMENDLFNBcFAxQyxFQW9QcUQ7QUFDN0MsVUFBSXBYLFVBQVUsR0FBRyxLQUFLaWtCLGFBQUwsQ0FBbUJoMUIsSUFBbkIsRUFBeUJrb0IsS0FBekIsQ0FBakI7O0FBRUEsVUFBSW5YLFVBQVUsQ0FBQzFFLEdBQWYsRUFBb0I7QUFDaEIsZUFBTzBFLFVBQVUsQ0FBQzFFLEdBQWxCO0FBQ0g7O0FBRUQsYUFBTyxLQUFLOGlCLE1BQUwsRUFBYXBlLFVBQVUsQ0FBQ2pSLEdBQXhCLEVBQTZCaVIsVUFBVSxDQUFDK2pCLEVBQVgsSUFBaUIzTSxTQUE5QyxDQUFQO0FBQ0g7QUE1UEw7QUFBQTtBQUFBLG1DQThQbUJub0IsSUE5UG5CLEVBOFB5QmtvQixLQTlQekIsRUE4UGdDQyxTQTlQaEMsRUE4UDJDO0FBQ25DLGFBQU8sS0FBSzhNLGdCQUFMLENBQXNCLGNBQXRCLEVBQXNDajFCLElBQXRDLEVBQTRDa29CLEtBQTVDLEVBQW1EQyxTQUFuRCxDQUFQO0FBQ0g7QUFoUUw7QUFBQTtBQUFBLG1DQWtRbUJub0IsSUFsUW5CLEVBa1F5QmtvQixLQWxRekIsRUFrUWdDQyxTQWxRaEMsRUFrUTJDO0FBQ25DLGFBQU8sS0FBSzhNLGdCQUFMLENBQXNCLGNBQXRCLEVBQXNDajFCLElBQXRDLEVBQTRDa29CLEtBQTVDLEVBQW1EQyxTQUFuRCxDQUFQO0FBQ0g7QUFwUUw7QUFBQTtBQUFBLGlDQXNRaUJub0IsSUF0UWpCLEVBc1F1QmtvQixLQXRRdkIsRUFzUThCQyxTQXRROUIsRUFzUXlDO0FBQ2pDLGFBQU8sS0FBSzhNLGdCQUFMLENBQXNCLFlBQXRCLEVBQW9DajFCLElBQXBDLEVBQTBDa29CLEtBQTFDLEVBQWlEQyxTQUFqRCxDQUFQO0FBQ0g7QUF4UUw7QUFBQTtBQUFBLGdDQTBRZ0Jub0IsSUExUWhCLEVBMFFzQmtvQixLQTFRdEIsRUEwUTZCQyxTQTFRN0IsRUEwUXdDO0FBQ2hDLGFBQU8sS0FBSzhNLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DajFCLElBQW5DLEVBQXlDa29CLEtBQXpDLEVBQWdEQyxTQUFoRCxDQUFQO0FBQ0g7QUE1UUw7QUFBQTtBQUFBLG1DQThRbUI3RCxRQTlRbkIsRUE4UTZCamlCLFFBOVE3QixFQThRdUM2eUIsbUJBOVF2QyxFQThRNEQ7QUFDcEQsVUFBSTl2QixJQUFJLEdBQUcsSUFBWDtBQUFBLFVBQWlCK3ZCLGVBQWpCO0FBQUEsVUFBa0NDLGlCQUFpQixHQUFHLEtBQXREOztBQUVBLFVBQUlGLG1CQUFKLEVBQXlCO0FBQ3JCO0FBQ0FDLHVCQUFlLEdBQUd2dEIsNkNBQUEsQ0FBYSxTQUFiLEVBQXdCQSxnREFBQSxDQUFnQnZGLFFBQVEsQ0FBQ3hDLFNBQXpCLENBQXhCLEVBQTZEd0MsUUFBUSxDQUFDdkMsR0FBdEUsQ0FBbEI7QUFDQXMxQix5QkFBaUIsR0FBRyxLQUFLM0IsWUFBTCxDQUFrQmh5QixPQUFsQixDQUEwQjB6QixlQUExQixNQUErQyxDQUFDLENBQXBFO0FBRUEsYUFBSzFCLFlBQUwsQ0FBa0IveEIsSUFBbEIsQ0FBdUJ5ekIsZUFBdkI7O0FBRUEsWUFBSUMsaUJBQUosRUFBdUI7QUFDbkI7QUFDQSxjQUFJdGUsS0FBSyxHQUFHbFAsNkNBQUEsQ0FBYSxzQkFBYixFQUFxQyxLQUFLNnJCLFlBQUwsQ0FBa0I3cEIsSUFBbEIsQ0FBdUIsTUFBdkIsQ0FBckMsQ0FBWixDQUZtQixDQUduQjs7QUFDQSxlQUFLNnBCLFlBQUwsQ0FBa0IvcUIsTUFBbEIsR0FBMkIsQ0FBM0IsQ0FKbUIsQ0FLbkI7O0FBQ0EsZ0JBQU0sSUFBSS9HLEtBQUosQ0FBVW1WLEtBQVYsQ0FBTjtBQUNIO0FBQ0o7O0FBRUQsVUFBSXpVLFFBQVEsSUFBSXVGLCtDQUFBLENBQWV2RixRQUFRLENBQUNnekIsTUFBeEIsQ0FBaEIsRUFBaUQ7QUFDN0N6dEIsc0RBQUEsQ0FBY3ZGLFFBQVEsQ0FBQ2d6QixNQUF2QixFQUErQixVQUFVdHlCLE9BQVYsRUFBbUJqRCxHQUFuQixFQUF3QjtBQUNuRCxjQUFJOEgsK0NBQUEsQ0FBZTdFLE9BQWYsQ0FBSixFQUE2QjtBQUN6QkEsbUJBQU8sR0FBR3FDLElBQUksQ0FBQ2tqQixZQUFMLENBQWtCdmxCLE9BQWxCLEVBQTJCVixRQUFRLENBQUM2bEIsS0FBcEMsRUFBMkM3bEIsUUFBUSxDQUFDeEMsU0FBcEQsQ0FBVjtBQUNIOztBQUNEeWtCLGtCQUFRLENBQUN4a0IsR0FBRCxDQUFSLEdBQWdCc0YsSUFBSSxDQUFDa3dCLGFBQUwsQ0FBbUJ2eUIsT0FBbkIsQ0FBaEI7QUFDSCxTQUxEO0FBTUg7O0FBRUQsVUFBSW15QixtQkFBSixFQUF5QjtBQUNyQixhQUFLekIsWUFBTCxDQUFrQm9CLEdBQWxCO0FBQ0g7QUFDSjtBQTlTTDs7QUFBQTtBQUFBO0FBaVRPLElBQUlweUIsUUFBUSxHQUFHLElBQUl3bEIsUUFBSixFQUFmLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1VQO0FBQ0E7QUFDQTtBQUVPLElBQU13SSxNQUFiO0FBQUE7QUFBQTtBQUFBLHdCQUNtQjtBQUNYLGFBQU8sS0FBSzN1QixLQUFMLENBQVd1ZSxTQUFsQjtBQUNIO0FBSEw7QUFBQTtBQUFBLHdCQUtnQjtBQUNSLGFBQU8sS0FBS3ZlLEtBQUwsQ0FBVzZ1QixLQUFYLENBQWlCekksS0FBeEI7QUFDSDtBQVBMOztBQVNJLGtCQUFZcG1CLEtBQVosRUFBbUI7QUFBQTs7QUFDZixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLeXpCLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLdG5CLElBQUwsR0FBWTtBQUNSeVMsZ0JBQVUsRUFBRSxFQURKO0FBRVJlLGdCQUFVLEVBQUUsRUFGSjtBQUdSN0MsYUFBTyxFQUFFO0FBSEQsS0FBWjtBQUtBLFNBQUtBLE9BQUwsR0FBZSxFQUFmO0FBQ0g7O0FBbEJMO0FBQUE7QUFBQSxvQ0FvQm9CeFIsR0FwQnBCLEVBb0J5QjtBQUNqQixVQUFJSyxPQUFPLEdBQUcsS0FBSzhuQixRQUFMLENBQWNub0IsR0FBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ0ssT0FBTCxFQUFjO0FBQ1ZBLGVBQU8sR0FBR0QscURBQVEsQ0FBQ0osR0FBRCxDQUFsQjtBQUNBLGFBQUttb0IsUUFBTCxDQUFjbm9CLEdBQWQsSUFBcUJLLE9BQXJCO0FBQ0g7O0FBRUQsYUFBT0EsT0FBUDtBQUNIO0FBN0JMO0FBQUE7QUFBQSxrQ0ErQmtCNmIsR0EvQmxCLEVBK0J1QjtBQUNmLGFBQU9DLHFEQUFRLENBQUNELEdBQUQsQ0FBZjtBQUNIO0FBakNMO0FBQUE7QUFBQSw0QkFtQ1lrTSxRQW5DWixFQW1Dc0JsdEIsTUFuQ3RCLEVBbUM4QjNDLE1BbkM5QixFQW1Dc0M7QUFDOUIsVUFBSXJELE1BQUo7QUFBQSxVQUFZbXpCLFFBQVo7QUFBQSxVQUFzQnROLFNBQVMsR0FBRyxLQUFLcm1CLEtBQUwsQ0FBVzZ1QixLQUFYLENBQWlCOXdCLFNBQW5EOztBQUVBLFVBQUl5SSxNQUFNLENBQUNrdEIsUUFBRCxDQUFOLEtBQXFCbmEsU0FBekIsRUFBb0M7QUFDaEMvWSxjQUFNLEdBQUdnRyxNQUFNLENBQUNrdEIsUUFBRCxDQUFmO0FBQ0gsT0FGRCxNQUVPO0FBQ0hDLGdCQUFRLEdBQUc3dEIsd0RBQUEsQ0FBd0I0dEIsUUFBeEIsRUFBa0MsR0FBbEMsQ0FBWDtBQUNBbHpCLGNBQU0sR0FBRyxLQUFLRyxRQUFMLENBQWNrRCxNQUFkLEVBQXNCOHZCLFFBQXRCLEVBQWdDLEtBQUt2TixLQUFyQyxFQUE0Q0MsU0FBNUMsQ0FBVDtBQUNBN2YsY0FBTSxDQUFDa3RCLFFBQUQsQ0FBTixHQUFtQmx6QixNQUFuQjtBQUNIOztBQUVELGFBQU9BLE1BQVA7QUFDSDtBQS9DTDtBQUFBO0FBQUEscUNBaURxQmt6QixRQWpEckIsRUFpRCtCO0FBQ3ZCLGFBQU8sS0FBSzNQLE9BQUwsQ0FBYTJQLFFBQWIsRUFBdUIsS0FBS3ZuQixJQUFMLENBQVV5UyxVQUFqQyxFQUE2QyxnQkFBN0MsQ0FBUDtBQUNIO0FBbkRMO0FBQUE7QUFBQSxxQ0FxRHFCOFUsUUFyRHJCLEVBcUQrQjtBQUN2QixhQUFPLEtBQUszUCxPQUFMLENBQWEyUCxRQUFiLEVBQXVCLEtBQUt2bkIsSUFBTCxDQUFVd1QsVUFBakMsRUFBNkMsZ0JBQTdDLENBQVA7QUFDSDtBQXZETDtBQUFBO0FBQUEsa0NBeURrQitULFFBekRsQixFQXlENEI7QUFDcEIsVUFBSTN5QixNQUFKO0FBQUEsVUFBWTZ5QixTQUFaO0FBQUEsVUFBdUJwdEIsTUFBTSxHQUFHLEtBQUtzVyxPQUFyQzs7QUFFQSxVQUFJdFcsTUFBTSxDQUFDa3RCLFFBQUQsQ0FBTixLQUFxQm5hLFNBQXpCLEVBQW9DO0FBQ2hDeFksY0FBTSxHQUFHeUYsTUFBTSxDQUFDa3RCLFFBQUQsQ0FBZjtBQUNILE9BRkQsTUFFTztBQUNIRSxpQkFBUyxHQUFHLEtBQUs3UCxPQUFMLENBQWEyUCxRQUFiLEVBQXVCLEtBQUt2bkIsSUFBTCxDQUFVMlEsT0FBakMsRUFBMEMsYUFBMUMsQ0FBWjtBQUNBL2IsY0FBTSxHQUFHLEtBQUtKLFFBQUwsQ0FBY2t6QixZQUFkLENBQTJCRCxTQUEzQixDQUFUO0FBQ0FwdEIsY0FBTSxDQUFDa3RCLFFBQUQsQ0FBTixHQUFtQjN5QixNQUFuQjtBQUNIOztBQUVELGFBQU9BLE1BQVA7QUFDSDtBQXJFTDtBQUFBO0FBQUEsOEJBdUVjO0FBQ04sV0FBS2YsS0FBTCxHQUFhLElBQWI7QUFDSDtBQXpFTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBTyxJQUFJNndCLEtBQUssR0FBRztBQUNmOXZCLFFBQU0sRUFBRSxDQURPO0FBRWZFLFNBQU8sRUFBRSxDQUZNO0FBR2ZuRCxXQUFTLEVBQUUsQ0FISTtBQUlmK0MsV0FBUyxFQUFFO0FBSkksQ0FBWixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFDQTtBQUVPLFNBQVM2dkIsa0JBQVQsQ0FBNEJueEIsSUFBNUIsRUFBa0M7QUFDckMsT0FBS3N2QixLQUFMLEdBQWEvb0IsNENBQUEsQ0FBWSxLQUFLcEYsVUFBakIsRUFBNkJuQixJQUE3QixDQUFiO0FBQ0FvQixvREFBUSxDQUFDcXVCLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsS0FBS0gsS0FBbkMsRUFBMEMsSUFBMUM7QUFDSDtBQUVNLElBQU0zSSxPQUFiLEdBQ0ksaUJBQVkzbUIsSUFBWixFQUFrQjtBQUFBOztBQUNkbXhCLG9CQUFrQixDQUFDdndCLElBQW5CLENBQXdCLElBQXhCLEVBQThCWixJQUE5QjtBQUNILENBSEwsQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTeEIsU0FBVCxDQUFtQkcsSUFBbkIsRUFBeUI7QUFDckIsV0FBUzQxQixhQUFULENBQXVCdnpCLFFBQXZCLEVBQWlDO0FBQzdCLFdBQU91Riw0Q0FBQSxDQUFZO0FBQ2YvSCxlQUFTLEVBQUVHO0FBREksS0FBWixFQUVKcUMsUUFGSSxDQUFQO0FBR0g7O0FBRUQsU0FBTztBQUNIekMsYUFBUyxFQUFFLG1CQUFVRSxHQUFWLEVBQWVxbUIsTUFBZixFQUF1QjlqQixRQUF2QixFQUFpQztBQUN4QyxhQUFPekMsVUFBUyxDQUFDRSxHQUFELEVBQU1xbUIsTUFBTixFQUFjeVAsYUFBYSxDQUFDdnpCLFFBQUQsQ0FBM0IsQ0FBaEI7QUFDSCxLQUhFO0FBSUhNLGFBQVMsRUFBRSxtQkFBVTdDLEdBQVYsRUFBZXFtQixNQUFmLEVBQXVCOWpCLFFBQXZCLEVBQWlDO0FBQ3hDLGFBQU9NLFVBQVMsQ0FBQzdDLEdBQUQsRUFBTXFtQixNQUFOLEVBQWN5UCxhQUFhLENBQUN2ekIsUUFBRCxDQUEzQixDQUFoQjtBQUNILEtBTkU7QUFPSFUsV0FBTyxFQUFFLGlCQUFVakQsR0FBVixFQUFlcW1CLE1BQWYsRUFBdUI5akIsUUFBdkIsRUFBaUM7QUFDdEMsYUFBT1UsUUFBTyxDQUFDakQsR0FBRCxFQUFNcW1CLE1BQU4sRUFBY3lQLGFBQWEsQ0FBQ3Z6QixRQUFELENBQTNCLENBQWQ7QUFDSCxLQVRFO0FBVUhRLFVBQU0sRUFBRSxnQkFBVS9DLEdBQVYsRUFBZXFtQixNQUFmLEVBQXVCOWpCLFFBQXZCLEVBQWlDO0FBQ3JDLGFBQU9RLE9BQU0sQ0FBQy9DLEdBQUQsRUFBTXFtQixNQUFOLEVBQWN5UCxhQUFhLENBQUN2ekIsUUFBRCxDQUEzQixDQUFiO0FBQ0gsS0FaRTtBQWFIL0IsVUFBTSxFQUFFLGdCQUFVazFCLFFBQVYsRUFBb0JyUCxNQUFwQixFQUE0QjlqQixRQUE1QixFQUFzQztBQUMxQyxVQUFJa2pCLE9BQU8sR0FBRzdoQixRQUFRLENBQUM4aEIsYUFBVCxDQUF1QmdRLFFBQXZCLENBQWQ7QUFDQSxVQUFJSyxJQUFJLEdBQUczQyxnREFBTyxDQUFDNEMsYUFBUixDQUFzQixhQUF0QixFQUFxQzNQLE1BQXJDLEVBQTZDdmUsNENBQUEsQ0FBWTtBQUNoRS9ILGlCQUFTLEVBQUVHLElBRHFEO0FBRWhFRyxnQkFBUSxFQUFFb2xCLE9BQU8sQ0FBQ3BpQjtBQUY4QyxPQUFaLEVBR3JEZCxRQUhxRCxDQUE3QyxDQUFYO0FBSUEsVUFBSTZwQixJQUFJLEdBQUcsSUFBSTJKLElBQUosRUFBWDtBQUVBM3pCLGlFQUFBLENBQTJCcWpCLE9BQTNCO0FBQ0EyRyxVQUFJLENBQUNqa0IsT0FBTCxHQUFlOHRCLEtBQWYsQ0FBcUJ4USxPQUFyQjtBQUNIO0FBdkJFLEdBQVA7QUF5Qkg7O0FBRUQsU0FBUzNsQixVQUFULENBQW1CRSxHQUFuQixFQUF3QnFtQixNQUF4QixFQUFnQzlqQixRQUFoQyxFQUEwQztBQUN0QyxNQUFJeXRCLFdBQVcsR0FBR29ELGdEQUFPLENBQUM0QyxhQUFSLENBQXNCaDJCLEdBQXRCLEVBQTJCcW1CLE1BQTNCLEVBQW1DOWpCLFFBQW5DLENBQWxCO0FBQ0FJLG9EQUFRLENBQUNDLGlCQUFULENBQTJCNUMsR0FBM0IsRUFBZ0Nnd0IsV0FBaEM7QUFDQSxTQUFPQSxXQUFQO0FBQ0g7O0FBRUQsU0FBU250QixVQUFULENBQW1CN0MsR0FBbkIsRUFBd0JxbUIsTUFBeEIsRUFBZ0M5akIsUUFBaEMsRUFBMEM7QUFDdEMsTUFBSXl0QixXQUFXLEdBQUdvRCxnREFBTyxDQUFDOEMsYUFBUixDQUFzQmwyQixHQUF0QixFQUEyQnFtQixNQUEzQixFQUFtQzlqQixRQUFuQyxDQUFsQjtBQUNBSSxvREFBUSxDQUFDRyxpQkFBVCxDQUEyQjlDLEdBQTNCLEVBQWdDZ3dCLFdBQWhDO0FBQ0EsU0FBT0EsV0FBUDtBQUNIOztBQUVELFNBQVNqdEIsT0FBVCxDQUFnQi9DLEdBQWhCLEVBQXFCcW1CLE1BQXJCLEVBQTZCOWpCLFFBQTdCLEVBQXVDO0FBQ25DLE1BQUl5dEIsV0FBVyxHQUFHb0QsZ0RBQU8sQ0FBQytDLFVBQVIsQ0FBbUJuMkIsR0FBbkIsRUFBd0JxbUIsTUFBeEIsRUFBZ0M5akIsUUFBaEMsQ0FBbEI7QUFDQUksb0RBQVEsQ0FBQ0ssY0FBVCxDQUF3QmhELEdBQXhCLEVBQTZCZ3dCLFdBQTdCO0FBQ0EsU0FBT0EsV0FBUDtBQUNIOztBQUVELFNBQVMvc0IsUUFBVCxDQUFpQmpELEdBQWpCLEVBQXNCcW1CLE1BQXRCLEVBQThCOWpCLFFBQTlCLEVBQXdDO0FBQ3BDLE1BQUl5dEIsV0FBVyxHQUFHb0QsZ0RBQU8sQ0FBQ2dELFdBQVIsQ0FBb0JwMkIsR0FBcEIsRUFBeUJxbUIsTUFBekIsRUFBaUM5akIsUUFBakMsQ0FBbEI7QUFDQUksb0RBQVEsQ0FBQ08sZUFBVCxDQUF5QmxELEdBQXpCLEVBQThCZ3dCLFdBQTlCO0FBQ0EsU0FBT0EsV0FBUDtBQUNIOztBQUVELFNBQVNtRSxXQUFULENBQXFCM1AsUUFBckIsRUFBK0I7QUFDM0IsU0FBT0EsUUFBUSxZQUFZN2pCLG9EQUEzQjtBQUNIOztBQUVELFNBQVN5ekIsV0FBVCxDQUFxQjVQLFFBQXJCLEVBQStCO0FBQzNCLFNBQU9BLFFBQVEsWUFBWWxoQixvREFBM0I7QUFDSDs7QUFFRCxTQUFTZ3hCLFFBQVQsQ0FBa0I5UCxRQUFsQixFQUE0QjtBQUN4QixTQUFPQSxRQUFRLFlBQVkrTiw4Q0FBM0I7QUFDSDs7QUFFRCxTQUFTOEIsU0FBVCxDQUFtQjdQLFFBQW5CLEVBQTZCO0FBQ3pCLFNBQU9BLFFBQVEsWUFBWTBELGdEQUEzQjtBQUNIIiwiZmlsZSI6ImF1dG9tYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYXV0b21hdGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYXV0b21hdGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9zbG90JzsiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9yZW5kZXInO1xyXG5cclxuQGNvbXBvbmVudCh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdzbG90J1xyXG59KVxyXG5jbGFzcyBTbG90Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5uYW1lID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgJHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgc2xvdHMgPSB0aGlzLiQkcGFyZW50LnNsb3RzO1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IHNsb3RzW3RoaXMucHJvcHMubmFtZV07XHJcblxyXG4gICAgICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLiQkbWFpblZpZXcgPSBuZXcgUmVuZGVyZXIodGhpcy4kJHBhcmVudCkucmVuZGVyKHRlbXBsYXRlLCB0aGlzLiRjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYodGhpcy4kJG1haW5WaWV3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCRtYWluVmlldy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNNZXNzYWdlKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1lc3NhZ2U7XHJcbn0iLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbi8vIGdsb2JhbCBldmVudHNcclxuZXhwb3J0IHZhciBldmVudHMgPSB7XHJcbiAgICBwcm9wZXJ0eUNoYW5nZWQ6IG5ldyBNZXNzYWdlKCksXHJcbiAgICByZWZyZXNoVmlldzogbmV3IE1lc3NhZ2UoKVxyXG59OyIsImV4cG9ydCAqIGZyb20gJy4vbG9jYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vYXBpJzsiLCJleHBvcnQgY2xhc3MgTG9jYWwge1xuICAgIGNvbnN0cnVjdG9yKGUsIGVsbSkge1xuICAgICAgICB0aGlzLiRldmVudCA9IGU7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBlbG07XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBvbihmbikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmhhbmRsZXJzLmluZGV4T2YoZm4pO1xuXG4gICAgICAgIC8vIG5vdCBmb3VuZFxuICAgICAgICBpZihpbmRleCA9PT0gLTEpe1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGZuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2FuIG5vdCByZWdpc3RlciBzYW1lIGV2ZW50IGhhbmRsZXIgbW9yZSB0aGFuIG9uY2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLm9mZihmbik7XG4gICAgfVxuXG4gICAgb2ZmKGZuKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaGFuZGxlcnMuaW5kZXhPZihmbik7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZShkYXRhLCBzY29wZSkge1xuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IHRoaXM7XG4gICAgICAgIC8vIGF0dGFjaCBldmVudCBkYXRhXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwge307XG5cbiAgICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5jYWxsKHNjb3BlLCB0aGlzKSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuL2RvbSc7XHJcblxyXG5kb20ubG9hZFN0eWxlU3RyaW5nKCcubS1jb21wb25lbnR7ZGlzcGxheTppbmhlcml0O30gLm0taGlkZXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9Jyk7XHJcblxyXG5leHBvcnQgdmFyIE1fQ01QX0NMQVNTID0gJ20tY29tcG9uZW50JztcclxuZXhwb3J0IHZhciBNX0hJREVfQ0xBU1MgPSAnbS1oaWRlJzsiLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50KG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyQ29tcG9uZW50KGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmUobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCB0YXJnZXQpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihtZXRhZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRhcmdldC5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckZpbHRlcihrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZpbHRlcic7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UnOyIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlKG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyU2VydmljZShrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnYmluZEh0bWwnXHJcbn0pXHJcbmNsYXNzIEJpbmRIdG1sRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50LmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnYmluZCdcbn0pXG5jbGFzcyBCaW5kRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRlbGVtZW50LmlubmVyVGV4dCA9IHZhbHVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdoaWRlJ1xufSlcbmNsYXNzIEhpZGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXNbdmFsdWUgPyAnJGhpZGVFbGVtZW50JyA6ICckc2hvd0VsZW1lbnQnXSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnaWYnXHJcbn0pXHJcbmNsYXNzIElmRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy4kcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLWlmJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzW3ZhbHVlID8gJyRhcHBlbmRFbGVtZW50JyA6ICckcmVtb3ZlRWxlbWVudCddKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmQnO1xuZXhwb3J0ICogZnJvbSAnLi9iaW5kLWh0bWwnO1xuZXhwb3J0ICogZnJvbSAnLi9yZXBlYXQnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2hpZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaG93JztcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSc7XG5leHBvcnQgKiBmcm9tICcuL2lmJztcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoJzsiLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtb2RlbCdcbn0pXG5jbGFzcyBNb2RlbERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmlld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJzZXJzID0gW107XG4gICAgICAgIHRoaXMuZm9ybWF0dGVycyA9IFtdO1xuICAgICAgICB0aGlzLnZpZXdDaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzID0gW107XG4gICAgICAgIHRoaXMuc3RhdHVzID0ge1xuICAgICAgICAgICAgZmVlZGJhY2s6ICcnLFxuICAgICAgICAgICAgcHJpc3RpbmU6IHRydWUsXG4gICAgICAgICAgICBkaXJ0eTogZmFsc2UsXG4gICAgICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgICAgIGludmFsaWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgIHByaXN0aW5lOiAnbi1wcmlzdGluZScsXG4gICAgICAgICAgICAgICAgZGlydHk6ICduLWRpcnR5JyxcbiAgICAgICAgICAgICAgICB2YWxpZDogJ24tdmFsaWQnLFxuICAgICAgICAgICAgICAgIGludmFsaWQ6ICduLWludmFsaWQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21taXRNb2RlbFZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBhZnRlckxpbmsoKSB7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy4kZWxlbWVudC5uYW1lO1xuXG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5zdGF0ZVtuYW1lXSA9IHRoaXMuc3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJGNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRjb21wb25lbnQuJGJpbmQoJ2NoYW5nZScsIGUgPT4gdGhpcy5jb21taXRWaWV3VmFsdWUoZS5kYXRhLm5ld3ZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB0aGlzLmNvbW1pdFZpZXdWYWx1ZShlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuXG4gICAgfVxuXG4gICAgY29tbWl0TW9kZWxWYWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5tb2RlbFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCB0aGlzLm1vZGVsVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLmZvcm1hdHRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMudmlld1ZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC4kc2V0UHJvcGVydHkoJ3ZhbHVlJywgbmV3VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVFbG1Dc3NDbGFzcygpO1xuICAgIH1cblxuICAgIGNvbW1pdFZpZXdWYWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy52aWV3VmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5tYXJrRGlydHlTdGF0dXModHJ1ZSk7XG5cbiAgICAgICAgdGhpcy52aWV3Q2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCBzZWxmLnZpZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmlld1ZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgdGhpcy5wYXJzZXJzLmZvckVhY2goZnVuY3Rpb24gKHBhcnNlcikge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBwYXJzZXIuY2FsbChzZWxmLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKHRoaXMubW9kZWxWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCBzZWxmLm1vZGVsVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLiRiaW5kaW5nLmFzc2lnbihuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRWxtQ3NzQ2xhc3MoKSB7XG4gICAgICAgIHZhciBlbGUgPSB0aGlzLiRlbGVtZW50LFxuICAgICAgICAgICAgY3NzID0gdGhpcy5vcHRpb25zLmNzcztcblxuICAgICAgICBpZiAodGhpcy5zdGF0dXMuZGlydHkpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5kaXJ0eSk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MucHJpc3RpbmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnByaXN0aW5lKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5kaXJ0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0dXMudmFsaWQpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy52YWxpZCk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MuaW52YWxpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MuaW52YWxpZCk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MudmFsaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFya0RpcnR5U3RhdHVzKGRpcnR5KSB7XG4gICAgICAgIHRoaXMuc3RhdHVzLmRpcnR5ID0gZGlydHk7XG4gICAgICAgIHRoaXMuc3RhdHVzLnByaXN0aW5lID0gIWRpcnR5O1xuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XG4gICAgfVxuXG4gICAgbWFya1ZhbGlkU3RhdHVzKHZhbGlkLCBmZWVkYmFjaykge1xuICAgICAgICB0aGlzLnN0YXR1cy52YWxpZCA9IHZhbGlkO1xuICAgICAgICB0aGlzLnN0YXR1cy5pbnZhbGlkID0gIXZhbGlkO1xuICAgICAgICB0aGlzLnN0YXR1cy5mZWVkYmFjayA9IGZlZWRiYWNrO1xuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi9kb20nO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAncmVwZWF0J1xufSlcbmNsYXNzIFJlcGVhdERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXRlbUV4cCA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1zRXhwID0gJyc7XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gJyc7XG4gICAgICAgIHRoaXMuaXRlbVZpZXdzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnVud2F0Y2hDb2xsZWN0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbkNvbXBpbGUodmVsbSwgdmF0dHIpIHtcbiAgICAgICAgdmFyIGFyZyA9IHZhdHRyLm5vZGVWYWx1ZTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvXihbYS16X10rXFx3KylcXHMraW5cXHMrKC4rKSQvaTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhdHRlcm4uZXhlYyhhcmcpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtLXJlcGVhdDogcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pdGVtRXhwID0gcmVzdWx0WzFdO1xuICAgICAgICB0aGlzLml0ZW1zRXhwID0gcmVzdWx0WzJdO1xuICAgICAgICB2ZWxtLnJlbW92ZUF0dHIodmF0dHIpO1xuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IHZlbG0uZ2V0T3V0ZXJUcGwoKTtcblxuICAgICAgICAvLyBpZGVudGlmeSB0aGlzIGRpcmVjdGl2ZSB3b3VsZCB0YWtlIG92ZXIgbGluayBmdW5jdGlvbiBmb3IgcmVsYXRlZCB2aXJ0dWFsIGVsZW1lbnQgbm9kZSwgb25MaW5rIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIG9uTGluayhzY29wZSkge1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdzdGFydDogbS1yZXBlYXQnKTtcbiAgICAgICAgdmFyIGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2VuZDogbS1yZXBlYXQnKTtcblxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcihzY29wZSkpO1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgICAgIHRoaXMudW53YXRjaENvbGxlY3Rpb24gPSBzY29wZS4kd2F0Y2hDb2xsZWN0aW9uKHRoaXMuaXRlbXNFeHAsICgpID0+IHtcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IHRoaXMucmVuZGVyKHNjb3BlKTtcbiAgICAgICAgICAgIGRvbS5yZW1vdmVFbGVtZW50c0JldHdlZW4oaGVhZGVyLCBmb290ZXIpO1xuICAgICAgICAgICAgZm9vdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZyYWdtZW50LCBmb290ZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKHNjb3BlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGl0ZW1zID0gc2NvcGUuJGV2YWwodGhpcy5pdGVtc0V4cCk7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdmFyIGl0ZW1WaWV3cyA9IG5ldyBNYXAoKTtcblxuICAgICAgICB1dGlscy5mb3JFYWNoKGl0ZW1zLCBmdW5jdGlvbiAoaXRlbSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgaXRlbVZpZXcgPSBzZWxmLmdldFZpZXdGcm9tQnVmZmVyKHNlbGYuaXRlbVZpZXdzLCBpdGVtKTtcblxuICAgICAgICAgICAgaWYgKCFpdGVtVmlldykge1xuICAgICAgICAgICAgICAgIHZhciBsb2NhbHMgPSB7fTtcbiAgICAgICAgICAgICAgICBsb2NhbHNbJyRrZXknXSA9IGtleTtcbiAgICAgICAgICAgICAgICBsb2NhbHNbJyRpbmRleCddID0ga2V5O1xuICAgICAgICAgICAgICAgIGxvY2Fsc1tzZWxmLml0ZW1FeHBdID0gaXRlbTtcbiAgICAgICAgICAgICAgICBpdGVtVmlldyA9IHNlbGYuJHJlbmRlcihzZWxmLml0ZW1UZW1wbGF0ZSwgbG9jYWxzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5zZXRWaWV3VG9CdWZmZXIoaXRlbVZpZXdzLCBpdGVtLCBpdGVtVmlldyk7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpdGVtVmlldy5jb250ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pdGVtVmlld3MuZm9yRWFjaChmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgICAgICAgICAgICAgdmlldy5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pdGVtVmlld3MgPSBpdGVtVmlld3M7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cblxuICAgIGdldFZpZXdGcm9tQnVmZmVyKGJ1ZmZlciwgZGF0YUl0ZW0pIHtcbiAgICAgICAgdmFyIHZpZXc7XG5cbiAgICAgICAgaWYgKGJ1ZmZlci5oYXMoZGF0YUl0ZW0pKSB7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IGJ1ZmZlci5nZXQoZGF0YUl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAobGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2aWV3ID0gbGlzdC5zaGlmdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidWZmZXIuZGVsZXRlKGRhdGFJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2aWV3O1xuICAgIH1cblxuICAgIHNldFZpZXdUb0J1ZmZlcihidWZmZXIsIGRhdGFJdGVtLCB2aWV3KSB7XG4gICAgICAgIHZhciBsaXN0O1xuXG4gICAgICAgIGlmIChidWZmZXIuaGFzKGRhdGFJdGVtKSkge1xuICAgICAgICAgICAgbGlzdCA9IGJ1ZmZlci5nZXQoZGF0YUl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdCA9IFtdO1xuICAgICAgICAgICAgYnVmZmVyLnNldChkYXRhSXRlbSwgbGlzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2godmlldyk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLml0ZW1WaWV3cy5mb3JFYWNoKChsaXN0KSA9PiBsaXN0LmZvckVhY2godmlldyA9PiB2aWV3LmRlc3Ryb3koKSkpO1xuICAgICAgICB0aGlzLnVud2F0Y2hDb2xsZWN0aW9uICYmIHRoaXMudW53YXRjaENvbGxlY3Rpb24oKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdzaG93J1xufSlcbmNsYXNzIFNob3dEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXNbdmFsdWUgPyAnJHNob3dFbGVtZW50JyA6ICckaGlkZUVsZW1lbnQnXSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ2NoZWNrZWQnXG59KVxuY2xhc3MgQ2hlY2tlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2NoZWNrZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdkaXNhYmxlZCdcbn0pXG5jbGFzcyBEaXNhYmxlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2Rpc2FibGVkJyk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vY2hlY2tlZCdcbmV4cG9ydCAqIGZyb20gJy4vZGlzYWJsZWQnXG5leHBvcnQgKiBmcm9tICcuL3JlYWRvbmx5J1xuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3RlZCciLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ3JlYWRvbmx5J1xufSlcbmNsYXNzIFJlYWRvbmx5RGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigncmVhZG9ubHknKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdzZWxlY3RlZCdcbn0pXG5jbGFzcyBTZWxlY3RlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3NlbGVjdGVkJyk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuXG5leHBvcnQgY2xhc3MgU3RhdGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKGtleSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy4kZWxlbWVudC5oYXNBdHRyaWJ1dGUodGhpcy5rZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5rZXksICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRlbGVtZW50Lmhhc0F0dHJpYnV0ZSh0aGlzLmtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2NsYXNzJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnY2xhc3NFdmVuJ1xyXG59KVxyXG5jbGFzcyBDbGFzc0V2ZW5EaXJlY3RpdmUgZXh0ZW5kcyBDbGFzc0RpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGV2YWwoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDbGFzc0RpcmVjdGl2ZSB9IGZyb20gJy4vY2xhc3MnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdjbGFzc09kZCdcclxufSlcclxuY2xhc3MgQ2xhc3NPZGREaXJlY3RpdmUgZXh0ZW5kcyBDbGFzc0RpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGV2YWwoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uLy4uL2RvbSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ2NsYXNzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xhc3NEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZShuZXdDbGFzcywgb2xkQ2xhc3MpIHtcclxuICAgICAgICBpZiAodGhpcy5za2lwQ3VycmVudEVsbSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvbGRDbGFzcykge1xyXG4gICAgICAgICAgICBkb20ucmVtb3ZlQ2xhc3ModGhpcy4kZWxlbWVudCwgb2xkQ2xhc3Muam9pbignICcpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXdDbGFzcykge1xyXG4gICAgICAgICAgICBkb20uYWRkQ2xhc3ModGhpcy4kZWxlbWVudCwgbmV3Q2xhc3Muam9pbignICcpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vY2xhc3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NsYXNzLWV2ZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NsYXNzLW9kZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlLWV2ZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlLW9kZCc7IiwiaW1wb3J0IHsgU3R5bGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnc3R5bGVFdmVuJ1xyXG59KVxyXG5jbGFzcyBTdHlsZUV2ZW5EaXJlY3RpdmUgZXh0ZW5kcyBTdHlsZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGV2YWwoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdHlsZURpcmVjdGl2ZSB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdzdHlsZU9kZCdcclxufSlcclxuY2xhc3MgU3R5bGVPZGREaXJlY3RpdmUgZXh0ZW5kcyBTdHlsZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGV2YWwoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdzdHlsZSdcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKG5ld1N0eWxlLCBvbGRTdHlsZSkge1xuICAgICAgICBpZiAodGhpcy5za2lwQ3VycmVudEVsbSgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFN0eWxlKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG9sZFN0eWxlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIHNlbGYuJGVsZW1lbnQuc3R5bGVba2V5XSA9ICcnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QobmV3U3R5bGUpKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG5ld1N0eWxlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIHNlbGYuJGVsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBza2lwQ3VycmVudEVsbSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3N3aXRjaCdcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoLWRlZmF1bHQnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC13aGVuJyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ3N3aXRjaERlZmF1bHQnXG59KVxuY2xhc3MgU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IG51bGw7XG4gICAgICAgIHRoaXMuJHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnc3dpdGNoLWRlZmF1bHQnKTtcbiAgICB9XG5cbiAgICBhZnRlckxpbmsoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IHRoaXMuJHNlZWtVcERpcmVjdGl2ZSgnc3dpdGNoJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3dpdGNoQ3RybCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmUgbS1zd2l0Y2ggZGlyZWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaEN0cmwubWF0Y2hEZWZhdWx0Lm9uKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXNbdGhpcy5zd2l0Y2hDdHJsLmRlZmF1bHRNYXRjaGVkID8gJyRhcHBlbmRFbGVtZW50JyA6ICckcmVtb3ZlRWxlbWVudCddKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCF0aGlzLnN3aXRjaEN0cmwuZGVmYXVsdE1hdGNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlbW92ZUVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdzd2l0Y2hXaGVuJ1xufSlcbmNsYXNzIFN3aXRjaFdoZW5EaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXRjaGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuJHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnc3dpdGNoLXdoZW4nKTtcbiAgICB9XG5cbiAgICBhZnRlckxpbmsoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IHRoaXMuJHNlZWtVcERpcmVjdGl2ZSgnc3dpdGNoJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3dpdGNoQ3RybCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmUgbS1zd2l0Y2ggZGlyZWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaEN0cmwuY2hhbmdlZC5vbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbWF0Y2hlZCA9IHRoaXMuc3dpdGNoQ3RybC52YWx1ZSA9PT0gdGhpcy52YWx1ZTtcblxuICAgICAgICBpZih0aGlzLm1hdGNoZWQgIT0gbWF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy5tYXRjaGVkID0gbWF0Y2hlZDtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaEN0cmwucGx1c01hdGNoKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoQ3RybC5taW51c01hdGNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzW21hdGNoZWQgPyAnJGFwcGVuZEVsZW1lbnQnIDogJyRyZW1vdmVFbGVtZW50J10oKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnc3dpdGNoJ1xufSlcbmNsYXNzIFN3aXRjaERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1hdGNoQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLmRlZmF1bHRNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYXRjaERlZmF1bHQgPSBuZXcgTWVzc2FnZSgpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkLmZpcmUoKTtcbiAgICB9XG5cbiAgICBwbHVzTWF0Y2goKSB7XG4gICAgICAgIHRoaXMubWF0Y2hDb3VudCsrO1xuICAgICAgICB0aGlzLmNoZWNrRGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG1pbnVzTWF0Y2goKSB7XG4gICAgICAgIHRoaXMubWF0Y2hDb3VudC0tO1xuICAgICAgICB0aGlzLmNoZWNrRGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNoZWNrRGVmYXVsdCgpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRNYXRjaGVkID0gdGhpcy5tYXRjaENvdW50IDw9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdE1hdGNoZWQgIT09IGRlZmF1bHRNYXRjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRNYXRjaGVkID0gZGVmYXVsdE1hdGNoZWQ7XG4gICAgICAgICAgICB0aGlzLm1hdGNoRGVmYXVsdC5maXJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG5mdW5jdGlvbiBnZXRDaGlsZHJlbk9mRWxlbWVudChlbG0pIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxtLmNoaWxkTm9kZXMsIDApO1xufVxuXG5mdW5jdGlvbiBjbGVhckNoaWxkcmVuT2ZFbGVtZW50KGVsbSkge1xuICAgIGdldENoaWxkcmVuT2ZFbGVtZW50KGVsbSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgZWxtLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQoZWxtLCBuZXdFbG0pIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGVsbS5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWxtLCBlbG0pO1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsbSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsbSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gZWxtLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsbSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50c0JldHdlZW4oc3RhcnRFbG0sIGVuZEVsbSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gc3RhcnRFbG0ucGFyZW50Tm9kZTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IGdldENoaWxkcmVuT2ZFbGVtZW50KHBhcmVudE5vZGUpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nID09PSBzdGFydEVsbSAmJiBjaGlsZCAhPT0gZW5kRWxtKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgPT09IGVuZEVsbSAmJiBjaGlsZCAhPT0gc3RhcnRFbG0pIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnQoZWxtLCBuZXdFbG0pIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGVsbS5wYXJlbnROb2RlO1xuXG4gICAgaWYgKHBhcmVudE5vZGUubGFzdENoaWxkID09PSBlbG0pIHtcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbG0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsbSwgZWxtLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzIChlbG0sIGNscykge1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGVsbS5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbG0uY2xhc3NMaXN0LmFkZChjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbG0uZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgICAgICBpZiAoY3VyLmluZGV4T2YoJyAnICsgY2xzICsgJyAnKSA8IDApIHtcbiAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKGVsbSwgY2xzKSB7XG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZWxtLmNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbHMuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5jbGFzc0xpc3QucmVtb3ZlKGMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWxtLmNsYXNzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWxtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICAgICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcbiAgICAgICAgd2hpbGUgKGN1ci5pbmRleE9mKHRhcikgPj0gMCkge1xuICAgICAgICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpO1xuICAgICAgICB9XG4gICAgICAgIGN1ciA9IGN1ci50cmltKCk7XG4gICAgICAgIGlmIChjdXIpIHtcbiAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY3VyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRTdHlsZVN0cmluZyhjc3MpIHtcbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbmV4cG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgcmVtb3ZlQ2xhc3MsXG4gICAgYXBwZW5kRWxlbWVudCxcbiAgICByZW1vdmVFbGVtZW50LFxuICAgIHJlcGxhY2VFbGVtZW50LFxuICAgIGdldENoaWxkcmVuT2ZFbGVtZW50LFxuICAgIHJlbW92ZUVsZW1lbnRzQmV0d2VlbixcbiAgICBjbGVhckNoaWxkcmVuT2ZFbGVtZW50LFxuICAgIGxvYWRTdHlsZVN0cmluZ1xufTsiLCJpbXBvcnQgeyBBU1QgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IHBhcnNlRXhwIH0gIGZyb20gJy4vZXhwLWFwaSc7XG5pbXBvcnQgeyBFeHBCdWlsZGVyIH0gZnJvbSAnLi9leHAtYnVpbGRlcic7XG5cbmNsYXNzIEFjY2Vzc29yIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWUsIGV4cCkge1xuICAgICAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB7fTtcbiAgICB9XG5cbiAgICBjcmVhdGVDaGlsZChrZXksIGNhbGxlZSwgZXhwKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGlsZHJlbltrZXldKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2tleV0gPSBuZXcgQWNjZXNzb3IoY2FsbGVlLCBleHApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5ba2V5XTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbmFseXNlciB7XG4gICAgY29uc3RydWN0b3IocGFyc2VyKSB7XG4gICAgICAgIHRoaXMucGFyc2VyID0gcGFyc2VyIHx8IHtcbiAgICAgICAgICAgIHBhcnNlRXhwcmVzc2lvbjogcGFyc2VFeHBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY2Nlc3NvciA9IHt9O1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgRXhwQnVpbGRlcigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUFjY2Vzc29yKGtleSwgY2FsbGVlLCBleHApIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjY2Vzc29yW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuYWNjZXNzb3Jba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NvcltrZXldO1xuICAgIH1cblxuICAgIGFuYWx5c2UoZXhwKSB7XG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5wYXJzZXIucGFyc2VFeHByZXNzaW9uKGV4cCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFuYWx5c2VQcm9ncmFtKHByb2dyYW0pO1xuICAgIH1cblxuICAgIGFuYWx5c2VQcm9ncmFtKHByb2dyYW0pIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NvciA9IHt9O1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICBwcm9ncmFtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB0aGlzLmFuYWx5c2VOb2RlKGNoaWxkKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY2Vzc29yO1xuICAgIH1cblxuICAgIGFuYWx5c2VOb2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlRXhwcmVzc2lvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQ29uZGl0aW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlTG9naWMobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VVbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUNhbGwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZU1lbWJlcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlSWRlbnRpZmllcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlTGl0ZXJhbChub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZVByb3BlcnR5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VPYmplY3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGFuYWx5c2VFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICBleHAuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHRoaXMuYW5hbHlzZU5vZGUoY2hpbGQpKTtcbiAgICB9XG5cbiAgICBhbmFseXNlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYXNzaWdubWVudC5yaWdodCk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24udGVzdCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmFsdGVybmF0ZSk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VMb2dpYyhsb2dpYykge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLmxlZnQpO1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLnJpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmFseXNlQmluYXJ5KGJpbmFyeSkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGJpbmFyeS5sZWZ0KTtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShiaW5hcnkucmlnaHQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VVbmFyeSh1bmFyeSkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKHVuYXJ5LmFyZyk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUNhbGwoY2FsbCkge1xuICAgICAgICBjYWxsLmFyZ3MuZm9yRWFjaChhcmcgPT4gdGhpcy5hbmFseXNlTm9kZShhcmcpKTtcblxuICAgICAgICBpZiAoIWNhbGwuZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNhbGwuY2FsbGVlLCB7IGNhbGxlZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuYWx5c2VNZW1iZXIobWVtYmVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5vYmplY3QpO1xuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1lbWJlci5wcm9wZXJ0eS50eXBlID09PSBBU1QuTGl0ZXJhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3JlYXRlQ2hpbGQobWVtYmVyLnByb3BlcnR5LnZhbHVlLCBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChtZW1iZXIucHJvcGVydHkpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmNyZWF0ZUNoaWxkKGtleSwgY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hbmFseXNlTm9kZShtZW1iZXIucHJvcGVydHksIHtcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFuYWx5c2VJZGVudGlmaWVyKGlkZW50aWZpZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChpZGVudGlmaWVyKSxcbiAgICAgICAgICAgIGNhbGxlZSA9IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWU7XG5cbiAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnBhcmVudC5jcmVhdGVDaGlsZChrZXksIGNhbGxlZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVBY2Nlc3NvcihrZXksIGNhbGxlZSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUxpdGVyYWwobGl0ZXJhbCwgY29udGV4dCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGxpdGVyYWwpO1xuXG4gICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wYXJlbnQuY3JlYXRlQ2hpbGQoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuYWx5c2VQcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUocHJvcC52YWx1ZSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZU9iamVjdChvYmopIHtcbiAgICAgICAgb2JqLnByb3BlcnRpZXMuZm9yRWFjaChpdGVtID0+IHRoaXMuYW5hbHlzZU5vZGUoaXRlbSkpO1xuICAgIH1cblxuICAgIGFuYWx5c2VBcnJheShhcnIpIHtcbiAgICAgICAgYXJyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB0aGlzLmFuYWx5c2UoY2hpbGQpKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQVNULCBOdWxsRXhwcmVzc2lvbk5vZGUgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcbmltcG9ydCB7IHBhcnNlRXhwIH0gIGZyb20gJy4vZXhwLWFwaSc7XG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIGFzc2lnbkludGVyY2VwdG9yOiBudWxsLFxuICAgIGxvY2FsczogbnVsbFxufTtcblxuZXhwb3J0IGNsYXNzIEV2YWx1YXRvciB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBFeHBCdWlsZGVyKCk7XG4gICAgICAgIHRoaXMucGFyc2VyID0gc2NvcGUuJHBhcnNlciB8fCB7cGFyc2VFeHByZXNzaW9uOiBwYXJzZUV4cH07XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlIGZyb20gZXhwcmVzc2lvblxuICAgIGV2YWx1YXRlKGV4cCkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucGFyc2VyLnBhcnNlRXhwcmVzc2lvbihleHApO1xuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVQcm9ncmFtKHByb2dyYW0pIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuXG4gICAgICAgIHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpKTtcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC4kbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlIHRvIGV4cHJlc3Npb25cbiAgICBhc3NpZ24oZXhwLCB2YWx1ZSkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucGFyc2VyLnBhcnNlRXhwcmVzc2lvbihleHApO1xuICAgICAgICByZXR1cm4gdGhpcy5hc3NpZ25Qcm9ncmFtKHByb2dyYW0sIHZhbHVlKTtcbiAgICB9XG5cbiAgICBhc3NpZ25Qcm9ncmFtKHByb2dyYW0sIHZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleHByZXNzaW9uID0gdGhpcy5wcm9ncmFtLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYgKGV4cHJlc3Npb24uY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFzc2lnbm1lbnQgPSBleHByZXNzaW9uLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYgKGFzc2lnbm1lbnQudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50Lm9iamVjdCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBudWxsIG9yIHVuZGVmaW5lZCcsIHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50Lm9iamVjdCkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQucHJvcGVydHksIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleTogIWFzc2lnbm1lbnQuY29tcHV0ZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbnVsbCBvciB1bmRlZmluZWQnLCB0aGlzLmJ1aWxkZXIuYnVpbGQoYXNzaWdubWVudC5wcm9wZXJ0eSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRhcmdldCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXNzaWdubWVudC50eXBlID09PSBBU1QuSWRlbnRpZmllcikge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0aGlzLnNjb3BlLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVFeHByZXNzaW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUNvbmRpdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMb2dpYyhub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlVW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQ2FsbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU1lbWJlcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUlkZW50aWZpZXIobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMaXRlcmFsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVQcm9wZXJ0eShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU9iamVjdChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LmxlZnQsIHtcbiAgICAgICAgICAgIGFzc2lnbm1lbnRMZWZ0OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LnJpZ2h0KTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldC5vYmpbdGFyZ2V0LnByb3BdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0YXJnZXQub2JqLCB0YXJnZXQucHJvcCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZhbHVhdGVDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24udGVzdCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24uYWx0ZXJuYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24uY29uc2VxdWVudCk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVMb2dpYyhsb2dpYykge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUobG9naWMubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUobG9naWMucmlnaHQpO1xuXG4gICAgICAgIHN3aXRjaCAobG9naWMub3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJyYmJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3x8JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVCaW5hcnkoYmluYXJ5KSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShiaW5hcnkubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYmluYXJ5LnJpZ2h0KTtcblxuICAgICAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xuICAgICAgICBzd2l0Y2ggKGJpbmFyeS5vcGVyYXRvcikge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICsgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAtIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC8gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyUnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAlIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPCByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID4gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPD0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPj0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyE9JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz09PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnIT09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlVW5hcnkodW5hcnkpIHtcbiAgICAgICAgdmFyIHJlc3VsdCxcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUodW5hcnkuYXJnKTtcblxuICAgICAgICBzd2l0Y2ggKHVuYXJ5Lm9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IC12YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyEnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICF2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVDYWxsKGNhbGwpIHtcbiAgICAgICAgdmFyIGFyZ1ZhbHVlcyA9IGNhbGwuYXJncy5tYXAoYXJnID0+IHRoaXMuZXZhbHVhdGVOb2RlKGFyZykpO1xuXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2FsbC5jYWxsZWUsIHtcbiAgICAgICAgICAgIGNhbGxlZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY2FsbC5maWx0ZXIpIHtcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSB0aGlzLnBhcnNlci5yZXNvbHZlRmlsdGVyKGNvbnRleHQucHJvcCk7XG5cbiAgICAgICAgICAgIGlmKGZpbHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWx0ZXIgXCInICsgY29udGV4dC5wcm9wICsgJ1wiIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIudHJhbnNmb3JtLmFwcGx5KGZpbHRlciwgYXJnVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBmbiA9IGNvbnRleHQub2JqW2NvbnRleHQucHJvcF07XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dC5vYmosIGFyZ1ZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udGV4dC5wcm9wICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZhbHVhdGVNZW1iZXIobWVtYmVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIub2JqZWN0KTtcblxuICAgICAgICBpZiAob2JqID09IG51bGwgJiYgKHRoaXMub3B0aW9ucy5hbGxvd051bGwgfHwgbWVtYmVyLm9iamVjdC5hbGxvd051bGwpKSB7XG4gICAgICAgICAgICBvYmogPSBuZXcgTnVsbEV4cHJlc3Npb25Ob2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVtYmVyLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5wcm9wZXJ0eSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqW3Byb3BdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgdGFyZ2V0OiBvYmosXG4gICAgICAgICAgICB0YXJnZXROb2RlOiBtZW1iZXIub2JqZWN0LFxuICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlLFxuICAgICAgICAgICAgYXNzaWdubWVudExlZnQ6IGNvbnRleHQgJiYgY29udGV4dC5hc3NpZ25tZW50TGVmdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUlkZW50aWZpZXIoaWRlbnRpZmllciwgY29udGV4dCkge1xuICAgICAgICB2YXIgdGFyZ2V0O1xuXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IHt9O1xuXG4gICAgICAgIGlmIChjb250ZXh0LnRhcmdldE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5zY29wZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldCA9IGNvbnRleHQudGFyZ2V0XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5hc3NpZ25tZW50TGVmdCB8fCBjb250ZXh0LmNhbGxlZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvYmo6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBwcm9wOiBpZGVudGlmaWVyLm5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5wcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXIubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXRbaWRlbnRpZmllci5uYW1lXTtcblxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgdGhpcy5vcHRpb25zLmxvY2Fscykge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5vcHRpb25zLmxvY2Fsc1tpZGVudGlmaWVyLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUxpdGVyYWwobGl0ZXJhbCkge1xuICAgICAgICByZXR1cm4gbGl0ZXJhbC52YWx1ZTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZVByb3BlcnR5KHByb3ApIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZXZhbHVhdGVOb2RlKHByb3Aua2V5LCB7XG4gICAgICAgICAgICBwcm9wZXJ0eUtleTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShwcm9wLnZhbHVlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZU9iamVjdChvYmopIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIG9iai5wcm9wZXJ0aWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB2YXIgZGVmID0gdGhpcy5ldmFsdWF0ZU5vZGUoaXRlbSk7XG4gICAgICAgICAgICByZXN1bHRbZGVmLmtleV0gPSBkZWYudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVBcnJheShhcnIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGFyci5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59IiwiaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuL2V4cC1sZXhlcic7XG5pbXBvcnQgeyBFeHBQYXJzZXIgfSBmcm9tICcuL2V4cC1wYXJzZXInO1xuXG5mdW5jdGlvbiBsZXhFeHAoZXhwKSB7XG4gICAgcmV0dXJuIG5ldyBFeHBMZXhlcigpLmxleChleHApO1xufVxuXG5mdW5jdGlvbiBwYXJzZUV4cChleHApIHtcbiAgICByZXR1cm4gbmV3IEV4cFBhcnNlcihuZXcgRXhwTGV4ZXIoKSkucGFyc2UoZXhwKTtcbn1cblxuZXhwb3J0IHsgbGV4RXhwLCBwYXJzZUV4cCB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgRXhwQnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBidWlsZChub2RlKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEV4cHJlc3Npb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQXNzaWdubWVudChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQ29uZGl0aW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZExvZ2ljKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQmluYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQmluYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuVW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRVbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRDYWxsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTWVtYmVyRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkTWVtYmVyKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuSWRlbnRpZmllcjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkSWRlbnRpZmllcihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZExpdGVyYWwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5BcnJheUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEFycmF5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuUHJvcGVydHk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZFByb3BlcnR5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkT2JqZWN0KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBidWlsZEV4cHJlc3Npb24oZXhwKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBidWlsZEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5idWlsZChhc3NpZ25tZW50LmxlZnQpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKGFzc2lnbm1lbnQucmlnaHQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH09ezF9JywgdGFyZ2V0LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gdGhpcy5idWlsZChjb25kaXRpb24udGVzdCk7XG4gICAgICAgIHZhciBhbHRlcm5hdGUgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi5hbHRlcm5hdGUpO1xuICAgICAgICB2YXIgY29uc2VxdWVudCA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH0/ezF9OnsyfScsIHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XG4gICAgfVxuXG4gICAgYnVpbGRMb2dpYyhsb2dpYykge1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5idWlsZChsb2dpYy5sZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmJ1aWxkKGxvZ2ljLnJpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9ezF9ezJ9JywgbGVmdFZhbHVlLCBsb2dpYy5vcGVyYXRvciwgcmlnaHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRCaW5hcnkoYmluYXJ5KSB7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmJ1aWxkKGJpbmFyeS5sZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmJ1aWxkKGJpbmFyeS5yaWdodCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfXsyfScsIGxlZnRWYWx1ZSwgYmluYXJ5Lm9wZXJhdG9yLCByaWdodFZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZFVuYXJ5KHVuYXJ5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQodW5hcnkuYXJnKTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9ezF9JywgdW5hcnkub3BlcmF0b3IsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZENhbGwoY2FsbCkge1xuICAgICAgICB2YXIgcmVzID0gJycsIGFyZ1ZhbHVlcyA9IGNhbGwuYXJncy5tYXAoYXJnID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGFyZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBmbiA9IHRoaXMuYnVpbGQoY2FsbC5jYWxsZWUpO1xuXG4gICAgICAgIGlmIChjYWxsLmZpbHRlcikge1xuICAgICAgICAgICAgaWYgKGFyZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gYXJnVmFsdWVzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcyArPSAnIHwgJyArIGZuO1xuXG4gICAgICAgICAgICBpZiAoYXJnVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXMgKz0gJzonICsgYXJnVmFsdWVzLmpvaW4oJzonKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcyA9IHV0aWxzLmZvcm1hdCgnezB9KHsxfSknLCBmbiwgYXJnVmFsdWVzLmpvaW4oJywgJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBidWlsZE1lbWJlcihtZW1iZXIpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuYnVpbGQobWVtYmVyLm9iamVjdCk7XG4gICAgICAgIHZhciBwcm9wID0gdGhpcy5idWlsZChtZW1iZXIucHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfVt7MX1dJywgb2JqLCBwcm9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfS57MX0nLCBvYmosIHByb3ApO1xuICAgIH1cblxuICAgIGJ1aWxkSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgICAgIHJldHVybiBpZGVudGlmaWVyLm5hbWU7XG4gICAgfVxuXG4gICAgYnVpbGRMaXRlcmFsKGxpdGVyYWwpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGxpdGVyYWwudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCdcInswfVwiJywgbGl0ZXJhbC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGl0ZXJhbC52YWx1ZTtcbiAgICB9XG5cbiAgICBidWlsZFByb3BlcnR5KHByb3ApIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGQocHJvcC5rZXksIHtcbiAgICAgICAgICAgIHByb3BlcnR5S2V5OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQocHJvcC52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9OnsxfScsIGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkT2JqZWN0KG9iaikge1xuICAgICAgICB2YXIgcHJvcHMgPSBvYmoucHJvcGVydGllcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgne3swfX0nLCBwcm9wcy5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBidWlsZEFycmF5KGFycikge1xuICAgICAgICB2YXIgaXRlbXMgPSBhcnIuY2hpbGROb2Rlcy5tYXAoY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCdbezB9XScsIGl0ZW1zLmpvaW4oJywnKSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IE9QRVJBVE9SUyB9IGZyb20gJy4vZXhwLW9wZXJhdG9ycyc7XG5pbXBvcnQgeyBwYXJzZU9wdGlvbnMgfSBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgRXhwTGV4ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdXRpbHMubWVyZ2UocGFyc2VPcHRpb25zLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBsZXgodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSBbXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICcuJyAmJiB0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZE51bWJlcigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXMoY2gsICcoKXt9W10uLDs6PycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBjaCB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoMiA9IGNoICsgdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICAgICAgdmFyIGNoMyA9IGNoMiArIHRoaXMucGVlaygyKTtcbiAgICAgICAgICAgICAgICB2YXIgb3AxID0gT1BFUkFUT1JTW2NoXTtcbiAgICAgICAgICAgICAgICB2YXIgb3AyID0gT1BFUkFUT1JTW2NoMl07XG4gICAgICAgICAgICAgICAgdmFyIG9wMyA9IE9QRVJBVE9SU1tjaDNdO1xuICAgICAgICAgICAgICAgIGlmIChvcDEgfHwgb3AyIHx8IG9wMykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBvcDMgPyBjaDMgOiAob3AyID8gY2gyIDogY2gpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHRva2VuLCBvcGVyYXRvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSB0b2tlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIGlzKGNoLCBjaGFycykge1xuICAgICAgICByZXR1cm4gY2hhcnMuaW5kZXhPZihjaCkgIT09IC0xO1xuICAgIH1cblxuICAgIHBlZWsoaSkge1xuICAgICAgICB2YXIgbnVtID0gaSB8fCAxO1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPCB0aGlzLnRleHQubGVuZ3RoKSA/IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCArIG51bSkgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc051bWJlcihjaCkge1xuICAgICAgICByZXR1cm4gKCcwJyA8PSBjaCAmJiBjaCA8PSAnOScpICYmIHR5cGVvZiBjaCA9PT0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgaXNXaGl0ZXNwYWNlKGNoKSB7XG4gICAgICAgIC8vIElFIHRyZWF0cyBub24tYnJlYWtpbmcgc3BhY2UgYXMgXFx1MDBBMFxuICAgICAgICByZXR1cm4gKGNoID09PSAnICcgfHwgY2ggPT09ICdcXHInIHx8IGNoID09PSAnXFx0JyB8fFxuICAgICAgICAgICAgY2ggPT09ICdcXG4nIHx8IGNoID09PSAnXFx2JyB8fCBjaCA9PT0gJ1xcdTAwQTAnKTtcbiAgICB9XG5cbiAgICBpc0lkZW50aWZpZXJTdGFydChjaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0ID9cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydChjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCkge1xuICAgICAgICByZXR1cm4gKCdhJyA8PSBjaCAmJiBjaCA8PSAneicgfHxcbiAgICAgICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcbiAgICAgICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyk7XG4gICAgfVxuXG4gICAgaXNJZGVudGlmaWVyQ29udGludWUoY2gpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZSA/XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gpO1xuICAgIH1cblxuICAgIGlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gsIGNwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKTtcbiAgICB9XG5cbiAgICBjb2RlUG9pbnRBdChjaCkge1xuICAgICAgICBpZiAoY2gubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gY2guY2hhckNvZGVBdCgwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgICByZXR1cm4gKGNoLmNoYXJDb2RlQXQoMCkgPDwgMTApICsgY2guY2hhckNvZGVBdCgxKSAtIDB4MzVGREMwMDtcbiAgICB9XG5cbiAgICBwZWVrTXVsdGljaGFyKCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICB2YXIgcGVlayA9IHRoaXMucGVlaygpO1xuICAgICAgICBpZiAoIXBlZWspIHtcbiAgICAgICAgICAgIHJldHVybiBjaDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3AxID0gY2guY2hhckNvZGVBdCgwKTtcbiAgICAgICAgdmFyIGNwMiA9IHBlZWsuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgaWYgKGNwMSA+PSAweEQ4MDAgJiYgY3AxIDw9IDB4REJGRiAmJiBjcDIgPj0gMHhEQzAwICYmIGNwMiA8PSAweERGRkYpIHtcbiAgICAgICAgICAgIHJldHVybiBjaCArIHBlZWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoO1xuICAgIH1cblxuICAgIGlzRXhwT3BlcmF0b3IoY2gpIHtcbiAgICAgICAgcmV0dXJuIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycgfHwgdGhpcy5pc051bWJlcihjaCkpO1xuICAgIH1cblxuICAgIHRocm93RXJyb3IoZXJyb3IsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgZW5kID0gZW5kIHx8IHRoaXMuaW5kZXg7XG4gICAgICAgIHZhciBjb2xTdHIgPSAodXRpbHMuaXNEZWZpbmVkKHN0YXJ0KSA/ICdzICcgKyBzdGFydCArICctJyArIHRoaXMuaW5kZXggKyAnIFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyhzdGFydCwgZW5kKSArICddJyA6ICcgJyArIGVuZCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTGV4ZXIgRXJyb3I6ICcgKyBlcnJvciArICcgYXQgY29sdW1uJyArIGNvbFN0ciArICcgaW4gZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddLicpO1xuICAgIH1cblxuICAgIHJlYWROdW1iZXIoKSB7XG4gICAgICAgIHZhciBudW1iZXIgPSAnJztcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB1dGlscy5sb3dlcmNhc2UodGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KSk7XG4gICAgICAgICAgICBpZiAoY2ggPT09ICcuJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSkge1xuICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHBlZWtDaCA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ2UnICYmIHRoaXMuaXNFeHBPcGVyYXRvcihwZWVrQ2gpKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcbiAgICAgICAgICAgICAgICAgICAgcGVla0NoICYmIHRoaXMuaXNOdW1iZXIocGVla0NoKSAmJlxuICAgICAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcbiAgICAgICAgICAgICAgICAgICAgKCFwZWVrQ2ggfHwgIXRoaXMuaXNOdW1iZXIocGVla0NoKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgZXhwb25lbnQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICB0ZXh0OiBudW1iZXIsXG4gICAgICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIobnVtYmVyKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWFkSWRlbnQoKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHRoaXMuaW5kZXggKz0gdGhpcy5wZWVrTXVsdGljaGFyKCkubGVuZ3RoO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMucGVla011bHRpY2hhcigpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBjaC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQuc2xpY2Uoc3RhcnQsIHRoaXMuaW5kZXgpLFxuICAgICAgICAgICAgaWRlbnRpZmllcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWFkU3RyaW5nKHF1b3RlKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xuICAgICAgICB2YXIgcmF3U3RyaW5nID0gcXVvdGU7XG4gICAgICAgIHZhciBlc2NhcGUgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoZXggPSB0aGlzLnRleHQuc3Vic3RyaW5nKHRoaXMuaW5kZXggKyAxLCB0aGlzLmluZGV4ICsgNSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGV4Lm1hdGNoKC9bXFxkYS1mXXs0fS9pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIHVuaWNvZGUgZXNjYXBlIFtcXFxcdScgKyBoZXggKyAnXScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gNDtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4LCAxNikpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXAgPSBFU0NBUEVbY2hdO1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyAocmVwIHx8IGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXNjYXBlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICBlc2NhcGUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gcXVvdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignVW50ZXJtaW5hdGVkIHF1b3RlJywgc3RhcnQpO1xuICAgIH1cbn0iLCJleHBvcnQgdmFyIE9QRVJBVE9SUyA9IHt9O1xuXG52YXIgb3BlcmF0b3JUZXh0ID0gJysgLSAqIC8gJSA9PT0gIT09ID09ICE9IDwgPiA8PSA+PSAmJiB8fCAhID0gfCc7XG52YXIgRVNDQVBFID0geyAnbic6ICdcXG4nLCAnZic6ICdcXGYnLCAncic6ICdcXHInLCAndCc6ICdcXHQnLCAndic6ICdcXHYnLCAnXFwnJzogJ1xcJycsICdcIic6ICdcIicgfTtcblxub3BlcmF0b3JUZXh0LnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICBPUEVSQVRPUlNbb3BlcmF0b3JdID0gdHJ1ZTtcbn0pOyIsImltcG9ydCB7XG4gICAgQVNULFxuICAgIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSxcbiAgICBCaW5hcnlFeHByZXNzaW9uTm9kZSxcbiAgICBDYWxsRXhwcmVzc2lvbk5vZGUsXG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSxcbiAgICBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSxcbiAgICBJZGVudGlmaWVyTm9kZSxcbiAgICBMaXRlcmFsTm9kZSxcbiAgICBMb2dpY2FsRXhwcmVzc2lvbk5vZGUsXG4gICAgTWVtYmVyRXhwcmVzc2lvbk5vZGUsXG4gICAgT2JqZWN0RXhwcmVzc2lvbk5vZGUsXG4gICAgUHJvZ3JhbU5vZGUsXG4gICAgUHJvcGVydHlOb2RlLFxuICAgIFVuYXJ5RXhwcmVzc2lvbk5vZGUsXG4gICAgQXJyYXlFeHByZXNzaW9uTm9kZVxufSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi9leHAtbGV4ZXInO1xuaW1wb3J0IHsgcGFyc2VPcHRpb25zIH0gZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIEV4cFBhcnNlciB7XG4gICAgY29uc3RydWN0b3IobGV4ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShwYXJzZU9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHRocm93RXJyb3IobXNnLCB0b2tlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N5bnRheCBFcnJvcjogVG9rZW4gXFwnJyArIHRva2VuLnRleHQgKyAnXFwnJyArIG1zZyArICcgYXQgY29sdW1uICcgKyAodG9rZW4uaW5kZXggKyAxKSArXG4gICAgICAgICAgICAnIG9mIHRoZSBleHByZXNzaW9uIFsnICsgdGhpcy50ZXh0ICsgJ10gc3RhcnRpbmcgYXQgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHRva2VuLmluZGV4KSArICddLicpO1xuICAgIH1cblxuICAgIHBhcnNlKHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcblxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb2dyYW0oKTtcblxuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIGFuIHVuZXhwZWN0ZWQgdG9rZW4nLCB0aGlzLnRva2Vuc1swXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJvZ3JhbSgpIHtcbiAgICAgICAgdmFyIHByb2dyYW0gPSBuZXcgUHJvZ3JhbU5vZGUoKTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiAwICYmICF0aGlzLnBlZWsoJ30nLCAnKScsICc7JywgJ10nKSkge1xuICAgICAgICAgICAgICAgIHByb2dyYW0uYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdCgnOycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2dyYW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHByZXNzaW9uU3RhdGVtZW50KCkge1xuICAgICAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCk7XG4gICAgICAgIGV4cC5hcHBlbmRDaGlsZCh0aGlzLmZpbHRlckNoYWluKCkpO1xuICAgICAgICByZXR1cm4gZXhwO1xuICAgIH1cblxuICAgIGZpbHRlckNoYWluKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3wnKSkge1xuICAgICAgICAgICAgbGVmdCA9IHRoaXMuZmlsdGVyKGxlZnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIGV4cHJlc3Npb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQoKTtcbiAgICB9XG5cbiAgICBpc0Fzc2lnbmFibGUoYXN0KSB7XG4gICAgICAgIHJldHVybiBhc3QudHlwZSA9PT0gQVNULklkZW50aWZpZXIgfHwgYXN0LnR5cGUgPT09IEFTVC5NZW1iZXJFeHByZXNzaW9uO1xuICAgIH1cblxuICAgIGFzc2lnbm1lbnQoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnRlcm5hcnkoKTtcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc9JykpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Fzc2lnbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFzc2lnbiBhIHZhbHVlIHRvIGEgbm9uIGwtdmFsdWUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShyZXN1bHQsIHRoaXMuYXNzaWdubWVudCgpLCAnPScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdGVybmFyeSgpIHtcbiAgICAgICAgdmFyIHRlc3QgPSB0aGlzLmxvZ2ljYWxPUigpO1xuICAgICAgICB2YXIgYWx0ZXJuYXRlO1xuICAgICAgICB2YXIgY29uc2VxdWVudDtcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc/JykpIHtcbiAgICAgICAgICAgIGFsdGVybmF0ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uc3VtZSgnOicpKSB7XG4gICAgICAgICAgICAgICAgY29uc2VxdWVudCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXN0O1xuICAgIH1cblxuICAgIGxvZ2ljYWxPUigpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmxvZ2ljYWxBTkQoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCd8fCcpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnfHwnLCBsZWZ0LCB0aGlzLmxvZ2ljYWxBTkQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgbG9naWNhbEFORCgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmVxdWFsaXR5KCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnJiYnKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJyYmJywgbGVmdCwgdGhpcy5lcXVhbGl0eSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBlcXVhbGl0eSgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnJlbGF0aW9uYWwoKTtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJz09JywgJyE9JywgJz09PScsICchPT0nKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5yZWxhdGlvbmFsKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIHJlbGF0aW9uYWwoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5hZGRpdGl2ZSgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPCcsICc+JywgJzw9JywgJz49JykpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMuYWRkaXRpdmUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgYWRkaXRpdmUoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5tdWx0aXBsaWNhdGl2ZSgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJykpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMubXVsdGlwbGljYXRpdmUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgbXVsdGlwbGljYXRpdmUoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy51bmFyeSgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKicsICcvJywgJyUnKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy51bmFyeSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICB1bmFyeSgpIHtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICBpZiAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScsICchJykpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVuYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgdGhpcy51bmFyeSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaW1hcnkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaW1hcnkoKSB7XG4gICAgICAgIHZhciBwcmltYXJ5O1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJygnKSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuZmlsdGVyQ2hhaW4oKTtcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCdbJykpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmFycmF5RGVjbGFyYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgneycpKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5vYmplY3QoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubGl0ZXJhbHMuaGFzT3duUHJvcGVydHkodGhpcy5wZWVrKCkudGV4dCkpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTGl0ZXJhbE5vZGUodGhpcy5vcHRpb25zLmxpdGVyYWxzW3RoaXMuY29uc3VtZSgpLnRleHRdKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmNvbnN0YW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ25vdCBhIHByaW1hcnkgZXhwcmVzc2lvbicsIHRoaXMucGVlaygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXh0O1xuICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCcoJywgJ1snLCAnLicpIHx8ICh0aGlzLnBlZWsoJz8nKSAmJiB0aGlzLnBlZWtBaGVhZCgxLCAnLicpKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc/JykpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5LmFsbG93TnVsbCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHQgPSB0aGlzLmV4cGVjdCgnKCcsICdbJywgJy4nKTtcblxuICAgICAgICAgICAgaWYgKG5leHQudGV4dCA9PT0gJygnKSB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5wYXJzZUFyZ3VtZW50cygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dC50ZXh0ID09PSAnWycpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuZXhwcmVzc2lvbigpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dC50ZXh0ID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuaWRlbnRpZmllcigpLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSU1QT1NTSUJMRScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmltYXJ5O1xuICAgIH1cblxuICAgIGZpbHRlcihiYXNlRXhwcmVzc2lvbikge1xuICAgICAgICB2YXIgYXJncyA9IFtiYXNlRXhwcmVzc2lvbl0sIGlkZW50aWZpZXJzID0gW3RoaXMuaWRlbnRpZmllcigpXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJy4nKSkge1xuICAgICAgICAgICAgaWRlbnRpZmllcnMucHVzaCh0aGlzLmlkZW50aWZpZXIoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwbHVzIG5hbWVzcGFjZVxuICAgICAgICB2YXIgZW50aXJlTmFtZSA9IGlkZW50aWZpZXJzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZTtcbiAgICAgICAgfSkuam9pbignLicpO1xuXG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKG5ldyBJZGVudGlmaWVyTm9kZShlbnRpcmVOYW1lKSwgYXJncyk7XG5cbiAgICAgICAgcmVzdWx0LmZpbHRlciA9IHRydWU7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCc6JykpIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHBhcnNlQXJndW1lbnRzKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnKScpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2godGhpcy5maWx0ZXJDaGFpbigpKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXIoKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY29uc3VtZSgpO1xuICAgICAgICBpZiAoIXRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgbm90IGEgdmFsaWQgaWRlbnRpZmllcicsIHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IElkZW50aWZpZXJOb2RlKHRva2VuLnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0YW50KCkge1xuICAgICAgICAvLyBUT0RPIGNoZWNrIHRoYXQgaXQgaXMgYSBjb25zdGFudFxuICAgICAgICByZXR1cm4gbmV3IExpdGVyYWxOb2RlKHRoaXMuY29uc3VtZSgpLnZhbHVlKTtcbiAgICB9XG5cbiAgICBhcnJheURlY2xhcmF0aW9uKCkge1xuICAgICAgICB2YXIgYXJyID0gbmV3IEFycmF5RXhwcmVzc2lvbk5vZGUoKTtcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ10nKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnXScpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyci5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIG9iamVjdCgpIHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBbXSwgcHJvcGVydHk7XG4gICAgICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICd9Jykge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ30nKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eU5vZGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5jb25zdGFudCgpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJzonKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSBwcm9wZXJ0eS5rZXk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygnWycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnWycpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpbnZhbGlkIGtleScsIHRoaXMucGVlaygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnR5KTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZSgnfScpO1xuXG4gICAgICAgIHJldHVybiBuZXcgT2JqZWN0RXhwcmVzc2lvbk5vZGUocHJvcGVydGllcyk7XG4gICAgfVxuXG4gICAgY29uc3VtZShlMSkge1xuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5leHBlY3QoZTEpO1xuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIHVuZXhwZWN0ZWQsIGV4cGVjdGluZyBbJyArIGUxICsgJ10nLCB0aGlzLnBlZWsoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIHBlZWtUb2tlbigpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbMF07XG4gICAgfVxuXG4gICAgcGVlayhlMSwgZTIsIGUzLCBlNCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZWVrQWhlYWQoMCwgZTEsIGUyLCBlMywgZTQpO1xuICAgIH1cblxuICAgIHBlZWtBaGVhZChpLCBlMSwgZTIsIGUzLCBlNCkge1xuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gaSkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy50b2tlbnNbaV07XG4gICAgICAgICAgICB2YXIgdCA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBpZiAodCA9PT0gZTEgfHwgdCA9PT0gZTIgfHwgdCA9PT0gZTMgfHwgdCA9PT0gZTQgfHxcbiAgICAgICAgICAgICAgICAoIWUxICYmICFlMiAmJiAhZTMgJiYgIWU0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZXhwZWN0KGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMucGVlayhlMSwgZTIsIGUzLCBlNCk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgdGhpcy50b2tlbnMuc2hpZnQoKTtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4iLCJleHBvcnQgKiBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1sZXhlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1wYXJzZXInO1xuZXhwb3J0ICogZnJvbSAnLi9leHAtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWJ1aWxkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9ldmFsdWF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9hbmFseXNlcic7IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQXJyYXlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuQXJyYXlFeHByZXNzaW9uKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IobGVmdCwgcmlnaHQsIG9wZXJhdG9yKSB7XG4gICAgICAgIHN1cGVyKEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbiAgICB9XG5cbiAgICBhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgQVNUID0ge307XG5cbkFTVC5Qcm9ncmFtID0gJ1Byb2dyYW0nO1xuQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQgPSAnRXhwcmVzc2lvblN0YXRlbWVudCc7XG5BU1QuQXNzaWdubWVudEV4cHJlc3Npb24gPSAnQXNzaWdubWVudEV4cHJlc3Npb24nO1xuQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbiA9ICdDb25kaXRpb25hbEV4cHJlc3Npb24nO1xuQVNULkxvZ2ljYWxFeHByZXNzaW9uID0gJ0xvZ2ljYWxFeHByZXNzaW9uJztcbkFTVC5CaW5hcnlFeHByZXNzaW9uID0gJ0JpbmFyeUV4cHJlc3Npb24nO1xuQVNULlVuYXJ5RXhwcmVzc2lvbiA9ICdVbmFyeUV4cHJlc3Npb24nO1xuQVNULkNhbGxFeHByZXNzaW9uID0gJ0NhbGxFeHByZXNzaW9uJztcbkFTVC5NZW1iZXJFeHByZXNzaW9uID0gJ01lbWJlckV4cHJlc3Npb24nO1xuQVNULklkZW50aWZpZXIgPSAnSWRlbnRpZmllcic7XG5BU1QuTGl0ZXJhbCA9ICdMaXRlcmFsJztcbkFTVC5BcnJheUV4cHJlc3Npb24gPSAnQXJyYXlFeHByZXNzaW9uJztcbkFTVC5Qcm9wZXJ0eSA9ICdQcm9wZXJ0eSc7XG5BU1QuT2JqZWN0RXhwcmVzc2lvbiA9ICdPYmplY3RFeHByZXNzaW9uJztcblxuZXhwb3J0IGNsYXNzIE51bGxFeHByZXNzaW9uTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJG51bGwgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBCaW5hcnlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgICAgICBzdXBlcihBU1QuQmluYXJ5RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBDYWxsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWUsIGFyZ3MpIHtcbiAgICAgICAgc3VwZXIoQVNULkNhbGxFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpIHtcbiAgICAgICAgc3VwZXIoQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xuICAgICAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuRXhwcmVzc2lvblN0YXRlbWVudCk7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcihBU1QuSWRlbnRpZmllcik7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vYXN0JztcbmV4cG9ydCAqIGZyb20gJy4vYXN0LW5vZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hc3NpZ25tZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYmluYXJ5JztcbmV4cG9ydCAqIGZyb20gJy4vY2FsbCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmRpdGlvbmFsJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwcmVzc2lvbic7XG5leHBvcnQgKiBmcm9tICcuL2lkZW50aWZpZXInO1xuZXhwb3J0ICogZnJvbSAnLi9saXRlcmFsJztcbmV4cG9ydCAqIGZyb20gICcuL2xvZ2ljYWwnO1xuZXhwb3J0ICogZnJvbSAgJy4vbWVtYmVyJztcbmV4cG9ydCAqIGZyb20gICcuL29iamVjdCc7XG5leHBvcnQgKiBmcm9tICAnLi9wcm9ncmFtJztcbmV4cG9ydCAqIGZyb20gICcuL3Byb3BlcnR5JztcbmV4cG9ydCAqIGZyb20gICcuL3VuYXJ5JztcbmV4cG9ydCAqIGZyb20gJy4vYXJyYXknOyIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIExpdGVyYWxOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIoQVNULkxpdGVyYWwpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIExvZ2ljYWxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgICAgICBzdXBlcihBU1QuTG9naWNhbEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgTWVtYmVyRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBjb21wdXRlZCkge1xuICAgICAgICBzdXBlcihBU1QuTWVtYmVyRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgICAgIHRoaXMuY29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgT2JqZWN0RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHN1cGVyKEFTVC5PYmplY3RFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgUHJvZ3JhbU5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVNULlByb2dyYW0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eU5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVNULlByb3BlcnR5KTtcbiAgICAgICAgdGhpcy5raW5kID0gJ2luaXQnO1xuICAgICAgICB0aGlzLmtleSA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbXB1dGVkID0gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIFVuYXJ5RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgYXJnKSB7XG4gICAgICAgIHN1cGVyKEFTVC5VbmFyeUV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLnByZWZpeCA9IHRydWU7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5hcmcgPSBhcmc7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgcGFyc2VPcHRpb25zID0ge1xuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlOiBmYWxzZSxcbiAgICBpc0lkZW50aWZpZXJTdGFydDogZmFsc2UsXG4gICAgbGl0ZXJhbHM6IHtcbiAgICAgICAgZmFsc2U6IGZhbHNlLFxuICAgICAgICBudWxsOiBudWxsLFxuICAgICAgICB0cnVlOiB0cnVlLFxuICAgICAgICB1bmRlZmluZWQ6IHVuZGVmaW5lZFxuICAgIH1cbn07IiwiZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUnO1xuZXhwb3J0ICogZnJvbSAnLi9vYnNlcnZlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4cCc7XG5leHBvcnQgKiBmcm9tICcuL3RwbCc7XG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZpZXcnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWNvcmF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlJzsiLCJleHBvcnQgY2xhc3MgRGVsYXllciB7XG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgdGltZW91dCkge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgICAgICB0aGlzLmRlbGF5SWQgPSBudWxsO1xuICAgIH1cblxuICAgIGV4ZWN1dGUoc2NvcGUpIHtcbiAgICAgICAgaWYodGhpcy5kZWxheUlkICE9IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZWxheUlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlbGF5SWQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLmNhbGwoc2NvcGUpO1xuICAgICAgICB9LCB0aGlzLnRpbWVvdXQpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmRlbGF5SWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlJZCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9wcm94eSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vb2JzZXJ2ZXInOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEV2YWx1YXRvciwgQW5hbHlzZXIgfSBmcm9tICcuLi9leHAnO1xuaW1wb3J0IHsgV2F0Y2hlciB9IGZyb20gJy4vd2F0Y2hlcic7XG5pbXBvcnQgeyBEZWxheWVyIH0gZnJvbSAnLi9kZWxheWVyJztcblxuY2xhc3MgTGlzdGVuZXIge1xuICAgIGNvbnN0cnVjdG9yKGV4cCwgaGFuZGxlciwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0TmV3VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0Q29sbGVjdGlvbkNoYW5nZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVDaGFuZ2VkIHx8IHRoaXMuY29sbGVjdGlvbkNoYW5nZWQ7XG4gICAgfVxuXG4gICAgbm90aWZ5KHNjb3BlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMubmV3VmFsdWUsXG4gICAgICAgICAgICBjb2xsZWN0aW9uQ2hhbmdlZCA9IHRoaXMuY29sbGVjdGlvbkNoYW5nZWQ7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubmV3VmFsdWU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhbmRsZXIuY2FsbChzY29wZSwge1xuICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgY29sbGVjdGlvbkNoYW5nZWQ6IGNvbGxlY3Rpb25DaGFuZ2VkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuYWNjZXNzb3JzID0ge307XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMud2F0Y2hlciA9IG5ldyBXYXRjaGVyKCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZXIgPSBuZXcgQW5hbHlzZXIoc2NvcGUuJHBhcnNlcik7XG4gICAgICAgIHRoaXMuZGVsYXllciA9IG5ldyBEZWxheWVyKHRoaXMubm90aWZ5LCAxNik7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCB2YWx1ZSkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBuZXcgTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICAgIGlmKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeSgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICBpZihsaXN0ZW5lci5oYXNDaGFuZ2UoKSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLm5vdGlmeSh0aGlzLnNjb3BlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5Q2hhbmdlKGxpc3RlbmVyLCBuZXdWYWx1ZSkge1xuICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnNldENvbGxlY3Rpb25DaGFuZ2VkKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsYXllci5leGVjdXRlKHRoaXMpO1xuICAgIH1cblxuICAgIGdldEFjY2Vzc29yKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5hY2Nlc3NvcnNbZXhwXTtcblxuICAgICAgICBpZighcmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VyLmFuYWx5c2UoZXhwKTtcbiAgICAgICAgICAgIHRoaXMuYWNjZXNzb3JzW2V4cF0gPSByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXRpbHMuY29weSh0cnVlLCByZXN1bHQpO1xuICAgIH1cblxuICAgIHdhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGFjY2Vzc29yID0gdGhpcy5nZXRBY2Nlc3NvcihleHApO1xuICAgICAgICB2YXIgZXZhbHVhdG9yID0gIG5ldyBFdmFsdWF0b3IodGhpcy5zY29wZSwgeyBhbGxvd051bGw6IHRydWUsIGxvY2FsczogbG9jYWxzIH0pO1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUxpc3RlbmVyKGV4cCwgaGFuZGxlciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCkpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVud2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3JzKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKGFjY2Vzc29ycywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihpdGVtLnVud2F0Y2gpKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udW53YXRjaC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2ggPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB3YXRjaEFjY2Vzc29ycyhhY2Nlc3NvcnMsIHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCF1dGlscy5pc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKGFjY2Vzc29ycywgZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSB0YXJnZXQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5leHApIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gZXZhbHVhdG9yLmV2YWx1YXRlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodmFsdWVzID09PSBzZWxmLnNjb3BlICYmIGxvY2FscyAmJiBsb2NhbHNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBsb2NhbHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbS51bndhdGNoID0gc2VsZi53YXRjaGVyLndhdGNoKHZhbHVlcywga2V5LCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICB3YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuLCBhcmdzLmRhdGEubmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGlmeUNoYW5nZShsaXN0ZW5lciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbiwgdmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB3YXRjaEFjY2Vzc29ycyhhY2Nlc3NvciwgdGhpcy5zY29wZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVud2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3IpO1xuICAgICAgICAgICAgc2VsZi5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgd2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIGV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3IodGhpcy5zY29wZSwgeyBhbGxvd051bGw6IHRydWUsIGxvY2FsczogbG9jYWxzIH0pO1xuICAgICAgICB2YXIgdW53YXRjaFByb3BzID0gd2F0Y2hQcm9wcygpO1xuICAgICAgICB2YXIgdW53YXRjaEV4cCA9IHRoaXMud2F0Y2goZXhwLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodW53YXRjaFByb3BzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVud2F0Y2hQcm9wcyA9IHdhdGNoUHJvcHMoKTtcbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgbG9jYWxzKTtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5jcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIGV2YWx1YXRvci5ldmFsdWF0ZShleHApKTtcblxuICAgICAgICBmdW5jdGlvbiB3YXRjaFByb3BzKCkge1xuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBldmFsdWF0b3IuZXZhbHVhdGUoZXhwKTtcblxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbGxlY3Rpb24pIHx8IHV0aWxzLmlzQXJyYXkoY29sbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi53YXRjaGVyLndhdGNoKGNvbGxlY3Rpb24sICcqJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGlmeUNoYW5nZShsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdW53YXRjaEV4cC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdW53YXRjaFByb3BzICYmIHVud2F0Y2hQcm9wcy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgc2VsZi5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5kZWxheWVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy53YXRjaGVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgfVxufSIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG52YXIgaXNQcm94eVN5bWJvbCA9IFN5bWJvbCgnX19pc1Byb3h5JyksXG4gICAgdGFyZ2V0U3ltYm9sID0gU3ltYm9sKCdfX3RhcmdldCcpO1xuXG52YXIgaGFuZGxlciA9IHtcbiAgICBnZXQ6IGdldFByb3h5LFxuICAgIHNldDogc2V0UHJveHlcbn07XG5cbi8vIGV4dGVuZHMgb2JqZWN0IHByb3RvdHlwZSwgYWRkIGZ1bmN0aW9uIHRvUHJveHlcbi8vIE9iamVjdC5wcm90b3R5cGUudG9Qcm94eSA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICByZXR1cm4gaXNQcm94eSh0aGlzKSA/IHRoaXMgOiBuZXcgUHJveHkodGhpcywgaGFuZGxlcik7XG4vLyB9O1xuXG5mdW5jdGlvbiBpc1Byb3h5KHByb3h5KSB7XG4gICAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHByb3h5KSAmJiBwcm94eVtpc1Byb3h5U3ltYm9sXTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHByb3h5KSB7XG4gICAgcmV0dXJuIGlzUHJveHkocHJveHkpID8gcHJveHlbdGFyZ2V0U3ltYm9sXSA6IHByb3h5O1xufVxuXG5mdW5jdGlvbiBtYWtlUHJveHkodmFsdWUpIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QodmFsdWUpICYmICFpc1Byb3h5KHZhbHVlKSkge1xuICAgICAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoaXRlbSwga2V5KSB7XG4gICAgICAgICAgICB2YWx1ZVtrZXldID0gbWFrZVByb3h5KGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZSwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRQcm94eSh0YXJnZXQsIGtleSkge1xuICAgIGlmIChrZXkgPT09IGlzUHJveHlTeW1ib2wpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gdGFyZ2V0U3ltYm9sKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xufVxuXG5mdW5jdGlvbiBzZXRQcm94eSh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBnZXRUYXJnZXQodGFyZ2V0W2tleV0pLFxuICAgICAgICBuZXdWYWx1ZSA9IGdldFRhcmdldCh2YWx1ZSk7XG5cbiAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gbWFrZVByb3h5KHZhbHVlKTtcbiAgICAgICAgZXZlbnRzLnByb3BlcnR5Q2hhbmdlZC5maXJlKHtcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGFyZ2V0W2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7XG4gICAgaXNQcm94eSxcbiAgICBnZXRUYXJnZXQsXG4gICAgaGFuZGxlclxufSIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgZ2V0VGFyZ2V0IH0gZnJvbSAnLi9wcm94eSc7XG5cbmNsYXNzIE9iamVjdExpc3RlbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMua2V5cyA9IHt9O1xuICAgIH1cblxuICAgIGdldEhhbmRsZXJzKGtleSkge1xuICAgICAgICBpZiAoIXRoaXMua2V5c1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLmtleXNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMua2V5c1trZXldO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyS2V5KGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XG4gICAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgdW5yZWdpc3RlcktleShrZXksIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xuXG4gICAgICAgIGlmIChoYW5kbGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIGhhbmRsZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVLZXkoa2V5LCBhcmdzLCBzZWxmKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcbiAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbChzZWxmLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2F0Y2hlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMub2ZmUHJvcGVydHlDaGFuZ2VkID0gZXZlbnRzLnByb3BlcnR5Q2hhbmdlZC5vbihlID0+IHRoaXMuaGFuZGxlUHJvcGVydHlDaGFuZ2VkKGUuZGF0YSkpO1xuICAgIH1cblxuICAgIGhhbmRsZVByb3BlcnR5Q2hhbmdlZChkYXRhKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIodGhpcy5saXN0ZW5lcnMsIGRhdGEudGFyZ2V0KTtcblxuICAgICAgICBpZiAobGlzdGVuZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGlzdGVuZXIuZmlyZUtleShkYXRhLmtleSwgZGF0YSk7XG4gICAgICAgICAgICBsaXN0ZW5lci5maXJlS2V5KCcqJywgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIsIGZpbHRlcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGFyZ2V0ID09PSB0YXJnZXQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gZmlsdGVyc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBuZXcgT2JqZWN0TGlzdGVuZXIodGFyZ2V0KTtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgZ2V0T3JDcmVhdGVMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldExpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KTtcblxuICAgICAgICBpZiAobGlzdGVuZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICB3YXRjaCh0YXJnZXQsIGtleSwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0T3JDcmVhdGVMaXN0ZW5lcih0aGlzLmxpc3RlbmVycywgZ2V0VGFyZ2V0KHRhcmdldCkpO1xuXG4gICAgICAgIGxpc3RlbmVyLnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGlzdGVuZXIudW5yZWdpc3RlcktleShrZXksIGFjdGlvbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5vZmZQcm9wZXJ0eUNoYW5nZWQoKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgRXhwcmVzc2lvbiB9IGZyb20gJy4vZXhwcmVzc2lvbic7XG5cbmV4cG9ydCBjbGFzcyBCaW5kaW5nIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgdGV4dCwgbG9jYWxzKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XG4gICAgICAgIC8vIGlzIHRydWUsIGJpbmRpbmcgdGV4dCBpcyBhIGV4cHJlc3Npb25cbiAgICAgICAgdGhpcy5pc0V4cCA9IGZhbHNlO1xuICAgICAgICAvLyBpZiB0cnVlLCBiaW5kaW5nIHRleHQgaXMgYSBsb2dpY2FsIGV4cHJlc3Npb25cbiAgICAgICAgdGhpcy5sb2dpY2FsID0gZmFsc2U7XG4gICAgICAgIC8vIGlmIHRydWUsIGJpbmRpbmcgdGV4dCBpcyBhIGFzc2lnbm1lbnQgZXhwcmVzc2lvblxuICAgICAgICB0aGlzLmFzc2lnbm1lbnQgPSBmYWxzZTtcbiAgICAgICAgLy8gaGFuZGxlciB0byB1cGRhdGUgdmlldyBmcm9tIG1vZGVsIHZhbHVlXG4gICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucyA9IFtdO1xuICAgIH1cblxuICAgIGNyZWF0ZUV4cHJlc3Npb24odGV4dCkge1xuICAgICAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb24odGV4dCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMucHVzaChleHApO1xuICAgICAgICByZXR1cm4gZXhwO1xuICAgIH1cblxuICAgIGNvbXBpbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvZ2ljYWwgfHwgdGhpcy5hc3NpZ25tZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlzRXhwID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzRXhwKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUV4cHJlc3Npb24odGhpcy50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gL3t7KFtefV0qKX19L2c7XG4gICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgICAgICAgICB2YXIgc2VnbWVudCwgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy50ZXh0KTtcblxuICAgICAgICAgICAgd2hpbGUgKG1hdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2guaW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudCA9IHRoaXMudGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2godGhpcy5jcmVhdGVFeHByZXNzaW9uKG1hdGNoWzFdKSk7XG5cbiAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0aGlzLnRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0Lmxlbmd0aCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSB0aGlzLnRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGluaygpIHtcbiAgICAgICAgaWYgKHRoaXMuYXNzaWdubWVudCB8fCB0aGlzLmxvZ2ljYWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGV0ZWN0KCk7XG5cbiAgICAgICAgdGhpcy5leHByZXNzaW9ucy5mb3JFYWNoKGV4cCA9PiB7XG4gICAgICAgICAgICBleHAud2F0Y2godGhpcy5zY29wZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXRjaCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5sb2NhbHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmFzc2lnbm1lbnQgfHwgdGhpcy5sb2dpY2FsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMuY29tcHV0ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXQgdmFsdWVcbiAgICBjb21wdXRlKGxvY2Fscykge1xuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLmxvY2FscywgbG9jYWxzKTtcblxuICAgICAgICBpZiAodGhpcy5pc0V4cCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbnNbMF0uY29tcHV0ZSh0aGlzLnNjb3BlLCBsb2NhbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHMucmVkdWNlKChwcmV2LCBjdXIpID0+IHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjdXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXYgKyBjdXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpdCBpcyBhIGV4cHJlc3Npb25cbiAgICAgICAgICAgIHJldHVybiBwcmV2ICsgKGN1ci5jb21wdXRlKHRoaXMuc2NvcGUsIGxvY2FscykgfHwgJycpO1xuICAgICAgICB9LCAnJyk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlXG4gICAgYXNzaWduKHZhbHVlLCBsb2NhbHMpIHtcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy5sb2NhbHMsIGxvY2Fscyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFeHApIHtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNbMF0uYXNzaWduKHRoaXMuc2NvcGUsIHZhbHVlLCBsb2NhbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudGV4dCArICcgaXMgbm90IHZhbGlkIGV4cHJlc3Npb24nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyQXV0b21hdGlvbihhdXRvbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IGF1dG9tYXRpb247XG4gICAgfVxuXG4gICAgdW5yZWdpc3RlckF1dG9tYXRpb24oYXV0b21hdGlvbikge1xuICAgICAgICBpZiAodGhpcy5hdXRvbWF0aW9uID09PSBhdXRvbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9tYXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbW9kaWZ5IHZpZXcgYWNjb3JkaW5nIHRvIG1vZGVsXG4gICAgcGF0Y2goKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZWQgJiYgdGhpcy5hdXRvbWF0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hdXRvbWF0aW9uLmNhbGwodGhpcywgdGhpcy52YWx1ZSwgdGhpcy5vbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zLmZvckVhY2goZXhwID0+IHtcbiAgICAgICAgICAgIGV4cC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgRXhwcmVzc2lvbiB7XG4gICAgY29uc3RydWN0b3IodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBudWxsO1xuICAgICAgICB0aGlzLmhhc1RyYW5zbGF0aW9uID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlXG4gICAgY29tcHV0ZShzY29wZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiBzY29wZS4kZXZhbCh0aGlzLnRleHQsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlXG4gICAgYXNzaWduKHNjb3BlLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHNjb3BlLiRhc3NpZ24odGhpcy50ZXh0LCB2YWx1ZSwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICB3YXRjaChzY29wZSwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IHNjb3BlLiR3YXRjaCh0aGlzLnRleHQsIGhhbmRsZXIsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYodGhpcy51bndhdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudW53YXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL2V4cHJlc3Npb24nO1xuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcic7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5pbXBvcnQgeyBpc1ZUZXh0LCBpc1ZDb21tZW50LCBpc1ZFbG0gfSBmcm9tICcuLi90cGwnO1xuaW1wb3J0IHsgTG9jYWwgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xuaW1wb3J0IHsgTV9DTVBfQ0xBU1MgfSBmcm9tICcuLi9jc3MnO1xuaW1wb3J0IHsgU2luZ2xlTm9kZVZpZXcsIE11bHRpcGxlTm9kZVZpZXcgfSBmcm9tICcuL3ZpZXcnO1xuXG4vLyBXaW5kb3cgRXZlbnRzXG4vLyBjYXNlICdvbi1sb2FkJzpcbi8vIGNhc2UgJ29uLXVubG9hZCc6XG4vLyBGb3JtIEVsZW1lbnQgRXZlbnRzXG4vLyBjYXNlICdvbi1jaGFuZ2UnOlxuLy8gY2FzZSAnb24tc3VibWl0Jzpcbi8vIGNhc2UgJ29uLXJlc2V0Jzpcbi8vIGNhc2UgJ29uLXNlbGVjdCc6XG4vLyBjYXNlICdvbi1ibHVyJzpcbi8vIGNhc2UgJ29uLWZvY3VzJzpcbi8vIEltYWdlIEV2ZW50c1xuLy8gY2FzZSAnb24tYWJvcnQnOlxuLy8gS2V5Ym9hcmQgRXZlbnRzXG4vLyBjYXNlICdvbi1rZXlkb3duJzpcbi8vIGNhc2UgJ29uLWtleXByZXNzJzpcbi8vIGNhc2UgJ29uLWtleXVwJzpcbi8vIE1vdXNlIEV2ZW50c1xuLy8gY2FzZSAnb24tY2xpY2snOlxuLy8gY2FzZSAnb24tZGJsY2xpY2snOlxuLy8gY2FzZSAnb24tbW91c2Vkb3duJzpcbi8vIGNhc2UgJ29uLW1vdXNlbW92ZSc6XG4vLyBjYXNlICdvbi1tb3VzZW91dCc6XG4vLyBjYXNlICdvbi1tb3VzZW92ZXInOlxuLy8gY2FzZSAnb24tbW91c2V1cCc6XG52YXIgZXZlbnRUZXh0ID0gJ2xvYWQgdW5sb2FkIGNoYW5nZSBzdWJtaXQgcmVzZXQgc2VsZWN0IGJsdXIgZm9jdXMgYWJvcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwJztcbnZhciBkb21FdmVudHMgPSBldmVudFRleHQuc3BsaXQoJyAnKTtcblxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICBnZXQgaW5qZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLiRpbmplY3RvcjtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgbG9jYWxzKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XG4gICAgICAgIHRoaXMucGFyc2VyID0gc2NvcGUuJHBhcnNlcjtcbiAgICAgICAgdGhpcy52aWV3ID0gbnVsbDtcbiAgICB9XG5cbiAgICBuZXdCaW5kaW5nKHRleHQpIHtcbiAgICAgICAgdmFyIGJpbmRpbmcgPSBuZXcgQmluZGluZyh0aGlzLnNjb3BlLCB0ZXh0LCB0aGlzLmxvY2Fscyk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kaW5ncy5wdXNoKGJpbmRpbmcpO1xuICAgICAgICByZXR1cm4gYmluZGluZztcbiAgICB9XG5cbiAgICBuZXdDb21wb25lbnQoY2xzKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMuaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGNscyk7XG5cbiAgICAgICAgdGhpcy5zY29wZS4kYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB0aGlzLnZpZXcuY29tcG9uZW50cy5wdXNoKGNoaWxkKTtcblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgbmV3RGlyZWN0aXZlKGNscykge1xuICAgICAgICB2YXIgZGlyZWN0aXZlID0gdGhpcy5pbmplY3Rvci5jcmVhdGVEaXJlY3RpdmUoY2xzKTtcblxuICAgICAgICBkaXJlY3RpdmUuJCRzY29wZSA9IHRoaXMuc2NvcGU7XG5cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICB9XG5cbiAgICByZWNvZ25pemVDb21wb25lbnQodmVsbSkge1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5wYXJzZXIucmVzb2x2ZUNvbXBvbmVudCh2ZWxtLm5vZGVOYW1lKTtcblxuICAgICAgICAvLyB2ZWxtLm5vZGVEYXRhLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmVjb2duaXplRGlyZWN0aXZlKHZhdHRyKSB7XG4gICAgICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLnBhcnNlci5yZXNvbHZlRGlyZWN0aXZlKHZhdHRyLm5vZGVEYXRhLm5hbWUpO1xuXG4gICAgICAgIC8vIHZhdHRyLm5vZGVEYXRhLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuXG4gICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgfVxuXG4gICAgcmVuZGVyKHRlbXBsYXRlLCBjb250YWluZXIpIHtcbiAgICAgICAgdmFyIGhhc0NvbnRhaW5lciA9IGNvbnRhaW5lciAhPSBudWxsO1xuXG4gICAgICAgIGlmKGhhc0NvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy52aWV3ID0gbmV3IFNpbmdsZU5vZGVWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBtdXN0IHNldCBhIHJvb3QgZWxlbWVudCBmb3IgZGlyZWN0aXZlIGxpZmUgY3ljbGUgXCJhZnRlckxpbmtcIiBob29wc1xuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgdGhpcy52aWV3ID0gbmV3IE11bHRpcGxlTm9kZVZpZXcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmlldy52bm9kZXMgPSB0aGlzLnBhcnNlci5wYXJzZVRlbXBsYXRlKHRlbXBsYXRlKTtcblxuICAgICAgICB0aGlzLmNvbXBpbGVOb2Rlcyh0aGlzLnZpZXcudm5vZGVzKTtcblxuICAgICAgICAvLyB0aGlzLmVudGl0eS5kaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS4kcHJlbGluaygpKTtcblxuICAgICAgICB0aGlzLmxpbmtOb2Rlcyh0aGlzLnZpZXcudm5vZGVzKS5mb3JFYWNoKG5vZGUgPT4gY29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpKTtcblxuICAgICAgICAvLyBjYWxsIGRpcmVjdGl2ZSBsaWZlIGN5Y2xlIGhvb3BzXG4gICAgICAgIHRoaXMudmlldy5kaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS4kcG9zdGxpbmsoKSk7XG5cbiAgICAgICAgaWYoaGFzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcubm9kZSA9IGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNhY2hlIHRoZSBnZW5lcmF0ZWQgZWxlbWVudHNcbiAgICAgICAgICAgIGRvbS5nZXRDaGlsZHJlbk9mRWxlbWVudChjb250YWluZXIpLmZvckVhY2gobm9kZSA9PiB0aGlzLnZpZXcubm9kZXMucHVzaChub2RlKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy52aWV3O1xuICAgIH1cblxuICAgIGNvbXBpbGVOb2Rlcyh2bm9kZXMpIHtcbiAgICAgICAgdm5vZGVzLmZvckVhY2godm5vZGUgPT4gdGhpcy5jb21waWxlTm9kZSh2bm9kZSkpO1xuICAgIH1cblxuICAgIGNvbXBpbGVOb2RlKHZub2RlKSB7XG4gICAgICAgIGlmIChpc1ZUZXh0KHZub2RlKSkge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlVGV4dCh2bm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpc1ZDb21tZW50KHZub2RlKSl7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVDb21tZW50KHZub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUVsbSh2bm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rTm9kZXModm5vZGVzKSB7XG4gICAgICAgIHJldHVybiB2bm9kZXMubWFwKHZub2RlID0+IHRoaXMubGlua05vZGUodm5vZGUpKTtcbiAgICB9XG5cbiAgICBsaW5rTm9kZSh2bm9kZSkge1xuICAgICAgICBpZiAoaXNWVGV4dCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtUZXh0KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzVkNvbW1lbnQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rQ29tbWVudCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5saW5rRWxtKHZub2RlKTtcbiAgICB9XG5cbiAgICBjb21waWxlRWxtKHZlbG0pIHtcbiAgICAgICAgdmFyIGVsbURhdGEgPSB2ZWxtLm5vZGVEYXRhO1xuXG4gICAgICAgIGVsbURhdGEuY29tcG9uZW50ID0gdGhpcy5yZWNvZ25pemVDb21wb25lbnQodmVsbSk7XG5cbiAgICAgICAgdmFyIGRpcmVjdGl2ZXMgPSBbXTtcbiAgICAgICAgdmFyIGN1c3RvbUxpbmtlciA9IHZlbG0udmF0dHJzLnNvbWUodmF0dHIgPT4ge1xuICAgICAgICAgICAgdmFyIGF0dHJEYXRhID0gdmF0dHIubm9kZURhdGE7XG5cbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUF0dHIodmF0dHIpO1xuXG4gICAgICAgICAgICBpZiAoYXR0ckRhdGEuZGlyZWN0aXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzLnB1c2goYXR0ckRhdGEuZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICBlbG1EYXRhLmxpbmtlciA9IGF0dHJEYXRhLmxpbmtlcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtRGF0YS5saW5rZXIgIT0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzb3J0IGRpcmVjdGl2ZSBhY2NvcmRpbmcgdG8gaXRzIHByaW9yaXR5XG4gICAgICAgIHV0aWxzLm9yZGVyQnkoZGlyZWN0aXZlcywgZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS4kcHJpb3JpdHkpLmZvckVhY2goZGlyZWN0aXZlID0+IHRoaXMudmlldy5kaXJlY3RpdmVzLnB1c2goZGlyZWN0aXZlKSk7XG5cbiAgICAgICAgZWxtRGF0YS5kaXJlY3RpdmVzID0gZGlyZWN0aXZlcztcblxuICAgICAgICAvLyBkaXJlY3RpdmUgZGVmaW5lcyBjdXN0b20gbGlua2VyIGZvciB0aGlzIHZpcnR1YWwgbm9kZSwgcmVuZGVyIGVuZ2luZSB3aWxsIG5vdCByZW5kZXIgaXQgYWNjb3JkaW5nIHRvIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgaWYgKGN1c3RvbUxpbmtlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsbURhdGEuY29tcG9uZW50KSB7XG4gICAgICAgICAgICBlbG1EYXRhLnNsb3RzID0gdGhpcy5zZWVrU2xvdCh2ZWxtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZU5vZGVzKHZlbG0uY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21waWxlQXR0cih2YXR0cikge1xuICAgICAgICB2YXIgYXR0ck5hbWUgPSB2YXR0ci5ub2RlTmFtZSwgYXR0clZhbHVlID0gdmF0dHIubm9kZVZhbHVlLFxuICAgICAgICAgICAgYXR0ckRhdGEgPSB2YXR0ci5ub2RlRGF0YSwgYmluZGluZztcblxuICAgICAgICBpZihhdHRyVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgYmluZGluZyA9IHRoaXMubmV3QmluZGluZyhhdHRyVmFsdWUpO1xuICAgICAgICAgICAgYXR0ckRhdGEuYmluZGluZyA9IGJpbmRpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnQCcpKSB7XG4gICAgICAgICAgICBhdHRyRGF0YS5pc0V2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGF0dHJEYXRhLm5hbWUgPSBhdHRyTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBhdHRyRGF0YS5pc0RvbUV2ZW50ID0gdXRpbHMuc29tZShkb21FdmVudHMsIGUgPT4gZSA9PT0gYXR0ckRhdGEubmFtZSk7XG4gICAgICAgICAgICBiaW5kaW5nICYmIChiaW5kaW5nLmxvZ2ljYWwgPSB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCc6JykpIHtcbiAgICAgICAgICAgIGF0dHJEYXRhLm5hbWUgPSBhdHRyTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBiaW5kaW5nICYmIChiaW5kaW5nLmlzRXhwID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnKicpKSB7XG4gICAgICAgICAgICBhdHRyRGF0YS5kaXJlY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYXR0ckRhdGEubmFtZSA9IGF0dHJOYW1lLnN1YnN0cigxKTtcbiAgICAgICAgICAgIGJpbmRpbmcgJiYgKGJpbmRpbmcuaXNFeHAgPSB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dHJEYXRhLm5hbWUgPSBhdHRyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRyRGF0YS5kaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLnJlY29nbml6ZURpcmVjdGl2ZSh2YXR0cik7XG5cbiAgICAgICAgICAgIGlmIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBhdHRyRGF0YS5kaXJlY3RpdmUgPSB0aGlzLm5ld0RpcmVjdGl2ZShkaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgIGF0dHJEYXRhLmRpcmVjdGl2ZS4kJHZhdHRyID0gdmF0dHI7XG5cbiAgICAgICAgICAgICAgICBpZihiaW5kaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZy5hc3NpZ25tZW50ID0gYXR0ckRhdGEuZGlyZWN0aXZlLiRhc3NpZ25tZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhdHRyRGF0YS5kaXJlY3RpdmUuJGNvbXBpbGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRyRGF0YS5saW5rZXIgPSBhdHRyRGF0YS5kaXJlY3RpdmU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpcmVjdGl2ZSAnICsgYXR0ckRhdGEubmFtZSArICcgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGJpbmRpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEoYXR0ckRhdGEuaXNFdmVudCB8fCBhdHRyRGF0YS5kaXJlY3RpdmUpKSB7XG4gICAgICAgICAgICB2YXIgc2V0SHRtbEF0dHIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxtID0gdmF0dHIudmVsbS5lbG07XG5cbiAgICAgICAgICAgICAgICBpZiAoYXR0ckRhdGEubmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KGVsbSwgYXR0ckRhdGEubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShhdHRyRGF0YS5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHZhdHRyLnZlbG0ubm9kZURhdGEuY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnQgPSB2YXR0ci52ZWxtLm5vZGVEYXRhLmNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5TmFtZSA9IHV0aWxzLmNvbnZlcnRUb0h1bXBOYW1lKGF0dHJEYXRhLm5hbWUsICctJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC4kaGFzUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LiRzZXRQcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEh0bWxBdHRyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oc2V0SHRtbEF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYmluZGluZy5jb21waWxlKCk7XG4gICAgfVxuXG4gICAgY29tcGlsZVRleHQodnRleHQpIHtcbiAgICAgICAgdnRleHQubm9kZURhdGEuYmluZGluZyA9IHRoaXMubmV3QmluZGluZyh2dGV4dC5ub2RlVmFsdWUpO1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBlbG0sIG5ld1RleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodnRleHQucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZ0ZXh0LmVsbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbSA9IHZ0ZXh0LmVsbS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsbSA9IHZ0ZXh0LnBhcmVudE5vZGUuZWxtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodnRleHQuZWxtID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLmFwcGVuZENoaWxkKG5ld1RleHROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbS5yZXBsYWNlRWxlbWVudCh2dGV4dC5lbG0sIG5ld1RleHROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZ0ZXh0LmVsbSA9IG5ld1RleHROb2RlO1xuICAgICAgICB9KTtcbiAgICAgICAgdnRleHQubm9kZURhdGEuYmluZGluZy5jb21waWxlKCk7XG4gICAgfVxuXG4gICAgY29tcGlsZUNvbW1lbnQodmNtbnQpIHtcblxuICAgIH1cblxuICAgIGxpbmtFbG0odmVsbSkge1xuICAgICAgICB2YXIgZWxtRGF0YSA9IHZlbG0ubm9kZURhdGE7XG5cbiAgICAgICAgaWYgKGVsbURhdGEubGlua2VyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBlbG1EYXRhLmxpbmtlci4kbGluaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmVsbS5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZlbG0ubm9kZU5hbWUpO1xuXG4gICAgICAgIGlmIChlbG1EYXRhLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5uZXdDb21wb25lbnQoZWxtRGF0YS5jb21wb25lbnQpO1xuXG4gICAgICAgICAgICBlbG1EYXRhLmNvbXBvbmVudCA9IGluc3RhbmNlO1xuXG4gICAgICAgICAgICBkb20uYWRkQ2xhc3ModmVsbS5lbG0sIE1fQ01QX0NMQVNTKTtcblxuICAgICAgICAgICAgdmVsbS52YXR0cnMuZm9yRWFjaCh2YXR0ciA9PiB0aGlzLmxpbmtBdHRyKHZhdHRyKSk7XG5cbiAgICAgICAgICAgIGluc3RhbmNlLiQkdmVsbSA9IHZlbG07XG4gICAgICAgICAgICBpbnN0YW5jZS4kc2VyQ29udGFpbmVyKHZlbG0uZWxtKTtcbiAgICAgICAgICAgIGluc3RhbmNlLiRzZXRTbG90KGVsbURhdGEuc2xvdHMpO1xuICAgICAgICAgICAgaW5zdGFuY2UuJHJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmVsbS52YXR0cnMuZm9yRWFjaCh2YXR0ciA9PiB0aGlzLmxpbmtBdHRyKHZhdHRyKSk7XG4gICAgICAgICAgICB2ZWxtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB2ZWxtLmVsbS5hcHBlbmRDaGlsZCh0aGlzLmxpbmtOb2RlKGNoaWxkKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlbG0uZWxtO1xuICAgIH1cblxuICAgIGxpbmtBdHRyKHZhdHRyKSB7XG4gICAgICAgIHZhciB2ZWxtID0gdmF0dHIudmVsbSxcbiAgICAgICAgICAgIGVsbSA9IHZlbG0uZWxtLFxuICAgICAgICAgICAgYXR0ckRhdGEgPSB2YXR0ci5ub2RlRGF0YSxcbiAgICAgICAgICAgIGJpbmRpbmcgPSBhdHRyRGF0YS5iaW5kaW5nO1xuXG4gICAgICAgIGlmKGJpbmRpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0dHJEYXRhLmlzRXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChhdHRyRGF0YS5pc0RvbUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoYXR0ckRhdGEubmFtZSwgZSA9PiBiaW5kaW5nLmNvbXB1dGUobmV3IExvY2FsKGUsIGVsbSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZlbG0ubm9kZURhdGEuY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IHV0aWxzLmNvbnZlcnRUb0h1bXBOYW1lKGF0dHJEYXRhLm5hbWUsICctJyk7XG4gICAgICAgICAgICAgICAgdmVsbS5ub2RlRGF0YS5jb21wb25lbnQuJGJpbmQoZXZlbnROYW1lLCBlID0+IGJpbmRpbmcuY29tcHV0ZShuZXcgTG9jYWwoZSwgZWxtKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYmluZGluZy5saW5rKCk7XG4gICAgICAgICAgICBiaW5kaW5nLnBhdGNoKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZWdpc3RlciBiaW5kaW5nIGNoYW5nZSBoYW5kbGVyIGFmdGVyIGZpcnN0IHBhdGNoXG4gICAgICAgIGlmKGF0dHJEYXRhLmRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4gYXR0ckRhdGEuZGlyZWN0aXZlLiRjaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rVGV4dCh2dGV4dCkge1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLmxpbmsoKTtcbiAgICAgICAgdnRleHQuZWxtID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodnRleHQubm9kZURhdGEuYmluZGluZy52YWx1ZSk7XG4gICAgICAgIHJldHVybiB2dGV4dC5lbG07XG4gICAgfVxuXG4gICAgbGlua0NvbW1lbnQodmNtbnQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodmNtbnQubm9kZVZhbHVlKTtcbiAgICB9XG5cbiAgICBzZWVrU2xvdCh2ZWxtKSB7XG4gICAgICAgIHZhciBzbG90cyA9IHt9O1xuXG4gICAgICAgIHZlbG0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGlmKGlzVkVsbShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xvdCA9IGNoaWxkLmdldEF0dHIoJ3Nsb3QnKTtcblxuICAgICAgICAgICAgICAgIGlmKHNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xvdHNbc2xvdC5ub2RlVmFsdWVdID0gY2hpbGQuZ2V0SW5uZXJUcGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAgc2xvdHM7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi4vY29yZSc7XHJcblxyXG5jbGFzcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudm5vZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBldmVudHMucmVmcmVzaFZpZXcub24oKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdW50KHNlbGVjdG9yT3JFbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzZWxlY3Rvck9yRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJpbmRpbmdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJpbmRpbmdzLmZvckVhY2goYmluZGluZyA9PiB7XHJcbiAgICAgICAgICAgIGJpbmRpbmcuZGV0ZWN0KCk7XHJcbiAgICAgICAgICAgIGJpbmRpbmcucGF0Y2goKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChpdGVtID0+IGl0ZW0uJGRlc3Ryb3koKSk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVzLmZvckVhY2goaXRlbSA9PiBpdGVtLiRkZXN0cm95KCkpO1xyXG4gICAgICAgIHRoaXMuYmluZGluZ3MuZm9yRWFjaChpdGVtID0+IGl0ZW0uZGVzdHJveSgpKTtcclxuICAgICAgICB0aGlzLnZub2Rlcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5kZXN0cm95KCkpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZXMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmJpbmRpbmdzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy52bm9kZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpbmdsZU5vZGVWaWV3IGV4dGVuZHMgVmlldyB7XHJcbiAgICBnZXQgY29udGVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE11bHRpcGxlTm9kZVZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuICAgIGdldCBjb250ZW50KCkge1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaChub2RlID0+IGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSkpO1xyXG4gICAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm5vZGVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcblxyXG5Ac2VydmljZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdodHRwJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlWEhSKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQcm9taXNlKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFVybFBhcmFtKHVybCwgbmFtZSwgdmFsdWUpIHtcclxuICAgICAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKTtcclxuICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEh0dHBSZXF1ZXN0SGVhZGVycyh4aHIsIGNvbmZpZykge1xyXG4gICAgICAgIHV0aWxzLmZvckVhY2goY29uZmlnLmhlYWRlcnMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIGtleSA9IHV0aWxzLmNvbnZlcnRGcm9tSHVtcE5hbWUoa2V5LCAnLScpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIdHRwUmVzcG9uc2VIZWFkZXJzKGhlYWRlcnMpIHtcclxuICAgICAgICB2YXIgcGFyc2VkID0ge307XHJcblxyXG4gICAgICAgIGlmICghaGVhZGVycykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGtleSwgdmFsLCBpO1xyXG5cclxuICAgICAgICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiAobGluZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xyXG4gICAgICAgICAgICBrZXkgPSBsaW5lLnN1YnN0cigwLCBpKS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgdmFsID0gbGluZS5zdWJzdHIoaSArIDEpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcGFyc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkVXJsKHVybCwgY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmRhdGEgIT0gbnVsbCAmJiBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCkgPT09ICdnZXQnKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2goY29uZmlnLmRhdGEsIGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hZGRVcmxQYXJhbSh1cmwsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdChjb25maWcpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gc2VsZi5jcmVhdGVYSFIoKTtcclxuXHJcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHhociA/IHNlbGYuZ2V0SHR0cFJlc3BvbnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyB4aHIucmVzcG9uc2VUZXh0IDogeGhyLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHhoclxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHx8IHhoci5zdGF0dXMgPT0gMzA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB1bnN1Y2Nlc3NmdWxseVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgeGhyID0gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICB1cmwgPSBzZWxmLmJ1aWxkVXJsKGNvbmZpZy51cmwsIGNvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKGNvbmZpZy5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQodXJsLCBkYXRhLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmV4dGVuZChjb25maWcsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3QodXJsLCBkYXRhLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB1dGlscy5leHRlbmQoY29uZmlnLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoY29uZmlnKTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2luamVjdG9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9odHRwJzsiLCJpbXBvcnQgeyBTZXJ2aWNlLCBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBzZXJ2aWNlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ2luamVjdG9yJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5qZWN0b3IgZXh0ZW5kcyBTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VDb21wb25lbnQobmFtZSwgdXNpbmcsIGRlZmF1bHROcykge1xyXG4gICAgICAgIHJldHVybiBpbmplY3Rvci5wYXJzZUNvbXBvbmVudChuYW1lLCB1c2luZywgZGVmYXVsdE5zKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZURpcmVjdGl2ZShuYW1lLCB1c2luZywgZGVmYXVsdE5zKSB7XHJcbiAgICAgICAgcmV0dXJuIGluamVjdG9yLnBhcnNlRGlyZWN0aXZlKG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlU2VydmljZShuYW1lLCB1c2luZywgZGVmYXVsdE5zKSB7XHJcbiAgICAgICAgcmV0dXJuIGluamVjdG9yLnBhcnNlU2VydmljZShuYW1lLCB1c2luZywgZGVmYXVsdE5zKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZUZpbHRlcihuYW1lLCB1c2luZywgZGVmYXVsdE5zKSB7XHJcbiAgICAgICAgcmV0dXJuIGluamVjdG9yLnBhcnNlRmlsdGVyKG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi90cGwtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vdHBsLWJ1aWxkZXInOyIsImV4cG9ydCAqIGZyb20gJy4vdm5vZGUnO1xuZXhwb3J0ICogZnJvbSAnLi92YXR0cic7XG5leHBvcnQgKiBmcm9tICcuL3ZjbW50JztcbmV4cG9ydCAqIGZyb20gJy4vdmVsbSc7XG5leHBvcnQgKiBmcm9tICcuL3Z0ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vdnR5cGUnOyIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuXG5leHBvcnQgY2xhc3MgVkF0dHIgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUuYXR0cmlidXRlLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMudmVsbSA9IG51bGw7XG4gICAgICAgIHRoaXMucXVvdGUgPSAnXCInO1xuICAgIH1cblxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgb25DbG9uZU5vZGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVkF0dHIodGhpcy5ub2RlTmFtZSwgdGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuXG5leHBvcnQgY2xhc3MgVkNtbnQgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUuY29tbWVudCwgJyNjb21tZW50JywgdmFsdWUpO1xuICAgIH1cblxuICAgIG9uQ2xvbmVOb2RlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZDbW50KHRoaXMubm9kZU5hbWUsIHRoaXMubm9kZVZhbHVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcbmltcG9ydCB7IFZBdHRyIH0gZnJvbSAnLi92YXR0cic7XG5pbXBvcnQgeyBwYXJzZVRwbCB9IGZyb20gJy4uL3RwbC1hcGknO1xuaW1wb3J0IHsgVHBsQnVpbGRlciB9IGZyb20gJy4uL3RwbC1idWlsZGVyJztcblxuZXhwb3J0IGNsYXNzIFZFbG0gZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5lbGVtZW50LCBuYW1lKTtcbiAgICAgICAgdGhpcy5lbG0gPSBudWxsO1xuICAgICAgICB0aGlzLnZhdHRycyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGZDbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IFRwbEJ1aWxkZXIoKTtcbiAgICB9XG5cbiAgICBwdXNoQXR0cihhdHRyKSB7XG4gICAgICAgIGF0dHIudmVsbSA9IHRoaXM7XG4gICAgICAgIHRoaXMudmF0dHJzLnB1c2goYXR0cik7XG4gICAgfVxuXG4gICAgaGFzQXR0cigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmF0dHJzLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBnZXRBdHRyKGtleSkge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHRoaXMudmF0dHJzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgcmV0dXJuIGF0dHIubm9kZU5hbWUgPT09IGtleTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF0Y2hlc1swXTtcbiAgICB9XG5cbiAgICBzZXRBdHRyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHRhcmdldCwgbWF0Y2hlcyA9IHRoaXMudmF0dHJzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gbWF0Y2hlc1swXTtcbiAgICAgICAgICAgIHRhcmdldC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBuZXcgVkF0dHIoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB0YXJnZXQudmVsbSA9IHRoaXM7XG4gICAgICAgICAgICB0YXJnZXQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmF0dHJzLnB1c2godGFyZ2V0KTtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJlbW92ZUF0dHIoa2V5KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBbXSwgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGtleSBpbnN0YW5jZW9mIFZBdHRyKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnZhdHRycy5pbmRleE9mKGtleSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi52YXR0cnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmF0dHJzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XG4gICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHNlbGYudmF0dHJzLmluZGV4T2YobWF0Y2gpO1xuICAgICAgICAgICAgICAgIG1hdGNoLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLnZhdHRycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Lmxlbmd0aCA+IDAgPyB0YXJnZXRbMF0gOiBudWxsO1xuICAgIH1cblxuICAgIGFwcGVuZEF0dHIoYXR0cikge1xuICAgICAgICBpZiAoYXR0ci52ZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkN1cnJlbnQgYXR0cmlidXRlIGlzIG5vdCBuZXchXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXR0ci52ZWxtID0gdGhpcztcbiAgICAgICAgYXR0ci5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLnZhdHRycy5wdXNoKGF0dHIpO1xuICAgICAgICByZXR1cm4gYXR0cjtcbiAgICB9XG5cbiAgICBnZXRPdXRlclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRlci5idWlsZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRJbm5lclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRlci5idWlsZChjaGlsZCk7XG4gICAgICAgIH0pLmpvaW4oJycpO1xuICAgIH1cblxuICAgIHNldE91dGVyVHBsKHRwbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHBhcnNlVHBsKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLCB2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZik7XG4gICAgfVxuXG4gICAgc2V0SW5uZXJUcGwodHBsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jbGVhckNoaWxkTm9kZXMoKTtcbiAgICAgICAgcGFyc2VUcGwodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLmFwcGVuZENoaWxkKHZub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbG9uZU5vZGUoKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IFZFbG0odGhpcy5ub2RlTmFtZSwgdGhpcy5ub2RlVmFsdWUpO1xuXG4gICAgICAgIG5vZGUudmF0dHJzID0gdGhpcy52YXR0cnMubWFwKGZ1bmN0aW9uICh2YXR0cikge1xuICAgICAgICAgICAgdmFyIGNvcHkgPSB2YXR0ci5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgIGNvcHkudmVsbSA9IG5vZGU7XG4gICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnZhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBhdHRyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52YXR0cnMubGVuZ3RoID0gMDtcbiAgICB9XG59IiwiZXhwb3J0IHZhciBub2RlVHlwZSA9IHtcbiAgICBlbGVtZW50OiAxLFxuICAgIGF0dHJpYnV0ZTogMixcbiAgICB0ZXh0OiAzLFxuICAgIGNkYXRhU2VjdGlvbjogNCxcbiAgICBlbnRpdHlSZWZlcmVuY2U6IDUsXG4gICAgZW50aXR5OiA2LFxuICAgIHByb2Nlc3NpbmdJbnN0cnVjdGlvbjogNyxcbiAgICBjb21tZW50OiA4LFxuICAgIGRvY3VtZW50OiA5LFxuICAgIGRvY3VtZW50VHlwZTogMTAsXG4gICAgZG9jdW1lbnRGcmFnbWVudDogMTEsXG4gICAgbm90YXRpb246IDEyXG59XG5cbi8vIHZpcnR1YWwgbm9kZVxuZXhwb3J0IGNsYXNzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLm5vZGVUeXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5ub2RlTmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubm9kZURhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBwdXNoQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICBidWlsZFNpYmxpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAoc2VsZi5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuYnVpbGRTaWJsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyUGFyZW50QW5kU2libGluZygpIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzQ2hpbGROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgY2xlYXJDaGlsZE5vZGVzKCkge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQubmV4dFNpYmxpbmcgPSBjaGlsZDtcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHRoaXMubGFzdENoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZDtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChyZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkO1xuICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBuZXdDaGlsZDtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMCwgbmV3Q2hpbGQpO1xuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuXG4gICAgaW5zZXJ0QWZ0ZXIocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChyZWZDaGlsZC5uZXh0U2libGluZyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUocmVmQ2hpbGQubmV4dFNpYmxpbmcsIG5ld0NoaWxkKTtcbiAgICB9XG5cbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3ZlIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcucHJldmlvdXNTaWJsaW5nID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIHJlcGxhY2VDaGlsZChyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgIGlmICh0aGlzLmZpcnN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICByZWZDaGlsZC5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSwgbmV3Q2hpbGQpO1xuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuXG4gICAgY2xvbmVOb2RlKGRlZXApIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLm9uQ2xvbmVOb2RlKGRlZXApO1xuXG4gICAgICAgIGlmKGRlZXApIHtcbiAgICAgICAgICAgIG5vZGUuY2hpbGROb2RlcyA9IHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLmNsb25lTm9kZShkZWVwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbm9kZS5idWlsZFNpYmxpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lckRvY3VtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBob29wc1xuXG4gICAgLy8gZW5kIG9mIGhvb3BzXG59XG4iLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZUZXh0IGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLnRleHQsICcjdGV4dCcsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5lbG0gPSBudWxsO1xuICAgIH1cblxuICAgIG9uQ2xvbmVOb2RlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZUZXh0KHRoaXMubm9kZU5hbWUsIHRoaXMubm9kZVZhbHVlKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWVHlwZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUuZG9jdW1lbnRUeXBlKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgVHBsTGV4ZXIgfSBmcm9tICcuL3RwbC1sZXhlcic7XG5pbXBvcnQgeyBUcGxQYXJzZXIgfSBmcm9tICcuL3RwbC1wYXJzZXInO1xuaW1wb3J0IHsgbm9kZVR5cGUgfSBmcm9tICcuL21vZGVsJztcblxuZnVuY3Rpb24gbGV4VHBsKHRwbCkge1xuICAgIHRwbCA9IHV0aWxzLmVzY2FwZUh0bWwodHBsKTtcbiAgICByZXR1cm4gbmV3IFRwbExleGVyKCkubGV4KHRwbCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHBsKHRwbCkge1xuICAgIHRwbCA9IHV0aWxzLmVzY2FwZUh0bWwodHBsKTtcbiAgICByZXR1cm4gbmV3IFRwbFBhcnNlcihuZXcgVHBsTGV4ZXIoKSkucGFyc2UodHBsKTtcbn1cblxuZnVuY3Rpb24gaXNWRWxtKHZub2RlKSB7XG4gICAgcmV0dXJuIHZub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZS5lbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1ZBdHRyKHZub2RlKSB7XG4gICAgcmV0dXJuIHZub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZS5hdHRyaWJ1dGU7XG59XG5cbmZ1bmN0aW9uIGlzVlRleHQodm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlLnRleHQ7XG59XG5cbmZ1bmN0aW9uIGlzVkNvbW1lbnQodm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlLmNvbW1lbnQ7XG59XG5cbmV4cG9ydCB7IGxleFRwbCwgcGFyc2VUcGwsIGlzVkVsbSwgaXNWQXR0ciwgaXNWVGV4dCwgaXNWQ29tbWVudCB9OyIsImltcG9ydCB7IGlzVlRleHQsIGlzVkNvbW1lbnQgfSBmcm9tICcuL3RwbC1hcGknXG5cbmV4cG9ydCBjbGFzcyBUcGxCdWlsZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIGJ1aWxkKHZub2RlKSB7XG4gICAgICAgIGlmIChpc1ZUZXh0KHZub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRUZXh0KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzVkNvbW1lbnQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZENvbW1lbnQodm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRFbGVtZW50KHZub2RlKTtcbiAgICB9XG5cbiAgICBidWlsZEVsZW1lbnQodmVsbSkge1xuICAgICAgICB2YXIgYXR0clRwbCA9IHZlbG0udmF0dHJzLm1hcCgodmF0dHIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEF0dHJpYnV0ZSh2YXR0cik7XG4gICAgICAgICAgICB9KS5qb2luKCcgJyksXG4gICAgICAgICAgICBjaGlsZFRwbCA9IHZlbG0uY2hpbGROb2Rlcy5tYXAoKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoY2hpbGQpO1xuICAgICAgICAgICAgfSkuam9pbignJyk7XG5cbiAgICAgICAgaWYoYXR0clRwbCkge1xuICAgICAgICAgICAgYXR0clRwbCA9ICcgJyArIGF0dHJUcGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHBsID0gJzwnICsgdmVsbS5ub2RlTmFtZSArIGF0dHJUcGwgKyAnPicgKyBjaGlsZFRwbDtcblxuICAgICAgICBpZiAoIXZlbG0uc2VsZkNsb3NlZCkge1xuICAgICAgICAgICAgdHBsICs9ICgnPC8nICsgdmVsbS5ub2RlTmFtZSArICc+Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHBsO1xuICAgIH1cblxuICAgIGJ1aWxkQXR0cmlidXRlKHZhdHRyKSB7XG4gICAgICAgIHJldHVybiB2YXR0ci5ub2RlTmFtZSArICh2YXR0ci5ub2RlVmFsdWUgPT0gbnVsbCA/ICcnIDogKCc9JyArIHZhdHRyLnF1b3RlICsgdmF0dHIubm9kZVZhbHVlICsgdmF0dHIucXVvdGUpKTtcbiAgICB9XG5cbiAgICBidWlsZFRleHQodnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHZ0ZXh0Lm5vZGVWYWx1ZTtcbiAgICB9XG5cbiAgICBidWlsZENvbW1lbnQodmNtbnQpIHtcbiAgICAgICAgcmV0dXJuIHZjbW50Lm5vZGVWYWx1ZTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi4vZXhwJztcblxuZXhwb3J0IGNsYXNzIFRwbExleGVyIGV4dGVuZHMgRXhwTGV4ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCkge1xuICAgICAgICByZXR1cm4gKCdhJyA8PSBjaCAmJiBjaCA8PSAneicgfHxcbiAgICAgICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcbiAgICAgICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyB8fFxuICAgICAgICAgICAgY2ggPT09ICdAJyB8fCBjaCA9PT0gJzonIHx8IGNoID09PSAnKicpO1xuICAgIH1cblxuICAgIGlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gsIGNwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy0nIHx8IGNoID09PSAnLic7XG4gICAgfVxuXG4gICAgZXhwZWN0U3RyaW5nKHN0cikge1xuICAgICAgICB2YXIgbnVtID0gc3RyLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDw9IHRoaXMudGV4dC5sZW5ndGgpID8gKHN0ciA9PT0gdGhpcy50ZXh0LnN1YnN0cih0aGlzLmluZGV4LCBudW0pKSA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGh0bWwgY29tbWVudCBcIjwhLS1jb21tZW50LS0+XCJcbiAgICByZWFkQ29tbWVudChiZWdpbiwgZW5kKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgICAgIHZhciByYXdTdHJpbmcgPSBiZWdpbjtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKGVuZCkpIHtcbiAgICAgICAgICAgICAgICByYXdTdHJpbmcgKz0gZW5kO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBjb21tZW50Jywgc3RhcnQpO1xuICAgIH1cblxuICAgIC8vIGh0bWwgdGV4dFxuICAgIHJlYWRUZXh0KCkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIGlmICgoY2ggPT09ICc8JyAmJiAodGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpIHx8IGNoMiA9PT0gJy8nKSkgfHwgdGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgdGV4dFRhZzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBodG1sIHRhZ1xuICAgIHJlYWRUYWcoYmVnaW4sIGVuZCwgY2xvc2luZywgZG9jdHlwZSkge1xuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGJlZ2luLCB0YWc6IHRydWUsIGNsb3Npbmc6IGNsb3NpbmcsIGJlZ2luOiB0cnVlLCBkb2N0eXBlOiBkb2N0eXBlIH0pO1xuICAgICAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcbiAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG5cbiAgICAgICAgICAgIGlmICghY2xvc2luZykge1xuICAgICAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gY2ggKyBjaDI7XG4gICAgICAgICAgICAgICAgaWYgKHN0ciA9PT0gJy8nICsgZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogc3RyLCB0YWc6IHRydWUsIGNsb3Npbmc6IHRydWUsIGVuZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBzdHIubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaCA9PT0gZW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlbmQsXG4gICAgICAgICAgICAgICAgICAgIHRhZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2luZzogISFkb2N0eXBlID8gdHJ1ZSA6IGNsb3NpbmcsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiAnPScsIGVxdWFsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXgodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSBbXTtcblxuICAgICAgICB2YXIgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICB2YXIgY2gzID0gdGhpcy5wZWVrKDIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRDb21tZW50KCc8IS0tJywgJy0tPicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc8JyAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwnLCAnPicsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8LycpICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPC8nLCAnPicsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhRE9DVFlQRScpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwhJywgJz4nLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignRE9DVFlQRSBpcyBub3QgYWxsb3dlZCcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBFeHBQYXJzZXIgfSBmcm9tICcuLi9leHAnO1xuaW1wb3J0IHtcbiAgICBWRWxtLCBWQXR0ciwgVlRleHQsIFZDbW50LCBWVHlwZVxufSBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGNsYXNzIFRwbFBhcnNlciBleHRlbmRzIEV4cFBhcnNlciB7XG4gICAgY29uc3RydWN0b3IobGV4ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIobGV4ZXIsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHBhcnNlKHRleHQpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XG5cbiAgICAgICAgdmFyIHJvb3QgPSBuZXcgVkVsbSgpO1xuICAgICAgICB2YXIgZG9jdHlwZSwgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi5kb2N0eXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRvY3R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3R5cGUgPSB0aGlzLmRvY3R5cGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKGRvY3R5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBvbmx5IGFsbG93IG9uZVwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgaXMgbm90IGFsbG93ZWRcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBWQ21udCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaChjb21tZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBWVGV4dCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKHRoaXMuZWxlbWVudCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcImltcG9zc2libGVcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcm9vdC5idWlsZFNpYmxpbmcoKTtcblxuICAgICAgICByZXR1cm4gcm9vdC5jaGlsZE5vZGVzO1xuICAgIH1cblxuICAgIGRvY3R5cGUoKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB2YXIgZG9jVHlwZSA9IG5ldyBWVHlwZSgpO1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgZG9jVHlwZS5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXR0cnMoZG9jVHlwZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgZG9jVHlwZS5jaGlsZE5vZGVzLnB1c2goYXR0cik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRvY1R5cGU7XG4gICAgfVxuXG4gICAgZWxlbWVudChwKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB2YXIgZWxlID0gbmV3IFZFbG0oKTtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGVsZS5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmF0dHJzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgZWxlLnB1c2hBdHRyKGF0dHIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICBlbGUuc2VsZkNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRFbGVtZW50cyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5wdXNoQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4gJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSB0b2tlbi50ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlO1xuICAgIH1cblxuICAgIGNoaWxkRWxlbWVudHMocCkge1xuICAgICAgICB2YXIgZWxlcyA9IFtdO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgVkNtbnQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKGNvbW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGV4dFRhZykge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFZUZXh0KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIGVsZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xuICAgICAgICAgICAgICAgIGVsZXMucHVzaCh0aGlzLmVsZW1lbnQocCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVzO1xuICAgIH1cblxuICAgIGF0dHJzKHApIHtcbiAgICAgICAgdmFyIGF0dHJzID0gW107XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYXR0ciA9IG5ldyBWQXR0cigpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIGF0dHIubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgIGF0dHIub3JpZ2luID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5lcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLmNvbnN0YW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyLm5vZGVWYWx1ZSA9IHRva2VuLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhdHRycy5wdXNoKGF0dHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF0dHJzO1xuICAgIH1cblxuICAgIGN1cnJlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICB9XG59IiwidmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuLy8gaXNcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGlzTWFwKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgTWFwO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc0JsYW5rT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIWdldFByb3RvdHlwZU9mKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc1JlZ0V4cCh2YWx1ZSkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbn1cblxuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuLy8gZW5kIG9mIGlzXG5cbi8vIHZhbHVlXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgcmV0dXJuIGlzTmFOKG4pID8gdmFsdWUgOiBuO1xufVxuXG5mdW5jdGlvbiBsb3dlcmNhc2Uoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9Mb3dlckNhc2UoKSA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gdXBwZXJjYXNlKHN0cmluZykge1xuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvVXBwZXJDYXNlKCkgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0h1bXBOYW1lKG5hbWUsIHNlcGFyYXRvciwgdXBwZXJjYXNlRmlyc3RMZXR0ZXIpIHtcbiAgICByZXR1cm4gbmFtZS5zcGxpdChzZXBhcmF0b3IpLm1hcChmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiAhdXBwZXJjYXNlRmlyc3RMZXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc3Vic3RyaW5nKDEpO1xuICAgIH0pLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RnJvbUh1bXBOYW1lKG5hbWUsIHNlcGFyYXRvciwgdXBwZXJjYXNlRmlyc3RMZXR0ZXIpIHtcbiAgICB2YXIgaSA9IDAsIG5ld05hbWUgPSAnJywgY2hhcjtcblxuICAgIHdoaWxlIChpIDwgbmFtZS5sZW5ndGgpIHtcbiAgICAgICAgY2hhciA9IG5hbWVbaV07XG5cbiAgICAgICAgaWYgKChpICE9PSAwIHx8IHVwcGVyY2FzZUZpcnN0TGV0dGVyKSAmJiAvW0EtWl0vLnRlc3QoY2hhcikpIHtcbiAgICAgICAgICAgIG5ld05hbWUgKz0gc2VwYXJhdG9yO1xuICAgICAgICAgICAgbmV3TmFtZSArPSBjaGFyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdOYW1lICs9IGNoYXI7XG4gICAgICAgIH1cblxuICAgICAgICBpKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld05hbWU7XG59XG4vLyBlbmQgaWYgdmFsdWVcblxuLy8gb2JqZWN0XG5mdW5jdGlvbiBjb3B5KCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIG9iakluZGV4ID0gMCwgb2JqID0gYXJndW1lbnRzW29iakluZGV4XSwgZmlsdGVyO1xuXG4gICAgaWYgKGlzQm9vbGVhbihvYmopKSB7XG4gICAgICAgIGRlZXAgPSBvYmo7XG4gICAgICAgIG9iakluZGV4Kys7XG4gICAgICAgIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF07XG4gICAgfVxuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiBvYmpJbmRleCArIDEpIHtcbiAgICAgICAgZmlsdGVyID0gYXJndW1lbnRzW29iakluZGV4ICsgMV07XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICB2YXIgbmV3QXJyID0gW107XG4gICAgICAgIG9iai5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsIHx8IGZpbHRlcihvYmosIGluZGV4LCBpdGVtKSkge1xuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGRlZXAgPyBjb3B5KGRlZXAsIGl0ZW0pIDogaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3QXJyO1xuICAgIH1cblxuICAgIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICAgIHZhciBuZXdPYmogPSBvYmplY3Qob2JqKTtcbiAgICAgICAgZm9yRWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwga2V5LCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXdPYmpba2V5XSA9IGRlZXAgPyBjb3B5KGRlZXAsIHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld09iajtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSBhcmd1bWVudHNbaW5kZXhdO1xuXG4gICAgaWYgKGlzQm9vbGVhbih0YXJnZXQpKSB7XG4gICAgICAgIGRlZXAgPSB0YXJnZXQ7XG4gICAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1srK2luZGV4XTtcbiAgICB9XG5cbiAgICBpZiAoZGVlcCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZSgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IHt9O1xuXG4gICAgaWYgKGlzQm9vbGVhbihhcmd1bWVudHNbaW5kZXhdKSkge1xuICAgICAgICBkZWVwID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBpZiAoZGVlcCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHBsYWluTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmICh0YXJnZXRba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0W2tleV0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIGVuZCBvZiBvYmplY3RcblxuLy8gaXRlcmF0b3JcbmZ1bmN0aW9uIGZvckVhY2godGFyZ2V0LCBhY3Rpb24pIHtcbiAgICBpZiAoaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgIHRhcmdldC5mb3JFYWNoKGFjdGlvbik7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbih0YXJnZXRba2V5XSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc29tZSh0YXJnZXQsIGZ1bmMpIHtcbiAgICBpZiAoaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQuc29tZShmdW5jKTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZnVuYyh0YXJnZXRba2V5XSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBlbmQgb2YgaXRlcmF0b3JcblxuLy8gYXJyYXlcbmZ1bmN0aW9uIG9yZGVyQnkobGlzdCwgZ2V0dGVyKSB7XG4gICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XG4gICAgfTtcblxuICAgIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGdldFZhbHVlKGEpIDwgZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPiBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG9yZGVyQnlEZXNjZW5kaW5nKGxpc3QsIGdldHRlcikge1xuICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChnZXR0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0dGVyKGl0ZW0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPiBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjb25jYXQoKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShsaXN0LCB2YWx1ZSkge1xuICAgIHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cbi8vIGVuZCBvZiBhcnJheVxuXG5mdW5jdGlvbiBvYmplY3Qobykge1xuICAgIGZ1bmN0aW9uIEYoKSB7XG4gICAgfVxuXG4gICAgRi5wcm90b3R5cGUgPSBvO1xuICAgIHJldHVybiBuZXcgRigpO1xufVxuXG5mdW5jdGlvbiBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSkge1xuICAgIHZhciBwcm90b3R5cGUgPSBvYmplY3Qoc3VwZXJUeXBlLnByb3RvdHlwZSk7XG4gICAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViVHlwZTtcbiAgICBzdWJUeXBlLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbn1cblxuZnVuY3Rpb24gaW5oZXJpdChzdWJUeXBlLCBzdXBlclR5cGUpIHtcbiAgICBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSk7XG4gICAgc3ViVHlwZS5zdXBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3VwZXJUeXBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaGFzUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgIHZhciBrZXksIGtleXMgPSBwcm9wZXJ0eS5zcGxpdCgnLicpO1xuXG4gICAgd2hpbGUgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICBpZiAoIWlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0W2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzT2JqZWN0KHRhcmdldCkgJiYgdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleXMuc2hpZnQoKSk7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHtcbiAgICB2YXIga2V5LCBrZXlzID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcblxuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYoIWlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0W2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gc2V0UHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICB2YXIga2V5LCBrZXlzID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcblxuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYgKCFpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldFtrZXldO1xuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdCgpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoLCBtYXRjaFRleHQsIGluZGV4LCByZXN1bHQgPSAnJywgdGV4dCA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgcGF0dGVybiA9IC9cXHsoXFxkKylcXH0vZywgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG5cbiAgICB3aGlsZSAobWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCkpIHtcbiAgICAgICAgbWF0Y2hUZXh0ID0gbWF0Y2hbMF07XG4gICAgICAgIGluZGV4ID0gTnVtYmVyLnBhcnNlSW50KG1hdGNoWzFdKSArIDE7XG5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gaW5kZXgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZm9ybWF0IGl0ZW0gJyArIGluZGV4ICsgJ2lzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgKz0gdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleCkgKyBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwoaHRtbCkge1xuICAgIHJldHVybiBodG1sLnJlcGxhY2UoLyZndDsvZywgJz4nKS5yZXBsYWNlKC8mbHQ7L2csICc8JykucmVwbGFjZSgvJmFtcDsvZywgJyYnKS5yZXBsYWNlKC8mcXVvdGU7L2csICcnKTtcbn1cblxuZXhwb3J0IHtcbiAgICBpc1VuZGVmaW5lZCxcbiAgICBpc0RlZmluZWQsXG4gICAgaXNPYmplY3QsXG4gICAgaXNCbGFua09iamVjdCxcbiAgICBpc051bWJlcixcbiAgICBpc0RhdGUsXG4gICAgaXNGdW5jdGlvbixcbiAgICBpc1JlZ0V4cCxcbiAgICBpc0Jvb2xlYW4sXG4gICAgaXNBcnJheSxcbiAgICBpc1N0cmluZyxcbiAgICBpc0Zvcm1EYXRhLFxuICAgIHRvTnVtYmVyLFxuICAgIGxvd2VyY2FzZSxcbiAgICB1cHBlcmNhc2UsXG4gICAgY29udmVydFRvSHVtcE5hbWUsXG4gICAgY29udmVydEZyb21IdW1wTmFtZSxcbiAgICBjb3B5LFxuICAgIGV4dGVuZCxcbiAgICBtZXJnZSxcbiAgICBmb3JFYWNoLFxuICAgIHNvbWUsXG4gICAgcmVtb3ZlLFxuICAgIGNvbmNhdCxcbiAgICBvcmRlckJ5LFxuICAgIG9yZGVyQnlEZXNjZW5kaW5nLFxuICAgIG9iamVjdCxcbiAgICBpbmhlcml0LFxuICAgIGhhc1Byb3BlcnR5LFxuICAgIGdldFByb3BlcnR5LFxuICAgIHNldFByb3BlcnR5LFxuICAgIGZvcm1hdCxcbiAgICBlc2NhcGVIdG1sXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vZG9tJztcclxuaW1wb3J0IHsgTV9DTVBfQ0xBU1MgfSBmcm9tICcuLi9jc3MnO1xyXG5pbXBvcnQgeyBpc01lc3NhZ2UgfSBmcm9tICcuLi9jb3JlJztcclxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZlciwgaGFuZGxlciB9IGZyb20gJy4uL29ic2VydmVyJztcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9yZW5kZXInO1xyXG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5pbXBvcnQgeyBFdmFsdWF0b3IgfSBmcm9tICcuLi9leHAnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudENvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgIHRoaXMuJCR2ZWxtID0gbnVsbDtcclxuICAgIHRoaXMuJCRwYXJlbnQgPSBudWxsO1xyXG4gICAgdGhpcy4kJGNoaWxkcmVuID0gW107XHJcbiAgICB0aGlzLiQkbWFpblZpZXcgPSBudWxsO1xyXG4gICAgdGhpcy4kcGFyc2VyID0gbmV3IFBhcnNlcih0aGlzKTtcclxuICAgIHRoaXMuJG9ic2VydmVyID0gbmV3IE9ic2VydmVyKHRoaXMpO1xyXG4gICAgdGhpcy4kZGF0YSA9IHV0aWxzLm1lcmdlKHRoaXMuJCRtZXRhZGF0YSwgZGF0YSk7XHJcbiAgICB0aGlzLiRjb250YWluZXIgPSB0aGlzLiRtYWtlQ29udGFpbmVyKCk7XHJcbiAgICB0aGlzLnNsb3RzID0ge307XHJcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gICAgdGhpcy5wcm9wcyA9IHRoaXMuJGRlbGVnYXRlKHt9KTtcclxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLiRkZWxlZ2F0ZSh7fSk7XHJcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzLCB0aGlzLiRkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgICBnZXQgJGluamVjdG9yKCkge1xyXG4gICAgICAgIHJldHVybiBpbmplY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICAkZGVsZWdhdGUodGFyZ2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXQsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgICRzZXRTbG90KHNsb3RzKSB7XHJcbiAgICAgICAgdGhpcy5zbG90cyA9IHNsb3RzIHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgICRzZXJDb250YWluZXIoZWxtKSB7XHJcbiAgICAgICAgdGhpcy4kY29udGFpbmVyID0gZWxtO1xyXG4gICAgfVxyXG5cclxuICAgICRzZXRTdGF0ZShzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLiRkZWxlZ2F0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNldFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHRoaXMuJGRlbGVnYXRlKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgY29tcG9uZW50Q29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAkbWFrZUNvbnRhaW5lcigpIHtcclxuICAgICAgICB2YXIgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh1dGlscy5jb252ZXJ0RnJvbUh1bXBOYW1lKHRoaXMuJGRhdGEua2V5LCAnLScpKTtcclxuICAgICAgICBkb20uYWRkQ2xhc3MoZWxtLCBNX0NNUF9DTEFTUyk7XHJcbiAgICAgICAgcmV0dXJuIGVsbTtcclxuICAgIH1cclxuXHJcbiAgICAkaGFzUHJvcGVydHkoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMucHJvcHMsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgJGdldFByb3BlcnR5KGtleSkge1xyXG4gICAgICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLnByb3BzLCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgICRzZXRQcm9wZXJ0eShrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcy5wcm9wcywga2V5KTtcclxuXHJcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLnByb3BzLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5vblByb3BlcnR5Q2hhbmdlZCAmJiB0aGlzLm9uUHJvcGVydHlDaGFuZ2VkKGtleSwgdmFsdWUsIG9sZFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGhhc01lc3NhZ2Uoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgICRiaW5kKGtleSwgaGFuZGxlcikge1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcy5ldmVudHMsIGtleSk7XHJcblxyXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5vbihoYW5kbGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCdcInswfVwiIGlzIG5vdCBhIHZhbGlkIGV2ZW50Jywga2V5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICR1bmJpbmQoa2V5LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLmV2ZW50cywga2V5KTtcclxuXHJcbiAgICAgICAgaWYgKGlzTWVzc2FnZShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlLm9mZihoYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJHdhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJG9ic2VydmVyLndhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKTtcclxuICAgIH1cclxuXHJcbiAgICAkd2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJG9ic2VydmVyLndhdGNoQ29sbGVjdGlvbihleHAsIGhhbmRsZXIsIGxvY2Fscyk7XHJcbiAgICB9XHJcblxyXG4gICAgJGV2YWwoZXhwLCBsb2NhbHMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEV2YWx1YXRvcih0aGlzLCB7bG9jYWxzOiBsb2NhbHN9KS5ldmFsdWF0ZShleHApO1xyXG4gICAgfVxyXG5cclxuICAgICRhc3NpZ24oZXhwLCB2YWx1ZSwgbG9jYWxzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFdmFsdWF0b3IodGhpcywge2xvY2FsczogbG9jYWxzfSkuYXNzaWduKGV4cCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgICRnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuJGRhdGE7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkYXRhLnRlbXBsYXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YS50ZW1wbGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkYXRhLnRlbXBsYXRlSWQpKSB7XHJcbiAgICAgICAgICAgIHZhciBlbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhLnRlbXBsYXRlSWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtLmlubmVySFRNTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgICRyZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy4kZ2V0VGVtcGxhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy4kJG1haW5WaWV3ID0gbmV3IFJlbmRlcmVyKHRoaXMpLnJlbmRlcih0ZW1wbGF0ZSwgdGhpcy4kY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZnRlclZpZXdSZW5kZXJlZCAmJiB0aGlzLmFmdGVyVmlld1JlbmRlcmVkKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLiQkbWFpblZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgJG1vdW50KHNlbGVjdG9yT3JFbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzZWxlY3Rvck9yRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiRjb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgICR1bm1vdW50KCkge1xyXG4gICAgICAgIGRvbS5yZW1vdmVFbGVtZW50KHRoaXMuJGNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgJGFwcGVuZENoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgdGhpcy4kJGNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIGNoaWxkLiQkcGFyZW50ID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAkcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiQkY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy4kJGNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIGNoaWxkLiQkcGFyZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy4kdW5tb3VudCgpO1xyXG5cclxuICAgICAgICB0aGlzLiRvYnNlcnZlci5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuJCRtYWluVmlldyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCRtYWluVmlldy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xyXG5cclxuICAgICAgICBpZih0aGlzLiQkcGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy4kJHBhcmVudC4kcmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBNX0hJREVfQ0xBU1MgfSBmcm9tICcuLi9jc3MnO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vcmVuZGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZUNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLiQkc2NvcGUgPSBudWxsO1xuICAgIHRoaXMuJCR2YXR0ciA9IG51bGw7XG4gICAgdGhpcy4kcHJpb3JpdHkgPSA5O1xuICAgIC8vIGJpbmRpbmcgdGV4dCBpcyBhIGFzc2lnbm1lbnRcbiAgICB0aGlzLiRhc3NpZ25tZW50ID0gZmFsc2U7XG4gICAgdGhpcy4kcGxhY2Vob2xkZXIgPSBudWxsO1xuICAgIHRoaXMuJGRhdGEgPSB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJGRhdGEpO1xufVxuXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlIHtcbiAgICBnZXQgJGtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRtZXRhZGF0YS5rZXk7XG4gICAgfVxuXG4gICAgZ2V0ICRuYW1lc3BhY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xuICAgIH1cblxuICAgIGdldCAkc2NvcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkc2NvcGU7XG4gICAgfVxuXG4gICAgZ2V0ICRyZW5kZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzY29wZS4kcmVuZGVyZXI7XG4gICAgfVxuXG4gICAgZ2V0ICRlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLnZlbG0uZWxtO1xuICAgIH1cblxuICAgIGdldCAkYmluZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci5ub2RlRGF0YS5iaW5kaW5nO1xuICAgIH1cblxuICAgIGdldCAkY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLnZlbG0ubm9kZURhdGEuY29tcG9uZW50O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZGlyZWN0aXZlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyB3aGlsZSBjb21waWxpbmdcbiAgICAkY29tcGlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25Db21waWxlICYmIHRoaXMub25Db21waWxlKHRoaXMuJCR2YXR0ci52ZWxtLCB0aGlzLiQkdmF0dHIpO1xuICAgIH1cblxuICAgICRsaW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkxpbmsgJiYgdGhpcy5vbkxpbmsodGhpcy4kc2NvcGUpO1xuICAgIH1cblxuICAgIC8vIGJlZm9yZSBsaW5raW5nXG4gICAgLy8gJHByZWxpbmsoKSB7XG4gICAgLy8gICAgIHRoaXMuYmVmb3JlTGluayAmJiB0aGlzLmJlZm9yZUxpbmsoKTtcbiAgICAvLyB9XG5cbiAgICAvLyBhZnRlciBsaW5raW5nXG4gICAgJHBvc3RsaW5rKCkge1xuICAgICAgICB0aGlzLmFmdGVyTGluayAmJiB0aGlzLmFmdGVyTGluaygpO1xuXG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNoYW5nZSh0aGlzLiRiaW5kaW5nLnZhbHVlLCB0aGlzLiRiaW5kaW5nLm9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoZSBpbnB1dCB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAgJGNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSAmJiB0aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XG4gICAgfVxuXG4gICAgJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgaWYoIW5hbWVzcGFjZSl7XG4gICAgICAgICAgICBuYW1lc3BhY2UgPSB0aGlzLiRuYW1lc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0ID0gdmVsbS5ub2RlRGF0YS5kaXJlY3RpdmVzLmZpbHRlcihpdGVtID0+IGl0ZW0uJGtleSA9PT0ga2V5ICYmIGl0ZW0uJG5hbWVzcGFjZSA9PT0gbmFtZXNwYWNlKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA/IHJlc3VsdFswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgJHNlZWtEaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIHZlbG0gPSB0aGlzLiQkdmF0dHIudmVsbTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5LCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgICRzZWVrVXBEaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIHZlbG0gPSB0aGlzLiQkdmF0dHIudmVsbS5wYXJlbnROb2RlO1xuICAgICAgICByZXR1cm4gdGhpcy4kJHNlYXJjaERpcmVjdGl2ZSh2ZWxtLCBrZXksIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgJHJlbW92ZUVsZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLiRlbGVtZW50LnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuJHBsYWNlaG9sZGVyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3lvdSBtdXN0IGRlZmluZSBlbGVtZW50IHBsYWNlaG9sZGVyIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9tLnJlcGxhY2VFbGVtZW50KHRoaXMuJGVsZW1lbnQsIHRoaXMuJHBsYWNlaG9sZGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRhcHBlbmRFbGVtZW50KCkge1xuICAgICAgICBpZiAodGhpcy4kZWxlbWVudC5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRwbGFjZWhvbGRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd5b3UgbXVzdCBkZWZpbmUgZWxlbWVudCBwbGFjZWhvbGRlciEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbS5yZXBsYWNlRWxlbWVudCh0aGlzLiRwbGFjZWhvbGRlciwgdGhpcy4kZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkaGlkZUVsZW1lbnQoKSB7XG4gICAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLiRlbGVtZW50LCBNX0hJREVfQ0xBU1MpO1xuICAgIH1cblxuICAgICRzaG93RWxlbWVudCgpIHtcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHRoaXMuJGVsZW1lbnQsIE1fSElERV9DTEFTUyk7XG4gICAgfVxuXG4gICAgJGV2YWwoZXhwLCBsb2NhbHMpIHtcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy4kYmluZGluZy5sb2NhbHMsIGxvY2Fscyk7XG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZS4kZXZhbChleHAsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgJGFzc2lnbihleHAsIHZhbHVlLCBsb2NhbHMpIHtcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy4kYmluZGluZy5sb2NhbHMsIGxvY2Fscyk7XG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZS4kYXNzaWduKGV4cCwgdmFsdWUpO1xuICAgIH1cblxuICAgICRyZW5kZXIodGVtcGxhdGUsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gbmV3IFJlbmRlcmVyKHRoaXMuJHNjb3BlLCBsb2NhbHMpLnJlbmRlcih0ZW1wbGF0ZSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IHJvbGVzIH0gZnJvbSAnLi9yb2xlcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIGNvbXBvbmVudENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBkaXJlY3RpdmVDb25zdHJ1Y3RvciB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IEZpbHRlciwgZmlsdGVyQ29uc3RydWN0b3IgfSBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgeyBTZXJ2aWNlLCBzZXJ2aWNlQ29uc3RydWN0b3IgfSBmcm9tICcuL3NlcnZpY2UnO1xuXG52YXIgbmFtZVBhdHRlcm4gPSAvXlthLXpdW2EtekEtWjAtOV0qJC87XG5cbi8vIHN0YXJ0IG1ha2UgY29uc3RydWN0b3IgZnVuY3Rpb24gYmVjYXVzZSBjbGFzcyBjYW4ndCBiZSBjYWxsIHdpdGhvdXQgbmV3LlxudmFyIGNvbXBvbmVudENsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gQ29tcG9uZW50KG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbXBvbmVudENvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuY29tcG9uZW50Q2xhc3MucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxudmFyIGRpcmVjdGl2ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gRGlyZWN0aXZlKG1ldGFkYXRhKSB7XG4gICAgICAgIGRpcmVjdGl2ZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuZGlyZWN0aXZlQ2xhc3MucHJvdG90eXBlID0gRGlyZWN0aXZlLnByb3RvdHlwZTtcblxudmFyIGZpbHRlckNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gRmlsdGVyKG1ldGFkYXRhKSB7XG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuZmlsdGVyQ2xhc3MucHJvdG90eXBlID0gRmlsdGVyLnByb3RvdHlwZTtcblxudmFyIHNlcnZpY2VDbGFzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFNlcnZpY2UobWV0YWRhdGEpIHtcbiAgICAgICAgc2VydmljZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpXG4gICAgfTtcbn0pKCk7XG5zZXJ2aWNlQ2xhc3MucHJvdG90eXBlID0gU2VydmljZS5wcm90b3R5cGU7XG4vLyBlbmQgb2YgbWFrZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBiZWNhdXNlIGNsYXNzIGNhbid0IGJlIGNhbGwgd2l0aG91dCBuZXcuXG5cbi8vIGNvbnN0cnVjdG9yIGZhY3RvcnksIGNyZWF0ZSBjb25zdHJ1Y3RvciBmb3IgY29tcG9uZW50LCBkaXJlY3RpdmUsIGZpbHRlciBhbmQgc2VydmljZVxuZXhwb3J0IGNsYXNzIEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcmVuYW1lKHJvbGVJZCwgbmFtZSkge1xuICAgICAgICBpZiAobmFtZVBhdHRlcm4udGVzdChuYW1lKSkge1xuICAgICAgICAgICAgdmFyIG5ld05hbWUgPSB1dGlscy51cHBlcmNhc2UobmFtZVswXSk7XG5cbiAgICAgICAgICAgIGlmIChuYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdOYW1lICs9IG5hbWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKHJvbGVJZCkge1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuY29tcG9uZW50OlxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdDb21wb25lbnQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmRpcmVjdGl2ZTpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnRGlyZWN0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5maWx0ZXI6XG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0ZpbHRlcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuc2VydmljZTpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnU2VydmljZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3TmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lICsgJ2lzIG5vdCBhIHZhbGlkIG5hbWUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2Uocm9sZUlkLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciwgY29uc3RydWN0b3JOYW1lID0gdGhpcy5yZW5hbWUocm9sZUlkLCBuYW1lKSxcbiAgICAgICAgICAgIG9uQ29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yLnN1cGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbmZpZy5jb25zdHJ1Y3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IEZ1bmN0aW9uKCdvbkNvbnN0cnVjdCcsICdcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24gJyArIGNvbnN0cnVjdG9yTmFtZSArICcoKXtvbkNvbnN0cnVjdC5jYWxsKHRoaXMpO307Jykob25Db25zdHJ1Y3QpO1xuXG4gICAgICAgIC8vIGV4dGVuZHMgY2xhc3NcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uZmlnLmV4dGVuZHMpKSB7XG4gICAgICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBjb25maWcuZXh0ZW5kcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KGtleSkgJiYga2V5ICE9PSAnZXh0ZW5kcycgJiYga2V5ICE9PSAnY29uc3RydWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZVtrZXldID0gY29uZmlnW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdG9yZSBtZXRhZGF0YSB0byBwcm90b3R5cGVcbiAgICAgICAgbWV0YWRhdGEua2V5ID0gbmFtZTtcbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgbWFrZUNvbXBvbmVudChuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGV4dGVuZHM6IGNvbXBvbmVudENsYXNzXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuY29tcG9uZW50LCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBtYWtlRGlyZWN0aXZlKG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgICAgICAgZXh0ZW5kczogZGlyZWN0aXZlQ2xhc3NcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5kaXJlY3RpdmUsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIG1ha2VGaWx0ZXIobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBleHRlbmRzOiBmaWx0ZXJDbGFzc1xuICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmZpbHRlciwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgbWFrZVNlcnZpY2UobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBleHRlbmRzOiBzZXJ2aWNlQ2xhc3NcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5zZXJ2aWNlLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgZmFjdG9yeSA9IG5ldyBGYWN0b3J5KCk7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLiRkYXRhID0gdXRpbHMubWVyZ2UodGhpcy4kJG1ldGFkYXRhLCBkYXRhKTtcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzLCB0aGlzLiRkYXRhKTtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmaWx0ZXJDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3ZpZXctYXBpJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IHJvbGVzIH0gZnJvbSAnLi9yb2xlcyc7XHJcbmltcG9ydCB7IGlzQ29tcG9uZW50LCBpc0RpcmVjdGl2ZSwgaXNTZXJ2aWNlLCBpc0ZpbHRlciB9IGZyb20gJy4vdmlldy1hcGknO1xyXG5cclxudmFyIGtleVBhdHRlcm4gPSAvXlthLXpdW2EtekEtWjAtOV0qJC87XHJcbnZhciBnbG9iYWxOYW1lc3BhY2UgPSAnYXV0b21hdGUnO1xyXG5cclxuY2xhc3MgTmFtZXNwYWNlQ29udGFpbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NDb250YWluZXIgPSB7fTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlQ29udGFpbmVyID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZUlkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIG1ldGFkYXRhIGV4YW1wbGVcclxuLy8geyBrZXk6ICcnLCBuYW1lc3BhY2U6ICcnLCBleHRlbmRzOiBudWxsLCBjb25zdHJ1Y3Q6IGZuLCBtZXRob2RzOiB7fSB9XHJcbmV4cG9ydCBjbGFzcyBJbmplY3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5zQ29udGFpbmVyID0ge307XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlU3RhY2sgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROYW1lc3BhY2VDb250YWluZXIobmFtZXNwYWNlKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKG5hbWVzcGFjZSkpIHtcclxuICAgICAgICAgICAgbmFtZXNwYWNlID0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMubnNDb250YWluZXJbbmFtZXNwYWNlXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uc0NvbnRhaW5lcltuYW1lc3BhY2VdID0gbmV3IE5hbWVzcGFjZUNvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uc0NvbnRhaW5lcltuYW1lc3BhY2VdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYW1lc3BhY2UgaXMgcmVxdWlyZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tLZXlOYW1lKGtleSkge1xyXG4gICAgICAgIGlmICgha2V5UGF0dGVybi50ZXN0KGtleSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICcgaXMgbm90IGEgdmFsaWQgbmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcihyb2xlSWQsIGtleSwgY29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLmNoZWNrS2V5TmFtZShrZXkpO1xyXG5cclxuICAgICAgICB2YXIgbmFtZXNwYWNlID0gY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2VDb250YWluZXIgPSB0aGlzLmdldE5hbWVzcGFjZUNvbnRhaW5lcihuYW1lc3BhY2UpO1xyXG4gICAgICAgIHZhciBjbGFzc0NvbnRhaW5lciA9IG5hbWVzcGFjZUNvbnRhaW5lci5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlID09PSBnbG9iYWxOYW1lc3BhY2UgJiYgcm9sZUlkID09PSByb2xlcy5kaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAga2V5ID0gdXRpbHMuZm9ybWF0KCdtezB9JywgdXRpbHMudXBwZXJjYXNlKGtleVswXSkgKyAoa2V5Lmxlbmd0aCA+IDEgPyBrZXkuc3Vic3RyKDEpIDogJycpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbGFzc0NvbnRhaW5lcltrZXldKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnIGlzIGV4aXN0IHVuZGVyIG5hbWVzcGFjZSAnICsgbmFtZXNwYWNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsYXNzQ29udGFpbmVyW2tleV0gPSBjb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckNvbXBvbmVudChrZXksIGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5jb21wb25lbnQsIGtleSwgY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmRpcmVjdGl2ZSwga2V5LCBjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJGaWx0ZXIoa2V5LCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuZmlsdGVyLCBrZXksIGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlclNlcnZpY2Uoa2V5LCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuc2VydmljZSwga2V5LCBjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzKHJvbGVJZCwga2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZUlkLCBrZXksIG5hbWVzcGFjZSkgIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBoYXNDb21wb25lbnQoa2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuY29tcG9uZW50LCBrZXksIG5hbWVzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzRGlyZWN0aXZlKGtleSwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLmRpcmVjdGl2ZSwga2V5LCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0ZpbHRlcihrZXksIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5maWx0ZXIsIGtleSwgbmFtZXNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNTZXJ2aWNlKGtleSwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLnNlcnZpY2UsIGtleSwgbmFtZXNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGcm9tR2xvYmFsTmFtZXNwYWNlKHJvbGVJZCwga2V5KSB7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZUNvbnRhaW5lciA9IHRoaXMuZ2V0TmFtZXNwYWNlQ29udGFpbmVyKGdsb2JhbE5hbWVzcGFjZSk7XHJcbiAgICAgICAgdmFyIGNsYXNzQ29udGFpbmVyID0gbmFtZXNwYWNlQ29udGFpbmVyLmdldENsYXNzQ29udGFpbmVyKHJvbGVJZCk7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzQ29udGFpbmVyW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHJvbGVJZCwga2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICB2YXIgbmFtZXNwYWNlQ29udGFpbmVyID0gdGhpcy5nZXROYW1lc3BhY2VDb250YWluZXIobmFtZXNwYWNlKTtcclxuICAgICAgICB2YXIgY2xhc3NDb250YWluZXIgPSBuYW1lc3BhY2VDb250YWluZXIuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcclxuICAgICAgICByZXR1cm4gY2xhc3NDb250YWluZXJba2V5XSB8fCB0aGlzLmdldEZyb21HbG9iYWxOYW1lc3BhY2Uocm9sZUlkLCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbXBvbmVudChrZXksIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5jb21wb25lbnQsIGtleSwgbmFtZXNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuZGlyZWN0aXZlLCBrZXksIG5hbWVzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsdGVyKGtleSwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLmZpbHRlciwga2V5LCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlcnZpY2Uoa2V5LCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuc2VydmljZSwga2V5LCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSW5zdGFuY2Uocm9sZUlkLCBpbnN0YW5jZSkge1xyXG4gICAgICAgIHZhciB2YWxpZGF0b3IsIHJvbGU7XHJcblxyXG4gICAgICAgIHN3aXRjaCAocm9sZUlkKSB7XHJcbiAgICAgICAgICAgIGNhc2Ugcm9sZXMuY29tcG9uZW50OlxyXG4gICAgICAgICAgICAgICAgcm9sZSA9ICdDb21wb25lbnQnO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yID0gaXNDb21wb25lbnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSByb2xlcy5kaXJlY3RpdmU6XHJcbiAgICAgICAgICAgICAgICByb2xlID0gJ0RpcmVjdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IgPSBpc0RpcmVjdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHJvbGVzLnNlcnZpY2U6XHJcbiAgICAgICAgICAgICAgICByb2xlID0gJ1NlcnZpY2UnO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yID0gaXNTZXJ2aWNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Ugcm9sZXMuZmlsdGVyOlxyXG4gICAgICAgICAgICAgICAgcm9sZSA9ICdGaWx0ZXInO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yID0gaXNGaWx0ZXI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWxpZGF0b3IgJiYgIXZhbGlkYXRvcihpbnN0YW5jZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnb2JqZWN0IGlzIGEgaW5zdGFuY2Ugb2YgezB9Jywgcm9sZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlQ29uc3RydWN0b3Iocm9sZUlkLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcclxuICAgICAgICB2YXIgY29uc3RydWN0b3I7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0KHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCdjYW4gbm90IGZpbmQgXCJ7MH1cIiBpbiBuYW1lc3BhY2UgXCJ7MX1cIicsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc0Z1bmN0aW9uKGtleU9yQ29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0ga2V5T3JDb25zdHJ1Y3RvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGFyYW1ldGVyJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgdmFyIENscyA9IHRoaXMucmVzb2x2ZUNvbnN0cnVjdG9yKHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ2xzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tJbnN0YW5jZShyb2xlSWQsIGluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNpbmdsZXRvbihyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSxcclxuICAgICAgICAgICAgQ2xzID0gdGhpcy5yZXNvbHZlQ29uc3RydWN0b3Iocm9sZUlkLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpLFxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBDbHMucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xyXG5cclxuICAgICAgICB2YXIgbmFtZXNwYWNlQ29udGFpbmVyID0gdGhpcy5nZXROYW1lc3BhY2VDb250YWluZXIobmFtZXNwYWNlKSxcclxuICAgICAgICAgICAgY29udGFpbmVyID0gbmFtZXNwYWNlQ29udGFpbmVyLmdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVJZCksXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRhaW5lci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2YgQ2xzO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgQ2xzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnN0YW5jZShyb2xlSWQsIGluc3RhbmNlKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNvbXBvbmVudChrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUocm9sZXMuY29tcG9uZW50LCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZURpcmVjdGl2ZShrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUocm9sZXMuZGlyZWN0aXZlLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZpbHRlcihrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTaW5nbGV0b24ocm9sZXMuZmlsdGVyLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNlcnZpY2Uoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgdmFyIFNlcnZpY2UgPSB0aGlzLnJlc29sdmVDb25zdHJ1Y3Rvcihyb2xlcy5zZXJ2aWNlLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xyXG5cclxuICAgICAgICBpZiAoU2VydmljZS5wcm90b3R5cGUuJCRtZXRhZGF0YS5ub25TaGFyZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHJvbGVzLnNlcnZpY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2luZ2xldG9uKHJvbGVzLnNlcnZpY2UsIFNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4dHJhY3ROc0FuZEtleShuYW1lKSB7XHJcbiAgICAgICAgdmFyIHNlZ21lbnRzID0gbmFtZS5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBrZXk6IHNlZ21lbnRzLnBvcCgpLFxyXG4gICAgICAgICAgICBuczogc2VnbWVudHMubGVuZ3RoID4gMCA/IHNlZ21lbnRzLmpvaW4oJy4nKSA6ICcnLFxyXG4gICAgICAgICAgICBjbHM6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRnVsbE5hbWUobmFtZSwgdXNpbmcpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIHJlc3VsdCA9IHRoaXMuZXh0cmFjdE5zQW5kS2V5KG5hbWUpO1xyXG5cclxuICAgICAgICBpZiAodXNpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzaW5nLmhhc093blByb3BlcnR5KHJlc3VsdC5ucykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNlIGFsaWFzIHdpdGggcmVhbCBuYW1lc3BhY2VcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQubnMgPSB1c2luZ1tyZXN1bHQubnNdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzaW5nLmhhc093blByb3BlcnR5KG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdXNpbmdbbmFtZV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHJlYWwgbmFtZXNwYWNlIGFuZCBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gc2VsZi5leHRyYWN0TnNBbmRLZXkodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiByZWFsIGNsYXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jbHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VDb25zdHJ1Y3RvcihnZXR0ZXIsIG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpIHtcclxuICAgICAgICB2YXIgaWRlbnRpZmllciA9IHRoaXMucGFyc2VGdWxsTmFtZShuYW1lLCB1c2luZyk7XHJcblxyXG4gICAgICAgIGlmIChpZGVudGlmaWVyLmNscykge1xyXG4gICAgICAgICAgICByZXR1cm4gaWRlbnRpZmllci5jbHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpc1tnZXR0ZXJdKGlkZW50aWZpZXIua2V5LCBpZGVudGlmaWVyLm5zIHx8IGRlZmF1bHROcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VDb21wb25lbnQobmFtZSwgdXNpbmcsIGRlZmF1bHROcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlQ29uc3RydWN0b3IoJ2dldENvbXBvbmVudCcsIG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRGlyZWN0aXZlKG5hbWUsIHVzaW5nLCBkZWZhdWx0TnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUNvbnN0cnVjdG9yKCdnZXREaXJlY3RpdmUnLCBuYW1lLCB1c2luZywgZGVmYXVsdE5zKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZVNlcnZpY2UobmFtZSwgdXNpbmcsIGRlZmF1bHROcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlQ29uc3RydWN0b3IoJ2dldFNlcnZpY2UnLCBuYW1lLCB1c2luZywgZGVmYXVsdE5zKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZUZpbHRlcihuYW1lLCB1c2luZywgZGVmYXVsdE5zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VDb25zdHJ1Y3RvcignZ2V0RmlsdGVyJywgbmFtZSwgdXNpbmcsIGRlZmF1bHROcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5qZWN0U2VydmljZXMoaW5zdGFuY2UsIG1ldGFkYXRhLCBjaGVja0xvb3BEZXBlbmRlbmN5KSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBzZXJ2aWNlRnVsbE5hbWUsIGhhc0xvb3BEZXBlbmRlbmN5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChjaGVja0xvb3BEZXBlbmRlbmN5KSB7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0aW5nIGEgc2VydmljZSBpbnN0YW5jZSBhdCB0aGUgbW9tZW50XHJcbiAgICAgICAgICAgIHNlcnZpY2VGdWxsTmFtZSA9IHV0aWxzLmZvcm1hdCgnezB9LnsxfScsIHV0aWxzLmxvd2VyY2FzZShtZXRhZGF0YS5uYW1lc3BhY2UpLCBtZXRhZGF0YS5rZXkpO1xyXG4gICAgICAgICAgICBoYXNMb29wRGVwZW5kZW5jeSA9IHRoaXMuc2VydmljZVN0YWNrLmluZGV4T2Yoc2VydmljZUZ1bGxOYW1lKSAhPT0gLTE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VTdGFjay5wdXNoKHNlcnZpY2VGdWxsTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaGFzTG9vcERlcGVuZGVuY3kpIHtcclxuICAgICAgICAgICAgICAgIC8vIG9jY3VycyBsb29wIGRlcGVuZGVuY3lcclxuICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IHV0aWxzLmZvcm1hdCgnTG9vcCBkZXBlbmRlbmN5OiB7MH0nLCB0aGlzLnNlcnZpY2VTdGFjay5qb2luKCcgLT4gJykpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgc2VydmljZSBkZXBlbmRlbmN5IHN0YWNrXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VTdGFjay5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhyb3cgZXJyb3JcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZXRhZGF0YSAmJiB1dGlscy5pc09iamVjdChtZXRhZGF0YS5pbmplY3QpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2gobWV0YWRhdGEuaW5qZWN0LCBmdW5jdGlvbiAoc2VydmljZSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VydmljZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlID0gc2VsZi5wYXJzZVNlcnZpY2Uoc2VydmljZSwgbWV0YWRhdGEudXNpbmcsIG1ldGFkYXRhLm5hbWVzcGFjZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZVtrZXldID0gc2VsZi5jcmVhdGVTZXJ2aWNlKHNlcnZpY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGVja0xvb3BEZXBlbmRlbmN5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmljZVN0YWNrLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBpbmplY3RvciA9IG5ldyBJbmplY3RvcigpOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgcGFyc2VFeHAgfSBmcm9tICcuLi9leHAnO1xyXG5pbXBvcnQgeyBwYXJzZVRwbCB9IGZyb20gJy4uL3RwbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyc2VyIHtcclxuICAgIGdldCBpbmplY3RvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS4kaW5qZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHVzaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLiRkYXRhLnVzaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbXMgPSB7fTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHt9LFxyXG4gICAgICAgICAgICBkaXJlY3RpdmVzOiB7fSxcclxuICAgICAgICAgICAgZmlsdGVyczoge31cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRXhwcmVzc2lvbihleHApIHtcclxuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbXNbZXhwXTtcclxuXHJcbiAgICAgICAgaWYgKCFwcm9ncmFtKSB7XHJcbiAgICAgICAgICAgIHByb2dyYW0gPSBwYXJzZUV4cChleHApO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW1zW2V4cF0gPSBwcm9ncmFtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VUZW1wbGF0ZSh0cGwpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VUcGwodHBsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlKHNlbGVjdG9yLCBidWZmZXIsIHBhcnNlcikge1xyXG4gICAgICAgIHZhciB0YXJnZXQsIGZ1bGxOYW1lLCBkZWZhdWx0TnMgPSB0aGlzLnNjb3BlLiRkYXRhLm5hbWVzcGFjZTtcclxuXHJcbiAgICAgICAgaWYgKGJ1ZmZlcltzZWxlY3Rvcl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBidWZmZXJbc2VsZWN0b3JdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZ1bGxOYW1lID0gdXRpbHMuY29udmVydFRvSHVtcE5hbWUoc2VsZWN0b3IsICctJyk7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuaW5qZWN0b3JbcGFyc2VyXShmdWxsTmFtZSwgdGhpcy51c2luZywgZGVmYXVsdE5zKTtcclxuICAgICAgICAgICAgYnVmZmVyW3NlbGVjdG9yXSA9IHRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzb2x2ZUNvbXBvbmVudChzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmUoc2VsZWN0b3IsIHRoaXMudHlwZS5jb21wb25lbnRzLCAncGFyc2VDb21wb25lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlRGlyZWN0aXZlKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZShzZWxlY3RvciwgdGhpcy50eXBlLmRpcmVjdGl2ZXMsICdwYXJzZURpcmVjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVGaWx0ZXIoc2VsZWN0b3IpIHtcclxuICAgICAgICB2YXIgZmlsdGVyLCBmaWx0ZXJDbHMsIGJ1ZmZlciA9IHRoaXMuZmlsdGVycztcclxuXHJcbiAgICAgICAgaWYgKGJ1ZmZlcltzZWxlY3Rvcl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmaWx0ZXIgPSBidWZmZXJbc2VsZWN0b3JdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbHRlckNscyA9IHRoaXMucmVzb2x2ZShzZWxlY3RvciwgdGhpcy50eXBlLmZpbHRlcnMsICdwYXJzZUZpbHRlcicpO1xyXG4gICAgICAgICAgICBmaWx0ZXIgPSB0aGlzLmluamVjdG9yLmNyZWF0ZUZpbHRlcihmaWx0ZXJDbHMpO1xyXG4gICAgICAgICAgICBidWZmZXJbc2VsZWN0b3JdID0gZmlsdGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IHZhciByb2xlcyA9IHtcbiAgICBmaWx0ZXI6IDAsXG4gICAgc2VydmljZTogMSxcbiAgICBjb21wb25lbnQ6IDIsXG4gICAgZGlyZWN0aXZlOiAzXG59OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlQ29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuJGRhdGEgPSB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJGRhdGEsIHRydWUpO1xufVxuXG5leHBvcnQgY2xhc3MgU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBzZXJ2aWNlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBmYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5JztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcblxuZnVuY3Rpb24gbmFtZXNwYWNlKG5hbWUpIHtcbiAgICBmdW5jdGlvbiBtZXJnZU1ldGFkYXRhKG1ldGFkYXRhKSB7XG4gICAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBuYW1lc3BhY2U6IG5hbWVcbiAgICAgICAgfSwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudChrZXksIGNvbmZpZywgbWVyZ2VNZXRhZGF0YShtZXRhZGF0YSkpO1xuICAgICAgICB9LFxuICAgICAgICBkaXJlY3RpdmU6IGZ1bmN0aW9uIChrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmUoa2V5LCBjb25maWcsIG1lcmdlTWV0YWRhdGEobWV0YWRhdGEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZTogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2Uoa2V5LCBjb25maWcsIG1lcmdlTWV0YWRhdGEobWV0YWRhdGEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKGtleSwgY29uZmlnLCBtZXJnZU1ldGFkYXRhKG1ldGFkYXRhKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKHNlbGVjdG9yLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgdmFyIFJvb3QgPSBmYWN0b3J5Lm1ha2VDb21wb25lbnQoJ2F1dG9tYXRlQXBwJywgY29uZmlnLCB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlOiBuYW1lLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBlbGVtZW50LmlubmVySFRNTFxuICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIHZhciByb290ID0gbmV3IFJvb3QoKTtcblxuICAgICAgICAgICAgZG9tLmNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICByb290LiRyZW5kZXIoKS5tb3VudChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudChrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VDb21wb25lbnQoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICBpbmplY3Rvci5yZWdpc3RlckNvbXBvbmVudChrZXksIGNvbnN0cnVjdG9yKTtcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdGl2ZShrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VEaXJlY3RpdmUoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICBpbmplY3Rvci5yZWdpc3RlckRpcmVjdGl2ZShrZXksIGNvbnN0cnVjdG9yKTtcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VGaWx0ZXIoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICBpbmplY3Rvci5yZWdpc3RlckZpbHRlcihrZXksIGNvbnN0cnVjdG9yKTtcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIHNlcnZpY2Uoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlU2VydmljZShrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyU2VydmljZShrZXksIGNvbnN0cnVjdG9yKTtcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIGlzQ29tcG9uZW50KGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgQ29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBpc0RpcmVjdGl2ZShpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIERpcmVjdGl2ZTtcbn1cblxuZnVuY3Rpb24gaXNGaWx0ZXIoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBGaWx0ZXI7XG59XG5cbmZ1bmN0aW9uIGlzU2VydmljZShpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIFNlcnZpY2U7XG59XG5cbmV4cG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIERpcmVjdGl2ZSxcbiAgICBGaWx0ZXIsXG4gICAgU2VydmljZSxcbiAgICBpc0NvbXBvbmVudCxcbiAgICBpc0RpcmVjdGl2ZSxcbiAgICBpc0ZpbHRlcixcbiAgICBpc1NlcnZpY2UsXG4gICAgbmFtZXNwYWNlLFxuICAgIGluamVjdG9yXG59OyJdLCJzb3VyY2VSb290IjoiIn0=