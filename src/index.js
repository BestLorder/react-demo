/*
 * @Descripttion:
 * @Author: Lorder
 * @Date: 2019-12-04 16:23:48
 * @LastEditors: Lorder
 * @LastEditTime: 2020-04-23 11:48:00
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from '@/store'
import log from '@/assets/js/log'
import * as Sentry from '@sentry/browser'
import ErrorBoundary from '@/components/ErrorBoundary'
import { getUrlParam } from '@/utils/util'
import '@/assets/js/fastclick'

const query = getUrlParam()

if (process.env.REACT_APP_ENV === 'dev' && query.debug) {
  // import VConsole from 'vconsole'
  // var VConsole = require('vconsole')
  import(/* webpackChunkName: "vconsole" */ 'vconsole').then(m => {
    // 处理异步加载到的模块m
    var VConsole = m.default
    new VConsole()
  })
}
log.capsule('当前环境', process.env.REACT_APP_ENV, 'success')
log.capsule('当前版本', process.env.REACT_APP_VERSION, 'success')
Sentry.init({
  dsn: 'https://5e7f32da251c4c1f85173f0061a688bc@o381682.ingest.sentry.io/5209361',
  environment: process.env.REACT_APP_ENV,
})
// Sentry.captureMessage('Hello');
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
)
