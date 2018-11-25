import Vue from 'vue'
import App from './components/App.vue'
import router from './routes'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(VueRouter)

import 'vuetify/dist/vuetify.min.css'

new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
