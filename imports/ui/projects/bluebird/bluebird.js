import React from 'react'
import { Route } from 'react-router-dom'

import Logo from './components/logo/logo'
import CodeWrap from '../../components/codewrap'
import { Background, BackgroundImage } from './components/background'
import Landing from './landing/landing.js'
import AccountArea from './accountArea'

const Bluebird = () => {
  window.scrollTo(0, 0)
  return (
    <CodeWrap align="left">
      {/* Logo */}
      <Route component={Logo} />

      {/* Background */}
      <Background />
      <BackgroundImage />

      {/* Landing */}
      <Route
        exact
        path="/bluebird/code/landing"
        component={Landing}
      />

      {/* Profile & Admin */}
      <Route
        exact
        path="/bluebird/code/(profile|admin)"
        component={AccountArea}
      />
    </CodeWrap>
  )
}

export default Bluebird
