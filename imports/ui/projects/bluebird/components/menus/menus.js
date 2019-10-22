import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import Icon from '../../../../icons/icon'
import SideMenu from './sidemenu'
import MutedMenu from './mutedmenu'
import IconMenu from './iconmenu'
import ProfileIcon from '../profileIcon'

const submenu = ['About', 'FAQ', 'Legal & Privacy']
const profilemenu = ['Help', 'Feedback']

const pages = ['Home', 'Company', 'Employees', 'PayPeriods', 'Reports', 'Admin']

const Menus = ({
  history, location, toggleHelpSideBar, toggleFeedbackSideBar,
}) => {
  const menu = pages

  const menuAction = { Help: toggleHelpSideBar, Feedback: toggleFeedbackSideBar }

  return (
    <Fragment>

      {/* Profile Menu */}
      <IconMenu>
        {profilemenu.map((item, index) => (
          <li key={index}>
            <button type="button" onClick={() => {}}>
              <Icon icon={item} height="22px" />
              <p>{item}</p>
            </button>
          </li>
        ))}
        <li>
          <button
            className={location.pathname === '/profile' ? 'active' : ''}
            onClick={() => {}}
            type="button"
          >
            <ProfileIcon />
          </button>
        </li>
      </IconMenu>

      {/* Main Menu */}
      <SideMenu>
        {menu.map((item, index) => {
          if (item.menu !== 'exclude') {
            return (
              <li key={index}>
                <button
                  className={
                    (location.pathname === '/bluebird/code/admin' && item === 'Admin')
                      ? 'active'
                      : ''
                  }
                  onClick={() => {}}
                  type="button"
                >
                  {item}
                </button>
              </li>
            )
          }
          return null
        })}
      </SideMenu>

      {/* Footer Menu */}
      <MutedMenu>
        {submenu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </MutedMenu>
      <Copyright>
        © 2018 Aleant Systems Inc.
      </Copyright>
    </Fragment>
  )
}

export default withRouter(Menus)

Menus.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  toggleFeedbackSideBar: PropTypes.func.isRequired,
  toggleHelpSideBar: PropTypes.func.isRequired,
}

const Copyright = styled.p`
  position: absolute;
  bottom: 10px;
  left: 15px;
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 9px;
  transition: transform 0.5s;
`
