<template>
  <div class="container">
    <h4>Dados da Transação</h4>
    <b-form>
      <b-form-row>
        <b-col>
          <b-form-group>
            <b-form-input class="mb-3" id="price" v-model="transaction.price"
              :placeholder="labels.price" />
            <b-form-input class="mb-3" id="description" v-model="transaction.description"
              :placeholder="labels.description" />
            <b-form-select v-model="transaction.selectedMethod" id="payment-methods">
              <option disabled value="">Tipo de transação</option>
              <option v-for="(method, index) in paymentMethods" :key="index"
                :value="method.value">
                {{ method.text }}
              </option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group>
            <b-form-input class="mb-3" id="card-number" v-model="transaction.cardNumber"
              :placeholder="labels.cardNumber" />
            <b-form-input class="mb-3" id="card-owner" v-model="transaction.cardOwner"
             :placeholder="labels.cardOwner" />
            <b-form-input class="mb-3" id="validity-date" v-model="transaction.cardValidityDate"
              :placeholder="labels.cardValidityDate" />
            <b-form-input v-if="isCreditCard" class="mb-3" id="verification-code"
              v-model="transaction.cardVerificationCode" :placeholder="labels.cardVerificationCode" />
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <b-button @click="submitTransaction()" variant="success">Enviar transação</b-button>
        </b-col>
      </b-form-row>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'CreateTransaction',
  data() {
    return {
      labels: {
        cardOwner: 'Nome do portador do cartão',
        cardNumber: 'Número do cartão',
        cardValidityDate: 'Data de validade do cartão',
        cardVerificationCode: 'Código de verificação do cartão (CVV)',
        description: 'Descrição da transação',
        price: 'Valor da transação',
      },
      paymentMethods: [
        {
          text: 'Crédito',
          value: 'credit_card',
        },
        {
          text: 'Débito',
          value: 'debit_card',
        },
      ],
      transaction: {
        cardOwner: '',
        cardNumber: '',
        cardValidityDate: '',
        cardVerificationCode: '',
        description: '',
        price: '',
        selectedMethod: '',
      },
    };
  },
  computed: {
    isCreditCard() {
      return this.transaction.selectedMethod === 'credit_card';
    },
  },
  methods: {
    submitTransaction() {
      console.log(this.transaction);
    }
  },
}
</script>
