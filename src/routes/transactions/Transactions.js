import CreateTransaction from '@/components/transactions/CreateTransaction.vue';
import ListTransactions from '@/components/transactions/ListTransactions.vue';
import Router from '@/views/Router.vue';
import Transactions from '@/components/transactions/Transactions.vue';

const routes = [
  {
    meta: {
      title: 'Transações',
    },
    path: '/transactions',
    name: 'transactions',
    redirect: { name: 'transactions-dashboard' },
    component: Router,
    children: [
      {
        path: 'dashboard',
        name: 'transactions-dashboard',
        component: Transactions,
        props: true,
        meta: {
          title: 'Dashboard de transações',
        },
      },
      {
        path: 'create',
        name: 'create-transaction',
        component: CreateTransaction,
        props: true,
        meta: {
          title: 'Criar nova transação',
        },
      },
      {
        path: 'list',
        name: 'list-transactions',
        component: ListTransactions,
        props: true,
        meta: {
          title: 'Listar todas as transações',
        },
      },
    ],
  },
];

export default routes;
