import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image,ScrollView } from '@tarojs/components';
import { get as getGlobalData } from '../../global_data';
import './index.scss';

export default class BodyCont extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广',
		navigationBarTextStyle: 'white'
	};
	constructor(props) {
		super(props);
		this.state = {
			statusBarHeight: 0,
			titleBarHeight: 0,
			videoList: []
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
		Taro.getStorage({ key: 'videosList' }).then((res) => {
			let { data } = res;
			let videoList = JSON.parse(data);
			this.setState({
				videoList
			});
			console.log(JSON.parse(data));
		});
	}
	onShareAppMessage = () => {};
	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}
	clickHandler = () => {
		Taro.showToast({
			title: 'click',
			icon: 'success'
		});
	};
	goBackHome = () => {
		Taro.navigateBack();
	};
	goToPlayer = (isPlayIndex) => {
		Taro.navigateTo({
			url: `/pages/player/index?isPlayIndex=${isPlayIndex}`
		});
	};
	render() {
		let titleBarHeight = this.state.titleBarHeight;
		let statusBarHeight = this.state.statusBarHeight;
		let marginTop = titleBarHeight + statusBarHeight;
		let title = this.props.title;

		return (
			<View className='videos-list'>
				<View className='title-wrap'>
					<Image src={require('./icon-bg.png')} className='icon-bg' />
					<View className='text-wrap'>
						<View
							className='icon-back-wrap'
							onClick={this.goBackHome}
							style={{ marginTop: `${statusBarHeight}px`, height: `${titleBarHeight}px` }}
						>
							<Image className='icon-back' src={require('./icon-back.png')} />
						</View>

						{/* <Text className='title'>{title}</Text> */}
						<View className='info-wrap' style={{ marginTop: `${marginTop}px` }}>
							<View className='name'># 案例合集</View>
							<View className='desc'>河南都市丨垂直创新2019攻略</View>
						</View>
					</View>
				</View>
				<View className='numbers'>视频（{this.state.videoList.length}）</View>
				<View className='list-wrap'>
					{this.state.videoList.map((item, index) => {
						return (
							<View className='item' onClick={this.goToPlayer.bind(this, index)} key={item.id.toString()}>
								<Image className='img' src={item.thumbnail} />
							</View>
						);
					})}
				</View>
			</View>
		);
	}
}
