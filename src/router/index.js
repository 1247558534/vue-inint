import Vue from 'vue'
import Router from 'vue-router'
import other from '@/pages/other'
import index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/other',
      name: 'other',
      component: other,
      meta:{
           keepAlive: true
      }
    },
     {
       path: '/',
       name: 'index',
       component: index,
        meta: {
          keepAlive: true
        }
       
     }
  ]
})
