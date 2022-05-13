/* eslint-disable no-unused-vars */

import axiosInstance from '../../../shared/axiosInstance'
import { SET_LOADING, SET_ERROR, SET_PRODUCTS, ADD_PRODUCT } from '../products/mutationsTypes'

const actions = {
  async getProducts({ commit, dispatch }) {
    dispatch('setLoading', true)
    try {
      const { data } = await axiosInstance.get('/api/products')
      commit(SET_PRODUCTS, data.products)
    } catch (error) {
      console.log(error)
    } finally {
      dispatch('setLoading', false)
    }
  },
  setProducts({ commit }, products) {
    commit(SET_PRODUCTS, products)
  },
  setLoading({ commit }, loading) {
    commit(SET_LOADING, loading)
  },
  setError({ commit }, error) {
    commit(SET_ERROR, error)
  },
  async createProduct({ commit, dispatch }, product) {
    dispatch('setLoading', true)
    try {
      const res = await axiosInstance.post('/api/products', product)
      dispatch('setError', null)
      commit(ADD_PRODUCT, res.data.product)
      return true
    } catch (error) {
      dispatch('setError', error.response.data.msg)
      return false
    } finally {
      dispatch('setLoading', false)
    }
  },
}

export default actions
