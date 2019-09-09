/*
 *
 * Devices actions
 *
 */

import {
  LOAD_DEVICES,
  LOAD_DEVICES_SUCCESS,
  LOAD_DEVICES_ERROR,
} from './constants'

/**
 * Load devices, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_DEVICES
 */
export function loadDevices() {
  return {
    type: LOAD_DEVICES,
  }
}

/**
 * Dispatched when the devices is loaded by the request saga
 *
 * @param  {array} devices The repository data
 *
 * @return {object}        An action object with a type of LOAD_DEVICES_SUCCESS passing the devices
 */
export function devicesLoaded(devices) {
  return {
    type: LOAD_DEVICES_SUCCESS,
    devices,
  };
}

/**
 * Dispatched when loading the devices fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_DEVICES_ERROR passing the error
 */
export function devicesLoadingError(error) {
  return {
    type: LOAD_DEVICES_ERROR,
    error,
  };
}