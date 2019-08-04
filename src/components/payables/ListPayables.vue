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
        <tr>
          <td>{{ `R$ ${payables.paid}` }}</td>
          <td>{{ `R$ ${payables.waitingFunds}` }}</td>
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
    transactionsApi.getCredits()
      .then((res) => {
        if (!res) {
          this.noData.show = true;
          return;
        }
        this.payables.waitingFunds = this.formatCurrency(res.fee);
      })
      .catch(err => {
        this.flash(`Ocorreu um erro ao carregar as transações: ${err}`, 'error');
      });
    transactionsApi.getDebits()
      .then((res) => {
        this.payables.paid = this.formatCurrency(res.fee);
      })
      .catch(err => {
        this.flash(`Ocorreu um erro ao carregar as transações: ${err}`, 'error');
      });
  },
  data() {
    return {
      headings: [
        'Disponível',
        'A receber',
      ],
      noData: {
        message: 'Não existe saldo para consulta',
        show: false,
      },
      payables: {
        paid: '',
        waitingFunds: '',
      },
    };
  },
  methods: {
    formatCurrency(value) {
      const currency = value.toFixed(2);
      return currency.replace('.', ',');
    },
  }
}
</script>
