import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import List from '../../components/list/index';
import Head from '../../components/head/index';
import './index.scss';

const TITLELIST = [
	{
		id: 1,
		text: '新闻矩阵'
	},
	{
		id: 2,
		text: '互动IP'
	},
	{
		id: 3,
		text: '综艺季播'
	},
	{
		id: 4,
		text: '大健康'
	},
	{
		id: 5,
		text: '教育服务'
	},
	{
		id: 6,
		text: '体育'
	}
];
export default class type extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广'
	};
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		};
	}
	componentWillMount() {
		let { typeIndex } = this.$router.params;
		let titleArr = TITLELIST.filter((item) => {
			return item.id == typeIndex;
		});
		let title = titleArr[0].text;
		// let title = '列表';
		this.setState({
			title
		});
	}
	onShareAppMessage = () => {};

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		return (
			<View className='list-wrap'>
				<Head title={this.state.title} type='type' />
				<List title='栏目' />
			</View>
		);
	}
}
