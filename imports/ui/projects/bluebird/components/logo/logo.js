import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import LogoIcon from './logoSVG'

const largeLogoRoutes = ['/bluebird/code/landing']

const Logo = ({ location }) => {
  const large = largeLogoRoutes.includes(location.pathname)
  return (
    <LogoWrapper large={large}>
      <Link to="">
        <LogoIcon />
      </Link>
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  position: relative;
  z-index: 100;
  display: inline-block;
  padding: ${props => props.large ? '35px 0 0 30px' : '18px 15px'};
  transform: ${props => props.large ? 'none' : 'scale(0.78)'};
  transform-origin: top left;
  transition: transform 0.5s;
`

export default Logo

Logo.propTypes = {
  location: PropTypes.object.isRequired,
}
