import React, { useState, useEffect } from 'react'
export default function Video() {
  useEffect(() => {
    //必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
    document.addEventListener(
      'WeixinJSBridgeReady',
      function() {
        document.getElementById('video').play()
      },
      false,
    )
  }, [])

  return (
    <video
      id="video"
      // autoPlay="autoPlay"
      x5-playsinline="true"
      playsInline={true}
      webkit-playsinline="true"
      x5-video-player-type="h5-page"
      controls
      src="https://1500001860.vod2.myqcloud.com/6c981ff7vodcq1500001860/2b7d79975285890818575373932/f0.mp4"
    ></video>
  )
}
