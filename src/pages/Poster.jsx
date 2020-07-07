/**
 * 6666666666
 * 44444444444
 */
import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode';
import styles from './Poster.module.less';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '1',
      src: '',
    };
  }
  componentDidMount() {
    console.log(123);
    this.myRef = React.createRef()
    
    // this.myRef.current.style.color='red'
    //   QRCode.toDataURL('http://192.168.14.202:3000/homework-attention?token=47c50eee03145f37a4f8be962ccaf6e3')
    // .then(url => {
    //   console.log(url)
    // })
    // .catch(err => {
    //   console.error(err)
    // })
    this.drawQRCode(
      'http://192.168.14.202:3000/homework-attention?token=47c50eee03145f37a4f8be962ccaf6e3'
    );
    const dom = document.querySelector('#capture');
    html2canvas(dom, {
      // useCORS: true,
      // backgroundColor: null,
      // width: dom.offsetWidth, // 解决生成海报有白边的问题
      // height: dom.offsetHeight,
    }).then((canvas) => {
      console.log(canvas);
      document.body.appendChild(canvas);
      this.setState({ src: canvas.toDataURL() },()=>{
        dom.style.display='none'
        console.log(document.querySelectorAll('canvas'))
        // document.querySelectorAll('canvas')[1].style.display='none'
      });
      // let oImg = new Image();
      // oImg.src = canvas.toDataURL(); // 导出图片
      // document.body.appendChild(oImg); // 将生成的图片添加到body
    });
  }

  // 生成二维码
  drawQRCode = (url) => {
    // console.log('Index -> drawQRCode -> url', url)
    const canvas = document.getElementById('canvas');
    // const ctx = canvas.getContext('2d')
    // const pixRatio = getPixelRatio(ctx)
    const pixRatio = 1;
    console.log('pixRatio');
    console.log(pixRatio);
    QRCode.toCanvas(
      canvas,
      url,
      {
        // margin: 1 * pixRatio,
        width: 100,
        height: 100,
      },
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
    return canvas;
  };

  myClick = (params) => {
    console.log(this.myRef.current)
    this.myRef.current.style.color='red'
    this.setState({ name: 666 });
  };

  render() {
    const { name, src} = this.state;
    return (
      <>
        <div onClick={this.myClick} ref={this.myRef}>{name}Poster</div>
        <div id="capture" className={styles.poster}>
          <canvas id="canvas" className={styles.qrcode}></canvas>
          <div>Hello world!</div>
        </div>
        <img src={src} alt="" className={styles.list} />
      </>
    );
  }
}

export default Test;
