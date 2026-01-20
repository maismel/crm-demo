<script>
import ArrowIcon from "../assets/arrow-icon.svg?component";
import HomeIcon from "../assets/home-icon.svg?component";
import StatIcon from "../assets/stat-icon.svg?component";
import LogoutIcon from "../assets/logout-icon.svg?component";

export default {
  name: "Sidebar",

  components: {
    ArrowIcon,
    HomeIcon,
    StatIcon,
    LogoutIcon,
  },

  data() {
    return {
      isMobile: window.innerWidth < 768,
      isOpen: false,
    };
  },

  methods: {
    isActive(path) {
      return this.$route.path === path;
    },

    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },

    handleLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<template>
  <transition name="fade">
    <div class="overlay" v-show="isOpen" @click="toggleSidebar"></div>
  </transition>
  <div class="sidebar">
    <button v-if="isMobile" class="burger-btn" @click="toggleSidebar">
      ☰
    </button>
    <div class="sidebar-inner" :class="{ open: isOpen }">
      <div class="icons" :class="{ open: isOpen }">
        <button
          v-if="!isMobile"
          class="toggle-btn"
          :class="{ open: isOpen }"
          @click="toggleSidebar"
        >
          <ArrowIcon />
        </button>
        <router-link to="/" class="nav-item" :class="{ active: isActive('/') }">
          <label class="label" v-show="isOpen">Home</label>
          <HomeIcon />
        </router-link>

        <router-link
          to="/dashboard"
          class="nav-item"
          :class="{ active: isActive('/dashboard') }"
        >
          <label class="label" v-show="isOpen">Dashboard</label>
          <StatIcon />
        </router-link>
        <button class="nav-item btn" @click="handleLogout">
          <label class="label" v-show="isOpen">Logout</label>
          <LogoutIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  background: var(--color-primary);
}
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.sidebar {
  width: 100px;
  height: 100vh;
  position: sticky;
  top: 0;
  z-index: 10001;
}

.sidebar-inner {
  width: 250px;
  height: 100%;
  background-color: var(--color-primary);
  border-radius: 10px;
  transform: translateX(-150px);
  transition: transform 0.3s ease;
  display: flex;
  justify-content: space-around;
}

.sidebar-inner.open {
  transform: translateX(0);
}

.icons {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: flex-end;
  margin-top: 50px;
}

.icons.open {
  justify-content: start;
}

.toggle-btn {
  background: none;
  transition: transform 0.3s ease;
  margin-right: 35px;
}

.toggle-btn.open {
  transform: rotate(180deg);
}

.label {
  color: var(--color-bg-accent);
  font-size: 18px;
  font-weight: 500;
}

.nav-item {
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 80px;
  width: 100%;
  transition: background-color 0.2s ease;
  position: relative;
  padding-right: 35px;
}

.nav-item.active {
  background-color: #959de8;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

.burger-btn {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 10002;
  background: var(--color-primary);
  padding: 8px 12px;
  border-radius: 6px;
  color: var(--color-bg-accent);
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
  .sidebar-inner {
    transform: translateY(-100%);
  }
  .sidebar-inner.open {
    transform: translateY(0);
  }

  .icons {
    gap: 20px;
    margin-top: 70px;
  }
}
</style>
