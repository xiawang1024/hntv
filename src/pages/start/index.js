import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { get as getGlobalData } from '../../global_data';
import './index.scss';

export default class Index extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广'
	};
	constructor(props) {
		super(props);
		this.state = {
			screenHeight: 0,
			screenWidth: 0
		};
	}
	componentWillMount() {}

	componentDidMount() {
		let screenHeight = getGlobalData('screenHeight');
		let screenWidth = getGlobalData('screenWidth');
		this.setState({
			screenHeight,
			screenWidth
		});
		this.timerId = setTimeout(() => {
			Taro.switchTab({
				url: '/pages/index/index'
			});
		}, 3000);
	}

	componentWillUnmount() {
		clearTimeout(this.timerId);
	}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		let { screenHeight, screenWidth } = this.state;
		return (
			<View className='start' style={{ height: `${screenHeight}px`, width: `${screenWidth}px` }}>
				<Image
					className='start-cover'
					mode={'aspectFill'}
					src='http://www.code4app.com/data/attachment/forum/201612/21/203627ziqlgrfzlbluffr5.gif'
				/>
			</View>
		);
	}
}
