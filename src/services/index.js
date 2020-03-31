/*
 * @Descripttion:
 * @Author: Lorder
 * @Date: 2019-12-27 14:03:53
 * @LastEditors  : Lorder
 * @LastEditTime : 2019-12-27 15:12:58
 */
import instance from '@/config/axios';
// 获取首页数据
export const getHomeData = params => {
  return instance.post('/home/finalHome', params);
};

// post
export const getConfigure = params => {
  return instance.get('/configure/insuranceList/json',{ params: params });
};
