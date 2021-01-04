import Vue from 'vue';
import Router from 'vue-router';
import Contact from '../components/Contact.vue';
import SubmissionFail from '../components/SubmissionFail.vue';
import SubmissionSuccess from '../components/SubmissionSuccess.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Contact',
      component: Contact
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
