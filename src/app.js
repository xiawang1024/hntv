import Taro, {
  Component
} from '@tarojs/taro';
import Index from './pages/index';
import {
  set as setGlobalData
} from './global_data';

import './app.scss';

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/start/index',
      'pages/body/index',
      'pages/player/index',
      'pages/tab1/index',
      'pages/tab3/index',
      'pages/type/index',
      'pages/tab2/index',
      'pages/videos/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      navigationStyle: 'custom'
    },
    tabBar: {
      color: '#858585',
      selectedColor: '#890012',
      backgroundColor: '#ffffff',
      list: [{
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './icons/11.png',
          selectedIconPath: './icons/12.png'
        },
        {
          pagePath: 'pages/tab1/index',
          text: '刊例',
          iconPath: './icons/21.png',
          selectedIconPath: './icons/22.png'
        },

        {
          pagePath: 'pages/tab2/index',
          text: '团队',
          iconPath: './icons/31.png',
          selectedIconPath: './icons/32.png'
        },
        {
          pagePath: 'pages/tab3/index',
          text: '搜索',
          iconPath: './icons/41.png',
          selectedIconPath: './icons/42.png'
        }
      ]
    }
  };

  componentWillMount() {
    let data = Taro.getSystemInfoSync();
    let totalTopHeight = 68;
    if (data.model.indexOf('iPhone X') !== -1) {
      totalTopHeight = 88;
    } else if (data.model.indexOf('iPhone') !== -1) {
      totalTopHeight = 64;
    }
    let {
      screenHeight,
      screenWidth
    } = data;
    setGlobalData('statusBarHeight', data.statusBarHeight);
    setGlobalData('titleBarHeight', totalTopHeight - data.statusBarHeight);
    setGlobalData('screenHeight', screenHeight);
    setGlobalData('screenWidth', screenWidth);
  }
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return <Index / > ;
  }
}

Taro.render( < App / > , document.getElementById('app'));
