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
	fetchGetTypeList = () => {
		getArticleList(45).then((res) => {
			let { errorCode, data } = res.data;
			if (errorCode === 0) {
				this.setState({ dataList: data });
			}
		});
	};
	downLoadFile = () => {
		Taro.downloadFile({ url: 'https://a.weixin.hndt.com/h5/test/20180905.docx' }).then((res) => {
			let { tempFilePath } = res;
			Taro.saveFile({ tempFilePath }).then((res) => {
				let { savedFilePath } = res;
				Taro.openDocument({ filePath: savedFilePath });
			});
		});
	};
	goToBody = (articleId) => {
		let url = `/pages/body/index?articleId=${articleId}`;
		Taro.navigateTo({
			url
		});
	};
	render() {
		let { titleBarHeight, statusBarHeight } = this.state;
		let height = parseInt(titleBarHeight) + parseInt(statusBarHeight) + 10
		return (
			<View className='list-wrap'>
				<Head title='刊例' type='tab' />
				{/* <Button onClick={this.downLoadFile}>下载</Button> */}
				<View className='list-box' style={{paddingTop:`${height}px`}}>
					{this.state.dataList.map((item) => {
						return (
							<View className='item' key={item.id.toString()} onClick={this.goToBody.bind(this, item.id)}>
								<Image className='cover' src={item.thumbnail} />
								<View className='title'>{item.title}</View>
							</View>
						);
					})}
					{/* <View className='item'>
						<Image className='cover' mode='aspectFit' src='http://tupian.aladd.net/2015/4/121.jpg' />
					</View> */}
				</View>
			</View>
		);
	}
}
