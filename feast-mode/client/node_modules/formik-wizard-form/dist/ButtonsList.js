'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonsList = function ButtonsList(_ref) {
  var activeStepIndex = _ref.activeStepIndex,
      totalSteps = _ref.totalSteps,
      onPreviousStep = _ref.onPreviousStep,
      onNextStep = _ref.onNextStep,
      onSubmit = _ref.onSubmit,
      children = _ref.children,
      validators = _ref.validators;
  return _react2.default.createElement(
    'div',
    { className: 'react-formik-wizard__footer' },
    _react.Children.map(children, function (child) {
      var validator = validators[activeStepIndex];
      if (child.type.displayName === 'PreviousButton') {
        return _react2.default.createElement(
          'div',
          { className: 'previous' },
          _react2.default.createElement(_Button2.default, _extends({
            className: 'react-formik-wizard__footer__button react-formik-wizard__footer__button--previous',
            show: activeStepIndex > 0,
            onClick: onPreviousStep,
            label: 'Previous'
          }, child.props))
        );
      }
      if (child.type.displayName === 'NextButton') {
        return _react2.default.createElement(_Button2.default, _extends({
          className: 'react-formik-wizard__footer__button react-formik-wizard__footer__button--next',
          show: activeStepIndex < totalSteps,
          onClick: onNextStep,
          validator: validator,
          label: 'Next'
        }, child.props));
      }
      if (child.type.displayName === 'SubmitButton') {
        return _react2.default.createElement(_Button2.default, _extends({
          className: 'react-formik-wizard__footer__button react-formik-wizard__footer__button--submit',
          show: activeStepIndex === totalSteps,
          onClick: onSubmit,
          validator: validator,
          type: 'submit',
          label: 'Finish'
        }, child.props));
      }
      return child;
    })
  );
};

ButtonsList.propTypes = {
  activeStepIndex: _propTypes2.default.number,
  totalSteps: _propTypes2.default.number,
  onPreviousStep: _propTypes2.default.func,
  onNextStep: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  validators: _propTypes2.default.array,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};

ButtonsList.displayName = 'ButtonsList';

exports.default = ButtonsList;