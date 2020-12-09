/*
 * @Descripttion:
 * @Author: Lorder
 * @Date: 2019-12-24 18:27:20
 * @LastEditors: Lorder
 * @LastEditTime: 2020-06-23 10:27:12
 */

import React, { useState, useEffect } from 'react'

export default function Counter() {
  let [count, setCount] = useState(0)
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
