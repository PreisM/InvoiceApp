<template>
  <div id="app">
    <Data />
    <Table />
    <Signatures />
  </div>
</template>

<script>
import Signatures from './components/Signatures.vue'
import Data from './components/Data.vue'
import Table from './components/Table.vue'

export default {
  name: 'App',
  components: {
    Data,
    Table,
    Signatures,
  }
}
</script>
