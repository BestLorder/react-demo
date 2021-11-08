import React, { useState, useEffect } from 'react'
import DPlayer from 'dplayer'
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
    const dp = new DPlayer({
      container: document.getElementById('dplayer'),
      video: {
        // url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
        url: 'https://pull.kakahui.net/live/1432525667816177664.m3u8',
      },
      live: true,
      autoplay: true,
      hotkey: false,
      airplay: false,
    })
  }, [])

  // 进入全屏
  const fullScreen = () => {
    // if (!iscanplay) return
    var ele = document.getElementById('videoBox')
    if (ele.requestFullscreen) {
      ele.requestFullscreen()
    } else if (ele.mozRequestFullScreen) {
      ele.mozRequestFullScreen()
    } else if (ele.webkitRequestFullScreen) {
      ele.webkitRequestFullScreen()
    } else if (ele.webkitEnterFullscreen) {
      ele.webkitEnterFullscreen()
    }
    if (ele) {
      ele.controls = false
      ele.play()
    }
  }

  return (
    <>
      <div id="dplayer"></div>
      <input type="text" />
      <div onClick={fullScreen}>全屏</div>
    </>
  )
}
