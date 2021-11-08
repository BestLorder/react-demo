import React, { useState, useEffect } from 'react'
import './style.less'
export default function Video() {
  const [inputText, setInputText] = useState('123')

  useEffect(() => {
    //必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
    // document.addEventListener(
    //   'WeixinJSBridgeReady',
    //   function() {
    //     document.getElementById('video').play()
    //   },
    //   false,
    // )
    // var Hls = window.Hls
    // var video = document.querySelector('#video')
    // console.log(Hls.isSupported())
    // if (Hls.isSupported()) {
    //   let hls = new Hls()
    //   hls.loadSource('https://pull.kakahui.net/live/1432525667816177664.m3u8')
    //   hls.attachMedia(video)
    // } else {
    //   video.src = 'https://pull.kakahui.net/live/1432525667816177664.m3u8'
    //   video.addEventListener('loadedmetadata', function() {
    //     if (video.paused) {
    //       video.play()
    //     }
    //   })
    // }
  }, [])

  function isFullScreen() {
    return !!(
      document.fullscreen ||
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.webkitFullScreen ||
      document.msFullScreen
    )
  }

  // 进入全屏
  const fullScreen = () => {
    if (isFullScreen()) {
      exitFullScreen()
    } else {
      let ele2 = document.getElementById('videoBox')
      if (ele2.requestFullscreen) {
        ele2.requestFullscreen()
      } else if (ele2.mozRequestFullScreen) {
        ele2.mozRequestFullScreen()
      } else if (ele2.webkitRequestFullScreen) {
        ele2.webkitRequestFullScreen()
      } else if (ele2.webkitEnterFullscreen) {
        ele2.webkitEnterFullscreen()
      }
    }
  }
  // 退出全屏
  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.oRequestFullscreen) {
      document.oCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
  }

  return (
    <>
      <div id="videoBox">
        <video
          id="video"
          controls={true}
          autoPlay="autoPlay"
          x5-playsinline="true"
          playsInline={true}
          webkit-playsinline="true"
          src="https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4"
          x5-video-player-type="h5-page"
        ></video>

        <div className="btn" onClick={fullScreen}>
          全屏
        </div>
      </div>
      <input id="input" type="text" value={inputText} />
    </>
  )
}
