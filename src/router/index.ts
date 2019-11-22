import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/pages/Home.vue';
import Components from '../components/pages/Components.vue';
import Filters from '../components/pages/Filters.vue';

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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
