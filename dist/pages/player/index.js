"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _global_data = require("../../global_data.js");

var _index3 = require("../../api/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "anonymousState__temp9", "isPlayInfo", "isShowCommentList", "statusBarHeight", "titleBarHeight", "screenHeight", "screenWidth", "videoList", "isPlayIndex"], _this.initVideoInfo = function () {
      var isPlayIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var videoList = _this.state.videoList;

      var isPlayInfo = videoList[isPlayIndex];
      _this.setState({
        isPlayInfo: isPlayInfo,
        isPlayIndex: isPlayIndex
      });
    }, _this.onShareAppMessage = function () {
      var _this$state = _this.state,
          isPlayIndex = _this$state.isPlayIndex,
          isPlayInfo = _this$state.isPlayInfo;

      return {
        title: isPlayInfo.title,
        imageUrl: isPlayInfo.thumbnail,
        path: "/pages/player/index?isPlayIndex=" + isPlayIndex
      };
    }, _this.clickHandler = function () {
      _index2.default.navigateTo({
        url: '/pages/body/index'
      });
    }, _this.goBackHome = function () {
      var TYPE = _index2.default.getEnv();
      if (TYPE === 'WEB') {
        _index2.default.navigateTo({
          url: '/pages/index/index'
        });
      }
      if (TYPE === 'WEAPP') {
        _index2.default.switchTab({
          url: '/pages/index/index'
        });
      }
    }, _this.onClickZan = function () {
      var isPlayInfo = _this.state.isPlayInfo;

      _index2.default.showToast({ title: '点赞成功' });
      (0, _index3.actionLove)(isPlayInfo.id).then(function (res) {
        var data = res.data.data;

        console.log(data);
      });
      isPlayInfo.view_count++;
      console.log(isPlayInfo);
      _this.setState({ isPlayInfo: isPlayInfo });
    }, _this.goToBody = function () {
      var id = _this.state.isPlayInfo.id;

      var url = "/pages/body/index?articleId=" + id;
      _index2.default.navigateTo({
        url: url
      });
    }, _this.touchStartHandler = function (e) {
      console.log(e);
      _this.start = e.changedTouches[0];
    }, _this.touchMoveHandler = function (e) {}, _this.touchEndHandler = function (e) {
      _this.getDirect(_this.start, e.changedTouches[0]);
    }, _this.pre = function () {
      var _this$state2 = _this.state,
          isPlayIndex = _this$state2.isPlayIndex,
          videoList = _this$state2.videoList,
          isPlayInfo = _this$state2.isPlayInfo;

      var len = videoList.length;
      if (isPlayIndex === 0) {
        _index2.default.showToast({ title: '这是第一个', icon: 'none' });
        return;
      } else {
        isPlayIndex--;
        isPlayInfo = videoList[isPlayIndex];
        _this.setState({
          isPlayInfo: isPlayInfo,
          isPlayIndex: isPlayIndex
        });
      }
    }, _this.next = function () {
      var _this$state3 = _this.state,
          isPlayIndex = _this$state3.isPlayIndex,
          videoList = _this$state3.videoList,
          isPlayInfo = _this$state3.isPlayInfo;

      var len = videoList.length;
      if (isPlayIndex === len - 1) {
        _index2.default.showToast({ title: '这是最后一个', icon: 'none' });
        return;
      } else {
        isPlayIndex++;
        isPlayInfo = videoList[isPlayIndex];
        _this.setState({
          isPlayInfo: isPlayInfo,
          isPlayIndex: isPlayIndex
        });
      }
    }, _this.goToMore = function () {
      _index2.default.navigateTo({
        url: '/pages/videos/index'
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
        screenHeight: 0,
        screenWidth: 0,
        videoList: [],
        isPlayInfo: {},
        isPlayIndex: 0
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

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
      var isPlayIndex = this.$router.params.isPlayIndex;

      _index2.default.getStorage({ key: 'videosList' }).then(function (res) {
        var data = res.data;

        var videoList = JSON.parse(data);
        _this2.setState({
          videoList: videoList,
          isPlayInfo: videoList[isPlayIndex]
        });
        console.log(JSON.parse(data));
      });

      this.initVideoInfo(isPlayIndex);
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
    key: "getDirect",
    value: function getDirect(start, end) {
      var X = end.pageX - start.pageX,
          Y = end.pageY - start.pageY;
      if (Math.abs(X) > Math.abs(Y) && X > 0) {
        console.log('right');
        this.pre();
      } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
        console.log('left');
        this.next();
      } else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
        console.log('bottom');
      } else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
        console.log('top');
      }
    }
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

      var commentHeight = screenHeight / 1.5;
      var isShowCommentList = false;
      var isPlayInfo = this.__state.isPlayInfo;

      var anonymousState__temp = (0, _index.internal_inline_style)({ height: screenHeight + "px", width: screenWidth + "px" });
      var anonymousState__temp2 = (0, _index.internal_inline_style)({ height: titleBarHeight + "px", marginTop: statusBarHeight + "px" });
      var anonymousState__temp3 = "/pages/player/icon-back.png";
      var anonymousState__temp4 = "/pages/player/icon-zan.png";
      var anonymousState__temp5 = "/pages/player/icon-msg.png";
      var anonymousState__temp6 = "/pages/player/icon-more.png";
      var anonymousState__temp7 = "/pages/player/logo.png";
      var anonymousState__temp8 = isShowCommentList ? (0, _index.internal_inline_style)({ height: commentHeight + "px", overflow: 'auto' }) : null;
      var anonymousState__temp9 = isShowCommentList ? "/pages/player/icon-close.png" : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        anonymousState__temp9: anonymousState__temp9,
        isShowCommentList: isShowCommentList
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component);

Index.properties = {};
Index.$$events = ["touchStartHandler", "touchMoveHandler", "touchEndHandler", "goBackHome", "onClickZan", "goToBody", "goToMore"];
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));