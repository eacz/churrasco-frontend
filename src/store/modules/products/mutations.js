const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
  SET_LOADING(state, payload) {
    state.loading = payload
  },
  SET_ERROR(state, payload) {
    state.error = payload
  },
  ADD_PRODUCT(state, payload) {
    state.products = [...state.products, payload]
  },
}

export default mutations
