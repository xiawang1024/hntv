import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

import './index.scss';

export default class list extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广'
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
		const numbers = [ 1, 2, 3, 4, 5 ];

		return (
			<View className='list-content'>
				<View className='list-wrap'>
					{numbers.map((number) => {
						return (
							<View className='item' onClick={this.clickHandler} key={number.toString()}>
								<Image
									className='img'
									src='http://www.hndt.com/podcast/976/1131/res/EEghUGNE.jpg?1511506999379'
								/>
								<View className='text-wrap'>
									<View className='title'>新闻矩阵介绍</View>
									<View className='desc'>包含都市报道、孟子约、都市1直播、都 市再报道栏目简单介绍、定位</View>
								</View>
							</View>
						);
					})}
				</View>
			</View>
		);
	}
}
