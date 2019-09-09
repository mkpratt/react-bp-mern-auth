import axios from 'axios'
// import setAuthToken from '../utils/setAuthToken'
// import jwt_decode from 'jwt-decode'

export const loginUser = userData => {
  return axios.post('/api/users/login', userData)
}

// export const logoutUser = userData => {
//   return axios.post(`/api/users/login`, userData)
// }
