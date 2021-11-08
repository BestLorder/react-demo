import React, { useState, useEffect } from 'react'
import Player from 'griffith'
export default function Video() {
  const sources = {
    hd: {
      play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
    },
    sd: {
      play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4',
    },
  }
  useEffect(() => {
    //必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
    // document.addEventListener(
    //   'WeixinJSBridgeReady',
    //   function() {
    //     document.getElementById('video').play()
    //   },
    //   false,
    // )
  }, [])

  return <Player sources={sources} />
}
