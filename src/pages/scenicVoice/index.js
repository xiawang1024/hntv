import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Slider } from '@tarojs/components'
import './index.scss'

import { VoiceList, Scenic } from './mockData'

export default class ScenicVoice extends Component {
  config = {
    enablePullDownRefresh: true,
    backgroundColor: '#f7f7f7'
  }
  constructor(props) {
    super(props)
    this.state = {
      playStatus: 'start'
    }
  }
  onShareAppMessage = () => {}
  componentWillMount() {}

  componentDidMount() {
    Taro.setNavigationBarTitle({ title: '登封--嵩山少林风景区' }).then((_) => console.log(_))
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  playStatus = () => {
    return [ 'u-btn', this.state.playStatus ].join(' ')
  }
  render() {
    return (
      <View className='voice-wrap'>
        <View className='scenic-wrap' key={String(Scenic.id)}>
          <Image className='cover' src={Scenic.imageUrl} />
          <Text className='title'>{Scenic.name}</Text>
          <Text className='desc'>{Scenic.comments}</Text>
          <View className='item'>
            <View className='m-top'>
              <View className='m-avatar'>
                <Image className='avatar' src='http://www.hndt.com/podcast/1111/res/xtmZ0Bee.png?1508751589195' />
              </View>
              <View className='m-voice'>
                <View className={this.playStatus()} />
                <View className='u-progress'>
                  <Slider
                    step='1'
                    value='100'
                    min='50'
                    max='200'
                    blockSize='12'
                    blockColor='#31ace7'
                    backgroundColor='#cccccc'
                    activeColor='#31ace7'
                    style='margin:0'
                  />
                  <View className='time-wrap'>
                    <Text className='time'>00:00</Text>
                    <Text className='time'>10:00</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className='m-info'>
              <Text className='name'>河南广播</Text>
              <Text className='score host'>主持人</Text>
            </View>
          </View>
        </View>
        <View className='list-wrap'>
          {VoiceList.map((item) => (
            <View className='item' key={item.id}>
              <View className='m-top'>
                <View className='m-avatar'>
                  <Image className='avatar' src='http://www.hndt.com/podcast/1111/res/xtmZ0Bee.png?1508751589195' />
                </View>
                <View className='m-voice'>
                  <View className={this.playStatus()} />
                  <View className='u-progress'>
                    <Slider
                      step='1'
                      value='100'
                      min='50'
                      max='200'
                      blockSize='12'
                      blockColor='#31ace7'
                      backgroundColor='#cccccc'
                      activeColor='#31ace7'
                      style='margin:0'
                    />
                    <View className='time-wrap'>
                      <Text className='time'>00:00</Text>
                      <Text className='time'>10:00</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View className='m-info'>
                <Text className='name'>河南广播</Text>
                <Text className='score'>得分：8分</Text>
              </View>
            </View>
          ))}
        </View>
        <View className='pk-btn'>
          <View className='btn'>PK</View>
        </View>
      </View>
    )
  }
}
