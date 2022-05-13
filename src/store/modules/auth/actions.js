/* eslint-disable no-unused-vars */

import axiosInstance from '../../../shared/axiosInstance'
import { LOGIN, LOGOUT, SET_ERROR, SET_LOADING } from './mutationsTypes'
import router from '../../../router'
import { deleteTokenHeader, setTokenHeader } from '../../../utils/token'

const actions = {
  async login({ commit, dispatch }, credentials) {
    dispatch('setLoading', true)
    try {
      const { data } = await axiosInstance.post('/api/auth/login', credentials)
      commit(LOGIN, data.user)
      setTokenHeader(data.token)
      router.push('/')
    } catch (error) {
      console.log(error)
      commit(SET_ERROR, error.response.data.msg)
    } finally {
      dispatch('setLoading', false)
    }
  },
  logout({ commit, dispatch }) {
    commit(LOGOUT)
    dispatch('products/setProducts', [], { root: true })
    deleteTokenHeader()
    router.replace('/login')
  },
  setLoading({ commit }, loading) {
    commit(SET_LOADING, loading)
  },
}

export default actions
