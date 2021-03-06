/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import Header from 'components/Layout/Header'
import Footer from 'components/Footer'

import LoginPage from 'containers/LoginPage/Loadable'
import DevicesPage from 'containers/DevicesPage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'

import GlobalStyle from '../../global-styles'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100%;
`

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s"
        defaultTitle="Pura Customer Support"
      >
        <meta name="description" content="Pura customer support application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/devices" component={DevicesPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  )
}
