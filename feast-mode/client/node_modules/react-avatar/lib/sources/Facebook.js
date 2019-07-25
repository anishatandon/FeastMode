'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FacebookSource = function FacebookSource(props) {
  var _this = this;

  _classCallCheck(this, FacebookSource);

  _defineProperty(this, "props", null);

  _defineProperty(this, "isCompatible", function () {
    return !!_this.props.facebookId;
  });

  _defineProperty(this, "get", function (setState) {
    var _this$props = _this.props,
        size = _this$props.size,
        facebookId = _this$props.facebookId;
    var url = 'https://graph.facebook.com/' + "".concat(facebookId, "/picture?width=").concat(size, "&height=").concat(size);
    setState({
      sourceName: 'facebook',
      src: url
    });
  });

  this.props = props;
};

exports.default = FacebookSource;

_defineProperty(FacebookSource, "propTypes", {
  facebookId: _propTypes.default.string
});