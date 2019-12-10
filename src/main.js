import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import { routes } from './routes';
import { store } from './store/store'

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

Vue.directive('shadow', {
  bind(el) {
    el.style.boxShadow = '5px 5px 5px grey';
  }
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
