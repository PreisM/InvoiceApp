<template>
  <div id="table" class="text-center table-auto my-6">
    <table class="mx-auto">
      <tr>
        <th>LP</th>
        <th>Produkt</th>
        <th>Cena</th>
        <th>Ilość</th>
        <th>Vat%</th>
        <th>Suma</th>
      </tr>
      <tr
        v-for="(tableRow, index) in tableRows"
        :class="{firstRow: index % 2, secondRow: !(index % 2)}"
        :key="index"
      >
        <td>{{index+1}}.</td>
        <td>
          <input type="text" placeholder="Nazwa pozycji" class="focus:outline-none focus:shadow-outline rounded-lg p-1 block w-full appearance-none leading-normal text-center" />
        </td>
        <td>
          <input type="number" min="0" class="focus:outline-none focus:shadow-outline rounded-lg p-1 block w-full appearance-none leading-normal text-center" :class="`price`" v-model="tableRow.price" v-on:keyup="calc" />
        </td>
        <td>
          <input type="number" min="0" class="focus:outline-none focus:shadow-outline rounded-lg p-1 block w-full appearance-none leading-normal text-center" :class="`quantity`" v-model="tableRow.quantity" v-on:keyup="calc"/>
        </td>
        <td>
          <input type="number" min="0" max="100" class="focus:outline-none focus:shadow-outline rounded-lg p-1 block w-full appearance-none leading-normal text-center" :class="`tax`" v-model="tableRow.tax" v-on:keyup="calc"/>
        </td>
        <td>{{ equal(tableRow) }} PLN 
        <td>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 rounded-full noprint" :disabled="index === 0" @click="deleteRow(tableRow)">Usuń pozycję</button>
        </td>
      </tr>
    </table>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 rounded-full noprint" @click="addRow()">Dodaj pozycję</button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 rounded-full noprint" @click="print()">Drukuj fakturę</button>
    <table id="summary" class="my-2 mx-auto table-auto">
      <tr>
        <th></th>
        <th>Wartość netto |</th>
        <th>Wartość VAT |</th>
        <th>Do zapłaty</th>
      </tr>
      <tr>   
        <th>Razem </th>
        <th>{{ totalNet }} PLN</th>
        <th>{{ totalTax }} PLN</th>
        <th>{{ totalGross }} PLN</th>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "Table",
  computed: {
    ...mapGetters(['totalGross', 'totalNet', 'totalTax', 'tableRows', 'calcLine']),
  },
  methods: {
    calc() { 
      this.$store.dispatch('calc')
    },
    equal(tableRow) {
      return (
        tableRow.price * tableRow.quantity +
        (tableRow.tax * (tableRow.price * tableRow.quantity)) / 100
      );
    },
    ...mapActions (['addRow', 'deleteRow', 'print',]), 
  },
};
</script>

<style scoped>
.firstRow {
  background-color: #bee3f8;
}
.secondRow {
  background-color: #90cdf4;
}
@media print {
  .noprint {
    display:none;
  }
}
</style>
