import Vue from 'vue'
import InitComponent from './init.component'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource-2'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(BootstrapVue)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<InitComponent />',
  components: { InitComponent }
})
