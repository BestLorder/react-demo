/*
 * @Descripttion: 
 * @Author: Lorder
 * @Date: 2020-03-31 15:03:21
 * @LastEditors: Lorder
 * @LastEditTime: 2020-03-31 15:08:10
 */
import { createStore } from 'redux'  // 引入createStore方法
import reducer from './reducer' 
const store = createStore(reducer)          // 创建数据存储仓库
export default store                 //暴露出去