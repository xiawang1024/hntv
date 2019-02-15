import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class ScenicVoice extends Component {
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

  render() {
    return (
      <View className='index'>
        <Text>首页</Text>
        <Button>我要PK</Button>
      </View>
    )
  }
}
