import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { useChain } from 'react-spring'

import Page from '../components/page'
import AdminUsers from './users/adminUsers'
import users from './users'
import { Header } from '../components/headers'
import { SectionMenu, MenuLines } from '../components/menus/sectionmenu'


const Admin = (props) => {
  /* --------------
    Variables
  ---------------- */
  const { location, styles, pageTransitionRef } = props
  const locationSlug = location.pathname.split('/')[2]
  const menuOffset = { '': 0, rates: '89px', feedback: '194px' }
  const adminMenu = [
    { title: 'Users', route: '/bluebird/code/admin' },
  ]

  /* --------------
    Animation Hook
  ---------------- */
  useChain([pageTransitionRef])


  return (
    <Page style={styles}>

      {/* Menu */}
      <Header size="18px" font="Black" space="20px" dark uppercase>
        Admin
      </Header>
      <SectionMenu>
        <MenuLines width="62px" left={menuOffset[locationSlug]} />
        {adminMenu.map(({ route, title }) => (
          <li key={title}>
            <NavLink exact to={route}>
              {title}
            </NavLink>
          </li>
        ))}
      </SectionMenu>

      <AdminUsers users={users} />

    </Page>
  )
}

export default Admin

Admin.propTypes = {
  styles: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pageTransitionRef: PropTypes.object.isRequired,
}
