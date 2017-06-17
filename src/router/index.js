import Vue from 'vue'
import Router from 'vue-router'
import FrontRouter from './../front/router'
import AdminRouter from './../admin/router'
import ErrorRouter from './../errors/router'

Vue.use(Router)

let aRoutes = [FrontRouter, AdminRouter, ErrorRouter]

export default new Router({
  linkActiveClass: 'is-active',
  mode: 'history',
  routes: aRoutes
})
