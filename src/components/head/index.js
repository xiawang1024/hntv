import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { get as getGlobalData } from '../../global_data';
import './index.scss';

export default class head extends Component {
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
	goBackHome = () => {
		let { type } = this.props;

		let APP_TYPE = Taro.getEnv();

		if (APP_TYPE === 'WEB') {
			Taro.navigateTo({
				url: '/pages/index/index'
			});
		}
		if (APP_TYPE === 'WEAPP') {
			if (type === 'tab') {
				Taro.switchTab({
					url: '/pages/index/index'
				});
			} else {
				Taro.navigateBack();
			}
		}
	};
	render() {
		let { titleBarHeight, statusBarHeight } = this.state;
		let { title, type } = this.props;
		return (
			<View className='list-wrap'>
				<View
					className='title-wrap'
					style={{ height: `${titleBarHeight}px`, marginTop: `${statusBarHeight}px` }}
				>
					{type === 'tab' ? (
						<View />
					) : (
						<View className='icon-back-wrap' onClick={this.goBackHome}>
							<Image className='icon-back' src={require('../../icons/icon-back.png')} />
						</View>
					)}

					<Text className='title'>{title}</Text>
				</View>
			</View>
		);
	}
}
