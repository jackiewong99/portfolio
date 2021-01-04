import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

window.addEventListener('scroll', function() {
  let nav = document.querySelector('nav');
  nav.classList.toggle('fixed-nav', window.scrollY > 0);
});
