import React, { useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import history from '../../utils/history'
import classnames from 'classnames'

import { useInjectReducer } from 'utils/injectReducer'
import { useInjectSaga } from 'utils/injectSaga'

import {
  changeEmail,
  changePassword,
  login,
} from './actions'

import reducer from './reducer'
import saga from './saga'

import {
  makeSelectAuth,
} from '../App/selectors'
import {
  makeSelectEmail,
  makeSelectPassword,
  makeSelectProcessingLogin,
  makeSelectError,
} from './selectors'

import Input from '../../components/core/Input'
import Button from '../../components/core/Button'
import { FormRow } from '../../components/core/Form/styles'

import Article from './Article'
import LoginForm from './LoginForm'

const key = 'login'

export function LoginPage({
  auth,
  email,
  password,
  loading,
  error,
  onChangeEmail,
  onChangePassword,
  onSubmitForm,
}) {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  useEffect(() => {
    if (auth.token) {
      history.push('/devices')
    }
  }, [auth])

  return (
    <Article>
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="Purascents Customer Support application login page"
        />
      </Helmet>
      <LoginForm noValidate onSubmit={onSubmitForm}>
        <FormRow>
          <Input
            id='email'
            type='text'
            label='Email'
            value={email}
            onChange={onChangeEmail}
          />
        </FormRow>
        <FormRow>
          <Input
            id='password'
            type='password'
            label='Password'
            value={password || ''}
            onChange={onChangePassword}
          />
        </FormRow>
        <FormRow>
          <Button
            type='submit'
            // disabled={loading}
            block
          >
            Log in
          </Button>
        </FormRow>
      </LoginForm>
      <p className='grey-text text-darken-1'>
        Don't have an account? <Link to='/register'>Register</Link>
      </p>
      <p className='grey-text text-darken-1'>
        <Link to='/forgot-password'>Forgot password?</Link>
      </p>
    </Article>
  )
}

LoginPage.propTypes = {
  auth: PropTypes.object,
  email: PropTypes.string,
  password: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onSubmitForm: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  loading: makeSelectProcessingLogin(),
  error: makeSelectError(),
})

export function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: evt => dispatch(changeEmail(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault()
      }
      dispatch(login())
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
)(LoginPage)