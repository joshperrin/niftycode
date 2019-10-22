import styled from 'styled-components'
import { animated } from 'react-spring/renderprops.cjs'

import { Header } from './headers'

export const Slide = styled(animated.div)`
  display: flex;
  position: fixed;
  top: 30.5vh;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10;
  height: 325px;
  width: 90vw;
  max-width: 950px;
  padding: 20px;
  border: 10px solid #50A751;
  border-radius: 5px;
  background-color: rgba(255,255,255, 0.9);
`

export const SlideContent = styled.div`
  display: inline-block;
  text-align: left;
  padding: 35px 35px 0 0;
  ${Header} {
    text-align: left;
  }
`

export const SlideText = styled.p`
  text-align: left;
  color: #4A4A4A;
`

export const SlideImage = styled.img`
  display: inline-block;
  align-self: center;
  max-width: 300px;
  padding: ${props => props.padding ? '40px' : '0px'};
`
