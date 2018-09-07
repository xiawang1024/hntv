import Taro, { Component } from '@tarojs/taro';
import { View, RichText } from '@tarojs/components';
import BodyCont from '../../components/body/index';
import WxParse from '../../components/wxParse/wxParse';
import './index.scss';

export default class list extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广'
	};
	constructor(props) {
		super(props);
		this.state = {
			html: `<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"/ktvcms/attachment/20180907/50ec629fc12d4c16b7dca9850a724018.png\" alt=\"\"></p> \n<p><strong>核心策略：</strong></p> \n<p>高质量的陪伴，一直是999小儿感冒药推行和倡导的品牌理念，在本次品牌营销传播中，999小儿感冒药联合河南广播电视台都市频道借势六一儿童节，在强势新闻栏目中定制亲子版块，讲述不同类型妈妈与孩子之前的真实故事，与消费者内心深处发生情感碰撞，同时与新媒体大V的高频次密集互动传播，扩大传播声量及爆光度，使999小儿感冒药品牌的好感度大大提升。</p> \n<p><strong>创新点：</strong></p> \n<p>以真人真事的方式，讲述不同类型妈妈和孩子之间的感人故事，如公交车司机妈妈、护士妈妈、教师妈妈、导演妈妈等，阐述“妈妈百态，母爱大同”的中心思想，同时借助线上线下的整合营销传播，将“陪伴，是送给孩子最好的礼物”这个理念传递到更多的家庭，直击核心目标消费者内心，产生深度共鸣。</p> \n<p><strong>执行效果：</strong></p> \n<p>定制版块播出当天分别在河南广播电视台都市频道《打鱼晒网》的微信公众号及微博进行图文和视频的同步推送，在秒拍、今日头条、爱奇艺、企鹅号进行视频的同步推送，推文阅读量累计突破200000+，视频播放量累计突破1000000+ ，网络视频播出及推文推送后，引发热议，收到大量网友的积极评论，起到良好的传播效果。</p>`
		};
	}
	onShareAppMessage = () => {};
	componentWillMount() {}

	componentDidMount() {
		const article = this.state.html;
		WxParse.wxParse('article', 'html', article, this.$scope, 5);
	}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		return (
			<View className='body-wrap'>
				<BodyCont article={this.state.html} />
			</View>
		);
	}
}
