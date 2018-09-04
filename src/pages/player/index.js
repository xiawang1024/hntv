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
			screenWidth: 0,
			index: 0,
			src: 'http://yun.it7090.com/video/XHLaunchAd/video02.mp4'
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
		console.log('------------------------------------');
		console.log(this.$router.params);
		console.log('------------------------------------');
	}
	onShareAppMessage = () => {};
	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}
	clickHandler = () => {
		Taro.navigateTo({
			url: '/pages/body/index'
		});
	};
	goBackHome = () => {
		let TYPE = Taro.getEnv();
		if (TYPE === 'WEB') {
			Taro.navigateTo({
				url: '/pages/index/index'
			});
		}
		if (TYPE === 'WEAPP') {
			Taro.navigateBack();
		}
	};
	onClickZan = () => {
		Taro.showToast('yes');
	};
	goToBody = () => {
		Taro.navigateTo({
			url: '/pages/body/index'
		});
	};
	touchStartHandler = (e) => {
		console.log(e);
		this.start = e.changedTouches[0];
	};
	touchMoveHandler = (e) => {};
	touchEndHandler = (e) => {
		this.getDirect(this.start, e.changedTouches[0]);
	};
	pre = () => {
		let { index } = this.state;
		index--;
		this.setState(
			{
				index
			},
			() => {
				console.log('------------------------------------');
				console.log(this.state.index);
				console.log('------------------------------------');
				this.setState({
					src: 'http://yun.it7090.com/video/XHLaunchAd/video02.mp4'
				});
			}
		);
		// Taro.navigateBack();
	};
	next = () => {
		let { index } = this.state;
		index++;
		this.setState(
			{
				index,
				src: 'http://yun.it7090.com/video/XHLaunchAd/video01.mp4'
			},
			() => {
				console.log('------------------------------------');
				console.log(this.state.index);
				console.log('------------------------------------');
			}
		);
		// Taro.navigateTo({
		// 	url: `/pages/player/index?id=${id}`
		// });
	};
	getDirect(start, end) {
		var X = end.pageX - start.pageX,
			Y = end.pageY - start.pageY;
		if (Math.abs(X) > Math.abs(Y) && X > 0) {
			console.log('right');
			this.pre();
		} else if (Math.abs(X) > Math.abs(Y) && X < 0) {
			console.log('left');
			this.next();
		} else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
			console.log('bottom');
		} else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
			console.log('top');
		}
	}
	goToMore = () => {
		Taro.navigateTo({
			url: '/pages/videos/index'
		});
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
				src={this.state.src}
			>
				<CoverView
					className='title-wrap'
					style={{ height: `${titleBarHeight}px`, marginTop: `${statusBarHeight}px` }}
				>
					<CoverView className='icon-back-wrap' onClick={this.goBackHome}>
						<CoverImage className='icon-back' src={require('./icon-back.png')} />
					</CoverView>

					<CoverView className='title'>{this.state.index}</CoverView>
				</CoverView>
				<CoverView className='player-info'>
					<CoverView className='player-zan'>
						<CoverImage className='icon-zan' onClick={this.onClickZan} src={require('./icon-zan.png')} />
						<CoverView className='num-zan'>点赞</CoverView>
					</CoverView>
					<CoverView className='player-msg'>
						<CoverImage className='icon-msg' src={require('./icon-msg.png')} />
						<Button openType='share' className='icon-share'>
							0
						</Button>
						<CoverView className='num-msg'>转发</CoverView>
					</CoverView>
					<CoverView className='player-more' onClick={this.goToBody}>
						<CoverImage className='icon-more' src={require('./icon-more.png')} />
						<CoverView className='num-more'>详情</CoverView>
					</CoverView>
				</CoverView>
				<CoverView className='m-more' onClick={this.goToMore}>
					#案例合集
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
				<CoverView
					className='touch-mark'
					onTouchStart={this.touchStartHandler}
					onTouchMove={this.touchMoveHandler}
					onTouchEnd={this.touchEndHandler}
				/>
			</Video>
		);
	}
}
