import Vue from 'vue'
import Router from 'vue-router'
import Galery from '../src/components/Galery'
import About from '../src/components/About'
import MoreInfo from '../src/components/MoreInfo'

Vue.use(Router)

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Galery
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/info/:id',
      component: MoreInfo,
    }
  ]
})