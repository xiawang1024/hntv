import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import List from '../../components/list/index';
import Head from '../../components/head/index';
import './index.scss';
import { getSearchList } from '../../api/index';

export default class list extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广'
	};
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			schList: []
		};
	}
	componentWillMount() {}

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}
	onShareAppMessage = () => {};
	inputConfirm = () => {
		this.fetchSchList();
	};
	inputHandler = (e) => {
		let inputValue = e.detail.value;
		this.setState({
			inputValue
		});
	};
	clearIptValue = () => {
		Taro.showToast({
			title: '清空',
			icon: 'success'
		});
		this.setState({
			inputValue: ''
		});
	};
	fetchSchList = () => {
		getSearchList(this.state.inputValue).then((res) => {
			let { data, errorCode } = res.data;
			if (errorCode === 0) {
				if (data && data.length > 0) {
					Taro.showToast({
						title: '搜索成功',
						icon: 'success'
					});
					this.setState({
						schList: data
					});
				} else {
					Taro.showToast({ title: '未查询到相关信息', icon: 'none' });
				}
			} else {
				Taro.showToast({ title: '未查询到相关信息', icon: 'none' });
			}
		});
	};
	render() {
		return (
			<View className='list-wrap'>
				<Head title='搜索' type='tab' />
				<View className='sch-wrap'>
					<AtIcon value='search' size='16' color='#ccc' className='icon-sch' />
					<Input
						value={this.state.inputValue}
						type='text'
						placeholder='搜索'
						confirmType='search'
						focus
						className='ipt-sch'
						onConfirm={this.inputConfirm}
						onInput={this.inputHandler}
					/>
					<View className='icon-close-wrap' onClick={this.clearIptValue}>
						<AtIcon value='close-circle' size='16' color='#ccc' className='icon-close' />
					</View>
				</View>
				{this.state.schList.length > 0 && <List dataList={this.state.schList} />}
			</View>
		);
	}
}
