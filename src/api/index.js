import Taro from '@tarojs/taro'
import { get as getGlobalData } from '../global_data'

const Base_URL = 'https://hudong.hndt.com/CAR999/app'

/**
 * 获取景区列表
 * @param {*} pageNo
 * @param {*} pageSize
 * @param {*} sortBy
 * @param {*} order
 */
// eslint-disable-next-line import/prefer-default-export
export const getScenicList = (pageNo, pageSize, sortBy = 'sort', order = 'DESC', name = '') =>
  Taro.request({
    method: 'POST',
    url: `${Base_URL}/scenicSpots/q?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&order=${order}`,
    data: {
      name
    }
  })
/**
 * 获取单个景区
 * @param {*} id
 */
export const getScenicById = (id) =>
  Taro.request({
    url: `${Base_URL}/scenicSpots/${id}`
  })
/**
 * 获取单个景区留言
 * @param {*} id
 */
export const getScenicVoiceList = (pageNo, pageSize, scenicSpotId, sortBy = 'sort', order = 'DESC') =>
  Taro.request({
    method: 'POST',
    url: `${Base_URL}/scenicSpotVoices/q?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&order=${order}`,
    data: {
      scenicSpotId
    }
  })
/**
 * 创建景区留言
 * @param {*} scenicSpotId
 * @param {*} voiceUrl
 * @param {*} score
 * @param {*} headImg
 * @param {*} nickname
 * @param {*} id
 * @param {*} createDate
 */
export const createScenicVoice = (scenicSpotId, voiceUrl, score, headImg, nickname, createDate) => {
  let userInfo = getGlobalData('userInfo')
  headImg = userInfo.avatarUrl
  nickname = userInfo.nickName

  createDate = `${Date.parse(new Date())}`
  return Taro.request({
    url: `${Base_URL}/scenicSpotVoices`,
    method: 'POST',
    data: {
      scenicSpotId,
      voiceUrl,
      score,
      headImg,
      nickname,
      createDate
    }
  })
}
/**
 * 上传voice
 * @param {*} path
 */
export const uploadVoice = (path) =>
  Taro.uploadFile({
    url: `https://hudong.hndt.com/TP//upload/file`,
    name: 'file',
    filePath: path
  })
