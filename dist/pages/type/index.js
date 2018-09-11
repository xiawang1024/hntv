"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../api/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TITLELIST = [{
  id: 1,
  text: '新闻矩阵'
}, {
  id: 2,
  text: '互动IP'
}, {
  id: 3,
  text: '综艺季播'
}, {
  id: 4,
  text: '大健康'
}, {
  id: 5,
  text: '教育服务'
}, {
  id: 6,
  text: '体育'
}];

var type = function (_BaseComponent) {
  _inherits(type, _BaseComponent);

  function type() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, type);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = type.__proto__ || Object.getPrototypeOf(type)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["dataList", "title"], _this.onShareAppMessage = function () {}, _this.fetchGetTypeList = function (typeId) {
      (0, _index3.getArticleList)(typeId).then(function (res) {
        var _res$data = res.data,
            errorCode = _res$data.errorCode,
            data = _res$data.data;

        if (errorCode === 0) {
          _this.setState({ dataList: data });
        }
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(type, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(type.prototype.__proto__ || Object.getPrototypeOf(type.prototype), "_constructor", this).call(this, props);
      this.state = {
        title: '',
        dataList: []
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var typeIndex = this.$router.params.typeIndex;

      var titleArr = TITLELIST.filter(function (item) {
        return item.id == typeIndex;
      });
      var title = titleArr[0].text;
      this.setState({
        title: title
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var typeIndex = this.$router.params.typeIndex;

      var idArr = [1, 1, 6, 9, 7, 5, 10];
      var typeId = idArr[typeIndex];
      this.fetchGetTypeList(typeId);
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

      var dataList = this.__state.dataList;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return type;
}(_index.Component);

type.properties = {};
type.$$events = [];
exports.default = type;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(type, true));