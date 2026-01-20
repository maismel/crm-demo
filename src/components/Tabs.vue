<script>
export default {
  name: "Tabs",

  props: {
    modelValue: String,
    options: Array,
  },
  
  emits: ["update:modelValue"],

  methods: {
    setActiveTab(tab) {
      this.$emit("update:modelValue", tab.value);
    },
  },
};
</script>

<template>
  <div class="tabs">
    <div
      v-for="tab in options"
      :key="tab.value"
      :class="['tab', { active: tab.value === modelValue }]"
      @click="setActiveTab(tab)"
    >
      {{ tab.label }}
    </div>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  gap: 10px;
  position: relative;
  border-bottom: 1px solid var(--color-primary);
  background: inherit;
}

.tab {
  padding: 15px 20px;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid transparent;
  margin-bottom: -1px;
}

.tab.active {
  font-weight: 600;
  border: 1px solid var(--color-primary);
  border-bottom: 1px solid transparent;
  background-color: inherit;
}
</style>
