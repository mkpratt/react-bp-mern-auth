/*
 *
 * Login/Logout sagas 
 *
 */

import { call, select, takeLatest, put } from 'redux-saga/effects'
import jwt_decode from 'jwt-decode'

import setAuthToken from '../../utils/setAuthToken'
import request from '../../utils/request'

import {
  isAuthenticated,
} from '../App/actions'
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from './actions'

import {
  LOGIN,
  LOGOUT,
} from './constants'

import {
  makeSelectUserData,
} from './selectors'

/**
 * Async call to log in user
 * @generator
 * @function loginUserSaga
 * @yields {function} - Selects user login data
 * @yields {function} - Calls a isAuthenticated action with auth token and user data
 * @yields {function} - Calls a loginSuccess action
 * @yields {function} - Calls a loginFailure action with error object
 */
export function* loginUserSaga() {

  const userData = yield select(makeSelectUserData())
  const requestURL = '/api/users/login'
  const options = {
    method: 'POST',
    data: userData,
  }

  try {
    const { token } = yield call(request, requestURL, options)
    localStorage.setItem('jwtToken', token)
    setAuthToken(token)
    const decoded = jwt_decode(token)
    yield put(isAuthenticated(token, decoded))
    yield put(loginSuccess())
  } catch (err) {
    yield put(loginFailure(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loginSaga() {
  yield takeLatest(LOGIN, loginUserSaga)
}

/**
 * Async call to log in user
 * @generator
 * @function loginUserSaga
 * @yields {function} - Calls a getDeviceListSuccess action with device list data
 * @yields {function} - Calls a getDevicesListFailure action with error object
 */
export function* logoutUserSaga() {
  try {
    localStorage.removeItem('jwtToken')
    setAuthToken(false)
    yield put(logoutSuccess({ user: null }))
  } catch (err) {
    yield put(logoutFailure(err))
  }
}

export function* logoutSaga() {
  yield takeLatest(LOGOUT, logoutUserSaga)
}
