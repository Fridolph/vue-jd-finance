import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Money from '../views/Money'
import White from '../views/White'
import Zhong from '../views/Zhong'
// // import My from '../views/My'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   // component: Home
    //   component: resolve => require(['../views/Home'], resolve)
    // },
    {
      path: '/',
      name: 'home',
      // component: Home
      component: Zhong
    },
    {
      path: '/home',
      name: 'home',
      // component: Home
      component: Home
    },
    {
      path: '/money',
      name: 'money',
      component: Money
    },
    {
      path: '/white',
      name: 'white',
      component: White
    },
    {
      path: '/Zhong',
      name: 'zhong',
      component: Zhong
    }
  ]
})


