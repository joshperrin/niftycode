import styled from 'styled-components'
import { animated } from 'react-spring'

const AnimatedSection = styled(animated.div)`
  position: absolute;
  z-index: ${props => props.zIndex ? props.zIndex : '1'};
  left: 50px;
  right: 50px;
  ${props => props.align && `text-align:${props.align}`}
`

export default AnimatedSection
