import Vue from 'vue';
import Router from 'vue-router';

import AppTemplate from '@/templates/AppTemplate';
import Home from './pages/Home.vue';
import Conditions from './pages/Conditions.vue';
import Tenses from './pages/Tenses.vue';
import IrregularVerbs from './pages/IrregularVerbs.vue';

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
        },
        {
          path: '/tenses',
          name: 'Tenses',
          component: Tenses
        },
        {
          path: '/irregular-verbs',
          name: 'IrregularVerbs',
          component: IrregularVerbs
        }
      ]
    },
    {
      path: '/home',
      redirect: '/'
    }
  ]
});
