import axios from 'axios';

class TransactionsServices {
  constructor() {
    this.baseURL = 'http://localhost:3000';
    this.axios = axios;
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
