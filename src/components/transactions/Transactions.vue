<template>
  <b-row class="container mb-3">
    <b-col>
      <router-link class="nav-link active" :to="{ name: 'list-transactions' }">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Listar transações</h5>
            <h6 class="card-subtitle mb-2 text-muted">Lista todas as transações criadas</h6>
          </div>
        </div>
      </router-link>
    </b-col>
    <b-col>
      <router-link class="nav-link active" :to="{ name: 'create-transaction' }">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Criar nova transação</h5>
            <h6 class="card-subtitle mb-2 text-muted">Cria uma nova transação</h6>
          </div>
        </div>
      </router-link>
    </b-col>
  </b-row>
</template>

<script>

export default {
}
</script>
