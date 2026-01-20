<template>
  <div class="input-wrapper">
    <input
      :type="type"
      :value="modelValue"                
      @input="$emit('update:modelValue', $event.target.value)" 
      :placeholder="placeholder"
      :class="{ 'input-error': error }"
    />
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    modelValue: String,
    placeholder: String,
    type: { type: String, default: "text" },
    error: String,
  },
};
</script>


<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

input {
  width: 100%;
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  padding: 6px 8px;
}

.input-error {
  border-color: red;
}

.error-message {
  font-size: 10px;
  color: red;
}
</style>
