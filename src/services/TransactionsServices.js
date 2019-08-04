import axios from 'axios';

class TransactionsServices {
  constructor() {
    this.baseURL = 'http://localhost:3000';
    this.axios = axios;
  }

  getCredits() {
    const path = `${this.baseURL}/credits`;
    return this.axios.get(path).then(response => response.data);
  }
  getDebits() {
    const path = `${this.baseURL}/debits`;
    return this.axios.get(path).then(response => response.data);
  }
  getTransactions() {
    const path = `${this.baseURL}/transactions`;
    return this.axios.get(path).then(response => response.data);
  }
  setTransaction(transaction) {
    const path = `${this.baseURL}/transactions`;
    return this.axios.post(path, transaction).then(response => response.data);
  }
}

export default TransactionsServices;
