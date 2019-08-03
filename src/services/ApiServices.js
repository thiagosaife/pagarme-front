import axios from 'axios';

export class ApiServices {
  constructor() {
    this.apiURL = 'http://localhost:4000';
    this.axios = axios;
  }

  getTransactions() {
    const path = `${this.apiURL}/transactions`;
    return this.axios.get(path).then(response => response.data);
  }
}
