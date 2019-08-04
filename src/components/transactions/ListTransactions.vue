<template>
  <div class="mb-3">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" v-for="(heading, index) in headings" :key="index">
            <p class="small font-weight-bold">{{ heading }}</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="small" v-for="(transaction, index) in getTransactionsList"  :key="index">
          <td>{{ transaction.paymentDate }}</td>
          <td>{{ formatStatus(transaction.status) }}</td>
          <td>{{ transaction.price }}</td>
          <td>{{ `R$ ${formatCurrency(transaction.fee)} (${transaction.feeApplied}%)` }}</td>
          <td>{{ transaction.description }}</td>
          <td>{{ formatMethod(transaction.selectedMethod) }}</td>
          <td>{{ `**** **** **** ${transaction.cardNumber}` }}</td>
          <td>{{ transaction.cardOwner }}</td>
          <td>{{ transaction.cardValidityDate }}</td>
          <td>{{ transaction.cardVerificationCode || '-' }}</td>
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
        'Data do pagamento',
        'Status',
        'Valor da transação',
        'Valor com a taxa',
        'Descrição da transação',
        'Método de pagamento',
        'Número do cartão (4 últimos dígitos)',
        'Nome do portador do cartão',
        'Data de validade do cartão',
        'Código de verificação do cartão (CVV)',
      ],
      methods: [
        'credit_card',
        'debit_card'
      ],
      noData: {
        message: 'Não existem transações cadastradas',
        show: false,
      },
      status: [
        'paid',
        'waiting_funds'
      ],
      transactionsList: [],
    };
  },
  methods: {
    formatCurrency(value) {
      const currency = value.toFixed(2);
      return currency.replace('.', ',');
    },
    formatMethod(payMethod) {
      return payMethod === this.methods[0] ? 'Crédito' : 'Débito';
    },
    formatStatus(payMethod) {
      return payMethod === this.status[0] ? 'Pago' : 'Aguardando pagamento';
    },
  }
}
</script>
