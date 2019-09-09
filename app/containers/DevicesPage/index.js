import React, { useEffect, memo } from 'react';
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
  logout,
} from '../LoginPage/actions'
import {
  loadDevices,
} from './actions'

import reducer from './reducer'
import saga from './saga'

import { makeSelectAuth } from '../App/selectors';
import {
  makeSelectDevices,
  makeSelectLoadingDevices,
  makeSelectError,
} from './selectors'

const key = 'devices'

export function DevicesPage({
  auth,
  devices,
  loading,
  error,
  onLogoutClick,
}) {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  useEffect(() => {
    if (!auth.token) {
      history.push('/login')
    } else {
      // load devices?
    }
  }, [auth])

  return (
    <div>
      <Helmet>
        <title>Devices</title>
        <meta
          name="description"
          content="Purascents Customer Support devices pages"
        />
      </Helmet>
      device table here
      <button
        style={{
          width: '150px',
          borderRadius: '3px',
          letterSpacing: '1.5px',
          marginTop: '1rem'
        }}
        onClick={onLogoutClick}
      >
        Logout
      </button>
    </div>
  );
}

DevicesPage.propTypes = {
  auth: PropTypes.object,
  devices: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onLogoutClick: PropTypes.func,
  // onSelectRow
}

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
  devices: makeSelectDevices(),
  loading: makeSelectLoadingDevices(),
  error: makeSelectError(),
})

export function mapDispatchToProps(dispatch) {
  return {
    onLogoutClick: () => dispatch(logout()),
    // onSelectRow
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
)(DevicesPage)
