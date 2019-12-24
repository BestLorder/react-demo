/**
 * 6666666666
 * 44444444444
 */

import React, { useState, useEffect } from 'react';
const Test = () => {
  const [a] = useState('123456');
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
