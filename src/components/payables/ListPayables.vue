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
        <tr v-for="(payable, index) in payablesList"  :key="index">
          <td>{{ payable.available }}</td>
          <td>{{ payable.waitingFunds }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headings: [
        'Disponível',
        'A receber',
      ],
      payablesList: [
        {
          available: 'R$ 123,40',
          waitingFunds: 'R$ 123,40',
        },
        {
          available: 'R$ 123,40',
          waitingFunds: 'R$ 123,40',
        },
        {
          available: 'R$ 123,40',
          waitingFunds: 'R$ 123,40',
        },
        {
          available: 'R$ 123,40',
          waitingFunds: 'R$ 123,40',
        },
        {
          available: 'R$ 123,40',
          waitingFunds: 'R$ 123,40',
        },
      ],
    };
  },
}
</script>
