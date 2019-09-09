/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_AUTH_TOKEN,
  LOAD_AUTH_TOKEN_SUCCESS,
  LOAD_AUTH_TOKEN_ERROR,
} from './constants'

/**
 * Authenticate user, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadAuthToken() {
  return {
    type: LOAD_AUTH_TOKEN,
  }
}

/**
 * Dispatched when authentication is loaded the request saga
 *
 * @param  {array} token Authentication token
 * @param  {string} email The current email
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function isAuthenticated(token, user) {
  return {
    type: LOAD_AUTH_TOKEN_SUCCESS,
    token,
    user,
  }
}

/**
 * Dispatched when authentication fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_AUTH_TOKEN_ERROR,
    error,
  }
}
