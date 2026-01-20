<script>
import BaseButton from "./BaseButton.vue";
import ArrowDropDownIcon from "../assets/arrow-down-icon.svg?component";
export default {
  name: "DropdownButton",
  components: {
    BaseButton,
    ArrowDropDownIcon,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  emits: ["select"],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    select(option) {
      this.$emit("select", option);
      this.isOpen = false;
    },
  },
};
</script>

<template>
  <transition name="fade">
    <div class="overlay" v-show="isOpen" @click="toggle"></div>
  </transition>
  <div class="dropdown">
    <BaseButton @click="toggle">
      <div class="button-content">
        <slot>Actions</slot>
        <div class="icon" :class="{ open: isOpen }" @click="toggleSidebar">
          <ArrowDropDownIcon />
        </div>
      </div>
    </BaseButton>

    <ul v-if="isOpen" class="menu">
      <li v-for="item in options" :key="item.value" @click="select(item)">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<style>
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}

.dropdown {
  position: relative;
  display: inline-block;
}
.menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--color-bg-accent);
  border: 1px solid var(--color-bg);
  border-radius: 5px;
  list-style: none;
  padding: 10px 0;
  margin: 5px 0 0 0;
  width: max-content;
  z-index: 1000;
}
.menu li {
  padding: 10px 20px;
  cursor: pointer;
}
.menu li:hover {
  background-color: var(--color-bg);
}

.button-content {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.icon {
  transition: transform 0.3s ease;
}

.icon.open {
  transform: rotate(180deg);
}
</style>
