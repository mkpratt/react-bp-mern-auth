/*
 *
 * Devices reducer
 *
 */

import produce from 'immer'
import {
  LOAD_DEVICES,
  LOAD_DEVICES_SUCCESS,
  LOAD_DEVICES_ERROR,
} from './constants'

export const initialState = {
  deviceList: null,
  loading: false,
  error: false,
}

const deviceListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_DEVICES:
        draft.deviceList = action.devices
        break
      
      case LOAD_DEVICES_SUCCESS:
        draft.loading = false
        draft.error = false
        break

      case LOAD_DEVICES_ERROR: 
        draft.loading = false
        draft.error = action.error
        break

      default:
        return state
    }
  })

export default deviceListReducer
