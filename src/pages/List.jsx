import React, { Component } from 'react'
import { getUrlParam } from '@/utils/util'
import { connect } from 'react-redux' //引入连接器
// import { Button,List } from 'antd-mobile';
// import MyButton from '@/components/Button';
import { changeInputAction, addItemAction } from '@/store/actionCreators'
import './list.css'
// import '@/assets/js/fastclick';
import '@/assets/js/a'
import wechatConfig from '@/config/wechatConfig'
let MyButton = null
import(/* webpackChunkName: "MyButton" */ '@/components/Button').then(comp => {
  MyButton = comp
})
// const Item = List.Item;
const query = getUrlParam()

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { a: 1 }
  }

  componentDidMount() {
    window.addEventListener('beforeunload', event => {
      alert(1)
      // Cancel the event as stated by the standard.
      event.preventDefault()
      // Chrome requires returnValue to be set.
      event.returnValue = ''
    })
    console.log(query)
    console.log(this.props)
    console.log(wechatConfig)
    // let tempId = this.props.match.params.id;
    // this.setState({ id: tempId });
    // this.props.history.push("/my/");
    //必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
    document.addEventListener(
      'WeixinJSBridgeReady',
      function() {
        document.getElementById('video').play()
      },
      false,
    )
  }
  jumpMy = () => {
    this.props.history.push('/my')
  }
  componentWillUnmount() {
    alert(2)
  }

  render() {
    return (
      <>
        <h2
          onClick={() => {
            this.props.changeInputAction('1111')
          }}
        >
          {this.props.inputValue}
        </h2>
        {/* <Button type="primary" onClick={this.props.addItemAction}>
          增加
        </Button>
        <List renderHeader={() => 'Basic Style'} className="my-list">
          {this.props.list.map((item, index) => {
            return (
              <Item
                key={index + item}
              >
                {item}
              </Item>
            );
          })}
        </List> */}
        <div onClick={this.jumpMy}>跳转</div>
        <div className="scroll">
          啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        </div>
        <video
          id="video"
          autoPlay="autoPlay"
          x5-playsinline="true"
          playsInline={true}
          webkit-playsinline="true"
          x5-video-player-type="h5-page"
          src="http://1500001860.vod2.myqcloud.com/6c981ff7vodcq1500001860/21f251d05285890808919304606/playlist.f9.mp4"
        ></video>
        {MyButton && <MyButton text="123"></MyButton>}
      </>
    )
  }
}

export default connect(
  state => ({
    inputValue: state.inputValue,
    list: state.list,
  }),
  // dispatch => {
  //   return {
  //     jump() {
  //       let action = {
  //         type: 'changeInput',
  //         value: '123'
  //       };
  //       dispatch(action);
  //     },
  //     clickBtn(){
  //       let action = {
  //         type: 'addItem',
  //       };
  //       dispatch(action);
  //     }
  //   };
  // }
  { changeInputAction, addItemAction },
)(Index)
