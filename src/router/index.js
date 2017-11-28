/***************************************/
/*  name:    vue-router
/*  author： zhubo
/*  email：  286154864@qq.com
/*  date：   2017-11-28
/***************************************/
import Vue from 'vue'
import Router from 'vue-router'

// 主页
const mySelf = () => import('@/components/my-self');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/my-self'
    },
    {
      path: '/my-self',
      name: 'MySelf',
      component: mySelf
    }
  ]
})
