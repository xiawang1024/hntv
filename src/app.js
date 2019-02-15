import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import { set as setGlobalData } from './global_data'

import './app.scss'

class App extends Component {
  config = {
    pages: [ 'pages/scenicVoice/index', 'pages/index/index', 'pages/scenicList/index' ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      backgroundColor: '#f7f7f7'
    }
  }

  componentWillMount() {}
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
