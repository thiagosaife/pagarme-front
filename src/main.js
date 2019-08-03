import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from '@/App.vue'
import '@/plugins/bootstrap-vue'
import BootstrapVue from 'bootstrap-vue'
import router from '@/routes';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
