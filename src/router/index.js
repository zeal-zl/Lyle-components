import Vue from 'vue'
import Router from 'vue-router'
import Lyle from '../pages/Lyle.vue'
import btnPage from '../pages/btnPage.vue'
import listPage from '../pages/listPage.vue'
import navbarPage from '../pages/navbarPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lyle',
      component: Lyle
    },
    {
      path: '/btn',
      name: 'btnPage',
      component: btnPage
    },
    {
      path: '/list',
      name: 'listPage',
      component: listPage
    },
    {
      path: '/navbar',
      name: 'navbarPage',
      component: navbarPage
    }
  ]
})
