import axios from 'axios';

class TransactionsServices {
  constructor() {
    this.apiURL = 'http://localhost:3000';
    this.axios = axios;
  }

  getTransactions() {
    const path = `${this.apiURL}/transactions`;
    return this.axios.get(path).then(response => response.data);
  }
}

export default TransactionsServices;
