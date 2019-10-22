import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

export const BackgroundOverlay = withRouter(styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: ${props => props.location.pathname === '/artisan/code/landing' ? 0.85 : 1};
  background: #135226;
  transition: opacity 1s;
  &.solid {
    opacity: 1;
  }
`)

export const BackgroundImage = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  text-align: center;
  background: url('/images/bg.jpg') no-repeat center center fixed;
  background-size: cover;
`
