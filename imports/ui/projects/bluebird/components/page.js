import styled from 'styled-components'
import { animated } from 'react-spring'

const Page = styled(animated.div)`
  position: absolute;
  z-index: 100;
  top: 80px;
  left: 210px;
  right: -10px;
  bottom: 0;
  padding: 15px 40px;
  background: rgba(255,255,255,0.75);
  border-top: 8px solid rgba(255,255,255,0.50);
  border-left: 8px solid rgba(255,255,255,0.50);
  border-right: 8px solid rgba(255,255,255,0.50);
  box-shadow: 0 2px 20px 4px rgba(0,0,0,0.50);
  border-top-left-radius: 9px;
  text-align: left;
  overflow: hidden;
  overflow-y: scroll;
  @media print {
    top: 0;
    left: 0;
    background-color: white;
    border: none;
    border-radius: 0px;
    padding: 0;
  }
`

export default Page
