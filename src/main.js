import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

import router from './routes'
import store from './routes'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
