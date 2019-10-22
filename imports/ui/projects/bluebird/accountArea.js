import React, { Fragment } from 'react'

import Menus from './components/menus/menus'
import AccountAreaPages from './AccountAreaPages'

const AccountArea = props => (
  <Fragment>
    {/* Menus */}
    <Menus
      toggleFeedbackSideBar={() => {}}
      toggleHelpSideBar={() => {}}
      {...props}
    />

    {/* Account Pages */}
    <AccountAreaPages {...props} />
  </Fragment>
)

export default AccountArea
