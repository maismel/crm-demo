<script>
import BaseTable from "./BaseTable.vue";
import Tabs from "./Tabs.vue";
export default {
  name: "Description",
  components: {
    BaseTable,
    Tabs,
  },
  data() {
    return {
      activeTab: "contact-details",
    };
  },
  methods: {
    handleTabChange(tabValue) {
      this.activeTab = tabValue;
    },
  },
  computed: {
    products() {
      return [
        {
          parentName: "Electronics",
          productName: "Laptop",
          price: "$999",
          createDate: "2023-01-15",
        },
        {
          parentName: "Electronics",
          productName: "Laptop",
          price: "$999",
          createDate: "2023-01-15",
        },
        {
          parentName: "Electronics",
          productName: "Laptop",
          price: "$999",
          createDate: "2023-01-15",
        },
        {
          parentName: "Electronics",
          productName: "Laptop",
          price: "$999",
          createDate: "2023-01-15",
        },
      ];
    },
    columnNames() {
      return ["Parent Name", "Product Name", "Price", "Create Date"];
    },
    options() {
      return [
        { label: "Contact Details", value: "contact-details" },
        { label: "Order History", value: "order-history" },
        { label: "Preferences", value: "preferences" },
      ];
    },
  },
};
</script>

<template>
  <div class="description-container">
    <h1 class="title">Description</h1>
    <div class="table-content">
      <Tabs v-model="activeTab" :options="options" />
      <BaseTable :columnNames="columnNames" :products="products" />
    </div>
  </div>
</template>

<style scoped>
.description-container {
  display: flex;
  flex-direction: column;
  background: var(--color-bg-accent);
}
.title {
  width: 100%;
  font-size: 30px;
  font-weight: 600;
  font-weight: 600;
  color: var(--color-bg-accent);
  background: var(--color-primary);
  padding: 20px;
  border-radius: 10px;
}
.table-content {
  padding: 20px;
  background: var(--color-bg-accent);
}
</style>
