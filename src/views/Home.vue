<template>
  <v-main>
    <Spinner v-if="loading" message="Loading products..." />
    <Products v-else />
  </v-main>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Products from '../components/Products.vue'
import Spinner from '../components/Spinner.vue'
export default {
  components: { Spinner, Products },
  name: 'Home',
  methods: {
    ...mapActions('products', {
      getProducts: 'getProducts',
    }),
  },
  computed: {
    ...mapState('products', {
      loading: 'loading',
    }),
  },
  mounted() {
    this.getProducts()
  },
}
</script>
