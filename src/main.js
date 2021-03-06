import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import './assets/css/tailwind.css'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';

Vue.component('overlay-scrollbars', OverlayScrollbarsComponent);
Vue.use(ElementUI);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
