<template>
  <div class="container mb-3">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" v-for="(heading, index) in headings" :key="index">
            {{ heading }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(transaction, index) in getTransactionsList"  :key="index">
          <td>{{ transaction.price }}</td>
          <td>{{ transaction.description }}</td>
          <td>{{ transaction.selectedMethod }}</td>
          <td>{{ transaction.cardNumber }}</td>
          <td>{{ transaction.cardOwner }}</td>
          <td>{{ transaction.cardValidityDate }}</td>
          <td>{{ transaction.cardVerificationCode }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="noData.show" class="alert alert-primary" role="alert">
      {{ noData.message }}
    </div>
  </div>
</template>

<script>
import TransactionsServices from '@/services/TransactionsServices';

export default {
  created() {
    const transactionsApi = new TransactionsServices();
    transactionsApi.getTransactions()
      .then((res) => {
        if (!res.length) {
          this.noData.show = true;
          return;
        }
        this.transactionsList = res;
      })
      .catch(err => {
        this.flash(`Ocorreu um erro ao carregar as transações: ${err}`, 'error');
      });
  },
  computed: {
    getTransactionsList() {
      return this.transactionsList;
    },
  },
  data() {
    return {
      headings: [
        'Valor da transação',
        'Descrição da transação',
        'Método de pagamento',
        'Número do cartão',
        'Nome do portador do cartão',
        'Data de validade do cartão',
        'Código de verificação do cartão (CVV)',
      ],
      noData: {
        message: 'Não existem transações cadastradas',
        show: false,
      },
      transactionsList: [],
    };
  },
}
</script>
