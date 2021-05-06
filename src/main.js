import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
// import VueI18n from 'vue-i18n'

Vue.use(ElementUI)
Vue.config.productionTip = false

import router from './routes'
// import store from './store'
new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app')
