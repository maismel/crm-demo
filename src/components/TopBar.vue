<script>
import { mapGetters } from "vuex";

export default {
  name: "TopBar",

  computed: {
    ...mapGetters("auth", ["user"]),
  },
};
</script>

<template>
  <div class="container">
    <div class="customer-info">
      <h1 class="title">
        <slot name="title"></slot>
      </h1>
      <slot name="subtitle"></slot>
    </div>
    <div class="buttons">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.customer-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title {
  font-size: 34px;
  font-weight: 600;
  color: var(--color-primary);
}

.buttons {
  display: flex;
  gap: 15px;
}

.button {
  background-color: var(--color-primary);
  color: var(--color-bg-accent);
  padding: 10px;
  height: fit-content;
  border-radius: 10px;
}

@media (width <= 768px) {
  .buttons {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
