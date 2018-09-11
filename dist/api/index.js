"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionLove = exports.getTypeList = exports.getArticleList = exports.getArticleData = exports.getSearchList = exports.getVideosList = exports.getSwipeData = undefined;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _base = require("../npm/js-base64/base64.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base_URL = 'https://a.weixin.hndt.com/ktvcms/api?';
/**
 * 轮播图：
 * @param {*} id 分类id
 * @param {*} page 页码
 * @param {*} pagesize 每页数量
 */
var getSwipeData = function getSwipeData() {
  var pagesize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return _index2.default.request({
    url: Base_URL + "method=queryContentByCategory&id=" + id + "&page=" + page + "&pagesize=" + pagesize
  });
};
/**
 * 首页展示的单篇文章(视频列表)：
 * @param {*} pagesize 每页数量
 * @param {*} id 分类id
 * @param {*} page 页码
 */
var getVideosList = function getVideosList() {
  var pagesize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return _index2.default.request({
    url: Base_URL + "method=queryContentByCategory&id=" + id + "&page=" + page + "&pagesize=" + pagesize
  });
};
/**
 * 搜索
 * @param {*} keywords 经过base64编码
 */
var getSearchList = function getSearchList(keywords) {
  var base64KeyWord = _base.Base64.encode(keywords);
  return _index2.default.request({
    url: Base_URL + "method=queryContentByKeywords&keywords=" + base64KeyWord
  });
};
/**
 * 根据文章ID查询正文
 * @param {*} id
 */
var getArticleData = function getArticleData(id) {
  return _index2.default.request({
    url: Base_URL + "method=queryContent&id=" + id
  });
};
/**
 * 根据文章分类查询正文列表
 * @param {*} id
 */
var getArticleList = function getArticleList(id) {
  return _index2.default.request({
    url: Base_URL + "method=queryContentByCategory&id=" + id
  });
};
/**
 * 根据父类ID查询子分类
 * @param {*} id 父级分类ID
 *
 * ID  名称
  1	新闻矩阵
  5	教育服务
  6	互动IP
  7	大健康
  9	综艺季播
  10	体育

  45 刊例
  46 团队
 */
var getTypeList = function getTypeList(id) {
  return _index2.default.request({
    url: Base_URL + "method=queryTaxonomyByParent&id=" + id
  });
};
/**
 * 点赞接口
 * @param {*} id 文章id
 */
var actionLove = function actionLove(id) {
  return _index2.default.request({
    url: "https://a.weixin.hndt.com/action/api?method=actionContentViewCount&id=" + id
  });
};
exports.getSwipeData = getSwipeData;
exports.getVideosList = getVideosList;
exports.getSearchList = getSearchList;
exports.getArticleData = getArticleData;
exports.getArticleList = getArticleList;
exports.getTypeList = getTypeList;
exports.actionLove = actionLove;

/**
 * 文章字段说明：

"summary": null,
"meta_keywords": null,
"comment_status": null,
"remarks": "资讯", （所属分类）
"lng": null,
"user_email": null,
"user_ip": null,
"id": 1,
"author": null,
"title": "明确十种情形可容错免责 武汉出台激励干部担当作为办法",
"rate": null,
"style": null,
"created": "2018-08-23 10:32:28",
"user_id": 1,
"lat": null,
"parent_id": null,
"comment_count": 2,
"order_number": 0,
"module": "article",
"text": "<p>明确十种情形可容错免</p>", (正文)
"link_to": null,
"status": "normal",
"object_id": null,
"modified": "2018-08-23 11:47:35",
"rate_count": 0,
"meta_description": null,
"flag": null,   (文章中视频地址)
"thumbnail": null,
"price": 0,
"user_agent": null,
"slug": "明确十种情形可容错免责_武汉出台激励干部担当作为办法",
"view_count": 10,//点赞数
"markdown_enable": false,
"vote_down": 0,
"vote_up": 0,
"comment_time": null
 */