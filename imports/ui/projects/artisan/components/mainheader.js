import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import NavContainer from './nav/navcontainer'
import MainMenu from './nav/mainmenu'
import ProfileImage from './profileImage'
import ProfileButton from './profilebutton'

const MainHeader = ({ location }) => {
  const locationSlug = location.pathname.split('/')[3]
  const profileButtonHidden = ['product', 'supply'].includes(locationSlug)
  const profileState = profileButtonHidden && 'hide'
  return (
    <NavContainer>
      <ProfileButton
        className={profileState}
        onClick={() => {}}
      >
        <ProfileImage
          size="55px"
          src="https://i.etsystatic.com/iusa/9f4910/61652682/iusa_500xN.61652682_87v0.jpg"
        />
        <p>view profile</p>
      </ProfileButton>
      {!['product', 'supply'].includes(locationSlug) && (
        <MainMenu>
          <li className="left"><button type="button">Supplies</button></li>
          <li><button type="button" className="active">Products</button></li>
          <li className="right"><button type="button">Expenses</button></li>
        </MainMenu>
      )}
    </NavContainer>
  )
}

MainHeader.propTypes = {
  location: PropTypes.object.isRequired,
}

export default MainHeader
