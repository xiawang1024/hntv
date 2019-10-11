/*
 * @Description:
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-10-11 15:38:44
 * @LastEditTime: 2019-10-11 16:29:12
 */
import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import Head from '../../components/head/index';
import RoundProgress from '../../components/roundProgress/index';
import './index.scss';
import { getArticleList, getDocList } from '../../api/index';
import { get as getGlobalData } from '../../global_data';

export default class list extends Component {
  config = {
    navigationBarTitleText: '河南都市频道广告推广'
  };
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      imgSrcList: [],
      statusBarHeight: 0,
      titleBarHeight: 0,
      isShowProgress: false,
      percent: 0,
      textDesc: '准备下载'
    };
  }
  componentWillMount() { }

  componentDidMount() {
    this.fetchGetTypeList();
    let statusBarHeight = getGlobalData('statusBarHeight');
    let titleBarHeight = getGlobalData('titleBarHeight');
    this.setState({
      statusBarHeight,
      titleBarHeight
    });
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  onShareAppMessage = () => { };
  fetchGetTypeList = () => {
    getDocList().then(res => {
      let { code, result } = res.data
      if (code === 0) {
        this.setState({ dataList: result.content })
      }
    })
    // getArticleList(45).then((res) => {
    //   let { errorCode, data } = res.data;
    //   if (errorCode === 0) {
    //     let imgSrcList = data.map(item => {
    //       return item.thumbnail
    //     })
    //     this.setState({ dataList: data, imgSrcList });
    //   }
    // });
  };
  downLoadFile = () => {
    Taro.downloadFile({ url: 'https://a.weixin.hndt.com/h5/test/20180905.docx' }).then((res) => {
      let { tempFilePath } = res;
      Taro.saveFile({ tempFilePath }).then((res) => {
        let { savedFilePath } = res;
        Taro.openDocument({ filePath: savedFilePath });
      });
    });
  };
  goToBody = (imgSrc) => {
    // let url = `/pages/body/index?articleId=${articleId}&type=tab1`;
    // Taro.navigateTo({
    // 	url
    // });
    let { imgSrcList } = this.state
    Taro.previewImage({
      urls: imgSrcList,
      current: imgSrc
    })
  };
  previewHandler(imgs) {
    let urls = imgs.map(item => item.url);
    Taro.previewImage({ current: imgs[0].url, urls });
  }
  openDoc(list) {
    let downLoadUrl = list[0].url.replace(/^http:/, 'https:');
    // Taro.showLoading({ title: '正在打开' });
    this.setState({
      textDesc: '准备下载',
      isShowProgress: true
    });

    const task = Taro.downloadFile({ url: downLoadUrl });
    // this.task = task;
    // if (task) {
    //   this.setState({
    //     percent: 0
    //   });
    //   task.abort();
    // }
    task
      .then(res => {
        let { tempFilePath } = res;
        this.setState({
          textDesc: '正在打开'
        });
        Taro.openDocument({ filePath: tempFilePath })
          .then(() =>
            // Taro.hideLoading()
            this.setState({
              isShowProgress: false
            })
          )
          .catch(() => {
            Taro.showModal({ title: '文件错误', content: '无法打开此文件' });
            this.setState({
              isShowProgress: false
            });
          });
      })
      .catch(() => {
        Taro.showModal({ title: '网络错误', content: '请稍候再试' });
        this.setState({
          isShowProgress: false
        });
      });

    task.progress(res => {
      let { progress } = res;
      let percent = (progress / 100) * 2;
      if (progress === 1) {
        this.setState({
          textDesc: '下载中'
        });
      }

      this.setState({
        percent
      });
    });
  }
  openDocHandler(item) {
    let { isShowProgress } = this.state;
    if (isShowProgress) {
      return;
    }
    let { articleAttachmentsList, contentImagesList } = item;
    if (articleAttachmentsList && articleAttachmentsList.length > 0) {
      this.openDoc(articleAttachmentsList);
    } else if (contentImagesList && contentImagesList.length > 0) {
      this.previewHandler(contentImagesList);
    } else {
      Taro.showModal({
        title: '提示',
        content: '本刊例暂无内容'
      });
    }
  }
  render() {
    let { titleBarHeight, statusBarHeight, percent, textDesc, isShowProgress } = this.state;
    let height = parseInt(titleBarHeight) + parseInt(statusBarHeight) + 10
    return (
      <View className='list-wrap'>
        <Head title='刊例' type='tab' />
        {/* <Button onClick={this.downLoadFile}>下载</Button> */}
        {isShowProgress ? (
          <RoundProgress percent={percent} textDesc={textDesc} />
        ) : null}
        <View className='list-box' style={{ paddingTop: `${height}px` }}>
          {this.state.dataList.map((item) => {
            return (
              <View className='item' key={item.id.toString()} onClick={this.openDocHandler.bind(this, item)}>
                <Image className='cover' src={item.coverImagesList[0].url} />
                <View className='title'>{item.title}</View>
              </View>
            );
          })}
          {/* <View className='item'>
						<Image className='cover' mode='aspectFit' src='http://tupian.aladd.net/2015/4/121.jpg' />
					</View> */}
        </View>
      </View>
    );
  }
}
