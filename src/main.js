import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.directive('shadow', {
  bind(el) {
    el.style.boxShadow = '5px 5px 5px grey';
  }
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
