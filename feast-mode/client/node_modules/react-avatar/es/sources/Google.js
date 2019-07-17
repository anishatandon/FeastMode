'use strict';

import "core-js/modules/es6.regexp.replace";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import { fetch } from '../utils';

var GoogleSource = function GoogleSource(props) {
  var _this = this;

  _classCallCheck(this, GoogleSource);

  _defineProperty(this, "props", null);

  _defineProperty(this, "isCompatible", function () {
    return !!_this.props.googleId;
  });

  _defineProperty(this, "get", function (setState) {
    var _this$props = _this.props,
        cache = _this$props.cache,
        size = _this$props.size,
        googleId = _this$props.googleId;
    var url = "https://picasaweb.google.com/data/entry/api/user/".concat(googleId, "?alt=json");

    if (cache.hasSourceFailedBefore(url)) {
      setState(null);
      return;
    }

    fetch(url, function (data) {
      var src = data.entry.gphoto$thumbnail.$t;
      var srcWithCorrectSize = src.replace('s64', 's' + size);
      setState({
        sourceName: 'google',
        src: srcWithCorrectSize
      });
    }, function () {
      // on error
      cache.sourceFailed(url);
      setState(null);
    });
  });

  this.props = props;
};

_defineProperty(GoogleSource, "propTypes", {
  googleId: PropTypes.string
});

export { GoogleSource as default };