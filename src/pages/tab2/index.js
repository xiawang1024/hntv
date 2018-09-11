import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import List from '../../components/list/index';
import Head from '../../components/head/index';
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
	onShareAppMessage = () => {};
	goToBody = (articleId) => {
		let url = `pages/body/index${articleId}`;
		Taro.navigateTo({
			url
		});
	};
	render() {
		return (
			<View className='list-wrap'>
				<Head title='团队' type='tab' />
				<View className='list-box'>
					<View className='item' onClick={this.goToBody.bind(this)}>
						123
					</View>
					<View className='item'>123</View>
					<View className='item'>123</View>
					<View className='item'>123</View>
				</View>
				<List />
			</View>
		);
	}
}
