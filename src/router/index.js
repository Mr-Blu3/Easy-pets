import Vue from 'vue'
import Router from 'vue-router'
import InitComponent from '../front/components/init.front.component.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Init',
      component: InitComponent
    }
  ]
})
// ToDo: Make this file to export front and admin router child
