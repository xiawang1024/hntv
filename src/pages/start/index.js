import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { get as getGlobalData } from '../../global_data';
import { getStartImg } from '../../api/index.js';
import './index.scss';

export default class Index extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广',
		disableScroll: true
	};
	constructor(props) {
		super(props);
		this.state = {
			screenHeight: 0,
			screenWidth: 0,
			timeAgo: 3,
			src:''
		};
	}
	componentWillMount() {}
	onShareAppMessage = () => {};
	componentDidMount() {
		let screenHeight = getGlobalData('screenHeight');
		let screenWidth = getGlobalData('screenWidth');
		this.setState({
			screenHeight,
			screenWidth
		});
		getStartImg().then(res => {
			let {data} = res.data
			let src = data.thumbnail
			if(!src){
				Taro.switchTab({
					url: '/pages/index/index'
				});
				return 
				
			}else {
				this.setState({
					src
				})
				this.timerId = setInterval(() => {
					this.tick();
				}, 1000);
			}
		})
		
	}
	tick = () => {
		let { timeAgo } = this.state;
		timeAgo--;
		this.setState({
			timeAgo
		});
		if (timeAgo === 0) {
			clearInterval(this.timerId);
			Taro.switchTab({
				url: '/pages/index/index'
			});
		}
	};
	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		let { screenHeight, screenWidth, timeAgo } = this.state;
		return (
			<View className='start' style={{ height: `${screenHeight}px`, width: `${screenWidth}px` }}>
				<Image
					className='start-cover'
					mode={'aspectFill'}
					src={this.state.src}
				/>
				<View className='timeAgo'v style={{display:'none'}}>{timeAgo}s</View>
			</View>
		);
	}
}
