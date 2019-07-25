"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigProvider = exports.withConfig = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.assign");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cache = _interopRequireDefault(require("./cache"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaults = {
  cache: _cache.default,
  colors: _utils.defaultColors,
  initials: _utils.defaultInitials,
  avatarRedirectUrl: null
};
var contextKeys = Object.keys(defaults);
/**
 * withConfig and ConfigProvider provide a compatibility layer for different
 * versions of React equiped with different versions of the Context API.
 *
 * If the new Context API is available it will be used, otherwise we will
 * fall back to the legacy context api.
 */

var ConfigContext = _react.default.createContext && _react.default.createContext();

var ConfigConsumer = ConfigContext ? ConfigContext.Consumer : null;

var withConfig = function withConfig(Component) {
  function withAvatarConfig(props) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var reactAvatar = context.reactAvatar;
    if (!ConfigConsumer) return _react.default.createElement(Component, _extends({}, defaults, reactAvatar, props));
    /* eslint-disable react/display-name */

    return _react.default.createElement(ConfigConsumer, null, function (config) {
      return _react.default.createElement(Component, _extends({}, defaults, config, props));
    });
    /* eslint-enable react/display-name */
  }

  withAvatarConfig.contextTypes = {
    reactAvatar: _propTypes.default.object
  };
  return withAvatarConfig;
};

exports.withConfig = withConfig;

var ConfigProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfigProvider, _React$Component);

  function ConfigProvider() {
    _classCallCheck(this, ConfigProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConfigProvider).apply(this, arguments));
  }

  _createClass(ConfigProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        reactAvatar: this._getContext()
      };
    }
  }, {
    key: "_getContext",
    value: function _getContext() {
      var _this = this;

      var context = {};
      contextKeys.forEach(function (key) {
        if (typeof _this.props[key] !== 'undefined') context[key] = _this.props[key];
      });
      return context;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      if (!ConfigContext) return _react.default.Children.only(children);
      return _react.default.createElement(ConfigContext.Provider, {
        value: this._getContext()
      }, _react.default.Children.only(children));
    }
  }]);

  return ConfigProvider;
}(_react.default.Component);

exports.ConfigProvider = ConfigProvider;

_defineProperty(ConfigProvider, "displayName", 'ConfigProvider');

_defineProperty(ConfigProvider, "propTypes", {
  cache: _propTypes.default.object,
  colors: _propTypes.default.arrayOf(_propTypes.default.string),
  initials: _propTypes.default.func,
  avatarRedirectUrl: _propTypes.default.string,
  children: _propTypes.default.node
});

_defineProperty(ConfigProvider, "childContextTypes", {
  reactAvatar: _propTypes.default.object
});