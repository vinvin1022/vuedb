// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

//import resourcexx from 'vue-resource'
import axios from './http.js'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
//Vue.use(resourcexx)

Vue.config.productionTip = false


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
