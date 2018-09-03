import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { get as getGlobalData } from '../../global_data';
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
	clickHandler = () => {
		Taro.navigateTo({
			url: '/pages/body/index'
		});
	};
	goBackHome = () => {
		let { WEAPP, WEB } = Taro.ENV_TYPE;

		if (WEB === 'WEB') {
			Taro.navigateTo({
				url: '/pages/index/index'
			});
		}
		if (WEAPP === 'WEAPP') {
			Taro.switchTab({
				url: '/pages/index/index'
			});
		}
	};
	render() {
		let titleBarHeight = this.state.titleBarHeight;
		let statusBarHeight = this.state.statusBarHeight;
		let title = this.props.title;

		const numbers = [ 1, 2, 3, 4, 5 ];

		return (
			<View className="list-content">
				<View
					className="title-wrap"
					style={{ height: `${titleBarHeight}px`, marginTop: `${statusBarHeight}px` }}
				>
					<View className="icon-back-wrap" onClick={this.goBackHome}>
						<Image className="icon-back" src={require('./icon-back.png')} />
					</View>

					<Text className="title">{title}</Text>
				</View>
				<View className="list-wrap">
					{numbers.map((number) => {
						return (
							<View className="item" onClick={this.clickHandler} key={number.toString()}>
								<Image
									className="img"
									src="http://www.hndt.com/brand/612/res/pi3F3ZID.jpg?1497345245233"
								/>
							</View>
						);
					})}
				</View>
			</View>
		);
	}
}
