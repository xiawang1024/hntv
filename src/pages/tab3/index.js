import Taro, { Component } from '@tarojs/taro';
import { View ,Image} from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import List from '../../components/list/index';
import Head from '../../components/head/index';
import './index.scss';
import { getSearchList } from '../../api/index';
import { get as getGlobalData } from '../../global_data';

export default class list extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广'
	};
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			schList: [],
			statusBarHeight: 0,
			titleBarHeight: 0,
			screenHeight: 0,
			screenWidth: 0,
		};
	}
	componentWillMount() {}

	componentDidMount() {
		let statusBarHeight = getGlobalData('statusBarHeight');
		let titleBarHeight = getGlobalData('titleBarHeight');
		let screenHeight = getGlobalData('screenHeight');
		let screenWidth = getGlobalData('screenWidth');
		this.setState({
			statusBarHeight,
			titleBarHeight,
			screenHeight,
			screenWidth
		});
	}

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
			title: '清空搜索',
			icon: 'none'
		});
		this.setState({
			inputValue: '',
			schList:[]
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
		let { titleBarHeight, statusBarHeight,screenHeight,screenWidth } = this.state;
		let height = parseInt(titleBarHeight) + parseInt(statusBarHeight) + 10
		return (
			<View className='sch-list-wrap' style={{ height: `${screenHeight}px`, width: `${screenWidth}px` }}>
				<Image src={require('./bg.png')} style={{ height: `${screenHeight}px`, width: `${screenWidth}px` }}/>
				{/* <Head title='搜索' type='tab' /> */}
				<View className='sch-bd'>
					<View style={{ height: `${titleBarHeight}px`, paddingTop: `${statusBarHeight}px`,display:'flex',justifyContent: 'center',alignItems: 'center',color:'#fff' }} className='title'>
						<Text>搜索</Text>
					</View>
					
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
					{this.state.schList.length > 0 && <List type='sch' dataList={this.state.schList} />}
				</View>
			</View>
		);
	}
}
