/*
 *
 * Login/Logout selectors 
 *
 */

import { createSelector } from 'reselect'
import { initialState } from './reducer';

const selectLogin = state => state.login || initialState

const makeSelectEmail = () =>
  createSelector(
    selectLogin,
    loginState => loginState.email,
  )

const makeSelectPassword = () =>
  createSelector(
    selectLogin,
    loginState => loginState.password,
  )

const makeSelectUserData = () => 
  createSelector(
    selectLogin,
    loginState => {
      return {
        email: loginState.email,
        password: loginState.password,
      }
    }
  )

const makeSelectProcessingLogin = () => 
  createSelector(
    selectLogin,
    loginState => loginState.isProcessingLogin,
  )

const makeSelectError = () => 
  createSelector(
    selectLogin,
    loginState => loginState.error,
  )

export {
  selectLogin,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectUserData,
  makeSelectProcessingLogin,
  makeSelectError,
}
