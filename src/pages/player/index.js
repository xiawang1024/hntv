import Taro, { Component } from '@tarojs/taro';
import { Video, CoverImage } from '@tarojs/components';
import { get as getGlobalData } from '../../global_data';
import './index.scss';
import videoList from './videos';

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
			videoList: [],
			isPlayInfo: {},
			isPlayIndex: 0,
			src: 'http://vfx.mtime.cn/Video/2018/09/05/mp4/180905134907179704.mp4'
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
		let { isPlayIndex } = this.$router.params;
		Taro.getStorage({key:'videosList'}).then(res => {
			let {data} = res 
			let videoList = JSON.parse(data)
			this.setState({
				videoList,
				isPlayInfo:videoList[isPlayIndex]
			})
			console.log(JSON.parse(data))
		})
		
		this.initVideoInfo(isPlayIndex);
	}
	initVideoInfo = (isPlayIndex = 0) => {
		let { videoList } = this.state;
		let isPlayInfo = videoList[isPlayIndex];
		this.setState({
			isPlayInfo,
			isPlayIndex
		});
	};
	onShareAppMessage = () => {
		let { isPlayIndex, isPlayInfo } = this.state;
		return {
			title: isPlayInfo.title,
			imageUrl: isPlayInfo.thumbnail,
			path: `/pages/player/index?isPlayIndex=${isPlayIndex}`
		};
	};
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
			Taro.switchTab({
				url: '/pages/index/index'
			});
		}
	};
	onClickZan = () => {
		Taro.showToast('yes');
	};
	goToBody = () => {
		let {id} = this.state.isPlayInfo
		let url = `/pages/body/index?articleId=${id}`;
		Taro.navigateTo({
			url
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
		let { isPlayIndex, videoList, isPlayInfo } = this.state;
		let len = videoList.length;
		if (isPlayIndex === 0) {
			Taro.showToast({ title: '到头了' });
			return;
		} else {
			isPlayIndex--;
			isPlayInfo = videoList[isPlayIndex];
			this.setState({
				isPlayInfo,
				isPlayIndex
			});
		}
	};
	next = () => {
		let { isPlayIndex, videoList, isPlayInfo } = this.state;
		let len = videoList.length;
		if (isPlayIndex === len - 1) {
			Taro.showToast({ title: '到头了' });
			return;
		} else {
			isPlayIndex++;
			isPlayInfo = videoList[isPlayIndex];
			this.setState({
				isPlayInfo,
				isPlayIndex
			});
		}
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
		let { isPlayInfo } = this.state;
		return (
			<Video
				style={{ height: `${screenHeight}px`, width: `${screenWidth}px` }}
				className='player'
				controls={false}
				autoplay
				direction={0}
				objectFit={'contain'}
				loop
				src={isPlayInfo.flag}
			>
				<CoverView
					className='touch-mark'
					onTouchStart={this.touchStartHandler}
					onTouchMove={this.touchMoveHandler}
					onTouchEnd={this.touchEndHandler}
				/>
				<CoverView
					className='title-wrap'
					style={{ height: `${titleBarHeight}px`, marginTop: `${statusBarHeight}px` }}
				>
					<CoverView className='icon-back-wrap' onClick={this.goBackHome}>
						<CoverImage className='icon-back' src={require('./icon-back.png')} />
					</CoverView>

					<CoverView className='title'>{isPlayInfo.title}</CoverView>
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
