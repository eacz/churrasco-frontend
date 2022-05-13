<template>
  <v-main>
    <form class="form-add-product">
      <h2>Add Product</h2>
      <v-row>
        <v-col cols="6">
          <v-text-field
            solo
            v-model="name"
            label="Name"
            outlined
            background-color="#ffffff"
            :rules="[rules.required]"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            solo
            v-model="code"
            label="Code"
            outlined
            background-color="#ffffff"
            :rules="[rules.required]"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea name="description" v-model="description" label="Description" outlined solo auto-grow></v-textarea>
        </v-col>

        <v-col cols="6">
          <v-text-field solo v-model="price" label="Price" outlined background-color="#ffffff" />
        </v-col>
        <v-col cols="6">
          <v-text-field solo v-model="currency" label="Currency" outlined background-color="#ffffff" />
        </v-col>
        <v-col cols="8">
          <v-file-input
            v-model="pictures"
            outlined
            label="Pictures"
            prepend-inner-icon="mdi-camera"
            accept="image/png, image/jpeg"
          />
        </v-col>
        <v-col cols="4">
          <v-btn large :loading="loading" block dark color="#3c357a" elevation="3" @click="createProduct">
            Create
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-alert v-if="error" border="right" colored-border type="error" elevation="2">
            {{ error }}
          </v-alert>
        </v-col>
      </v-row>
    </form>
  </v-main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AddProduct',
  data() {
    return {
      name: '',
      description: '',
      currency: '',
      price: null,
      code: null,
      pictures: [],
      rules: {
        required: (value) => !!value || 'Required.',
      },
    }
  },
  methods: {
    async createProduct() {
      let formData = new FormData()
      formData.append('name', this.name)
      formData.append('description', this.description)
      formData.append('currency', this.currency || '$')
      formData.append('price', this.price || 0)
      formData.append('code', this.code)
      formData.append('pictures', this.pictures)
      const isOk = await this.$store.dispatch('products/createProduct', formData)
      if (isOk) this.resetForm()
    },
    resetForm() {
      this.name = ''
      this.description = ''
      this.currency = ''
      this.price = 0
      this.code = 0
      this.pictures = []
    },
  },
  computed: {
    ...mapState('products', {
      error: 'error',
      loading: 'loading',
    }),
  },
}
</script>

<style lang="scss">
.form-add-product {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex-direction: column;
  h2 {
    margin-bottom: 1.5rem;
  }
  .col {
    padding: 0 0.5rem 0.5rem 0.5rem;
  }
}
</style>
