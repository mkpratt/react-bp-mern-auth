/*
 *
 * Login/Logout actions
 *
 */

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

// *********************** LOGIN ***********************
export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  }
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  }
}

export function login() {
  return {
    type: LOGIN,
  }
}

export function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    token,
  }
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  }
}

// *********************** LOGOUT ***********************
export function logout() {
  return {
    type: LOGOUT,
  }
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  }
}

export function logoutFailure(error) {
  return {
    type: LOGOUT_FAILURE,
    error,
  }
}