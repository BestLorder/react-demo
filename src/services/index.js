/*
 * @Descripttion:
 * @Author: Lorder
 * @Date: 2019-12-27 14:03:53
 * @LastEditors: Lorder
 * @LastEditTime: 2020-07-03 17:02:16
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

export const firstScn = params => {
  return instance.get('/firstScn',params);
};
