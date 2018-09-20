import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { get as getGlobalData } from '../../global_data';

import './index.scss';

export default class list extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广'
	};
	static defaultProps = {
		dataList: []
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
	goToBody = (id) => {
		let url = `/pages/body/index?articleId=${id}`;
		Taro.navigateTo({
			url
		});
	};
	render() {
		let { titleBarHeight, statusBarHeight } = this.state;
		let height = parseInt(titleBarHeight) + parseInt(statusBarHeight)
		let type = this.props.type
		let style = {
			paddingTop:`${height}px`
		}
		if(type === 'sch') {
			style = {}
		}
		return (
			<View className='list-content' style={style}>
				<View className='list-wrap'>
					{this.props.dataList.map((item) => {
						return (
							<View className='item' onClick={this.goToBody.bind(this, item.id)} key={item.id.toString()}>
								<Image className='img' src={item.thumbnail} mode='aspectFit' />
								<View className='text-wrap'>
									<View className='title'>{item.title}</View>
									<View className='desc'>{item.remarks || item.title}</View>
								</View>
							</View>
						);
					})}
				</View>
			</View>
		);
	}
}
