<template>
  <v-card :rounded="false" color="#3c357a" height="100" width="100vw">
    <div class="menu">
      <v-img src="../assets/logo.png" max-width="120" max-height="100" />

      <div class="items">
        <div class="item" v-for="item in items" :key="item.title">
          <v-icon small color="white"> {{ item.icon }} </v-icon>
          <router-link :to="item.link" class="white--text">{{ item.title }}</router-link>
        </div>
        <div class="item">
          <v-btn @click="logout" color="error"><v-icon>mdi-logout</v-icon> Logout </v-btn>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      items: [
        { title: 'Products', icon: 'mdi-view-dashboard', link: '/' },
        { title: 'Add Product', icon: 'mdi-plus', link: '/add-product' },
      ],
      drawer: true,
    }
  },
  methods: {
    ...mapActions('auth', {
      logout: 'logout',
    }),
  },
}
</script>

<style lang="scss">
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  .item {
    display: flex;
    align-items: center;
    &:last-child {
      margin-right: 1rem;
    }
    p {
      margin: 0;
    }
  }
}
</style>
