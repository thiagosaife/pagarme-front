<template>
  <b-container class="mb-3">
    <flash-message transitionName="flash"></flash-message>
    <div id="app">
      <ul class="nav justify-content-start">
        <li class="nav-item">
          <router-link class="nav-link active" :to="{ name: 'transactions-dashboard' }">Transações</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" :to="{ name: 'list-payables' }">Consultar saldo</router-link>
        </li>
      </ul>
      <router-view class="mt-5"/>
    </div>
  </b-container>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
