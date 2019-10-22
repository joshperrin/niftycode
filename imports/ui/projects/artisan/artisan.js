import React from 'react'
import { Route } from 'react-router-dom'

import Logo from './components/logo'
import Background from './background/background'
import CodeWrap from '../../components/codewrap'
import Landing from './landing/landing'
import AccountArea from './accountArea'

const Artisan = () => {
  window.scrollTo(0, 0)
  return (
    <CodeWrap>
      <Logo />
      <Background />

      <Route
        exact
        path="/artisan/code/landing"
        component={Landing}
      />

      <Route
        exact
        path="/artisan/code/(products|product)"
        component={AccountArea}
      />


    </CodeWrap>
  )
}

export default Artisan
