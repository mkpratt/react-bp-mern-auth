/*
 *
 * Login/Logout reducer
 *
 */

import produce from 'immer'
import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './constants'

export const initialState = {
  email: '',
  isProcessingLogin: false,
}

const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_EMAIL:
        draft.email = action.email
        break

      case CHANGE_PASSWORD:
        draft.password = action.password
        break;

      case LOGIN:
        draft.isProcessingLogin = true
        break
  
      case LOGIN_SUCCESS:
        draft.isProcessingLogin = false
        draft.error = false
        break
  
      case LOGIN_FAILURE:
        draft.isProcessingLogin = false
        draft.error = action.error
        break
  
      case LOGOUT:
        draft.isProcessingLogout = true
        break
  
      case LOGOUT_SUCCESS:
        draft.isProcessingLogout = false
        draft.error = null
        break
  
      case LOGOUT_FAILURE:
        draft.isProcessingLogout = false
        draft.error = action.error
        break
  
      default:
        return state
    }
  })

export default loginReducer
