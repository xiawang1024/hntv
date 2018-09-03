import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { get as getGlobalData } from '../../global_data';
import './index.scss';

export default class BodyCont extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广'
		// navigationBarTextStyle: 'white'
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
	clickHandler = () => {
		Taro.showToast({
			title: 'click',
			icon: 'success'
		});
	};
	goBackHome = () => {
		Taro.navigateBack();
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

						<Text className='title'>{title}</Text>
						<View className='info-wrap' style={{ marginTop: `${marginTop}px` }}>
							<View className='name'>名称</View>
							<View className='desc'>这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，这是一段描述，</View>
						</View>
					</View>
				</View>
				<View className='numbers'>视频（9）</View>
				<View className='list-wrap'>
					<View className='item'>
						<Image className='img' src='http://www.hndt.com/carrier/20180827/20/18432942701451894168.jpg' />
					</View>
					<View className='item'>
						<Image className='img' src='http://www.hndt.com/carrier/20180827/20/18432942701451894168.jpg' />
					</View>
					<View className='item'>
						<Image className='img' src='http://www.hndt.com/carrier/20180827/20/18432942701451894168.jpg' />
					</View>
					<View className='item'>
						<Image className='img' src='http://www.hndt.com/carrier/20180827/20/18432942701451894168.jpg' />
					</View>
				</View>
			</View>
		);
	}
}
