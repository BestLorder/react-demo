import React, { useState, useEffect } from 'react'
import './list.css'
import Video1 from '@/components/Video'
export default function VideoBox() {
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

  return <Video1 />
}
