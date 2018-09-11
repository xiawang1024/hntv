"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var modelData = [{
  id: 1,
  icon: "/icons/model-1.png",
  text: '新闻矩阵'
}, {
  id: 2,
  icon: "/icons/model-3.png",
  text: '互动IP'
}, {
  id: 3,
  icon: "/icons/model-2.png",
  text: '综艺季播'
}, {
  id: 4,
  icon: "/icons/model-4.png",
  text: '大健康'
}, {
  id: 5,
  icon: "/icons/model-5.png",
  text: '教育服务'
}, {
  id: 6,
  icon: "/icons/model-6.png",
  text: '体育'
}];

var Index = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray0", "loopArray1", "loopArray2", "modelData", "statusBarHeight", "titleBarHeight", "videosList", "swipeList"], _this.onShareAppMessage = function () {}, _this.fetchSwipeData = function () {
      (0, _index3.getSwipeData)().then(function (res) {
        var data = res.data.data;

        _this.setState({
          swipeList: data
        });
      });
    }, _this.fetchVideoList = function () {
      (0, _index3.getVideosList)().then(function (res) {
        var _res$data = res.data,
            data = _res$data.data,
            errorCode = _res$data.errorCode;

        if (errorCode === 0) {
          _this.setState({
            videosList: data
          });
          _index2.default.setStorage({
            key: 'videosList',
            data: JSON.stringify(data)
          });
        }
      });
    }, _this.onClickHandler = function (typeIndex) {
      var url = "/pages/type/index?typeIndex=" + typeIndex;
      _index2.default.navigateTo({
        url: url
      });
    }, _this.onGoToPlayer = function (id) {
      var videosList = _this.state.videosList;

      var isPlayIndex = videosList.findIndex(function (item, index) {
        return item.id === id;
      });
      console.log(isPlayIndex);
      _index2.default.navigateTo({
        url: "/pages/player/index?isPlayIndex=" + isPlayIndex
      });
    }, _this.goToBody = function (id) {
      var url = "/pages/body/index?articleId=" + id;
      _index2.default.navigateTo({
        url: url
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
      this.state = {
        statusBarHeight: 0,
        titleBarHeight: 0,
        videosList: [],
        swipeList: []
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
      this.fetchVideoList();
      this.fetchSwipeData();
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

      var titleBarHeight = this.__state.titleBarHeight;
      var statusBarHeight = this.__state.statusBarHeight;
      var anonymousState__temp = (0, _index.internal_inline_style)({ height: titleBarHeight + "px", top: statusBarHeight + "px" });

      var loopArray0 = this.__state.swipeList.map(function (item, index) {
        var $loopState__temp3 = item.id.toString();
        return _extends({}, item, {
          $loopState__temp3: $loopState__temp3
        });
      });

      var loopArray1 = modelData.map(function (item) {
        var $loopState__temp5 = item.id.toString();
        return _extends({}, item, {
          $loopState__temp5: $loopState__temp5
        });
      });

      var loopArray2 = this.__state.videosList.map(function (item, index) {
        var $loopState__temp7 = item.id.toString();
        return _extends({}, item, {
          $loopState__temp7: $loopState__temp7
        });
      });

      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray0: loopArray0,
        loopArray1: loopArray1,
        loopArray2: loopArray2,
        modelData: modelData
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component);

Index.properties = {};
Index.$$events = ["goToBody", "onClickHandler", "onGoToPlayer"];
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));