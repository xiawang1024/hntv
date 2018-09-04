import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import ListTab from '../../components/listTab/index';
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

	render() {
		return (
			<View className='list-wrap'>
				<ListTab title='栏目' />
			</View>
		);
	}
}
