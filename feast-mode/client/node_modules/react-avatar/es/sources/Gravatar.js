'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import retina from 'is-retina';
import md5 from 'md5';
var IS_RETINA = retina();

var GravatarSource = function GravatarSource(_props) {
  var _this = this;

  _classCallCheck(this, GravatarSource);

  _defineProperty(this, "props", null);

  _defineProperty(this, "isCompatible", function () {
    return !!_this.props.email || !!_this.props.md5Email;
  });

  _defineProperty(this, "get", function (setState) {
    var props = _this.props;
    var email = props.md5Email || md5(props.email);
    var size = IS_RETINA ? props.size * 2 : props.size;
    var url = "https://secure.gravatar.com/avatar/".concat(email, "?s=").concat(size, "&d=404");
    setState({
      sourceName: 'gravatar',
      src: url
    });
  });

  this.props = _props;
};

_defineProperty(GravatarSource, "propTypes", {
  email: PropTypes.string,
  md5Email: PropTypes.string
});

export { GravatarSource as default };