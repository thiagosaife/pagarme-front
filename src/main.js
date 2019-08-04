import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from '@/App.vue'
import '@/plugins/bootstrap-vue'
import BootstrapVue from 'bootstrap-vue'
import router from '@/routes';
import VueFlashMessage from 'vue-flash-message';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-flash-message/dist/vue-flash-message.min.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 15000,
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
