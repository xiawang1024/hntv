import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Score extends Component {
  config = {}

  componentWillMount() {}
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return (
      <View className='score-wrap'>
        <View className='m-wrap'>
          <View className='m-score'>
            <View className='u-score'>
              <Text className='score'>9.5</Text>分
            </View>
            <View className='m-percent'>
              <View className='u-tips'>您这次的挑战击败了</View>
              <View className='u-percent'>
                <Text className='percent'>99.9%</Text>的用户
              </View>
            </View>
          </View>
          <View className='u-close' />
        </View>
      </View>
    )
  }
}
