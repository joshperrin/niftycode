import styled from 'styled-components'
import { animated } from 'react-spring'

export const BoxGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  padding: 15px 0;
  grid-gap: 15px;
`

export const Box = styled(animated.div)`
  grid-row: 1;
  background: ${props => props.disabled ? '#C8C8C8' : 'rgba(255,255,255,0.75)'};
  box-shadow: ${props => props.disabled ? 'none' : '4px 6px 10px 9px rgba(155,155,155,0.21)'};
  border-radius: 4px;
  margin: ${props => props.margin ? props.margin : props.maxwidth && '0 auto'};
  height: ${props => props.height || 'auto'};
  max-width: ${props => props.maxWidth && props.maxWidth};
  padding: ${props => props.padding ? props.padding : '10px 0'};
  text-align: ${props => props.align ? props.align : 'center'};
  ${props => props.disabled && 'border: solid 5px #9B9B9B'}
  p {
    font-family: Metropolis-ExtraBold;
    font-size: 10px;
    color: #4A4A4A;
    letter-spacing: 0.85px;
    text-align: center;
  }
`
