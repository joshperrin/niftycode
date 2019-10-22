import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import Icon from '../../../icons/icon'

const largeLogoRoutes = ['']
const smallLogoRoutes = ['products', 'product', 'supplies', 'supply', 'expenses', 'expense']

const logoState = (location) => {
  if (largeLogoRoutes.includes(location.pathname.split('/')[3])) return 'large'
  if (smallLogoRoutes.includes(location.pathname.split('/')[3])) return 'small'
  return ''
}

const LogoIcon = () => (
  <LogoCircle>
    <Icon icon="artisan" width="90%" height="80%" color="#134420" />
  </LogoCircle>
)

const Logo = ({ location }) => (
  <LogoContent className={logoState(location)}>
    <LogoShadowOuter>
      <LogoShadow>
        <LogoIcon />
      </LogoShadow>
    </LogoShadowOuter>
    <h1>Artisan</h1>
  </LogoContent>
)

export default withRouter(Logo)

Logo.propTypes = {
  location: PropTypes.object.isRequired,
}


const LogoCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #50A751;
  padding-bottom: 8px;
  border: 4px solid rgba(13,58,28,0.90);
  box-shadow: inset 0 0 2px 0 rgba(0,0,0,0.50);
`

const LogoContent = styled.div`
  display: inline-block;
  position: absolute;
  z-index: 150;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 15px 0 30px 0;
  transform-origin: top center;
  transition: all 0.7s;
  h1 {
    opacity: 1;
    visibility: visible;
    font-family: aileron-light;
    text-align: center;
    color: white;
    font-size: 24px;
    padding-left: 6px;
    letter-spacing: 6px;
    margin: 0;
    transition: all 0.5s;
  }
  &.large {
    h1 {
      opacity: 0;
      visibility: hidden;
    }
  }
  &.med {
    transform: translateX(-50%) scale(0.6);
    height: 95px;
    h1 {
      opacity: 0;
      visibility: hidden;
    }
  }
  &.small {
    transform: translateX(-50%) scale(0.6);
    height: 95px;
    margin: 0;
    h1 {
      opacity: 0;
      visibility: hidden;
    }
  }
  &.minimized {
    position: fixed;
    top: 0;
    left: -45px;
    z-index: 200;
    transform: scale(0.3);
    h1 {
      opacity: 0;
      visibility: hidden;
    }
  }
`

const LogoShadow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 8px;
  margin: 0 auto;
  border-radius: 50%;
  background: rgba(80,167,81,0.38);
`

const LogoShadowOuter = styled(LogoShadow)`
  width: 26.5vh;
  height: 26.5vh;
  padding: 10px;
  margin-bottom: 5px;
  background: rgba(80,167,81,0.20);
`
