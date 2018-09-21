"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../api/index.js");

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = list.__proto__ || Object.getPrototypeOf(list)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "inputValue", "schList", "statusBarHeight", "titleBarHeight", "screenHeight", "screenWidth"], _this.onShareAppMessage = function () {}, _this.inputConfirm = function () {
      _this.fetchSchList();
    }, _this.inputHandler = function (e) {
      var inputValue = e.detail.value;
      _this.setState({
        inputValue: inputValue
      });
    }, _this.clearIptValue = function () {
      _index2.default.showToast({
        title: '清空搜索',
        icon: 'none'
      });
      _this.setState({
        inputValue: '',
        schList: []
      });
    }, _this.fetchSchList = function () {
      (0, _index3.getSearchList)(_this.state.inputValue).then(function (res) {
        var _res$data = res.data,
            data = _res$data.data,
            errorCode = _res$data.errorCode;

        if (errorCode === 0) {
          if (data && data.length > 0) {
            _index2.default.showToast({
              title: '搜索成功',
              icon: 'success'
            });
            _this.setState({
              schList: data
            });
          } else {
            _index2.default.showToast({ title: '未查询到相关信息', icon: 'none' });
          }
        } else {
          _index2.default.showToast({ title: '未查询到相关信息', icon: 'none' });
        }
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(list, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(list.prototype.__proto__ || Object.getPrototypeOf(list.prototype), "_constructor", this).call(this, props);
      this.state = {
        inputValue: '',
        schList: [],
        statusBarHeight: 0,
        titleBarHeight: 0,
        screenHeight: 0,
        screenWidth: 0
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
      var screenHeight = (0, _global_data.get)('screenHeight');
      var screenWidth = (0, _global_data.get)('screenWidth');
      this.setState({
        statusBarHeight: statusBarHeight,
        titleBarHeight: titleBarHeight,
        screenHeight: screenHeight,
        screenWidth: screenWidth
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
          statusBarHeight = _state.statusBarHeight,
          screenHeight = _state.screenHeight,
          screenWidth = _state.screenWidth;

      var height = parseInt(titleBarHeight) + parseInt(statusBarHeight) + 10;
      var anonymousState__temp = (0, _index.internal_inline_style)({ height: screenHeight + "px", width: screenWidth + "px" });
      var anonymousState__temp2 = "/pages/tab3/bg.png";
      var anonymousState__temp3 = (0, _index.internal_inline_style)({ height: screenHeight + "px", width: screenWidth + "px" });
      var anonymousState__temp4 = (0, _index.internal_inline_style)({ height: titleBarHeight + "px", paddingTop: statusBarHeight + "px", display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4
      });
      return this.__state;
    }
  }]);

  return list;
}(_index.Component);

list.properties = {};
list.$$events = ["inputConfirm", "inputHandler", "clearIptValue"];
exports.default = list;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(list, true));