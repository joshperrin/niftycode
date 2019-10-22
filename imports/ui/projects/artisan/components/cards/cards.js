import styled from 'styled-components'
import { animated } from 'react-spring/renderprops.cjs'

const Card = styled(animated.div)`
  position: fixed;
  z-index: 600;
  top: ${props => props.topspace ? props.topspace : '24vh'};
  left: 50%;
  padding: ${props => props.padding ? props.padding : '5px 35px'};
  min-width: 430px;
  transform: translate(-50%, 0);
  background: ${props => props.background ? props.background : 'rgba(255,255,255,0.85)'};
  border: 10px solid #50A751;
  box-shadow: 0 0 20px 0 #000000;
  border-radius: 5px;
  text-align: center;
  backface-visibility: hidden;
`

export default Card
