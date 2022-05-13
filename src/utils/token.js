import axiosInstance from '../shared/axiosInstance'

export const setTokenHeader = (token) => {
  axiosInstance.defaults.headers['auth-token'] = token
}
export const deleteTokenHeader = () => {
  delete axiosInstance.defaults.headers['auth-token']
}