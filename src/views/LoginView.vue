<script>
import BaseInput from "../components/BaseInput.vue";
export default {
  name: "LoginView",

  components: {
    BaseInput,
  },

  data() {
    return {
      username: "",
      password: "",
      errors: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    validate() {
      let isValid = true;

      if (!this.username.trim()) {
        this.errors.username = "Username is required";
        isValid = false;
      }

      if (!this.password.trim()) {
        this.errors.password = "Password is required";
        isValid = false;
      }

      return isValid;
    },

    async handleLogin() {
      this.errors.username = "";
      this.errors.password = "";

      if (!this.validate()) return;

      try {
        await this.$store.dispatch("auth/login", {
          username: this.username,
          password: this.password,
        });

        this.$router.push("/");
      } catch (e) {
        this.errors.password = "Invalid username or password";
      }
    },
  },
};
</script>

<template>
  <div class="login-page">
    <div class="login-container">
      <h2 class="title">Welcome back!</h2>
      <form class="form" @submit.prevent="handleLogin">
        <div>
          <BaseInput
            v-model="username"
            placeholder="Enter username"
            :error="errors.username"
          />
        </div>
        <!-- emilys -->
        <div>
          <BaseInput
            v-model="password"
            placeholder="Enter password"
            type="password"
            :error="errors.password"
          />
        </div>
        <!-- emilyspass -->
        <button class="button" type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 300px;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(143, 106, 254, 0.3);
}

.title {
  font-size: 24px;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input {
  width: 100%;
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  padding: 4px;
}

.input::placeholder {
  color: var(--color-bg);
  font-size: 12px;
}

.button {
  background-color: var(--color-primary);
  color: var(--color-bg-accent);
  border: none;
  border-radius: 4px;
  padding: 4px;
  cursor: pointer;
}

.input-error {
  border-color: red;
}
</style>
