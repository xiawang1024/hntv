import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import BodyCont from '../../components/body/index';
import './index.scss';

export default class list extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广'
	};
	constructor(props) {
		super(props);
	}
	onShareAppMessage = () => {};
	componentWillMount() {}

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		return (
			<View className='list-wrap'>
				<BodyCont title='正文' />
			</View>
		);
	}
}
