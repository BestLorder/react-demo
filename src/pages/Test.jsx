/*
 * @Descripttion: 
 * @Author: Lorder
 * @Date: 2019-12-24 18:27:20
 * @LastEditors: Lorder
 * @LastEditTime: 2020-06-23 10:27:12
 */ 


import React, { useState, useEffect } from 'react';
// import '@/assets/js/fastclick';
const Test = () => {
  const [a] = useState('1234');
  // a
  useEffect(() => {
      console.log('start')
      return () => {
        console.log('end')
      };
  })
  const myClick = (params) => {
      console.log('myClick')
  }
  
  return <div onClick={myClick}>{a}</div>;
};

export default Test;
