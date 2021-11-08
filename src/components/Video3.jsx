import React, { useState, useEffect } from 'react'
// import videojs from 'video.js'
export default function Video() {
  useEffect(() => {
    //必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
    // document.addEventListener(
    //   'WeixinJSBridgeReady',
    //   function() {
    //     document.getElementById('video').play()
    //   },
    //   false,
    // )
    // const dp = new DPlayer({
    //   container: document.getElementById('dplayer'),
    //   video: {
    //     url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
    //   },
    //   autoplay: true,
    //   hotkey: false,
    //   airplay: false,
    // })
    var player = videojs('my-player', {
      controls: true,
    })
  }, [])

  // 进入全屏
  const fullScreen = () => {
    // if (!iscanplay) return
    var ele = document.getElementById('my-player')
    if (ele.requestFullscreen) {
      ele.requestFullscreen()
    } else if (ele.mozRequestFullScreen) {
      ele.mozRequestFullScreen()
    } else if (ele.webkitRequestFullScreen) {
      ele.webkitRequestFullScreen()
    } else if (ele.webkitEnterFullscreen) {
      ele.webkitEnterFullscreen()
    }
    // if (ele) {
    //   ele.controls = false
    //   ele.play()
    // }
  }

  return (
    <>
      <video
        id="my-player"
        class="video-js"
        controls
        preload="auto"
        poster="//vjs.zencdn.net/v/oceans.png"
        data-setup="{}"
        width="375"
      >
        <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
        <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
        <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video>
      <input type="text" />
      <div onClick={fullScreen}>全屏</div>
    </>
  )
}
