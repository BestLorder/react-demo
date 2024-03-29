/*
 * @Descripttion:
 * @Author: Lorder
 * @Date: 2019-12-04 16:41:26
 * @LastEditors: Lorder
 * @LastEditTime: 2020-06-28 18:29:08
 */
// import React from 'react'
// import Loadable from 'react-loadable';
import loadable from '@loadable/component'
// const Loading = () => {
//   return <div>Loading...</div>;
// };
// import Index from '@/pages/Index';
// import List from '../pages/List';
// import My from '@/pages/My';
// const Index = React.lazy(() => import('@/pages/Index'));
// const List = React.lazy(() => import('@/pages/List'));
// const My = React.lazy(() => import('@/pages/My'));

const Index = loadable(() => import(/* webpackChunkName: "Index" */ '@/pages/Index'))
const List = loadable(() => import(/* webpackChunkName: "List" */ '@/pages/List'))
const My = loadable(() => import(/* webpackChunkName: "My" */ '@/pages/My1'))
const MyHooks = loadable(() => import(/* webpackChunkName: "MyHooks" */ '@/pages/MyHooks'))

const Test = loadable(() => import(/* webpackChunkName: "Test" */ '@/pages/Test'))
const Poster = loadable(() => import(/* webpackChunkName: "Poster" */ '@/pages/Poster'))
const Study = loadable(() => import(/* webpackChunkName: "Study" */ '@/pages/Study'))
const VideoBox = loadable(() => import(/* webpackChunkName: "VideoBox" */ '@/pages/VideoBox'))

const router = [
  {
    path: '/',
    title: '博客首页',
    exact: true,
    // component: Loadable({
    //   loader: () => import(/* webpackChunkName: "index" */'@/pages/Index'),
    // })
    component: Index,
  },
  {
    path: '/list',
    title: '视频教程',
    exact: true,
    // component: Loadable({
    //   loader: () => import(/* webpackChunkName: "List" */'../pages/List'),
    //   loading: Loading,
    // })
    component: List,
  },
  {
    path: '/my/',
    name: 'my',
    title: '职场技能',
    exact: true,
    // component: Loadable({
    //   loader: () => import(/* webpackChunkName: "My" */'../pages/My'),
    //   loading: Loading,
    // })
    component: My,
  },
  {
    path: '/my-hooks',
    name: 'my',
    title: '职场技能',
    exact: true,
    // component: Loadable({
    //   loader: () => import(/* webpackChunkName: "My" */'../pages/My'),
    //   loading: Loading,
    // })
    component: MyHooks,
  },
  {
    path: '/test/',
    title: 'test',
    exact: true,
    // component: Loadable({
    //   loader: () => import(/* webpackChunkName: "Test" */'../pages/Test'),
    //   loading: Loading,
    // })
    component: Test,
  },
  {
    path: '/poster',
    title: 'test',
    exact: true,
    // component: Loadable({
    //   loader: () => import(/* webpackChunkName: "Test" */'../pages/Test'),
    //   loading: Loading,
    // })
    component: Poster,
  },
  {
    path: '/study',
    title: 'study',
    exact: true,
    // component: Loadable({
    //   loader: () => import(/* webpackChunkName: "Test" */'../pages/Test'),
    //   loading: Loading,
    // })
    component: Study,
  },
  {
    path: '/videoBox',
    title: 'videoBox',
    exact: true,
    // component: Loadable({
    //   loader: () => import(/* webpackChunkName: "Test" */'../pages/Test'),
    //   loading: Loading,
    // })
    component: VideoBox,
  },
]

export default router
