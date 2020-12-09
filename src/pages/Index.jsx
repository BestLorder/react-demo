/*
 * @Descripttion:
 * @Author: Lorder
 * @Date: 2019-12-04 16:23:48
 * @LastEditors: Lorder
 * @LastEditTime: 2020-07-03 17:06:13
 */
import React, { Component, Suspense } from 'react'
// import MyButton from '@/components/Button';

import { Button, List } from 'antd-mobile'
import * as Home from '@/services/index'
import './index.less'
import store from '@/store'
import wechatConfig from '@/config/wechatConfig'
import '@/assets/js/a'
// import '@/assets/js/fastclick';
// import { ADD_ITEM , DELETE_ITEM } from '@/store/actionTypes'
import { changeInputAction, addItemAction, deleteItemAction } from '@/store/actionCreators'
import { connect } from 'react-redux' //引入连接器
// import './jsmpeg.min.js'
// import jsmpeg from 'jsmpeg'

// let MyButton = null;
// import(/* webpackChunkName: "MyButton" */ "@/components/Button");
const MyButton = React.lazy(() => import(/* webpackChunkName: "MyButton" */ '@/components/Button'))

let MyButton1 = null

const Item = List.Item

// const BuggyComponent = ({text}) => (
// <div>{text}</div>
// )

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // list: [
      //   { cid: 123, title: '个人博客-1' },
      //   { cid: 456, title: '个人博客-2' },
      //   { cid: 789, title: '个人博客-3' }
      // ],
      newList: [`<h1>1<h1/>`, 2, 3],
      text: 'myButton',
      name: 4,
      count: 0,
      ...store.getState(),
      myButtonShow: false,
    }
    // console.log(store.getState());
    this.storeChange = this.storeChange.bind(this) //转变this指向
    store.subscribe(this.storeChange) //订阅Redux的状态
  }
  componentDidMount() {
    if (true) {
      import(/* webpackChunkName: "MyButton" */ '@/components/Button').then(module => {
        MyButton1 = module.default
      })
    }

    console.log(this.props)
    console.log('wechatConfig')
    console.log(wechatConfig)
    // Home.getHomeData({}).then((res) => {
    //   console.log(res.data);
    // });
    Home.firstScn({ a: 1 }).then(res => {
      console.log(res.data)
    })
    // var jsmpeg = require('jsmpeg')
    // console.log('jsmpeg')
    // console.log(jsmpeg)
    var canvas = document.getElementById('video-canvas')
    var url = 'https://qnunion.feierlaiedu.com/kcschool/202006231645266_out.ts'
    // var url = 'https://hy.v.netease.com/2018/1030/5c9caed3eea6c6e079673d031fca3350qt.mp4'
    // var url = 'http://pull.kakahui.net/live/1400397853_1234_administrator_main.m3u8'

    // var url = 'ws://' + document.location.hostname + ':8082/';
    // eslint-disable-next-line
    var player = new JSMpeg.Player(url, { canvas: canvas, autoplay: true })
    // var player = new jsmpeg('https://qnunion.feierlaiedu.com/kcschool/202006231645266_out.ts', {
    //   canvas: canvas,
    //   autoplay: true,
    //   onPlay: function() {
    //     //开始播放事件回调
    //     console.log('play')
    //   },
    // })
    // eslint-disable-next-line
    // var player = new JSMpeg.Player(
    //   'https://hy.v.netease.com/2018/1030/5c9caed3eea6c6e079673d031fca3350qt.mp4',
    //   [
    //     {
    //       canvas: document.getElementById('video-canvas'),
    //       autoplay: true, //是否自动播放
    //       loop: false,
    //     },
    //   ],
    // )

    //必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
    // document.addEventListener(
    //   'WeixinJSBridgeReady',
    //   function() {
    //     document.getElementById('video').play()
    //   },
    //   false,
    // )
  }
  componentWillUpdate() {
    console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
  }
  //当组件从页面中删除的时候执行
  componentWillUnmount() {
    // alert(1);
    console.log('child - componentWillUnmount')
  }

  // componentDidCatch(){
  //   console.log('catch')
  // }

  storeChange() {
    this.setState(store.getState())
  }
  /**
   * @description:
   * @param {type}
   * @return:
   */
  jumpLIst = () => {
    // this.props.history.push('/list/666');
    this.props.history.push('/list?list=666')
    // this.props.history.push({
    //   pathname: '/list',
    //   query: {
    //     a: 1,
    //     b: 2,
    //   },
    // })
  }
  jumpMy = () => {
    // this.props.history.push('/my');
    // import(/* webpackChunkName: "MyButton" */ "@/components/Button").then(
    //   (module) => {
    //     console.log(module);
    //     MyButton = module.default;
    //   }
    // );
    this.setState({ myButtonShow: true })
  }

  changeName = text => {
    console.log('changeName')
    this.setState({
      text,
    })
  }
  changeList = () => {
    // this.setState({ newList: [...this.state.newList, this.state.name] }, () => {
    //   // console.log(this.state.newList);
    // });
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: '我来也'
    // };
    const action = changeInputAction('我来也')
    store.dispatch(action)
  }

  clickBtn = () => {
    // console.log('clickBtn');
    // const action = { type: ADD_ITEM };
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem(index) {
    // const action = {
    //   type: DELETE_ITEM,
    //   index
    // };
    const action = deleteItemAction(index)
    store.dispatch(action)
  }

  report = () => {
    // try {
    //   throw new Error("1");
    // } catch (error) {
    //   console.log('手动抛出异常')
    // }
    let newCount = this.state.count + 1
    this.setState(
      {
        count: newCount,
      },
      () => {
        if (this.state.count === 5) {
          throw new Error('i crashed！！！')
        }
      },
    )
  }

  render() {
    console.log('props')
    console.log(this.props)
    const { myButtonShow } = this.state
    return (
      <>
        <ul>
          {this.state.newList.map((item, index) => {
            return <li key={index + item} dangerouslySetInnerHTML={{ __html: item }}></li>
          })}
        </ul>
        <Button type="primary" onClick={this.jumpLIst}>
          Jump LIst
        </Button>
        <Button type="primary" onClick={this.jumpMy}>
          Jump My
        </Button>
        <Button type="primary" onClick={this.changeList}>
          changeList
        </Button>
        <Button type="primary" onClick={this.changeList}>
          {this.state.inputValue}
        </Button>
        <Button type="primary" onClick={this.clickBtn}>
          增加
        </Button>
        <Button type="primary" onClick={this.report}>
          sentry
        </Button>
        {/* {myButtonShow && (
          <Suspense fallback={<div></div>}>
            <MyButton text={this.state.text} onChange={this.changeName} />
          </Suspense>
        )} */}

        {myButtonShow && <MyButton1 text={1} onChange={this.changeName} />}
        {/* {MyButton && (
          <MyButton
            text={this.state.text}
            onChange={this.changeName}
          ></MyButton>
        )} */}
        <div className="tip">
          <span>这是子元素的内容</span>
        </div>
        <div className="tip">系统消息</div>
        <div>{wechatConfig[5].name}</div>

        <List renderHeader={() => 'Basic Style'} className="my-list">
          {this.state.list.map((item, index) => {
            return (
              <Item
                key={index + item}
                onClick={() => {
                  this.deleteItem(index)
                }}
              >
                {item}
              </Item>
            )
          })}
        </List>

        {/* {[1,2].map((_, i) =><BuggyComponent text={this.state.text}  /> )} */}
        <div className="scroll">
          啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        </div>
        <video
          src="https://hy.v.netease.com/2018/1030/5c9caed3eea6c6e079673d031fca3350qt.mp4"
          controls="controls"
          webkit-playsinline="true"
          x5-video-player-type="h5-page"
          autoplay
          id="video"
          loop
          muted
          playsInline={true}
        ></video>
        <div className="red"></div>
        <div>6666</div>
        {/* <div className="jsmpeg" id="video-canvas" data-url="<url>"></div> */}
        <canvas
          style={{ width: '100%', height: '200px' }}
          width="375px"
          height="200px"
          id="video-canvas"
        ></canvas>
      </>
    )
  }
}

export default connect(state => {
  return {
    inputValue: state.inputValue,
  }
}, null)(Index)
