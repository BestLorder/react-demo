/*
 * @Descripttion: 
 * @Author: Lorder
 * @Date: 2020-03-31 15:03:21
 * @LastEditors: Lorder
 * @LastEditTime: 2020-04-01 13:38:40
 */
import { createStore,applyMiddleware } from 'redux'  // 引入createStore方法
import thunk from 'redux-thunk'
import reducer from './reducer' 
const store = createStore(reducer,applyMiddleware(thunk))          // 创建数据存储仓库
export default store                 //暴露出去