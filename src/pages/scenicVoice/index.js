import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Slider } from '@tarojs/components'
import './index.scss'
import Score from '../../components/score/index'

import { VoiceList, Scenic } from './mockData'
import { formatTime } from './utils'

const AudioCtx = Taro.createInnerAudioContext()
export default class ScenicVoice extends Component {
  config = {
    enablePullDownRefresh: true,
    backgroundColor: '#f7f7f7'
  }
  constructor(props) {
    super(props)
    this.state = {
      isPlayCurrent: false,
      playIndex: -2,
      percentList: []
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
  setAudioSrc = (src) => {
    AudioCtx.src = src
    this.onAudioCanPlay()
    this.onAudioUpdate()
    this.onAudioEnd()
  }
  audioPlay = () => {
    AudioCtx.play()
  }
  audioPause = () => {
    AudioCtx.pause()
  }
  onAudioCanPlay = () => {
    AudioCtx.onCanplay(() => {})
  }
  onAudioEnd = () => {
    AudioCtx.onEnded(() => {
      this.setState({
        playIndex: -2
      })
    })
  }
  onAudioUpdate = () => {
    AudioCtx.onTimeUpdate(() => {
      let { currentTime, duration } = AudioCtx

      let percent = (currentTime / duration * 100) | 0
      this.setAudioPercent({ percent, currentTime: formatTime(currentTime), duration: formatTime(duration) })
    })
  }
  audioDestroy = () => {
    AudioCtx.destroy()
  }
  setAudioPercent = (percent) => {
    let { percentList, playIndex } = this.state
    percentList[playIndex + 1] = percent
    this.setState({ percentList })
  }
  resetPercent = (index) => {
    let { percentList } = this.state
    percentList.fill(0)

    return percentList
  }
  playHandler = (index, item, event) => {
    this.setAudioSrc(item.voiceUrl)
    /**
     * play 状态改变
     */
    this.setState((prevState) => {
      let { playIndex, isPlayCurrent } = prevState
      if (index === playIndex) {
        return {
          playIndex: index,
          isPlayCurrent: !isPlayCurrent
        }
      } else {
        let percentList = this.resetPercent(index)

        return {
          playIndex: index,
          isPlayCurrent: false,
          percentList
        }
      }
    })
  }
  playStatus = (index) => {
    let { playIndex, isPlayCurrent } = this.state
    if (playIndex === index) {
      if (!isPlayCurrent) {
        this.audioPlay()
        return [ 'u-btn', 'stop' ].join(' ')
      } else {
        this.audioPause()
        return [ 'u-btn', 'start' ].join(' ')
      }
    } else {
      return [ 'u-btn', 'start' ].join(' ')
    }
  }
  render() {
    let { percentList } = this.state
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
                <View className={this.playStatus(-1)} onClick={this.playHandler.bind(this, -1, Scenic)} />
                <View className='u-progress'>
                  <Slider
                    step='1'
                    value={percentList[0].percent}
                    min='0'
                    max='100'
                    blockSize='12'
                    blockColor='#31ace7'
                    backgroundColor='#cccccc'
                    activeColor='#31ace7'
                    style='margin:0'
                  />
                  <View className='time-wrap'>
                    <Text className='time'>{percentList[0].currentTime || '00:00'}</Text>
                    <Text className='time'>{percentList[0].duration || '--:--'}</Text>
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
          {VoiceList.map((item, index) => (
            <View className='item' key={item.id}>
              <View className='m-top'>
                <View className='m-avatar'>
                  <Image className='avatar' src='http://www.hndt.com/podcast/1111/res/xtmZ0Bee.png?1508751589195' />
                </View>
                <View className='m-voice'>
                  <View className={this.playStatus(index)} onClick={this.playHandler.bind(this, index, item)} />
                  <View className='u-progress'>
                    <Slider
                      step='1'
                      value={percentList[index + 1].percent}
                      min='0'
                      max='100'
                      blockSize='12'
                      blockColor='#31ace7'
                      backgroundColor='#cccccc'
                      activeColor='#31ace7'
                      style='margin:0'
                    />
                    <View className='time-wrap'>
                      <Text className='time'>{percentList[index + 1].currentTime || '00:00'}</Text>
                      <Text className='time'>{percentList[index + 1].duration || '--:--'}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View className='m-info'>
                <Text className='name'>{item.nickname}</Text>
                <Text className='score'>{item.score}</Text>
              </View>
            </View>
          ))}
        </View>
        <View className='pk-btn'>
          <View className='btn'>PK</View>
        </View>
        {/* <Score /> */}
      </View>
    )
  }
}
