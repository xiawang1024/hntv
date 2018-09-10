import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

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
	}
	componentWillMount() {}

	componentDidMount() {}

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
		return (
			<View className='list-content'>
				<View className='list-wrap'>
					{this.props.dataList.map((item) => {
						return (
							<View className='item' onClick={this.goToBody.bind(this, item.id)} key={item.id.toString()}>
								<Image className='img' src={item.thumbnail} mode='aspectFit' />
								<View className='text-wrap'>
									<View className='title'>{item.title}</View>
									<View className='desc'>{item.slug}</View>
								</View>
							</View>
						);
					})}
				</View>
			</View>
		);
	}
}
