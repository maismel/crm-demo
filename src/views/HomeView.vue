<script>
import TopBar from "../components/TopBar.vue";
import CustomerCard from "../components/CustomerCard.vue";
import Tabs from "../components/Tabs.vue";
import Description from "../components/Description.vue";
import BaseButton from "../components/BaseButton.vue";

export default {
  name: "CustomerView",

  components: {
    TopBar,
    CustomerCard,
    Tabs,
    Description,
    BaseButton,
  },

  data() {
    return {
      tabsOptions: [
        { label: "Home", value: "home" },
        { label: "Customers", value: "customers" },
        { label: "Customer information", value: "customer-info" },
      ],
      activeTab: "customer-info",
    };
  },

  computed: {
    user() {
      return this.$store.getters["auth/user"];
    },

    isCustomerInfo() {
      return this.activeTab === "customer-info";
    },
  },

  async mounted() {
    if (!this.user) {
      await this.$store.dispatch("auth/fetchUser");
    }
  },
};
</script>

<template>
  <div class="main">
    <TopBar>
      <template #title> Customer information </template>
      <template #subtitle>Customer ID: {{ user?.id }}</template>
      <template #buttons>
        <BaseButton @click="() => {console.log('Send email')}" disabled>Send email</BaseButton>
        <BaseButton @click="() => {console.log('Customize')}">Customize</BaseButton>
      </template>
    </TopBar>
    <Tabs v-model="activeTab" :options="tabsOptions" />
    <div class="customer-info" v-if="isCustomerInfo">
      <div class="cards">
        <CustomerCard />
        <CustomerCard />
      </div>
      <Description />
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 50px;
  background: var(--color-bg);
}

.customer-info {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.cards {
  display: flex;
  gap: 50px;
}

@media (width <= 768px) {
  .cards {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
