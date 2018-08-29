import Taro, { Component } from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components';
import { set as setGlobalData, get as getGlobalData } from '../../global_data';
import './index.scss';

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

	render() {
		// let data = Taro.getSystemInfoSync();
		// let topHeight = data.screenHeight - data.windowHeight - 30;
		let titleBarHeight = this.state.titleBarHeight;
		let statusBarHeight = this.state.statusBarHeight;
		return (
			<View className='index'>
				<View
					className='title-wrap'
					style={{ height: `${titleBarHeight}px`, marginTop: `${statusBarHeight}px` }}
				>
					<Text className='title'>河南都市频道广告推广</Text>
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
								mode='scaleToFill'
								src='http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
							/>
						</SwiperItem>
						<SwiperItem>
							<Image
								className='banner'
								mode='scaleToFill'
								src='http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
							/>
						</SwiperItem>
						<SwiperItem>
							<Image
								className='banner'
								mode='scaleToFill'
								src='http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
							/>
						</SwiperItem>
					</Swiper>
				</View>
				<View className='model-wrap'>
					<View className='item'>
						<Image className='icon' src={require('../../icons/model-1.png')} />
						<Text className='text'>新闻资讯</Text>
					</View>
					<View className='item'>
						<Image className='icon' src={require('../../icons/model-2.png')} />
						<Text className='text'>综艺季播</Text>
					</View>
					<View className='item'>
						<Image className='icon' src={require('../../icons/model-3.png')} />
						<Text className='text'>互动IP</Text>
					</View>
					<View className='item'>
						<Image className='icon' src={require('../../icons/model-4.png')} />
						<Text className='text'>内容制造者</Text>
					</View>
					<View className='item'>
						<Image className='icon' src={require('../../icons/model-5.png')} />
						<Text className='text'>渠道搭建者</Text>
					</View>
					<View className='item'>
						<Image className='icon' src={require('../../icons/model-6.png')} />
						<Text className='text'>销售助力者</Text>
					</View>
				</View>
				<View className='line-h' />
				<ScrollView className='scrollview' scrollX lowerThreshold='20' upperThreshold='20'>
					<Image className='item' src='http://www.hndt.com/carrier/20180827/20/18432942701451894168.jpg' />
					<Image className='item' src='http://www.hndt.com/carrier/20180827/20/18432942701451894168.jpg' />
					<Image className='item' src='http://www.hndt.com/carrier/20180827/20/18432942701451894168.jpg' />
					<Image className='item' src='http://www.hndt.com/carrier/20180827/20/18432942701451894168.jpg' />
				</ScrollView>
			</View>
		);
	}
}
