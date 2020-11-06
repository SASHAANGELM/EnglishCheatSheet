import Vue from 'vue';
import Router from 'vue-router';

import AppTemplate from '@/templates/AppTemplate';
import Home from './pages/Home.vue';
import Conditions from './pages/Conditions.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: AppTemplate,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/conditions',
          name: 'Conditions',
          component: Conditions
        }
      ]
    },
    {
      path: '/home',
      redirect: '/'
    }
  ]
});
