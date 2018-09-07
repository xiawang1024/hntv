import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
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
	downLoadFile = () => {
		Taro.downloadFile({ url: 'https://a.weixin.hndt.com/h5/test/20180905.docx' }).then((res) => {
			let { tempFilePath } = res;
			Taro.saveFile({ tempFilePath }).then((res) => {
				let { savedFilePath } = res;
				Taro.openDocument({ filePath: savedFilePath });
			});
		});
	};
	render() {
		return (
			<View className='list-wrap'>
				<Head title='刊例' type='tab' />
				{/* <Button onClick={this.downLoadFile}>下载</Button> */}
				<View className='list-box'>
					<View className='item'>123</View>
					<View className='item'>123</View>
					<View className='item'>123</View>
					<View className='item'>123</View>
				</View>
				<List />
			</View>
		);
	}
}
