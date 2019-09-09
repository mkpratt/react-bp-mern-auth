/*
 *
 * Devices selectors 
 *
 */

import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectDevices = state => state.devices || initialState

const makeSelectDevices = () =>
  createSelector(
    selectDevices,
    devicesState => devicesState.deviceList
  )

const makeSelectLoadingDevices = () =>
  createSelector(
    selectDevices,
    devicesState => devicesState.loading
  )

const makeSelectError = () =>
  createSelector(
    selectDevices,
    devicesState => devicesState.error
  )

export {
  selectDevices,
  makeSelectDevices,
  makeSelectLoadingDevices,
  makeSelectError
}