<template>
  <v-col cols="4">
    <v-card max-width="400">
      <v-carousel v-if="validateProductImage()" height="300">
        <v-carousel-item
          v-for="(item, i) in validateProductImage()"
          :key="i"
          :src="item"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
      </v-carousel>
      <v-img
        v-else
        src="../assets/no-image.jpg"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="300px"
      />
      <v-card-title v-text="product.name"></v-card-title>

      <v-card-text class="text--primary">
        <v-row>
          <v-col cols="6">SKU: {{ product.SKU }}</v-col>
          <v-col cols="6">Price: {{ product.currency }} {{ product.price }}</v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true },
  },
  methods: {
    validateProductImage() {
      if (!this.product.pictures || this.product.pictures.length === 0) {
        return null
      } else {
        return this.product.pictures
      }
    },
  },
}
</script>

<style></style>
