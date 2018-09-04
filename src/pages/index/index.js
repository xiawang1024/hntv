import Taro, { Component } from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';
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
		text: '综艺季播'
	},
	{
		id: 4,
		icon: require('../../icons/model-4.png'),
		text: '大健康'
	},
	{
		id: 5,
		icon: require('../../icons/model-5.png'),
		text: '教育服务'
	},
	{
		id: 6,
		icon: require('../../icons/model-6.png'),
		text: '体育'
	}
];

export default class Index extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广'
	};
	constructor(props) {
		super(props);
		this.state = {
			statusBarHeight: 0,
			titleBarHeight: 0
		};
	}
	componentWillMount() {}

	componentDidMount() {
		let statusBarHeight = getGlobalData('statusBarHeight');
		let titleBarHeight = getGlobalData('titleBarHeight');
		this.setState({
			statusBarHeight,
			titleBarHeight
		});
	}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}
	onClickHandler = (typeIndex) => {
		let url = `/pages/type/index?typeIndex=${typeIndex}`;
		Taro.navigateTo({
			url
		});
	};
	onGoToPlayer = () => {
		Taro.navigateTo({
			url: '/pages/player/index'
		});
	};

	render() {
		let titleBarHeight = this.state.titleBarHeight;
		let statusBarHeight = this.state.statusBarHeight;
		return (
			<View className='index'>
				<View className='title-wrap' style={{ height: `${titleBarHeight}px`, top: `${statusBarHeight}px` }}>
					<Text className='title'>河南都市丨垂直创新2019攻略</Text>
				</View>
				<View className='swiper-wrap'>
					<Swiper
						className='swiper'
						indicatorActiveColor='#ff2399'
						circular
						indicatorDots
						autoplay
						duration='300'
					>
						<SwiperItem>
							<Image
								className='banner'
								mode='aspectFill'
								src='http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
							/>
						</SwiperItem>
						<SwiperItem>
							<Image
								className='banner'
								mode='aspectFill'
								src='http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
							/>
						</SwiperItem>
						<SwiperItem>
							<Image
								className='banner'
								mode='aspectFill'
								src='http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
							/>
						</SwiperItem>
					</Swiper>
				</View>
				<View className='model-wrap'>
					{modelData.map((item) => {
						return (
							<View
								className='item'
								onClick={this.onClickHandler.bind(this, item.id)}
								key={item.id.toString()}
							>
								<Image className='icon' src={item.icon} />
								<Text className='text'>{item.text}</Text>
							</View>
						);
					})}
				</View>
				<View className='line-h' />
				<ScrollView className='scrollview' scrollX lowerThreshold='20' upperThreshold='20'>
					<Image
						className='item'
						onClick={this.onGoToPlayer}
						src='http://www.hndt.com/carrier/20180827/20/18432942701451894168.jpg'
					/>
					<Image className='item' src='http://www.hndt.com/carrier/20180827/20/18432942701451894168.jpg' />
					<Image className='item' src='http://www.hndt.com/carrier/20180827/20/18432942701451894168.jpg' />
					<Image className='item' src='http://www.hndt.com/carrier/20180827/20/18432942701451894168.jpg' />
				</ScrollView>
			</View>
		);
	}
}
