import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

import Data from './mockData'

export default class ScenicList extends Component {
  config = {
    navigationBarTitleText: '河南风景区',
    backgroundColor: '#f7f7f7'
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

  onReachBottom() {}

  render() {
    return (
      <View className='list-wrap'>
        {Data.map((item) => (
          <View className='item' key={String(item.id)}>
            <Image className='cover' src={item.imageUrl} />
            <Text className='title'>{item.name}</Text>
            <Text className='desc'>{item.comments}</Text>
          </View>
        ))}
      </View>
    )
  }
}
