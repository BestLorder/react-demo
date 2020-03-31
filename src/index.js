/*
 * @Descripttion: 
 * @Author: Lorder
 * @Date: 2019-12-04 16:23:48
 * @LastEditors: Lorder
 * @LastEditTime: 2020-03-31 14:24:28
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import log from "@/assets/js/log";
log.capsule("当前环境", process.env.REACT_APP_ENV, "success");
log.capsule("当前版本", process.env.REACT_APP_VERSION, "success");
ReactDOM.render(<App/>, document.getElementById('root'));


