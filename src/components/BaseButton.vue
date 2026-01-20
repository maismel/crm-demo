<script>
export default {
  name: "BaseButton",
  emits: ["click"],
};
</script>

<template>
  <button class="button" @click="$emit('click')" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  background-color: var(--color-primary);
  color: var(--color-bg-accent);
  padding: 10px;
  height: fit-content;
  border-radius: 10px;
  cursor: pointer;
}

.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
