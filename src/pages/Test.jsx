/*
 * @Descripttion:
 * @Author: Lorder
 * @Date: 2019-12-24 18:27:20
 * @LastEditors: Lorder
 * @LastEditTime: 2020-06-23 10:27:12
 */

import React, { useState, useEffect } from 'react'
// import '@/assets/js/fastclick';
// const Test = () => {
//   const [a] = useState('1234');
//   // a
//   useEffect(() => {
//       console.log('start')
//       return () => {
//         console.log('end')
//       };
//   })
//   const myClick = (params) => {
//       console.log('myClick')
//   }

//   return <div onClick={myClick}>{a}</div>;
// };

// export default Test;
// let num = 0; // 将声明放到渲染组件外面
export default function Counter() {
  let [count, setCount] = useState(0)
  // let num = 0;
  useEffect(() => {
    // console.log(count);
    // setCount(count + 1);
    setInterval(() => {
      console.log(count)
      setCount(++count)
      // console.log(num);
      // setCount(++num);
    }, 1000)
  }, [count])
  console.log('我是 count', count)

  return <h1>{count}</h1>
}
