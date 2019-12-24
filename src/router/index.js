import React from 'react'
import Loadable from 'react-loadable';
const Loading = () => {
  return <div>Loading...</div>;
};

const router = [
  {
    path: '/',
    title: '博客首页',
    exact: true,
    component: Loadable({
      loader: () => import('@/pages/Index'),
      loading: Loading,
      delay: 300000000,
      timeout: 10000
    })
  },
  {
    path: '/list/:id',
    title: '视频教程',
    exact: true,
    component: Loadable({
      loader: () => import('../pages/List'),
      loading: Loading,
    })
  },
  {
    path: '/my/',
    title: '职场技能',
    exact: true,
    component: Loadable({
      loader: () => import('../pages/My'),
      loading: Loading,
    })
  },
  {
    path: '/test/',
    title: 'test',
    exact: true,
    component: Loadable({
      loader: () => import('../pages/Test'),
      loading: Loading,
    })
  }
];

export default router;
