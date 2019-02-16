import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class Score extends Component {
  config = {}

  componentWillMount() {}
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}
  close = () => {
    let { onCloseScore } = this.props
    onCloseScore()
  }
  render() {
    let { scoreInfo } = this.props
    return (
      <View className='score-wrap'>
        <View className='m-wrap'>
          <View className='m-score'>
            <View className='u-score'>
              <Text className='score'>{scoreInfo.score}</Text>分
            </View>
            <View className='m-percent'>
              <View className='u-tips'>您这次的挑战击败了</View>
              <View className='u-percent'>
                <Text className='percent'>{scoreInfo.percent}</Text>的用户
              </View>
            </View>
            <Button className='u-share' type='default' open-type='share'>
              立即分享
            </Button>
          </View>
          <View className='u-close' onClick={this.close} />
        </View>
      </View>
    )
  }
}
