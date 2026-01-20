<script>
import EditIcon from "../assets/edit-icon.svg?component";
import { mapGetters } from "vuex";

export default {
  name: "CustomerCard",

  components: {
    EditIcon,
  },

  computed: {
    ...mapGetters("auth", ["user"]),
    userInfo() {
      if (!this.user) return [];

      return [
        { label: "Username", value: this.user.username },
        { label: "Email", value: this.user.email },
        { label: "First name", value: this.user.firstName },
        { label: "Last name", value: this.user.lastName },
        { label: "Gender", value: this.user.gender },
        { label: "Date of birth", value: this.user.birthDate },
      ];
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">Customer Information</div>
      <EditIcon />
    </div>
    <div class="info">
      <div class="info-item" v-for="(item, index) in userInfo" :key="index">
        <p>{{ item.label }}</p>
        <p>{{ item.value }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
  background: var(--color-bg-accent);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-title {
  font-size: 22px;
  font-weight: 700;
}

.info {
  display: flex;
  flex-direction: column;
  max-height: 250px;
  overflow-y: auto;
}

.info::-webkit-scrollbar {
  width: 8px;
}

.info::-webkit-scrollbar-thumb {
  background-color: #A7A7FB;
  border-radius: 4px;
}

.info::-webkit-scrollbar-track {
  background-color: #f0f0f0;
  border-radius: 4px;
}

.info-item {
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
</style>
