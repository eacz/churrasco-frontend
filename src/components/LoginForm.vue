<template>
  <form>
    <v-row align-content="center" justify="space-between" class="login-form">
      <v-col cols="12">
        <v-text-field
          solo
          v-model="username"
          prepend-inner-icon="mdi-account"
          label="Username"
          outlined
          background-color="#ffffff"
          :rules="[rules.required]"
        />
        <v-text-field
          solo
          v-model="password"
          :prepend-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          label="Password"
          outlined
          background-color="#ffffff"
          :type="show ? 'text' : 'password'"
          @click:prepend-inner="show = !show"
          :rules="[rules.required, rules.min]"
        />
      </v-col>
      <v-col cols="6" align-self="center">
        <v-checkbox dark v-model="rememberMe" label="Remember" />
      </v-col>
      <v-col cols="6" align-self="center">
        <v-btn :loading="loading" dark color="#3c357a" elevation="3" @click="login">Log in</v-btn>
      </v-col>
      <v-col cols="12">
        <v-alert v-if="error" border="right" colored-border type="error" elevation="2">
          {{ error }}
        </v-alert>
      </v-col>
    </v-row>
  </form>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
      show: false,
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 6 || 'Min 6 characters',
      },
    }
  },
  computed: {
    isFormValid: {
      get() {
        return this.username && this.password && this.password >= 6
      },
    },
    ...mapState('auth', {
      error: 'error',
      loading: 'loading',
    }),
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', { username: this.username, password: this.password })
    },
  },
}
</script>

<style lang="scss">
.login-form {
  max-width: 400px;
}
</style>
