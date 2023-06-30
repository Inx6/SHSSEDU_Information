import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'

Vue.use(VueBlu)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{
        keepAlive: true
      }
    }
  ]
})
