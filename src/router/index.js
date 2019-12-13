import React from 'react'
import Loadable from 'react-loadable';
// import Index from '../pages/Index';
// import List from '../pages/List';
// import My from '../pages/My';
const Loading = () => {
  return <div>Loading...</div>;
};

const router = [
  {
    path: '/',
    title: '博客首页',
    exact: true,
    component: Loadable({
      loader: () => import('../pages/Index'),
      loading: Loading,
      delay: 300000000,
      timeout: 10000
    })
  },
  {
    path: '/list/:id',
    title: '视频教程',
    exact: false,
    component: Loadable({
      loader: () => import('../pages/List'),
      loading: Loading,
      delay: 300000
    })
  },
  {
    path: '/my/',
    title: '职场技能',
    exact: false,
    component: Loadable({
      loader: () => import('../pages/My'),
      loading: Loading,
      delay: 300000
    })
  }
];

export default router;
