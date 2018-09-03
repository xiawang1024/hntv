import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image, Video, CoverImage } from '@tarojs/components';
import { AtFloatLayout } from 'taro-ui';
import { get as getGlobalData } from '../../global_data';
import './index.scss';

export default class Index extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广',
		disableScroll: true
	};
	constructor(props) {
		super(props);
		this.state = {
			statusBarHeight: 0,
			titleBarHeight: 0,
			screenHeight: 0,
			screenWidth: 0
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
	clickHandler = () => {
		Taro.navigateTo({
			url: '/pages/body/index'
		});
	};
	goBackHome = () => {
		let { WEAPP, WEB } = Taro.ENV_TYPE;
		if (WEB === 'WEB') {
			Taro.navigateTo({
				url: '/pages/index/index'
			});
		}
		if (WEAPP === 'WEAPP') {
			Taro.navigateBack();
		}
	};
	onClickZan = () => {
		Taro.showToast('yes');
	};
	render() {
		let { titleBarHeight, statusBarHeight, screenHeight, screenWidth } = this.state;
		let commentHeight = screenHeight / 1.5;
		let isShowCommentList = false;
		return (
			<Video
				style={{ height: `${screenHeight}px`, width: `${screenWidth}px` }}
				className='player'
				controls={false}
				autoplay
				direction={0}
				objectFit={'cover'}
				loop
				src='http://yun.it7090.com/video/XHLaunchAd/video02.mp4'
			>
				<CoverView
					className='title-wrap'
					style={{ height: `${titleBarHeight}px`, marginTop: `${statusBarHeight}px` }}
				>
					<CoverView className='icon-back-wrap' onClick={this.goBackHome}>
						<CoverImage className='icon-back' src={require('./icon-back.png')} />
					</CoverView>

					<CoverView className='title'>视频</CoverView>
				</CoverView>
				<CoverView className='player-info'>
					<CoverView className='player-zan'>
						<CoverImage className='icon-zan' onClick={this.onClickZan} src={require('./icon-zan.png')} />
						<CoverView className='num-zan'>987600</CoverView>
					</CoverView>
					<CoverView className='player-msg'>
						<CoverImage className='icon-msg' src={require('./icon-msg.png')} />
						<CoverView className='num-msg'>987600</CoverView>
					</CoverView>
					<CoverView className='player-more'>
						<CoverImage className='icon-more' src={require('./icon-more.png')} />
						<CoverView className='num-more'>更多</CoverView>
					</CoverView>
				</CoverView>
				{isShowCommentList && (
					<CoverView className='comment-list' style={{ height: `${commentHeight}px`, overflow: 'auto' }}>
						<CoverView className='head-wrap'>
							<CoverView className='title'>9876条评论</CoverView>
							<CoverImage className='icon-close' src={require('./icon-close.png')} />
						</CoverView>
						<CoverView className='list-wrap'>
							<CoverView className='item'>
								<CoverImage
									className='avatar'
									src='http://www.hndt.com/podcast/1111/res/xtmZ0Bee.png?1508751589195'
								/>
								<CoverView className='text-wrap'>
									<CoverView className='nickname'>昵称</CoverView>
									<CoverView className='text'>
										这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容
									</CoverView>
									<CoverView className='time'>2018</CoverView>
								</CoverView>
							</CoverView>
							<CoverView className='item'>
								<CoverImage
									className='avatar'
									src='http://www.hndt.com/podcast/1111/res/xtmZ0Bee.png?1508751589195'
								/>
								<CoverView className='text-wrap'>
									<CoverView className='nickname'>昵称</CoverView>
									<CoverView className='text'>
										这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容
									</CoverView>
									<CoverView className='time'>2018</CoverView>
								</CoverView>
							</CoverView>
							<CoverView className='item'>
								<CoverImage
									className='avatar'
									src='http://www.hndt.com/podcast/1111/res/xtmZ0Bee.png?1508751589195'
								/>
								<CoverView className='text-wrap'>
									<CoverView className='nickname'>昵称</CoverView>
									<CoverView className='text'>
										这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容
									</CoverView>
									<CoverView className='time'>2018</CoverView>
								</CoverView>
							</CoverView>
							<CoverView className='item'>
								<CoverImage
									className='avatar'
									src='http://www.hndt.com/podcast/1111/res/xtmZ0Bee.png?1508751589195'
								/>
								<CoverView className='text-wrap'>
									<CoverView className='nickname'>昵称</CoverView>
									<CoverView className='text'>
										这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容
									</CoverView>
									<CoverView className='time'>2018</CoverView>
								</CoverView>
							</CoverView>
							<CoverView className='item'>
								<CoverImage
									className='avatar'
									src='http://www.hndt.com/podcast/1111/res/xtmZ0Bee.png?1508751589195'
								/>
								<CoverView className='text-wrap'>
									<CoverView className='nickname'>昵称</CoverView>
									<CoverView className='text'>
										这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容
									</CoverView>
									<CoverView className='time'>2018</CoverView>
								</CoverView>
							</CoverView>
						</CoverView>
					</CoverView>
				)}
			</Video>
		);
	}
}
