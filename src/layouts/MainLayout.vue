<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "MainLayout",

  components: {
    Sidebar,
  },
};
</script>

<template>
  <div class="layout">
    <Sidebar />
    <div class="main-area">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}

.main-area {
  flex: 1;
  padding: 20px;
  background: var(--color-bg);
}

@media (max-width: 768px) {
  .main-area {
    padding-top: 60px;
  }
}
</style>
