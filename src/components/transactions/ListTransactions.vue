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
        <tr v-for="(transaction, index) in transactionsList"  :key="index">
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
  </div>
</template>

<script>
import TransactionsServices from '@/services/TransactionsServices';

export default {
  created() {
    const transactionsApi = new TransactionsServices();
    transactionsApi.getTransactions()
      .then((res) => {
        console.log('res =>', res);
      })
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
      transactionsList: [
        {
          cardOwner: 'hdakdja',
          cardNumber: '908908',
          cardValidityDate: '21/12/2019',
          cardVerificationCode: '123',
          description: 'daskldjlasjdla',
          price: 'R$ 123,40',
          selectedMethod: 'debit_card',
        },
        {
          cardOwner: 'hdakdja',
          cardNumber: '908908',
          cardValidityDate: '21/12/2019',
          cardVerificationCode: '123',
          description: 'daskldjlasjdla',
          price: 'R$ 123,40',
          selectedMethod: 'debit_card',
        },
        {
          cardOwner: 'hdakdja',
          cardNumber: '908908',
          cardValidityDate: '21/12/2019',
          cardVerificationCode: '123',
          description: 'daskldjlasjdla',
          price: 'R$ 123,40',
          selectedMethod: 'debit_card',
        },
        {
          cardOwner: 'hdakdja',
          cardNumber: '908908',
          cardValidityDate: '21/12/2019',
          cardVerificationCode: '123',
          description: 'daskldjlasjdla',
          price: 'R$ 123,40',
          selectedMethod: 'debit_card',
        },
      ],
    };
  },
}
</script>
