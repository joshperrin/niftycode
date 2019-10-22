import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

export const Background = withRouter(styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: ${props => props.location.pathname === '/bluebird/code/landing' ? 0.88 : 1};
  background-image: linear-gradient(153deg, #380036 40%, #50e3c2 100%);
  transition: opacity 1.3s;
  &.solid {
    opacity: 1;
  }
`)

export const BackgroundImage = withRouter(styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  text-align: center;
  background: ${props => props.location.pathname === '/bluebird/code/landing'
    ? "url('/images/bluebird-bg.jpg')"
    : ''}
    no-repeat center center fixed;
  background-size: cover;
`)
