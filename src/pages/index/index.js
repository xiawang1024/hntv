import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import { get as getGlobalData } from '../../global_data'
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '私家车999',
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
        <Text>首页</Text>
        <Button onClick={this.toScenicList}>我要PK</Button>
      </View>
    )
  }
}
