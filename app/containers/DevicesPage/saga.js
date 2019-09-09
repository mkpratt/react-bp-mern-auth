/*
 *
 * Devices sagas 
 *
 */

import { call, select, takeLatest, put } from 'redux-saga/effects'

import {
  devicesLoaded,
  devicesLoadingError,
} from './actions'

import {
  LOAD_DEVICES,
} from './constants'

/**
 * Async call to get devices
 * @generator
 * @function loginUserSaga
 * @yields {function} - Calls a isAuthenticated action with auth token and user data
 * @yields {function} - Calls a loginSuccess action
 * @yields {function} - Calls a loginFailure action with error object
 */
export function* getDevices() {

  const requestURL = '/api/devices'
  const options = {
    method: 'GET',
  }

  try {
    const { devices } = yield call(request, requestURL, options)
    yield put(devicesLoaded(devices))
  } catch (err) {
    yield put(devicesLoadingError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* devicesData() {
  yield takeLatest(LOAD_DEVICES, getDevices)
}