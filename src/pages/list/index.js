import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import ListComponent from '../../components/listComponent/index';
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
			<View className="list-wrap">
				<ListComponent title="栏目" />
			</View>
		);
	}
}
