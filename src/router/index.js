import Vue from 'vue';
import Router from 'vue-router';
import App from '../App.vue';
import SubmissionFail from '../components/SubmissionFail.vue';
import SubmissionSuccess from '../components/SubmissionSuccess.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: App
    },
    {
      path: '/thanks',
      name: 'success',
      component: SubmissionSuccess
    },
    {
      path: '/404',
      name: 'fail',
      component: SubmissionFail
    }
  ]
});

export default router;
