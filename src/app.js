import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import { set as setGlobalData } from './global_data'

import './app.scss'

class App extends Component {
  config = {
    pages: [ 'pages/scenicList/index','pages/index/index',  'pages/scenicVoice/index' ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
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
