/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer'
import {
  LOAD_AUTH_TOKEN,
  LOAD_AUTH_TOKEN_SUCCESS,
  LOAD_AUTH_TOKEN_ERROR,
} from './constants'

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  auth: {
    token: null,
    user: null,
  },
}

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case LOAD_AUTH_TOKEN:
        draft.auth.token = null
        draft.auth.user = null
        draft.loading = true
        draft.error = false
        break

      case LOAD_AUTH_TOKEN_SUCCESS:
        draft.auth.token = action.token
        draft.auth.user = action.user
        draft.loading = false
        draft.error = false
        break

      case LOAD_AUTH_TOKEN_ERROR:
        draft.loading = false
        draft.error = action.error
        break
    }
  })

export default appReducer
