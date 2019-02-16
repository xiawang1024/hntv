import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: 'Talk河南',
    disableScroll: true
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  onShareAppMessage = () => {}
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  toScenicList = () => {
    Taro.navigateTo({
      url: '/pages/scenicList/index'
    })
  }
  render() {
    return (
      <View className='index'>
        <Image
          className='cover'
          mode='aspectFill'
          src='http://www.hndt.com/h5/999/cover.png'
          onClick={this.toScenicList}
        />
      </View>
    )
  }
}
