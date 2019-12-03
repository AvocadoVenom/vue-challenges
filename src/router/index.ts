import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/pages/Home.vue';
import Components from '../components/pages/Components.vue';
import Filters from '../components/pages/Filters.vue';
import Directives from '../components/pages/Directives.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/components',
    name: 'components',
    component: Components
  },
  {
    path: '/filters',
    name: 'filters',
    component: Filters
  },
  {
    path: '/directives',
    name: 'directives',
    component: Directives
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
