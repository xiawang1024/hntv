import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

import Data from './mockData'

import { getScenicList } from '../../api/index'

export default class ScenicList extends Component {
  config = {
    navigationBarTitleText: '河南风景区',
    navigationBarBackgroundColor: '#fff',
    backgroundColor: '#f7f7f7'
  }
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      totalPage: null,
      dataList: [],
      isMore: true
    }
  }
  onShareAppMessage = () => {}
  componentWillMount() {}

  componentDidMount() {
    this.fetchData()
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  fetchData = () => {
    let { currentPage, dataList } = this.state
    getScenicList(currentPage, 5).then((res) => {
      let { data, success } = res.data
      // console.log('------------------------------------')
      // console.log(data)
      // console.log('------------------------------------')
      if (success) {
        this.setState({
          totalPage: data.totalPage,
          currentPage: ++currentPage,
          dataList: dataList.concat(data.content)
        })
      }
    })
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
      this.fetchData()
      this.setState({
        isMore: true
      })
      // console.log('------------------------------------')
      // console.log('loading more')
      // console.log('------------------------------------')
    }
  }
  toVoiceList = (item) => {
    // console.log('------------------------------------')
    // console.log(item)
    // console.log('------------------------------------')
    Taro.navigateTo({
      url: `/pages/scenicVoice/index?id=${item.id}`
    })
  }

  render() {
    return (
      <View className='list-wrap'>
        {this.state.dataList.map((item) => (
          <View className='item' key={String(item.id)} onClick={this.toVoiceList.bind(this, item)}>
            <Image className='cover' src={item.imageUrl} />
            <Text className='title'>{item.name}</Text>
            <Text className='desc'>{item.comments}</Text>
          </View>
        ))}
        <View className='load-tips'>{this.state.isMore ? '加载中...' : '没有更多数据'}</View>
      </View>
    )
  }
}
