import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dushu from '@/components/dushu'
import bookclub from '@/components/bodyModule/bookclub'
import hotPage from '@/components/bodyModule/hotPage'
import lookPage from '@/components/bodyModule/lookPage'
import bookList from '@/components/bodyModule/bookList'
import clubdetail from '@/components/bodyModule/clubdetail'
import hotdetail from '@/components/bodyModule/hotdetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dushu',
      name: 'dushu',
      component: dushu
    },
    {
      path: '/bookclub',
      name: 'bookclub',
      component: bookclub
    },
    {
      path: '/lookPage',
      name: 'lookPage',
      component: lookPage
    },
    {
      path: '/hotPage',
      name: 'hotPage',
      component: hotPage
    },
    {
      path: '/bookList',
      name: '书籍列表',
      component: bookList
    },
    {
      path: '/clubdetail',
      name: '视频播放',
      component: clubdetail
    },
    {
      path: '/hotdetail',
      name: '热点详情',
      component: hotdetail
    }
  ]
})
