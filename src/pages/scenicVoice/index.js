import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Slider } from '@tarojs/components'
import './index.scss'
import Score from '../../components/score/index'
import Auth from '../../components/auth/index'

// import { VoiceList, Scenic } from './mockData'
import { formatTime, randomPk } from './utils'

import { set as setGlobalData } from '../../global_data'

import { uploadVoice, createScenicVoice, getScenicById, getScenicVoiceList } from '../../api/index'

const AudioCtx = Taro.createInnerAudioContext()
const Recorder = Taro.getRecorderManager()
export default class ScenicVoice extends Component {
  config = {
    navigationBarTitleText: '河南风景区',
    backgroundColor: '#f7f7f7',
    enablePullDownRefresh: true
  }
  constructor(props) {
    super(props)
    this.state = {
      isPlayCurrent: false,
      playIndex: -2,
      percentList: [],
      pkStatus: true,
      isShowScore: false,
      scoreInfo: null,
      isShowAuth: false,
      scenic: {},
      currentPage: 1,
      totalPage: null,
      dataList: [],
      isMore: true,
      id: null
    }
  }
  onShareAppMessage() {
    return {
      path: '/pages/index/index'
    }
  }
  componentWillMount() {}

  componentDidMount() {
    this.isAuth()
    let { id } = this.$router.params
    this.setState({ id })
    // console.log('------------------------------------')
    // console.log(id)
    // console.log('------------------------------------')
    this.fetchData(id)
  }

