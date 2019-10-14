/*
 * @Description:圆形进度条
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-07-04 14:57:09
 * @LastEditTime: 2019-10-14 08:56:16
 */
import Taro, { Component } from '@tarojs/taro';
import { View, Canvas, Text } from '@tarojs/components';
import './index.scss';



const RoundSize = 60; //圆环半径

export default class RoundProgress extends Component {
  static defaultProps = {
    percent: 0,
    textDesc: ''
  };
  componentWillMount() { }

  componentDidMount() {
    this.drawProgressbg();
    this.drawCircle(0);
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  drawProgressbg() {
    // 使用 wx.createContext 获取绘图上下文 context
    var ctx = Taro.createCanvasContext('canvasProgressbg', this);
    ctx.setLineWidth(4); // 设置圆环的宽度
    ctx.setStrokeStyle('#20183b'); // 设置圆环的颜色
    ctx.setLineCap('round'); // 设置圆环端点的形状
    ctx.beginPath(); //开始一个新的路径
    ctx.arc(110, 110, RoundSize, 0, 2 * Math.PI, false);
    //设置一个原点(100,100)，半径为90的圆的路径到当前路径
    ctx.stroke(); //对当前路径进行描边
    ctx.draw();
  }

  drawCircle(step) {
    var context = Taro.createCanvasContext('canvasProgress', this);
    // 设置渐变
    var gradient = context.createLinearGradient(200, 100, 100, 200);
    gradient.addColorStop(0, '#2661DD');
    gradient.addColorStop(0.5, '#40ED94');
    gradient.addColorStop(1, '#5956CC');

    context.setLineWidth(10);
    context.setStrokeStyle(gradient);
    context.setLineCap('round');
    context.beginPath();
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    context.arc(
      110,
      110,
      RoundSize,
      -Math.PI / 2,
      step * Math.PI - Math.PI / 2,
      false
    );
    context.stroke();
    context.draw();
  }

  render() {
    let { percent, textDesc } = this.props;

    this.drawCircle(percent);
    return (
      <View className="container">
        <View className="progress_box">
          <Canvas
            className="progress_bg"
            canvasId="canvasProgressbg"
            style="width:220px;height:220px"
          />
          <Canvas
            className="progress_canvas"
            canvasId="canvasProgress"
            style="width:220px;height:220px"
          />
          <View className="progress_text">
            <View className="progress_dot" />
            <Text className="progress_info">{textDesc}</Text>
          </View>
        </View>
      </View>
    );
  }
}
