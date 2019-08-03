import ListPayables from '@/components/payables/ListPayables.vue';
import Router from '@/views/Router.vue';

const routes = [
  {
    meta: {
      title: 'Saldo',
    },
    path: '/payables',
    name: 'payables',
    redirect: { name: 'list-payables' },
    component: Router,
    children: [
      {
        path: 'list',
        name: 'list-payables',
        component: ListPayables,
        props: true,
        meta: {
          title: 'Saldo do cliente',
        },
      },
    ],
  },
];

export default routes;
