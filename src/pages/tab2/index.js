import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

import Head from '../../components/head/index';
import './index.scss';
import { getArticleList } from '../../api/index';
import { get as getGlobalData } from '../../global_data';

export default class list extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广'
	};
	constructor(props) {
		super(props);
		this.state = {
			dataList: [],
			statusBarHeight: 0,
			titleBarHeight: 0
		};
	}
	componentWillMount() {}

	componentDidMount() {
		this.fetchGetTypeList();
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
	onShareAppMessage = () => {};
	goToBody = (articleId) => {
		let url = `/pages/body/index?articleId=${articleId}`;
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
		let { titleBarHeight, statusBarHeight } = this.state;
		let height = parseInt(titleBarHeight) + parseInt(statusBarHeight) + 10
		return (
			<View className='list-wrap'>
				<Head title='团队' type='tab' />
				<View className='list-box' style={{paddingTop:`${height}px`}}>
					{/* <View className='item' onClick={this.goToBody.bind(this)}>
						<Image
							className='cover'
							mode='aspectFit'
							src='http://www.hndt.com/fm/1074/201809/10/2237401/res/ZZiIXqaE.gif'
						/>
					</View> */}

					{this.state.dataList.map((item) => {
						return (
							<View className='item' key={item.id.toString()} onClick={this.goToBody.bind(this, item.id)}>
								<Image className='cover' src={item.thumbnail}/>								
							</View>
						);
					})}
				</View>
			</View>
		);
	}
}
