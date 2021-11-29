import Vue from 'vue';
import Router from 'vue-router';
//四个主页面
import index from '@/page/index.vue';
import msg from '@/page/msg.vue';
import cart from '@/page/cart.vue';
import mine from '@/page/mine.vue';
//复用页面
import myAtt from '@/components/myAtt.vue';
//主页面的子页面
import area from '@/page/index.component/areaCompontent.vue';
import queding from '@/page/index.component/queding.vue';
import zixunXq from '@/page/msg.component/zixunXq.vue';

import proson from '@/page/mine.component/proson.vue';
import prosonList from '@/page/mine.component/prosonList.vue';
import prosonEdit from '@/page/mine.component/prosonEdit.vue';
import prosonSex from '@/page/mine.component/prosonSex.vue';

import intagl from '@/page/mine.component/intagl.vue';
import dingdan from '@/page/mine.component/dingdan.vue';
import records from '@/page/mine.component/records.vue';
import balance from '@/page/mine.component/balance.vue';
import toUpBalan from '@/page/mine.component/toUpBalan.vue';
import upOk from '@/page/mine.component/upOk.vue';
import tjFriends from '@/page/mine.component/tjFriends.vue';
import yjFeedback from '@/page/mine.component/yjFeedback.vue';
import lxService from '@/page/mine.component/lxService.vue';
import jiAdopt from '@/page/mine.component/jiAdopt.vue';
import mySetup from '@/page/mine.component/mySetup.vue';
//登录系列页面

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/msg',
      name: 'msg',
      component: msg
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/areaCompontent',
      name: 'area',
      component: area
    },
    {
      path: '/queding',
      name: 'queding',
      component: queding
    },
    {
      path: '/zixunXq',
      name: 'zixunXq',
      component: zixunXq
    },
    {
      path: '/myAtt',
      name: 'myAtt',
      component: myAtt
    },
    {
      path: '/proson',
      name: 'proson',
      component: proson
    },
    {
      path: '/prosonList',
      name: 'prosonList',
      component: prosonList
    },
    {
      path: '/prosonEdit',
      name: 'prosonEdit',
      component: prosonEdit
    },
    {
      path: '/prosonSex',
      name: 'prosonSex',
      component: prosonSex
    },
    {
      path: '/intagl',
      name: 'intagl',
      component: intagl
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan
    },
    {
      path: '/records',
      name: 'records',
      component: records
    },
    {
      path: '/balance',
      name: 'balance',
      component: balance
    },
    {
      path: '/toUpBalan',
      name: 'toUpBalan',
      component: toUpBalan
    },
    {
      path: '/upOk',
      name: 'upOk',
      component: upOk
    },
    {
      path: '/tjFriends',
      name: 'tjFriends',
      component: tjFriends
    },
    {
      path: '/yjFeedback',
      name: 'yjFeedback',
      component: yjFeedback
    },
    {
      path: '/lxService',
      name: 'lxService',
      component: lxService
    },
    {
      path: '/jiAdopt',
      name: 'jiAdopt',
      component: jiAdopt
    },
    {
      path: '/mySetup',
      name: 'mySetup',
      component: mySetup
    },
    {
      path: '/theLogin',
      name: 'theLogin',
      component: () =>import('@/page/theLogin/theLogin')
    }
  ]
})
