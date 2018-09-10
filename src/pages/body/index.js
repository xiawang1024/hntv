import Taro, { Component } from '@tarojs/taro';
import { View, RichText } from '@tarojs/components';
import BodyCont from '../../components/body/index';
import WxParse from '../../components/wxParse/wxParse';
import './index.scss';
import { getArticleData } from '../../api/index';

export default class list extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广'
	};
	constructor(props) {
		super(props);
		this.state = {
			html:null
		};
	}
	onShareAppMessage = () => {};
	componentWillMount() {}

	componentDidMount() {
		let { articleId } = this.$router.params;
		this.fetchArticle(articleId);
	}
	fetchArticle = (id) => {
		getArticleData(id).then((res) => {
			let { data } = res.data;
			this.setState({
        html:data.text
      })      
		});
	};
	

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	render() {
    console.log(this.state.html)
		return (
			<View className='body-wrap'>
      {
        this.state.html &&　<BodyCont article={this.state.html} />
      }				
			</View>
		);
	}
}
