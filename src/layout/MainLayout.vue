<template>
  <v-main>
    <Menu />
    <router-view />
  </v-main>
</template>

<script>
import Menu from '../components/Menu.vue'
export default {
  name: 'MainLayout',
  components: { Menu },
}
</script>

<style></style>
