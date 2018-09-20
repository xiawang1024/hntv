"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _global_data = require("../../global_data.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var list = function (_BaseComponent) {
  _inherits(list, _BaseComponent);

  function list() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, list);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = list.__proto__ || Object.getPrototypeOf(list)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray0", "statusBarHeight", "titleBarHeight", "dataList"], _this.goToBody = function (id) {
      var url = "/pages/body/index?articleId=" + id;
      _index2.default.navigateTo({
        url: url
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(list, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(list.prototype.__proto__ || Object.getPrototypeOf(list.prototype), "_constructor", this).call(this, props);
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

      var height = parseInt(titleBarHeight) + parseInt(statusBarHeight);
      var type = this.__props.type;
      var style = {
        paddingTop: height + "px"
      };
      if (type === 'sch') {
        style = {};
      }
      var anonymousState__temp = (0, _index.internal_inline_style)(style);

      var loopArray0 = this.__props.dataList.map(function (item) {
        var $loopState__temp3 = item.id.toString();
        return _extends({}, item, {
          $loopState__temp3: $loopState__temp3
        });
      });

      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray0: loopArray0
      });
      return this.__state;
    }
  }]);

  return list;
}(_index.Component);

list.properties = {
  "type": null,
  "dataList": null
};
list.$$events = ["goToBody"];
list.defaultProps = {
  dataList: []
};
exports.default = list;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(list));