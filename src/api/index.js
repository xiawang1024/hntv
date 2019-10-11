/*
 * @Description:
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-10-11 14:42:12
 * @LastEditTime: 2019-10-11 16:21:04
 */
import Taro from '@tarojs/taro';
import { Base64 } from 'js-base64';
const Base_URL = 'https://a.weixin.hndt.com/ktvcms/api?';
const DZ_URL = 'https://pubmob.dianzhenkeji.com'

const getDocList = (pageNo = 1, pageSize = 20) => Taro.request({
  url: `${DZ_URL}/cms/articles`,
  data: {
    pageNo,
    pageSize,
    channelId: '1146267515798818816',
    tenantId: 'hntvdushi'
  }
})
/**
 * 轮播图：
 * @param {*} id 分类id
 * @param {*} page 页码
 * @param {*} pagesize 每页数量
 */
const getSwipeData = (pagesize = 10, id = 4, page = 1) =>
  Taro.request({
    url: `${Base_URL}method=queryContentByCategory&id=${id}&page=${page}&pagesize=${pagesize}`
  });
/**
 * 首页展示的单篇文章(视频列表)：
 * @param {*} pagesize 每页数量
 * @param {*} id 分类id
 * @param {*} page 页码
 */
const getVideosList = (pagesize = 20, id = 15, page = 1) =>
  Taro.request({
    url: `${Base_URL}method=queryContentByCategory&id=${id}&page=${page}&pagesize=${pagesize}`
  });
/**
 * 搜索
 * @param {*} keywords 经过base64编码
 */
const getSearchList = (keywords) => {
  // let base64KeyWord = Base64.encode(keywords);
  let base64KeyWord = encodeURI(keywords);
  return Taro.request({
    url: `${Base_URL}method=queryContentByKeywords&keywords=${base64KeyWord}`
  });
};
/**
 * 根据文章ID查询正文
 * @param {*} id
 */
const getArticleData = (id) =>
  Taro.request({
    url: `${Base_URL}method=queryContent&id=${id}`
  });
/**
 * 根据文章分类查询正文列表
 * @param {*} id
 */
const getArticleList = (id) =>
  Taro.request({
    url: `${Base_URL}method=queryContentByCategory&id=${id}`
  });
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
const getTypeList = (id) =>
  Taro.request({
    url: `${Base_URL}method=queryTaxonomyByParent&id=${id}`
  });
/**
 * 点赞接口
 * @param {*} id 文章id
 */
const actionLove = (id) =>
  Taro.request({
    url: `https://a.weixin.hndt.com/ktvcms/action/api?method=actionContentViewCount&id=${id}`
  });
/**
 * 开机图
 */
const getStartImg = () => Taro.request({
  url: 'https://a.weixin.hndt.com/ktvcms/api?method=queryContent&id=54'
})
export { getSwipeData, getVideosList, getSearchList, getArticleData, getArticleList, getTypeList, actionLove, getStartImg, getDocList };

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
