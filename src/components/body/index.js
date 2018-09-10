import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image, RichText } from '@tarojs/components';
import { get as getGlobalData } from '../../global_data';
import WxParse from '../wxParse/wxParse';
import './index.scss';

export default class BodyCont extends Component {
	config = {
		navigationBarTitleText: '河南都市频道广告推广'
	};
	static defaultProps  = {
		article:''
	}
	constructor(props) {
		super(props);
		this.state = {
			statusBarHeight: 0,
			titleBarHeight: 0
		};
	}
	componentWillMount() {}

	componentDidMount() {
		let statusBarHeight = getGlobalData('statusBarHeight');
		let titleBarHeight = getGlobalData('titleBarHeight');
		this.setState({
			statusBarHeight,
			titleBarHeight
		});
		const article = this.props.article;
		console.log()
		WxParse.wxParse('article', 'html', article, this.$scope, 5);
	}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}
	clickHandler = () => {
		Taro.showToast({
			title: 'click',
			icon: 'success'
		});
	};
	goBackHome = () => {
		Taro.navigateBack();
	};
	render() {
		let titleBarHeight = this.state.titleBarHeight;
		let statusBarHeight = this.state.statusBarHeight;
		let title = this.props.title;
		console.log(this.props.article)
		return (
			<View className='body-content'>
				<View
					className='title-wrap'
					style={{ height: `${titleBarHeight}px`, marginTop: `${statusBarHeight}px` }}
				>
					<View className='icon-back-wrap' onClick={this.goBackHome}>
						<Image className='icon-back' src={require('./icon-back.png')} />
					</View>

					<Text className='title'>正文</Text>
				</View>
				<View className='content-wrap'>
					<import src='../wxParse/wxParse.wxml' />
					<template is='wxParse' data='{{ wxParseData: article.nodes }}' />
				</View>
				{/* <View className='content-wrap'>
					<View className='title-wrap'>
						<Text className='title'>这是活动标题这是活动标题这是活动标题这是活动标题这是活动标题</Text>
					</View>
					<View className='info-wrap'>
						<Text className='time'>2018年08月24日</Text>
						<Text className='from-wrap'>
							<Text className='from-text'>来源：</Text>
							<Text className='from-name'>都市频道</Text>
						</Text>
					</View>
					<View className='body-wrap'>正文</View>
				</View> */}
			</View>
		);
	}
}
