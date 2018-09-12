import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

import Head from '../../components/head/index';
import './index.scss';
import { getArticleList } from '../../api/index';

export default class list extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广'
	};
	constructor(props) {
		super(props);
		this.state = {
			dataList: []
		};
	}
	componentWillMount() {}

	componentDidMount() {
		this.fetchGetTypeList();
	}

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
	fetchGetTypeList = () => {
		getArticleList(46).then((res) => {
			let { errorCode, data } = res.data;
			if (errorCode === 0) {
				this.setState({ dataList: data });
			}
		});
	};
	render() {
		return (
			<View className='list-wrap'>
				<Head title='团队' type='tab' />
				<View className='list-box'>
					{/* <View className='item' onClick={this.goToBody.bind(this)}>
						<Image className='cover' mode='aspectFit' src='http://tupian.aladd.net/2015/4/121.jpg' />
					</View> */}
					{this.state.dataList.map((item) => {
						return (
							<View className='item' key={item.id.toString()} onClick={this.goToBody.bind(this, item.id)}>
								<Image className='cover' src={item.thumbnail} />
							</View>
						);
					})}
				</View>
			</View>
		);
	}
}
