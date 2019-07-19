'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Step = function Step(_ref) {
  var isActive = _ref.isActive,
      component = _ref.component,
      props = _objectWithoutProperties(_ref, ['isActive', 'component']);

  return isActive ? _react2.default.createElement(
    _react2.default.Fragment,
    null,
    component(props)
  ) : null;
};

Step.propTypes = {
  isActive: _propTypes2.default.bool,
  component: _propTypes2.default.func
};

Step.displayName = 'Step';

exports.default = Step;