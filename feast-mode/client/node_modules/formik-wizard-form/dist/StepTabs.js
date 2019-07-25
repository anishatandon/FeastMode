'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepTabs = function StepTabs(_ref) {
  var tabs = _ref.tabs,
      activeStepIndex = _ref.activeStepIndex;
  return _react2.default.createElement(
    'div',
    { className: 'react-formik-wizard__step-tabs' },
    _react2.default.createElement(
      'ul',
      { className: 'react-formik-wizard__step-tabs__tab-list' },
      tabs.map(function (tab, index) {
        return _react2.default.createElement(
          'li',
          {
            className: index === activeStepIndex ? 'is-active' : '',
            key: tab.title
          },
          tab.title
        );
      })
    )
  );
};

StepTabs.propTypes = {
  tabs: _propTypes2.default.array,
  activeStepIndex: _propTypes2.default.number
};

exports.default = StepTabs;