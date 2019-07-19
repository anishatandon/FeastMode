'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WizardButton = function WizardButton(_ref) {
  var children = _ref.children,
      type = _ref.type,
      show = _ref.show,
      className = _ref.className,
      onClick = _ref.onClick,
      label = _ref.label,
      validator = _ref.validator;
  return show ? children ? _react2.default.cloneElement(children, {
    onClick: !validator || validator.call(null) ? onClick : null,
    disabled: typeof validator === 'function' && !validator.call(null)
  }) : _react2.default.createElement(
    'button',
    {
      type: type,
      className: className,
      onClick: !validator || validator.call(null) ? onClick : null,
      disabled: typeof validator === 'function' && !validator.call(null)
    },
    label || 'Next'
  ) : null;
};

WizardButton.defaultProps = {
  type: 'button'
};

WizardButton.propTypes = {
  show: _propTypes2.default.bool,
  type: _propTypes2.default.string,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  label: _propTypes2.default.string,
  validator: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};

WizardButton.displayName = 'WizardButton';

exports.default = WizardButton;