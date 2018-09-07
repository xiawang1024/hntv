import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import List from '../../components/list/index';
import Head from '../../components/head/index';
import './index.scss';

export default class list extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广'
	};
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};
	}
	componentWillMount() {}

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}
	onShareAppMessage = () => {};
	inputConfirm = () => {
		Taro.showToast({
			title: this.state.inputValue,
			icon: 'success'
		});
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
				<List />
			</View>
		);
	}
}
