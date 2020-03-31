/*
 * @Descripttion:
 * @Author: Lorder
 * @Date: 2019-12-27 13:35:46
 * @LastEditors  : Lorder
 * @LastEditTime : 2019-12-27 15:43:34
 */
import axios from 'axios';
import md5 from 'js-md5';
import { Base64 } from 'js-base64';
const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 10000
});
console.log(process.env.REACT_APP_API);
// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    config.headers.Accept = '*/*';
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    let timestamp = parseInt(+new Date() / 1000)
    // let timestamp = 1577432088;

    config.headers.timestamp = timestamp;
    if (typeof config.data != 'undefined') {
      for (let i in config.data) {
        if (typeof config.data[i] == 'undefined') {
          delete config.data[i];
        }
      }
    }
    config.headers.signature = sign(config.data, timestamp);
    config.headers.token = '50bc7c60f7e568256e64daa76449007c';
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
// header签名
const sign = (body, timestamp) => {
  let salt = process.env.REACT_APP_APPSALT;
  // console.log(salt)
  let token = '50bc7c60f7e568256e64daa76449007c';
  // token逻辑
  let str = '';
  // body && Object.keys(body).sort().forEach(key => str += key + body[key])
  body &&
    Object.keys(body)
      .sort()
      .forEach(key => {
        if (body[key] !== 'undefined') {
          str += key + body[key];
        }
      });
  str = str.toString();
  // console.log(str)
  if (str) {
    // eslint-disable-next-line no-useless-escape
    str = str
      .replace(new RegExp('\\[', 'g'), '')
      .replace(new RegExp(']', 'g'), '')
      .replace(new RegExp('"', 'g'), '');
    // str = str.replaceAll("\\[", "").replaceAll("]", "").replaceAll("\"", "");
  }
  let beforeMd5 = Base64.encode(String(timestamp)) + (token || '') + salt + str;
  console.log('sign---' + beforeMd5)
  let sign = md5(beforeMd5);
  console.log('sign:' + sign)
  return sign;
};
export default instance;
