<template>
  <v-container>
    <v-row>
      <Product v-for="product in paginatedProducts" :key="product._id" :product="product" />
      <v-col cols="12">
        <v-pagination circle v-model="page" :length="Math.ceil(products.length / 9)"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Product from './Product.vue'
export default {
  components: { Product },
  data() {
    return {
      page: 1,
    }
  },
  computed: {
    ...mapState('products', {
      products: 'products',
    }),
    paginatedProducts: {
      get() {
        return this.products.slice(this.page - 1 === 0 ? this.page - 1 : (this.page - 1) * 9, this.page * 9)
      },
    },
  },
}
</script>

<style></style>
