'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';

var TwitterSource =
/*#__PURE__*/
function () {
  function TwitterSource(props) {
    var _this = this;

    _classCallCheck(this, TwitterSource);

    _defineProperty(this, "props", null);

    _defineProperty(this, "isCompatible", function () {
      return !!_this.props.twitterHandle;
    });

    _defineProperty(this, "get", function (setState) {
      var twitterHandle = _this.props.twitterHandle;

      var size = _this.getImageSize();

      var url = "https://twitter.com/".concat(twitterHandle, "/profile_image?size=").concat(size);
      setState({
        sourceName: 'twitter',
        src: url
      });
    });

    this.props = props;
  }

  _createClass(TwitterSource, [{
    key: "getImageSize",
    value: function getImageSize() {
      var size = this.props.size;
      if (size <= 24) return 'mini';
      if (size <= 48) return 'normal';
      if (size <= 73) return 'bigger';
      return 'original';
    }
  }]);

  return TwitterSource;
}();

_defineProperty(TwitterSource, "propTypes", {
  twitterHandle: PropTypes.string
});

export { TwitterSource as default };