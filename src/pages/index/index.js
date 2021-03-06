/*
 * @Description:
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-10-11 15:38:44
 * @LastEditTime: 2019-11-27 17:10:48
 */
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components';
import { getVideosList, getSwipeData } from '../../api/index.js';
import { get as getGlobalData } from '../../global_data';
import './index.scss';
const modelData = [
  {
    id: 1,
    icon: require('../../icons/model-1.png'),
    text: '新闻矩阵'
  },
  {
    id: 2,
    icon: require('../../icons/model-3.png'),
    text: '互动IP'
  },
  {
    id: 3,
    icon: require('../../icons/model-2.png'),
    text: '综艺定制'
  },
  {
    id: 4,
    icon: require('../../icons/model-4.png'),
    text: '大健康'
  },
  {
    id: 5,
    icon: require('../../icons/model-5.png'),
    text: '教育&体育'
  }
  // {
  // 	id: 6,
  // 	icon: require('../../icons/model-6.png'),
  // 	text: '体育'
  // }
];

export default class Index extends Component {
  config = {
    navigationBarTitleText: '河南都市频道',
    disableScroll: true
  };
  constructor(props) {
    super(props);
    this.state = {
      statusBarHeight: 0,
      titleBarHeight: 0,
      videosList: [],
      swipeList: []
    };
  }
  onShareAppMessage = () => { };
  componentWillMount() { }

  componentDidMount() {
    let statusBarHeight = getGlobalData('statusBarHeight');
    let titleBarHeight = getGlobalData('titleBarHeight');
    this.setState({
      statusBarHeight,
      titleBarHeight
    });
    this.fetchVideoList();
    this.fetchSwipeData();
  }
  fetchSwipeData = () => {
    getSwipeData().then((res) => {
      let { data } = res.data;
      this.setState({
        swipeList: data
      });
    });
  };
  fetchVideoList = () => {
    getVideosList().then((res) => {
      let { data, errorCode } = res.data;
      if (errorCode === 0) {
        this.setState({
          videosList: data
        });
        Taro.setStorage({
          key: 'videosList',
          data: JSON.stringify(data)
        });
      }
    });
  };
  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  onClickHandler = (typeIndex) => {
    let url = `/pages/type/index?typeIndex=${typeIndex}`;
    Taro.navigateTo({
      url
    });
  };
  onGoToPlayer = (id) => {
    let { videosList } = this.state;
    let isPlayIndex = videosList.findIndex((item, index) => {
      return item.id === id;
    });
    console.log(isPlayIndex);
    Taro.navigateTo({
      url: `/pages/player/index?isPlayIndex=${isPlayIndex}`
    });
  };

  goToBody = (id) => {
    let url = `/pages/body/index?articleId=${id}`;
    Taro.navigateTo({
      url
    });
  };

  render() {
    let titleBarHeight = this.state.titleBarHeight;
    let statusBarHeight = this.state.statusBarHeight;
    return (
      <View className='index'>
        <View className='title-wrap' style={{ height: `${titleBarHeight}px`, top: `${statusBarHeight}px` }}>
          <Text className='title'>河南都市｜创新攻略</Text>
        </View>
        <View className='swiper-wrap'>
          <Swiper className='swiper' indicatorActiveColor='#ff2399' circular autoplay duration='300'>
            {this.state.swipeList.map((item, index) => {
              return (
                <SwiperItem onClick={this.goToBody.bind(this, item.id)}>
                  <Image
                    key={item.id.toString()}
                    className='banner'
                    mode='aspectFit'
                    src={item.thumbnail}
                  // src={require('./banner.png')}
                  />
                </SwiperItem>
              );
            })}
          </Swiper>
        </View>
        <View className='body-wrap'>
          <View>
            <Image className='border-radius' src={require('./border-radius.png')} style={{ width: '100%' }} />
          </View>
          <View className='model-wrap'>
            {modelData.map((item) => {
              return (
                <View
                  className='item'
                  onClick={this.onClickHandler.bind(this, item.id)}
                  key={item.id.toString()}
                >
                  <Image className='icon' src={item.icon} mode='aspectFit' />
                  <Text className='text'>{item.text}</Text>
                </View>
              );
            })}
          </View>
          {/* <View className='line-h' /> */}
          <ScrollView className='scrollview' scrollX lowerThreshold='20' upperThreshold='20'>
            {this.state.videosList.map((item, index) => {
              return (
                <Image
                  className='item'
                  onClick={this.onGoToPlayer.bind(this, item.id)}
                  src={item.thumbnail}
                  key={item.id.toString()}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}
