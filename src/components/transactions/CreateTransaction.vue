<template>
  <div class="container">
    <h4>Dados da Transação</h4>
    <b-form>
      <b-form-row>
        <b-col>
          <b-form-group>
            <b-form-input class="mb-3" id="price" v-model.lazy="transaction.price"
              v-money="formObject.price.mask" :placeholder="formObject.price.label" />
            <b-form-input class="mb-3" id="description" v-model="transaction.description"
              :placeholder="formObject.description.label" />
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
              v-mask="formObject.cardNumber.mask" :placeholder="formObject.cardNumber.label" />
            <b-form-input class="mb-3" id="card-owner" v-model="transaction.cardOwner"
             :placeholder="formObject.cardOwner.label" />
            <b-form-input class="mb-3" id="validity-date" v-model="transaction.cardValidityDate"
              v-mask="formObject.cardValidityDate.mask" :placeholder="formObject.cardValidityDate.label" />
            <b-form-input v-if="isCreditCard" class="mb-3" id="verification-code" v-model="transaction.cardVerificationCode"
            v-mask="formObject.cardVerificationCode.mask" :placeholder="formObject.cardVerificationCode.label" />
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <b-button @click="submitTransaction()" :disabled="loading" variant="success">Enviar transação</b-button>
        </b-col>
      </b-form-row>
    </b-form>
  </div>
</template>

<script>
import TransactionsServices from '@/services/TransactionsServices';
import { VMoney } from 'v-money';

export default {
  name: 'CreateTransaction',
  directives: {
    money: VMoney,
  },
  data() {
    return {
      formObject: {
        cardOwner: {
          label: 'Nome do portador do cartão',
        },
        cardNumber: {
          label: 'Número do cartão',
          mask: '#### #### #### ####',
        },
        cardValidityDate: {
          label: 'Data de validade do cartão',
          mask: '##/##/####',
        },
        cardVerificationCode: {
          label: 'Código de verificação do cartão (CVV)',
          mask: '###',
        },
        description: {
          label: 'Descrição da transação',
        },
        price: {
          label: 'Valor da transação',
          mask: {
            decimal: ',',
            thousands: '.',
            prefix: 'R$ ',
            precision: 2,
            masked: false,
          },
        },
      },
      loading: false,
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
      transaction: {},
    };
  },
  computed: {
    isCreditCard() {
      return this.transaction.selectedMethod === 'credit_card';
    },
  },
  methods: {
    submitTransaction() {
      this.loading = true;
      const transactionsApi = new TransactionsServices();
      transactionsApi.setTransaction(this.transaction)
        .then(() => {
          this.loading = false;
          this.transaction = {};
          this.flash('Transação salva com sucesso', 'success');
        })
        .catch(err => {
          const error = Object.assign({}, err);
          this.loading = false;
          this.flash(`Ocorreu um erro ao salvar a transação. Motivo:
            ${error.response.data.message}`, 'error');
        })
    }
  },
}
</script>
