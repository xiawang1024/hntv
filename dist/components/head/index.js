"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _global_data = require("../../global_data.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var head = function (_BaseComponent) {
  _inherits(head, _BaseComponent);

  function head() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, head);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = head.__proto__ || Object.getPrototypeOf(head)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "type", "title", "statusBarHeight", "titleBarHeight"], _this.goBackHome = function () {
      var type = _this.props.type;


      var APP_TYPE = _index2.default.getEnv();

      if (APP_TYPE === 'WEB') {
        _index2.default.navigateTo({
          url: '/pages/index/index'
        });
      }
      if (APP_TYPE === 'WEAPP') {
        // if (type === 'tab') {
        // 	Taro.switchTab({
        // 		url: '/pages/index/index'
        // 	});
        // } else {
        // 	Taro.navigateBack();
        // }
        _index2.default.switchTab({
          url: '/pages/index/index'
        });
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(head, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(head.prototype.__proto__ || Object.getPrototypeOf(head.prototype), "_constructor", this).call(this, props);
      this.state = {
        statusBarHeight: 0,
        titleBarHeight: 0
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var statusBarHeight = (0, _global_data.get)('statusBarHeight');
      var titleBarHeight = (0, _global_data.get)('titleBarHeight');
      this.setState({
        statusBarHeight: statusBarHeight,
        titleBarHeight: titleBarHeight
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _state = this.__state,
          titleBarHeight = _state.titleBarHeight,
          statusBarHeight = _state.statusBarHeight;
      var _props = this.__props,
          title = _props.title,
          type = _props.type;

      var anonymousState__temp = (0, _index.internal_inline_style)({ height: titleBarHeight + "px", paddingTop: statusBarHeight + "px" });
      var anonymousState__temp2 = (0, _index.internal_inline_style)({ height: titleBarHeight + "px", marginTop: statusBarHeight + "px" });
      var anonymousState__temp3 = "/icons/icon-back.png";
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        type: type,
        title: title
      });
      return this.__state;
    }
  }]);

  return head;
}(_index.Component);

head.properties = {
  "type": null,
  "title": null
};
head.$$events = ["goBackHome"];
exports.default = head;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(head));