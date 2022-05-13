const mutations = {
  LOGIN(state, payload) {
    state.user = payload
    state.isAuth = true
    state.error = null
  },
  LOGOUT(state) {
    state.user = null
    state.isAuth = false
    state.error = null
  },
  SET_LOADING(state, payload) {
    state.loading = payload
  },
  SET_ERROR(state, payload) {
    state.error = payload
  },
}

export default mutations
