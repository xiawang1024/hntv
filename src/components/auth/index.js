import Taro, { Component } from '@tarojs/taro'
import { View, OpenData, Button } from '@tarojs/components'
import './index.scss'

import { set as setGlobalData } from '../../global_data'

export default class Auth extends Component {
  config = {}

  componentWillMount() {}
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}
  getUserInfoHandler = (e) => {
    let { detail } = e
    let { onCloseAuth } = this.props

    if (detail.userInfo) {
      onCloseAuth()
      setGlobalData('userInfo', detail.userInfo)
    } else {
      /**
       * 拒绝授权
       */

      Taro.showModal({
        title: '警告',
        content: '您拒绝了授权，请授权之后再PK'
      })
    }
  }
  render() {
    return (
      <View className='auth-wrap'>
        <View className='m-auth'>
          <View className='avatar-wrap'>
            <OpenData className='avatar' type='userAvatarUrl' />
          </View>
          <View className='tips'>
            <View className='m-tips'>
              <OpenData className='name' type='userNickName' /> 申请获得以下权限
            </View>
            <View className='line' />
            <View className='msg'>*获得你的公开信息（昵称、头像等）</View>
          </View>
          <Button className='get-user' openType='getUserInfo' type='primary' onGetUserInfo={this.getUserInfoHandler}>
            立即授权
          </Button>
        </View>
      </View>
    )
  }
}
