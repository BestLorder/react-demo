// import React, { Component } from "react";

// class My extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div>
//         <h2> Myooooo </h2> <h2> Myooooo </h2>{" "}
//       </div>
//     );
//   }
// }

// export default My;
import React, { useState, useEffect, useContext, useReducer } from 'react'
import './list.css'
// import MyButton from '@/components/Button';
const ThemeContext = React.createContext('light')
// import '@/assets/js/fastclick';
const initialState = {
  count: 0,
}
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    default:
      throw new Error()
  }
}

function Toolbar() {
  return (
    <div>
      <ThemedButton></ThemedButton>
    </div>
  )
}

function My() {
  const [count, setCount] = useState(10)
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    console.log(`useEffect=>You clickedtimes`)
    // document.getElementById("video").play();
    //必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
    document.addEventListener(
      'WeixinJSBridgeReady',
      function() {
        document.getElementById('video').play()
      },
      false,
    )

    return () => {
      console.log('1111')
    }
  }, [])

  useEffect(() => {
    console.log(`useEffect=>You ${count} clickedtimes`)

    return () => {
      console.log('2')
    }
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        click me
      </button>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>-</button>
      {/* <video
        src="https://hy.v.netease.com/2018/1030/5c9caed3eea6c6e079673d031fca3350qt.mp4"
        controls="controls"
        webkit-playsinline="true"
        x5-video-player-type="h5-page"
        autoplay
        id="video"
        loop
        muted
        playsInline={true}
      ></video> */}
      <video
        id="video"
        autoPlay="autoPlay"
        x5-playsinline="true"
        playsInline={true}
        webkit-playsinline="true"
        x5-video-player-type="h5-page"
        src="http://1500001860.vod2.myqcloud.com/6c981ff7vodcq1500001860/21f251d05285890808919304606/playlist.f9.mp4"
      ></video>
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  )
}

function ThemedButton() {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  // static contextType = ThemeContext;
  const color = useContext(ThemeContext)
  return <div>{color}</div>
  // return <ThemeContext.Consumer>{color => <div>{color}</div>}</ThemeContext.Consumer>;
}
export default My
