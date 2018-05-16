import Vue from 'vue'
import Router from 'vue-router'

import Seaction from '@/components/Seaction'
import HomeContent from '@/components/HomeContent'
import AddContent from '@/components/AddContent'
import CollectList from '@/components/CollectList'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Seaction',
      component: Seaction,
      redirect: '/Seaction/HomeContent',
      children: [
        {
          path: '/Seaction/HomeContent',
          name: 'HomeContent',
          component: HomeContent
        },
        {
          path: '/Seaction/AddContent',
          name: 'AddContent',
          component: AddContent
        },
        {
          path: '/Seaction/CollectList',
          name: 'CollectList',
          component: CollectList
        },
        {
          path: '/Seaction/News',
          name: 'News',
          component: News
        }
      ]
    }
  ]
})
