<script>
export default {
  name: "Table",
  props: {
    products: {
      type: Array,
      required: true,
    },
    columnNames: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="column in columnNames" :key="column">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.productName">
        <td>{{ product.parentName }}</td>
        <td>{{ product.productName }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.createDate }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  table-layout: fixed;
  border: 1px solid var(--color-primary);
}

.table th,
.table td {
  border: 1px solid var(--color-primary);
  padding: 10px 0;
}
</style>
