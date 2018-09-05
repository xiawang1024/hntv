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
	clickHandler = () => {
		Taro.navigateTo({
			url: '/pages/body/index'
		});
	};
	render() {
		return (
			<View className='list-content'>
				<View className='list-wrap'>
					{this.props.dataList.map((item) => {
						return (
							<View className='item' onClick={this.clickHandler} key={item.id.toString()}>
								<Image
									className='img'
									src='http://www.hndt.com/podcast/976/1131/res/EEghUGNE.jpg?1511506999379'
								/>
								<View className='text-wrap'>
									<View className='title'>{item.title}</View>
									<View className='desc'>{item.text}</View>
								</View>
							</View>
						);
					})}
				</View>
			</View>
		);
	}
}
