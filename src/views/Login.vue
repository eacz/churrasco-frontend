<template>
  <v-main>
    <div class="login">
      <v-img src="../assets/logo.png" max-width="350" max-height="230" />
      <LoginForm />
    </div>
  </v-main>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
export default {
  components: { LoginForm },
}
</script>

<style lang="scss">
.login {
  padding: 1rem;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #3b3575;
  background: linear-gradient(180deg, rgba(59, 53, 117, 1) 0%, rgba(9, 9, 121, 1) 100%);
}
</style>
