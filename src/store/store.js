import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableRows: [{
      price: 0,
      quantity: 0,
      tax: 23,
    }],
    calcLine: 0,
    totalNet: 0,
    totalTax: 0,
    totalGross: 0,
  },
  getters: {
    tableRows: state => {
      return state.tableRows
    },
    totalNet: state => {
      return state.totalNet
    },
    totalTax: state => {
      return state.totalTax
    },
    totalGross: state => {
      return state.totalGross
    },
    calcLine: state => {
      return state.calcLine
    },
  },
  mutations: {
    //calculation single line
    calcLine(state){
      state.calcLine = state.tableRows
      .map(({ price, quantity, tax }) => (price * quantity +
        (tax * (price * quantity)) / 100))
      .reduce((acc, val) => acc + val)
      .toFixed(2)
    },
    //calculation of the net amount
    totalNet(state) {
      state.totalNet = state.tableRows
        .map(({ price, quantity }) => price * quantity)
        .reduce((acc, val) => acc + val)
        .toFixed(2)
    },
    //calculation of the total tax
    totalTax(state) {
      state.totalTax = state.tableRows
        .map(({ price, quantity, tax }) => (tax / 100) * price * quantity)
        .reduce((acc, val) => acc + val)
        .toFixed(2);
    },
    //calculation of the total amount
    totalGross(state) {
      state.totalGross = state.tableRows
        .map(({ price, quantity, tax }) =>
            (tax * (price * quantity)) / 100 + price * quantity)
        .reduce((acc, val) => acc + val)
        .toFixed(2);
    },
    //new line
    new_row(state) {
      state.tableRows.push({
        price: 0,
        quantity: 0,
        tax: 23,
      })
    },
    //remove line
    delete_row(state, tableRow) {
      let index = state.tableRows.indexOf(tableRow);
      state.tableRows.splice(index, 1)
    },
    //print
    print() {
      window.print();
    },
  },
  actions: {
    //new line
    addRow ({commit}, tableRow) {
      commit ('new_row', tableRow)
    },
    //remove line
    deleteRow ({commit}, tableRow) {
      commit ('delete_row', tableRow)
    },
    //print
    print ({commit}, window) {
      commit ('print', window)
    },
    //calculate total
    calc ({commit}) {
      commit ('totalNet')
      commit ('totalTax')
      commit ('totalGross')
      commit ('calcLine')
    },
  }
})