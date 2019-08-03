import Vue from 'vue';
import Home from '@/views/Home.vue';
import Router from 'vue-router';
import Transactions from '@/routes/transactions/Transactions';

Vue.use(Router);

const allRoutes = [];
const mainRoute = [
  {
    path: '/',
    redirect: {
      name: 'home',
    },
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home',
    },
  },
];

const routes = allRoutes.concat(mainRoute, Transactions);
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
