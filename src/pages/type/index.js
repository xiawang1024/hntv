import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import ListType from '../../components/ListType/index';
import './index.scss';

export default class type extends Component {
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

	render() {
		return (
			<View className='list-wrap'>
				<ListType title='内容制造者' />
			</View>
		);
	}
}
