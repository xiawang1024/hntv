"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtIcon = function (_AtComponent) {
  _inherits(AtIcon, _AtComponent);

  function AtIcon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtIcon.__proto__ || Object.getPrototypeOf(AtIcon)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "rootClassName"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtIcon, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtIcon.prototype.__proto__ || Object.getPrototypeOf(AtIcon.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.__triggerPropsFn("onClick", [null].concat([].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _props = this.__props,
          _props$value = _props.value,
          value = _props$value === undefined ? '' : _props$value,
          size = _props.size,
          color = _props.color;


      var rootStyle = {
        fontSize: size + "px",
        color: color
      };

      var rootClassName = ['at-icon', "at-icon-" + value];
      // console.log('value====', value)
      var anonymousState__temp = (0, _index.internal_inline_style)(rootStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        rootClassName: rootClassName
      });
      return this.__state;
    }
  }]);

  return AtIcon;
}(_component2.default);

AtIcon.properties = {
  "__fn_onClick": null,
  "value": null,
  "size": null,
  "color": null
};
AtIcon.$$events = [];


AtIcon.defaultProps = {
  color: '',
  size: '24',
  onClick: function onClick() {}
};
AtIcon.propTypes = {
  color: _index4.default.string,
  size: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  onClick: _index4.default.func
};
exports.default = AtIcon;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtIcon));