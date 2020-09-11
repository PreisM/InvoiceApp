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
        v-for="(item, index) in tableRows"
        :class="{firstRow: index % 2, secondRow: !(index % 2)}"
        :key="index"
      >
        <td>{{index+1}}.</td>
        <td>
          <input type="text" placeholder="Nazwa pozycji" class="focus:outline-none focus:shadow-outline rounded-lg p-1 block w-full appearance-none leading-normal text-center" />
        </td>
        <td>
          <input type="number" min="0" class="focus:outline-none focus:shadow-outline rounded-lg p-1 block w-full appearance-none leading-normal text-center" :class="price" v-model="item.price" />
        </td>
        <td>
          <input type="number" min="0" class="focus:outline-none focus:shadow-outline rounded-lg p-1 block w-full appearance-none leading-normal text-center"  :class="quantity" v-model="item.quantity" />
        </td>
        <td>
          <input type="number" min="0" max="100" class="focus:outline-none focus:shadow-outline rounded-lg p-1 block w-full appearance-none leading-normal text-center"  :class="tax" v-model="item.tax" />
        </td>
        <td>{{equal(item)}} PLN</td>
        <td>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 rounded-full noprint" @click="deleteTableRow(item)">Usuń pozycję</button>
        </td>
      </tr>
    </table>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 rounded-full noprint" @click="addTableRow()">Dodaj pozycję</button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 rounded-full noprint" @click="print()">Drukuj fakturę</button>

    <table id="summary" class="my-2 mx-auto table-auto">
      <tr>
        <th></th>
        <th>Wartość netto |</th>
        <th>Wartość VAT |</th>
        <th>Do zapłaty</th>
      </tr>
      <tr>
        <th>Razem</th>
        <th>{{totalNet()}} PLN</th>
        <th>{{totalTax()}} PLN</th>
        <th>{{totalGross()}} PLN</th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      tableRows: [
      {
        price: 0,
        quantity: 0,
        tax: 23,
      },
    ],
    };
  },
  methods: {
    addTableRow: function () {
      this.tableRows.push({
        price: 0,
        quantity: 0,
        tax: 23,
      });
    },
    deleteTableRow: function (index) {
      this.tableRows.splice(index, 1);
    },
    equal: function (item) {
      return (
        item.price * item.quantity +
        (item.tax * (item.price * item.quantity)) / 100
      );
    },
    totalTax: function () {
      return this.tableRows
        .map(({ price, quantity, tax }) => (tax / 100) * price * quantity)
        .reduce((acc, val) => acc + val)
        .toFixed(2);
    },
    totalNet: function () {
      return this.tableRows
        .map(({ price, quantity }) => price * quantity)
        .reduce((acc, val) => acc + val)
        .toFixed(2);
    },
    totalGross: function () {
      return this.tableRows
        .map(
          ({ price, quantity, tax }) =>
            (tax * (price * quantity)) / 100 + price * quantity
        )
        .reduce((acc, val) => acc + val)
        .toFixed(2);
    },
    print: function () {
      window.print();
    },
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
