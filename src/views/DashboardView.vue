<script>
import TopBar from "../components/TopBar.vue";
import DropdownButton from "../components/DropdownButton.vue";
import CategoryPieChart from "../components/CategoryPieChart.vue";
import AvgPriceLineChart from "../components/AvgPriceLineChart.vue";

export default {
  name: "DashboardView",

  components: {
    TopBar,
    DropdownButton,
    CategoryPieChart,
    AvgPriceLineChart,
  },

  computed: {
    products() {
      return this.$store.getters["products/products"];
    },
  },

  mounted() {
    if (!this.products || !this.products.length) {
      this.$store.dispatch("products/getProducts");
    }
  },
};
</script>

<template>
  <div class="dashboard">
    <TopBar>
      <template #title> Dashboard </template>
      <template #buttons>
        <DropdownButton
          :options="[
            { label: 'Edit', value: 'edit' },
            { label: 'Delete', value: 'delete' },
          ]"
          @select="() => {}"
        />
      </template>
    </TopBar>
    <div class="dashboard-grid">
      <CategoryPieChart />
      <AvgPriceLineChart />
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 24px;
}
</style>
