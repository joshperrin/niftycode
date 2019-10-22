import React, { Fragment } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import Logo from './components/logo'
import NavBar from './components/navBar'
import BackButton from './components/backBtn'

const Nav = () => {
  const history = useHistory()
  const location = useLocation()
  const viewingProject = location.pathname !== '/'
  return (
    viewingProject && (
      <Fragment>
        <Logo width="158px" small />
        <NavBar>
          <BackButton history={history} />
        </NavBar>
      </Fragment>
    )
  )
}

export default Nav
