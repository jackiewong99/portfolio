import Vue from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

window.addEventListener('scroll', function() {
  let nav = document.querySelector('nav');
  let navLinks = document.querySelectorAll('.nav-link');
  nav.classList.toggle('fixed-nav', window.scrollY > 0);
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      if (window.scrollY === 0) {
        link.style.color = '#a7d7c5';
      } else {
        link.style.color = '#fdfdf8';
      }
    });
    link.addEventListener('mouseleave', () => {
      link.style.color = '#5c8d89';
    });
  });
});
