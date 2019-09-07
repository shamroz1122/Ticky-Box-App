import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Drawer from '@/components/Drawer.vue'

Vue.config.productionTip = false

Vue.component('app-menu', Menu);
Vue.component('app-header', Header);
Vue.component('app-nav', Navbar);
Vue.component('app-drawer', Drawer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