  fetchData = (id) => {
    getScenicById(id).then((res) => {
      let { data, success } = res.data
      if (success) {
        // console.log('------------------------------------')
        // console.log(data)
        // console.log('------------------------------------')
        this.setState({
          scenic: data
        })
        Taro.setNavigationBarTitle({ title: data.name })
      }
    })
    this.fetVoiceList(id)
  }
  fetVoiceList = (id) => {
    let { currentPage, dataList } = this.state
    getScenicVoiceList(currentPage, 5, id).then((res) => {
      let { data, success } = res.data
      // console.log('------------------------------------')
      // console.log(data)
      // console.log('------------------------------------')
      if (success) {
        let isMore = true
        if (data.content.length < 5) {
          isMore = false
        }
        this.setState({
          totalPage: data.totalPage,
          currentPage: ++currentPage,
          dataList: dataList.concat(data.content),
          isMore
        })
      }
    })
  }
  onPullDownRefresh() {
    // Taro.showLoading({ title: '刷新中...' })
    let { id } = this.state

    getScenicVoiceList(1, 5, id).then((res) => {
      let { data, success } = res.data
      // console.log('------------------------------------')
      // console.log(data)
      // console.log('------------------------------------')
      if (success) {
        let isMore = true
        if (data.content.length < 5) {
          isMore = false
        }
        this.setState({
          totalPage: data.totalPage,
          dataList: data.content,
          currentPage: 2,
          isMore
        })
        Taro.stopPullDownRefresh()
        // Taro.hideLoading()
      }
    })
    console.log('up')
  }
  onReachBottom() {
    let { totalPage, currentPage } = this.state
    if (currentPage > totalPage) {
      // console.log('------------------------------------')
      // console.log('no more')
      // console.log('------------------------------------')
      this.setState({
        isMore: false
      })
    } else {
      let { id } = this.state
      this.fetVoiceList(id)
      this.setState({
        isMore: true
      })
      // console.log('------------------------------------')
      // console.log('loading more')
      // console.log('------------------------------------')
    }
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  setAudioSrc = (src) => {
    Taro.showLoading({ title: 'loading' })
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
    AudioCtx.onCanplay(() => {
      Taro.hideLoading()
    })
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
      let percent = ((currentTime | 0) / (duration | 0) * 100) | 0
      console.log(currentTime, duration, percent)
      if (percent === 100) {
        AudioCtx.offTimeUpdate()
      }
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
  pkVoice = () => {
    this.setState({
      pkStatus: false
    })
    this.startRecorder()
  }
  cancelPk = () => {
    this.setState({
      pkStatus: true
    })
    this.stopRecorder()
  }

  startRecorder = () => {
    const options = {
      sampleRate: 44100,
      encodeBitRate: 192000,
      format: 'aac'
    }

    Recorder.start(options)
    this.onStopRecorder()
  }
  stopRecorder = () => {
    Recorder.stop()
  }
  onStopRecorder = () => {
    Recorder.onStop((res) => {
      // console.log('------------------------------------')
      // console.log(res.tempFilePath)
      // console.log('------------------------------------')
      let { tempFilePath } = res
      Taro.showLoading({ title: '正在PK，请稍等' }).then(() => {
        console.log('pking')
        this.initScore()
        /**
         * 异步上传
         */
        uploadVoice(tempFilePath).then((file) => {
          let { data, statusCode } = file
          if (statusCode === 200) {
            let voiceSrc = `http://${data}`
            // console.log('------------------------------------')
            // console.log(voiceSrc)
            // console.log('------------------------------------')
            let { scoreInfo } = this.state
            let { id } = this.state
            createScenicVoice(id, voiceSrc, scoreInfo.score).then((voice) => {
              // eslint-disable-next-line no-shadow
              let { data } = voice
              console.log()
              if (data.success) {
                setTimeout(() => {
                  Taro.hideLoading()
                  this.showScore()
                }, 1000)
              }
            })
          }
        })
      })
    })
  }
  initScore = () => {
    let scoreInfo = randomPk()
    // console.log('------------------------------------')
    // console.log(scoreInfo)
    // console.log('------------------------------------')
    this.setState({
      scoreInfo
    })
  }
  showScore = () => {
    this.setState({
      isShowScore: true
    })
  }
  onCloseScore = () => {
    this.setState({
      isShowScore: false
    })
  }
  isAuth = () => {
    Taro.getSetting().then((res) => {
      if (res.authSetting['scope.userInfo']) {
        Taro.getUserInfo().then((detail) => {
          // console.log('------------------------------------')
          // console.log(detail.userInfo)
          // console.log('------------------------------------')
          setGlobalData('userInfo', detail.userInfo)
        })
      } else {
        this.openAuth()
      }
    })
  }
  openAuth = () => {
    this.setState({
      isShowAuth: true
    })
  }
  onCloseAuth = () => {
    this.setState({
      isShowAuth: false
    })
  }

  render() {
    let { percentList, scenic } = this.state
    return (
      <View className='voice-wrap'>
        <View className='scenic-wrap' key={String(scenic.id)}>
          <Image className='cover' src={scenic.imageUrl} />
          <Text className='title'>{scenic.name}</Text>
          <Text className='desc'>{scenic.comments}</Text>
          <View className='item'>
            <View className='m-top'>
              <View className='m-avatar'>
                <Image className='avatar' src={scenic.headImg} />
              </View>
              <View className='m-voice'>
                <View className={this.playStatus(-1)} onClick={this.playHandler.bind(this, -1, scenic)} />
                <View className='u-progress'>
                  <Slider
                    step='0.1'
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
              <Text className='name'>{scenic.nickname}</Text>
              <Text className='score host'>主持人</Text>
            </View>
          </View>
        </View>
        <View className='list-wrap'>
          {this.state.dataList.map((item, index) => (
            <View className='item' key={item.id}>
              <View className='m-top'>
                <View className='m-avatar'>
                  <Image className='avatar' src={item.headImg} />
                </View>
                <View className='m-voice'>
                  <View className={this.playStatus(index)} onClick={this.playHandler.bind(this, index, item)} />
                  <View className='u-progress'>
                    <Slider
                      step='0.1'
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
                <Text className='score'>得分：{item.score}分</Text>
              </View>
            </View>
          ))}
          <View className='load-tips'>{this.state.isMore ? '加载中...' : '没有更多数据'}</View>
        </View>
        <View className='pk-btn'>
          <View className='btn'>
            <Text className='status'>{this.state.pkStatus ? 'PK' : '松开结束录音'}</Text>
            {this.state.pkStatus ? <Text className='tips'>（长按录音）</Text> : null}
            <View
              className='btn-mark'
              onTouchStart={this.pkVoice}
              onTouchEnd={this.cancelPk}
              onTouchCancel={this.cancelPk}
            />
          </View>
        </View>
        {this.state.isShowScore ? <Score scoreInfo={this.state.scoreInfo} onCloseScore={this.onCloseScore} /> : null}
        {this.state.isShowAuth ? <Auth onCloseAuth={this.onCloseAuth} /> : null}
      </View>
    )
  }
}
